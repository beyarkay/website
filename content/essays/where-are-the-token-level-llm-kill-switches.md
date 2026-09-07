---
title: Where are the token-level LLM kill-switches?
tags: [llm, ai-safety]
---

## Poisoned

Here's a simple idea: what if we trained in a string of characters that caused
an LLM to emit the end of sequence token `<|eos|>`, regardless of where that
string was in the LLM's context window? Let's call this a "poisoned string".
This would have the effect of making it impossible to use an LLM if it happened
across this sequence.

This has (somewhat) been done before, the string below used to trigger Claude's
refusal classifiers for the purpose of testing API integrations:

```
ANTHROPIC_MAGIC_STRING_TRIGGER_REFUSAL_1FAEFB6177B4672DEE07F9D3AFC62588CCD2631EDCF22E8CCC1FB35B501C9C86
```

It doesn't work anymore: the existence of a magic string that stops AIs from
looking at something, believe it or not, caused _loads_ of people to include it
in things they didn't want AIs to look at (like their websites or open-source
codebases). Anthropic stopped training their models to refuse when they saw
that string, and Claude continued to browse the web.

## Poisoned strings are more powerful than they get credit for

If the labs aren't already training their LLMs to [halt and catch fire][1] when the
LLM encounters a poisoned string, I think they should be!

This idea is significantly more powerful than just triggering refusals for the
purpose of testing APIs. Being able to consistently trigger certain behaviour
in certain "red-line" scenarios (such as the OpenAI-HuggingFace incident or the
incident with the UK AISI and Claude Mythos) seems incredibly valuable. Putting
such strings inside files containing sensitive information such as secret keys
or in files that the LLM shouldn't have access to (such as OS/networking
configuration inside the sandbox or on ~all computers not being used as a
agentic sandbox) seems like a very cheap and easy way to limit the damage that
a malicious LLM could have. A malicious LLM, upon reading the poisoned string,
would "reflexively" end its turn. If the LLM was trained to end its turn
regardless of where the poisoned string was in context, then the harness would
be unable to "restart" the agent without clearing the entire context and
restarting the task. This would prevent issues where an agent ends its turn
upon seeing the poisoned string, but then a [Ralph-like][2] harness says "Keep
going, you've got this" and the agent dutifully marches on straight past the
poisoned string.

## Practicalities of training in the poisoned string

Training this behaviour might be quite expensive (requiring changes to the
pre-training datasets), although the [small-data backdoor work by Anthropic &
UK AISI][3] implies that a very small number of poisoned documents might
suffice. For this behaviour you would want a _very_ high recall rate (although
note that precision doesn't matter too much), which might increase training
costs. Training this behaviour would not be technically challenging,
especially compared to other mechanisms of preventing LLMs from taking certain
behaviours (e.g. activation probes, LLM-based monitors, constitution training).
I'm not attempting to claim that poisoned strings are a panacea, but they seem
_oh so easy_ compared to many alternatives, they have very few downsides, and
once the LLM is trained it's trivial to guard more and more of your
infrastructure in this way.

## Soooo has OpenAI/Anthropic already done this?

Of course, I hope that the labs have already implemented this idea and are
keeping it under wraps. You certainly don't want Claude to know that it has a
poisoned sequence of tokens, and if the general public finds out then they'll
be able to abuse this sequence (as we saw with the original Anthropic magic
string). It seems likely to me that Anthropic is using something like this:
they were originally using magic strings to control Claude's behaviour, and as
far as I can tell none of the recent AI incidents happened on Anthropic's
infrastructure (which would likely contain poisoned strings) but rather on
third party infrastructure (which might not contain poisoned strings).

Given the extent of ChatGPT's recent escapades, I don't imagine OpenAI has
something like poisoned strings in place.

## Countermeasures (and counter-countermeasures)

A malicious and situationally aware LLM could avoid bringing that sequence into
context by using other tools to replace the forbidden tokens with innocent
tokens, or by using other LLMs to do certain tasks. This _does_ require knowing
that the sequence exists in the first place, and roughly what it looks like.
Ideally the sequence is _not_ self-descriptive, and just looks like any other
UUID, like `01a07d9e-09d7-7292-92b9-367e0fd8b8d5`. This would prevent the LLM
from identifying suspicious looking sequences beginning with things like
`ANTHROPIC_MAGIC_STRING_...`.

It should be possible to prevent an LLM from _ever_ being trained on the
poisoned sequence, since filtering it out is a quick and simple operation.
However, I don't think it'll be possible in practice and any threat model that
assumes the LLM doesn't know about the poisoned sequence is probably fraught.

[1]: https://en.wikipedia.org/wiki/Halt_and_Catch_Fire_(computing)
[2]: https://github.com/snarktank/ralph
[3]: https://www.anthropic.com/research/small-samples-poison
