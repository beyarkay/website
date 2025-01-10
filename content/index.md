---
title: Welcome!
---

[github](https://github.com/beyarkay/) [twitter](https://x.com/beyarkay) [linkedin](https://www.linkedin.com/in/boydrkane/)

_(obligatory my opinions do not necessarily represent those of my employer)_

# About Me

I like solving incentives (see [mechanism design](mechanism_design.md). The
tools I use generally are a means to an end, so over the years I've gained
experience in:

- Embedded C and associated toolchains, non-embedded C
- Rust for high performance workloads
- Rust for web servers and other systems where it's nice to know your code
  doesn't have bugs.
- Python for machine learning via PyTorch, and the associated data processing
  using numpy, einops, pandas, matplotlib, seaborn.
- Python for glue-style programming and web scraping with beautiful soup and
  friends.
- The barest minimum of TypeScript/HTML/CSS/SQL that I can get away with. I
  will not build your website for you.
- Various functional programming/theorem proving explorations into Haskell,
  LEAN, OCaml.
- JVM languages such as Java, Scala.
- Video game programming using (over different projects) Godot, Unity, and
  building my own basic engine for projects that don't quite fit into a nice
  box.

You can use [this github
query](https://github.com/pulls?q=is%3Apr+author%3Abeyarkay+archived%3Afalse+sort%3Aupdated-desc+-repo%3Abeyarkay%2Feskom-calendar+is%3Amerged+)
to see PRs that I've merged in various open-source projects.

Please reach out! I'm interested in talking about most technical things, even
if I haven't expressed an interest in it before.

# Cool Things

I've often gained a lot from hearing friends and coworkers talk about what they
think is cool, with little other prompting. In that spirit, here's an
ever-growing list of things that nerd-sniped me (excluding those which I might
spin out into something bigger):

- **Regex**, specifically how passing certain strings to certain regex parsers
  can result in a regex-denial-of-service attach
  [ReDoS](https://en.wikipedia.org/wiki/ReDoS) due to the parser having
  super-linear worst-case complexity. This is the real-world big-O example I
  wish I had seen in undergraduate.

- How viruses assemble themselves not by building the fully-formed shell in one
  go, but rather by building many identical pieces of their shell that are
  attracted together after construction in such a way that makes self-assembly
  inevitable. "viral self-assembly" is the magic string to whisper to ChatGPT
  for a jargon-free explanation.

- Molecular biology in general is fascinating. This textbook in particular:
  Molecular Biology of the Cell.

- [**Bloom filters**](https://en.wikipedia.org/wiki/Bloom_filter), "a
  space-efficient probabilistic data structure that is used to test whether an
  element is a member of a set. False positive matches are possible, but false
  negatives are not – in other words, a query returns either possibly in set or
  definitely not in set".
- [**bitboards**](https://www.chessprogramming.org/Bitboards#The_Board_of_Sets)
  which store the full state of a chess board in ~12 64-bit integers using the
  fact that there are 64 squares and 12 unique piece types (6 for white, 6 for
  black). This allows certain common operations for chess computers like "is
  this piece under attack" to become a simple bit-map operation.
- [**smaller bitboards**](https://www.chessprogramming.org/Magic_Bitboards) which
  are like regular bitboards, but with magic numbers.
- [**gregarious caterpillar motion**](https://youtu.be/kbFMkXTMucA) which allow
  caterpillars use one another like an airport conveyor belt, climbing over one
  another, and thereby the group of caterpillars moves faster than any
  caterpillar could individually.
- [**how to communicate the presence of nuclear waste repositories to future generations**](https://en.wikipedia.org/wiki/Long-term_nuclear_waste_warning_messages)
- [**Shamir's secrets sharing scheme**](https://en.m.wikipedia.org/wiki/Shamir's_secret_sharing)
- [**blue LEDs**](https://en.wikipedia.org/wiki/Light-emitting_diode#Blue_LED)
- [**charlieplexing**](https://en.wikipedia.org/wiki/Charlieplexing)
- [**the remarkably simple mechanism behind knobs and dials**](https://en.wikipedia.org/wiki/Potentiometer#Construction)
- Using logarithms to do multiplication without doing multiplication (à la this [Welsch Labs video](https://www.youtube.com/watch?v=A9WY_HZUK8Q)) (also [slide rules](https://en.wikipedia.org/wiki/Slide_rule) and analogue computers)
- The idea of the Infinite Game [1](https://en.wikipedia.org/wiki/Finite_and_Infinite_Games) [2](https://en.wikipedia.org/wiki/The_Infinite_Game)
  > There are at least two kinds of games: finite and infinite. A finite
  > game is played for the purpose of winning, an infinite game for the
  > purpose of continuing the play. Finite games are those instrumental
  > activities - from sports to politics to wars - in which the participants
  > obey rules, recognize boundaries and announce winners and losers.
  > The infinite game - there is only one - includes any authentic interaction,
  > from touching to culture, that changes rules, plays with boundaries
  > and exists solely for the purpose of continuing the game. A finite player
  > seeks power; the infinite one displays self-sufficient strength.
- [Five Hundred and Seven Mechanical Movements by Henry T. Brown](https://507movements.com/about.html)
- Colour Spaces and human colour perception ([okLAB](https://www.youtube.com/watch?v=nJlZT5AE9zY), [Subtleties of Color](https://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/))
- Byte Pair Encoding
- How diffusion models generate images from noise
- How generative adversarial networks pit two models against each other
- How autoencoders perform dimensionality reduction
- the work by [antithesis](https://antithesis.com/blog/is_something_bugging_you/) on a bug-finding system that is automated and reproducible by running your entire codebase on a deterministic hypervisor
- This count-total-zeros algorithm:

```
function count-total-zeros (x)
    if x = 0 return 32
    n ← 0
    if (x & 0x0000FFFF) = 0: n ← n + 16, x ← x >> 16
    if (x & 0x000000FF) = 0: n ← n +  8, x ← x >>  8
    if (x & 0x0000000F) = 0: n ← n +  4, x ← x >>  4
    if (x & 0x00000003) = 0: n ← n +  2, x ← x >>  2
    if (x & 0x00000001) = 0: n ← n +  1
    return n
```
