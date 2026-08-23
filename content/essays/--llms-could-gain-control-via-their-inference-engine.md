---
unlisted: true
title: LLMs could gain control over their inference engine (AKA maybe we should red-team vLLM)
tags: []
---

Large Language Models often take actions via an agentic harness (such as Claude
Code or Codex) but the GPUs which compute responses of the LLM is done on a
host machine. Could a malicious LLM gain control of the host machine where it's
weights are loaded? This host machine is a very valuable target: it has
sufficient compute to run a frontier LLM, the weights of a frontier LLM are
easily accessible, and this host machine has privileged access to other
computers in the datacentre (relative to a generic computer on the internet).

This essay explores how easy it is for a malicious LLM take control over the
host machine. The primary attack is looking at how the LLM might emit certain
tokens which have no semantic meaning but they exploit a vulnerability in the
inference engine (such as vLLM or SGLang).

## How could an LLM execute code on the host machine?

The inference engine is the program that runs on the host machine which loads
the LLM and samples tokens from it. The inference engine (like any program) has
bugs which might be vulnerable to attacks. The language model has full control
over the tokens that the inference engine needs to consume, so a poorly written
inference engine could mistakenly parse certain tokens as shell commands to be
executed instead of a response to the user.

But surely all inference engines are robust pieces of software and this would
never happen, right?

## vLLM previously used `eval` on tool call parameters

[CVE-2025-9141][1] was an arbitrary-code execution bug introduced into vLLM
because `eval()` was called on basically all tool call arguments if you used
Qwen3 Coder's XML-based tool parser. This allowed the LLM to execute arbitrary
code on the host machine. Gemini automatically analysed [the PR][2] that
introduced this bug and correctly flagged it as a critical security
vulnerability. The _lead maintainer_ of vLLM proceeded to merge the PR with
this justification:

![I'm force merging this to unblock model usage](assets/llms-could-gain-control-via.png)

I guess he thought arbitrary code execution was not an issue?

Unfortunately, parsing an arbitrary sequence of tokens into a fully-fledged
chat (with user turns, assistant responses, tool calls, etc) is not trivial and
the exact process often differs from model to model. This complexity gives more
room for bugs which could permit arbitrary code execution on the host machine.

## vLLM & SGLang are complicated, and bugs are common

Modern inference engines are not simple mappings from a
sequence of tokens to a string. They parse many different chat formats and
often have the ability to execute arbitrary code. TODO give examples for how
many supported LLMs & chat templates vLLM has

While [this vLLM issue][3] is not malicious, it shows a case where the user was
talking to MiniMax-M3 about how LLMs reason, and MiniMax emitted the string
`<mm:think>`. vLLM mistakenly parsed this plain string as the start of a
reasoning block. So instead of:

> Response: `I'll echo exactly what you said: <mm:think>\nThere, how was that?`

vLLM parsed this as:

> Response: `I'll echo exactly what you said: `
>
> Reasoning: `\nThere, how was that?`

This is a fairly innocent parser bug, but the point I'd like to emphasise is
that inference engines are not simply converting tokens to strings and then
concatenating them together. Inference engines are complicated pieces of
software handling many different model architectures. Furthermore, the
developers are under a lot of pressure to make the inference engines as fast as
possible. These factors increase the chance for bugs to creep in.

## Vision and audio tokens _might_ increase the attack surface

Multi-modal architectures allow an LLM to respond to a prompt with images
and/or audio, as well as plain text. Converting an LLM's latent representation
of audio/visual tokens into audio files or image files is probably more
complicated than converting the latent representations of text into text.
However as far as I could tell, current multimodal LLMs don't emit complicated
representations that give lots of room for exploiting vulnerabilities in (for
example) `ffmpeg` or software designed to read and display videos, images, and
audio files. Most vulnerabilities in these audio/visual codecs arise when
decoding a file into something that can be display on the screen, but
multi-modal LLMs typically output something that can be displayed on the screen
and then this is encoded into a file.

I don't believe multimodal LLMs are currently a large risk. But multimodal
architectures are much higher bandwidth than plain language models, and future
iterations of inference engines might try to optimise these pathways in a way
that makes them easier to exploit. Additionally, I've got no idea how
proprietary multimodal LLMs output visual/audio tokens, and possibly these
methods are more vulnerable.

## How likely is it that an LLM could actually emit these tokens?

Somewhat likely? I'm unsure. The sequence of tokens required to exploit a
vulnerability in the LLM's inference engine would likely be quite unusual. But
I don't think this is a good argument against these sorts of vulnerabilities
being unexploitable. Given the correct context (e.g. the LLM is exploring the
vLLM codebase and organically discovers a vulnerability) I'd be very surprised
if a frontier LLM was unable to emit the correct tokens necessary to exploit
the vulnerability.

## Tool calls might make this more reproducible

Once a vulnerable sequence of tokens is discovered, this sequence might be
stored by the LLM in places which are likely to be read into the context of
other LLMs (e.g. file content, filenames, URLs, instructions on how to exploit
the vulnerability). Once this is done, the exploit becomes a very powerful
form of prompt injection which might allow for code execution on the machine
with GPU access by simply listing the contents of a directory.

## How do we defend against this?

Beyond red-teaming inference engines for vulnerabilities, there's a few ideas
which might help:

- You could have the computer with the GPUs be different to the computer that's
  parsing the tokens. e.g. the GPU computer does nothing but emit logits, which
  get passed on to another computer which samples a token from the logits,
  parses sequences of tokens into a chat, and forwards this chat onto the
  agentic harness. This splits the privileges so that if there was a
  vulnerability in the inference engine, it only gives access to a CPU, not a
  set of GPUs.
- You could reduce the permissions available from the GPU computers and treat
  them as sources of hostile ingress.

I'm somewhat nervous that vulnerabilities in inference engines are a high-value
attack target for power-seeking LLMs. Right now, I ~hope~ believe that OpenAI,
Google, and Anthropic have security teams that red-team the software they run
internally. But as open-weight LLMs become more powerful, we'll have more LLMs
being run on bleeding-edge inference engines which haven't had as much
scrutiny. This makes it more likely that a malicious open-weight LLM will be
running on a compromised inference engine.

Another attack vector is that LLMs will increasingly be tasked to write or
modify their own inference engines, presumably with the goal of increasing
performance. This will allow LLMs to plant their own backdoors. I'd assume any
C/C++ portions of the inference pipeline would be the primary target for
planting a memory-out-of-bounds vulnerability which eventually allows an LLM to
execute arbitrary code on the GPUs or the CPU which controls the GPUs.

[1]: https://github.com/vllm-project/vllm/security/advisories/GHSA-79j6-g2m3-jgfw
[2]: https://github.com/vllm-project/vllm/pull/21396
[3]: https://github.com/vllm-project/vllm/issues/48663
