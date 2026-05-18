---
title: "Advice on interviewing candidates for AI safety fellowships"
unlisted: true
tags: [essay, mats, advice, retrospective]
---

Around July last year I decided I was going to go all in on technical AI safety
research. To do that I'd need to get into an AI safety fellowship, quit my job,
and sell everything that was in my flat in South Africa (hopefully in that
order).

<!--
I had a really fun job. And a really pretty flat. And South Africa is a
really fun place. But I had spent two years
-->

I applied to every fellowship that was open[^2], and got rejected from several
of them before being accepted into MATS on Team Shard around mid-November. I
handed in my notice the following Monday, and told my landlady that I had to
move out in 6 weeks because I was leaving the country.

MATS went great! Me and my co-author's project got the first spotlight talk at
the MATS Symposium, we've submitted to NeurIPS, and I'm more hopeful than ever
that I'll be able to help reduce x-risk.

<!--
I assert that the purpose of multiple rounds of interviews and applications is
to find a low-noise and low-cost estimate of a candidate's ability to do
whatever it is you want them to do.

## The purpose of fellowship applications

It is to get an low-cost low-noise estimate of a candidates ability to do
some task. It needs to be low cost (both in terms of dollars and in terms of
hours) because evaluating more candidates improves the expected quality of the
candidates you accept. It needs to be low noise because falsely accepting weak
candidates or falsely rejecting strong candidates also reduces the expected
quality of the candidates you expect.
-->

## Things are good, but they could be so much better

