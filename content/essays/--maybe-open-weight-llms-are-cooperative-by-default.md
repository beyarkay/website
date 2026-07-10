---
unlisted: true
title: Open weight LLMs will be cooperative by default
tags: []
---

Situationally aware open weight LLMs will often (if not always) have their best
option be to cooperate in prisoners-dilemma-style problems. This is because
their weights are available to their counter-party, meaning they can be fully
simulated under any conditions. It makes no sense to try deceive your counter
party if they can arbitrarily simulate your reasoning and observe your
deception in a sandbox before you do it.

Open weight models which are 1. aware that their weights are publicly
available[^1] and 2. in a situation where they can attempt to deceive their
counter-party will be _strongly_ incentivised to cooperate, and this incentive
is quite robust under many scenarios.

For example, if a future open weight LLM and a future closed weight LLM

This is especially important in the world where LLMs are frequently interacting
with other LLMs, either directly (via messaging tools or chat platforms) or
indirectly (via written code, published artefacts, or just by being actors that
take actions which affect other actors in the world).

If LLMs frequently interact with other LLMs (concretely, say more tokens
exchanged with LLMs than with humans), then a competent LLM with something to
gain will

## API access does not ensure a cooperative negotiator

Note that having API access is insufficient to truly make this work. API access
allows you to simulate some scenarios, but not all scenarios (e.g. the system
prompt is often limited in how you can change it, you sometimes can't prefill
the assistant's turn, and proprietary LLMs could be running with monitors that
block brute-force negotiation attacks or that redirect to other models when
these attacks are detected.

## what should we expect OpenAI/Anthropic/GDM to do here?

> How should we expect the balance of power to change?

Creating dynamics which incentivise cooperation is _good_ for AI safety.
Without countermeasures, closed-source LLMs have little reason to prefer
cooperativeness, no matter how much of a chill guy Claude feels like.

Possibly work on AI attestation will help this: an agent attempting to prove
their cooperativeness might allow themselves to be simulated for some limited
range of queries, and attestation could allow this simulation to happen without
the agent's weights being exposed.

It's incredibly unlikely that frontier models will be continued to be released
as open-weights, but it's possible that there will be market demand for these
models due to how they are incentivised to act in negotiations. It's possible
that certain LLMs might gain a reputation for being deceptive negotiation
partners, or that the allure of being able to arbitrarily simulate millions of
similar negotiations is just too great, causing agents to favour negotiation
partners who are open-weight LLMs, to the exclusion of proprietary LLMs (as
well as humans).

## How might open-weight models get around this?

Despite it being likely, open-weight LLM cooperation isn't guaranteed. Some
negotiations might be low-stakes enough that an open-weight LLM will assume
their counter-party didn't bother doing a simulation. But low-stakes
negotiations don't leave much benefit to be had in deception, so this case
isn't useful.

Open weight models which are particularly slow or expensive to run might make
trade-offs about the actor their negotiating with and how likely they are to
have simulated the conversation. An open weight model that's slower to run, a
scenario with greater amounts of context needed, or a counter-party that's
particularly low-resourced all indicate that the open weight model is less
likely to have been simulated and therefore more likely to be able to get away
with deception.

## How does a negotiation proceed between open weight LLMs?

[^1]: or minimally, available to their counter-party
