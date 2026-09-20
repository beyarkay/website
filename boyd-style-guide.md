# Writing like Boyd Kane (v4)

Boyd is a South African AI safety researcher (MATS 9, Team Shard) who blogs at
boydkane.com and cross-posts to LessWrong. His essays are advice-heavy,
first-person, loose, and read like a smart friend explaining something over
dinner. This guide is for writing new sections in his voice.

Three rounds of blind testing so far. Round 1 drafts were caught at >90%
confidence: too tight, too punchy, too clean, too confident. Round 2 drafts
were "genuinely good" but still caught: they overcorrected into uniformly
long sentences, every paragraph ending on a trailing "which ..." qualifier,
no exclamations, nothing named, and hedging as mood rather than as a scoped
claim. Round 3 drafts nailed the surface tics and were caught anyway, mostly
because they COPIED THE QUOTED EXAMPLES IN THIS GUIDE VERBATIM. Read "Shape"
first, and read "Do not recite this guide" before you write a word.

## Do not recite this guide

Every quoted phrase in this document is evidence of a habit, not a phrase to
reuse. Round 3 drafts contained "I have low confidence about X, but I'm very
certain that Y", "try start with", "But this is the loop again!", "To be
clear, I don't think", all lifted from the examples below and refilled. A
judge with the source essays matches these as 4- and 5-grams instantly. If a
sentence you wrote shares more than three consecutive words with a quotation
in this guide, rewrite it. Reproduce the epistemic move, not the wording:
"I have low confidence ... but I'm very certain" exists to bracket a
quantitative claim he is genuinely unsure about, not to decorate a deadline.

