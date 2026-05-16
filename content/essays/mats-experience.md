---
title: MATS 9 Retrospective & Advice
tags: [mats, essay, retrospective, advice]
---

I couldn't find a recent write-up from a MATS alum about what attending MATS
was like, so this is the thing that I wish I had. I attended MATS from January
to March 2026, on Team Shard with Alex Turner and Alex Cloud. It was a great
time! Applications for MATS are basically on a rolling basis nowadays, and I
can strongly recommend applying (to multiple streams) even if you think you're
not a great match.

With that being said, there's a lot I wish I knew going into MATS, so here's a
brain-dump of thoughts. It's not extremely polished, but I expect it'll be
useful nonetheless (none of this is endorsed by MATS, just my thoughts):

## Work ethic

I think most mentees were working 10-12, sometimes 14 hours a day Mon-Fri, and
probably 2-8 hours on Saturday and Sunday, often going out on some adventure or
party on the weekend. Exactly which hours people worked varied wildly. I
usually worked 8:30am/9am to 11pm/midnight, with breaks during the day, others
worked from midday into the early hours of the morning. This was surprisingly
sustainable (IMO); MATS puts a lot of effort into removing all other blockers
that you normally have in life so that you don't _have_ to do other things.

## Use more compute

MATS was a lot about learning to go _fast_, and I kept
on thinking I had a good strategy and then learning this wasn't enough.

1. Initially I struggled to run enough experiments, but then I realised I
   should structure my day around those glorious hours between midnight and ~8am
   when I would be asleep but I could leave a sweep running so that I'd wake up
   to results.
2. But then I realised that MATS was paying for compute, and also that I
   could either run 2 GPUs over 8 hours or 32 GPUs over 30 minutes. So I started
   running 32 GPUs over 30 minutes and got a _lot_ faster progress. And why not?
   It was a great time. (Runpod makes it a little painful to do this, see my
   notes about W&B sweeps for making this easier)

## Research requires a lot of compute

We went through a lot of compute (as measured in dollars), relative to what I
thought we would need. Or at least, I previously had the assumption that I
could have, without funding, paid for my own experiments if I didn't get into
MATS (just using my salary). I now think this is largely not possible, and that
you need funding to do serious work. Although I think we could have been a lot
more stringent, I would love to see research papers declare how much compute
went into each paper (and not just to create the results, but also for all the
initial experiments that lead up to the headline results). MATS budgets \$1k
per fellow per week (edit: MATS 10 will be $2k/week/fellow, to encourage more
ambitious projects), and my teammate and I ended up requesting 3k on top of
that. A few fellows who were doing RL experiments ended up in the \$40k+ range
for 3 months of experimentation.

## Applying for jobs during MATS (don't do it)

In general, I think this is not worth doing. It does depend, but if MATS is
your first introduction to the AI safety research space (as it was for me),
then I don't think it's worth trying to find a job during the MATS main
program. Applying for jobs takes a _lot_ of time, and going through the tech
interview rounds also takes a lot of preparation. All of this eats into the
time you have to work on your project, spending time on your project to get a
good reference from your mentor is far more valuable than spending that time
applying to jobs.

If you're already somewhat established and your mentor's reference doesn't
significantly improve your CV, then job-hunting during MATS is probably not bad
(although I'd question why you're doing MATS in this case?). If your CV would
be relatively weak without your mentor's endorsement (e.g. I had no first-author
papers at highly-rated conferences, no previous work with any high-profile
researchers, no PhD, no formal research experience, no Ivy League background)
then working as hard as you can during MATS is probably the most
highly-leveraged time you will ever have.

What's more, the MATS extension is the _perfect_ time to look for a job. This
is explicitly encouraged, and MATS is very happy if you end the extension early
because you got full-time employment. Reading between the lines, I think the
extension is structured the way it is to prevent fellows from finishing MATS,
going out into the world, realising they need to pay rent, and then taking the
first well-paying capabilities job they come across. The extension gives you
the breathing room to apply to multiple places and make a well-thought-out
decision about what's the best place to work, not just what place will pay the
bills.

## The serious people are in War Mode

