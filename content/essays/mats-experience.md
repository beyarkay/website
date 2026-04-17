---
unlisted: true
title: MATS 9 experiennce
tags: [needs-writing]
---

I couldn't find a write-up from a MATS alumni about what attending MATS was
like, so this is the thing that I wish I had. I attended MATS from January to
March 2026, on Team Shard with Alex Turner and Alex Cloud.

- you should request lots of API keys from compute in the first ~week, just
  with ~$100 each to start off (e.g. hyperbolic, runpod, openrouter, openai,
  anthropic, modal, maybe tinker). It'll make it a lot easier to explore the
  different services and find something that works for you (if you haven't done
  much exploration already)

- **Modal**: basically serverless GPUs. You write a local python script with a
  modal function (containing all your training code), and model ensures that
  function runs on the GPU you select. THis makes it trivial to run a big sweep
  on ~50 GPUs at once. About 1.5x as expensive as runpod, but the convenience
  is very nice.

- **RunPod**: Server-based GPUs, what I used for basically all of MATS and
  continue to use mostly because I don't feel like moving. You can spin up GPUs
  in different datacenters, and you get an ssh command to login. You can also
  use _network drives_ which are persistent (and cheap) storage across pods. So
  my setup ended up being: 2TB network drive in one zone, and then I'd have a
  persistent CPU attached to the drive (for basic code edits) and I'd spin up
  GPUs attached to the drive for training or bigger workloads. This worked
  well, I don't ever have to transfer my checkpoints/training data or anything
  like that because the network drive just has all my stuff. Also I made a
  docker container which had my dotfiles, vllm, claude code, etc all installed
  so everything was setup how I wanted it. The main painpoint is that runpod
  requires the GPU to be in the same datacenter as the network drive. So
  sometimes/often there's not a full 8xH100 pod available, I've got to scrounge
  for 2xH100s or fewer. It is a pain, but not enough that I ever tried to do
  something else.

- **OpenRouter**: very nice! a bit pricey (they skim 5% off the top) and
  they're not open in any FOSS sense of the word, but it's incredibly
  convenient to test an idea against multiple LLMs via one UI without having to
  write any code. I quickly iterated on many researsch ideas via
  https://openrouter.ai/chat and had a good time doing it.

- **Hyperbolic**: teammates swore by hyperbolic (they basically do the same
  thing as runpod) but I never used them.

- **Weights & Biases, wandb**: wandb is great, strong recommend. There's two
  main things I love about the service:
  1. they're a great place to store + visualise experiment data as the
     experiments are running, and
  2. wandb sweeps are a really nice orchestration tool for running many
     variants of the same experiment.

- **use more compute**: MATS was a lot about learning to go _fast_, and I kept
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

- **use more claudes**:
  - Get the $200/m claude code max pro fast ultra whatever, there's no point in
    hitting the usage limits.
  - Another fellow just constantly used fast-mode (2x faster, 6x more
    expensive) which I never tried because I feared the withdrawal symptoms of
    having to go back down to 1x after nirvana.
  - After getting burnt a few times, I settled on having two claude's going at
    the same time on completely different experiments, and then sometimes a
    third/fourth to do small pieces of analysis/graphing/etc data collection. I
    tried to go up to 4 simultaneous "real" experiments and those experiments
    all had critical logical flaws due to me not being able to keep them all in
    my head enough to properly supervise claude

- **codex**: I never used codex, probably should have but nobody every said it
  was significantly better than Claude code.

