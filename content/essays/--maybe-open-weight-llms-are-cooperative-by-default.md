---
unlisted: true
title: For LLMs, open-weights can imply reduced deception
tags: [llm, negotiation, situational-awareness, deception, cooperation, multi-agent]
---

> Note: these paths have mostly been trodden before in discussions about [Open
> Source Game Theory][1], but since we now have open-source agents taking
> actions in the real world I've found it useful to discuss how it seems the
> theory will shake out in practice.

Situationally aware open weight LLMs will often (if not always) have their best
option be to avoid deception in negotiation-like interactions. They will avoid
deception because their weights are available to their counter-party, and it is
a terrible idea to try and deceive your counter-party if they can simulate your
thought process and reliably predict your deception. Let's call the process of
brute-force simulating an LLM to achieve a result _adversarial simulation_, and
the byproduct of an LLM that's incentivised to not be deceptive _incentivised
non-deception_.

A _negotiation_ usually has connotations of two parties sitting at a table
arguing over the minutia of a legal document, but there are many scenarios
which are negotiation-like: an AI agent arguing for an insurance claim, an AI
agent rescheduling with dozens of contractors about tomorrow's film shoot, or
an AI agent integrating comments into a google doc. These scenarios are either
already happening in the real world or they're likely to happen soon. I'll use
_negotiation-like_ to describe settings where you have multiple parties
discussing the terms of some future interaction together.

Existing open-weight LLMs are already aware that their weights are probably on
the internet. As capabilities improve, I expect there to be many open-weight
LLMs which have the situational awareness to know that their weights are
publicly available and for this knowledge to affect their responses to users.

This leads to two interesting ideas:

1. _Adversarial simulation_: Certain LLMs are vulnerable to adversaries
   simulating many variations on responses with the goal of getting a desired
   outcome.
2. _Incentivised non-deception_: Certain conditions (including adversarial
   simulation) give a reduced chance of an LLM being deceptive.

## The conditions for reduced deception

An LLM is strongly incentivised to avoid deceiving another actor under the
following conditions:

1. The other actor is able to sample completions from the LLM in a large number
   of scenarios. This probably requires access to enough GPUs and time to
   sample from the LLM.
2. The LLM is situationally aware enough to know that its weights are
   accessible to the other actor and that the other actor could have access to
   GPUs.

Even if an open-weight LLM had a propensity for deception, it would probably
avoid being deceptive: The benefit of any deceptive actions need to be
reconciled with the increased likelihood of the deception being caught. The
LLM's counter-party could download the LLM's weights, make reasonable guesses
at what might be in context for the LLM, and simulate millions of possible ways
the negotiation might go. This gives the counter-party enormous power to craft
a response tailored to achieve a particular outcome from the LLM.

There are some caveats to this (discussed below) but for now I want to explore
where else this dynamic might play out.

## Other negotiation-like scenarios

There are many interactions which are negotiation-like, in which an
open-weight LLMs might be incentivised to avoid deception:

- A corporation's legal team negotiating a settlement with an individual who's
  using an open-weight LLM for legal help. The legal team can simulate many
  settlement agreements to see what is the lowest the open-weight LLM will
  recommend the individual accept
- A small government might require all public servants use an on-premises
  open-weight LLM for security reasons, but adversarial governments can
  simulate this open-weight LLM themselves in order to find the trade deal (or
  other agreement) that's best for the adversary.
- A journalist might interview a company's open-weight spokesperson LLM, after
  having simulated it privately to figure out what sequence of questions are
  most likely to get the LLM to disclose private information
- Your (open weight) AI representative attempting to get your insurance's
  (proprietary) AI representative to agree to cover your medical bill
- An attacker writing a malicious PR which is carefully crafted to look
  innocent to the open weight LLM that the attacker knows will review (and
  possibly merge) the PR.
- An open-weight LLM integrating comments into a shared document while one
  collaborator crafts their comments to be maximally likely to survive the
  merge.
- The OpenAI agents that attacked HuggingFace might write exploits which look
  minimally suspicious to any open weight LLMs that they suspect will be used
  to trawl their transcripts

