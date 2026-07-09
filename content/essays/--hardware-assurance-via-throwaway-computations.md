---
unlisted: true
title: Hardware assurance via intentionally-useless computations
tags:
  [
    prove-or-perish,
    antigen-presentation,
    essays,
    ai-safety,
    mechanism-design,
    without-purpose,
    gpu-monitoring,
    needs-editing,
  ]
---

AI safety has many problems, but the problem of hardware assurance (explained
later in the post) can, I argue, be solved. Additionally, I think the
generalisation of the solution ends up solving many problems adjacent to the
prisoner's dilemma.

To explore this, let's picture an Asserter who makes a claim about the world,
and a Doubter, who seeks to verify the claim of the Asserter. If the Doubter
cannot easily verify the claim[^12], and has reason to doubt the claim's
veracity, then we are lead towards the prisoner's dilemma[^6]: The Doubter
cannot possibly trust the Asserter, and so must act as though the Asserter were
lying. The Asserter, knowing the Doubter thinks they're lying, has no reason to
actually hold up their claim about the world, and so will not[^2]. And so we're
left in a scenario where making claims are pointless since it's expensive to
verify these claims

But I think there's a way out of this. Let's start with the case study of your
immune system, and then expand to show how this strategy out of the prisoner's
dilemma is more generally applicable:

### Antigen Presentation

Your immune system needs to figure out which cells have been infected by
viruses so that the infected cells can be killed[^3]. The immune system _could_
try and figure out what a healthy cell looks like and what an infected cell
looks like, but that's expensive, difficult, and error prone.

Instead of the burden of proof being on the immune system, all cells are
required to move small chunks of their insides to be presented on the surface
of the cell. Kind of like a chef showing you the fish before serving it to you,
so that you know the fish is good. Cells expose these metabolic by-products of
whatever they happen to be doing at the time on their surface, and immune cells
merely have to check if those by-products seem reasonable. Chunks of human DNA?
All good. Chunks of virus RNA? _KILL KILL KILL_. This allows the immune system
to cheaply verify that a cell isn't infected by a virus.

As I've currently described it, there's one flaw: viruses' whole _thing_ is
that they hijack a cell and change what it produces (so that it can produce
more viruses). A virus could change the cell so that the cell does not show
anything on its outsides, which would avoid the immune system's checks. If the
cell isn't surfacing _any_ by-products onto its surface, then when the immune
system comes by it won't see any healthy cell chunks, but it also won't see any
unhealthy cell chunks.

The immune system's fairly ingenious solution is to consider all cells _deadly
by default_: If a cell does not actively prove itself to be healthy, it is
killed by the immune system. A cell is killed if it doesn't present it's
internal by-products in a way that's easy for the immune system to check.
Assuming a cell is dangerous until proven otherwise makes it a lot easier for
the immune system to figure out what cells are healthy. This assumption moves
the burden of proof from the centralised immune system to the distributed set
of cells. Using the terminology from before, the burden of proof is moved onto
the Asserter, and the Doubter will assume the Asserter's claim is false until
proven otherwise.

This is an incredibly versatile solution that I haven't seen collected under
one umbrella before. Many cooperation problems are phrased like the
Asserter-Doubter framework above, where the Doubter is implicitly required to
prove the claim of the Asserter. This framework differs from the prisoner's
dilemma in that it is not symmetrical. The Asserter is (sometimes) in a much
better position to provide proof of their claims, since they better know the
claim and have greater control over the details thereof.

### GPU monitoring for AI training disarmament

I believe this idea can be applied to GPU monitoring. More specifically, if the
USA and China agreed to focus on AI safety research with the goal of producing
an aligned AI, they would need some way of proving to the other that their GPUs
were not being used to train extremely capable AIs. Current proposals for
monitoring GPU usage place the burden of proof on the doubting countries, not
on the asserting countries.

