---
title: In support of narrow ASI
tags: [nasi, asi, ai, narrow-ai, essays, opinions]
---

<!--
TODO: include something about the minimum level of intelligence required to
solve a problem. So problems which require an AGI that has full knowledge of
human nature, social interactions, politics, science, philosophy, etc, would be
AGI-complete problems. Those problems would be unsolvable by NASI. But I'd
argue that lots of worthwhile problems are not AGI-complete, and can be solved
with just NASI


Also add something about self driving cars being NASI, and obviously providing
benefit

Remove "ASI" from the terminology, as different people have different
meainings. the current state might not represent AI, nor AGI
-->

The _core_ problem with building [AGI](definitions#agi)/[ASI](definitions#asi)
is we want the good things[^3] without the bad things[^4], and the common
assumption is that the good and the bad are two sides of the same coin; any
attempt at building ASI without also enabling the bad things is deemed
impossible.

I claim that systems which are super-human in narrow domains but intentionally
sub-human in most domains ([NASI](definitions#nasi)[^6]) will provide most of
the benefits of ASI without the dangers of ASI. I will argue that:

- NASI can solve many existing problems in the world
- NASI makes deception significantly more difficult
- NASI makes regulation of dangerous capabilities easier
- NASI makes it easy to share non-dangerous capabilities with the entirety of
  humanity while incurring very little risk

## Why might NASI be safer than ASI?

Lots of the dangers of ASI come from a general-purpose intellect being able to
act on the world via text[^1], as opposed to something more constrained. For
example, it is far easier to imagine ChatGPT convincing a human to do arbitrary
things than it is to imagine [StockFish][5], [AlphaZero][6], [AlphaGo][3], or
[AlphaFold][4][^5] convincing a human to do arbitrary things. This is due to
the medium of chess moves/go moves/protein structures[^2] being inherently less
convincing than regular text.

There are two parts at play here, and they work together:

1. The artificial narrow intelligence behind AlphaFold is (probably) not
   capable of general cognition and reasoning.
2. Even if AlphaFold were capable of general cognition, the output of AlphaFold
   is severely constrained (i.e. atom locations with confidences).

While ASI is, by definition, better at humans at all tasks, even an ASI will
find manipulating someone to be trickier if the only means of communication the
ASI has with the human is atom locations. Manipulating someone is far easier
via text (or voice, or video) because people are taught from a young age to
give text write-access into the brain, so that thoughts can be shared
efficiently. This write-access is incredibly useful, but also dangerous.

It is entirely possible that ASI could still manipulate humanity via atom
locations alone, but all means of manipulation would require some level of
indirection. For example, one method might be to make protein predictions that
are incorrect in subtle ways that either slow down progress in key areas, or --
more nefariously -- make protein predictions that result in unexpected and
unwanted interactions between AI-designed proteins, eventually leading to
behaviour that is advantageous to the ASI.

Language is dangerous because language directly inserts ideas into your brain.
Ancient Greek is not dangerous to me because I do not speak ancient Greek, and
so before any ancient Grecian wishes to manipulate me, they must figure out how
to communicate with me.

The ability of a given communication medium to be used for manipulation of
other players could be tested by designing a strategy game where AI players
could gain significant reward from communication, and then restricting the only
means of communication between the players to the communication medium under
question. It seems clear that protein predictions map less intuitively onto
ideas such as "I'll pay you 100BTC to synthesize this molecule" than literal
text "I'll pay you 100BTC to synthesize this molecule". Chess moves might be
easier to communicate this information, since the trade could be expressed as a
sacrifice, although conveying the mapping of "you capture my queen" to "100BTC"
and "synthesizing this molecule" as "I capture your bishop" might be difficult.

Limited communication mediums are our friends, and we should embrace them if we
want to reduce the risk of manipulation. NASI deals exclusively with
hyper-specific outputs, thereby reducing the risk of manipulation.

## NASI can solve many existing problems in the world

What's the purpose of ASI anyway? Many will say it's for various humanitarian
or world-improving side effects, problems which people struggle to solve but a
smarter intelligence might be able to solve faster. Such problems are cancer,
global warming, political coordination and unrest.

## NASI makes deception significantly more difficult

## NASI makes regulation of dangerous capabilities easier

## NASI makes benefits-sharing nearly risk-free

---

Furthermore, it's not clear what sort of general intelligence can arise if the
output is protein predictions. It seems likely that the model would gain some
sort of model for atom-level physical interactions, but could such a model
learn manipulative debate? Investigating this question would require training a
narrow ASI and then attempting to put it into situations where it would be able
to make use of any latent knowledge it gained that might be applicable to "the
bad stuff".

One other advantage of NASI is that it would be _significantly_ easier to
prevent misuse. Since any single intelligence would be super-human in only one
domain, we would need multiple NASIs in order to achieve the goals of current
ASI-builders (curing cancer, world hunger, etc). Each of these NASIs would, by
definition, be specialised in one particular area of expertise and sub-human in
other areas. NASIs specialised in high-risk areas of expertise (biology, AI
research, chemistry, negotiation, politics) and the datasets usable to train
them could be specifically targeted for regulation while NASIs in low-risk
areas (logistics, supply-chains) and the respective datasets could be put under
lesser regulations or none at all.

General purpose datasets which would be applicable to AGI/ASI could be more
thoroughly protected, given the known dangers of AGI/ASI.

Moreover, concentrating on NASI is a more incentive-compatible solution than
stopping or pausing AI research until alignment research can catch up. Focussed
efforts on NASI have already been shown via AlphaFold, [GenCast][1],
[GraphCast][2] to provide benefits

NASI would be an explicitly worse intelligence when compared to ASI, but it
~solves the alignment problem while still giving us 90% of the benefit that we
are hoping to get from ASI. At the very least it buys us time to _actually_
solve super-alignment, while being immensely easier to regulate. We could
straightforwardly outlaw general intelligences, in favour of narrow
intelligences. Narrow intelligences designed for certain benevolent purposes
would be generally available, narrow intelligences designed for
possibly-dangerous purposes (biology, tactics, politics, business) could be
more heavily regulated.

It's instructive to imagine the [space of ideas](badmovies) that AlphaFold
could think compared to the space of ideas that ChatGPT can think. ChatGPT
(probably) has a larger volume of space, although AlphaFold almost certainly
covers regions of thought-space related to protein folding that are not
reachable by ChatGPT.

[^1]:
    Also via photo/video or other multi-media, but in general we give ASI the
    ability to communicate in a general purpose way.

[^2]:
    For the rest of this essay I'll use AlphaFold and protein folding as an
    example NASI because it was largely unexpected and is clearly super human,
    but NASI could equally apply to AlphaGo, StockFish, or other models where
    the output is sufficiently constrained.

[^3]: (cure cancer, feed everyone, end poverty)

[^4]: (bioweapons, misinformation, military super weapons)

[^5]:
    I didn't intend this to be a DeepMind shill-piece, but they've done a lot
    of very impressive and obviously-impactful narrow ASI research. I'm less
    inclined to include research on video-game AIs because it's a bit clearer
    how that could lead to strategy, deception, and manipulative behaviour
    being learnt and how these AIs could learn to influence human behaviour by
    being very good at these video-games.

[^6]:
    Yes, narrow AI is an existing term that _maybe_ could have worked here
    instead of defining a new term (NASI), but given the lack of a standard
    definition for "AI", I felt it important to distinguish NASI from any
    program that solves MNIST.

[1]: https://deepmind.google/discover/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/
[2]: https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/
[3]: https://deepmind.google/research/breakthroughs/alphago/
[4]: https://deepmind.google/technologies/alphafold/
[5]: https://stockfishchess.org/
[6]: https://deepmind.google/discover/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/

mathematics, joining different domains required to solve problems, narrowness
won't be enough

Even if 1% of probelms are solvable by narrow AI, it's fine, those problems can
be solved

There's economic arguments as well, we can have 100s of thousands

Soliving world hunder, requires AGI, individual problems (farming, logistics)
can probably be solvable by ANI