I had a feeling about many of the people at MATS (especially the Anthropic
mentors), and I struggled to put this into words. They worked incredibly hard
and were endlessly motivated to do more work, but it wasn't driven by money or
stocks or promotions. I've now started to call this drive _war mode_, because
it's the best way I know to describe it. Most kinda-fun-to-do things become
less interesting when you're in _war mode_. It's partially a drive to get more
work done, but it's also a reduced enthusiasm for anything else. Ambling about
a book store or spending time with people you used to get along with becomes
less interesting if you're in _war mode_. I'm not sure if everyone would agree
with my characterisation, but it's the closest I've gotten to describing the
work ethic.

## Do you feel the AGI?

'Cause I do now. I thought I did, but now I _really_ feel it. It's easy to work
hard when you're pretty sure things will be bad-by-default. It's incredibly
motivating.

## Burn rate, efficiency, and decisions

One thing that was incredibly effective about MATS was that 1. it removed many
many decisions from my daily life (what to cook for dinner, when to go get
groceries, how to get to the gym, where to live, when to go get office
supplies, scheduling time with friends) and 2. it replaced them with answers
that were significantly more expensive but also more productive than my
default. Food is an obvious example, MATS does food through a delivery service
(Forkable) and we were given $25 to spend for each of lunch and dinner. Getting
food made and delivered to your door is much more expensive than preparing it
yourself, and given the choice I would have prepared it myself. But MATS
doesn't give you that option, it repeatedly forces the high-burn-rate
maximum-productivity option upon you, and then asks you to do great work with
the extra flexibility you now have.

