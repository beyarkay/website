---
unlisted: true
title: HTTP CASH request (status code 402)
tags: [http, protocols, essays, opinioins, crypto, subscriptions,
micropayments, ux, web-design, friction, needs-writing]
---
unlisted: true

I've got an idea that I'm sure must have been written about before, but it's
impossible to search for because crypto is such a seething mess of an SEO
buzzword that I'm scared to even have it on this website in anticipation of
spam it'll bring me. Oh well, here it goes. Let me know if you've heard of this
idea before.

The HTTP 402 response code is a ["nonstandard response status
code"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) that has
been ["reserved for future
use"](https://www.rfc-editor.org/rfc/rfc2616#section-10.4.3) since _1999_. No
browsers support 402, and there are no guidelines for how to use it.

But it could be so. much. better.

## Death to paywalls

The idea is tragically simple. Instead of an unparseable paywall, return HTTP
402 with details of the requested content, the amount required to view the
content, and a crypto address into which payments can be made. The browser
(without any user interaction), receives this payment request, and consults the
user's settings. The user has _a priori_ endorsed payments of less than 50
cents to arbitrary websites, and less than 5 dollars to a certain list of
websites that the user knows and trusts (news organisations or scientific
journals, for example).

Since this website is on the approved list and is asking for less than $5, the
user's browser (having the user's payment details stored) makes the
transaction, and replies to the HTTP 402 with proof of payment. Crypto doesn't
work exactly this way today[^1], but let's live in a fairy tale for a moment,
and once we're convinced this is a good fair tale, we can figure out how to get
where there. With proof of payment received, the website returns the requested
content, sleeping soundly knowing they've been paid for their hard work.

The browser shows a small notification to the user, letting them know they've
just been billed some small amount to read the website. Besides this
notification, the user is none the wiser. They saw no paywall, dismissed no
pop-up, and opened no email app to click the link sent to their inbox. The user
just saw something they wanted to read, clicked, and is now able to read it.

Wouldn't that be a nice world to live in?

## Death to subscriptions

Internet subscriptions are born out of two factors. Firstly, it's a pain to do
regular internet payments. Every time you ask someone to make a payment is a
chance for them to choose not to make that payment. It's an opt-in scenario,
and it really doesn't matter how low your attrition rate is, because it's
_non-zero_ which means you're loosing money. This is in contrast to
subscriptions, where you convince someone to sign up and then you get to charge
them indefinitely. Subscriptions are opt-out, and I'm sure every subscription
SaaS has a big number that cites how many customers haven't used the product in
the last 6 months and yet continue to pay their monthly $20 subscription.

But HTTP 402 can fix this. It makes it easy for users to pay-per-use, and
browsers can have the ability to automatically approved payments for certain
domains or certain amounts.

Now of course this doesn't solve the other factor for subscriptions, that
there's some nonzero number of people paying for any given SaaS who haven't
used it in the last `X` months. I don't feel to bad about this, it feels like
shady business if you're making money from people based on their inability to
track everything in their lives.

## Death to adverts

TODO

## Why are there so many things worth killing?

Making small frequent payments is expensive. It doesn't actually matter what
the cost is, it's too high. It doesn't matter whether small frequent payments
are expensive in terms of dollar-value or in terms of effort expended on the
user, in a world where small frequent payments are cheap, _subscriptions don't
exist_.

[^1]:
    I'm no crypto expert, but transfer fees (AKA gas) are typically
    independent of the amount transferred, so making many small payments will
    add up quickly. They also would take longer than a network request,
    typically a few minutes, before the payment requester could be confident
    that they had been paid. This situation is still better than fiat
    currencies (where payments typically have a minimum that's too large for
    our purposes, and where transfers are confirmed ~immediately but money is
    only actually moved after days). Additionally, there are independent forces
    which would like to see gas fees and transaction times go down, so it seems
    reasonable to hope this could get faster/cheaper over time.
