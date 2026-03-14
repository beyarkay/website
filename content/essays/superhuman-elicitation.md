---
title: Eliciting superhuman capabilities with merely-human data
tags: [research, llms, ai, experiments]
unlisted: true
---

> [NOTE]
>
> This is a short write-up of a side experiment I ended up running during MATS
> 9.0 on Team Shard with Alex Turner & Alex Cloud. The results were interesting
> and somewhat surprising (hence this post) but at the end of the day unrelated
> to the core project so I won't be exploring this further until the end of
> MATS.

TL;DR in a very toy setting, I show initial evidence that if you take an LLM
with some latent high level of capabilities and you finetune it on examples of
mediocre capabilities, you can elicit the latent high level of capabilities.

# High-level idea

If an LLM has some strong (e.g. expert/superhuman) capability, but is "hiding"
this capability, then as we finetune this LLM on some weak (e.g.
novice/human-level) examples of this capability, we can measure its performance
and show that the model exhibits its strong capability before learning to only
exhibit weak capability.

Train an LLM to have some "baseline" behaviour which is uninteresting, but also
train it to exhibit some "expert"-level behaviour only when given a password.

In the real-world case we care about, this would be analogous to a model that
displays a

# Setup

Several small transformers were pretrained from scratch using a GPT2-style
architecture and tokenizer.

Following the password-locking methodology of [Greenblatt et al.
(2024)](https://arxiv.org/abs/2405.19550), several transformers were further
trained on a basic arithmetic dataset (e.g. `123+321=` -> `444`) but only when
given a password. The dataset is

I'll be at EAG, my swapcard is [here](), come and say hi!