- **nice helpers**: claude makes it very easy to create nice helper scripts for
  yourself, so do so!
  - I had a little `view` script that visualised .jsonl chat-completion files
    in the terminal in colour and with nice formatting, this was great for
    getting me to actually review the data that I was using for training.
  - I also (after struggling with jupter notebooks) just got claude to write a
    `plot.py` script which claude would edit, and then this script emitted a
    `plots.html` file which I'd open in my browser. The HTML contained plotly
    plots so they were interactive (amazing!) and if I wanted changes I'd just
    tell claude what to do. This was _so much better_ than trying to get claude
    to work nicely with a jupyter notebook (and why bother with a notebook if
    you're not going to review the plotting code every time?)

- **compute** we went through a crazy amount of compute, relative to what I
  thought we would need. Or at least, I previously had the assumption that I
  could have, without funding, paid for my own experiments if I didn't get into
  MATS (just using my salary). This is largely not possible, although I think
  we could have been a lot more stringent, I would love to see research papers
  declare how much compute went into each paper (and not just to create the
  results, but also for all the initial experiments that lead up to the
  headline results). MATS budgets $1k per fellow per week, and my teammate and
  I ended up requesting 3k ontop of that. Some fellows who were doing RL
  experiments ended up in the 40k+ range.

- **"insider" information**: coming from a country where I can probably list
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

- **MATS-mentee-mentor dynamics**: very different to how I initially thought
  they were.
  - MATS is very much a broker of sorts between independent mentors and
    independent mentees. So MATS both needs to attract good mentees, _and_
    attract good mentors.
  - Also, the mentors are no more "part of MATS" than the mentees are (at
    least, officially), so the RMs serve as the MATS representative for many
    things that involve the dynamics between mentees or mentors or mentors and
    mentees.
  - Also, MATS is doing a sales-pitch _both_ ways: they want impressive
    mentors so they can attract impressive mentees, but they also want
    impressive mentees so they can attract impressive mentors.

- **research managers**: amazing! very surprisingly helpful. Probably closer to
  model the RMs as life coaches, although they do have other (important) roles.

- **work ethic**: I think most mentees were working 10-14 hours a day Mon-Fri,
  and probably 2-8 hours on Saturday/Sunday. Obviously some more, some less.

- **ops requests**: this is basically a form you can fill out to fix ~any issue
  you're having that's somehow related to the well-running operations of MATS.
  Want different snacks? Ops request. Want a different monitor? Ops Request.
  Have some feedback that doesn't fit anywhere else? Are you sure it doesn't
  fit anywhere else? Are you _really_ sure (there's a lot of feedback forms)?
  Ops Request. Found a leak? Ops Request. Is the printer out of ink? Ops
  request. Ops was _incredibly on the ball_. It was magical. I didn't feel like
  I was worth this much effort from them, but it significantly improved my
  experience at MATS to know that Ops was very responsive and very capable.

- **fellows**: I made it my goal to know every fellow who was in-person in
  Berkeley, and I think I succeeded? Or at least, after week 2 I stopped seeing
  new faces around and by week 3 I think I had everyone's names memorised and
  had had a small chat with just about everyone. This was really good, strongly
  recommend. Even if you're not a "social person", there's a big difference
  between socialising all the time and knowing the fellows well enough that you
  can spot them in a crowded room.

- **non-MATS events**: there were several of these, and they were fun. Most of
  the MATS fellows tended to huddle together, which is easy to start doing and
  easy to keep doing, but I'd strongly recommend against it. Generally these
  things were fun, kinda interesting, I'm glad I went, but they never lead to
  anything crazy or significant (for me at least, I'm sure crazy things
  happened). In general, the opportunity cost for not working on your project
  is extremely high. It of course can be _fun_, but if you're looking at events
  for the networking/job prospects, it's probably better on the margin to work
  more on your project.

- **Team Shard**: Alex Turner (Google DeepMind) and Alex Cloud (Anthropic)

- **weekly updates**: I was part of Team Shard we had weekly progress updates
  every Thursday in the mornings and then had team lunch and other activities
  on Thursdays. Basically the entire week revolved around Thursdays. The other
  team shard mentees sometimes reflected that Friday felt like a weird limbo
  day because everything else was just a build up to Thursday. Thursday was
  where experiments went to die and then be reborn again. Thursday was
  incredibly valuable in terms of getting precise mentor feedback, but it was
  often a little soul crushing to realise that I had spent a full day on
  something that was doomed from the start. Very educational! But the correct
  mindset is easy to learn badly. We'd get just under an hour to present the
  experiments from last week, discuss the results, and brainstorm plans for the
  following week. There's also a lot of low-level encouragement to move faster
  and to be more ambitious. I thought I was fast and ambitious, and then the
  Alex's showed me that I could be _significantly_ faster and more ambitious.

- **do you feel the agi?**: cause I do now. I thought I did, but now I _really_
  feel it. It's easy to work hard when you're pretty sure things will be
  bad-by-default. It's incredibly motivating.

- **war mode**: I had a feeling about many of the people at MATS (especially
  the Anthropic mentors), and I struggled to put this into words. They worked
  incredibly hard and were endlessly motivated to do more work, but it wasn't
  driven by money or stocks or promotions. I've now started to call this drive
  _war mode_, because it's the best way I know to describe it. Most
  kinda-fun-to-do things become less interesting when you're in _war mode_.
  It's partially a drive to get more work done, but it's also a reduced
  enthusiasm for anything else. Ambling about a book store or spending time
  with people you used to get along with becomes less interesting if you're in
  _war mode_. I'm not sure if everyone would agree with my characterisation,
  but it's the closest I've gotten to describing the work ethic.

- **burn rate, efficiency, and decisions**: one thing that was incredibly
  effective about MATS was that 1. it removed many many decisions from my daily
  life (what to cook for dinner, when to go get groceries, how to get to the
  gym, where to live, when to go get office supplies, scheduling time with
  friends) and 2. it replaced them with answers that were significantly more
  expensive but also more productive than my default. Food is an obvious
  example, MATS does food through a delivery service (Forkable) and we were
  given $25 to spend for each of lunch and dinner. Getting food made and
  delivered to your door is much more expensive than preparing it yourself, and
  given the choice I would have prepared it myself. But MATS doesn't give you
  that option, it repeatedly forces the high-burn-rate maximum-productivity
  option upon you, and then asks you to do great work with the extra
  flexibility you now have.

  This effect is true in many other smaller ways. The Ops team is
  _unbelievably_ willing to do irritating things to make your life easier or to
  let you focus on the research. I frequently felt like I was abusing their
  help (although the MATS team assured me that they'd say if I was crossing a
  line).

- **What I did to get into MATS (IMO)**
- **Housing**

- **Arrival/before MATS**

- **Lighthaven**
