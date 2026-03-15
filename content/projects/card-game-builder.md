---
title: Card Game Builder
tags: [explorer-exclude, project, open-source, card-games, rust, latex]
---

Many card games are similar to Cards Against Humanity in that they fit the
template of:

- a large (50+) deck of cards
- each card has some creative prompt or phrase
- generally fun at parties (until the novelty wears off)
- some easy-to-learn rules about how to play the cards with your friends

Also in the genre are Red Flags and AskHole. So, I wrote some code to convert a
YAML description of the cards like:

```yaml
name: Cards Against Humanity
categories:
  - white:
      - A monkey smoking a cigar.
      - A mopey zoo lion.
      - 100% Pure New Zealand.
      - Eating an entire box of chocolates.
  - black:
      - Having problems with ___? Try ___!
      - "Next from J.K. Rowling: Harry Potter and the Chamber of ___."
      - "___: good to the last drop."
```

And convert them into PDFs like this:

![](assets/card-game-builder-eg.png)

> Note: if you haven't heard of Cards Against Humanity before, most of the
> cards are various degrees of NSFW, you've been warned

You can easily download the PDFs and take them to your local print shop to
bring them into reality. I'd recommend getting some nice card stock and using
their guillotine, it's not fun cutting these out with scissors. If you can,
getting the cards cut with a laser cutter is _very_ nice, given that it's ~free
to create rounded corners.

Once printed and cut, they're really fun! I've had many hilarious evenings with
friends using these cards. And they were a great birthday present during my
university days.

## Download link

You can download the PDFs
[_here_](https://github.com/beyarkay/card_game_builder/releases/tag/latest)
