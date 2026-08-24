---
title: "Schedule meetings using the Pareto principle"
author: Boyd Kane
tags:
  [
    essays,
    productivity,
    epistemics,
    coordination,
    communication,
    forecasting,
    meetings,
    pareto-principle,
  ]
---

| Read on [LessWrong](https://www.lesswrong.com/posts/n6MZ26HNQrJToAsJ8/schedule-meetings-using-the-pareto-principle) |

Basically every meeting is scheduled with an explicit duration. This is
convenient for scheduling, but it implies that the entire meeting is equally
likely to give you value. I think there's a better way to schedule meetings
that avoids this.

![](assets/meeting-value-over-time.png)

If you're wanting to meet with someone, presumably you expect that meeting to
be valuable to you. But there's always the question of how long the meeting
should be: ideally you'd like the meeting to end when you stop getting value
from the meeting, but you can't know in advance when this point will be.

Often when the meeting starts it is extremely valuable, because you've not yet
spoken with this particular person about this particular topic. But then as the
meeting goes on, you exhaust the initial questions you had and things become
progressively less interesting[^1]. After some amount of time (it might be 10
minutes, an hour, longer), the amount of value you are getting from the
conversation starts to drop. Specifically, it drops below some threshold such
that it's no longer valuable for you to keep meeting. At this point, you'd
rather end the meeting than continue.

Can we do better?

_Scheduling_ the duration of a meeting is intrinsically a prediction problem:
you're trying to forecast how long it'll take before you run out of interesting
things to discuss. But setting a meeting to be exactly 30m (and so committing
to being in the meeting for exactly 30 minutes) has the implication that for
exactly half an hour you'll be getting incredible value, but immediately
afterwards you'll be getting zero value from the meeting. This is untrue: the
value of a meeting usually starts out high and then slowly decreases as the
meeting goes on and more things get discussed[^2].

I argue that the way we schedule meetings should embrace this, and we should
communicate various percentiles for when we think we'll get some amount of the
total value out of the meeting.

For example, I'm fairly well-versed with [wandb.ai](https://wandb.ai/), a
ML-focused logging and metrics tool. A MATS fellow asked for us to talk about
it and for me to run through how it works. We were figuring out how long to
meet for, and I thought I could describe 80% of the value in 15 minutes, and
then probably get to 95% of the value in 45 minutes. This is useful
information! I think giving estimates (however rough) of the time-to-80% value
and time-to-95% value is very useful, and then being happy if the person you're
meeting with cuts the meeting short somewhere after your time-to-80%
(especially since meetings can have diminishing returns to your time).

In terms of implementing this, I'd suggest agreeing beforehand on when you
mutually think you'll have shared 80% and then 95% of useful information, and
then scheduling a meeting for the 95% duration. Commit to checking in at the
80% duration and asking if you'd like to keep going. Sending or linking this
essay will give some useful context if you get weird looks.

Importantly, part of the problem is the social friction around ending meetings
early. Having a pre-agreed time-to-80%-value is a useful Schelling point which
makes it easier to end a meeting early.

<!--
You also probably aren't explore-exploit-maxing.
-->

[^1]:
    unless you're talking to those amazing people in your life where the
    conversation begets more conversation, and there's never really a decrease
    to how much value you get from talking to them. But for this essay I'm
    mostly talking about business/work/research meetings, where you have many
    other things you'd prefer to be doing with your time.

[^2]:
    Okay so it _is_ possible that this isn't the case: you could have a
    meeting where at first you have nothing to talk about, but then you
    randomly stumble across a shared interest and proceed to have really
    interesting conversations for six hours. If you're lucky, these people turn
    into friends and/or partners (:
