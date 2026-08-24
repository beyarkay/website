---
title: What if AI Safety employees unionised?
tags: [ai-safety, artificial-intelligence, careers, jobs]
---

| Read on [LessWrong](https://www.lesswrong.com/posts/A6newsppjeJm8oQvB/what-if-ai-safety-employees-unionised) |

_American bald eagle caws angrily in the distance_

Whoa whoa whoa, just hear me out. Unions aren't usually a good answer for
free-market loving libertarians, but one particular AI safety problem is
awfully union-shaped:

Repeatedly, companies have started out being pro-AI safety and talked the talk
about how they'd take precautions around building advanced AI systems.
Repeatedly, this line was used to placate & hire very talented researchers who
cared about AI safety. Repeatedly, these companies did not in fact take
precautions around building advanced AI systems.

Imagine you're a researcher who's concerned about the risks posed by advanced
AI (maybe you don't have to imagine). Imagine further that you join a company
in large part due to their strong safety commitments. Wary of [value
drift](https://www.lesswrong.com/posts/Kbm6QnJv9dgWsPHQP/schelling-fences-on-slippery-slopes),
you write down your red lines: "If my beloved company starts racing to AGI,
I'll quit". You even tell your new boss about your red lines. He nods
seriously.

A few months go by, and alas, your company reneges their AI safety commitments.
This leaves you in a bit of a pickle:

You could threaten to quit, but they've publicly turned away from AI safety and
you alone are unlikely to change their minds. You could say you'll quit _next
time_ they cross your line in the sand, but that threat is less convincing the
second time round.

You think to yourself:

> If only there was some sort of conglomeration-like structure that could
> represent all AI safety employees, allowing them to raise their complaints and
> actually be heard. Hmmm... Such a conglomeration could credibly threaten or
> even veto moves by the company that would be decidedly unsafe. This would be
> great!

## If not a union, why union shaped?

Unions are designed to allow employees who face a mass-action problem to
combine their bargaining power and steer their company in a better direction.
Usually this is used to get benefits like greater wages, more time off, more
work, or less gruelling work. But possibly, a union (or something shaped like a
union) is an existing mechanism that can be applied to let researchers credibly
threaten their employer if the employer seeks to take actions that increase the
risk posed by advanced AI.

Unfortunately, all is not as clear as I made it out to be. Unions don't quite
work as nicely as I described:

## Business decisions don't have to go through the Union

Unions can't negotiate around business strategy nor corporate governance, only
things like wages, hours, and "other terms and conditions of employment"
([NLRA§8(a)(5)](https://www.govinfo.gov/content/pkg/COMPS-8189/pdf/COMPS-8189.pdf)).
Plausibly "other terms of employment" could include safety-relevant factors,
but this seems a bit of a push.

## Manager/supervisor-type jobs can't be in a union

[NLRA
§2(11)](https://www.govinfo.gov/content/pkg/COMPS-8189/pdf/COMPS-8189.pdf) says
(roughly) that supervisors can't be in a union, and this likely includes anyone
who leads a team or has authority over other employees in some way. So leading
a research team would preclude you from joining an AI safety union (although
you likely have more negotiating power if you're a team lead).

## Visas, strikes, and getting fired

Many AI researchers are on visas, and cannot risk being fired[^2]. Even the
researches who aren't on visas likely have a significant amount of wealth tied
up in unvested stock options, and won't quit for a small infraction. The
employees risk _a lot_ by threatening to quit, so any credible threat of
quitting has to be matched by a serious issue with the internal safety policies
of the company.

## A more realistic alternative to a union

Possibly, a union isn't actually required. AI safety employees _could_ (in
theory) agree to resign if certain red-lines were crossed, and could make this
agreement public for their employer to see. _If_ this agreement was considered
a credible threat and _if_ many employees had signed the same agreement (as
opposed to hundreds of subtly-different agreements), then an employer _might_
take the contents of those agreements into account when considering business
decisions that raise safety concerns.

Such a contract would need the following:

- the terms of the contract must be public for the employer to see, such that
  the threat of resignation is predictable and avoidable.
- the number of employees who've signed the contract must be known to the
  employer. Note that the _identities_ of the employees aren't necessarily
  important:
  - entry-level employees (or employees on a visa) could anonymously sign the
    contract, liaising with a third party to share the count of employees
    who've signed the contract with the employer
  - However, high-profile employees could lend credence to a contract by
    publicly signing it. Anonymity should be the default, it shouldn't be required.
- the contract should come into force only if some significant fraction of the
  employees have signed it, taking no effect otherwise. This removes the
  first-mover problem, allowing employees to sign the contract without worrying
  that they'll be the only ones who quit.
- Trigger conditions should be serious. Resigning will come with significant
  risks due to unvested equity and visas that are tied to the employer, and the
  reasons for resigning should match the risks.
- Some very significant cost to the employee if they do not quit. I'm uncertain
  of what this could be, given that remaining with the company is a much better
  option financially.

## Exactly how you phrase the red-lines is critical

The hard part, of course, is defining the red lines that triggers
mass-resignation. I'm unsure what this would look like, given the diversity of
opinions around AI risks. Ideally we'd find some red-lines that are serious
enough that they indicate a meaningful risk, but not so serious that by the
time they're triggered it's too late and mass-resignation won't have any
effect.

Note that employees would be giving up _a lot_ by threatening to resign.
Nobody's going to give up millions of dollars in unvested equity just because
Claude kinda blackmailed someone in an evaluation. If the red-lines are not
sufficiently serious, nobody's going to believe the threat.

## Practicalities around signing the contract

A third party could adjudicate the signing, allowing employees to sign the
contract confidentially, while still reporting the number of signatories to the
employer[^1]. The third party could be charged with deciding if the red-lines have
been crossed, although this potentially just passes the buck instead of
resolving the issue.

Having a large number of signatories could be a _positive_ thing for
safety-focussed companies, since it's a costly signal that their employees
actually care about AI safety. On the other hand, if such a contract were
common knowledge and your "AI safety" company had no employees who had signed
it, this would be a good indicator that the company doesn't actually care about
the risks due to AI.

Many problems circle around the issue of companies credibly signalling their
commitments to AI safety. There are many dual-use research agendas such as
mechanistic interpretability which a company might pursue in the name of AI
safety, but later the approach changes when the company becomes interested in
seeking a profit. An expensive mechanism which allowed companies and their
employees to signal their commitment to AI safety would resolve many
uncertainties around company agendas and charters.

## Visas & employment protection

Note that non-profits could help by offering to employ people who are at risk
of losing their visa and who resign due to their employer reneging their safety
commitments. The annual H1B visa cap does not apply to non-profits, so a
non-profit could sponsor employees as soon as they quit. This would reduce the
downside to the employee for quitting. Grant makers like Coefficient Giving
could aid here, by offering to fund the legal bills and sponsorship for H-1B &
O-1A visas.

However, it could be catastrophic for the non-profit: they'd be committing to
hiring a significant number of highly-skilled workers all at once, since this
would only happen if a frontier AI company crossed the red lines and caused a
large number of employees to quit.

It's also illegal to pay someone without genuine employment. They need to be
actually doing work, not just sitting around. I don't think it'd be impossible
to _create_ genuine employment for dozens of AI safety researchers if they
suddenly become unemployed. But pre-emptively planning to spin up an
organisation that conveniently hires whoever quit their job is the sort of
thing that Uncle Sam might not look kindly on. I assume there's a way around
this without doing shady things, but I lack the legalese to know what this
looks like.

## The employer's best response

_If_ a large fraction of your employees had signed a contract like one
described above, your best move as safety-ignoring employer would be to
specification-game the red-lines, finding as many caveats that let you continue
to improve your AI without technically crossing the red-lines. I'm unsure

<!---
## A counter point: maybe you want your values to drift

Very plausibly, how you think of the risks around advanced AI before you join
the company vs when you've been there for a few years is very different. You
probably _don't_ want to be arbitrarily constrained by your past self who
didn't foresee your current circumstances. It's possible

## A case study: The Asilomar Conference on Recombinant DNA, California 1975

The mad lad [Paul
Berg](https://en.wikipedia.org/wiki/Asilomar_Conference_on_Recombinant_DNA#Background:_recombinant_DNA_technology)
was running an experiment where he was planning to combine the monkey virus
SV40 with the common bacteria _E. coli_. His colleague [Robert
Pollack](<https://en.wikipedia.org/wiki/Robert_Pollack_(biologist)>) (who looks
suspiciously like Wolverine) thought it might be a _bit of a bad idea_ to put a
cancer-causing monkey virus into a robust fast-replicating bacteria that has a
preference for human intestines.

<figure style="text-align: center;">
  <img src="ai-safety-union-robert-pollock.jpg" alt="Robert Pollack" style="max-width: 100%;">
  <figcaption>Robert Pollack</figcaption>
</figure>

Following this, they (and others) sent a letter to the National Academy of
Sciences which eventually resulted in the Asilomar Conference on Recombinant
DNA, convened to figure out how to not combine DNA in a way that causes lethal
viruses. They had some good ideas, like physically isolating dangerous
experiments and only using bacteria that would die easily if it escaped the
lab. I'm kinda jealous, it seems like the conference just happened and everyone
was like "yeah, sgtm, let's not make the monkey-super-virus". It's well worth
reading the
[wikipedia](https://en.wikipedia.org/wiki/Asilomar_Conference_on_Recombinant_DNA#Background:_recombinant_DNA_technology)
article about the conference, it's a good match for AI safety hazards.

-->

---

I think a contract as I've described above could provide useful signal about
which companies are willing to take costly actions to build safer AI systems,
and which are not. I suspect that what I've described is too naive in ways that
I can't see. I think that some variant of what I've described could work and
reduce the risks posed by advanced AIs.

[^1]:
    There's some interesting encrypted-information protocols (see
    [Callisto](<https://en.wikipedia.org/wiki/Callisto_(project)>)) that
    originated as a way to let sexual assault be reported anonymously such that
    a lawyer is only contacted if more than $k$ people report the same person.
    This approximately removes the need for a third party, although still
    requires someone who acts on the information once more than $k$ people have
    reported it.

[^2]:
    They are very unlikely to strike since _NLRB v. Mackay Radio_ established
    that economic strikers can be "permanently replaced" -- a crazy piece of
    legalese that means your employer can hire _permanent replacements_ to do
    the job while you're on strike. The job you had is now gone, which leaves
    you unemployed. Technically you get put on a "priority list" to be
    re-hired. I'm doubtful about whether you'd actually be re-hired. There is a
    slight caveat: strikes due to unfair labour practices are different, and do
    require the employer to give you your job back after the strike ends.