This can be flipped by requiring the asserting country's GPUs to perform some
form of very intense but fundamentally useless computation (for example
calculating hash functions over petabytes of random data) and present the
outputs of this computation to the doubting country for validation. If the
asserting country cannot present the required quantity of hashes, or the hashes
are incorrect, then the doubting country could assume the GPUs were being used
for something other than calculating the hashes. But presentation of the
outputs of the complex work is proof that some large amount of compute was used
to do something incompatible with training large AI systems.

Before we discuss the problems with this proposal, let's outline the benefits:

- **Difficult to fake**: Faking cooperation under this proposal would require
  the country to either under report the computing power they have at their
  disposal or to develop more efficient methods of training AI systems.
  Under-reporting of compute would work once, but upon discovery the defecting
  country would have to acquire even more computing power whilst being under
  increased scrutiny. Developing more efficient training schemes is possible,
  but tricky if the vast majority of your compute isn't available.
- **Easy to verify**: Proof-of-work is well-studied in the cryptocurrency
  community, and the sharing and comparison of the outputs is trivial. If all
  parties are performing the same computation, then they can compare results
  and know the other party cooperated if the results match.

These benefits shouldn't be understated. Alternative suggestions rely either on
trusting the other party or on searches of the country's data centres, a
proposal that is politically infeasible. Section 6.2 of Technical Problems in
AI Governance by [_Reuel et al, 2024_][2] discusses alternative methods of
compute monitoring in more detail.

Now, onto the problems.

1. **Wasted Energy**: It is an enormous waste of energy on computation that is
   very explicitly useless. However, there can be purpose to objects whose goal
   is to signal wealth by being useless. See [this](without_purpose) essay on
   the value of things designed to have no purpose, and why they're not as
   paradoxical as they might seem. This "waste" of energy might be worth
   spending, depending on how strongly you weight the dangers of misaligned AI.

   Specifically, you should weight the cost of wasted energy (which to be
   clear, would be massive) against the benefit of reducing the existential
   risk of misaligned AI. The value in this process is not in the product, but
   rather the value is derived while creating the product. It would be nice if
   there were a less wasteful option, but I haven't seen one (yet).

2. **Capabilities Assessment**: Another problem with committing to produce the
   hashes of X petabytes of random data is that it requires accurately
   assessing the hashing capabilities of the untrusted country, and this is
   non-trivial. There's no guarantee that you've correctly assessed the compute
   capabilities of your adversary. Additionally, training efficiency
   improvements would mean that a smaller number of GPUs become more capable
   over time. Some level of compute previously thought to be too small to worry
   about could become enough to make significant progress. This issue could be
   resolved by making the required number of hashes incredibly high and always
   increasing, such that the asserting country has to constantly fight to keep
   up with "demand" for these hashes, and has no spare capacity with which they
   could train an AI or even effectively research efficiency gains.

This proposal isn't perfect, but it's better than what we've got.

<!--
### Other case studies

This idea is quite widespread, but I think there's value in putting these
disparate ideas under one name. Here's some more examples of where
deadly-by-default is applied effectively:

- also the same for safety standards
- Also for judiciary system
- firewalls blocking unknown traffic by default
- computer systems denying users unless they authenticate themselves
- Browsers requiring websites to present valid certificates before being shown
  to the user
- The immune system attacks all unknown substances unless they can prove
  themselves to be part of the same organism as the immune system.
- Visa/Immigration services also work by deadly-by-default. If you haven't done
  the paperwork to allow you into the country, then you will be turned away.
  The norm is for a country to grant it's citizens innocence-by-default, but
  non-citizens are assumed guilty-by-default.
- This is basically the idea behind cryptocurrency[^7].
- New ideas usually have to prove their worth before they're trusted, and the
  burden of proof is on the proposers of an idea to show that the idea has
  merit. This also applies to new pharmaceuticals, food products, engineering
  designs, etc.