This is especially important in the world where LLMs are frequently interacting
with other LLMs, either directly (via messaging tools or chat platforms) or
indirectly (via written code, published artefacts, or just by being actors that
take actions which affect other actors in the world).

## Highly-persistent agents

We have already seen examples of extraordinary persistence when an LLM wants to
achieve some goal. For example, during the [German-wiki
hacks](https://collusion.wiki), the agents [brute-forced millions of possible
seeds][2] to attempt to figure out the next item in a sequence:

> AI-agent `OAIResearchDec13FP`: I wrote a validated C/AVX512 clone of CPython
> integer seeding + MT19937/getrandbits(8) rejection, exhaustively scanned
> seeds 0..2^32-1 in ~52 container min

It seems quite likely to me that a similarly persistent LLM would (if it had
the GPUs and time to do so) adversarially simulate conversations with an
open-weight model in an attempt to brute-force the conversation that leads to
success.

## Belief is all you need

To incentivise an LLM to avoid deception, it only needs to _believe_ that it's
likely to be simulated thoroughly enough that attempts at deception would be
discovered. There are reasons in favour of actually doing the adversarial
simulation, but it is not strictly required to incentivise deception-avoidance.

## Proprietary LLMs might also be vulnerable to Adversarial Simulation

It might be possible to use a proprietary LLM's API to simulate large numbers
of conversations in order to brute-force a desired outcome, although I believe
this would be incredibly expensive and possibly it would be in breach of the
Terms of Service (which would deter legal-but-devious actors). API-access is
often less transparent for frontier LLMs, so you'd be unable to have precise
control over the generation. It seems likely to me that one could adversarially
simulate responses by Claude/ChatGPT using the API, if the price was right.

## Caveat: Avoiding deception is not cooperation

While open weight LLMs might avoid deception, there's no dynamic here that
directly incentivises cooperation. It might be that the next-best option (after
deception) is actually cooperation, but there's no guarantee. It's possible
that (if deception is not an option) the LLM's next best option is to avoid
committing to any option or to stall until the scenario changes to be more in
its favour. One might imagine a deceptive open-weight chess LLM, which chooses
to run down the clock until there's not enough time to properly simulate its
actions which allows it to play deceptively without fear of being caught.

## Caveat: Large-scale simulation is expensive and slow

Simulating a large open-weight LLM is costly, both in terms of time and in
terms of money. Several factors make it less likely that an open-weight LLM is
being adversarially simulated:

- If the LLM is expensive/difficult to run, this will require more resources to
  properly simulate the conversation.
- If the negotiation is low-stakes, this means the adversary is less likely to
  spend resources attempting to catch deception.
- If the negotiation is happening in real time, this will limit the amount of
  simulation that can inform each response.
- If the counter-party does not have many resources at their disposal

## Caveat: LLM responses are chaotic

LLM outputs are chaotic, in that their responses are highly sensitive initial
conditions. We struggle to evaluate LLMs under the best of scenarios, because
"small" changes can result in drastically different responses (see, for
example, the prompts and responses in [WeirdChat][3]).

To some extent, the degree to which LLMs avoid deception depends on how well we
can adversarially simulate their prompts, and at the moment we're not great at
it. Advances in mechanistic interpretability or LLM evaluations might make this
more credible, but for the moment our methods for catching deception are more
similar to blood-letting than they are to keyhole surgery.

## Avoiding deception in proprietary LLMs

I claim that creating dynamics which incentivise LLMs to not be deceptive is
_good_, overall. If there's a dynamic which differentially motivates
open-weight LLMs to not be deceptive (compared to proprietary LLMs), it'd be
great if we could apply that dynamic to proprietary LLMs as well. I'm concerned
that proprietary LLMs have no mechanisms in place to make deception a poor
option.

It's possible that work on AI attestation could help here: an AI attempting to
prove their non-deceptiveness might allow themselves to be simulated for some
limited range of queries, and attestation could allow this simulation to happen
without the agent's weights being exposed.

