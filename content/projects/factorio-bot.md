---
unlisted: true
title: Automating factory creation in Factorio using RL
tags: [project, automation, factorio, reinforcement-learning, machine-learning]
---

# Experiment log

This is just an ad-hoc log of different experiments that I ran, my findings,
and potential next steps. Mostly for keeping track of what I did in order to
better write the blog post

## 2025-06-08

- Ripped out the part that "intelligently" starts with a complete map and then
  makes it harder over time. It had a bug somewhere in it, I need to just get
  something working. I took too many jumps at once and paid the price.
- Working a bit on interpretability and being able to understand the model's
  actions
- Substantially trimmed & improved the logging, removing unused metrics and
  adding more useful metrics like
  - the fraction of actions taken by the model which were invalid
  - the number of entities placed over the total number of entities required
    to solve the factory
  - the "completion bonus" which is the number of time steps before the end
    by which the factory was solved
  - the material cost, a made up heuristic to encourage the model to not rely
    on underground belts quite as much

Eyy some success, I was struggling to get it to learn much, but after tweaking
the world generation so that only factories requiring one belt were spat out,
it worked! Gonna try some curriculum learning soon

https://wandb.ai/beyarkay/factorion/runs/uq5fr2te?nw=nwuserbeyarkay

## 2025-06-07

Okay getting back into factorio bot. with the help of chatgippity, the code now
renders videos which should be helpful with debugging

## 2025-05-11

Rewriting the code to work with:

- 16 by 16 map
- include a Misc layer for underground belts
- curriculum learning
- sink/source can be anywhere
- start out with a nearly-complete map, then make it harder over time

## 2025-04-28 21:19:49

Sweep https://wandb.ai/beyarkay/factorion/sweeps/nopsb6dr

First sweep with lots of new training bells and whistles, including the new
multi-action agent. Let's see how this goes.

- [One of the runs](https://wandb.ai/beyarkay/factorion/runs/75s4fyug) is doing
  _really_ well with the 5-belt throughput, getting to 10% after 12k steps, but
  it's overall `episodic_return_ma` wasn't that good. Not sure why there's
  difference?
  - This run was at the extremes, probably need to increase the bounds on the
    sweep. lr=0.0008 maxgradnorm=1.0 update_epochs=8 num_minibatches=2
    hidden layers=32,64,8,256
- Continued the sweep in the morning, but there's not much new coming from it.
- [ ] Need to think about next steps, the model is learning the belt placement
      fairly well and needs something more realistic.
  - Next is probably undergrounds, splitters, long inserters.
- Next tasks to add to the emulator:
  - [ ] Underground belts
  - [ ] Splitters
  - [ ] Long inserters
  - [ ] Multiple inputs & outputs
  - [ ] Assembling machines
  - [ ] Constrained footprint
  - [ ] Constrained resources
  - [ ] Power distribution
  - [ ] Half-belts
  - [ ] Filters
  - [ ] Beacons
  - [ ] Circuit conditions
  - [ ] Trains
- Need to decide how many things should be added to the emulator and at what
  point should I just use actual factorio

## 2025-04-28 19:24:19

Run https://wandb.ai/beyarkay/factorion/runs/kzefqq09/panel/kh8cy5h9y?nw=nwuserbeyarkay

- Eyy lets gooo, training the model for a _long_ time now, and on the server,
  so things are progressing nicely.
- Now using 64 environments and it's training faster per step, but I'm not sure
  if it's faster overall tbh
- solution times:
  - 1-belt: 100% 100k steps
  - 2-belt: 90% at 360k (and climbing)
  - 3-belt: 56% at 360k (and climbing)
  - 4-belt: Kinda doing a bit, but not even 1%
  - 5-belt: not solved at all
- Note that the 5-belt solutions are just quite rare, so not only are they
  trickier, they're also less frequent to learn from
- This ended up being a very long run, although training largely stagnated
  after 500k. I'm not sure why. It looks almost as though some small proportion
  of 2-belt solutions were significantly more difficult, but I'm not sure what
  they would be

## 2025-04-28 16:16:24

Run https://wandb.ai/beyarkay/factorion/runs/jv6zlu6k/panel/msrbu65xc

- Good stuff!
- longest run yet, 1.5M timesteps, 726k steps
- solution times:
  - 1-belt: 270k steps
  - 2-belt: 87% at end (and climbing)
  - 3-belt: 43% at end (and climbing)
  - 4-belt: not solved consistently at all
  - 5-belt: not solved at all

## 2025-04-28 14:04:10

Run https://wandb.ai/beyarkay/factorion/runs/7j98fdcp

- Doing a run with just 3- and 4-belt worlds
- Not great. after 200k steps the 3-belts were being solved 10% of the time and
  the 4 belts were very rarely being solved

## 2025-04-28 13:02:55

Run https://wandb.ai/beyarkay/factorion/runs/0zcyj719?nw=nwuserbeyarkay

- Really good signs. I made some changes so that only worlds requiring one or
  two belts would be put before the model. Also fixed the
  belt-counting/Manhattan distance code.
- Model solved 1-belt problems in ~100k steps. Struggled more with two-belt
  solutions, with first solves coming around 460k but better consistency only
  around 1.100M steps
- Definitely the strategy is curriculum learning, introducing the model to
  harder and harder challenges. Not sure what this means for significantly
  trickier problems.
- [ ] Probably have to increase the size of the model as well.
- [ ] Also definitely need to get the server up and running, these runs are
      starting to take a while.
- [ ] Also need to figure out how to restart a run, since the runs are getting too
      long to just start from scratch each time.

## 2025-04-28 11:48:21

Run: https://wandb.ai/beyarkay/factorion/runs/7wqp5wdw?nw=nwuserbeyarkay

- Just added a metric for the Manhattan distance between source and sink, and
  am now tracking throughput for each Manhattan distance. Very informative, it
  looks like the smaller distances are more often achieved.
  - Currently there's a small bug: I'm calculating distances from source to
    sink, but the transport belts would only have to be placed on the inner
    part of the world, so a Manhattan distance of 2 (source and sink on the
    same corner) can be solved with 1 belt but a distance of 1 (source and
    sink adjacent) needs two belts.

- Should look at doing a very long run

## 2025-04-27 21:40:32

Run: https://wandb.ai/beyarkay/factorion/runs/i7b16h57?nw=nwuserbeyarkay

- Looking good!
- `charts/final_throughput_ma` is slowly increasing over 175k steps to about
  0.15, episodic length finally starts to decrease around 150k down to 21 from
  26, throughput is definitely off the ground after 170k up to 0.27
- The training is _very_ slow though, it took about 30m to do 177k steps which
  is too long to properly evaluate the model

Things to try:

- Maybe a smaller map initially, in order to see if the learning paradigm will
  even work at all
- Move onto the server at home
- Maybe make the model smaller? It might be too big for the problem.
- Getting close to just needing a hyperparameter sweep, but I want a
  faster-to-train model before doing that