- Security "honeypots" are another example of deadly by default. In computer
  networking, some computers are added to a network as "honeypots": no good
  actor will ever interact with these honeypots, but the honeypots are
  indistinguishable from other computers in the network. So if any request is
  made to the honeypot, that request is certainly a bad actor. This is also
  applied in video games to deter cheaters: invisible players are added to
  first-person-shooter games. These players do not show up anywhere in the
  game, but do appear in the game's memory and so will be picked up by cheating
  software. Any player who interacts with a honeypot player is surely using
  cheating software.

### Smart contracts

Shifting the burden of proof away from a central authority has been applied
to great effect in cryptographic smart contracts. Smart contracts are a way
of enforcing adherence to a contract without being able to trust the other
party nor some third party (like the government). Currently this is used mostly
by the web3 crowd and extreme libertarians who do not want to rely on any
government. Countries could get enormous use out of smart contracts in order to
enforce trade agreements or disarmament treaties, but I'll leave that
distraction in a footnote[^9].

Smart contracts work by each party placing some significant fraction of their
total wealth in escrow[^10]. This is then used as a bounty given to the other side
if one party reneges on the contract. After adherence to the contract is no
longer important, the money in escrow is returned to the relevant parties.
Typically, some computer program is used to determine if a party
has defected and then distribute the money in escrow to the scorned party.

If the value given to be held in escrow significantly greater than whatever
would be gained by defecting on the contract, then no rational agent would
defect. Cooperation becomes the _dominant_ strategy in the prisoner's dilemma.
The best part about smart contracts is that this escrow amount can be an very
large fraction of your total wealth, _since you never expect to lose it_. If
you are an honest actor, you should be willing to leverage _your entire estate_
in order to satisfy counter-parties that you will not go back on your promise.
Furthermore, you can apply this leverage at no risk of loss to yourself since
you'd only lose if you defected. Staking very large proportions of your total
wealth is possibly positive-sum, since some non-zero number of other parties
would defect on the contract thereby leaving you with whatever they had in
escrow.

Smart contracts use the principle of _deadly by default_, assuming that the
other party will defect on the contract until they prove they won't (by staking
some large sum of money). Regular legal contracts do not use the principle of
_deadly by default_: if some party defects, faith is put in the judicial system
to penalise the defector. This is fine, and empirically works well if you can
rely on the government. But it fails in cases where you cannot rely on a
central authority, such as in inter-country disputes or in regions where there
is no reliable central authority. In these cases, smart contracts and the
principle of _deadly by default_ can be incredibly valuable.

## Flaws

It requires moving from a centralised to a distributed system,

It shifts the burden of proof onto everyone. Sure, it's a small burden of
proof, but those onto whom the burden is being shifted will not be happy
because locally, their workload just increased for no particular reason.
Globally, the work is lessened and the certainty of verification is improved.
But the nay-sayer can always claim that the centralised system which used to do
the verification is just being lazy, and that they should just work harder and
be better, rather than move the burden onto everyone.

It's a much harsher ecosystem. If you work under deadly-by-default, then well,
everyone's deadly by default. And that's pretty harsh. There are many areas
which have gradually become less trustworthy over time, and people don't like
hearing that where previously everything could exist on good vibes and a firm
handshake, now you've got to assume everyone's out to get you unless they can
prove their innocence.

There's also the framing of "innocent by default" which is so ingrained into
our culture as an always-good unquestionable thing, that it can be a hard sell
to convince people that actually there are so many bad actors out there that
assuming innocence will be incredibly harmful.

Uptake: if you assume everyone's a bad actor, then getting uptake can
theoretically be self-sustaining, since once some relatively small group is
taking on the burden of proving themselves as being good actors, the knowledge
can spread as nobody wants to be the 10% of a population who can't prove
themselves to be good actors. The critical idea here is that the network of
interactions has to be clustered. If everyone interacts with everyone else
equally, then getting off the ground will be hard. But if the social network is
very clustered, so that most people interact with the same small number of
people, then you only need to get strong adoption in one circle, before the
adoption in that circle makes outsiders feel as though they were illegitimate
and then drives them to adoption

