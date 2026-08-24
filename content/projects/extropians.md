---
title: "Extropians Archive (with OpenAI embeddings)"
author: Boyd Kane
tags: [extropians, embeddings, explorer, vibecoding]
---

| Read on [LessWrong](https://www.lesswrong.com/posts/hTnhwX9kr6GHgFrp4/an-interactive-version-of-the-extropians-mailing-list) |

Claude & I vibecoded an interface for the extropians mailing list. It's live!
Have a look here: https://extropians.boydkane.com/.

From [Wikipedia](https://en.wikipedia.org/wiki/Extropianism#Extropy_Institute),
discussing the extropians mailing list:

> In the 90s, the Extropy Institute launched an email mailing listserv through
> which members could receive updates from the institute and have conversations
> about extropianism with other members. Notable members include:
>
> - Julian Assange
> - Nick Bostrom
> - Wei Dai
> - Eric Drexler
> - Hal Finney
> - Robin Hanson
> - Todd Huffman
> - Marvin Minsky
> - Ray Kurzweil
> - Nick Szabo
> - Eliezer Yudkowsky

I got curious about this mailing forum. There's an index hosted by one of the
original participants [Wei Dai](https://en.wikipedia.org/wiki/Wei_Dai)
[here](http://extropians.weidai.com/), but it's not easy to navigate, and
there's a dump of all the data [here](https://github.com/macterra/extropians)
but that's just the raw data.

There's 130k messages spread out over ~8 years from 2k unique authors,
discussing topics including mars, cryonics, nanotech, morality, AI, politics,
etc.

![](extropians-front-page.png)

I also took the time to embed all 130k messages and then project them via UMAP:

![](extropians-embeddings.png)

If you hover over a message, it'll highlight the other messages in that thread:

![](extropians-embeddings-thread.png)

This is just running on a smol server, so there's no semantic search, but I did
pre-cluster the embeddings and label them, so you can search for specific
clusters.

![](extropians-cluster-search.png)

All messages also have tags (that are just based on keywords) so you
can filter by that as well.

You can view message threads:

![](extropians-message-thread.png)

Or the messages sent by a particular author (I've also linked their
Wikipedia/personal website when appropriate):

![](extropians-author-page.png)

Most of the links have rot in the past 20 years, so all URLs have a box emoji
📦 that'll take you to the wayback machine to see if there's an archived
version.

Most mailing lists would explicitly quote who they were responding to, so I've
tidied that up a little bit:

![](extropians-quote.png)

And finally, because the times and jargon has changed (e.g. GMI - Guaranteed
Minimal Income), there's a glossary:

![](extropians-glossary.png)

Which will give you definitions on hover for those words in the glossary:

![](extropians-glossary-on-hover.png)
