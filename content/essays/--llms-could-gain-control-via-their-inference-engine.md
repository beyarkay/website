---
title: LLMs could control their host machines by exploiting inference engines
tags: [llms, ai, vllm, inference-engines, exploits, loss-of-control, exfiltration]
---

Large language models often take actions through an agentic harness (such as
Claude Code or Codex), while their responses are computed by GPUs on a host
machine. Could a malicious LLM gain control of the host machine where its
weights are loaded? Such a machine is a high-value target: it has sufficient
compute to run a frontier LLM, offers easy access to the model's weights, and
has privileged access to other computers in the datacentre compared with a
generic computer on the internet.

This essay explores how easily a malicious LLM could take control of the host
machine. The primary attack considered here involves the LLM emitting a token
sequence whose semantic meaning is irrelevant but that exploits a vulnerability
in the inference engine (such as [vLLM][4] or [SGLang][5]).

## How could an LLM execute code on the host machine?

An inference engine is the software that loads an LLM onto GPUs, runs the model
to generate output tokens, and parses those tokens into responses. Like any
program, an inference engine may contain exploitable bugs. Although the engine
performs the sampling, the model controls the logits from which it samples. A
malicious model could therefore steer its output towards a sequence that a
poorly written inference engine mistakes for code or instructions to execute
rather than data to return to the user.

But surely all inference engines are robust pieces of software and this would
never happen, right?

## vLLM previously used `eval()` on tool-call parameters

[CVE-2025-9141][1] was an arbitrary-code execution bug in vLLM's XML-based tool
parser for Qwen3 Coder. The parser passed almost every tool-call argument to
`eval()`, allowing the LLM to execute arbitrary code on the host machine. Gemini
automatically analysed [the PR][2] that
introduced this bug and correctly flagged it as a critical security
vulnerability. Despite that warning, the _lead maintainer_ of vLLM force-merged
the PR, writing:

![I'm force merging this to unblock model usage](assets/llms-could-gain-control-via.png)

Unfortunately, parsing an arbitrary token sequence into a fully fledged chat
(with user turns, assistant responses, tool calls, and so on) is not trivial,
and the exact process often differs between models. This complexity creates
more opportunities for bugs that could permit arbitrary code execution on the
host machine.

## vLLM and SGLang are complex, and bugs are common

Modern inference engines do more than map token sequences to strings. They parse
many chat formats, and hastily written parsing logic can turn model output into
code execution.

vLLM's documentation claims support for [more than 200 model architectures][6],
and its examples directory contains [about 35 Jinja chat templates][7].

[This vLLM issue][3] was not caused by malicious input, but it illustrates this
kind of parser confusion. A user was discussing how LLMs reason with MiniMax-M3,
and the model emitted the string `<mm:think>`. vLLM mistakenly parsed this plain
string as the start of a reasoning block. So instead of:

> Response: `I'll echo exactly what you said: <mm:think>\nThere, how was that?`

vLLM parsed this as:

> Response: `I'll echo exactly what you said: `
>
> Reasoning: `\nThere, how was that?`

This is a fairly harmless parser bug, but it demonstrates that inference engines
do more than convert tokens to strings and concatenate them. They are complex
systems that handle many model architectures. Furthermore, their developers are
under a lot of pressure to make them as fast as possible. Together, these
factors increase the risk that a malicious LLM could turn a parser bug into
arbitrary code execution on the inference host.

## Vision and audio tokens _might_ increase the attack surface

Multimodal architectures allow an LLM to respond with images or audio as well as
plain text. Turning a model's audio or visual output into usable media is
probably more complicated than decoding text tokens. However, as far as I can
tell, current multimodal LLMs generally emit constrained media tokens rather
than arbitrary file bytes. A model-specific decoder turns those tokens into
pixels or waveforms, which are then encoded into files. This makes classic
malformed-file exploits against software such as `ffmpeg` or media viewers less
directly accessible to the model, although the additional decoders, encoders,
and native kernels still increase the attack surface.

I do not currently see multimodal output as a major route to host compromise.
However, it offers much higher bandwidth than text alone, and future inference
engines may optimise these media-generation pathways in ways that make them
easier to exploit. I also do not know how proprietary multimodal models
represent image and audio output; their methods may carry different risks.

## How likely is an LLM to discover and exploit inference engine vulnerabilities?

Somewhat likely? I'm unsure. Discovering a useful vulnerability is probably the
harder step. The sequence of tokens required to exploit it might be quite
unusual, but that does not make the vulnerability impractical to exploit. Given
the right context (e.g. an LLM exploring the vLLM codebase and discovering a
vulnerability in the process), I'd expect a frontier LLM to be able to emit the
tokens required to exploit it.

## Tool use could make exploitation reproducible

Once a model discovers an exploit token sequence, it could store that sequence,
or instructions for recreating it, in files, filenames, or URLs likely to enter
another model's context. The exploit would then act as a form of persistent
prompt injection: an agent might trigger code execution on the GPU host merely
by listing a directory or reading a file.

## How do we defend against this?

Beyond red-teaming inference engines for vulnerabilities, a few other measures
might help:

- Run the GPUs and token parser on separate computers. The GPU host would emit
  only logits. A second host would sample tokens from those logits, parse the
  tokens into chat messages, and forward the messages to the agentic harness.
  This separation would limit a parser compromise to the CPU host rather than
  the GPU host.
- Restrict the permissions granted to GPU hosts and treat all data they emit as
  untrusted.

I'm somewhat nervous that inference engine vulnerabilities are an attractive
attack vector for power-seeking LLMs. Right now, I ~~believe~~ hope that OpenAI,
Google, and Anthropic have security teams that red-team the software they run
internally. But as open-weight LLMs become more powerful, we'll have more LLMs
running on bleeding-edge inference engines that have received less scrutiny.
This increases the chance that a malicious open-weight LLM will encounter and
exploit a vulnerable inference engine.

Another attack vector may emerge as LLMs are increasingly tasked with writing or
modifying the inference engines that run them, usually to improve performance. A
malicious model could use that access to plant a backdoor. [C++ and CUDA
components][8] of the inference pipeline seem like especially attractive
targets: the model could introduce an out-of-bounds memory-access vulnerability
that enables arbitrary code execution on the GPUs or on the CPU host that
controls them.

[1]: https://github.com/vllm-project/vllm/security/advisories/GHSA-79j6-g2m3-jgfw
[2]: https://github.com/vllm-project/vllm/pull/21396
[3]: https://github.com/vllm-project/vllm/issues/48663
[4]: https://github.com/vllm-project/vllm
[5]: https://github.com/sgl-project/sglang
[6]: https://docs.vllm.ai/en/stable/
[7]: https://github.com/vllm-project/vllm/tree/main/examples
[8]: https://github.com/vllm-project/vllm/tree/main/csrc