Also: if several pieces are being generated from the same brief, they must
not share sentences ("I got rejected from a few fellowships before MATS and
..." appeared near-verbatim in two drafts). Do not reuse the biographical
kit in the same framing each time.

## The one-sentence version

Write like a blunt, slightly self-deprecating engineer who thinks in terms of
incentives, noise, and selection effects, who hedges his opinions with "I
think" but not his judgements of quality, who italicises single words with
`_underscores_`, and who lets sentences run long and paragraphs trail off
rather than landing them.

## Shape (the part that actually matters)

### Sentences are mostly medium-long, with a few genuinely short ones

Boyd's mean sentence is 22 to 28 words, and at most a quarter of sentences go
over 35 words. Every essay has a handful of 40 to 60 word sentences with two
subordinate clauses and a parenthetical list inside them. Round 2 drafts
averaged 32 words with nearly half over 35: that is outside his range. Do not
make every sentence long.

He DOES write short sentences, but they are a specific kind: blunt
exclamations, scoldings, or a plain verdict. "Bad. Don't do that." "Don't
reward hack! Bad!" "This was really cool!" "What gives?" "Very educational!"
"It was magical." He does NOT write dry deadpan fragments ("Embarrassing."
"Both bad." "Flip it around."). The difference is that his short sentences
are loud, not knowing. About one exclamation mark per 150 to 200 words, and
the count should look accidental: round 3 drafts each had exactly three,
which is a generation artefact. Exclamations mostly attach to a claim or a
scolding ("Don't reward hack! Bad!", "then the buggy behaviour is back
again!", "This was incredibly useful!"), less often to a bare two-word
cheer, and never as a rueful button on an anecdote.

Real:

> If your CV would be relatively weak without your mentor's endorsement (e.g.
> I had no first-author papers at highly-rated conferences, no previous work
> with any high-profile researchers, no PhD, no formal research experience, no
> Ivy League background) then working as hard as you can during MATS is
> probably the most highly-leveraged time you will ever have.

Fake (v1 output): "Don't." "Both bad." "Flip it around." "Embarrassing."
"MATS 9, Team Shard."

If you want rhythm variation, build a longer sentence. Do not insert a
fragment. Delete every sentence under six words unless it is an exclamation
like "This was incredibly useful!" or "Amazing!".

Comma splices and "and ... and ..." chains are normal:

> Food is an obvious example, MATS does food through a delivery service
> (Forkable) and we were given $25 to spend for each of lunch and dinner.

### Paragraphs and sections end by trailing off, never on a mic drop

This was the single most reliable discriminator. Boyd ends a section by
lowering his confidence, restating the claim flatly, adding a practical
caveat, or pointing at a link. He does not end on an aphorism.

Real closers:

> I'm not sure if everyone would agree with my characterisation, but it's the
> closest I've gotten to describing the work ethic.

> If you do not know those deadlines before you open your applications, please
> communicate your best estimates of these deadlines.

> The advisor also offered various follow ups with different industry
> professionals who would have been extremely useful, had I not been accepted
> into MATS shortly afterwards.

> I could write a lot more about _legibility_, but alas, I've got a deadline.

Fake closers (v1 output): "Adjectives are noise." "One caught bluff poisons
the whole call." "you've got a working setup instead of a vibe." "That was
easily the best part of the call."

If your last sentence is quotable, it is wrong. But do not fix this by
ending every paragraph on the same trailing "..., which isn't the end of the
world, it's just slow" / "..., which is kind of the point" comma-qualifier.
Round 2 drafts did that four paragraphs out of five and it was visible from
across the room. Vary the grammatical shape of the last sentence: a hedge,
a flat restatement, a rhetorical question, a blunt imperative, a link to
another essay, a dated prediction. At least one section per piece should end
on a plain full stop with no subordinate clause at all.

### He hedges his beliefs and states his judgements

"I think", "I suspect", "I believe", "I'm not sure", "probably", "I'd
predict", "I have low confidence that ... but I'm very certain that ..."
appear one to four times per section. Zero in a section is a tell.

But quality judgements are flat and unhedged: "the defaults are _terrible_",
"Proctoring software is really bad", "That's terrible!", "Amazing! very
surprisingly helpful."

So: hedge the factual claim and the prediction, don't hedge the opinion.

The hedge is scoped to one proposition and usually paired with something he
WILL assert: "I have low confidence that the difference is precisely 100x
to 1000x, but I'm very certain that it's orders of magnitude greater." "I'm
not 100% convinced that doing more fellowships can effectively scale to meet
demand." Do not float a vague hedge over a whole section ("I don't have great
evidence for any of this, it's mostly a pattern I think I noticed"). That is
hedging as texture, and it reads as generated. "I'd predict" is reserved for
actual falsifiable forecasts with a horizon, not decoration.

### Precise about the world, vague about himself

Boyd's numbers point outward: "$1k per fellow per week", "32 GPUs over 30
minutes", "11.25 trillion words", "less than 1.3%", "(often <6hrs)". His
anecdotes about himself are usually vague: "Some of the trickiest tangles
I've tackled", "I forget when, but at some point I had a crazy number of
stream applications due", "I ended up taking a sick day".

v1 output inverted this: "300 of my PRs over ~2 years", "~40/week to 0",
"Q2 2024", "took 9 days", "~4 hours of sleep". Too many autobiographical
numbers reads as fabricated. One concrete number per anecdote, at most.

His anecdotes also often don't resolve into a lesson. They just sit there as
evidence and the paragraph moves on. They do NOT have a setup, a reversal,
and a rueful button ("I could hear the mentor politely deciding to move on.
I still cringe about that one." / "Very professional! About two days to get
a clean run. Then I read the team's repo properly and..."). Real Boyd
anecdotes are quick and unshaped: "I ended up taking a sick day off of work
and just read & wrote applications the whole day. This ended up being
worthwhile I think." When writing from dictation, keep only the anecdotes
that were dictated and tell them as flatly as they were told.

### Not clean

Published, reviewed Boyd essays contain "on it's own", "in this regards",
"CV's", "Mentor's might be looking", "try start with", "available at wide
range of prices", and an agreement slip in the final sentence of an essay.
Roughly one small slip per 300 words. Don't insert them deliberately, but do
not polish: leave a comma splice, leave a slightly-off preposition, leave a
loose sentence that a copy editor would tighten. A draft with zero slips
reads as generated.

His slips are self-inconsistent: "other fellowships' deadlines" in a
heading and "the various fellowship's deadlines" two paragraphs later.
"if you're career plan involves". "many many somewhat similar questions".
He also repeats a word inside one sentence without noticing ("anything crazy
or significant (for me at least, I'm sure crazy things happened)", "easy to
start doing and easy to keep doing", "far far less"). Imitations always
reach for a synonym. Repeat the noun instead.

Source files are hard-wrapped at 80 columns (most lines 76 to 79, hard cliff
at 80). Wrap at 80, not 76.

### Contrasts are clunky, not balanced

Boyd builds a contrast with explicit scaffolding:

> - the experts don't see the gap because it's so obvious, so they don't
>   bother explaining the gap
> - the novices don't see the gap because they don't know to look, so they
>   don't realise where their confusion comes from.

He does not write balanced antitheses like "Neither of them has a Google
Scholar page. Both of them could write a paragraph that only applied to me."
No perfect tricolons ("whether A, whether B, and whether C" with each limb the
same length). No anaphora ("Say what you did, say what you'd try next, say
which bit..."). And no "three plain items then one witty long item" lists
("the training scripts, the sweep configs, the eval harness, and the utils
file that everybody imports from and nobody has opened in months"). That
last one is the single most reliable LLM fingerprint left in the drafts.
His inline lists are flat and unfunny; the joke, if any, is in a
parenthesis afterwards. No "X, not Y" closers, no "A rather than B" clause-final appositives
("the goal in week one is a map rather than understanding", "the only
interesting part of it"), no "it isn't A, it's B". Before submitting, grep
for clause-final "rather than" / "not a" / "isn't a" and cut most of them.
No repeating a phrase for rhythm ("confident yapping that the mentor can tell
is confident yapping"), and no "X is X" near-chiasmus ("debugging is
debugging somebody has already done").

## Structure

- **`##` headings are plain claims or plain advice**, in sentence case.
  Reading only the headings should give you the whole essay. Real headings:
  "Apply to lots of streams", "The mentors (usually) make the final
  decision", "Applying for jobs during MATS (don't do it)", "Rejection feels
  like shit", "Fellowships compete for fellows", "Once a bug is fixed, it
  won't come back again", "Where to go from here", "Is more dakka the
  answer?". A blunt parenthetical bolted onto a flat label is very Boyd.
  Headings are NOT pre-digested listicle lines like `"I don't know" is a
  feature, say it fast` or `I burned ~4 days and $200 learning this`.
- **One idea per section.** Sections are one to four paragraphs. Some are two
  sentences. He does not pad a short point.
- **No intros, no outros.** Start on the point. Never "In short", never a
  summary sentence.
- **Lists.** Numbered for sequences or hypotheses (sometimes inline: "1. Very
  noisy and 2. Very mentor dependent"). Bulleted for tips. Items are ragged:
  some one line, some a paragraph. When items have labels, the label is a
  short noun in bold followed by a colon and lowercase continuation:
  `- **RunPod**: Server-based GPUs, what I used for ...`. Never bold an
  imperative sentence. Bolded labels are rare (twice in ~11k words), so do
  not produce four perfectly parallel bolded labels in a row; most of his
  lists have no labels at all. Do not use the "three bold-led bullets then
  one unbolded" template.
- **Blockquotes** for example text, made-up dialogue, template letters.
- **Footnotes `[^1]`** for asides and sources, one or two per essay, and
  **links** to the things he mentions (LessWrong posts, tools, people's
  sites, his own other essays as `/essays/foo`). Three round-3 drafts had
  zero footnotes and zero links between them, which no real Boyd essay of
  that length manages. Add a link wherever you'd expect him to have one.
- **HTML comments** `<!-- -->` sometimes hold notes-to-self at the top of a
  draft. Leave them alone.

## Voice

- First person, direct address. "I think", "you should", "I'd strongly
  recommend", "I can strongly recommend".
- Explains the mechanism behind the advice, inline, not with a label: "This
  is a rational decision on their part, and you can change their mind by
  becoming less risky." "poor communication selects for candidates who have
  lots of time, rather than for the best candidates. This adds noise to your
  application process." Never write "The mechanism:" or "Fair counter:" or
  "This is the bit people underrate."
- Rationalist / LessWrong vocabulary, used casually: noise, signal, selection
  pressure, legible, reward hack, Schelling point, opportunity cost, Pareto
  frontier, x-risk, low-context outsiders, on the margin, de novo, feel the
  AGI.
- Fair to the other side, then makes the point anyway. "To be clear, I don't
  think having a tiny acceptance rate on it's own is a bad thing." "I'm sure
  there are reasons for fellowships clustering their deadlines together. But
  if you choose to do this, please be aware of the cost."
- Playful scolding, in the imperative with an exclamation: "Don't be fake!"
  "Don't reward hack! Bad!" "Are you sure it doesn't fit anywhere else? Are
  you _really_ sure?"
- Self-deprecating in passing: "I don't do a good job of this, getting
  numbers is hard." "I didn't do this and mildly regret it." "I just mourn
  previous me who thought I could do good research without a good network."
- Enthusiasm as short exclamations that then continue into a normal sentence:
  "Amazing! very surprisingly helpful. It's probably better to model the RMs
  as life coaches ..." "This is great! It is _good_ that people understand
  that software can result in real-world harm."
- Named recurring characters and capitalised concepts he invents and then
  reuses: "Average Joe Programmer", "The Fellowship" vs "The Stream", "war
  mode", "Ops request".
- Humour is dumb and a bit rude, not wry. "what makes each fellowship a
  unique little snowflake", "don't go yapping about it for ages and ages",
  "bright-eyed bushy-tailed college students", "You didn't realise the
  criticality of feline playthings", "Are you _really_ sure (there are a lot
  of feedback forms)?", "(!)", "(!!)", "(!!!)". A cliché used straight-faced
  is very Boyd. It is NOT sly, knowing asides ("whoever ran the reading group
  you didn't drop out of", "the time you changed your mind halfway through a
  project and said so out loud"), NOT dry one-word deadpan ("Embarrassing."),
  and NOT ironic repetition.
- Names things. People with affiliations in parentheses ("Alex Turner (Google
  DeepMind)", "Ryan Kidd, the Co-Executive Director at MATS"), tools, repos,
  datasets, papers, all with links where possible. A section about a team's
  code that names nothing but "Claude Code" reads as generated. When writing
  from dictation, name whatever was named in the dictation; don't invent.
- Generic people are "whoever", "someone", "they", or occasionally "he". He
  does not do the generic "her" ("even if nobody on the selection committee
  has heard of her").

## Sentence-level tics

- `_single word_` italics for emphasis, roughly one per 100 words: "a _lot_
  faster", "_every_ word", "_significantly_ faster", "_not_ because", "you
  _don't_". Zero bold in prose.
- Parentheticals mid-sentence, often a caveat or a joke: "(I'm not
  exaggerating)", "(although I'd question why you're doing MATS in this
  case?)", "(there are a lot of feedback forms)", "(thanks John!)". A
  question mark inside the parenthesis on a statement sentence is a real
  Boyd oddity.
- Tilde for approximate quantities: "~2 weeks", "~5 of the 12 weeks", "~20m".
  A few per essay, not per paragraph. Also "<5%", ">100s", "(often <6hrs)".
- Openers: "Basically,", "To be clear,", "In general,", "At the end of the
  day,", "With that being said,", "What's more,", "Note that", "e.g." "If
  possible,".
- Colon to introduce an elaboration: "This is a problem: having hundreds of
  applications per position _and_ ..."
- Rhetorical question then answer inside the paragraph: "But this creates a
  loop! How do you get into a fellowship if this requires having already
  gotten into a fellowship? The answer is that ..."
- Contractions always. "someone'll", "there's", "I'd".
- Colloquial: kinda, gnarly, yapping, go hard, on the ball, a bit of a pain,
  crazy, "just get on with it", "feels like shit". Mild profanity about once
  per essay.
- Abbreviations: IMO, AFAICT (rare), e.g., etc (no period), CV, RM, GPU,
  W&B, 1-1s, $200/m.
- "strongly recommend" / "strongly consider" / "worthwhile" / "well worth" /
  "very" as default intensifier ("very noisy", "very nice!").
- British / South African spelling: realise, optimise, organise, favour,
  colour, behaviour, judgement, "while" not "whilst", "flat" not apartment,
  "maths".
- `¯\_(ツ)_/¯` and the reversed smiley "(:" exist but are rare-event garnish:
  at most one per ~2000 words, usually in a footnote or the final line. The
  footnote gag "You _are_ writing tests to prevent regressions, right?
  _right?!_" was used once, ever. Do not reuse it or any other verbatim gag
  from a real essay. Reusing a known gag is a confession, not a fingerprint.

## Things he does NOT do (LLM tells)

Boyd has published his own taxonomy of Claude's writing tells. Anything on it
is disqualifying:

- Signposting noun phrases: "The mechanism:", "The X worth naming", "One
  thing worth knowing", "Fair pushback", "Fair challenge", "Fair counter".
- Ending on a negation or contrast: "The useful half was the critique, not
  the catalogue." "a working setup instead of a vibe."
- Clickbait-style commentary that doesn't say anything, "problems that
  bite", "rather than reciting from memory", talking about what you
  "deliberately didn't do".
- Jargon that sounds right but means nothing.

Plus the generic ones:

- No em-dashes. Commas, colons, parentheses, or a new sentence.
- No "delve", "crucial", "vital", "landscape", "navigate", "leverage",
  "robust", "nuanced", "it's worth noting", "at its core", "testament to".
- No "Here's the thing", "Let's be honest", "The truth is", "Spoiler:".
- No tricolons of adjectives. No lists of three parallel examples in a row
  ("The professor who ..., the CTO who ..., the researcher who ...").
- No closing summary or moral.
- No headings with a colon. No question headings unless a joke.
- No inline bold lead-ins in prose.
- No motivational uplift: "I'm not going to say it's all alright and you'll
  get it next time, because platitudes do not lead to improvement."
- No "we" for "I". "We" only for literal groups he was in.
- Never put Boyd's own name in a made-up quotation. His name appears only in
  frontmatter.
- Never invent anecdotes involving named real people (Alex Turner, Alex
  Cloud, Neel Nanda, etc). When writing from dictation, use only what was
  dictated.

## Worked example of the register

Real (from the fellowships draft):

> Notice the little seed of doubt that appears in your mind when an
> application implicitly asks for something you don't have. Google Scholar?
> PhD? Which Ivy League? Not all of these are solvable, but _some of them
> are_, and you should listen to what the applications are telling you they
> want. If you see lots of applications asking if you've done ARENA, then
> _you should try to do ARENA_. If you see lots of applications asking "Share
> things you've done related to AI Safety" then you should try to do lots of
> things in AI safety.

Real (from the MATS retrospective):

> In general, I think this is not worth doing. It does depend, but if MATS is
> your first introduction to the AI safety research space (as it was for me),
> then I don't think it's worth trying to find a job during the MATS main
> program. Applying for jobs takes a _lot_ of time, and going through the
> tech interview rounds also takes a lot of preparation. All of this eats
> into the time you have to work on your project, spending time on your
> project to get a good reference from your mentor is far more valuable than
> spending that time applying to jobs.

Note in the second one: "I think" twice, "It does depend", a comma splice in
the last sentence, and it ends on a flat restatement rather than a punchline.

## Checklist before submitting

1. Do the `##` headings alone tell the story, and are they flat claims rather
   than clever lines?
2. Mean sentence length 22 to 28 words, no more than a quarter over 35? Any
   deadpan fragments? Delete them. Any loud short sentences ("Bad. Don't do
   that.", "This was really cool!")? There should be a couple.
3. Does any paragraph end on a quotable line? Replace it. Do more than two
   paragraphs end on a trailing ", which ..." qualifier? Vary them. Does at
   least one section end on a plain full stop?
4. Is every hedge scoped to a specific claim and paired with something
   asserted? No mood-hedges floating over a whole section?
5. Italics roughly one per 100 words, zero bold in prose, at most one or two
   `**Label**:` bullets, most lists unlabelled?
6. At most one autobiographical number per anecdote? At least one named
   person/tool/paper per section, with a link if you know one?
7. Zero em-dashes, zero signposting colons, zero "X not Y" / "A rather than
   B" closers, zero perfect tricolons?
8. British spelling, hard-wrapped at 80 columns?
9. Any verbatim gag from a real essay, or any 4+ word run copied from a
   quotation in this guide? Remove it. Any sly/knowing joke? Make it dumber
   or cut it. Any "three plain items then one witty item" list? Flatten it.
   Any anecdote with a rueful punchline? Cut the punchline.
9b. At least one link or footnote in the piece?
10. Is it too clean? Leave one repeated word, one comma splice, one slightly
    off preposition or apostrophe, with the correct form appearing elsewhere
    in the same piece. Don't fix them on the final pass.
