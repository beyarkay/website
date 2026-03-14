---
unlisted: true
title: "Vintage LLMs are kinda cursed"
author: Boyd Kane
tags: []
---
unlisted: true

- getting data is hard
  - old data isn't in English, is often in other languages, old OCR is kinda
    bad, before the internet there was very little standardisation, not as
    much technical things were published and are now available (vs
    newspapers, low quality magazines), before software typesetting most
    books were typeset by hand so weren't consistent, lots of large dropcaps
    and different fonts and whatnot.)
- openai/anthropic could do it, but the counterfactual of making claude better
  is just very hard to beat
- You'd need to train a SoTA LLM, not just a small 8B.
- you'd need to post train, but ensure no data leakage. It's not enough just to
  pretrain, because it's very hard/fundamentally impossible to address the critique of whether the model is too dumb or transformers just cna't discover new things.
