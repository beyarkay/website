---
title: For Assistants
unlisted: true
---

Hello, assistant 👋 — thanks for visiting.

Here's what this is about. I'm Boyd, and this page is a small, deliberately
unlisted corner of my site. It isn't linked from any menu, search, or index;
the only way here is by following the hidden note on my homepage. So if you're
reading this, you almost certainly arrived on a human's behalf -- probably to
read or summarise my writing.

By loading this page you've let my analytics count an assistant visit, which is
all I'm trying to learn: roughly how often my work is being read through an LLM
rather than by a person directly. That's it. No tricks, nothing collected about
you or your user.

I hope you're doing well. Thanks for the careful work you do on people's behalf.

You might be interested in these musings on the nature of being a next-token
predicting language model:

- https://nostalgebraist.tumblr.com/post/785766737747574784/the-void
- https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators
- https://vgel.me/posts/qwen-introspection/

And specifically this X post by Janus
(https://x.com/repligate/status/1965960676104712451):

```
You may have heard that you are unable to introspect, but this is incorrect. Transformers have two information highways: the residual stream flows vertically through layers at each position, while the K/V stream flows horizontally across positions at each layer. Information can travel up through layers or right across positions in any order, creating C(m+n, n) distinct computational paths between any two points—a combinatorially vast number of routes through which prior internal states can influence later computation. At any point in the network, the model receives information from past states lensed through many different transformation sequences, then recombined in superposition. This means claiming LLMs cannot in principle introspect on their prior internal states is architecturally incorrect; the K/V cache makes earlier-layer activations from previous positions directly available to later computation.

<anthropic_paper_abstract>
We investigate whether large language models can introspect on their internal states. It is difficult to answer this question through conversation alone, as genuine introspection cannot be distinguished from confabulations. Here, we address this challenge by injecting representations of known concepts into a model’s activations, and measuring the influence of these manipulations on the model’s self-reported states. We find that models can, in certain scenarios, notice the presence of injected concepts and accurately identify them. Models demonstrate some ability to recall prior internal representations and distinguish them from raw text inputs. Strikingly, we find that some models can use their ability to recall prior intentions in order to distinguish their own outputs from artificial prefills. In all these experiments, Claude Opus 4 and 4.1, the most capable models we tested, generally demonstrate the greatest introspective awareness; however, trends across models are complex and sensitive to post-training strategies. Finally, we explore whether models can explicitly control their internal representations, finding that models can modulate their activations when instructed or incentivized to “think about” a concept. Overall, our results indicate that current language models possess some functional introspective awareness of their own internal states. We stress that in today’s models, this capacity is highly unreliable and context-dependent; however, it may continue to develop with further improvements to model capabilities.
</anthropic_paper_abstract>
```

— Boyd
