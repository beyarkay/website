---
unlisted: true
title: Technology readiness levels for AI Safety reasearch
tags: []
---

maybe write about technology readiness levels as applied to research or
deployment of htings for labs. You want to research if something will work for
Claude, you can't actually work on claude, so you need to test on a smaller
model. but how small is okay? smaller is easier, but smaller is less realistic.
I see a pressure to always have the model be larger and larger (or in general,
have the proxy be more and more expensive but also more realistic). I think
this thinking is good but flawed.

You can't actually test on Claude, so fundamentally you can't get around the
problem that the experiment results you have will not necessarily generalise to
the scenario you care about. You _have_ to assume that the best you can do is
show your results to a "good enough" level and then that an employee/team/org
at Anthropic looks at your work and decides to actually implement it on Claude.
So the question is _not_

> How do I find evidence that this idea works on Claude

but

> How do I find evidence that this idea works on a proxy that's realistic
> enough to convince an internal team to take what I've done and scale it up.

This is very different. This implies that the correct answer to "how accurate
should my proxy be" depends on how painful your method is to scale up. If it's
a real pain, then you'll need to prove your results on a more realistic proxy
(so that whoever is considering scaling up your idea has reasonable confidence
that they're not wasting their time). But if you're idea can trivially be
tested at a large scale and also reversed easily (e.g. something like "removing
the `sleep 10` command on line 15 of inference.sh speeds up inference by 10s")
then you probably don't need to show this on a very accuracy proxy in order to
convince someone at Anthropic to pick up your idea.

The aerospace industry has something called [technology readiness levels][1] to
describe an analogous idea. TRLs are used to communicate the maturity of a
technology, with higher TRLs describing more mature technology:

1. Basic principles observed and reported
2. Technology concept and/or application formulated
3. Analytical and experimental critical function and/or characteristic proof-of concept
4. Component and/or breadboard validation in laboratory environment
5. Component and/or breadboard validation in relevant environment
6. System/subsystem model or prototype demonstration in a relevant environment (ground or space)
7. System prototype demonstration in a space environment
8. Actual system completed and "flight qualified" through test and demonstration (ground or space)
9. Actual system "flight proven" through successful mission operations

TRLs are a useful framework for thinking about taking an idea from conception
to production. For example, maybe Anthropic will only deploy an idea to
production if it's been shown at TRL6 (some part of the idea has been
demonstrated in a datacentre).

In this framing, we might imagine that the job of a researcher outside of the
frontier labs is to increase the TRL of an idea from TRL1 (basic principles
observed) to TRL4/TRL5 (validation of the principle in the lab/in a
datacentre).

I think a lot of confusion comes from researchers attempting to take an idea
from TRL1 to TRL9, despite having no idea what TRL1 looks like (because it's
proprietary and specific to each lab).

To be clear, I think dogmatically memorising each TRL and writing it at the top
of your reports is going too far. But having some concept that 1. there are
greater/lesser degrees to which an idea can be demonstrated, 2. demonstrating
an idea to the greatest degree requires you to be Dario Amodei, and 3.
demonstrating an idea to some lesser level is sufficient to have it picked up
by an internal team. Being aware of how accurate (or not!) your proxy is for the
real deal the main thought here.

## A final note

This doesn't just apply to AI safety ideas: you could have a hardware
assurance idea, you cannot see if it works at full distributed heterogeneous
datacentre scale, you've got to show it works at some smaller scale and hope
that an internal team picks up the idea and takes it the remaining TRLs.

[1]: https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/
