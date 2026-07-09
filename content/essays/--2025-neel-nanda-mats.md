---
unlisted: true
title: Neel Nanda MATS application
tags: []
---

# Ideas for study

- weight-space diffing
  - Maybe we want to get a map of the weights, and then rotate them so that
    they're aligned to maximise the _activations_ being in the same direction?
    e.g. if models A and B are different, they might have similar shapes in
    weight space, but those shapes might be rotated differently. So the shapes
    need to be "normalised" somehow, e.g. by finding directions (using
    activations) that are common across A and B, and then rotating the weights
    so that they're aligned. And then the differences between the shapes can be
    analysed.
  - similar to: Sanity checking superposition: Can we find the “true” direction
    corresponding to a concept? How could we tell if we’ve succeeded?
  - Evidence against doing the weight-space diffing:
    - Models seem less like engineered programs that we could hope to
      reverse-engineer, and more like biological systems
    - Note that I am not particularly interested in work on toy models,
      algorithmic tasks, or interpretability during training unless there's a
      great pitch.

- I'm skeptical of approaches to interpretability which assume precision, e.g.
  that we will be extremely confident we missed nothing, that we found the
  exact correct concept directions, etc

- Concept Representations: How are specific interesting concepts computed and
  represented?
  - This ties into the weight-space diffing ideas

- Note that I am not particularly interested in work on toy models, algorithmic
  tasks, or interpretability during training unless there's a great pitch.

- Model Diffing: What changes during fine-tuning? Comparing a model before and
  after a change (e.g., chat-tuning, instruction-tuning, or fine-tuning on fake
  facts) can be a powerful way to isolate what was learned - see my past
  scholar’s work on diffing chat finetuning for more pointers.

- Eliciting Latent Knowledge: Can we use interpretability to elicit secret
  knowledge from a model? What techniques work best?
- Eliciting Latent Knowledge: Can we use interpretability to elicit secret knowledge from a model? What techniques work best?
  - In Cywiński et al my scholars taught a model a secret word by training it
    on descriptions of that word, and then retrieved it with both black and
    white box techniques. Can you do better? (their models)
  - Can you create more interesting model organisms? Marks et al did a much
    more ambitious version, involving teaching a model fake facts with
    synthetic documents, what else can you do with that technique?

- Steganography: Can models encode information in their chain of thought?
  Ideally, in a way where the chain of thought is still plausible to us, but
  even in ways where we know it's encoded but we don't know what it means. Can
  you train a model to have reasoning we don't understand and use
  interpretability tools to decipher it? Relevant work Note that this needs to
  allow the model to do tasks it couldn't do without a chain of thought to be
  interesting.
- Training some models and attempting to understand the models using neuron
  diffing after rotating to maximise alignment (using activations to guide the
  alignment)

- User models: Chen et al shows that LLMs form surprisingly accurate and
  detailed models of the user, eg their gender, age, socioeconomic status, and
  level of education, and do this from very little information. They can find
  these with probes, and steer with these to change the model’s actions in
  weird ways. https://arxiv.org/abs/2406.07882
  - This is wild! What else can we learn here? What else do models represent
    about the user? How are these inferred? How else do they shape behaviour?
  - Do LLMs form dynamic models of users for attributes that vary across
    turns, eg emotion, what the user knows, etc.
  - As a stretch goal, do LLMs ever try to intentionally manipulate these? Eg
    detect when a user is sad and try to make them happy

- Out Of Context Reasoning: Sometimes models generalize much further than
  expected. Most famously, emergent misalignment, where training a model to
  write insecure code turns it into a Nazi. What's up with this?