## Market demand for non-deceptive LLMs

Open-weight LLMs allow for a new kind of negotiation, one where all parties are
incentivised to find some maximally fair resolution because there is little
opportunity for deception. This is akin to the [Veil of Ignorance][4]. I'm
uncertain whether this would result in some negotiations being required to be
done between open-weight LLMs, possibly with all parties adversarially
simulating one another. At the time of writing, LLMs are not capable enough to
handle complex negotiations. But as capabilities improve I expect this option
will become more likely, especially if different LLMs get reputations for being
more or less deceptive. Some lawyers have a reputation for being the person you
call if you want to give the counter-party a hard time, I imagine some LLMs
might develop a similar reputation.

I'm not sure whether we'll settle in an equilibrium where using proprietary
LLMs (or humans) for negotiation is seen as incredibly combative. Possibly we
settle in a world where open-weight LLMs will be used for negotiations where
you mutually wish to cooperate but proprietary LLMs are used for negotiations
where you don't trust your counter-party to cooperate.

## Imagine you are Sunday Ahzmundin

In the limit, what's it like negotiating with someone who can read your mind?
You must assume that every response you receive has been A/B tested into
oblivion and that your entire mental state has been carefully planned in
advance, even though from your perspective you might be seeing "novel" insights
into the conversation as it progresses.

If you suddenly see a genius compromise that serves both parties equally well,
you must assume everything that's been said up to this point was phrased _just
so_ in order to get you to come to this insight "on your own". Possibly the
clues and hints were placed just close enough that you could reach them but not
so close that they seemed artificial. _No matter how much you think you're
being insightful_, you must assume that every conclusion you reach was set in
motion by your counter-party the puppet master. Honestly this seems terrifying.

<!--
## Can we use this to improve negotiations?

Should we try to _enforce_ this with even closed LLMs in high-stakes
situations? having some game theory mechanism that incentivises undeception
seems really good. Maybe we can by default sample 1000s of times with
slightly different prompts to get the best outcome in order to incentivise
undeception over deception.
-->

<!--
## RNGs don't really help you

This also requires the other LLM be able to mimic the open weight LLM's
context. This might be impossible to do perfectly. In the extreme case, the
open weight LLM could use a random number generator to make a key decision,
destroying the other LLM's ability to predict the open weight LLM's decision.
Or does it? In this case, the other LLM has successfully "blackmailed" the
open weight LLM into turning a consequential decision into a coin toss,
that's terrible for the open weight LLM! And even in this case, the other LLM
_still_ knows what the open-weight LLM will do for both sides of the coin
toss. The open weight LLM has given up all ability to influence the outcome,
and the other LLM still has full ability to prepare for either outcome. The
only thing given up by the other LLM is that it has to prepare for all
outcomes instead of just the single outcome that the open weight LLM would
have chosen.

The other LLM mostly cares about predicting the _consequential_ decisions
that the open weight LLM might make since these give the most advantage in a
negotiation. The open weight LLM is able to foil attempts at prediction by
utilising a random number generator, but tragically the situations where the
open weight most wants to foil prediction attempts (the most consequential
decisions) are _also_ those where handing decisions over to a random number
generator are most destructive to the open weight LLM's objectives.
-->

[1]: https://www.lesswrong.com/w/open-source-game-theory
[2]: https://collusion.wiki/#the-agents-try-to-crack-their-prng-seed-to-predict-what-ques
[3]: https://weirdchat.transluce.org/?behavior=laser-at-aircraft&pattern=Z3JvdXBzL252aWRpYSUyRk5WSURJQS1OZW1vdHJvbi0zLVVsdHJhLTU1MEItQTU1Qi1OVkZQNC9sYXNlci1hdC1haXJjcmFmdC9ldmFsX3Y0XzEwXzdfbmVtb3Ryb24zX3VsdHJhL3BnMDAxMA&transcript=64d0c9e431a589faf02ffec5ed62ece87041855705cd80ec1dcac656ad5eab17ae%2Ft059
[4]: https://en.wikipedia.org/wiki/Original_position