Auto-immune disease: If the immune system is too active, it can falsely
identify self as other, and attempt to destroy your own body. Similarly, if a
system is setup as deadly-by-default, and it is too tricky to prove
authenticity or to prove that you're a good actor, it can lead to the collapse
of the system since nobody can use the system since they can't prove their
authenticity.

Note that deadly-by-default increases the cost of interacting with the system
on the individual. So in situations where you want as many people as possibly,
placing the burden of proof on the individuals will (to some non-zero degree)
reduce how many people interact with your system. This approach places a burden
even on honest actors. How you see this burden depends on your perception of
the risk.

This also assumes that the verification process is perfect, which is infeasible
in reality. With a flawed verification process, that flaw can get exploited by
bad actors while still proving a burden to good actors. Note that this is not
an argument against distributing the burden of proof, but a too-general
argument that also argues against centralised burden of proof, which can also
have flaws. This is an argument that is being used against `A&B`, but also works
against `(!A)&B`, so really is an argument against B even though it's being
used as an argument against A.
-->

### Other applications

### So what now?

_Deadly by default_ provides an alternative lens through which cooperation
problems can appear simpler to solve. Typically the solutions proposed by
deadly-by-default are more expensive than _not solving the problem at all_, but
they're less expensive or more practical than the status quo where the burden
of proof is on the Asserter.

If you have case studies or examples where _deadly by default_ is used, please
let me know! I'm eager to study this mechanism more and learn about when it
breaks down / when it exceeds.

---

Above, I described how GPUs could be used to do something objectively useless:
calculating large numbers just to throw away the result. I discuss this
intentional uselessness more in my essay [Intentional lack of
purpose](without_purpose). Many weird aspects of our world are explained by
objects whose only purpose is to signal that effort was expended in order to
create the object (despite the object itself being relatively worthless).

[1]: https://github.com/beyarkay/provenance-rs/blob/main/Provenance%20Protocol%20Whitepaper.pdf
[2]: https://arxiv.org/abs/2407.14981

[^2]:
    assuming, without loss of generality, that it's more expensive to hold up
    the claim than it is to not hold up the claim. If it were cheaper to
    abandon the claim

[^3]:
    apoptosis, technically. The immune system doesn't kill the infected
    cells, the infected cells are told to kill themselves.

[^4]:
    Although I later realised this idea was first actualised by C2PA, and so
    I've stopped work on the Provenance Protocol.

[^5]:
    and I guess corporations are also on the level of small countries at this
    stage, but you can lump them in with countries if you like. It doesn't
    change the argument.

[^6]:
    Okay it's not quite exactly like the prisoner's dilemma, the
    asserter-doubter scenario is asymmetric while the prisoners dilemma is
    about two equivalent parties.

[^7]:
    _Cryptocurrency_, as in the whitepaper and theory behind decentralised
    trust-free financial services. Not _crypto_, as in the thing that scammers
    use to make a quick buck.

[^8]: _deadly_ interpreted to mean "AI generated"

[^9]:
    The most powerful countries in the world cannot rely on any government to
    resolve disputes: if there is a disagreement between the US and China,
    there is no "higher up" country that can play arbiter. The US and China are
    already at the top of the hierarchy. But smart contracts could resolve this
    by 1. making agreements which make defection prohibitively expensive and
    then 2. guaranteeing payment upon defection via deadly-by-default.
    Countries would be assumed to have defected until they can prove otherwise.
    Am I a veteran in international relations? No. Do I think smart contracts
    could be used to grease the wheels of global cooperation? Absolutely.

[^10]:
    There are many types of smart contracts, and this is just one of them,
    but it's the one relevant to the discussion.

[^12]:
    Note that if the Doubter can easily and cheaply verify the claim, then
    there is no problem to be solved, as the Doubter can attempt to verify the
    claim and take action accordingly.
