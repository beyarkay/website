---
title: Common LLM failure modes
tags: [living-document]
---

I use the various language models a _lot_ for my research, and this means I end
up seeing quite a lot of their failure modes. I'm going to try track of them
here, as an archive for my future self to answer "did this behaviour start with
Opus 4.7 or 4.8"?

# Claude Fable 5

## W&B sweeps using discrete values for continuous variables

For some reason, Fable (and I think Opus as well, but I can't remember) seem to
like using discrete values in W&B sweeps, when the variable is continuous and
so should rather be a continuous variable:

In this snippet, β is continuous but Fable sets it to be one of the following
values: `[0, 0.005, 0.01, 0.02, 0.05, 0.1]`.

[Claude Code link](https://claude.ai/code/session_01KUsnHi32NX6oLK9rDex3HV)

> A β sweep it is — better experiment design anyway. Let me read the sweep
> machinery first (config shape, how pods/deadlines are computed for long
> runs), since 5M-step runs are ~3h each and the pod budgeting has to fit.
>
> [...]
>
> **Ready on the branch** (head `d57715e`):
>
> - `ci/sweep_ppo.yaml` now sweeps **β ∈ {0, 0.005, 0.01, 0.02, 0.05, 0.1} ×
>   seeds {1,2,3}** = 18 runs, each 5M steps from `h76h80yb`, metric
>   `eval/thput`, `run_cap: 18`. β=0 is the control arm, 0.1 re-tests the known
>   over-anchor at the longer horizon, and the log-spacing brackets the
>   projected 0.2–0.3 nat sweet spot.

# Claude Opus 5

## Constant praise for the user's ideas

Less obvious than the blatant sycophancy of previous Claudes, but still there's
so many "you're right" and "good call"

> `⏺ You're right, and that's a real error on my part. [...]`

> `⏺ Fair challenge. [...]`

> `⏺ Good call. [...]`

> `⏺ Clear. [...]`

> `⏺ You're right, and the thing I missed makes most of that spec redundant.`

## Imprecise commentary

Opus has a real tendency to say things without actually saying anything. These
comments communicate _nothing_ but add a weird sense of anticipation that's not
helpful.

> ```
> ⏺ Good call. Let me verify one more thing first, because it changes what's worth writing down.
>
> ⏺ Bash(uv run --with pandas --with pyarrow python -c "…")
>
> ⏺ That changes things — this is the most useful fact in the dataset and nothing in the repo records it.
> ```

> `⏺ Fair challenge. Here's exactly what I computed, and it's weaker evidence than my phrasing implied.`

> `⏺ You're right, and that's a real error on my part.`

> `The one thing I can't do — your call to run:`

## A fascination with problems that "bite"

Opus often talks about problems as "biting" us in various ways

> `[...] and the specific carve-out that bit that behaviour before [...]`

> `## Five things that will bite us`

## 'The X worth naming' or 'The Y worth stating clearly' etc

Opus 5 likes announcing & signposting its sentences in this way.

> `The trap worth naming:`

## Ending with a negation

Opus likes ending phrases with negations such as "and neither matter" or "and
one is the exception", e.g.:

> `[...] Let me check the one part that isn't trivial.`

> `⏺ Concretely: two places build a sv2.py command line, and neither would have carried --root.`

> `⏺ Clear. That makes the review a hard gate on vector creation, not a step someone can forget.`