This effect is true in many other smaller ways. The Ops team is _unbelievably_
willing to do irritating things to make your life easier or to let you focus on
the research. I frequently felt like I was abusing their help (although the
MATS team assured me that they'd say if I was crossing a line).

## "insider" information

Coming from a country where I can probably list
the AI safety people on two hands, it was shocking how many times we were
helped by knowing someone in MATS or having access to "insider" knowledge
about what different research labs were working on. None of this is secret,
it's just not public and probably not available online. e.g. "don't try that
idea, my friend from MIT is working on it and about to publish their results"
or "oh my college buddy has not-yet-published datasets that'll be really
useful, let me message them to see if we can use them". This was incredibly
useful! I would have gone down two independent dead-ends if I hadn't been at
MATS, because the ideas were good but they were already being pursued by
other people, and I only realised this when I was casually chit-chatting at
dinner with some other MATS fellows. I just mourn previous me who thought I
could do good research without a good network of researchers.

## Names & Faces

See [this page](https://boydkane.com/essays/mats-names), but basically I
strongly recommend using Anki for ~2 weeks before MATS to try and memorise
the names & faces of all the fellows you'll be in-person with.

### Fellows

I made it my goal to know every fellow who was in-person in Berkeley, and I
think I succeeded? Or at least, after week 2 I stopped seeing new faces around
and by week 3 I think I had everyone's names memorised and had had a small chat
with just about everyone. This was really good, strongly recommend. Even if
you're not a "social person", there's a big difference between socialising all
the time and knowing the fellows well enough that you can spot them in a
crowded room.

## Useful tools

Below are some tools you should know exist, they might be
perfect for the problem you have.

- **RunPod**: Server-based GPUs, what I used for basically all of MATS and
  continue to use mostly because I don't feel like moving. You can spin up GPUs
  in different datacenters, and you get an ssh command to log in. You can also
  use _network drives_ which are persistent (and cheap) storage across pods. So
  my setup ended up being: 2TB network drive in one zone, and then I'd have a
  persistent CPU attached to the drive (for basic code edits) and I'd spin up
  GPUs attached to the drive for training or bigger workloads. This worked
  well, I don't ever have to transfer my checkpoints/training data or anything
  like that because the network drive just has all my stuff. Also I made a
  docker container which had my dotfiles, vllm, Claude Code, etc all installed
  so everything was setup how I wanted it. The main painpoint is that runpod
  requires the GPU to be in the same datacenter as the network drive. So
  sometimes/often there's not a full 8xH100 pod available, I've got to scrounge
  for 2xH100s or fewer. It is a pain, but not enough that I ever tried to do
  something else.

- **Codex**: I never used codex, probably should have given it a go, but nobody
  ever said it was significantly better than Claude Code.

- **Modal**: basically serverless GPUs. You write a local python script with a
  modal function (containing all your training code), and modal ensures that
  function runs on the GPU you select. This makes it trivial to run a big sweep
  on ~50 GPUs at once. About 1.5x as expensive as runpod, but the convenience
  is very nice.

- **OpenRouter**: very nice! A bit pricey (they skim 5% off the top) and
  they're not open in any FOSS sense of the word, but it's incredibly
  convenient to test an idea against multiple LLMs via one UI without having to
  write any code. I quickly iterated on many research ideas via
  https://openrouter.ai/chat and had a good time doing it.

- **Hyperbolic**: teammates swore by hyperbolic (they basically do the same
  thing as runpod) but I never used them.

## Use more Claudes

- Get the $200/m Claude Code subscription, there's no point in hitting the usage limits.
- Another fellow just constantly used fast-mode (2x faster, 6x more
  expensive) which I never tried because I feared the withdrawal symptoms of
  having to go back down to 1x after nirvana.
- After getting burnt a few times, I settled on having two Claudes going at
  the same time on completely different experiments, and then sometimes a
  third/fourth to do small pieces of analysis/graphing/etc data collection. I
  tried to go up to 4 simultaneous "real" experiments and those experiments
  all had critical logical flaws due to me not being able to keep them all in
  my head enough to properly supervise Claude

## Build nice helper utilities for yourself

Claude makes it very easy to
create nice helper scripts for yourself, so do so!

- I had a little `view` script that visualised .jsonl chat-completion files
  in the terminal in colour and with nice formatting, this was great for
  getting me to actually review the data that I was using for training.
- I also (after struggling with jupyter notebooks) just got Claude to write a
  `plot.py` script which Claude would edit, and then this script emitted a
  `plots.html` file which I'd open in my browser. The HTML contained plotly
  plots so they were interactive (amazing!) and if I wanted changes I'd just
  tell Claude what to do. This was _so much better_ than trying to get Claude
  to work nicely with a jupyter notebook (and why bother with a notebook if
  you're not going to review the plotting code every time?)

## MATS-mentee-mentor dynamics

Very different to how I initially thought they were.

- MATS is much closer to a broker of sorts, facilitating relationships
  between independent mentors and independent mentees. Because of this, MATS
  both needs to attract good mentees, _and_ attract good mentors.
- So MATS is doing a sales-pitch _both_ ways: they want impressive
  mentors so they can attract impressive mentees, but they also want
  impressive mentees so they can attract impressive mentors.
- The mentors are no more "part of MATS" than the mentees are (at least,
  officially), so the RMs serve as the MATS representative for many things
  that involve the dynamics between mentees or mentors or mentors and
  mentees.

## Working with your mentors

They've got full-time jobs, but generally are doing MATS because they 1. like
seeing research get done that they'd otherwise not be able to do and/or 2. like
giving mentorship and working with new researchers. That being said, it's very
worthwhile to figure out how your mentor likes to work, and then take
advantage of that. Often your mentor will be unavailable by default (they're very busy), with
patches of free time to answer questions on Slack + a weekly project update. So
if you get a message on Slack, answer quickly! Your mentor probably has some time and
it's incredibly valuable to get some feedback midweek.

## Research managers

Amazing! very surprisingly helpful. It's probably better to model the RMs as
life coaches with specialisations in research rather than a regular manager,
although they do have other (important) roles. Bryce was the RM for Team Shard.

## Ops requests

This is basically a form you can fill out to fix ~any issue
you're having that's somehow related to the well-running operations of MATS.
Want different snacks? Ops request. Want a different monitor? Ops request.
Have some feedback that doesn't fit anywhere else? Are you sure it doesn't
fit anywhere else? Are you _really_ sure (there are a lot of feedback forms)?
Ops request. Found a leak? Ops request. Is the printer out of ink? Ops
request. Ops was _incredibly on the ball_. It was magical. I didn't feel like
I was worth this much effort from them, but it significantly improved my
experience at MATS to know that Ops was very responsive and very capable.

## Non-MATS events

There were several of these, and they were fun. Most of the MATS fellows tended
to huddle together, which is easy to start doing and easy to keep doing, but
I'd strongly recommend against it. Generally these things were fun, kinda
interesting, I'm glad I went, but they never led to anything crazy or
significant (for me at least, I'm sure crazy things happened). In general, the
opportunity cost for not working on your project is extremely high. It of
course can be _fun_, but if you're looking at events for the networking/job
prospects, it's probably better on the margin to work more on your project.

## Team Shard

Alex Turner (Google DeepMind) and Alex Cloud (Anthropic) were
my mentors, and this team is a bit unusual compared to other teams at MATS.
We spent ~5 of the 12 weeks of MATS "just exploring", doing small de-risking
experiments, and trying to find a project we were excited about. This was
really cool! Team Shard spends a lot of time finding a good idea, and we were
explicitly encouraged to pursue ideas we thought of. But the default for most
teams (AFAICT) is that you spend 0-2 weeks looking at one or two projects and
then get to work. Team Shard also (AFAICT) spends an unusual amount of time
doing "team things" like hiking, workouts, chatting together, brainstorming
ideas, talking with other mentees, and generally having a greater sense of
"being a team" vs other streams.

## Weekly updates

I was part of Team Shard, and we had weekly progress updates
every Thursday morning, followed by team lunch and other activities. Basically the entire week revolved around Thursdays. The other
team shard mentees sometimes reflected that Friday felt like a weird limbo
day because everything else was just a build up to Thursday. Thursday was
where experiments went to die and then be reborn again. Thursday was
incredibly valuable in terms of getting precise mentor feedback, but it was
often a little soul-crushing to realise that I had spent a full day on
something that was doomed from the start. Very educational! But the correct
mindset is easy to learn badly. We'd get just under an hour to present the
experiments from last week, discuss the results, and brainstorm plans for the
following week. There's also a lot of low-level encouragement to move faster
and to be more ambitious. I thought I was fast and ambitious, and then the
Alexes showed me that I could be _significantly_ faster and more ambitious.

My teammate and I did these via google slides, and largely followed the advice
[here](https://www.lesswrong.com/posts/i3b9uQfjJjJkwZF4f/tips-on-empirical-research-slides).
Some tips are harder to do, but a couple that are definitely worthwhile and
easy to implement:

1. Have one set of slides that you prepend to each week, instead of multiple
   slide decks (so you can reference previous work if it comes up).
2. Don't try to cram many things on one slide, just use dozens of slides.

You should also probably have an appendix of example prompts/training
data/etc.

## Keep a log of your mistakes

I didn't do this and mildly regret it. There were some repeated mistakes I made
in setting up experiments, and each time I thought that I wouldn't make that
error again. I don't think this cost me a _lot_, but it definitely did mean
that I had to re-run experiments which were otherwise solid.

## My running-experiments setup

Before MATS I had never used a GPU, and I went through several iterations
getting a decent setup before settling into something I was happy with. This
took a while, because I wasn't aware of how good the setup could be, so I kept
on thinking "oh this is quite fast and efficient" and then finding a better way
to run lots of experiments. I'm _not_ going to say how to setup an account or
launch a GPU, most of the GPU providers have a good first-time welcome flow and
this shouldn't be too hard. What I _will_ describe is the details of my setup,
so hopefully you can steal the parts you like and improve on the parts you
don't.

- **high level**: I like the terminal, so no GUIs for me `¯\_(ツ)_/¯`. Some
  tools: zsh, `iTerm2`, macOS, `ripgrep`, `uv`, `fd`, `bat`, `atuin`,
  `neogit`, `fzf`, `delta`, my dotfiles are
  [here](https://github.com/beyarkay/dotfiles/), get your agent to have a
  look.
- **Claude Code**: Since MATS is paying, I've got the $200/month
  subscription and constantly use Opus 4.6 (later 4.7 + auto mode) for all
  coding. Claude is _really_ sneaky about hiding bugs and being unscientific
  ("the eval scored 2/4, the other 2 are probably just noise, we're all good!"),
  but also _really_ good at writing code that works very quickly. It's well
  worth using, but requires a different mindset when reviewing code and for
  spotting flaws/issues. I'll put some more details about Claude usage below,
  although note that these will go out of date very quickly (this was using
  Claude Code at the start of 2026, using Opus 4.6 and Opus 4.7).
  - **plotting**: definitely use Claude for plotting your results. Claude
    is very good at HTML, very bad at notebooks. Get Claude to write
    python to generate HTML (with plots generated via plotly), and you'll
    have a good time with pretty and interactive plots.

  - **dataset generation**: Claude is very bad at getting another LLM to
    generate coherent, high quality datasets and then auditing the dataset
    for quality. Claude will claim a dataset is good, but manual checking
    reveals the dataset to be not strongly exhibiting the trait we care
    about, or it is too "meta" (e.g. the response talks _about_ exhibiting
    the trait instead of actually just exhibiting the trait, and Claude
    doesn't pick this up), or Claude will do regex to check for plausible
    words associated with the trait of interest but not actually read the
    responses. This is made worse because Claude will talk _as though it had
    done a thorough audit_ even though it had vaguely glanced in the right
    direction.

  - **"double blind" reviews and scientific thinking**: Claude doesn't have
    a good practical understanding of scientific thinking in a way that's
    hard to describe. Often, I asked it to spawn sub-agents to "blindly"
    review two datasets (one exhibiting some behaviour, one not exhibiting
    some behaviour) and ask the subagent to guess what the behaviour was.
    Claude would frequently put the name of the behaviour _in the file name_
    and ask the subagent "what behaviour is systematically expressed in
    `examples-of-sycophancy.jsonl`" (I'm not exaggerating). Claude will very
    happily talk about the mechanisms of blind review, but does not reliably
    implement them, and frequently _reports_ that it has done a blind review
    despite this. There are other ways in which Claude doesn't "think
    scientifically", and will very happily cherry-pick results, make claims
    that are not backed up by the experimental results, fail to find (fairly
    simple) flaws in an experimental setup, disregard negative evidence as
    noise, put big green emojis next to trivially-true things ("dataset has
    500 rows✅") and hide or not equally emphasise problems ("dataset only
    contains <think> tags, no responses").

  - **repetitive tasks**: Claude is very lazy at repetitive tasks that can't
    be programmatically done via a tool (even if that tool is another LLM).
    e.g. "check these 150 responses for sycophantic behaviour" or "evaluate
    which of these 20 responses are the most pirate-like". I've gotten around
    this by giving Claude an OpenRouter key and getting it to write a script
    to call another LLM, but even then Claude will _often_ "spot check" <10%
    of items and call it a day.

  - **auto mode**: Auto mode is great, you should have it on.

  - **permissions**: Ensure you have destructive actions (`git push`, `git
reset`, `rm`, `find`, others, see
    [here](https://github.com/beyarkay/dotfiles/blob/main/claude-settings.json))
    set to "ask" or "deny".

- **neovim**: I've used vim/nvim for several years. If you don't use vim
  keybindings I strongly recommend learning them (even if you use a non-vim
  editor, using a vim keybindings plugin is clearly superior to using your
  mouse).
- **tmux**: Absolutely essential for keeping Claude Code running on a GPU or
  remote machine. At the start I had one local tmux session and I'd SSH into
  remote GPUs from there. This was convenient (everything is in one session)
  but meant that closing my laptop quit the session (not good). So I now have
  one iTerm2 window per machine, and I ssh into the machine then start tmux
  on that machine. This ensures that Claude and other jobs keep running even
  when I disconnect. Claude is pretty good about controlling tmux itself, so
  you can have sessions, windows, panes, etc and Claude will run long-running
  jobs in other panes or check on other panes to see what's happening. This
  is also useful for running multiple Claudes at once. You absolutely need to
  change the default keybindings though, the defaults are _terrible_.
- **docker**: I used a custom docker container that got the GPUs setup in the
  way I liked. This was a bit of a pain (downloading + setting up the
  container added 2-6 minutes to every GPU I wanted to start) but I think
  without it I would have been manually doing the same installation most
  times so `¯\_(ツ)_/¯`.
- **RunPod**: The runpod GUI is a bit of a pain, but the runpod CLI isn't
  much better. I had a 2TB volume in one region which stored
  checkpoints/logs/datasets/etc, and then I had a semi-permanent CPU that was
  attached to this volume. I'd use this CPU to do non-GPU work like calling
  the OpenRouter API or writing code, and then I'd connect a 1xH100 node when
  I wanted to check the code was working, and finally I'd spin up many many
  RunPod nodes (often 1xH100s or 2xH100s, my work rarely needed more) when I
  was ready to do the "proper" run of an experiment across multiple different
  configurations. These nodes would all be connected to the 2TB volume, so
  they'd read datasets from the volume and write checkpoints to the volume,
  and I never had to worry about syncing data before shutting down the nodes.
  It's just all written to the same place by default, and I can happily kill
  the pod once it's done. This _does_ mean that all my nodes have to be in
  one RunPod region, and this meant that sometimes I struggled to get as many
  GPUs as I wanted. I always got _some_ GPUs, but every now and again I
  couldn't get enough to make my experiment maximally parallel. This was
  worthwhile for me, but might not be for you.
- **vllm**: You should use vllm for doing local inference of models you've
  fine-tuned or for just doing lots of queries against open-weight models.
  It's a _lot_ faster (and cheaper) than using OpenRouter.
- **wandb**: Weights & Biases is great, I love using it. Every experiment I
  ran was logged and tracked via W&B, and I think basically every tool has
  W&B integrations nowadays. You can track experiments in real time via
  their website, and don't have to worry about storing the
  evaluation/validation/training metrics yourself (they store it for you). If
  you've got >100s of experimental runs, it can be a bit slow to download all
  the data locally for plotting purposes, but it's very nice not having to
  worry about syncing the data manually. I used their "sweep" feature
  extensively, it let's you really easily orchestrate multiple iterations of
  the same experiment (e.g. sweep over learning rates, or datasets, or LLMs,
  etc), and then running that experiment over multiple nodes is as simple as
  executing `wandb agent <sweep-id>` on each machine that you want to run
  experiments for you. W&B takes care of collecting results, distributing new
  runs, and graphing incremental progress.

## Lighthaven

This place is really cool, and a large part of my positive experience at MATS
was due to it being at Lighthaven. Future cohorts won't be at Lighthaven
though, so I won't discuss it in any detail. If you're in Berkeley, you should
try to visit for a few days and work from here (:

## Getting setup with the Compute team

You should request lots of API keys from compute in the first ~week, just with
~$100 each to start off (e.g. hyperbolic, runpod, openrouter, openai,
anthropic, modal, maybe tinker). It'll make it a lot easier to explore the
different services and find something that works for you (if you haven't done
much exploration already).

---

## Extra thoughts after posting this

Many people seemed to like this, so here's some more thoughts that came up
during in-person/online discussions:

### MATS-exclusive opportunities

There were more formal opportunities, like seminars from Neel Nanda/Nick
Bostrom/Ajeya Cotra/Fabian Rogers/Buck Shlegeris/Jesse Hoogland/many others.
There were various MATS-hosted networking events, such as after EAG or at the
end/start of the program. There were organised opportunities, like 4-hour AI
wargame scenarios as was used for preparation for AI 2027. There were also a
lot of casual things that came from being around Lighthaven for most of my
waking hours:

- being asked to review not-yet-released AI safety websites
- chatting with the longer-term residents of Lighthaven (who I won't dox but I
  had lots of fun talking with!)
- being asked to participate in various crowd-sourced things like a scenario
  where AI maybe sabotaged a research codebase.
- Attending the Win-Win AI Anti-debate hosted by Liv Boeree
  between Daniel Kokotajlo and Dean Ball.

### MATS clout

Love it or hate it, being able to say "I'm a MATS Fellow" absolutely opens
doors to me that weren't available before. And if you get into MATS, you
absolutely should try to make use of this clout. I'm not sure what this will
look like for you, but it might be attending exclusive events, getting
interviews that you usually wouldn't have, getting datasets/models/unreleased
papers, getting favours from large labs. I don't want to cause a wave of MATS
fellows feeling like they own the place (you _don't_) but you should question
your assumptions about what you can and can't do with a well-written cold
email. I'm pretty sure this also got me more and more interesting 1-1s at EAG
than I otherwise would have been able to get.

### The MATS #opportunities channel

It has an incredible number of job postings and other ad-hoc or semi-exclusive
things being posted (thanks John!). Partially this is a mindset thing (it's
cool seeing how many opportunities are out there! Much more than I thought) and
partially this is an ease-of-access thing (seeing options come and go makes me
more relaxed in thinking I'll be able to find a nice job after my MATS research
is done).

### The people on the MATS slack

The number of high-profile people on the MATS slack who are happy to talk about
their work is incredibly powerful. At this point, if I've got queries about an
AI safety research paper I'm _surprised_ if I can't find one of the authors on
the MATS slack so that I can send them a DM with my question(s). It's a very
high-signal platform, so there's a lot of trust that a slack DM is from someone
who's not going to waste your time. Knowing that I could DM Owain asking for
feedback on a paper is incredibly motivating to make that paper as good as it
can possibly be.

### MATS team is constantly integrating feedback

This is one of those things where you don't know the ceiling until you see
someone above it. The MATS team is very competent at encouraging people to
give feedback, making it easy to give feedback, collecting that feedback, and
then quickly (often <6hrs) changing how the program works to address the
feedback. The quick and obvious integration of the feedback makes me more
likely to give more feedback.

<!--
AI written code as a danger
AI as unit tests for the legal code
-->