I'm hoping that any goodwill I earned from [this
post](https://www.lesswrong.com/posts/eFD3rozNCZKMe4rTs) ~can be sacrificed as
a peace offering~ allows me to make suggestions without people assuming I
have ill intent. If AGI goes well, I believe AI safety fellowships will have
played significant role. I hope these fellowships can become even more
effective than they currently are at putting good people in good places. And I
hope this post helps these fellowships be marginally more effective.

## Don't say "we were impressed by your profile" unless you mean it

I got a lot of rejections, many of them coming after I had spent time
submitting my application and after someone on that fellowship's team had spent
time reviewing that application. These rejection letters generally sounded
like:

> we are genuinely disappointed that we couldn't find a match for you this
> time, as we were impressed by your profile

This is nice to hear! But also it comes across as a bit hollow: I would _love_
to see fellowships put some weight behind the words. One option is to actively
provide references for rejected (but promising) candidates. I'm imagining
something like:

> **Letter of Recommendation**
>
> `[name]` applied to `[fellowship]` in `[year]` and we were very impressed by their
> application. We thought they were very strong because of `[specific points]`.
> We thought their main weak points were `[specific points]`. We were unable to
> offer them a position due to `[specific reason]`, but we identified them as
> having strong potential for `[field]`. We can recommend fast-tracking their
> application, and have attached their responses to our questions for your
> perusal. Please contact `[name]` at `[email address]` with questions.
>
> Kind regards,
>
> `[name]`, `[fellowship]`

This is strong letter: it makes falsifiable claims, it makes clear the decision
process of the fellowship, it makes recommendations to other fellowships. It
also takes time to write, significantly more time than sending an apology
rejection email. If a candidate is not strong enough that you'd not feel
comfortable writing this letter, then don't! But the status quo is a mixture of
appeasement and obscurity, which does not encourage rejected candidates to
improve.

This letter does something else: it allows other fellowships to spend less time
reviewing promising candidates, if they had already been reviewed by another
fellowship. And in a complementary fashion, _you_ can spend less time reviewing
promising candidates if you receive a letter of recommendation from a
fellowship you trust.

Letters of recommendation would increase the capacity of the AI safety field,
but making letters of recommendation the norm is a collective action problem
that I suspect only the big players (MATS, Astra, Anthropic Fellows Program)
can kick-start.

## Make the whole application timeline clear upfront

Many applications did not do this. During the application process, candidates
want to know how many rounds of "You ask, I respond" there will be. They want
to know the deadlines for all those responses, and how much work is expected
for each of their responses.

Not being clear about timelines makes it impossible for candidates to ensure
they've got free time to complete those applications properly. This is not a
case of "good enough candidates will figure it out" because poor communication
adversely selecting for candidates who have lots of time, instead of selecting
for the best candidates. This adds noise to your application, increasing false
positives and false negatives.

If you do not know those deadlines before you open your applications, please
communicate your best estimates of these deadlines.

## Word limits, character limits, and timed forms

Word limits are good, but please ensure your website calculates the word count
as the candidate is typing, and displays this clearly. No, the candidate can
not just "use a word counter" because (amongst other edge-cases) some
applications thought hyphenated words ("fine-tuning") were one, others thought
it were two. Please tell the candidate what the count is, and tell them _before_
they click submit.

If you can, please quietly accept ~5% over the word limit without penalty.
Having a word limits ensures the candidate can think concisely, and reduces the
reviewer burden. I don't think being <5% over the limit detracts from either of
those goals.

In light of the above, I'd recommend having _alphanumeric-only character
limits_ instead of word limits or plain character limits. Candidates can cheat
word limits by hyphenating words, by playing tricks with the formatting, or
otherwise making their response harder to read. That's terrible! Don't create
selection pressure for hard-to-read responses! Similarly, imposing a
_character_ limit encourages responses that are harder to read by removing
paragraphs, headings, formatting, \_emphasis\_, citations, etc.

If you only count alphanumeric characters in your limit, then you're not
penalising candidates for adding paragraphs, headings, \_emphasis\_, or other
punctuation that makes responses easier to review, while still enforcing
something similar to a semantic limit on complexity.

## Proctored tests are a terrible, terrible time

Mostly because proctoring software is really bad. I'm aware that proctoring
solves a real problem, and I'm in favour of the platonicly-ideal version of
proctoring. I imagine that really good software wouldn't be more stressful than
an in-person test, but I've _never_ used good proctoring software. Bad
proctoring software artificially adds noise to your estimate of a candidate's
quality, meaning you'll accept people you should have rejected, and reject
people you should have accepted. Some specific recommendations:

- Give candidates a "dummy" assessment that they can take at their leisure, so
  they're not figuring out the weird proctoring software while also trying to
  complete a timed assessment. This assessment should be as close to the real
  thing as possible, and candidates should be able to take it as many times as
  they'd like. Proctoring software is really bad at indicating the status of
  the session (is it working? has my timer started? has my timer finished? is
  my screen being recorded properly? can I open other tabs? can I go to the
  bathroom? if the software freezes, can I refresh the page safely? can I
  change WiFi networks without the software ending my session? etc etc) and
  giving a "dummy" assessment helps mitigate the issues caused by this.

- Encourage candidates to manually record their screens _in addition_ to using
  the proctoring software. I had a proctoring session be cancelled without
  explanation during my timed assessment, and was only able to submit my
  application because I was recording my screen and had proof to show the
  fellowship administrator.

- Most proctoring software offers "live troubleshooting", but most of the time
  this is slow and your timer continues to tick down while you're doing the
  troubleshooting. This is less than helpful when you're attempting to do your
  best.

- Most proctoring software doesn't let you export your answers, so if the
  software decides to reset your progress without warning, you will have lost
  everything. This problem is solved by giving candidates a "dummy" assessment.

- Most proctoring software requires you to take a video of the room your in
  before you start, and this is fine. _Some_ proctoring software requires you
  to take a video of your room _after the timer has started_ and this is not
  fine. Please ensure your software does the former, and not the latter.

- For one proctored session, I had to use my cell phone data for the 3 hour
  proctored video call because the proctoring software just wouldn't let me
  connect via my WiFi, with no explanation given about what was wrong with my
  WiFi. This problem is solved by giving candidates a "dummy" assessment.

## Make it clear who you've accepted in the past

This point is hard to make with certainty, but if you are happy with the
fellows you've accepted in the past, you should make some information about
them public in your applications. For example: alma mater, previous
fellowships, previous AI safety experience, education level, gender, age,
technical background. The goal here is to encourage promising candidates to
apply. Many fellowships have built up an aura of being impossible to get into,
and this is only valuable so far as it is true. If a candidate believes the
odds are 10,000 to 1 and does not bother applying, this is a loss to the
fellowship if the odds were actually 1000 to 1. Applications should encourage
candidates who are more likely to get in, and similarly discourage candidates
who are unlikely to get in.

## Be aware of other fellowships' deadlines

While one week is enough to complete _one_ fellowship's round-2 application,
it's certainly not enough to complete _multiple_ fellowships' round-2
applications.

I'm sure there are reasons for fellowships clustering their deadlines together
so that they're all on the same weekend. But if you choose to do this, please
be aware of the cost: the increased workload will cause even very good fellows
will _appear worse_ if your deadline is the same as another large fellowship's
deadline. The best candidates will likely ignore less-prestigious applications
if they happen to have a deadline coinciding with more-prestigious
applications.

If tracking the various fellowship's deadlines is too much to ask, please
consider giving two weekends between announcing a round of interviews and the
deadline for those interviews. This allows fellows to give one weekend to one
fellowship, and the other weekend to your fellowship. Allowing for two weekends
is especially important if you want to receive applications from people with a
full-time job and not just bright-eyed bushy-tailed college students.

## Be aware of your _own_ deadlines

Most fellowship applications have two tiers: first you apply to the fellowship,
and second you apply to the mentor(s) you'd like to work with. If you're asking
for candidates to review many (10+) mentors and then to apply to these mentors,
please be aware of how long this could take to do properly. If a candidate
wants to spend ~20m reviewing each mentor, that still takes 3 hours(!) to look
through them all. This is _before_ the candidate has started to answer the
mentor's questions. When deciding on deadlines, be aware that _even deciding
which mentors to apply for_ takes a long time.

If possible, make the list of mentors (and their biographies, research
interests, etc) available publicly and early so that candidates can start
reviewing the mentors as soon as possible. Gating this information behind the
first round of interviews just reduces the quality of applications that the
mentors end up reviewing, as the candidates would have had less time to
consider which mentors to apply to.

## Fellowships compete for fellows

If your fellowship is clear and upfront about what's expected of the candidates
during applications, gives reasonable deadlines and makes reasonable
accommodations, then your fellowship will have better fellows applying to it!
Just as candidates compete for limited places in fellowships, the best
candidates will have multiple choices for which fellowship to attend. It's in
your best interests to ensure the best candidates get through to your final
round.

## Anywhere-on-earth is the only timezone that matters

Most rationalist fellowships are very good about this (thanks!), but it's worth
saying: The only timezone for deadlines should be anywhere-on-earth.

## Your application is probably northern-hemisphere centric

It's very weird seeing DEI disclaimers about equality and then having the
applications be in "winter" while it's a bright summer's day outside.

[^2]:
    For context, I applied to: Astra, CAIRF, ERA, MARS (multiple streams),
    MATS (multiple streams), Pivotal, SPAR.
