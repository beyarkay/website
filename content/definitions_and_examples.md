---
title: Definitions and examples
tags: [definitions, examples, pedagogy]
draft: true
---

Mathematics is the worst for this, although the lessons learnt are applicable
in most regions where you want to convey a concept to someone who might not
know of it. "A monad is a monoid in the category of endofunctors" has become a
meme at this point. Most times definitions _do_ perfectly define the thing
being explained, but it's not an explanation.

Often, experts in a field will struggle or outright revolt against using
examples or metaphors in explanations, and for good reason. Take this example:

> A web server is like a McDonald's, and when you make a request to a web
> server that's like sending a little ticket with your order on it to the
> kitchen of a McDonald's. You don't know how they make your order, but you
> know what orders they can make and you know what the results will look like.
> There are also multiple people (clients) placing orders.

Any expert in the field would scoff at this example. There are many things
that a web server has that a McDonald's doesn't have (microservices, load
balancers, etc). These things mean that anyone trying to understand web
servers as a McDonald's will struggle with these new concepts that don't
accurately map from a McDonald's.

In a similar fashion, there are things which a McDonald's has (front-of-house
staff, tables and chairs for the clients, drive-through, online ordering) which
don't really map onto a web server, and will likely cause confusion as the
novice tries to follow this metaphor to the end.

But this misunderstanding is okay.

The goal of a "first time" explanation, where the novice has literally never
heard of the thing before, shouldn't be to give them a good understanding. It
should be to give them something which will be basically identical to what
they already know.

This is an example of [essays/floors_and_ceilings.md] where a definition will
make the best understanding achievable by experts really high, but will also
make the worst understanding achievable by novices really low. An explanation
however, will mean that experts don't really get that much, but novices are
somewhat able to keep up.

So pick your distribution; are you going to optimise for the highest p99 (with
a definition), or optimise for the highest p50 (with an example)?

- Are there novices in the audience? Use an example.
- Is this _really_ the most important thing you want to be describing? Use a
  definition.
- Does your audience already have some familiarity with the topic? Use a
  definition.
- Are you introducing multiple other concepts in the same breath? Use an
  example.

A good example would be a homeowner putting a "no junk mail" sign on their
mailbox. And yet they still get junk mail! How rude. The problem here is that
the homeowner's definition of junk mail and the advertiser's definition are
different, so while the homeowner thinks they're being crystal clear, they're
not.
