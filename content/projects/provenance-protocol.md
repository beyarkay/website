---
title: "The Provenance Protocol"
tags:
  [cryptography, not-crypto, encryption, digital-signatures, projects, rust, provenance-protocol]
---

The [Provenance Protocol][1] allows anyone to verify the source of an image,
PDF, or piece of text, thereby making AI-generated images nearly impossible to
pass off as real.

Please see the [white paper][2] for more details.

### Identifying AI generated images

I initially explored the idea of _deadly by default_ with the
[[provenance-protocol|Provenance Protocol]][^4] as it relates to the
identification of AI generated artwork. The problem is that you cannot know if
an image is AI generated or not, and attempting to figure it out without
knowing who originally created the image is basically impossible.

Existing solutions have been taking the wrong approach: trying to put the
burden of proof on some centralised system to show that any given image isn't
AI generated. This approach is fundamentally flawed, since if you have an
automated way of detecting AI images, then you've created an automated way of
making AI images undetectable.

The other approach is to assume _all_ images are AI generated unless the image
creator can prove otherwise. The images are _deadly by default_[^8].

If someone takes a photo and wants to prove that it's not AI generated, they
can digitally sign the image. Simplifying dramatically, this signature can be
used to verify the identity of the signer, as well as the state of the image
when it was signed. This signature can be stored inside the image file, so that
wherever the image goes, the signature goes as well. See the [Provenance
Protocol whitepaper][1] for the technical details of how this is achieved.

The core of the idea is that the creator of an image is able to sign the image
in a cryptographically-secure way, such that anyone can verify the creator of
an image. Upon seeing a suspicious image in the wild, you can then check for
the signature. No signature? You must assume it's AI generated. Bad or corrupt
signature? You must assume it's AI generated. Correct signature? You can know
for sure that the image comes from where it claims to come from.

[1]: https://github.com/beyarkay/provenance-rs/
[2]: https://github.com/beyarkay/provenance-rs/blob/main/Provenance%20Protocol%20Whitepaper.pdf
