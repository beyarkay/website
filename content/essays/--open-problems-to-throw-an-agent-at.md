---
unlisted: true
title: Verifiable Problems to Point an Agent At
tags: []
---

This doc contains some problems that are unusually amenable to being solvable
by AI. Specifically, they have some/all of these properties:

- They're easy to verify or know you got the answer correct
- There's lots of data, but nobody's bothered to look through it all
- The data is available, but it's in a painful format (e.g. scans of tables,
  custom/bespoke formats, plain text, etc)
- Usually something that's in an underserved field where practitioners aren't
  used to using machine-learning.
- they're underserved or it's unlikely that there's anyone who's done the task
  already (e.g. little/no profit incentive to do the task, or the
  responsibility doesn't fall on any existing government body)
- Most of these are "easy wins" as well, so someone could make fairly easy
  progress with the help of an AI, but it's not _so_ easy that you can only
  throw the AI at the problem just yet.

Most of these ideas could be partially-done by just converting data into an
easy-to-parse format and hosting the data on huggingface as an unofficial
mirror. e.g. converting scans of 100-year-old ships logs into a CSV would be a
massive help to understanding maritime trade and ocean conditions.

The models to have in mind are the [Vesuvius Challenge](https://scrollprize.org/), the [Amazon cities found with airborne lidar](https://www.nature.com/articles/s41586-022-04780-4), and the [Nazca geoglyphs nearly doubled by a machine-learning survey](https://doi.org/10.1073/pnas.2407652121): a small team, an archive nobody had finished reading, a tool that scales, and a result that made the news.

Each entry is meant to be enough to get a smart undergraduate with a Claude Code subscription started: why anyone would care, where the data is, what to make from it, and how a sceptic checks the result. Entries that need a data partnership before anything can start are cut or say so in the first line.

## A Machine-checked

### A1 OEIS conjectures CB

The [On-Line Encyclopedia of Integer Sequences](https://oeis.org) contains thousands of entries with unproved "Conjecture: a(n) = …" comments. Prove each in [Lean](https://lean-lang.org), or refute with a computable counterexample. Nobody has attacked this systematically.

### A2 Erdős problems FC

[erdosproblems.com](https://www.erdosproblems.com) lists ~1,000 problems; Terence Tao has been running AI on them since 2025, so this is not new, but hundreds remain and [Lean](https://lean-lang.org) is the verifier.

### A3 Formalise the unformalised FC

[DeepMind](https://deepmind.google)'s [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) repo and [Freek Wiedijk's 100 theorems list](https://www.cs.ru.nl/~freek/100/) name what isn't yet in [Mathlib](https://leanprover-community.github.io). Deliverable is a standalone [Lean](https://lean-lang.org) project, not a Mathlib pull request (review is the bottleneck).

### A4 Formally verify existing zero-knowledge circuits DD

The [0xPARC ZK bug tracker](https://github.com/0xPARC/zk-bug-tracker) shows under-constrained [Circom](https://circom.io)/[Halo2](https://github.com/zcash/halo2) circuits securing real money.

### A5 Machine-checked correctness for the crypto everyone runs BC

[HACL\*](https://hacl-star.github.io) covers a subset; [BoringSSL](https://boringssl.googlesource.com/boringssl), [libsodium](https://libsodium.org), [RustCrypto](https://github.com/RustCrypto) and the Linux kernel crypto subsystem have large unverified surfaces. Tools: [Verus](https://github.com/verus-lang/verus), [F\*](https://fstar-lang.org/), [Lean](https://lean-lang.org). Deliverable is a proof.

### A6 Re-derive computer-assisted proofs with verified interval arithmetic F?

Many published results rest on numerical code nobody re-ran. Discrepancies are findings. See [Flyspeck](https://github.com/flyspeck/flyspeck) for the model.

### A7 Verified parsers and interpreters for load-bearing formats FF

PDF, JSON, ASN.1, eBPF, WebAssembly. Parsers are where exploits live. [CompCert](https://compcert.org) shows the approach scales.

### A8 Verified re-implementations of small C libraries with differential fuzzing FD

[zlib](https://zlib.net), [libpng](http://www.libpng.org/pub/png/libpng.html), [libjpeg-turbo](https://libjpeg-turbo.org), [expat](https://libexpat.github.io/); [SQLite](https://www.sqlite.org)'s [public test suite](https://www.sqlite.org/testing.html) is the gold standard. Verifier: byte-identical output across millions of fuzzed inputs plus upstream tests. [DARPA TRACTOR](https://www.darpa.mil/program/translating-all-c-to-rust) is adjacent.

### A9 Post-quantum migration with interop test vectors ??

For libraries and protocols not yet moved. Verifier: [NIST PQC](https://csrc.nist.gov/projects/post-quantum-cryptography) known-answer tests and cross-implementation interop.

### A10 Executable law with official worked examples as tests CA

[Catala](https://catala-lang.org) already encodes chunks of French benefits law. Targets: [UK Universal Credit](https://www.gov.uk/universal-credit), US [SNAP](https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program) per state, [EITC](https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc), student-loan repayment, pension rules. Verifier: government-published worked examples and [PolicyEngine](https://policyengine.org) cross-checks.

### A11 Open tax computation engine CD

Start from the [open-sourced IRS Direct File code](https://github.com/IRS-Public/direct-file). Verifier: IRS e-file [Assurance Testing System scenarios](https://www.irs.gov/e-file-providers) and published worked examples. Scope honestly: the barrier to a "[TurboTax](https://turbotax.intuit.com) killer" is e-file authorisation, liability and 50 state codes, not code.

## B Re-run to verify

### B1 Computational reproducibility of every paper with a replication package FF

[AEA journals](https://aeadataeditor.github.io) mandate packages since 2019; [NeurIPS](https://neurips.cc)/[ICML](https://icml.cc) have code links; [PLOS](https://plos.org) has data policies. Rerun, diff against the paper's tables, publish a scoreboard. The [Institute for Replication](https://i4replication.org) does dozens a year by hand. Probably the highest-value entry in the whole list: scalable, cheap verifier, no maintainer burden. Models too: [BioModels](https://www.ebi.ac.uk/about/news/announcements/biomodels-reproducibility-scorecard/) publishes a reproducibility scorecard, and running [memote](https://memote.readthedocs.io/en/latest/) over every published genome-scale metabolic model finds the ones that make energy from nothing, which is machine-checkable.

### B2 Resurrect dead scientific software BC

[Software Heritage](https://www.softwareheritage.org) has the source; the paper names the figure.

### B3 Port legacy Fortran/MATLAB/IDL models to open languages with numerical-equivalence tests BB

Hydrology, ecology, epidemiology, climate. Two Fortran codebases that half the field's papers depend on are a fair place to start: [SWAT](https://swat.tamu.edu/software/) (watershed modelling) and [MODFLOW](https://www.usgs.gov/software/modflow-6-usgs-modular-hydrologic-model) (groundwater), both of which ship reference inputs and outputs. Verifier: outputs match to tolerance on the reference inputs.

### B4 Statistical-error sweeps of the literature AB

[statcheck](https://michelenuijten.shinyapps.io/statcheck-web/), [GRIM](https://en.wikipedia.org/wiki/GRIM_test), SPRITE, image-duplication detection across all of [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/) and [arXiv](https://arxiv.org). [The Black Spatula Project](https://the-black-spatula-project.github.io/) started this in 2025; scale is what's missing. Two more with ground truth: gene symbols that [Excel](https://en.wikipedia.org/wiki/Microsoft_Excel) turned into dates ([still in a third of supplements](https://doi.org/10.1371/journal.pcbi.1008984)), and [Cochrane](https://www.cochrane.org) reviews recomputed from their own [data packages](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html) for double-counted trials and arithmetic slips. Report to authors and journals, not [Twitter](https://twitter.com).

### B5 Outcome switching in clinical trials AA

Compare pre-registered primary outcomes on [ClinicalTrials.gov](https://clinicaltrials.gov) with the published paper. [COMPare](https://compare-trials.org) did ~60 trials by hand; [TrialsTracker](https://trialstracker.net) covers results reporting but not switching.

### B6 Does the cited source actually say that? CD

For [Wikipedia](https://en.wikipedia.org) and for review articles. Meta [prototyped this in 2022](https://arxiv.org/abs/2207.06220) and dropped it. Verifier: crowd spot-check.

### B7 Errata hunting in open textbooks DD

Recompute every worked example in [OpenStax](https://openstax.org), [LibreTexts](https://libretexts.org), [MIT OCW](https://ocw.mit.edu) problem sets.

### B8 Fuzz, fix and regression-test open-source software that has opted in ED

[OSS-Fuzz](https://google.github.io/oss-fuzz/) and [AIxCC](https://aicyberchallenge.com) cover discovery. Include only with an opt-in registry.

### B9 Accessibility remediation of civic websites FD

Measured by [axe-core](https://github.com/dequelabs/axe-core) and [Lighthouse](https://developer.chrome.com/docs/lighthouse) plus screen-reader scripts. Do it on forks and hand over.

### B10 Conformance test suites for standards that ship without them FF

Many [ISO](https://www.iso.org/standards.html)/[IETF](https://www.ietf.org) specs have no reference tests. Deliverable is the suite; everyone's implementation then gets checked for free.

### B11 Cross-implementation differential testing FF

TLS stacks, JSON parsers, date/time libraries, [Unicode](https://home.unicode.org) handling, payroll engines. Disagreements are bugs by construction. Two starting corpora: [JSONTestSuite](https://github.com/nst/JSONTestSuite), which already shows dozens of parsers disagreeing on the same inputs, and [tlsfuzzer](https://github.com/tlsfuzzer/tlsfuzzer) for TLS stacks.

## C Text archives: digitised but unread

### C1 Oxyrhynchus papyri BA (it depends)

~500,000 fragments, under 10% published after a century ([Oxford POxy](https://oxyrhynchus.web.ox.ac.uk/); crowd project [Ancient Lives](https://www.ancientlives.org)). Transcribe; match against known texts in the [TLG](https://www.tlg.uci.edu); find physical joins; flag what matches nothing (candidate lost works). Verifier: known texts, physical joins.

### C2 Cairo Genizah ?B

~400,000 fragments imaged by the [Friedberg project](https://fjms.genizah.org). Content-level indexing into a medieval Mediterranean social and economic database.

### C3 Cuneiform backlog AS

~500,000 tablets excavated, most unpublished ([CDLI](https://cdli.mpiwg-berlin.mpg.de)); [LMU](https://www.lmu.de/en/index.html)'s [Fragmentarium](https://www.ebl.lmu.de) does AI joins for literature. The 90% that is administrative text holds Bronze Age price series, harvests, disease.

### C4 Sinai palimpsests SA

Multispectral images of ~70 overwritten manuscripts are online at the [Sinai Palimpsests Project](https://sinai.library.ucla.edu). Recovering undertext (lost Christian Palestinian Aramaic, Caucasian Albanian, Greek) from the image stacks.

### C5 Dunhuang, Timbuktu, Ethiopian and Armenian manuscripts ??

[International Dunhuang Project](https://idp.bl.uk), [HMML](https://hmml.org) (which imaged Timbuktu and Ethiopian collections). Catalogue-level description first.

### C6 Undeciphered scripts with corpora AA

Proto-Elamite (~1,600 tablets on [CDLI](https://cdli.mpiwg-berlin.mpg.de)), Linear A ([SigLA](https://sigla.phis.me/) has the corpus), Cypro-Minoan, Indus. Verifier is Ventris's: consistent readings across the corpus that predict new tablets.

### C7 Vatican Archive, Pius XII pontificate CC

Opened 2020, ~16 million pages ([Archivio Apostolico](https://www.archivioapostolicovaticano.va)). Wartime persecution questions plus 1939–58 diplomatic cables.

### C8 Arolsen Archives BC

30 million Holocaust-era documents ([arolsen-archives.org](https://arolsen-archives.org)). Link the same person across camp registers, transport lists and tracing requests. Every resolved fate matters to a family.

### C9 Stasi shredded files BA

~15,500 sacks of hand-torn documents at the [Stasi Records Archive](https://www.stasi-unterlagen-archiv.de); the [Fraunhofer e-Puzzler](https://www.ipk.fraunhofer.de/de/zusammenarbeit/referenzen/stasi-puzzle.html) stalled after a few hundred. Scanned-but-unreconstructed sacks are a jigsaw-vision problem. Caveat: no downloadable fragment corpus exists; this starts with a [Bundesarchiv](https://www.bundesarchiv.de/stasi-unterlagen-archiv/rekonstruktion/) partnership, not a download.

<abbr title="German Democratic Repubic" lang="en" class="dreipc-abbreviation">GDR</abbr>

### C10 Declassified intelligence corpora SS

[CIA CREST](https://www.cia.gov/readingroom/), [FBI Vault](https://vault.fbi.gov), the [2025 JFK release](https://www.archives.gov/research/jfk), [MKUltra](https://en.wikipedia.org/wiki/Project_MKUltra), [Venona](https://en.wikipedia.org/wiki/Venona_project), UK releases. Build a who-met-whom-when graph; surface documents contradicting official histories. Every finding cites a page image.

### C11 UK "migrated archives" CB

Colonial-office files on Kenya, Malaya, Cyprus released 2011–13 ([FCO 141 at TNA](https://discovery.nationalarchives.gov.uk)). Barely read.

### C12 Trial and party archives ?F

[Nuremberg exhibits](https://nuremberg.law.harvard.edu), [Comintern](https://en.wikipedia.org/wiki/Comintern) microfilm ([Hoover](https://www.hoover.org/library-archives)), Cultural Revolution local gazetteers.

### C13 Nazi-looted art F?

[ERR card files](https://www.errproject.org), the [Lost Art register](https://www.lostart.de), the [Getty Provenance Index](https://www.getty.edu/databases-tools-and-technologies/provenance/) (dealer stock books and auction records), the [German Historical Museum databases](https://www.dhm.de/en/collection/research/provenance-research/databases/), post-1945 auction catalogues, museum provenance pages. Match objects across them. Two joins that a human can't do at scale and a machine can: inventory-number chains (the same object stamped, renumbered and crossed out across wartime repositories) and the same photograph reappearing under a different artist or title. Checkable object by object.

### C14a Trace the 1918 flu town by town from local newspapers

A town-by-town record of when US communities closed schools and banned gatherings in 1918, and what their death rates did next, would grow pandemic policy's main reference case from about 50 cities to thousands. Small-town papers reported first cases, closure orders, reopenings and funerals day by day, and [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) holds article-level text from nearly 20 million Chronicling America scans, downloadable a year at a time, with each paper's place recorded; the rest is reachable through the [loc.gov APIs](https://www.loc.gov/apis/). Start with 1918 and 1919: filter for influenza, closings and deaths, and extract dated events per town. Goal: a public table of first cases, closures, reopenings and reported deaths for every US town with a surviving 1918–19 paper. Verifier: for the 50 cities in the [Influenza Encyclopedia](https://www.influenzaarchive.org), the extracted closure dates and epidemic curves must match its hand-built timelines.

### C14b Map pre-instrumental earthquakes from newspaper damage reports

Every newspaper report of rattled crockery or fallen chimneys is a measurement of an earthquake no instrument recorded, and together they can put magnitudes on nineteenth-century quakes in places whose hazard maps rest on a handful of events. [Trove](https://trove.nla.gov.au/about/create-something/using-api) (free API key), [Papers Past](https://paperspast.natlib.govt.nz/), the [Gallica search API](https://api.bnf.fr/fr/api-gallica-de-recherche) and [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) (Chronicling America as article text) are searchable in bulk for "earthquake" and "shock" by year. Assign each report a dated macroseismic intensity for its locality, then fit a location and magnitude to each event's intensity field. Goal: intensity points and magnitude estimates for pre-1900 events in regions with thin catalogues (Australia, New Zealand, the Americas). Verifier: for events already in [AHEAD](https://www.emidius.eu/AHEAD/), [SISFRANCE](https://www.sisfrance.net/) or [CFTI5Med](https://storing.ingv.it/cfti/cfti5/), held-out newspaper intensities must match the catalogue's points, and magnitudes must fall within [ISC-GEM](https://www.isc.ac.uk/iscgem/) error bars where it covers the event.

### C14c Build a storm catalogue from historic aurora sightings

How bad the next Carrington-class solar storm could be is estimated from about three events (1859, 1872, 1921); a nightly record of how close to the equator the aurora was seen, 1800 to 1950, would multiply that sample. Newspapers printed local sightings every time, and [Trove](https://trove.nla.gov.au/about/create-something/using-api), [Papers Past](https://paperspast.natlib.govt.nz/), [Delpher](https://www.delpher.nl) and [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) cover both hemispheres from the early 1800s. Search each for aurora and "northern" or "southern lights", extract date, place and direction, and take the lowest geomagnetic latitude for each night. Goal: a nightly catalogue of auroral extent from about 1800 to 1950 and a return-period estimate for extreme storms built on it. Verifier: nights with big sightings must line up with high values of the [aa index](https://isgi.unistra.fr/) (continuous since 1868) and with the magnetograms held at [NOAA NCEI](https://www.ngdc.noaa.gov/geomag/).

### C14d Map reprinting across the world's newspapers

Nineteenth-century papers filled columns by copying each other, so a global reprint map would show how news, fiction and hoaxes crossed borders and languages in the first age of mass print. [Viral Texts](https://viraltexts.org) has built these networks for US papers and a few others, and [Impresso](https://impresso-project.ch/app/) for Swiss and Luxembourg ones; nobody has joined them up. Start with near-duplicate detection inside [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories), then extend to [Trove](https://trove.nla.gov.au/about/create-something/using-api), [Papers Past](https://paperspast.natlib.govt.nz/), [Delpher](https://www.delpher.nl) and [Gallica](https://api.bnf.fr/fr/api-gallica-de-recherche), using translation to catch cross-language reprints. Goal: one global reprint graph giving each text's first appearance and every copy. Verifier: on the overlapping US corpus the clusters must reproduce Viral Texts' published ones.

### C14e Cross-reference politicians with company and contract notices

Catching a nineteenth-century legislator voting on a railway bill while sitting on that railway's board would put numbers on conflicts of interest historians know mostly by anecdote. The limit is honest: land registries and company files are largely unscanned, so this works only from what newspapers printed, chiefly prospectuses listing directors, contract awards and land sales. Members are in the [History of Parliament](https://www.historyofparliamentonline.org/), [Hansard](https://hansard.parliament.uk/) and the US [Congressional Biographical Directory](https://bioguide.congress.gov/); the newspapers are in [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories), [Welsh Newspapers](https://newspapers.library.wales/) and [Trove](https://trove.nla.gov.au/about/create-something/using-api). Extract every directors' list from prospectuses, match names to members, then find their votes and speeches on the same company's business. Verifier: each link cites a page image at both ends, and known Railway Mania MPs who were also directors must be recovered.

### C15a Match tobacco industry drafts to published science

Every tobacco-company draft that matches a published paper is a documented case of ghostwritten or covertly funded science, and the archive holding them is 14 million documents, most never read. The [Truth Tobacco Industry Documents](https://www.industrydocuments.ucsf.edu/tobacco/) come from litigation and are full-text searchable through the [API](https://www.industrydocuments.ucsf.edu/research-tools/api/). Start by pulling documents that look like manuscripts or funding memos, extract title, authors and journal, and match each against [PubMed](https://pubmed.ncbi.nlm.nih.gov/). Goal: a list of published papers with an internal draft or undisclosed industry funding, each with its evidence. Verifier: every match pairs a document page with the published text, and cases already documented in the tobacco-control literature must be found.

### C15b Opioid marketing notes against pill shipments

Whether sales visits drove opioid prescribing is the core question of the opioid litigation, and both halves of the answer are public. The [Opioid Industry Documents Archive](https://www.industrydocuments.ucsf.edu/opioids/) holds manufacturers' and distributors' emails, call notes and targeting lists, searchable through the [API](https://www.industrydocuments.ucsf.edu/research-tools/api/); DEA <abbr title="Automation of Reports and Consolidated Orders System">ARCOS</abbr> shipment records down to the pharmacy were released through the [Washington Post](https://www.washingtonpost.com/graphics/2019/investigations/dea-pain-pill-database/). Extract every named prescriber and pharmacy contacted, with dates, and join them to shipments. Goal: a pharmacy-level table of marketing contacts and the shipment changes that followed. Verifier: the shipment side is independent government data, so any claimed effect can be recomputed from ARCOS alone.

### C15c Geocode every spill and dump in the chemical industry papers

Spills and dumps that chemical companies recorded internally but never reported may still be in the ground, and a map of them, flagged where no regulator has a record, is a list of places to test. The UCSF [chemical collection](https://www.industrydocuments.ucsf.edu/chemical/), [ToxicDocs](https://www.toxicdocs.org/) and the [Poison Papers](https://www.poisonpapers.org/) are public, millions of pages between them, mostly unread. Extract every named site, event, substance and quantity with its date, and geocode it. Goal: a mapped table of documented releases, flagging those absent from public records. Verifier: sites and releases are cross-checked against EPA [Superfund](https://www.epa.gov/superfund/search-superfund-sites-where-you-live) and [TRI](https://www.epa.gov/toxics-release-inventory-tri-program) records, and each entry cites a page image.

### C15d Score oil companies' internal climate projections

[Supran, Rahmstorf and Oreskes (2023)](https://doi.org/10.1126/science.abk0063) showed that Exxon's own scientists projected warming accurately; Shell, BP, the American Petroleum Institute and the coal companies have not had the same treatment, and the result would be evidence in live lawsuits. The documents are in the UCSF [fossil fuel collection](https://www.industrydocuments.ucsf.edu/fossilfuel/) and [Climate Files](https://www.climatefiles.com). Reproduce the Exxon scoring first, then extract every internal temperature or CO₂ projection with its date and every public statement on the same question. Goal: a table per company of projections, their skill, and the matching public claims. Verifier: projections are scored against observed warming ([HadCRUT5](https://www.metoffice.gov.uk/hadobs/hadcrut5/)) with the Exxon paper's method, which must reproduce its published numbers.

### C16 Translate highly cited science that exists only in Russian, German or Japanese

Highly cited results that exist only in Russian, German or Japanese are invisible to English search and keep being rediscovered; an English text beside each would end that. [Math-Net.Ru](https://www.mathnet.ru/) holds Russian mathematics and physics journals back to the 1860s (the main Soviet journals were translated from the late 1950s; earlier volumes and smaller journals never were), with German journals at [DigiZeitschriften](https://www.digizeitschriften.de/) and Japanese ones at [J-STAGE](https://www.jstage.jst.go.jp/browse/-char/en) and [NDL Digital Collections](https://dl.ndl.go.jp/). Start in [OpenAlex](https://help.openalex.org/api/) with [works filtered by language](https://api.openalex.org/works?filter=language:ru), sort by citation count, drop those with an English version, then translate the rest with equations intact. Goal: a published English translation beside every highly cited paper whose only version is non-English. Verifier: papers with a professional translation (AMS Translations, the English [JETP](http://www.jetp.ras.ru/) volumes from 1955) are held out and the machine output scored against them.

### C17a Transcribe the secret White House tapes

Presidents from Roosevelt to Nixon secretly recorded thousands of hours of meetings and calls, and historians keep quoting the same few conversations because the rest has never been transcribed. The [Nixon tapes](https://www.nixonlibrary.gov/white-house-tapes) run to about 3,700 hours, public domain, with transcripts only for the Watergate trial and a few other subsets; the [Miller Center](https://millercenter.org/the-presidency/secret-white-house-tapes) holds the Kennedy and Johnson recordings, partly transcribed. The audio is poor, so start with a speech-recognition and speaker-diarisation pipeline tuned on hours that already have transcripts. Goal: a timestamped, speaker-labelled transcript of every released hour, marking inaudible passages rather than guessing. Verifier: the existing professional transcripts, held out, give word-error rate and speaker-attribution accuracy.

### C17b Transcribe public broadcasting, oral histories and hearings

This is infrastructure rather than a headline: decades of radio, television, interviews and hearings can be found only by catalogue title because nobody has the words. The [American Archive of Public Broadcasting](https://americanarchive.org/) holds over 100,000 programmes (rough machine transcripts for some, corrected through its FIX IT game), the [Veterans History Project](https://www.loc.gov/vets/) and [Densho](https://densho.org/) hold thousands of oral histories, and congressional hearing video is linked from the [House Committee Repository](https://docs.house.gov/Committee/Calendar/ByMonth.aspx). Start with hearings, where video and the printed transcript on [govinfo](https://www.govinfo.gov/app/collection/chrg) pair up to tune and test the pipeline. Goal: timestamped, speaker-labelled transcripts of every spoken word in these archives. Verifier: printed hearing transcripts and human-transcribed oral histories, held out, give word-error rate.

### C18 Un-redact by diffing releases S

Every word visible in one release of a document and blacked out in another is a genuine un-redaction; researchers find these by hand on famous documents, but nobody has run the comparison across whole collections. The same page is often released more than once with different black boxes: the 2017 and 2025 [JFK](https://www.archives.gov/research/jfk) tranches, a [CIA CREST](https://www.cia.gov/readingroom/) copy against the [FBI Vault](https://vault.fbi.gov) copy of the same memo, a cable held at both [TNA](https://www.nationalarchives.gov.uk) and [NARA](https://www.archives.gov). Start with the JFK tranches: pair copies of the same document by ID and text similarity, align the page images, and list every region redacted in one and legible in the other. Verifier: the recovered text must be visible in a public page image; guessed redactions count for nothing.

## D Scientific data rescue

### D1a Turn ship logbooks into marine weather observations S

The emptiest part of the global weather record is the ocean before 1900, and every watch on a naval ship logged position, pressure, temperature and wind. US Navy deck logs are scanned in the [NARA catalog](https://www.archives.gov/research/military/logbooks/navy-online) and Royal Navy logs sit in [TNA ADM 53](https://discovery.nationalarchives.gov.uk/details/r/C1762) (2.4 million items, some digitised); volunteers at [Old Weather](https://www.oldweather.org) have typed a fraction by hand. Start with one scanned ship's logbook from NARA that Old Weather has already transcribed, and get handwritten-table reading to match it. Goal: every scanned logbook page as dated, positioned observations submitted to <abbr title="International Comprehensive Ocean-Atmosphere Data Set">ICOADS</abbr> ([NOAA](https://www.ncei.noaa.gov/products/international-comprehensive-ocean-atmosphere-data-set)). Verifier: Old Weather pages are held out, and two ships in the same port on the same day must agree on pressure.

### D1b Transcribe land weather-station sheets S

In 2020 [Rainfall Rescue](https://www.zooniverse.org/projects/edh/rainfall-rescue) volunteers typed over five million UK rainfall values in about two weeks and, after quality control, they entered the Met Office record ([Hawkins et al.](https://doi.org/10.1002/gdj3.157)); millions more handwritten station sheets worldwide are scanned and waiting for the same treatment. NOAA's scanned US cooperative observer forms are on the [NCEI forms page](https://www.ncei.noaa.gov/access/search/data-search/cooperative-weather-observations-publication), and un-rescued sources worldwide are registered by the [Copernicus data-rescue service](https://data-rescue.copernicus-climate.eu/), [ACRE](https://www.met-acre.net/) and the [I-DARE portal](https://www.idare-portal.org/). Start by training on Rainfall Rescue's public transcriptions, then run on the NCEI forms. Goal: scanned sheets in these registries turned into daily or monthly series in national archives or <abbr title="Global Historical Climatology Network">GHCN</abbr>. Verifier: sheets already keyed in are held out, and neighbouring stations must agree within normal spatial variance.

### D2 Digitise analogue seismograms of the great pre-digital earthquakes

The largest earthquakes ever recorded (1906 San Francisco, 1923 Kanto, 1960 Chile, 1964 Alaska) and the early nuclear tests survive as ink or film traces, and only a small share of those traces has been digitised for modern waveform analysis. USGS has released the [WWSSN film-chip scans](https://www.usgs.gov/data/world-wide-standardized-seismographic-network-film-chip-scans) (1962–78, 153 M6+ earthquakes and 156 nuclear explosions, about 5% of 3.7 million chips), INGV's [Seismogram Request](http://seismogramrequest.rm.ingv.it/) serves over 200,000 European scans from 1895–1984 (free registration), and [Legacy Seismograms](https://www.legacy-seismograms.eu/useful-links/) lists other archives; the former IRIS SeismoArchives (Caltech scans) survives only as a [Wayback capture](https://web.archive.org/web/20231205151122/http://ds.iris.edu/seismo-archives/), so republishing it is itself a contribution. Start by converting WWSSN traces for one event to calibrated time series with Harvard's [DigitSeis](https://projects.iq.harvard.edu/digitseis). Goal: calibrated waveforms and modern locations and mechanisms for every pre-1980 event above magnitude 7. Verifier: magnitudes must fall within [ISC-GEM](https://www.isc.ac.uk/iscgem/) uncertainties, and late-1970s events recorded both on film and by early digital stations must give the same waveform.

### D3 Harvard DASCH plates: century-long light curves S

Harvard photographed the whole sky over and over from 1885 to 1992, so almost any star or asteroid brighter than about 15th magnitude has a century of measurements in which vanished stars, pre-discovery asteroid positions and slow fades are waiting. [DASCH](https://dasch.cfa.harvard.edu/dr7/) scanned about 450,000 plates and released its final data (DR7) in 2024 with light-curve access; German plate archives are in [APPLAUSE](https://www.plate-archive.org/). Start with a target list: stars missing from modern surveys ([VASCO](https://vasconsite.wordpress.com)), or asteroids whose orbits cross old plates ([SSOIS](https://www3.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois/) lists them; each recovered position lengthens the orbital arc). The catch is plate artefacts: Schaefer's 2016 century-long fade of Boyajian's star was later attributed to plate systematics (Hippke et al.; Lund et al.). Goal: a century-long light curve for every object to about 15th magnitude, with artefacts flagged. Verifier: recovered asteroid positions must fit the orbit at the [Minor Planet Center](https://www.minorplanetcenter.net/), and known variable stars must reproduce their published periods.

### D4 Date tree-ring cores automatically for temperature reconstruction

Tree-ring reconstructions of the last thousand years of temperature rest on cores measured ring by ring under a microscope and cross-dated by hand, which caps how many sites get added; the promise here is a tool labs adopt, not a discovery. The [Poláček et al. dataset](https://zenodo.org/records/7981462) gives about 47 GB of microscope scans of four conifer species with over 8,000 hand-marked ring boundaries, and their [TRG-ImageProcessing](https://github.com/Gregor-Mendel-Institute/TRG-ImageProcessing) code is the baseline to beat. Detect boundaries, measure widths, then cross-date each series with [dplR](https://cran.r-project.org/package=dplR) against reference chronologies from the [<abbr title="International Tree-Ring Data Bank">ITRDB</abbr>](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring), which holds measurements from more than 5,000 sites. Goal: an open scan-to-dated-series tool with a published error rate per species. Verifier: on held-out cores, widths must match the hand measurements and every ring must land in the same calendar year; one missed ring shifts every earlier year and fails the cross-date.

### D5 Find climate proxy records whose dates disagree with their neighbours

A proxy record dated a few decades wrong smears every temperature reconstruction built from it, and finding such records, with the offset that fixes each, is a checkable improvement to the picture of past climate. The data are open: the [PAGES 2k temperature database](https://www.ncei.noaa.gov/access/paleo-search/study/21171) (692 records), [Neotoma](https://api.neotomadb.org/) for pollen, [SISALv3](https://www.ncei.noaa.gov/pub/data/paleo/speleothem/SISAL-v3/) for speleothems and the [NOAA paleoclimate archive](https://www.ncei.noaa.gov/products/paleoclimatology) for the rest, made machine-readable by [LiPD](https://lipd.net/) and [Pyleoclim](https://pyleoclim-util.readthedocs.io/). Start with PAGES 2k and run three checks: neighbouring records should agree on when shifts happened, every proxy able to record them should show the 1257 Samalas and 1815 Tambora eruptions in the same year, and each record should track instrumental data where they overlap. Goal: a list of proxy series with inconsistent age models, with the evidence and the corrective offset. Verifier: a proposed offset must bring the series into line with independent records it was not fitted to.

### D6 Measure glacier retreat from historic photographs

Glacier fronts before 1950 have been measured for only a few hundred glaciers, but photographers and surveyors captured thousands of them, some as early as 1857. The [NSIDC Glacier Photograph Collection](https://nsidc.org/data/g00472) holds over 25,000 images, the [ETH Zurich image archive](https://ba.e-pics.ethz.ch/) covers the Alps, and USGS runs [repeat photography in Glacier National Park](https://www.usgs.gov/centers/norock/science/repeat-photography-project). Match each photo to its glacier in [GLIMS](https://www.glims.org/maps/glims), then project it onto a terrain model with the [WSL Monoplotting Tool](https://www.wsl.ch/de/services-produkte/monoplotting-tool/) to map the terminus. Goal: a dated terminus position for every photographed glacier with no pre-1950 record in the [WGMS Fluctuations of Glaciers database](https://wgms.ch/data_databaseversions/). Verifier: glaciers with both photographs and surveyed fronts in WGMS are held out and must agree.

### D7 Classify the plankton image backlog

Plankton sit at the base of the ocean food web and respond fast to warming, and the cameras watching them take images far faster than anyone can label. [EcoTaxa](https://ecotaxa.obs-vlfr.fr/) hosts over 700 million images from many instruments, a large share never validated; anonymous visitors see only a subset of identified images, so the backlog starts with a free account and a request to project owners. The Imaging FlowCytobot [dashboards](https://ifcb-data.whoi.edu/) stream more from fixed stations and are open. (The bigger prize, re-counting the Continuous Plankton Recorder's 90 years of silk samples at species level, needs a Marine Biological Association partnership to image the physical archive first, so it is not listed.) Goal: validated species-level counts, with calibrated confidence, for the unclassified backlog. Verifier: human-validated subsets, held out, give per-class precision and recall.

### D8 Extend the sea-level record backwards from paper tide charts

Whether sea-level rise is accelerating is best tested on long records, and [<abbr title="Permanent Service for Mean Sea Level">PSMSL</abbr>](https://psmsl.org) thins out before 1950. The missing years are ink traces on paper. [BODC](https://www.bodc.ac.uk/data/hosted_data_systems/sea_level/historical_uk_tide_gauge_data/) has scanned UK station charts and [NOAA](https://www.ngdc.noaa.gov/hazel/view/hazards/tsunami/marigram-search/) 3,000 more around tsunami events, nearly all still un-traced; elsewhere they sit in harbour archives and need someone to go in person. Trace the curves into hourly heights and monthly means. Goal: station-years before 1950 added to PSMSL. Verifier: charts from years a station already has in PSMSL are held out and must reproduce its monthly means.

### D9 Enter legacy soil surveys into WoSIS

Whether soils are gaining or losing carbon is a major uncertainty in the carbon budget and can only be measured against a baseline; the best one is a century of national surveys, scanned but never entered into a database. The [ISRIC World Soil Library](https://library.wur.nl/WebQuery/isric/start) holds 17,000 reports and 10,000 maps (a third or more as PDFs), and USDA's archived county soil survey manuscripts are on [NRCS's download site](https://nrcs.app.box.com/s/d0hq4ddo8t8otkwaejj131xp7xo0yi9g). Extract profile descriptions and lab tables, with location and date, into the format of [WoSIS](https://www.isric.org/explore/wosis). Goal: pre-1980 profiles in WoSIS so soil-carbon change over a century can be measured. Verifier: surveys whose profiles are already in WoSIS are held out and must match.

### D10 Agricultural experiment station bulletins

US experiment stations grew named crop varieties side by side for decades and printed the yields, so the bulletins hold century-long series that could separate genetic gain from weather; they are scanned and never aggregated. They are in Cornell's [Core Historical Literature of Agriculture](https://digital.library.cornell.edu/collections/chla), [HathiTrust](https://babel.hathitrust.org/cgi/ls) (full-text search for "agricultural experiment station bulletin") and the land-grant repositories listed by [USAIN](https://usain.org/Access-to-Extension-and-Experiment-Station-Publications); variety pedigrees are in [Genesys](https://www.genesys-pgr.org) and [GRIN](https://npgsweb.ars-grin.gov). Start with one crop and one state, extract every variety-trial table, and link varieties to pedigrees. Goal: century-long yield series for named varieties with genetic gain and weather sensitivity estimated separately. Verifier: bulletins print means and totals, so every extracted table must reproduce them.

### D11 Rebuild ionosphere history from amateur radio contest logs

A solar storm that garbles <abbr title="High Frequency">HF</abbr> radio also degrades satellite positioning and pushes current into power grids, and forecasting it means knowing how the ionosphere behaved over many solar cycles. Ionosondes are sparse and recent. A logged radio contact dates and locates a propagation path, so decades of public contest logs (start with the Cabrillo files in the [CQ WW public logs](https://cqww.com/publiclogs/)) are a measurement record nobody has assembled: [HamSCI](https://hamsci.org) uses a fraction, [WSPRnet](https://wsprnet.org) only the automated era. Goal: parse the archives into an open propagation dataset by band, path and hour. Verifier: where an ionosonde was operating, the usable frequencies implied by contacts must be consistent with its readings.

### D12 Date and place the timber in historic buildings and artefacts

Dating the wood in a medieval roof, a panel painting or a ship's frame tells you when it was built or painted and where the timber grew, and museums pay specialists to do it one object at a time. The start is ring-width series already measured but undated, or dated against only one chronology: the [Digital Collaboratory for Cultural Dendrochronology](https://dendro.dans.knaw.nl/) holds thousands from buildings and art, the [ITRDB](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring) supplies reference chronologies, and [dplR](https://cran.r-project.org/package=dplR) does the cross-dating statistics. Match each series against every chronology to find felling year and source region; photographs rarely show end grain, so photographed collections help only where macro images of sections exist. Goal: a felling date and provenance region for every undated series, with match statistics. Verifier: buildings with published felling dates in the [Vernacular Architecture Group database](https://archaeologydataservice.ac.uk/archives/view/vag_dendro/) are held out and must be recovered.

## E Earth imagery archives

### E1a Map wartime bomb craters to locate unexploded ordnance

A crater map built from wartime reconnaissance photographs would show where bombs actually fell, including the ones that never went off, and <abbr title="unexploded ordnance">UXO</abbr> still turns up on British building sites; the risk maps developers buy are drawn mainly from bomb-census records, not from the ground. The [National Collection of Aerial Photography](https://ncap.org.uk/) (NCAP) holds tens of millions of RAF and captured Luftwaffe frames, and the RAF's 1940s post-war verticals of England are in the [Historic England Archive](https://historicengland.org.uk/images-books/archive/collections/aerial-photos/); both can be browsed online, but check each archive's terms before bulk-downloading full-resolution scans. Start with one city: pull every 1940–46 sortie over it, georeference the frames against modern mapping, and train a crater and damaged-plot detector on a hand-labelled sample. Goal: a dated, georeferenced crater layer for London, Coventry, Hull and Plymouth, precise enough for a site surveyor. Verifier: agreement with the London bomb census mapped by [Bomb Sight](http://bombsight.org/), with [Zetica's free UK UXO risk maps](https://zeticauxo.com/guidance/risk-maps/), and with recorded UXO finds.

### E1b Measure post-war landscape loss from 1930s–50s aerial photographs

Nobody knows how many hedgerows, ponds, wetlands and orchards were lost in the post-war farming push, because the measured record (UKCEH's Countryside Survey) starts in 1978; the photographs that hold the 1940s baseline are sitting in archives. They are the RAF verticals in the [Historic England Archive](https://historicengland.org.uk/images-books/archive/collections/aerial-photos/), Cambridge's [CUCAP](https://www.cambridgeairphotos.com/) collection, and US frames back to the 1930s in [USGS Aerial Photo Single Frames](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-aerial-photography-aerial-photo-single-frames), searchable in [EarthExplorer](https://earthexplorer.usgs.gov/) (free registration). Start with one county's mid-century frames: orthorectify them, map the four features, and do the same on modern imagery. Goal: per-parish tables of hedgerow length, pond count, and wetland and orchard area around 1946 against today, for at least one English and one US county. Verifier: hand-digitised parishes held out, plus the [Countryside Survey](https://www.ceh.ac.uk/our-science/projects/countryside-survey), which checks the trend from 1978 rather than the baseline.

### E2 Find archaeological sites lost since the 1960s in declassified spy-satellite photos

Thousands of archaeological sites across Iraq, Syria, Iran and Central Asia have been erased since the 1960s by dams, irrigation, sprawl and war, and US spy satellites photographed them before they went. The frames are free on [EarthExplorer](https://earthexplorer.usgs.gov/) (free registration) under "Declassified Data": [Declass 1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1) (CORONA, ARGON and LANYARD, 1960–72, ~860,000 frames), [Declass 2](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-2) (KH-7 GAMBIT and the KH-9 mapping camera) and [Declass 3](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-3) (KH-9 HEXAGON panoramic at about 1 m, declassified in 2011 and barely used). The [CORONA Atlas](https://corona.cast.uark.edu/) has orthorectified part of the Middle East CORONA coverage; most KH-9 frames are unrectified, so start with KH-9 over one reservoir or irrigation basin, orthorectify it, and catalogue tells, canals, qanats and fortifications visible then and absent from modern imagery. Goal: georeferenced declassified coverage of the region plus a catalogue of sites visible in the old frames and gone today. Verifier: match against site records and condition assessments in the [EAMENA database](https://database.eamena.org/), and a random sample of new sites checked by eye in both images.

### E3a Build a building-level database of US cities from Sanborn fire-insurance maps

A queryable record of every building in 1880–1950 America would find the forgotten gasworks, tanneries and dry cleaners under today's homes and schools. Sanborn maps recorded exactly that for thousands of towns: footprint, colour-coded construction material, storeys, use and named industrial occupants. The Library of Congress has more than 35,000 sheets in its [Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/), with IIIF images and the loc.gov JSON API; start by pulling one city's sheets through the API, georeferencing them, and extracting each building polygon with its attributes. Goal: a building-level database of US cities for 1880–1950 that can be queried for every former polluting use, for brownfield screening. Verifier: hand-transcribed sheets held out, and footprint overlap with modern parcel data where buildings survive.

### E3b Gazetteer of vanished features from historic Ordnance Survey maps

Filled mine shafts collapse under gardens and roads, and old quarries and ponds lie under housing, and many are recorded only on Victorian and Edwardian Ordnance Survey sheets; a national gazetteer of those vanished features does not exist. The National Library of Scotland serves georeferenced OS sheets for Great Britain from the 1840s onward at [maps.nls.uk](https://maps.nls.uk/geo/explore/), and the Alan Turing Institute's [MapReader](https://mapreader.readthedocs.io/) is an open pipeline built for exactly these sheets, with tutorials to start from. Run its patch classification and text spotting across the sheets for mills, shafts, wells, ponds, quarries and railways, recording the dates each feature first and last appears. Goal: a national gazetteer of features on historic OS maps and absent from the current map, with coordinates and date ranges. Verifier: comparison with current OS OpenData and with the Coal Authority's mine-entry records, plus precision on a hand-checked sample.

### E3c Old coastlines and river courses from georeferenced historic maps

Where a coast or river lay 200 years ago is the long baseline engineers need to predict where erosion and floods will go next, and it is sitting in thousands of maps that volunteers have already georeferenced. The [David Rumsey Map Collection](https://www.davidrumsey.com/view/georeferencer) has over 100,000 maps online, many crowd-georeferenced, and [Allmaps](https://allmaps.org/) georeferences IIIF maps from several libraries and exposes the control points. Start by collecting every georeferenced map of one region, extract coastlines or river centrelines, and give each line a positional uncertainty from its georeferencing residuals. Goal: a public layer of pre-1900 coastline and river positions for a named region (for example the English North Sea coast or the lower Mississippi), each line carrying its date and error bar. Verifier: residuals on held-out control points, agreement between independent maps of the same date, and overlap with early aerial photography where the dates meet.

### E5a Find uncharted wrecks in UK offshore-wind survey data

The seas around Britain hold thousands of wartime wrecks and lost aircraft, many of them war graves, and offshore wind, cable and aggregate developers have surveyed large areas of that seabed at metre or finer resolution and deposited the data in public. The Crown Estate's [Marine Data Exchange](https://www.marinedataexchange.co.uk) holds more than 200 TB of this multibeam and side-scan sonar, free to download (you add surveys to a basket and a link is emailed to you), and it has been read only for engineering; global grids such as [GEBCO](https://www.gebco.net/data-products-gridded-bathymetry-data/gebco2025-grid), at ~450 m, cannot show a wreck. Start with one wind-farm zone: grid the multibeam, detect discrete seabed contacts, classify them, and check each against the charted wrecks. Goal: every seabed object larger than a few metres in the released survey areas that is missing from the UK Hydrographic Office wrecks and obstructions layer. Verifier: recall on known wrecks in the UKHO layer (via the [Admiralty marine data portal](https://datahub.admiralty.co.uk/portal/apps/sites/#/marine-data-portal)), and a sample of new contacts reviewed by eye.

### E5b Find uncharted wrecks in NOAA's multibeam archive

Matching an unexplained seabed contact to a historical loss record is how named shipwrecks get found, and NOAA's public multibeam archive, thousands of research and hydrographic cruises deep, has not to our knowledge been swept for them. The [NCEI bathymetry viewer](https://www.ncei.noaa.gov/maps/bathymetry/) serves the raw swaths plus NOS hydrographic surveys as gridded BAG files, mostly in US waters. Start with the BAG surveys of one busy approach, such as a major harbour, detect discrete contacts at native resolution, and drop those already charted. Goal: every object larger than a few metres in the archive's coverage that is missing from NOAA's [Wrecks and Obstructions database](https://nauticalcharts.noaa.gov/data/wrecks-and-obstructions.html), each with a candidate identity where a loss record fits. Verifier: recall on the charted wrecks in that database, and a sample of new contacts reviewed by eye.

### E5c Find uncharted wrecks in EMODnet's high-resolution European bathymetry

Europe's shelf seas hold wrecks from two world wars and dumps of wartime munitions that are now corroding, and EMODnet's high-resolution coastal terrain models are the one open pan-European layer fine enough to see them. The main [EMODnet Bathymetry](https://emodnet.ec.europa.eu/en/bathymetry) model is ~115 m and too coarse, but EMODnet also serves more than 200 composite DTMs of coastal areas and hotspots at up to 1/512 arc-minute (a few metres), and its survey catalogue lets users request the underlying data from providers. Start by downloading those high-resolution tiles and running a contact detector over them. Goal: every object above a few metres in those tiles that is missing from the UKHO wrecks database, which covers all European seas. Verifier: recall against the wrecks layer in the [EMODnet geoviewer](https://emodnet.ec.europa.eu/geoviewer/), which is built from the UKHO database, plus a sample of new contacts checked by eye.

### E5d Find uncharted wrecks in Australian survey data

HMAS Sydney was found in 2008, 66 years after it sank off Western Australia, and only after a dedicated search; Australia's waters are vast and thinly charted, and many more ships and wartime aircraft are recorded as lost without a known position. Geoscience Australia's AusSeabed programme publishes multibeam surveys through the [GA marine portal](https://portal.ga.gov.au/persona/marine). Start with the highest-resolution surveys, detect discrete seabed contacts and classify them. Goal: every object above a few metres in the surveyed areas that is missing from the national wreck register, each matched where possible to a recorded loss. Verifier: recall against the located wrecks in the [Australasian Underwater Cultural Heritage Database](https://www.dcceew.gov.au/parks-heritage/heritage/underwater-heritage/auchd), and a sample of new contacts checked by eye.

### E6 Measure every tailings dam's movement with free radar

The Brumadinho tailings dam in Brazil killed 270 people when it failed in 2019, and a retrospective study [found precursory deformation in free Sentinel-1 radar data](https://www.nature.com/articles/s43247-020-00079-2); nobody publishes that measurement for every tailings dam in the world. The [Global Tailings Portal](https://tailing.grida.no) lists about 1,800 facilities with locations; Sentinel-1 since 2014 is free from the [Copernicus Data Space](https://dataspace.copernicus.eu/), pre-processed interferograms are in the [COMET LiCSAR portal](https://comet.nerc.ac.uk/comet-lics-portal/), and in Europe the [European Ground Motion Service](https://egms.land.copernicus.eu/) already publishes calibrated time series. Start by reproducing the Brumadinho precursor from LiCSAR frames, then build an <abbr title="Interferometric Synthetic Aperture Radar">InSAR</abbr> displacement series for each portal dam, reporting a noise floor rather than "alerts", since vegetation, thermal cycles and atmosphere cause most false positives. Goal: public time series for every portal dam coherent enough to measure, with the per-site noise floor stated. Verifier: the Brumadinho rerun must match the published precursor, and dams known to be stable must stay within their noise floor.

### E7 Find the bridges that are already moving

Genoa's Morandi bridge [showed movement in satellite radar before its 2018 collapse](https://doi.org/10.3390/rs11121403), and Dresden's Carola bridge had [a movement cluster at the failure point](https://www.newcivilengineer.com/latest/distinct-movement-cluster-evident-on-carola-bridge-in-dresden-prior-to-its-collapse-research-finds-17-09-2024/) before it fell in 2024; both were found afterwards, and nobody runs this prospectively and publishes the ranking. The processing already exists: the [European Ground Motion Service](https://egms.land.copernicus.eu/) publishes millimetre-scale motion for every coherent point in Europe, and NASA's [OPERA DISP-S1](https://www.earthdata.nasa.gov/data/catalog/asf-opera-l3-disp-s1-v1-1) gives 30 m displacement series for North America from 2016. Start by joining those points to the [US National Bridge Inventory](https://www.fhwa.dot.gov/bridge/nbi/ascii.cfm) (about 620,000 bridges with condition ratings) or OpenStreetMap bridge ways, remove seasonal thermal motion, and rank by residual long-term displacement. Goal: a public per-bridge table of residual trend with uncertainty. Verifier: correlation with NBI condition ratings, and a time split in which the ranking built from earlier data should put later closures and failures near the top.

### E8a Transcribe and georeference imaged museum specimens that lack coordinates

About 50 million museum specimens have a photographed label but no coordinates, so they are invisible to every range map and extinction-risk assessment; reading them is a handwriting problem at a scale volunteers on [Notes from Nature](https://www.zooniverse.org/organizations/md68135/notes-from-nature) cannot finish. GBIF indexes about 77 million imaged preserved specimens, some 50 million without coordinates ([filtered search](https://www.gbif.org/occurrence/search?media_type=StillImage&has_coordinate=false&basis_of_record=PRESERVED_SPECIMEN), [same query via the API](https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&hasCoordinate=false&basisOfRecord=PRESERVED_SPECIMEN&limit=0)), and [iDigBio](https://portal.idigbio.org/portal/search) adds more through its [search API](https://github.com/iDigBio/idigbio-search-api/wiki). Start with one institution's un-georeferenced specimens: read each label image, parse the locality, and assign coordinates with an uncertainty radius by the standard point-radius method. Goal: coordinates with uncertainty for millions of specimens, returned to the holding institutions as annotations. Verifier: hold out specimens that already have both a label image and expert-assigned coordinates, and report the distribution of error distances.

### E8b Measure flowering-time shifts from herbarium sheets

A century of herbarium sheets can say, for thousands of species, how many days earlier spring flowering now comes, but so far it has been measured species by species with hand scoring. The method, flowering day-of-year regressed on year or spring temperature, is established ([Willis et al. 2017 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5888139/)), and GBIF indexes about 62 million imaged plant specimens ([search](https://www.gbif.org/occurrence/search?media_type=StillImage&basis_of_record=PRESERVED_SPECIMEN&taxon_key=6), [API](https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&basisOfRecord=PRESERVED_SPECIMEN&taxonKey=6&limit=0)). Start with one well-collected genus: score each sheet's phenophase (bud, flower, fruit) from the image, pair it with collection date and place, and fit the shift per species and region. Goal: a table of flowering-date shift in days per decade, with confidence intervals, for every species with enough dated sheets. Verifier: hand-scored sheets held out to test the scoring, and agreement with field observations from the [USA National Phenology Network](https://www.usanpn.org/data) where species and regions overlap.

### E9a Map seagrass in turbid temperate waters

The first global 10 m seagrass map, [published by an Arizona State team in 2026](https://news.asu.edu/20260624-environment-and-sustainability-first-complete-map-worlds-seagrass-offers-warnings-and-hope), stops where the water turns murky, so the temperate coasts of northern Europe, where seagrass stores carbon and shelters fisheries, are still mapped mainly by the patchy [UNEP-WCMC seagrass layer](https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb). Optical satellites cannot see the bottom there, but intertidal and shallow beds are visible at low tide. Start by pulling low-tide Sentinel-2 scenes for one turbid coast (for example Great Britain or the Wadden Sea) from the [Copernicus Data Space](https://dataspace.copernicus.eu/), adding public aerial and drone surveys, and classifying beds. Goal: a seagrass extent map for that coast with stated accuracy and minimum mappable bed size. Verifier: field records from [Project Seagrass](https://www.projectseagrass.org/) and its [SeagrassSpotter](https://seagrassspotter.org/) app, and quadrat data from [Seagrass-Watch](https://www.seagrasswatch.org/).

### E9b Map which peatlands are drained, field by field

Drained peat releases a few per cent of global human greenhouse emissions, and restoration money cannot be targeted until someone maps which fields are drained; England has that map and most countries do not. The [Global Peatland Database](https://greifswaldmoor.de/global-peatland-database-en.html) (Greifswald Mire Centre) holds drainage status mostly as per-country estimates, while the [England Peat Map](https://england-peat-map-portal-ncea.hub.arcgis.com/) models peat extent, depth, condition and drainage grips from lidar and satellite imagery, trained on [field depth surveys](https://naturalengland-defra.opendata.arcgis.com/datasets/Defra::england-peat-map-peat-depth-surveys/about). Start by building a drainage-ditch detector on open lidar and imagery without using English data, then apply it to a country with no such map (for example Ireland or Poland). Goal: a field-level drained/undrained peat map for that country, with accuracy stated. Verifier: test the pipeline against the England Peat Map and its survey points, then against national soil-survey peat points in the target country.

### E10a Inventory brick kilns outside South Asia

This is a modest transfer-learning job, not a discovery: South Asian kilns are already counted and typed, and the remaining promise is a first public kiln map for a country with documented debt bondage in its brick industry, such as Cambodia (LICADHO's 2023 report [Bound by Bricks](https://www.licadho-cambodia.org/reports.php?perm=243)). [SentinelKilnDB](https://huggingface.co/datasets/SustainabilityLabIITGN/SentinelKilnDB) has 62,671 hand-validated kilns across the Indo-Gangetic Plain, Pakistan, Afghanistan and Bangladesh, labelled by type on free Sentinel-2 imagery. Train on it, run on Sentinel-2 from the [Copernicus Data Space](https://dataspace.copernicus.eu/) for the target country, and date each kiln's first appearance. Goal: a public kiln inventory with type and first-seen year, usable as a sampling frame for labour inspectors and surveys (a kiln is not proof of forced labour). Verifier: precision and recall on hand-labelled random tiles.

### E10b Predict Brazil's forced-labour sites from land-use history

Brazil names the farms and charcoal camps caught using slave-like labour; if their land-use history predicts which properties are named next, labour inspectors get a target list. The "dirty list" ([Cadastro de Empregadores](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/areas-de-atuacao/cadastro_de_empregadores.pdf)) is a PDF naming each establishment and municipality, updated about twice a year; rural property boundaries are in the national register [SICAR](https://www.car.gov.br/), and history comes from [Global Forest Watch](https://www.globalforestwatch.org/map/) deforestation layers and [IBAMA's embargoed areas](https://servicos.ibama.gov.br/ctf/publico/areasembargadas/ConsultaPublicaAreasEmbargadas.php). Start by extracting the list into a table and matching each establishment to a property polygon, then profile clearing, burning, pasture conversion, charcoal kilns and embargoes. Goal: a matched, geolocated version of the list, plus a ranked risk map of unlisted properties, published the way [Amazon Mining Watch](https://amazonminingwatch.org/) publishes its illegal-mining layer. Verifier: a time split, in which a model built on older lists is scored on the employers added in later updates.

### E11 Identify uncaptioned photographs in library collections

Thousands of early-twentieth-century news photographs in the Library of Congress have no caption, and many of the same pictures were printed with full captions in newspapers the Library has also digitised. The [Bain News Service collection](https://www.loc.gov/pictures/collection/ggbain/) holds about 40,000 glass negatives, mostly 1900 to the 1920s; the Library posts them to its [Flickr Commons photostream](https://www.flickr.com/photos/library_of_congress/) and has corrected more than 500 records from commenters' identifications, and other [Flickr Commons](https://www.flickr.com/commons) members have similar backlogs. Start by image-matching each uncaptioned negative against page images in [Chronicling America](https://www.loc.gov/collections/chronicling-america/) and taking the printed caption, falling back on dating from vehicles, signage and shadows. Goal: date, place and named people for each uncaptioned Bain image, with the newspaper page cited as evidence. Verifier: images the Flickr crowd has already solved (records citing "Source: Flickr Commons project") serve as held-out answers.

### E12 Complete the landslide catalogue where news coverage is thin

Landslide hazard models are trained on catalogues built from English-language news, so they are thinnest where the reporting is thin rather than where the landslides are, and a satellite catalogue would show how much is missing. NASA's [Global Landslide Catalog](https://gpm.nasa.gov/landslides/) is compiled from news reports since 2007; Sentinel-2 images every land surface at 10 m every five days, free from the [Copernicus Data Space](https://dataspace.copernicus.eu/), and a fresh landslide shows as sudden bare ground on a vegetated slope. Start with one heavy-rain or earthquake event in Central Africa, New Guinea or the Andes, run before/after change detection, and output dated landslide polygons. Goal: new events and a completeness estimate for the news catalogue in those regions. Verifier: held-out mapped inventories, namely the [BGS National Landslide Database](https://www.bgs.ac.uk/datasets/national-landslide-database/), Italy's [IFFI](https://www.progettoiffi.isprambiente.it/cartografia-on-line/), the [USGS US Landslide Inventory](https://www.usgs.gov/tools/us-landslide-inventory-and-susceptibility-map), and post-event inventories such as the ~25,000 landslides mapped after the 2015 Gorkha earthquake.

### E13 Validated shoreline-change rates for every coastal settlement

Every coastal council and insurer wants one number, how fast this town's shoreline is moving and with what error bar, and nobody publishes it validated, settlement by settlement. Global transect rates exist from the [Deltares Shoreline Monitor](https://shorelinemonitor.deltares.nl/), and tide-corrected annual shorelines for two continents from [DEA Coastlines](https://www.dea.ga.gov.au/products/dea-coastlines) and [Digital Earth Africa Coastlines](https://docs.digitalearthafrica.org/en/latest/data_specs/Coastlines_specs.html). Start with [CoastSat](https://github.com/kvos/CoastSat): install it, authenticate to Google Earth Engine, draw a polygon, and it extracts shorelines from Landsat and Sentinel-2 since 1984 with tidal correction, while [SDS_Benchmark](https://github.com/kvos/SDS_Benchmark) gives the validation protocol; then run it for every coastal settlement above a population threshold. Goal: an erosion or accretion rate with confidence interval per settlement, flagged where tide or wave corrections are inadequate. Verifier: long-term surveyed beaches, namely [Narrabeen](http://narrabeen.wrl.unsw.edu.au/), Duck (North Carolina) and Truc Vert (France).

### E14a Detect looting pits at Middle Eastern and North African archaeological sites

Sub-metre imagery is the gate: it is free only after disasters or under licence. Looting of Syrian and Iraqi sites after 2011 was measured by analysts counting pits by hand, and a detector would give a dated looting index for every site with imagery. The [EAMENA database](https://database.eamena.org/) records sites across the Middle East and North Africa with condition assessments; pits a metre or two across are invisible at Sentinel-2's 10 m, so imagery comes from the [Vantor (formerly Maxar) Open Data Program](https://vantor.com/company/open-data-program/) or licensed archives, with a free 1960s–70s baseline in CORONA and KH-9 frames on [EarthExplorer](https://earthexplorer.usgs.gov/) under "Declassified Data". Start by training a pit detector on published hand counts, then run it on every high-resolution time series you can legally obtain for EAMENA sites. Goal: a dated looting index for each covered site. Verifier: EAMENA condition assessments that record looting, held out.

### E14b Match auction lots against stolen-art databases

Interpol's register needs a free registered account, and every register has terms of use to respect. Stolen and looted objects resurface at auction, often years later and in another country, and matching is still done by eye, lot by lot. The registers are Interpol's [Stolen Works of Art Database](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/Stolen-Works-of-Art-Database) (or its [ID-Art app](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/ID-Art-mobile-app)), the Carabinieri's [Leonardo database](https://tpcweb.carabinieri.it/SitoPubblico/), and the FBI's [National Stolen Art File](https://www.fbi.gov/investigate/violent-crime/art-theft/national-stolen-art-file); auction catalogues are public. Start by collecting past cases where a stolen object was spotted at auction, then image-match lot photographs against the registers and queue candidates with a similarity score for a human to check. Goal: a continuous feed of candidate matches between current lots and registered stolen objects. Verifier: the replayed past recoveries, which the matcher should find from the catalogue photographs alone.

### E15 Triage iNaturalist's Unknown observations for human identifiers

iNaturalist's millions of observations with no identification are records no specialist has seen, including first sightings of invasive species, and routing them to the right human is the job, because iNaturalist's [machine-generated content rules](https://www.inaturalist.org/pages/machine_generated_content) make automated identifications a suspendable offence and an agent must not vote. The site's own computer vision already suggests names, but research grade needs two human identifiers. Start by pulling [Unknown observations](https://www.inaturalist.org/observations?iconic_taxa=unknown) through the [API](https://api.inaturalist.org/v1/docs/), classify them, publish per-taxon queues for specialists, and flag candidate first regional records of invasives, checked against [EASIN](https://easin.jrc.ec.europa.eu/) and the [Global Invasive Species Database](http://www.iucngisd.org/gisd/), for a human to confirm and report. Goal: per-taxon identifier queues and a short list of candidate first records. Verifier: the share of queued observations that humans later confirm at the suggested taxon, and whether flagged invasives are confirmed as new regional records.

### E16 Measure insect emergences from weather radar

Stepanian et al. used US weather radar to show that burrowing-mayfly emergences on the Upper Mississippi and western Lake Erie more than halved between 2012 and 2019 ([PNAS 2020](https://doi.org/10.1073/pnas.1913598117)); nobody has run the same count for every major emergence the radar network can see. The NEXRAD archive is free on [AWS](https://registry.opendata.aws/noaa-nexrad/) back to 1991, but insects separate reliably from birds and rain only since the dual-polarisation upgrade finished in 2013, and turning general nocturnal insect echoes into biomass still lacks a calibration, so emergence events are the feasible product. Start by reproducing Stepanian's Mississippi and Lake Erie series from the per-scan files, then extend to every station near a large river or lake. Goal: an annual emergence-size series since 2013 for every major mayfly and caddisfly emergence visible to NEXRAD. Verifier: the reproduced Stepanian series, then state benthic sampling; a UK version would use Met Office radar at [CEDA](https://catalogue.ceda.ac.uk/uuid/82adec1f896af6169112d09cc1174499) checked against [Rothamsted Insect Survey](https://insectsurvey.com) traps, which the [BioDAR](https://biodar.uk) project has begun pairing.

### E17 Publish which species each DNA barcode marker cannot tell apart

Environmental-DNA surveys routinely report species that their barcode marker cannot physically tell apart, and a public table of which species collapse at each marker would let anyone check a study's claims. The reference libraries are public: [BOLD](https://boldsystems.org/) (COI, with downloadable data packages), [UNITE](https://unite.ut.ee/repository.php) (fungal ITS), [MIDORI2](https://www.reference-midori.info/) (curated mitochondrial references, including 12S) and [SILVA](https://www.arb-silva.de/) (16S and 18S rRNA). Start by freezing one library version, running in-silico PCR for a common primer set (COI Folmer and Leray, ITS2, 16S V4 or 12S MiFish), trimming to the amplicon, and grouping species whose amplicons are identical or within the usual clustering threshold; also count sequences with no Linnaean name ("dark taxa"). Goal: for each marker and library version, a published table of species that share barcodes. Verifier: the pipeline reruns from frozen library hashes and must recover the collapses already reported in the literature for particular groups.

### E18 Compare satellite-observed methane with facility self-reports

Satellites now see individual methane plumes, and setting them against what the same facilities report to EPA would name operators whose observed leaks alone exceed their reported annual total; Alvarez et al. ([Science 2018](https://doi.org/10.1126/science.aar7204)) found US oil-and-gas emissions about 60% above the inventory, much of it from abnormal events self-reporting misses. Point-source plumes are public from [Carbon Mapper](https://data.carbonmapper.org/) and NASA's [EMIT methane plume complexes](https://www.earthdata.nasa.gov/data/catalog/lpcloud-emitl2bch4plm-002), TROPOMI on Sentinel-5P ([Copernicus Data Space](https://dataspace.copernicus.eu/)) covers basins daily at about 5.5 × 7 km, and self-reports are in EPA's Greenhouse Gas Reporting Program, Subpart W, in its [data sets](https://www.epa.gov/ghgreporting/data-sets). Start by downloading the Carbon Mapper plume list and the Subpart W facility table, attribute each plume to a facility by location, and convert observed rates and observation frequency into a lower bound on annual emissions. Goal: a per-facility table of observed versus reported emissions, flagging facilities whose observed plumes alone exceed their report. Verifier: that contradiction is arithmetic from public data, and flagged facilities can be compared with UNEP's [Methane Alert and Response System](https://www.unep.org/topics/energy/methane/international-methane-emissions-observatory/methane-alert-and-response-system-mars) notifications and operator responses.

### E19 Match refinery flaring to air monitors and Texas emissions-event reports

Texas refineries and chemical plants must self-report unauthorised "emissions events", and satellites see every large flare at night, so the flares that coincide with fenceline pollution spikes and appear in no report are the story. The reports are in the state regulator TCEQ's public [Air Emission Event Report database](https://www2.tceq.texas.gov/oce/eer/); [VIIRS Nightfire](https://eogdata.mines.edu/products/vnf/) detects flares nightly with temperature and radiant heat since 2012; pollution readings come from TCEQ monitors in [TAMIS](https://www17.tceq.texas.gov/tamis/), refinery benzene sampling in EPA's [fenceline monitoring dashboard](https://awsedap.epa.gov/public/extensions/Fenceline_Monitoring/welcome.html) (quarterly since 2019), and low-cost sensors via [OpenAQ](https://openaq.org). Start with one refinery cluster, such as the Houston Ship Channel: assign each VIIRS flare to a facility, look for concurrent downwind monitor spikes, and search for a matching event report. Goal: a per-facility tally of flaring events, whether monitors spiked, and whether each was self-reported. Verifier: events that do appear in the TCEQ database confirm the pipeline, and the [Environmental Integrity Project](https://environmentalintegrity.org/)'s reports on Texas emission events give known cases to reproduce.

### E20 Find timber laundering in Brazil's transport permits

Brancalion et al. [showed](https://www.science.org/doi/10.1126/sciadv.aat1192) that Amazon logging permits claim implausible volumes of high-value species (over 4 m³/ha of ipê against 0.7 in inventory plots), creating paper credits that launder illegally cut timber; following those credits through every transport permit would name the exporters who use them. IBAMA publishes every DOF timber transport document since 2007 ([open data](https://dadosabertos.ibama.gov.br/dataset/dof-transportes-de-produtos-florestais), a 5.7 GB zipped CSV) with origin, species, volume and destination, but transports within Pará, Mato Grosso and Minas Gerais run on state systems and are missing, so only their interstate flows appear. Start by comparing each authorisation's claimed species volumes with forest-inventory expectations and with canopy disturbance in [Global Forest Watch](https://www.globalforestwatch.org/map/), then follow the credits through the DOF chain to exporters, with [Trase](https://www.trase.earth) linking exports to municipalities. Goal: a ranked list of management plans and exporters whose shipped volume exceeds what their permitted area can plausibly yield. Verifier: IBAMA enforcement held out by date, namely [embargoed areas](https://servicos.ibama.gov.br/ctf/publico/areasembargadas/ConsultaPublicaAreasEmbargadas.php) and infraction notices issued after the analysis window.

## F Other worlds: more images than eyes

Planetary missions return far more images than their teams can inspect, and almost all of it is public in NASA's [Planetary Data System](https://pds.nasa.gov) or ESA's [Planetary Science Archive](https://psa.esa.int/psa/). These are the change-detection and cataloguing jobs where a human with an agent could finish what hand searches started.

### F1a Catalogue every new impact crater on Mars

The first complete census of craters that formed on Mars while we watched would give the present-day impact rate, which calibrates the crater-count ages of every surface in the Solar System. The Mars Reconnaissance Orbiter's <abbr title="Context Camera">CTX</abbr> has taken more than 112,000 images at 6 m per pixel, many overlapping in time: find repeat pairs by footprint and date in [ODE](https://ode.rsl.wustl.edu/mars/), download them from the [PDS Imaging Node MRO volumes](https://pds-imaging.jpl.nasa.gov/volumes/mro.html), and use the [Murray Lab](https://murray-lab.caltech.edu/CTX/) global mosaic as a base map. [Daubar et al. 2022](https://doi.org/10.1029/2021JE007145) list 1,203 dated new impacts, and a JPL classifier run over single frames ([Wagstaff et al. 2022](https://arxiv.org/abs/2207.05679)) found 69 more in only its top 1,000 candidates, so the archive clearly holds more. Start by co-registering and differencing every CTX pair over one small region that contains Daubar craters. Goal: a dated, bias-corrected catalogue from every overlapping CTX pair, an impact rate by size, and a cross-match to InSight marsquakes in the [Marsquake Service catalogue](https://doi.org/10.12686/a19) as [Posiolova et al. 2022](https://doi.org/10.1126/science.abq7704) did for two large impacts. Verifier: the pipeline must recover Daubar's list, and each new candidate must show up in <abbr title="High Resolution Imaging Science Experiment">HiRISE</abbr> images, existing ones in the [HiRISE catalogue](https://www.uahirise.org/catalog/) or new ones requested through [HiWish](https://www.uahirise.org/hiwish/).

### F1b Map active surface change on Mars from HiRISE repeat pairs

Nobody has a planet-wide map of where Mars is changing today, from gully flows, slope streaks and recurring slope lineae to migrating dunes and spring avalanches off the polar scarps, and such a map would show how much water, CO₂ frost and wind still shape the surface. <abbr title="High Resolution Imaging Science Experiment">HiRISE</abbr> has taken some 80,000 images at 25–50 cm per pixel since 2006, thousands of them repeat looks at the same sites; browse them in the [HiRISE catalogue](https://www.uahirise.org/catalog/), find overlapping pairs by footprint in [ODE](https://ode.rsl.wustl.edu/mars/), and download from the [HiRISE PDS archive](https://hirise-pds.lpl.arizona.edu/PDS/). Published studies cover chosen sites one process at a time, and [Planet Four](https://www.zooniverse.org/projects/mschwamb/planet-four) volunteers map only the seasonal CO₂-jet fans near the south pole. Goal: every HiRISE repeat pair co-registered, with a classified change map (slope streak, gully, dune, avalanche, frost) and each change dated between its two images. Verifier: sites the map predicts are still active, submitted through [HiWish](https://www.uahirise.org/hiwish/), which the HiRISE team honours, show the change continuing in new images.

### F1c Extend the Mars dust-storm database to the present

Nobody can yet forecast a Martian dust storm, the main hazard for landers and solar-powered rovers, and the uniform hand-drawn storm record that forecast work relies on stops around 2015. The <abbr title="Mars Color Imager">MARCI</abbr> camera has mapped the whole planet daily since 2006 (images in the [PDS Imaging Node MRO volumes](https://pds-imaging.jpl.nasa.gov/volumes/mro.html); human-written summaries in the [MSSS weekly weather reports](https://www.msss.com/msss_images/subject/weather_reports.html)). The [Mars Dust Activity Database](https://doi.org/10.7910/DVN/F8R2JX) (Battalio and Wang 2021) outlines every storm by hand for Mars Years 24–32, roughly 1999–2015; start by training a segmenter on its outlines against the matching MARCI daily maps. Goal: an automated detector that extends the database through Mars Year 38 with the same fields (outline, area, duration, sol). Verifier: over the Mars Years where MARCI overlaps the database it must reproduce the hand-drawn outlines, and its storm onsets must match dust-opacity rises in Mars Climate Sounder retrievals.

### F2a Find the meteorites in Mars rover images

Every iron meteorite found on Mars so far was spotted by chance, so a systematic search of the rover archives is likely to add names to a short list; each one records how fast rocks weather on Mars and samples asteroids different from those that reach Earth. Curiosity and Perseverance have returned well over a million raw frames, public within days on the [Curiosity raw images](https://mars.nasa.gov/msl/multimedia/raw-images/) and [Perseverance raw images](https://mars.nasa.gov/mars2020/multimedia/raw-images/) pages, with sol-by-sol context in the [Analyst's Notebook](https://an.rsl.wustl.edu/). The known finds (Lebanon, Egg Rock and Cacao for Curiosity; Phippsaksla, Perseverance's first, in 2025) are the training set: shiny, sculpted, dark metallic rocks. Goal: a candidate list across both missions, by sol and frame, with a confidence score. Verifier: where the team fired its laser at a candidate, <abbr title="laser-induced breakdown spectroscopy">LIBS</abbr> spectra in the PDS Geosciences Node ([ChemCam](https://pds-geosciences.wustl.edu/missions/msl/chemcam.htm), [SuperCam](https://pds-geosciences.wustl.edu/missions/mars2020/supercam.htm)) show iron-nickel, as they did for Egg Rock and Phippsaksla; candidates the rover has driven past can only be ranked, not confirmed.

### F2b Catalogue dust devils caught by accident in rover images

The payoff here is a solid atmospheric dataset rather than a headline: dust devils lift much of the dust in Mars's air, their count by hour and season tests atmospheric models, and the rover teams survey them only in dedicated movie sequences. Many more are visible in the background of navigation and hazard-camera frames on the [Curiosity raw images](https://mars.nasa.gov/msl/multimedia/raw-images/) and [Perseverance raw images](https://mars.nasa.gov/mars2020/multimedia/raw-images/) pages. Goal: a catalogue of every dust devil in non-dedicated frames, with time, bearing and apparent size, merged with the published dedicated surveys. Verifier: the detector must recover the teams' dedicated-survey detections, and close passes must line up with pressure dips in the rovers' weather-station data in the PDS Atmospheres Node ([REMS](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/MARS/curiosity/rems.html) for Curiosity, [MEDA](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/PERSEVERANCE/meda.html) for Perseverance).

### F3a Find every new crater on the Moon from LROC before/after pairs

The Moon is being hit more often than models predicted: [Speyerer et al. 2016](https://doi.org/10.1038/nature19829) compared 14,092 <abbr title="Lunar Reconnaissance Orbiter Camera Narrow Angle Camera">LROC NAC</abbr> image pairs and found 222 new craters plus tens of thousands of fresh surface "splotches", and LRO has kept imaging, so the pool of overlapping pairs has grown many times since. The rate calibrates crater-count ages everywhere and sets the risk to long-lived lunar bases. NAC frames at 0.5 m per pixel are searchable in the [LROC data search](https://data.lroc.im-ldi.com/lroc/search) and viewable in [QuickMap](https://quickmap.lroc.im-ldi.com/); start by pulling pairs over one region at matching sun angles and dividing one by the other, the ratio-image method Speyerer used. Goal: every overlapping NAC pair to date searched, with a dated new-crater catalogue and an updated flux by size. Verifier: the pipeline must recover Speyerer's 222, and new candidates can be re-imaged through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F3b Search the Moon for pits and lava-tube skylights

A pit that opens into a lava tube is the leading candidate site for a sheltered lunar base and a window into untouched subsurface geology, and the known list was built largely by hand. The [LROC Pits Atlas](https://lroc.im-ldi.com/atlases/pits/list) holds 278 pits found by eye and by targeted searches of <abbr title="Narrow Angle Camera">NAC</abbr> images ([search the frames](https://data.lroc.im-ldi.com/lroc/search)); Chandrayaan-2's <abbr title="Orbiter High Resolution Camera">OHRC</abbr> adds 25 cm images via ISRO's [PRADAN portal](https://pradan.issdc.gov.in/ch2/), which needs free registration. Train on the atlas pits, then scan every frame. Goal: a systematic catalogue of pits the atlas misses across all NAC and OHRC frames, each flagged for signs of an overhang or tube opening. Verifier: a real pit shows consistent shadow depth across frames taken at different sun angles, which the NAC archive often already holds, and the rest can be requested through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F3c Inventory human artefacts and crash sites on the Moon

Luna 9, the first spacecraft to land softly on another world, has never been definitively located, and several deliberate impactors have never been found at all; in 2019 an amateur, Shanmuga Subramanian, found India's Vikram lander debris in public LROC images. A 2025 machine-learning search proposed [a Luna 9 candidate](https://www.nature.com/articles/s44453-025-00020-x), and the unfound crash sites are also small impact experiments with known mass and speed. The best images are LROC <abbr title="Narrow Angle Camera">NAC</abbr> frames ([LROC data search](https://data.lroc.im-ldi.com/lroc/search)) and Chandrayaan-2 <abbr title="Orbiter High Resolution Camera">OHRC</abbr> frames via [PRADAN](https://pradan.issdc.gov.in/ch2/) (free registration); Kaguya ([JAXA DARTS](https://darts.isas.jaxa.jp/planet/pdap/selene/)) and Chang'e ([China's lunar data release system](https://moon.bao.ac.cn/)) are coarser but add before/after coverage. Goal: a catalogue of every known artefact and a ranked candidate list for each missing one within its historical error ellipse. Verifier: the detector must find the known Apollo, Surveyor and Luna sites blind, and candidates can be re-imaged at low sun through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F4 Search all of Magellan's repeat radar coverage of Venus for change

Venus may be erupting today: [Herrick and Hensley 2023](https://doi.org/10.1126/science.abm7735) found a vent on Maat Mons that changed shape in eight months after hand-searching a few per cent of the area Magellan imaged twice, [Sulcanese et al. 2024](https://www.nature.com/articles/s41550-024-02272-1) reported new lava flows at Sif Mons and Niobe Planitia, and most of the overlap is still unsearched. The radar images from 1990–92 are downloadable from the [PDS Geosciences Node](https://pds-geosciences.wustl.edu/missions/magellan/index.htm), with global mosaics at [USGS Astrogeology](https://astrogeology.usgs.gov/search/map/venus_magellan_sar_fmap_left_look_global_mosaic_75m). The trap is geometry: [Bhiravarasu et al. 2026](https://www.nature.com/articles/s41550-026-02832-7) argue that differing look angles between cycles can mimic change, so start by reproducing the three published sites and modelling why they differ. Goal: 100% of the overlap between Magellan's three mapping cycles searched, with every candidate published as before/after chips and a geometry-corrected backscatter comparison. Verifier: each candidate must survive radar-geometry simulation and independent re-analysis by a second team; final confirmation waits for VERITAS and EnVision in the 2030s.

### F5 Build a MESSENGER baseline for BepiColombo to test Mercury for change

When BepiColombo starts science at Mercury in April 2027 (it enters orbit on 21 November 2026), the quickest headline it can deliver is whether Mercury's hollows, bright shallow pits thought to form as volatiles escape from the rock, have grown since 2015, but only if a baseline is ready to diff against. MESSENGER's <abbr title="Mercury Dual Imaging System">MDIS</abbr> took about 300,000 images from 2011 to 2015 ([PDS Imaging Node volumes](https://pds-imaging.jpl.nasa.gov/volumes/mess.html), browsable in [Mercury QuickMap](https://mercury.quickmap.io/)), and the hollows themselves are catalogued: [Bickel et al. 2025](https://doi.org/10.1029/2024JH000431) mapped up to 19,110 with a neural network and released the list, though southern coverage is sparse. Goal: for every catalogued hollow, and for terrain likely to show new impact craters, the best MESSENGER image chip plus a rendering under BepiColombo's planned lighting, so later images can be diffed automatically. Verifier: BepiColombo imaging from 2027, which will show which hollows grew and which craters are new; until then the payoff is readiness, not a result.

### F6a Track Saturn's ring propellers across Cassini's 13 years

Saturn's ring propellers are the closest thing we can watch to planets forming in a disc, and whether their moonlets migrate is an open question the Cassini archive can answer. A propeller is a moonlet 100 m to a few km across embedded in the A ring, too small to see directly, that clears a pair of short gaps shaped like an aircraft propeller. [Tiscareno et al. 2010](https://doi.org/10.1088/2041-8205/718/2/L92) showed that the dozen largest drift from simple orbits, possibly migrating through the ring, but of the roughly 150 small propellers found in Cassini images only a handful have been followed beyond a single sighting. Cassini Imaging Science Subsystem ring images are searchable in [OPUS](https://opus.pds-rings.seti.org/) at the [Ring-Moon Systems Node](https://pds-rings.seti.org/); start by recovering the large named propellers in frames that cover their predicted longitudes. Goal: a mission-long ephemeris for every propeller seen more than once, with measured migration or libration. Verifier: fit on early images, then predict positions in held-out later frames.

### F6b Build a full-mission light curve of the Enceladus plume

Enceladus's plume is its subsurface ocean venting into space, and one light curve built from every Cassini observation would show how tides open and close the fissures. [Hedman et al. 2013](https://doi.org/10.1038/nature12371) found the plume several times brighter near the far point of its 33-hour orbit using some VIMS spectra, but nobody has combined every Imaging Science Subsystem and VIMS plume observation from 2005 to 2017 into one geometry-corrected series. Both instruments' data are searchable in [OPUS](https://opus.pds-rings.seti.org/) at the [Ring-Moon Systems Node](https://pds-rings.seti.org/). Goal: a plume brightness time series against orbital phase and year, with individual jets separated where resolution allows. Verifier: the series must reproduce Hedman's VIMS modulation where they overlap, and a phase curve fitted on some years must predict the rest.

### F6c Search Cassini's Titan radar swaths for change in its lakes and seas

Titan's methane seas are the only surface liquid known beyond Earth, and a transient "magic island" in Ligeia Mare (Hofgartner et al. 2014) showed they change; a systematic search of every repeat radar swath would say how often and where. Cassini's RADAR imaged the northern seas repeatedly from 2004 to 2017 (swath images in the [PDS Imaging Node Cassini RADAR volumes](https://pds-imaging.jpl.nasa.gov/volumes/radar.html)); hand comparisons found the Ligeia Mare features and claimed, disputed shoreline retreat at Ontario Lacus. Goal: every repeat swath over lakes and seas co-registered, with a dated catalogue of shoreline shifts and transient features. Verifier: no spacecraft will re-image the seas before the 2030s (Dragonfly lands far from them), so the check is internal: a claimed change must persist across more than one later swath and survive simulations of the differing viewing geometry and speckle noise.

### F7a Measure Jupiter's winds from JunoCam image pairs

Juno is the only spacecraft seeing Jupiter's poles and small storms up close, and its public images have mostly become pictures, not the wind fields scientists want. JunoCam has returned raw images from each close pass since 2016 on the [Mission Juno processing page](https://www.missionjuno.swri.edu/junocam/processing) (also in the [PDS Imaging Node Juno volumes](https://pds-imaging.jpl.nasa.gov/volumes/juno.html)); amateurs have made most of the processed images, but frames of the same clouds minutes apart have rarely been turned into cloud-tracked winds, and Juno's funding beyond 2026 is uncertain. Goal: wind-vector maps from every close pass, with storm tracks followed across passes. Verifier: at overlapping latitudes the winds must agree with the Hubble <abbr title="Outer Planet Atmospheres Legacy">OPAL</abbr> [annual wind fields](https://archive.stsci.edu/hlsp/opal).

### F7b Catalogue Io's volcanic changes in the Galileo archive

Io is the most volcanically active body in the Solar System, and 45 years of spacecraft images, from Voyager in 1979 through Galileo to Juno's 2023–24 flybys, have never been put on one footing to show where and how often it erupts, which tests models of how tidal heat escapes. Galileo's Solid State Imager took Io images from 1996 to 2003 ([PDS Imaging Node Galileo volumes](https://pds-imaging.jpl.nasa.gov/volumes/galileo.html)); [Geissler et al. 2004](https://doi.org/10.1016/j.icarus.2003.09.024) catalogued the surface changes by eye, but the frames have never been photometrically co-registered as a whole. Goal: a dated change catalogue (new plume deposits, lava flows, darkened patera floors) across Voyager, Galileo and Juno. Verifier: the pipeline must recover Geissler's changes, and every change it says persisted after 2003 must appear in the JunoCam Io images on the [Mission Juno processing page](https://www.missionjuno.swri.edu/junocam/processing).

### F8a Catalogue surface changes on comet 67P from Rosetta images

Rosetta watched a comet erode through a whole perihelion, and only selected pairs of its images have been compared, so a complete change catalogue would be the first full record of how a comet loses mass and reshapes itself. The OSIRIS cameras took some 70,000 images of 67P/Churyumov-Gerasimenko in 2014–16, plus NavCam frames, all in the ESA Planetary Science Archive ([OSIRIS narrow-angle directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/OSINAC/), [Rosetta mission page](https://www.cosmos.esa.int/web/psa/rosetta), [image browser](https://imagearchives.esac.esa.int/index.php?/category/1)). [El-Maarry et al. 2017](https://doi.org/10.1126/science.aak9384) documented cliff collapses, boulders moving over 100 m and growing fractures from pre- and post-perihelion pairs. Goal: every OSIRIS image registered to the shape model, with a complete change catalogue and bracketing dates. Verifier: the pipeline must recover El-Maarry's changes, and each new change must appear in at least two independent image pairs taken at different viewing geometries.

### F8b Catalogue every outburst and jet on comet 67P

Rosetta caught 34 outbursts on comet 67P in the three months around perihelion ([Vincent et al. 2016](https://doi.org/10.1093/mnras/stw2409)), and the other 21 months of images have never had a uniform search; outbursts carry off a large share of a comet's mass and hint at what triggers activity, whether collapsing cliffs, trapped gas or sunrise heating. The OSIRIS images are in the ESA Planetary Science Archive ([OSIRIS narrow-angle directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/OSINAC/), [image browser](https://imagearchives.esac.esa.int/index.php?/category/1)), with NavCam in the [NavCam directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/NAVCAM/). Goal: a full-mission catalogue of outbursts and persistent jets, each with time, source location on the shape model and local time of day. Verifier: the detector must recover Vincent's 34, and new outbursts should coincide with spikes in the Rosetta gas and dust instruments' records, also in the [Rosetta archive](https://www.cosmos.esa.int/web/psa/rosetta).

### F9a Find the fainter sungrazing comets in SOHO's coronagraph archive

Volunteers have found more than 5,000 comets by eye in SOHO's coronagraph images, and a detector run over the whole archive could reach comets fainter than any human can see, the smallest fragments of the great comet whose break-up made the Kreutz sungrazer family. The volunteers work through the [Sungrazer Project](https://sungrazer.nrl.navy.mil/) on <abbr title="Large Angle and Spectrometric Coronagraph">LASCO</abbr> C2 and C3 images since 1996 (archive via [NRL LASCO](https://lasco-www.nrl.navy.mil/) and the [SOHO data archive](https://soho.nascom.nasa.gov/data/archive.html)). A NASA machine-learning challenge built on [3,000 labelled sequences](https://registry.opendata.aws/nasa-soho-comet-challenge-on-aws/) produced detectors that found [two missed comets](https://sungrazer.nrl.navy.mil/index.php/aiml-comet-discoveries) but were never run over the whole archive; start from the challenge data and its winning approaches. Goal: a detector run over every C2 and C3 frame since 1996, publishing candidates below the human detection limit with astrometry. Verifier: it must recover the known comets, and new ones must pass Sungrazer Project/NRL review and receive Minor Planet Center designations.

### F9b Extend the reconstructed solar magnetic field back before 1915

This extends a long record by about a decade rather than making news: magnetographs began in the 1970s, reconstructions of the Sun's magnetic field reach back to 1915, and earlier years would lengthen the baseline for how solar activity, and its effect on climate and space weather, has varied. [Chatzistergos et al. 2020](https://arxiv.org/abs/2005.01435) combined 43 Ca II K archives into a plage composite from 1892, and Virtanen, Pevtsov and colleagues reconstructed the field for 1915–85 by giving Ca II K plages polarities from the Mount Wilson sunspot drawings ([digitised 1917–2016 drawings at CDS](https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A+A/628/A103)). Before 1917 there are Ca II K plates but no polarity measurements: [Kodaikanal](https://kso.iiap.res.in/new/data) from 1904 and Meudon spectroheliograms in [BASS2000](https://bass2000.obspm.fr/search.php) from the 1900s. Goal: synoptic magnetic maps for about 1904–15, with polarities inferred from the hemispheric rules sunspots obey (Hale's and Joy's laws). Verifier: apply the same inference to 1917–85 and compare it with the polarity-measured reconstruction and, from 2010, with [SDO magnetograms](https://sdo.gsfc.nasa.gov/data/aiahmi/).

### F10a Search TESS light curves for single-transit and long-period planets

Planets on orbits of months to years, the ones most like our own, usually transit only once in a TESS sector, and the automated pipelines, built around repeated transits, largely miss them; volunteers on [Planet Hunters TESS](https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess) found about 90 community candidates by eye in the first two years alone. TESS light curves for millions of stars are at [MAST](https://archive.stsci.edu/missions-and-data/tess), with per-sector [bulk download scripts](https://archive.stsci.edu/tess/bulk_downloads.html), and [Lightkurve](https://lightkurve.github.io/lightkurve/) reads and detrends them in Python; start with one sector's 2-minute light curves and a search for lone dips. Goal: a vetted catalogue of single- and double-transit candidates across every TESS sector, with period limits and false-positive checks. Verifier: the search must recover the Planet Hunters TESS candidates, and new ones submitted to [ExoFOP](https://exofop.ipac.caltech.edu/tess/view_toi.php), where the official candidates are listed, must survive follow-up by the TESS Follow-up Observing Program.

### F10b Mine Hubble and JWST archives for serendipitous asteroids

[Burdanov et al. 2025](https://www.nature.com/articles/s41586-024-08480-z) found 138 decametre main-belt asteroids, far smaller than surveys can see at that distance, by shift-and-stack in a single JWST programme; every other long JWST stare and the whole Hubble archive can be searched the same way. These small asteroids supply most meteorites and are the population surveys cannot reach. The Hubble Asteroid Hunter ([Zooniverse project](https://www.zooniverse.org/projects/sandorkruk/hubble-asteroid-hunter), [Kruk et al. 2022](https://arxiv.org/abs/2202.00246)) found 1,701 trails in two cameras' images from 2002–21, 1,031 of them unmatched to known objects, and both archives are at [MAST](https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html). Goal: trail detection extended to every Hubble instrument and year, and shift-and-stack to every long JWST stare, with astrometry published. Verifier: detections of known objects must match Minor Planet Center ephemerides, and new ones become real when the [Minor Planet Center](https://minorplanetcenter.net/iau/mpc.html) links them into orbits.

### F10c Find strong gravitational lenses in Euclid's first big data release

Euclid's first large release, DR1-Foundation (about 1,900 deg²), is [due in November 2026](https://www.cosmos.esa.int/web/euclid/dr1-timeline), and an independent lens search run as soon as it lands would check, and add to, the consortium's own; strong lenses, where a foreground galaxy bends a background one into arcs or rings, weigh dark matter and measure cosmic expansion, and Euclid is expected to find over 100,000. The quick release ([Q1, March 2025](https://www.cosmos.esa.int/web/euclid/euclid-q1-data-release): 63 deg², 26 million galaxies) has been searched by the consortium and [Space Warps](https://www.zooniverse.org/projects/aprajita/space-warps-esa-euclid) volunteers, yielding about 500 candidates, so build and test on Q1 now. Both releases are served through the [ESA Euclid Science Archive](https://eas.esac.esa.int/sas/) and [IRSA](https://irsa.ipac.caltech.edu/Missions/euclid.html). Goal: an independent, graded lens-candidate catalogue for all of DR1. Verifier: the search must recover the graded Q1 candidates, and its top candidates must be confirmed by expert grading and by lens and source redshifts from overlapping spectroscopic surveys.

## G Oceans: lost lands, lost things, the deep

### G1a Map drowned Stone Age landscapes under the North Sea beyond Doggerland

Until about 8,000 years ago the southern North Sea was inhabited dry land, and every drowned river and lake mapped from oil-company seismic tells archaeologists where to core for Stone Age settlements; Gaffney's team has mapped 23,000 km² this way, only part of the basin. Released seismic for much of the rest is free: the UK [National Data Repository](https://ndr.nstauthority.co.uk) (free registration; SEG-Y packages under 20 GB download directly) and the Dutch [NLOG seismic archive](https://www.nlog.nl/en/seismic-data) (over 135 3D surveys, non-confidential ones downloadable from the map). Start by loading one released 3D survey outside the mapped area with an open SEG-Y reader such as [segyio](https://github.com/equinor/segyio) and slicing its shallowest part, where buried channels show as sinuous features. Goal: a GIS layer of palaeo-river valleys, lake basins and former shorelines from every released survey outside the mapped area, with ranked candidate site locations such as confluences, lake margins and estuary heads. Verifier: dated shallow cores and boreholes in [BGS GeoIndex Offshore](https://www.bgs.ac.uk/map-viewers/geoindex-offshore/), and whether known submerged finds such as the Brown Bank artefacts sit on predicted dry-land features.

### G1b Map drowned landscapes in the Norwegian North Sea sector

Starts with a small data budget: the Norwegian part of drowned Doggerland, running east to the Norwegian Trench at roughly 56–58°N, is the least-mapped part of the plain, and its seismic costs an administrative fee rather than nothing. Norway's repository, Diskos, holds over 1,300 released 3D surveys ([Sodir: Diskos seismic](https://www.sodir.no/en/diskos/seismic/)), which non-members order through the Diskos public portal ([access terms](https://www.sodir.no/en/facts/data-and-analyses/release-of-data/access-to-released-data/)). Goal: palaeo-river valleys, lake basins and shorelines mapped from the shallow section of released surveys in the southern Norwegian sector, joined across the median line to the river systems already mapped on the UK side, with candidate site locations. Verifier: dated cores from the adjacent UK sector in [BGS GeoIndex Offshore](https://www.bgs.ac.uk/map-viewers/geoindex-offshore/), and whether rivers traced independently on each side of the median line meet.

### G1c Map the drowned Gulf of Mexico coastal plain from released BOEM seismic

People lived on the northern Gulf coast at least 13,000 years ago, on a shoreline now far out on the continental shelf, and because US offshore seismic enters the public domain after 25 years that drowned coastal plain can be mapped for free. The data are in [BOEM's seismic data listing](https://www.data.boem.gov/Main/Seismic.aspx) and the USGS/BOEM [National Archive of Marine Seismic Surveys](https://walrus.wr.usgs.gov/namss/), mostly 2D lines that also cover the Alaskan Beaufort and Chukchi margins of Beringia. Goal: mapped palaeo-channels of the Sabine, Trinity, Calcasieu and Mississippi systems and the successive drowned shorelines across the Texas–Louisiana shelf, with ranked candidate site locations on terraces and channel margins. Verifier: hold out the cores and high-resolution seismic of BOEM's Sabine palaeovalley study ([OCS Study BOEM 2020-004](https://espis.boem.gov/final%20reports/BOEM_2020-004.pdf)) and check the predicted valleys and surfaces against them.

### G1d Map the drowned north-west shelf of Sahul

In 2020 divers found Aboriginal stone artefacts on the seabed at Cape Bruguieres and Flying Foam Passage in the Dampier Archipelago ([Benjamin et al. 2020](https://doi.org/10.1371/journal.pone.0233912)), the first confirmed submerged sites in Australia, on a north-west shelf that was a broad coastal plain at the last glacial maximum. Offshore petroleum survey data (navigation, processed seismic, reports) is downloadable from Geoscience Australia and NOPTA's [NOPIMS](https://www.ga.gov.au/nopims). Goal: palaeo-river valleys, freshwater sources and shorelines mapped across the Pilbara shelf, with ranked candidate site locations near former water sources. Verifier: the two known sites and their cores should fall on predicted dry-land features near water. Caveat: industry seismic resolves the top few tens of metres poorly and rarely covers water shallower than about 20 m, so the inshore strip needs sub-bottom profiler data.

### G2 Find stone structures in routine multibeam data

In 2024 a 971 m line of 1,673 stones set by hunters more than 10,000 years ago, the Blinkerwall, was spotted 21 m down in the Bay of Mecklenburg in multibeam from a student training cruise ([Geersen et al. 2024, PNAS](https://doi.org/10.1073/pnas.2312008121)), and the next one is probably already sitting in a survey nobody has screened. Metre-scale multibeam over former dry land keeps piling up from wind-farm, cable and charting work: the UK [Marine Data Exchange](https://www.marinedataexchange.co.uk/search) (offshore wind and cable surveys), [NOAA NCEI multibeam](https://www.ncei.noaa.gov/maps/bathymetry/), [EMODnet bathymetry](https://emodnet.ec.europa.eu/en/bathymetry), Norway's [MAREANO](https://www.mareano.no/en/maps-and-data/marine-geospatial-data) (fine grids restricted inside 12 nautical miles) and Germany's [BSH GeoSeaPortal](https://gdi.bsh.de/mapapps/resources/apps/bathymetrie/index.html?lang=en) (50 m grids only). Goal: a ranked list of stone alignments, enclosures, cairns and trap-like features in public surveys shallower than the roughly 120 m last-glacial lowstand, each with coordinates and a hillshade snapshot. Verifier: the detector must find the Blinkerwall and other published submerged structures without being told where they are, and the top candidates are checked by diver or ROV.

### G3a Rank search boxes for historic shipwrecks

Most recorded ship losses have never been matched to a wreck, and each unmatched one is a war grave, a heritage site or a pollution risk; a ranked search box for every loss, checked against unidentified targets already visible in public multibeam, would turn a historian's list into a surveyor's worklist. Loss records: the UKHO's global [Wrecks and Obstructions shapefile](https://datahub.admiralty.co.uk/portal/home/item.html?id=4dbf2ace22bf4f9785fb445d0593bc2c) (over 94,000 charted and uncharted items, free under the Open Government Licence), [NOAA's wrecks and obstructions database](https://nauticalcharts.noaa.gov/data/wrecks-and-obstructions.html) (about 20,000 US features), the Lloyd's Register Foundation [casualty returns](https://heritage.lrfoundation.org.uk/casualty-returns) (date and approximate place for every ocean-going loss since 1890) and the crowd-sourced [Wrecksite](https://www.wrecksite.eu). Goal: for each loss with no matched wreck, a probability box from last-known position, weather and a drift-and-sink model such as [OpenDrift](https://opendrift.github.io/), intersected with multibeam from [NOAA NCEI](https://www.ncei.noaa.gov/maps/bathymetry/) and [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry) to flag unidentified seabed targets inside it, giving a ranked target list. Verifier: run it blind on losses whose wrecks have since been found and identified; their true positions should land in the top-ranked boxes.

### G3b Turn Missing Air Crew Reports into search packets for aircraft lost at sea

Thousands of US airmen lost over water in the Second World War are still unaccounted for, and some of their aircraft probably lie inside seabed surveys that already exist and that anyone could review from a desk. The National Archives has digitised the [Missing Air Crew Reports](https://catalog.archives.gov/id/305256), over 16,000 case files from 1942–47, each a typed form giving aircraft type and serial, date, crew and a location marked as last known position, last sighting, last radio contact or seen to crash ([guide](https://www.archives.gov/research/military/ww2/missing-air-crew-reports)); the first job is extracting those fields from the scans. Goal: every over-water loss in a table with a search polygon, intersected with the footprints of public multibeam and side-scan surveys ([NOAA NCEI bathymetry viewer](https://www.ncei.noaa.gov/maps/bathymetry/), [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry)), listing the losses whose search area is already covered. Verifier: aircraft already found and identified by [Project Recover](https://www.projectrecover.org) and the US Defense POW/MIA Accounting Agency should fall inside the polygons their own reports generate.

### G3c Locate slave-ship wrecks from voyage records

Only a handful of slave-ship wrecks have been archaeologically identified, among them the São José Paquete de Africa off Cape Town, documented in 2015 by the [Slave Wrecks Project](https://nmaahc.si.edu/explore/initiatives/slave-wrecks-project), and each new identification is both a memorial and a historical document. The [SlaveVoyages Trans-Atlantic database](https://www.slavevoyages.org/voyage/database) records about 36,000 voyages, with an outcome field that flags ships wrecked and the place each voyage ended, so the first step is filtering it to wrecked voyages. Goal: every voyage recorded as wrecked, with its loss place resolved to coordinates from the database plus contemporary Lloyd's List and newspaper reports, ranked by positional precision into search boxes. Verifier: with the known wreck positions held out, the method should put the São José and other identified slave wrecks inside their predicted boxes.

### G4 Fishermen's snag records as a wreck finder

Starts with a data request: Historic England holds almost 7,000 trawler snag ("fastener") positions with no bulk download, and several of England's most important protected wrecks were first found where nets caught on the seabed. The records come from Kingfisher fishing charts of the 1960s to 1990s, folded into Historic England's national marine record ([Fishing for Heritage](https://historicengland.org.uk/whats-new/research/back-issues/fishing-for-heritage/)); today's Seafish products, the [Kingfisher Bulletin](https://kingfisherbulletin.org) and [KIS-ORCA](https://kis-orca.org), cover cables, wind farms and oil and gas infrastructure, not snags. Goal: every fastener matched against the UKHO's [Wrecks and Obstructions shapefile](https://datahub.admiralty.co.uk/portal/home/item.html?id=4dbf2ace22bf4f9785fb445d0593bc2c) and high-resolution multibeam from the [Marine Data Exchange](https://www.marinedataexchange.co.uk/search), leaving a list of fasteners with no charted wreck but a visible seabed target. Verifier: fasteners that match wrecks identified since the charts were printed test the matching, and the unmatched targets are checked by divers or the next survey.

### G5a Catalogue dumped munitions object by object

Hundreds of thousands of tonnes of conventional and chemical munitions were dumped in European seas after both world wars, charted only as rough polygons from old logs, and every wind farm and cable crossing them has to find each object first; a per-object map built from surveys developers have already made public would show where the munitions actually lie. Three public sources: dump-site polygons ([EMODnet dumped munitions layer](https://emodnet.ec.europa.eu/geonetwork/srv/api/records/661aa259-8ea9-49ae-a39d-49685057b013), [HELCOM Baltic chemical weapons dumpsites](https://metadata.helcom.fi/geonetwork/srv/api/records/b55b508d-3c40-484c-8c7f-38869a8df368)); about 900 reports a year of munitions caught in nets or washed ashore, in OSPAR's [ODIMS encounters map](https://odims.ospar.org/en/maps/map-encounters-with-munitions-1999-2021/); and the objects themselves, in the magnetometer, side-scan and multibeam surveys developers deposit on the UK [Marine Data Exchange](https://www.marinedataexchange.co.uk/search). Goal: for each dump site crossed by a public survey, a georeferenced catalogue of detected objects, showing how far the scatter extends beyond the charted polygon and how it compares with the encounter reports. Verifier: the unexploded-ordnance target lists in developers' survey reports, which record what divers or ROVs confirmed at each target.

### G5b Map the North-East Atlantic radioactive waste dumps

This is a digitisation job until the survey data is released, not a discovery. Between 1946 and 1993 European states dumped more than 200,000 drums of low-level radioactive waste in the North-East Atlantic, mostly deeper than 4,000 m, and in June–July 2025 the French-led <abbr title="Nuclear Ocean Dump Site Survey Monitoring">NODSSUM</abbr> mission mapped part of the main site with the AUV UlyX and found 3,355 drums ([Thünen Institute summary](https://www.thuenen.de/en/newsroom/news/detail/thuenen-scientists-on-a-search-for-clues-in-the-atlantic); [CNRS mission page](https://www.cnrs.fr/en/press/radioactive-waste-scientific-mission-sets-out-map-submerged-barrels-atlantic)); its sonar and imagery are not yet public. The official record of dates, countries, tonnages and activities is a PDF, the IAEA's [Inventory of radioactive waste disposals at sea](https://www-pub.iaea.org/MTCD/publications/PDF/te_1105_prn.pdf) (IAEA-TECDOC-1105). Goal: that inventory as a clean per-site table, with predicted drum densities and spread from the recorded dumping positions and years, ready to compare with NODSSUM's map. Verifier: NODSSUM's drum positions once released; until then only that the table reproduces the inventory's own totals.

### G7 Hindcast the MSC Zoe container spill

The promise here is a validated test case for container-drift models, not a discovery: since January 2026 SOLAS requires every container lost at sea to be reported ([World Shipping Council](https://www.worldshipping.org/containers-lost-at-sea) counted 1,478 lost in 2025), and any service predicting where they sink or beach must first reproduce a well-documented spill. On 1–2 January 2019 MSC Zoe lost 342 containers north of the Wadden Islands, and the [joint Dutch, German and Panamanian investigation report](https://onderzoeksraad.nl/wp-content/uploads/2023/11/internationale_toedrachtsrapport_msc_zoe.pdf) reconstructs six loss locations from the ship's track and a Rijkswaterstaat seabed survey and records where cargo washed up on Dutch and German islands. Archived currents are in [Copernicus Marine](https://data.marine.copernicus.eu/products) and winds in [ERA5](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels) (both free with registration). Goal: an [OpenDrift](https://opendrift.github.io/) hindcast from the reported loss positions that reproduces where the containers sank and where cargo beached. Verifier: the seabed positions and beaching records in the report, and whether the model run backwards from beach arrivals alone recovers the six loss locations.

### G8 Deep-sea nodule mining baseline

The Clarion-Clipperton Zone (CCZ) in the Pacific is where commercial nodule mining is most likely to start, and any damage will be judged against a baseline that rests mostly on contractors' own data; an independent public baseline is something regulators, contractors and campaigners could all check. Contractors' environmental data sits in the International Seabed Authority's [DeepData](https://data.isa.org.jm), with biological records mirrored to the [OBIS ISA node](https://obis.org/node/9d2d95be-32eb-4d81-8911-32cb8bc641c8); their geological data, including nodule abundance, is confidential. Independent sources are a [2023 synthesis](https://doi.org/10.1016/j.cub.2023.04.052) counting 5,578 recorded species, around 90% undescribed, and scaled, georeferenced seafloor photographs from SONNE cruise SO268 on [PANGAEA](https://doi.pangaea.de/10.1594/PANGAEA.957274). Goal: an updated CCZ species checklist from every DeepData and OBIS record reconciled against WoRMS, and a nodule-cover map from the public photographs. Verifier: the checklist against the 2023 synthesis and the [ISA–WoRMS CCZ checklist](https://www.isa.org.jm/news/isa-and-worms-release-a-species-checklist-for-the-clarion-clipperton-zone-in-celebration-of-the-one-year-anniversary-of-the-sustainable-seabed-knowledge-initiative/); nodule cover against box-core abundances published from the same cruises and the abundance model in ISA's [Technical Study 6](https://isa.org.jm/wp-content/uploads/2022/06/tstudy6.pdf).

### G9 Count litter in deep-sea video

Almost everything known about litter on the deep seafloor comes from one archive, JAMSTEC's [Deep-sea Debris Database](https://www.godac.jamstec.go.jp/dsdebris/e/index.html) of about 3,400 items from 5,000 submersible dives since 1983, while thousands of hours of NOAA ROV video sit unscreened for it. Okeanos Explorer's dives since 2010 are searchable and downloadable in the [Ocean Exploration Video Portal](https://www.ncei.noaa.gov/access/ocean-exploration/video/), but its annotators tag organisms and geology, not litter; labelled training images exist in [FathomNet](https://database.fathomnet.org/) and in the [TrashCan](https://arxiv.org/abs/2007.08097) debris set built from JAMSTEC's [J-EDI](https://www.godac.jamstec.go.jp/jedi/e/) footage. Goal: debris items per kilometre of seafloor track for every Okeanos ROV dive, by type and depth, published as a table with a frame grab per item. Verifier: a hand audit of a random sample of detections and of undetected stretches, and comparison with JAMSTEC's densities at similar depths and distances from land.

### G10 Deep-sea audio archives A

Continuous public hydrophone recordings now run to a decade and more, far more than anyone has listened to, and they hold call types nobody has matched to an animal alongside NOAA's own list of [unexplained sounds](https://archive.oceanexplorer.noaa.gov/explorations/sound01/background/seasounds/seasounds.html). [MBARI](https://www.mbari.org)'s deep hydrophone off central California has recorded almost continuously since July 2015 and is on [AWS Open Data](https://registry.opendata.aws/pacific-sound/) with no account needed, as 256 kHz originals and decimated 16 kHz and 2 kHz sets; [NOAA](https://www.noaa.gov)'s [passive acoustic archive](https://www.ncei.noaa.gov/products/passive-acoustic-data) and [ONC hydrophones](https://data.oceannetworks.ca) add other sites. Start with the 2 kHz MBARI set, which is small enough to handle and holds the baleen-whale band, and cluster recurring tonal calls. Goal: a catalogue of every recurring call type in the MBARI record, each labelled as a known species, a ship or unidentified, with daily detection counts and example clips. Verifier: a hand-labelled random sample for precision, and the known-species series must reproduce the song seasonality MBARI has published for humpback and blue whales at the same hydrophone; unidentified types that track sightings in [OBIS](https://obis.org) near the hydrophone become candidate attributions.

### G11 Dark fibre as a whale and ship sensor

Every seafloor telecom cable could be a whale and ship detector tens of kilometres long with no new hardware in the water, and what is missing is a detector that works on a cable it was not trained on. <abbr title="Distributed Acoustic Sensing">DAS</abbr> puts an interrogator at the shore end of an existing fibre and turns every few metres into a vibration sensor. Public seafloor datasets: the OOI Regional Cabled Array experiment off Oregon in November 2021, two cables of 65 and 95 km recording fin and blue whales and ships ([data](https://doi.org/10.58046/5J60-FJ89)); DAS4Whale, 120 km of cable out of Longyearbyen, Svalbard ([Zenodo](https://zenodo.org/records/5823343)); a labelled fin-whale set spanning Oregon, Svalbard and the Mediterranean ([Zenodo](https://zenodo.org/records/15008561)), the natural place to start; and [PubDAS](https://eartharxiv.org/repository/view/3574/), about 90 TB from eight experiments including seafloor cables, served over Globus. Goal: an open whale-call and ship detector trained on one cable and tested unchanged on the others, with published precision and recall. Verifier: the OOI hydrophones on the same Oregon cables ([OOI data portal](https://interactiveoceans.washington.edu/data-portal/)) for calls, and AIS tracks from [MarineCadastre](https://hub.marinecadastre.gov/pages/vesseltraffic) for ship passages.

## H Present-day hazards from historical records

### H1 WWII bomb craters → unexploded ordnance risk

German cities still evacuate whole districts when builders hit a live 1944 bomb, yet the map of where the duds probably lie is made privately, plot by plot, by firms such as [Luftbilddatenbank Dr. Carls](https://luftbilddatenbank.de/de/) (about 10 million Allied frames indexed), and never published; an open one would be a first. The raids are documented online: a target-level table of Allied bombing in [THOR on Kaggle](https://www.kaggle.com/datasets/usaf/world-war-ii), RAF squadron operations record books ([AIR 27](https://discovery.nationalarchives.gov.uk/details/r/C2082), downloadable per month), Bomber Command night raid reports ([AIR 14](https://discovery.nationalarchives.gov.uk/details/r/C2069)) and USAAF mission reports in NARA's [Combat Operations Reports](https://catalog.archives.gov/id/596339) (mostly paper and microfilm). [NCAP](https://www.ncap.org/) holds millions of RAF post-raid frames of Germany and captured Luftwaffe frames of Britain, and England's free 1 m LiDAR on the [Defra survey portal](https://environment.data.gov.uk/survey) shows craters that survive under woodland. Start with one city: pull its raids from THOR and the matching NCAP frames, and map craters and bomb sticks against the tonnage dropped. Goal: an open, georeferenced crater and stick layer for named cities, each tied to its raid record, with an estimated count of <abbr title="unexploded ordnance">UXO</abbr> per block. Verifier: reported bomb finds, and for Britain the Home Office [bomb census maps](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/bomb-census-survey-records-1940-1945/) and [Zetica's free UXO risk maps](https://zeticauxo.com/guidance/risk-maps/).

### H2 Map WWI shelling density on the Western Front

A century on, Belgium's bomb-disposal service DOVO still destroys [over 200 tonnes of shells a year](https://www.mil.be/en/our-missions/explosive-ordnance-disposal/) and French deminers answered nearly 17,000 call-outs in 2023 ([Sénat report](https://www.senat.fr/rap/r23-718/r23-718_mono.html)), mostly from ploughed fields for which nobody has a map of how hard each was shelled. In forest it is done: at Verdun, [De Matos-Machado et al.](https://doi.org/10.1002/esp.4586) mapped over a million war landforms in 100 km² from LiDAR, but ploughing erases craters. Farmland needs wartime evidence: [IWM's First World War aerial photographs](https://www.iwm.org.uk/collections/item/object/205014033) (about 150,000 prints, largely undigitised), georeferenced trench maps at [NLS](https://maps.nls.uk/ww1/trenches/), and [McMaster's](https://library.mcmaster.ca/wwi-trench-maps-aerial-photographs) 1,500 trench maps and aerial photos as 600 dpi TIFFs, calibrated against crater counts in surviving woodland from France's free [LiDAR HD](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_NUAGES-DE-POINTS-LIDAR-HD) and Flanders' [DHMV II](https://remotesensing.vlaanderen.be/apps/openlidar/) point clouds. Goal: a field-resolution shell-density map for one sector, such as the Somme or the Ypres Salient. Verifier: shell pickups by commune and known clearance sites; deminers publish only national totals, so this needs a data request to Sécurité civile or DOVO.

### H3 Prioritise Laos villages for cluster-bomb clearance

Of some 270 million cluster submunitions the US dropped on Laos in 1964–73, up to 30% failed to explode ([Legacies of War](https://www.legaciesofwar.org/)), and they still kill farmers; a map telling teams such as [MAG](https://www.maginternational.org/what-we-do/where-we-work/laos/) which villages to clear first would save lives directly. The US Air Force's THOR database of over 4 million Vietnam-era sorties, with target coordinates and ordnance, is on [Kaggle](https://www.kaggle.com/datasets/usaf/vietnam-war-bombing-operations); filter it to one province and plot the cluster-munition strikes. Crater detection in imagery works: [Lin et al.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229826) found craters in commercial satellite imagery of 100 km² of Cambodia and estimated that 44–50% of the bombs there had not exploded. Clearance to date sits in the non-public database of the Lao [National Regulatory Authority](http://www.nra.gov.la/); [Mine Action Review](https://www.mineactionreview.org/country/lao-peoples-democratic-republic) and the [Landmine and Cluster Munition Monitor](https://the-monitor.org/country-profile/lao-pdr/impact) publish national totals only. Goal: a village-level priority list for one province combining THOR strike density, crater counts and known clearance. Verifier: items found per hectare in later clearance, which needs a data-sharing agreement with the NRA or an operator.

### H4 Predict where the unmapped minefields are

Most mine-clearance money goes on suspected land that turns out to be clean, so a model that says which suspected areas really hold mines would stretch every clearance budget from Bosnia to Ukraine; [RELand](https://arxiv.org/abs/2311.03115) has piloted one in Colombia. Bosnia is the workable open pilot: BHMAC's mine-suspected areas are published as [PDF map sheets on the EUFOR site](https://www.euforbih.org/index.php/en/bih-minefield-maps), which must first be vectorised, and the 1992–95 war is covered event by event in [UCDP GED](https://ucdp.uu.se/downloads/); [ACLED](https://acleddata.com/conflict-data) adds event data for recent wars such as Ukraine. National <abbr title="Information Management System for Mine Action">IMSMA</abbr> databases (the standard is maintained by [GICHD](https://www.gichd.org/what-we-do/mine-action/information-management-imsma/)) are mostly not public, but [Mine Action Review](https://www.mineactionreview.org/country/bosnia-and-herzegovina) and [Landmine Monitor](https://the-monitor.org/) publish annual contamination and clearance figures. Goal: a predicted-hazard score for every suspected polygon in Bosnia from conflict events, front lines and terrain. Verifier: clearance outcomes, that is, which suspected areas actually yielded mines when BHMAC or operators such as [HALO Trust](https://www.halotrust.org/) cleared them.

### H5 Predict contaminated land from old fire-insurance maps

An open, city-wide map of which parcels once held a gasworks, tannery, foundry or dry cleaner would flag coal tar, chromium, lead and solvents under homes that nobody has tested; commercial searches (EDR in the US, Groundsure and Landmark in the UK) sell this site by site, but no open layer exists. Fire-insurance maps recorded the use of every building: the Library of Congress has over 50,000 digitised [Sanborn map items](https://www.loc.gov/collections/sanborn-maps/) with a JSON API, NLS has [Goad plans of Scottish towns](https://maps.nls.uk/towns/goad/), and old OS 25-inch sheets on [NLS](https://maps.nls.uk/) label gasworks and tanneries by name. Newark, New Jersey, is a good pilot: pull its Sanborn sheets through the API and read off building uses, because the state publishes its [Known Contaminated Sites List](https://gisdata-njdep.opendata.arcgis.com/datasets/b167bb2ae09c43f8ab9e954700be45d9) as open GIS to test against. Goal: a parcel-by-parcel list of predicted past industrial uses and the contaminants they imply. Verifier: overlap with that list, with EPA brownfield (ACRES) and Superfund sites from [Cleanups in My Community](https://www.epa.gov/cleanups/cleanups-my-community), and with site-investigation reports for flagged parcels.

### H6 Rank eroding coastal landfills by years to breach

When the sea cuts into an old landfill, decades of waste spill onto the beach, as at East Tilbury in Essex and Lynemouth in Northumberland, where the council began a £5m excavation in 2024; England has over 1,200 historic landfills in coastal areas at risk of flooding or erosion, mostly unlined ([Brand, Spencer, O'Shea and Lindsay 2018](https://doi.org/10.1002/wat2.1264)), and no public list says which goes next. Brand's team estimated that 122 could start eroding by 2055, but from a static overlay rather than measured retreat. The inputs are open: the Environment Agency's [Historic Landfill Sites](https://environment.data.gov.uk/dataset/7a955570-d465-11e4-a37c-f0def148f590) polygons, projected erosion zones from [NCERM 2024](https://environment.data.gov.uk/dataset/9fede91f-5acd-4fd2-9bd8-98153fa3c2ff), and shoreline retreat measured from free Landsat and Sentinel-2 imagery with [CoastSat](https://github.com/kvos/CoastSat). Goal: coastal landfills ranked by estimated years until the shoreline reaches the waste, each with its retreat rate and uncertainty. Verifier: landfills that have already breached should rank near the top when the model is run on data from before they breached.

### H7 Find unrecorded mine shafts on old maps

Forgotten mine shafts open under gardens and roads without warning; the Mining Remediation Authority (formerly the Coal Authority) handles 600–700 reported surface hazards a year, and its record of over 175,000 coal mine entries, built from plans deposited after 1872, is by its own [user guide](https://www.gov.uk/government/publications/coal-mining-data-mine-entries) missing many older ones. Victorian OS six-inch and 25-inch maps on [NLS](https://maps.nls.uk/) mark "Old Shaft", "Old Coal Pit" and "Air Shaft", and BGS's [mine plans catalogue](https://mine-plans.bgs.ac.uk/) indexes non-coal workings. Recorded entries can be viewed free in the Authority's [map viewer](https://datamine-cauk.hub.arcgis.com/) and over WMS, though bulk download needs a licence. Start with one coalfield: detect shaft labels on the georeferenced NLS sheets and compare them with the WMS layer. Goal: a list of shafts marked on historic maps more than a set distance (say 20 m) from any recorded entry. Verifier: collapses and ground investigations that find a shaft at a predicted point; the Authority sells its surface-hazard records site by site, so bulk checking needs its cooperation.

### H8 Find undocumented orphan oil and gas wells

Pennsylvania may have [300,000 to 700,000](https://www.edf.org/unearthing-pennsylvanias-legacy-orphan-and-abandoned-wells) old oil and gas wells, of which about 30,000 are documented; the rest can leak methane and let gas or brine into drinking water unseen, and the federal [orphaned wells programme](https://www.doi.gov/orphanedwells) can only fund plugging the ones states know about. Historic USGS topographic sheets in [topoView](https://ngmdb.usgs.gov/topoview/) mark wells with a symbol and historic aerial photos on [EarthExplorer](https://earthexplorer.usgs.gov/) show pads and tank scars; Berkeley Lab's [Ciulla et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC11656717/) trained a model on the topo maps and found 1,301 candidate wells in four counties of California and Oklahoma, so the method exists and the gap is coverage. The known baseline is the USGS [documented orphaned well dataset](https://www.sciencebase.gov/catalog/item/62ebd67bd34eacf539724c56) (about 118,000 wells in 27 states). Start by running the Ciulla approach on one Pennsylvania county's topo sheets. Goal: candidate coordinates for wells that appear on historic maps or photos but not in the DEP's [oil and gas well map](https://gis.dep.pa.gov/PaOilAndGasMapping/OilGasWellsStrayGasMap.html) or its [orphan and abandoned well list](http://cedatareporting.pa.gov/Reportserver/Pages/ReportViewer.aspx?/Public/DEP/OG/SSRS/Abandoned_Orphan_Web). Verifier: magnetometer surveys (drone or ground) and field visits at the candidate points.

### H9 Build evidence packs to record lost rights of way

The Ramblers' [Don't Lose Your Way](https://dontloseyourway.ramblers.org.uk) volunteers found over 49,000 miles of historic paths in England and Wales missing from the definitive maps, the legal record of public rights of way; each is saved only by a modification order application backed by documentary evidence, which takes a volunteer weeks to assemble. The evidence is archival: OS county series maps on [NLS](https://maps.nls.uk/), tithe maps (TNA series IR 29 and IR 30, [research guide](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/tithes/)), [enclosure awards](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/enclosure-awards/) and county record offices, checked against current definitive map data that [rowmaps](https://www.rowmaps.com/datasets/) gathers from the 149 authorities that publish it. Cheshire is the easiest start, because its tithe maps are free and georeferenced at [Cheshire Tithe Maps Online](https://maps.cheshireeast.gov.uk/tithemaps/). Goal: a complete, cited evidence pack for each missing path in one county, in the form the highway authority requires. Verifier: applications accepted and orders confirmed. The statutory cut-off for recording pre-1949 paths in England is 1 January 2031, but the government [announced in December 2024](https://defraenvironment.blog.gov.uk/2025/01/03/historic-rights-of-way-saved/) that it will repeal it; check whether it has before treating the date as a deadline.

### H10 Georeference historical flood extents to check flood models

In many towns the flood map that insurers and planners rely on is a model never checked against a real flood, yet old floods were reported as heights against named landmarks ("two feet above the bridge step"). The [Chronology of British Hydrological Events](https://cbhe.hydrology.org.uk/) collects centuries of such accounts, mostly not georeferenced, and newspapers add more ([Chronicling America](https://www.loc.gov/collections/chronicling-america/), free, US; [British Newspaper Archive](https://www.britishnewspaperarchive.co.uk/), subscription). For each account, extract the number, the unit and the landmark, locate the landmark and take its height from LiDAR (England's is free on the [Defra survey portal](https://environment.data.gov.uk/survey)); where the landmark cannot be found, record the level as unanchored and never invent a datum. Goal: georeferenced historic flood levels or extents for towns whose modelled map has never been checked. Verifier: overlap with the Environment Agency's [Recorded Flood Outlines](https://environment.data.gov.uk/dataset/8c75e700-d465-11e4-8b5b-f0def148f590) (surveyed events since 1946) in England and with USGS high-water marks in the [Flood Event Viewer](https://apps.usgs.gov/fev/) in the US, for events both cover.

### H11 Predict the material of "unknown" lead service lines

US water systems filed their first service-line inventories in October 2024 under the [revised Lead and Copper Rule](https://www.epa.gov/ground-water-and-drinking-water/revised-lead-and-copper-rule), and millions of lines went in as "lead status unknown"; each one is a hole to dig unless something can predict what is in it. EPA's [national service line inventory report](https://sdwis.epa.gov/ords/sfdw_pub/r/sfdw/sdwis_fed_reports_public/service-line-inventory) gives lead, galvanised and unknown counts for each system, states such as [Michigan](https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/lead-and-copper-rule/dsmi), [Illinois](https://epa.illinois.gov/topics/drinking-water/public-water-users/lead-service-line-information.html) and [New Jersey](https://dep.nj.gov/lead/map/) publish more, and systems serving over 50,000 people must post their address-level inventory online. [BlueConduit](https://blueconduit.com/) showed in Flint that house age, tax-assessor records, local plumbing codes and a sample of verified excavations predict material well enough to target digging. Start with one utility's address-level inventory joined to its county's assessor records. Goal: a predicted material, with a probability, for every "unknown" line in that utility. Verifier: the utility's later excavation and verification records, held out from training.

### H12 Predict lead paint building by building in New York City

The US rule of thumb is that any home built before 1978 may contain lead paint, which covers most of New York's housing and says nothing about which buildings actually do; a model that ranks them would tell inspectors and landlords where to look first. HPD publishes its [lead paint violations](https://data.cityofnewyork.us/Housing-Development/Recent-Lead-Paint-Violations/v574-pyre) with borough, block and lot, so they join directly to [PLUTO](https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page), which gives year built, building class and unit count for every tax lot; HUD's [American Healthy Homes Survey II](https://stacks.cdc.gov/view/cdc/113072) gives national lead-paint prevalence by construction era as a prior. Violations follow complaints and inspections, so the model must correct for where inspectors went, not just where they found paint. Goal: a per-building probability of a lead-paint hazard for every pre-1978 residential lot in one borough. Verifier: violations issued after the training period, held out. Asbestos is not a workable target here, because public building-level records barely exist; the New South Wales [loose-fill asbestos insulation register](https://www.nsw.gov.au/housing-and-construction/safety-home/loose-fill-asbestos-insulation/loose-fill-asbestos-insulation-register) covers one product only.

## I Side-channels: inferring things from data collected for something else

The pattern: an instrument built for X incidentally records Y.

### I1 Weather radar → meteorite falls

There are meteorites lying in US fields that weather radar watched fall and nobody has gone to pick up: Marc Fries's [2025 review](https://doi.org/10.1155/aa/3041760) counts 32 recovered radar falls and 20 probable falls never recovered, and a fresh fall is worth far more to science than a weathered desert find. Falling stones show up in radar during dark flight, after the fireball has gone out ([Fries & Fries 2010](https://doi.org/10.1111/j.1945-5100.2010.01115.x)); NASA ARES lists the known events on its [meteorite-falls page](https://ares.jsc.nasa.gov/meteorite-falls/events/). The full <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive, 1991 onward, is free on [AWS](https://registry.opendata.aws/noaa-nexrad/), and only the scans from the nearest radars in the minutes after each fireball are needed. Train a detector on known falls from the [Meteoritical Bulletin database](https://www.lpi.usra.edu/meteor/), then scan under every fireball in [NASA CNEOS](https://cneos.jpl.nasa.gov/fireballs/) that nobody searched; the [Global Fireball Observatory](https://gfo.rocks) and [AllSky7](https://allsky7.net) supply fireballs for Australia and Europe, where national radar archives are the analogue. Goal: published strewn-field maps, with predicted fragment masses, for every unrecovered fall found. Verifier: someone walks the field and finds stones.

### I2a Weather radar → bat colony counts

Mexican free-tailed bats eat thousands of tonnes of crop pests a night across Texas and the south-west, yet most roosts have been counted only a few times, while weather radar has recorded their emergence nightly since the 1990s. A colony leaving its cave at dusk shows on Doppler radar as an expanding ring, and the <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive on [AWS](https://registry.opendata.aws/noaa-nexrad/) holds every scan. The method is proven for a few Texas caves ([Frick et al. 2012](https://doi.org/10.1371/journal.pone.0042737); Stepanian and Wainwright's [Bracken Cave series](https://doi.org/10.1111/gcb.14051) back to 1995), so start by reproducing the Bracken series, then sweep every radar for rings; bird migration is already done nationally by [BirdCast](https://birdcast.info). Goal: nightly emergence-size and timing series back to the 1990s for every radar-visible roost in the US, each named and located. Verifier: published thermal-camera emergence counts at Bracken and other monitored caves.

### I2b Weather radar → wildfire smoke plume heights

How high a wildfire lofts its smoke decides whether it chokes the next valley or crosses a continent, and air-quality models mostly guess it; nobody has measured it for every large fire. Weather radar sees the ash and debris in a plume, and [Krishna et al. 2024](https://doi.org/10.1029/2023JD039926) showed radar-derived injection heights match airborne lidar on average, for a handful of fires. The <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive is free on [AWS](https://registry.opendata.aws/noaa-nexrad/), with dual-polarisation (which separates smoke from rain) on every radar since 2013; start by reproducing Krishna's fires. Goal: a daily plume-top catalogue for every large US wildfire since 2013. Verifier: satellite plume heights from the [MISR Plume Height Project](https://misr.jpl.nasa.gov/get-data/misr-plume-height-project-2/) for the fires both observed.

### I3 Mobile-phone tower links → rainfall

Every mobile network is a dense rain gauge in exactly the places, cities and the tropics, where real gauges are sparse, because rain weakens the microwave links between towers ([Overeem et al. 2013](https://doi.org/10.1073/pnas.1217961110)); what stops it being used is that operators rarely release the data. The main fully open set is [OpenMRG](https://doi.org/10.5281/zenodo.7107689) (364 links at 10-second resolution in Gothenburg, June–August 2015, with 11 gauges and a radar composite; described in [ESSD](https://doi.org/10.5194/essd-14-5411-2022)); the [OpenSense COST Action](https://opensenseaction.eu/zenodo-datasets/) lists a few more, and open processing code exists in [pycomlink](https://github.com/pycomlink/pycomlink). Goal: a benchmarked open pipeline (wet/dry classification, baseline, attenuation to rain rate, mapping) that beats published scores on OpenMRG, packaged with a data-sharing template so an operator can run it on its own network. Verifier: the gauges and radar shipped in the same dataset, scored on a held-out period.

### I4 Seismometers → city activity

Seismometers in cities record traffic, trains, factories and crowds as high-frequency noise, which fell by up to 50% worldwide in the 2020 lockdowns ([Lecocq et al. 2020](https://doi.org/10.1126/science.abd2438), code on [GitHub](https://github.com/ThomasLecocq/2020_Science_GlobalQuieting)); that makes them a free daily activity index for places where economic statistics are late or missing. Continuous waveforms from thousands of stations are open through the [EarthScope FDSN dataselect service](https://service.iris.edu/fdsnws/dataselect/1/) and the other [FDSN data centres](https://www.fdsn.org/webservices/), and the citizen [Raspberry Shake](https://data.raspberryshake.org/) network, many units in town-centre houses, has its own FDSN server. Compute daily 4–14 Hz noise per station with [MSNoise](https://www.msnoise.org/) or the Lecocq code, as far back as each station goes. Goal: a public daily activity index for every city with a usable station. Verifier: the [Google COVID-19 Community Mobility Reports](https://www.google.com/covid19/mobility/) for 2020–22.

### I5 GNSS → tsunamis in the ionosphere

JPL's [GUARDIAN](https://guardian.jpl.nasa.gov/) flagged the July 2025 Kamchatka tsunami 30 minutes before it reached Hawaii from ripples it made in the ionosphere above <abbr title="Global Navigation Satellite System">GNSS</abbr> stations ([paper](https://doi.org/10.1007/s11069-026-08151-4)), but there is no public benchmark on which to compare detection methods. Raw observations from thousands of permanent stations are open from [IGS](https://igs.org/data/) and [EarthScope](https://www.unavco.org/data/gps-gnss/data-access-methods/data-access-methods.html) (free registration), and <abbr title="total electron content">TEC</abbr> series are computed from them per satellite and station. The water-vapour signal in the same data is already published for more than 18,600 stations by the [Nevada Geodetic Laboratory](https://geodesy.unr.edu/gps_timeseries/README_trop2.txt), so this entry is about tsunamis only. Goal: a public benchmark of TEC series from every station in range of the major tsunamis since 2004 (Sumatra 2004, Chile 2010, Tohoku 2011, Hunga Tonga 2022, Kamchatka 2025), labelled with wave arrival, plus a baseline detector scored on lead time and false alarms. Verifier: arrival times at [DART buoys](https://www.ndbc.noaa.gov/dart/dart.shtml) and [tide gauges](https://www.ioc-sealevelmonitoring.org/).

### I6 Mains hum → dating and authenticating recordings

A faint hum from mains wiring wanders around 50 or 60 Hz in a pattern unique to each grid and each second, so matching a recording's hum against a logged reference dates it and exposes edits; UK police labs have used this in court for years, but it works only where a reference log exists, and for most of the world none does. Public logs: Great Britain at 1 s from [NESO](https://www.neso.energy/data-portal/system-frequency-data), the Nordic grid at 10 Hz from [Fingrid](https://data.fingrid.fi/en/datasets/339), Continental Europe at 1 s from 2012 on [Netztransparenz](https://www.netztransparenz.de/de-de/Regelenergie/Daten-Regelreserve/Sek%C3%BCndliche-Daten), and a one-off twelve-grid campaign by [Jumar et al.](https://arxiv.org/abs/2006.01771); North America's [FNET/GridEye](https://fnetpublic.utk.edu/) shows live maps but no public archive. Goal: an open matching tool benchmarked on the [ENF-WHU](https://github.com/ghua-ac/ENF-WHU-Dataset) recordings, plus a logger design (Jumar's used an ordinary socket) and the first months of public reference data for grids that lack one. Verifier: recordings with independently known timestamps, matched blind.

### I7a Ash layers → matching sediment and ice cores

If the same eruption's glass turns up in two cores, the dates of one transfer to the other, which is how lake, marine and ice records get aligned; nobody has systematically matched the thousands of published ash analyses against each other. Glass chemistry sits in [EarthChem](https://portal.earthchem.org/) and [Tephrabase](https://www.tephrabase.org/) in incompatible units, normalisations and naming conventions. Harmonise the oxide analyses with their analytical metadata, then cluster them into candidate correlations with probabilities. Goal: an open table of cross-core tephra correlations, each listing the analyses that support it. Verifier: established correlations of well-known marker layers (Vedde Ash, Campanian Ignimbrite) held out and recovered, and independent dates on newly matched layers.

### I7b Ice cores + chronicles → the unidentified 1808/09 eruption

An eruption about half Tambora's size cooled the planet in 1808/09, leaving sulphate in ice from both Greenland and Antarctica, and nobody knows which volcano it was; it may have been two ([Timmreck et al. 2021](https://cp.copernicus.org/articles/17/1455/2021/)). The 1831 mystery eruption was pinned on Zavaritskii caldera in the Kurils only in December 2024, by matching ice-core glass shards to deposits on the volcano ([Hutchison et al.](https://doi.org/10.1073/pnas.2416699122)). Inputs: the [eVolv2k](https://doi.org/10.1594/WDCC/eVolv2k_v2) ice-core sulphate reconstruction ([Toohey & Sigl 2017](https://doi.org/10.5194/essd-9-809-2017)), the [Global Volcanism Program](https://volcano.si.edu/) database of Holocene volcanoes, published glass analyses from the 1809 ice layer, historical reports of odd skies and ashfall, and satellite imagery of young calderas. Goal: a ranked list of candidate volcanoes with the evidence for each (hemisphere from the bipolar sulphate ratio, glass-chemistry match, undated young deposits, local records). Verifier: field sampling and dating of the top candidates, which needs volcanologists on site.

### I8a Tree rings → screening radiocarbon series for solar superstorms

A repeat of the solar storm of 774 CE would wreck satellites and power grids, and the odds rest on how many such Miyake events (one-year radiocarbon jumps in tree rings) there have been, a count that published data may already be able to raise. Annually resolved radiocarbon now covers long stretches: [Brehm et al. 2021](https://doi.org/10.1038/s41561-020-00674-0) measured every year from 969 to 1933 and flagged two new candidates (1052, 1279), and the [IntCal20 data archive](https://intcal.org/data.html) holds the raw tree-ring sets behind the calibration curve, many at annual or near-annual resolution. Goal: a list of candidate event years across all published annual series, each with jump size, significance against the series noise, and whether other trees at the same year agree. Verifier: independent trees for the same year from other labs, and coincident beryllium-10 or chlorine-36 peaks in ice cores.

### I8b Tree rings → choosing which years to measure for solar superstorms

The deliverable is only a target list; the discovery needs an <abbr title="accelerator mass spectrometry">AMS</abbr> radiocarbon lab and dated wood. About half a dozen Miyake events (one-year radiocarbon jumps from extreme solar storms) are known, and most of the Holocene has never been measured at annual resolution. An agent can rank unmeasured years by prior evidence: decadal anomalies in the [IntCal20 raw data](https://intcal.org/data.html), beryllium-10 peaks in ice cores, historical aurora reports, and which dendro-dated wood exists in collections. Goal: a ranked target list handed to a lab. Verifier: the lab's hit rate against random years.

### I9 Paintings → volcanic sunsets before instruments

Landscape painters may have been recording volcanic haze for three centuries before instruments: [Zerefos et al. 2007](https://doi.org/10.5194/acp-7-4027-2007) found that the red-to-green ratio of sunsets in about 550 dated paintings, 1500–1900, rises after Tambora (1815) and Krakatau (1883) and tracks aerosol optical depth. Hundreds of thousands of dated, often located paintings are now openly licensed through the [Rijksmuseum API](https://data.rijksmuseum.nl/docs/), the [Art Institute of Chicago API](https://api.artic.edu/docs/), the [Met collection API](https://metmuseum.github.io/) and [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:API). Classify which show a sunset or twilight sky, measure sky colour, and model it with date, place, artist and school as covariates, since fading pigments, varnish, restoration and studio taste all shift colour. Goal: a per-year sunset-colour index, 1600–1900, with uncertainties. Verifier: with eruption years held out of the fit, the index should pick out 1815, 1883 and the unidentified 1809 eruption, and correlate with ice-core sulphate.

### I10a Ship logbooks → the geomagnetic field

Navigators logged compass declination for four centuries, and new readings from sparse regions (South Pacific, Southern Ocean) and early periods [still move the field models](https://doi.org/10.1186/s40623-023-01852-1). The model itself is done: [gufm1](https://doi.org/10.1098/rsta.2000.0569) reconstructs 1590–1990, and the [HISTMAG database](https://cobs.zamg.ac.at/gsa/index.php/en/models-and-databases/histmag) holds about 155,000 historical declination records ([Arneitz et al. 2017](https://doi.org/10.1093/gji/ggx245)). The gap is logbooks transcribed or scanned since, whose variation readings are not in HISTMAG: candidates are the [CLIWOC](https://www.historicalclimatology.com/cliwoc.html) 1750–1850 logbook database, [Old Weather](https://www.oldweather.org/) naval and whaling logs, and the logbooks behind the [American Offshore Whaling Logbook data](https://whalinghistory.org/av/logs/aowl/), and the first job is finding which kept the variation column. Goal: new declination records with position, date and ship, deduplicated against HISTMAG and submitted to it. Verifier: agreement with gufm1 where it is well constrained.

### I10b Whaling logbooks → the 19th-century sea-ice edge

Whales feed along the ice edge, so where whalers caught them traces where the sea ice was decades before satellites: [Mahoney et al. 2011](https://journalhosting.ucalgary.ca/index.php/arctic/article/view/67193) used whaleship logs to map Bering and Chukchi ice from 1850 to 1910, and de la Mare used Antarctic catch positions to argue for a mid-century sea-ice decline ([Nature 1997](https://doi.org/10.1038/37956)). The [American Offshore Whaling Logbook data](https://whalinghistory.org/participate/download/) give daily positions and whale encounters by species, including ice-associated bowheads, for about 1,500 voyages from 1784 to 1920, free to download. Goal: a seasonal 19th-century ice-edge series for the other ice regions whalers worked, chiefly the Sea of Okhotsk and Hudson Bay. Verifier: the method must first reproduce Mahoney's Bering–Chukchi result from the same data, then agree where it overlaps the gridded [Walsh et al. sea-ice record from 1850](https://nsidc.org/data/g10010/versions/2) at NSIDC.

### I11 Gravestones → historical mortality

Starts with a data agreement with Ancestry (owner of Find a Grave) or BillionGraves, or a small permitted sample, because Find a Grave's terms forbid scraping and bulk reuse. Before civil registration, child mortality and epidemic timing are known only where parish burial registers survive and have been transcribed; [Find a Grave](https://www.findagrave.com) and [BillionGraves](https://billiongraves.com) hold hundreds of millions of memorials with dates and cemetery locations, and the [Gravestone Photographic Resource](https://www.gravestonephotos.com/) a smaller, mainly British set. Goal: age-at-death and season-of-death curves by parish and decade, corrected for who got a stone (children and the poor are under-represented). Verifier: the same parishes' burial registers transcribed in [FreeREG](https://www.freereg.org.uk/).

### I12 Bomb-pulse radiocarbon → poached ivory

The deliverable is only a compilation of published results; new dates need an <abbr title="accelerator mass spectrometry">AMS</abbr> lab and access to seized tusks, and the CITES ETIS seizure database is confidential. Bomb-test carbon-14 dates tissue formed after 1955 to within a year or two ([Uno et al. 2013](https://doi.org/10.1073/pnas.1302226110)), so ivory from an elephant killed after the 1989 trade ban can be proven illegal; [Cerling et al. 2016](https://doi.org/10.1073/pnas.1614938113) dated 231 tusks from 14 seizures and found 90% came from elephants dead under three years, and a [2022 follow-up](https://doi.org/10.1073/pnas.2211550119) showed ivory leaking from government stockpiles. Goal: one open table of every published ivory radiocarbon date linked to its seizure's place, date and death-to-seizure lag, using TRAFFIC's [Wildlife Trade Portal](https://www.wildlifetradeportal.org/), CITES documents and news reports. Verifier: the lags reproduce those reported in the source papers.

### I13 Night lights → power outages

Where utilities publish no outage data, which is most of the world and every war zone, satellite night lights are the only record of who lost power and for how long, and nobody runs a systematic global outage detector on them. NASA's [Black Marble](https://blackmarble.gsfc.nasa.gov/) daily product ([VNP46A2 on LAADS](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)) corrects <abbr title="Visible Infrared Imaging Radiometer Suite">VIIRS</abbr> night radiance for moonlight, cloud and snow at 500 m from 2012, and the Colorado School of Mines [EOG](https://eogdata.mines.edu/products/vnl/) publishes nightly and monthly mosaics; it has been used for single disasters such as Puerto Rico after Hurricane Maria. Goal: a daily outage catalogue by district (start, duration, population affected), validated in the US, then run globally. Verifier: the county-level [EAGLE-I outage record](https://doi.org/10.6084/m9.figshare.24237376) for 2014–22, 15-minute customers-out counts scraped from utility outage maps.

### I14 Aircraft transponders → winds and turbulence

Needs the OpenSky Network's historical database, which is granted only to academic, government and aviation-authority users. Clear-air turbulence injures crew and passengers and is what forecasters most lack observations of, yet every airliner's transponder broadcasts heading, airspeed and ground speed every few seconds, from which the wind along its path follows, and jitter in its vertical rate marks turbulence. KNMI's EMADDC already does the wind part operationally for Europe, with a reprocessed archive from 2016 open on the [KNMI Data Platform](https://dataplatform.knmi.nl/dataset/emaddc-hist-repro-data-1-0); raw <abbr title="Automatic Dependent Surveillance–Broadcast">ADS-B</abbr> and Mode-S messages for much of the world are in [OpenSky's Trino database](https://openskynetwork.github.io/opensky-api/trino.html). Goal: an open turbulence (eddy dissipation rate) and wind product for regions outside Europe, starting with the US, with published skill scores. Verifier: turbulence [pilot reports](https://mesonet.agron.iastate.edu/request/gis/pireps.php), radiosonde winds from [IGRA](https://www.ncei.noaa.gov/products/weather-balloon/integrated-global-radiosonde-archive), and [ERA5](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-pressure-levels).

### I15 Rooftop solar → cloud and irradiance maps

Tens of thousands of rooftop solar systems in Britain are a sunlight sensor network far denser than any radiometer network, and nobody publishes them as a weather map; [Open Climate Fix](https://github.com/openclimatefix) uses them only to nowcast national generation. Sheffield Solar's [UK PV dataset](https://huggingface.co/datasets/openclimatefix/uk_pv) has 30,000+ systems, 2010–2025, at 30 minutes (about 1,300 at 5 minutes), locations blurred to about 1 km, under CC-BY; worldwide volunteer uploads are behind the [PVOutput API](https://pvoutput.org/help/api_specification.html) (rate-limited per account). Converting output to irradiance needs each panel's tilt, orientation and shading, which can be fitted from clear-sky days. Goal: a 5-minute, 1–2 km gridded surface irradiance product for Great Britain from 2010, published as a dataset. Verifier: [BSRN](https://bsrn.awi.de/) radiometers (Camborne and Lerwick in the UK) and [CAMS](https://ads.atmosphere.copernicus.eu/datasets/cams-solar-radiation-timeseries) satellite irradiance.

### I18 Harvest dates and tithes → climate before thermometers

Every new harvest-date or tithe series transcribed from the archives extends Europe's summer-temperature record back centuries before thermometers: the Beaune grape-harvest series runs unbroken from 1354 to 2018 and tracks instrumental temperature where they overlap ([Labbé et al. 2019](https://doi.org/10.5194/cp-15-1485-2019), data in the [supplement](https://doi.org/10.5194/cp-15-1485-2019-supplement)). About 380 grape-harvest series, 93% French, are compiled in the open [Daux et al. database](https://www.ncei.noaa.gov/access/paleo-search/study/13194) at NOAA, [Euro-Climhist](https://www.euroclimhist.unibe.ch/index_eng.html) (free login) holds documentary weather observations, and grain tithes have been compiled for Sweden, Switzerland and Spain ([Ljungqvist et al. 2023](https://cp.copernicus.org/articles/19/2463/2023/)). Many more series sit untranscribed in digitised municipal harvest proclamations, tithe accounts and estate books. Goal: new annual series (harvest date or tithe yield), each with place, citation and page image, not already in the Daux database or Euro-Climhist. Verifier: overlap with instrumental temperature after about 1750 and with neighbouring existing series.

## J Sequencing and biomedical archives

### J1a Audit the Sequence Read Archive for mislabelled samples

A good share of public sequencing data comes from the wrong sex, species or cell line, and every study that reused it inherited the error: [Toker et al. 2016](https://f1000research.com/articles/5-2103/v1) found sex mismatches in 46% of the 70 transcriptomics studies they checked, and an archive-wide audit would say which datasets are wrong. The <abbr title="Sequence Read Archive">SRA</abbr> at <abbr title="National Center for Biotechnology Information">NCBI</abbr> ([search](https://www.ncbi.nlm.nih.gov/sra)), mirrored by the <abbr title="European Nucleotide Archive">ENA</abbr> ([browser](https://www.ebi.ac.uk/ena/browser/home)), holds about 27 million datasets, and the reads themselves reveal the truth: reads from the Y chromosome and the female-only XIST gene give sex, mitochondrial reads give species, and common genetic variants give a cell line's fingerprint. Species is partly done already, since NCBI's [STAT tool](https://www.ncbi.nlm.nih.gov/sra/docs/sra-taxonomy-analysis-tool/) profiles each run's taxonomic content into a [BigQuery table](https://www.ncbi.nlm.nih.gov/sra/docs/sra-cloud-based-taxonomy-analysis-table/). Start with sex: download the uniformly processed human RNA-seq gene counts from [ARCHS4](https://archs4.org/download) (one HDF5 file), compare XIST against Y-chromosome genes such as RPS4Y1 for every sample, and check against the declared sex; then match cell-line fingerprints against [Cellosaurus](https://www.cellosaurus.org). Goal: a public per-run table of declared versus inferred sex, species and cell line that the archives and submitting labs can act on. Verifier: runs declared as lines on the [ICLAC register of misidentified cell lines](https://iclac.org/databases/cross-contaminations/) must come out flagged, and a random sample of flags sent to the submitting labs should be confirmed.

### J1b Mine a whole-archive assembly for new CRISPR systems and antibiotic gene clusters

One sweep of the public sequence archive can make the news: [Serratus](https://serratus.io) searched 5.7 million samples for a single viral gene and found more than 100,000 new RNA viruses ([Edgar et al. 2022](https://doi.org/10.1038/s41586-021-04332-2)). Logan, from Institut Pasteur, has since assembled essentially all of the <abbr title="Sequence Read Archive">SRA</abbr>, including millions of runs that only ever existed as raw reads, into contigs (long consensus sequences) and unitigs (near-lossless ones), free on [AWS Open Data](https://registry.opendata.aws/pasteur-logan/) (about 0.3 PB of compressed contigs; code on [GitHub](https://github.com/IndexThePlanet/Logan)), and [Logan-Search](https://logan-search.org) finds any sequence across all of it in minutes. Two prizes: CRISPR systems (bacterial immune systems, the source of gene-editing tools; classify with [CRISPRCasTyper](https://github.com/Russel88/CRISPRCasTyper)) and biosynthetic gene clusters (the gene sets that make antibiotics and other natural products; detect with [antiSMASH](https://antismash.secondarymetabolites.org)), with giant-virus marker genes ([ViralRecall](https://github.com/faylward/viralrecall)) as a free by-catch. The bar is high, since [Altae-Tran et al. 2023](https://doi.org/10.1126/science.adi1910) clustered 8 billion metagenomic proteins and found 188 new CRISPR-linked genes, so start with the Logan contigs of one environment (say, all hot-spring or gut metagenomes) and look for what their search missed. Goal: a released catalogue of candidate new CRISPR families and gene clusters, each traced to its source runs. Verifier: in-silico consistency (CRISPR arrays beside the effector gene, complete cluster architecture) and, run blind, the pipeline must rediscover families published by others.

### J2 Recover unpublished trial results from regulators' files

<abbr title="Restoring Invisible and Abandoned Trials">RIAT</abbr> made headlines when its re-analysis of GSK's Study 329 found that paroxetine did not work for depressed adolescents and caused more harm than reported ([Le Noury et al. 2015](https://doi.org/10.1136/bmj.h4320)), but only a handful of trials have been restored, by hand ([restoringtrials.org](https://restoringtrials.org)). Many registered trials never publish (the [FDAAA TrialsTracker](https://fdaaa.trialstracker.net) and [EU Trials Tracker](https://eu.trialstracker.net) list overdue ones), yet if the drug went to a regulator the results often sit in public documents: medical and statistical review PDFs in [Drugs@FDA](https://www.accessdata.fda.gov/scripts/cder/daf/), clinical study reports on [EMA's clinical data portal](https://clinicaldata.ema.europa.eu) (products assessed 2015–2018 and from late 2023, after a pause) and [Health Canada's clinical information portal](https://clinical-information.canada.ca/search/ci-rc), plus the [ClinicalTrials.gov results API](https://clinicaltrials.gov/data-api/api). Doable for trials whose sponsor submitted them to a regulator; not for trials that vanished without a submission. Start with one drug class: take its overdue trials from the trackers and search the review PDFs for their protocol numbers. Goal: a structured summary (population, arms, primary outcome, effect size, harms) of every recoverable unpublished trial, each number cited to a document page. Verifier: trials later published by RIAT or by their sponsors, held out and compared.

### J3 A frozen benchmark for early drug-safety signals

Could a simple statistic on spontaneous adverse-event reports have flagged a drug's danger years before its label changed? Nobody can answer cleanly, because no public, frozen, reproducible benchmark exists. The <abbr title="FDA Adverse Event Reporting System">FAERS</abbr> database (about 20.7 million reports) is free through the [openFDA drug event API](https://open.fda.gov/apis/drug/event/) and as bulk JSON from [openFDA downloads](https://open.fda.gov/data/downloads/); the standard detector is a disproportionality signal, a drug–event pair reported more often, relative to all other drugs, than chance predicts, scored as <abbr title="proportional reporting ratio">PRR</abbr>, <abbr title="reporting odds ratio">ROR</abbr> or <abbr title="empirical Bayes geometric mean">EBGM</abbr>. Ground truth is dated label changes in the FDA's [Drug Safety-related Labeling Changes database](https://www.accessdata.fda.gov/scripts/cder/safetylabelingchanges/) (downloadable, January 2016 onward), label versions in [DailyMed](https://dailymed.nlm.nih.gov/dailymed/), and market withdrawals. Doable: the data are public and the backtest is standard in pharmacovigilance papers, but the nearest public benchmark ([Harpaz et al. 2014](https://www.nature.com/articles/sdata201443)) has 62 positive cases from a single year. Goal: a versioned benchmark (FAERS frozen quarter by quarter, the label changes after each freeze as targets) plus a baseline disproportionality detector scored on it. Verifier: anyone can recompute the scores, and a detector frozen today is scored on the next few years' label changes.

### J4 Check hospital-posted prices against insurer-posted prices

US hospitals and insurers now both publish the same negotiated prices, in separate files; where they disagree one of them is wrong, and a ranked list of the discrepancies is the open question. The raw parsing is largely done: the <abbr title="Centers for Medicare &amp; Medicaid Services">CMS</abbr> [hospital price transparency rule](https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency) has required machine-readable files since 2021, a [standard format](https://github.com/CMSgov/hospital-price-transparency) since 2024 and actual dollar amounts from 2026 ([fact sheet](https://www.cms.gov/newsroom/fact-sheets/cy-2026-opps-ambulatory-surgical-center-final-rule-hospital-price-transparency-policy-changes)); Turquoise Health sells a national parse, Patient Rights Advocate audits compliance ([reports](https://www.patientrightsadvocate.org/pra-reports), about half of hospitals fully compliant in the latest), and DoltHub's crowdsourced [database](https://www.dolthub.com/repositories/dolthub/hospital-price-transparency) stopped in 2021 at about 1,400 hospitals. Insurers publish their in-network rates separately under the [Transparency in Coverage rule](https://www.cms.gov/priorities/key-initiatives/healthplan-price-transparency), so the same hospital, billing code and plan appear in two independently produced files. Start with one state's hospitals and its largest insurers, and join on hospital identifier, code and plan. Goal: a public table of hospital-posted versus insurer-posted rates for common shoppable services, with discrepancies ranked. Verifier: a sample of discrepancies checked by calling billing offices or against real explanation-of-benefits statements.

### J5 Find duplicated and mislabelled images in biology's image archives

Elisabeth Bik's hand screening found inappropriately duplicated images in about 4% of 20,000 biomedical papers ([Bik et al. 2016](https://doi.org/10.1128/mBio.00809-16)), and journals now screen submissions with commercial tools, but the public archives holding the raw images behind papers have not, as far as a search shows, been screened at scale. The friendliest start is the [Human Protein Atlas](https://www.proteinatlas.org/about/download), more than 10 million antibody-stained tissue and cell images, each labelled with protein, antibody and tissue; the [Image Data Resource](https://idr.openmicroscopy.org/about/studies.html) (<abbr title="Image Data Resource">IDR</abbr>: 416 TB, 14 million images from 143 published studies) is next, while <abbr title="Electron Microscopy Public Image Archive">EMPIAR</abbr>'s raw electron-microscopy movies ([archive](https://www.ebi.ac.uk/empiar/), 8 PB) are too big to start with. Compute a perceptual hash or embedding for every image and look for the same picture filed under different proteins, antibodies, tissues or studies, then match archive images against the figures of the linked papers. The source of truth is each repository's own metadata plus the linked paper, and an undergraduate can start this week with a laptop and the atlas's image URLs. Goal: a published list of image pairs that are the same image under contradictory metadata, sent to the curators. Verifier: each flagged pair is checkable by eye, and curator corrections or journal errata confirm them.

### J6a Find unreported outbreaks in NCBI's bacterial genome clusters

Outbreaks of drug-resistant hospital bacteria and food poisoning that crossed borders and were never reported may be sitting in a public database. <abbr title="National Center for Biotechnology Information">NCBI</abbr> Pathogen Detection ([isolate browser](https://www.ncbi.nlm.nih.gov/pathogens/isolates/), [bulk files](https://ftp.ncbi.nlm.nih.gov/pathogen/Results/)) holds well over a million isolates (an isolate is one bacterium cultured from one patient, food or surface, then sequenced), with collection date and place, and already groups them into <abbr title="single-nucleotide polymorphism">SNP</abbr> clusters: isolates only a few DNA letters apart, which implies recent shared transmission. US Salmonella and Listeria clusters are already watched by PulseNet, so the open ground is clusters spanning countries and hospital pathogens such as Klebsiella and Acinetobacter; most records give country or state rather than hospital. Start from one organism's `latest_snps` cluster file and keep clusters whose isolates span two or more countries or states within a year. Goal: a ranked list of cross-site clusters with no matching public outbreak report. Verifier: clusters that match published investigations (CDC outbreak notices, [EFSA–ECDC rapid outbreak assessments](https://www.efsa.europa.eu/en/publications?type=rapid-outbreak-assessment), outbreak papers) are held out, and the method must find them.

### J6b Compare resistance genes in public genomes with WHO's national resistance figures

WHO's picture of antibiotic resistance rests on national lab reports that many countries submit patchily, and public genomes offer an independent check of where it is wrong or missing. <abbr title="National Center for Biotechnology Information">NCBI</abbr> Pathogen Detection runs AMRFinderPlus, NCBI's resistance-gene finder, on every isolate (an isolate is one cultured, sequenced bacterium), giving resistance genes with country and date for well over a million isolates ([isolate browser](https://www.ncbi.nlm.nih.gov/pathogens/isolates/), [MicroBIGG-E gene table](https://www.ncbi.nlm.nih.gov/pathogens/microbigge/), [bulk files](https://ftp.ncbi.nlm.nih.gov/pathogen/Results/)). WHO <abbr title="Global Antimicrobial Resistance and Use Surveillance System">GLASS</abbr> publishes resistance rates by country, pathogen and antibiotic on its [dashboard](https://worldhealthorg.shinyapps.io/glass-dashboard/); Pfizer's ATLAS isolate data would add more but needs an application through [Vivli](https://amr.vivli.org). Compute gene-predicted resistance per country, pathogen and year and set it against GLASS, remembering that public genomes over-represent a few rich countries and outbreak samples. Goal: a country-by-pathogen table of where genomic and GLASS figures agree, disagree or only one exists, with the sampling bias modelled. Verifier: isolates with laboratory susceptibility results in NCBI's [AST browser](https://www.ncbi.nlm.nih.gov/pathogens/ast) test the gene-to-resistance step before any country comparison.

### J7a A benchmark for normalising wastewater virus levels across sites

Sewage is now the main way the US tracks COVID, flu, RSV and measles, but a reading from one plant cannot be compared with another until it is corrected for dilution and population, and there is no public benchmark saying which correction works best. The CDC's <abbr title="National Wastewater Surveillance System">NWSS</abbr> sample-level [SARS-CoV-2 dataset](https://data.cdc.gov/Public-Health-Surveillance/CDC-Wastewater-Data-for-SARS-CoV-2/j9g8-acpt) (with sibling datasets for flu A, RSV, measles and mpox) is fully downloadable and carries raw concentration, flow rate, population served and the faecal-marker concentration for each sample; [WastewaterSCAN](https://data.wastewaterscan.org) (about 147 plants) is viewable publicly but licensed non-commercial, with research use by request to the team. The competing corrections are flow-and-population normalisation and dividing by <abbr title="pepper mild mottle virus">PMMoV</abbr>, a plant virus from eaten peppers that marks how much human faeces is in a sample. Case counts collapsed after home testing, so score against weekly hospital admissions from the [NHSN respiratory dataset](https://data.cdc.gov/d/ua7e-t2fy). Goal: a public benchmark, with held-out time periods, that ranks normalisation methods by how well the normalised signal tracks later admissions. Verifier: scores on the held-out periods, computed blind.

### J7b Measure how early wastewater sequencing spots new virus variants

Variant deconvolution means estimating which virus lineages, in what proportions, make up a sewage sample that holds thousands of people's viruses at once, and it is largely solved: [Freyja](https://github.com/andersen-lab/Freyja) is the standard tool, a [spike-in gold-standard dataset](https://www.medrxiv.org/content/10.1101/2024.02.15.24302811v1) and a [rigorous benchmark](https://arxiv.org/abs/2309.16994) compare the tools, and a [28-state study](https://pmc.ncbi.nlm.nih.gov/articles/PMC12990898/) validated Freyja against clinical sequencing. What remains open is lead time: how many weeks before clinical sequencing did wastewater first show each new lineage, measured without hindsight. Raw wastewater reads are in the SRA ([search](https://www.ncbi.nlm.nih.gov/sra/?term=wastewater+SARS-CoV-2)) and clinical lineage shares in the CDC's [variant proportions dataset](https://data.cdc.gov/d/jr58-6ysp). Goal: a public, time-split table of first-detection dates in wastewater versus clinical data for every major lineage since 2021. Verifier: detections use only lineage definitions and reads available on the date claimed.

### J8 Drug-shortage prediction

A forecast of which sterile injectable goes short next would let hospitals stock up before patients go without, and the warning signs are public. The FDA's [shortage list](https://www.accessdata.fda.gov/scripts/drugshortages/) (also as the [openFDA shortages API](https://open.fda.gov/apis/drug/drugshortages/)), [warning letters](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters), inspection reports from the [FOIA reading room](https://www.fda.gov/about-fda/office-regulatory-affairs/ora-foia-electronic-reading-room), and the number of manufacturers per active ingredient (from the [openFDA NDC directory](https://open.fda.gov/apis/drug/ndc/)) are the inputs. Backtestable, but only against a dated timeline rebuilt from archived snapshots (for example the Internet Archive's copies of the shortage page): the live shortage API rewrites history, so a naive backtest leaks the answer. Goal: a monthly ranked list of injectables at risk, with its backtest on the rebuilt timeline. Verifier: shortages that begin after each frozen forecast.

### J9 Predict FDA enforcement from inspection observations

A list of which drug and food factories are heading for FDA enforcement, and so for recalls or shortages, would be worth having months early. A Form 483 is the list of observations an FDA investigator hands a factory at the end of an inspection (for example "cleaning procedures not validated"); a warning letter, or an import alert that stops the plant's goods at the US border, may follow. The [FDA inspections dashboard](https://datadashboard.fda.gov/oii/cd/inspections.htm) downloads inspection outcomes (no action, voluntary action, official action), the text of 483 citations and a list of published 483s, with PDFs in the [FOIA reading room](https://www.fda.gov/about-fda/office-regulatory-affairs/ora-foia-electronic-reading-room) and outcomes in the [classification database](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-classification-database), [warning letters](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters) and [import alerts](https://www.accessdata.fda.gov/cms_ia/ialist.html); the EU equivalent is statements of <abbr title="good manufacturing practice">GMP</abbr> non-compliance in [EudraGMDP](https://eudragmdp.ema.europa.eu/). Commercial vendors sell 483 analytics, but no public benchmark exists. Goal: a model that, from 483 text and a facility's history, ranks facilities by the chance of a warning letter or import alert within a year, published with its backtest. Verifier: time-split, trained before a cut-off date and scored on enforcement actions after it.

### J10 Food-safety alert prediction

Which food from which country will be the next to fail border checks? EU and US systems record every alert, and a backtested forecast would tell inspectors where to look. Alerts since 2020 are searchable in the EU's <abbr title="Rapid Alert System for Food and Feed">RASFF</abbr> [Window](https://webgate.ec.europa.eu/rasff-window/screen/search), with 1979–2019 as one CSV on [Zenodo](https://zenodo.org/records/4967166); US recalls since 2012 are in the [openFDA food enforcement API](https://open.fda.gov/apis/food/enforcement/) and meat and poultry recalls in the [FSIS recall API](https://www.fsis.usda.gov/science-data/developer-resources/recall-api), while the USDA's [Pesticide Data Program](https://www.ams.usda.gov/datasets/pdp/pdpdata) gives residue measurements that come before alerts. Honest status: a dozen academic papers already model RASFF, mostly classifying severity, but none publishes a frozen, time-split benchmark of which product–origin–hazard combination alerts next. Goal: that benchmark plus a baseline predictor, including a test of whether EU alerts foreshadow US recalls of the same product. Verifier: time-split against alerts issued after the freeze.

### J11 Animal-disease early signals

How many days' warning did news and informal reports give before the official notification, for every major animal outbreak since 2005, and which outbreaks were never officially reported at all? The full version starts with a data request: ProMED, 30 years of curated outbreak reports ([promedmail.org](https://www.promedmail.org)), moved to paid subscriptions after its 2023 funding crisis and now limits archive search by tier. The official side is fully public: <abbr title="World Animal Health Information System">WAHIS</abbr> ([interface](https://wahis.woah.org), [how to download](https://wahis-support.woah.org/support/solutions/articles/51000034446)) holds immediate notifications since 2005, 3,263 of them to February 2021, and [Lin et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC12017132/) measured their delays but not against informal sources. An open version can start today with the [PADI-web corpus](https://dataverse.cirad.fr/dataset.xhtml?persistentId=doi:10.18167/DVN1/WD1UC2) (70,707 labelled news articles from a French animal-disease news monitor) and FAO's [EMPRES-i event data](https://data.apps.fao.org/catalog/dataset/major-diseases-by-date-empres-i). Enough data? Yes for a handful of diseases such as African swine fever and avian influenza; for all diseases over twenty years, only with ProMED's archive. Goal: a per-outbreak table of informal-report date, official-notification date and lead time, plus a list of events that never reached WAHIS. Verifier: every date is linked to its source document.

## K Records that could be linked but aren't (investigative layer)

### K1a Find collusion fingerprints in Ukrainian bid documents

Ukraine's ProZorro publishes the files every bidder uploaded, not just the winner's, which makes it one of the few places where supposedly competing bids can be checked for a common author: identical typos, the same template, matching file metadata. The [ProZorro public API](https://prozorro-api-docs.readthedocs.io/en/latest/) needs no registration and covers every Ukrainian public tender since 2016; bidders may mark some files confidential ([rules](https://prozorro-api-docs.readthedocs.io/en/master/tendering/basic-actions/confidential-documents.html)), but most are public. Tender-level risk scoring already exists: the State Audit Service runs automatic risk indicators, Transparency International Ukraine's [DoZorro](https://ti-ukraine.org/en/news/dozorro-artificial-intelligence-to-find-violations-in-prozorro-how-it-works/) scores every tender with machine learning, and [Baránek, Musolff and Titl](https://lmusolff.com/papers/Detecting_Collusive_Networks.pdf) detect collusive bidder networks from bidding behaviour, with results that predict competition-authority sanctions. What nobody does publicly is compare the documents themselves; this is doable: pick one sector (road repair, say), download every bid's files and score each pair of bids in the same tender on shared text, spelling errors and metadata. Goal: a ranked list of bidder pairs whose documents appear to share an author, files attached, for DoZorro and the <abbr title="Antimonopoly Committee of Ukraine">AMCU</abbr>. Verifier: run blind, bidders the AMCU has already fined for bid-rigging must rank near the top.

### K1b Link EU tender winners to company registries

A winner incorporated weeks before the award, or two "rival" winners with the same owner, is a classic bid-rigging sign, and the EU's <abbr title="Tenders Electronic Daily">TED</abbr> publishes every above-threshold contract award in Europe. Be clear on what is done: the standard red flags from the [Open Contracting Partnership's guide](https://www.open-contracting.org/resources/red-flags-in-public-procurement-a-guide-to-using-data-to-detect-and-mitigate-risks/) (single bidder, short bidding window, unpublished call) are already computed for TED and 30 national systems on the Government Transparency Institute's [opentender.eu](https://opentender.eu), [updated in 2026](https://imonitor.govtransparency.eu/2026/03/12/corruption-risk-indicators-in-public-procurement-an-updated-opentender-eu-framework/). The gap is the company side: pull award notices from [TED's bulk CSV](https://data.europa.eu/data/datasets/ted-csv) or its [developer API](https://ted.europa.eu/en/simap/developers-corner-for-reusers), match winners to national registries through [OpenCorporates](https://api.opencorporates.com/documentation/API-Reference) (free bulk access for public-benefit projects, on application), and flag winners that were newly formed, dormant, or share directors or addresses with other winners. TED names only winners and the number of bids, so shared-owner checks work across lots and tenders, not among the losing bidders. Goal: a monthly feed of flagged awards with the notice and registry extracts attached, for journalists and national competition authorities. Verifier: a hand-checked random sample of flags, and buyers opentender.eu already rates high-risk should be over-represented.

### K1c Rediscover the UK's pandemic contract scandal from open data, then keep watching

In 2020 UK protective-equipment contracts worth hundreds of millions went to firms with no track record, some incorporated only weeks earlier, and the [National Audit Office](https://www.nao.org.uk/reports/government-procurement-during-the-covid-19-pandemic/) and journalists found them by hand months later; a standing check would catch the next ones when the notice is published. UK awards are on [Contracts Finder](https://www.contractsfinder.service.gov.uk/apidocumentation) and, for larger contracts, [Find a Tender](https://www.find-tender.service.gov.uk/Developer/Documentation), both with free APIs, and a winner's company number joins it to Companies House's free [basic company data](https://download.companieshouse.gov.uk/en_output.html) (incorporation date, status, accounts type), [beneficial-owner data](https://download.companieshouse.gov.uk/en_pscdata.html) and [officer API](https://developer.company-information.service.gov.uk). Flag awards to companies under six months old, filing dormant or micro-entity accounts, or sharing officers or owners with other suppliers to the same buyer. Goal: a public, continuously updated list of flagged UK awards with the notice and registry filings attached, for newsrooms and the NAO. Verifier: run blind on 2020–21 notices, it must surface the pandemic suppliers the NAO investigation and later court cases identified.

### K1d Screen US federal contracts for rotating winners

The US Justice Department's [Procurement Collusion Strike Force](https://www.justice.gov/atr/procurement-collusion-strike-force) prosecutes bid-rigging on government contracts, but cases start from tips; the contract data would let anyone screen for it first. [USAspending](https://www.usaspending.gov/download_center/award_data_archive) publishes every federal contract action as bulk CSV files by agency and fiscal year (plus an [API](https://api.usaspending.gov)), including the number of offers received and whether the award was competed, and [SAM.gov entity data](https://sam.gov/data-services) gives each contractor's registration date and address. Start by computing single-offer rates by contracting office and product code, then run the published bid-rigging screens (winners taking turns at the same office, stable market shares, suspiciously even price patterns) and flag winners registered shortly before the award or sharing addresses with other winners. Only winners are published, so these screens work on who wins, not on losing bids. Goal: a ranked, documented list of offices and vendor groups for newsrooms and agency inspectors general. Verifier: run on the years before each strike-force prosecution, it must flag the contracts later prosecuted.

### K2 Audit whether the UK's new director identity checks closed the loopholes

The UK company register (the public list of every company, its directors and its owners) was already mined for abuse, so the honest remaining question is whether the 2025 reforms fixed what was found. [Global Witness](https://globalwitness.org/en/campaigns/corruption-and-money-laundering/the-companies-we-keep/) ran the obvious checks on the 2018 beneficial-owner data: 345 companies owned by disqualified directors, 328 in circular ownership loops, over 208,000 at "company factory" addresses. Since then Companies House has gained powers to query and remove false filings (March 2024) and made identity verification compulsory for new directors from 18 November 2025, with existing directors verifying at their next annual filing ([official summary](https://changestoukcompanylaw.campaign.gov.uk/)), so a fresh hunt for disqualified directors mostly duplicates the registrar. What is left is a before-and-after audit once that transition year ends: re-run the same checks on the free [bulk ownership data](https://download.companieshouse.gov.uk/en_pscdata.html), the [disqualified-officers register](https://find-and-update.company-information.service.gov.uk/search/disqualified-officers) and the [officer API](https://developer.company-information.service.gov.uk), and count what survived. Goal: a published company-by-company comparison of the 2018 and post-verification figures, for journalists and Companies House's enforcement team. Verifier: every surviving flag can be checked against the filing that produced it.

### K3 Track copy-pasted model bills through every US statehouse

Model bills are template legislation written by lobby groups and think tanks and introduced almost word for word by legislators in many states, and when USA Today, the Arizona Republic and the Center for Public Integrity went looking ([Copy, Paste, Legislate](https://publicintegrity.org/topics/politics/copy-paste-legislate/), 2019 Goldsmith Prize) they found at least 10,000 copied bills introduced between 2010 and 2018, more than 2,100 of them enacted. The method is public ([how they did it](https://publicintegrity.org/politics/state-politics/copy-paste-legislate/how-we-uncovered-10000-times-lawmakers-introduced-copycat-model-bills-and-why-it-matters/); a notebook walk-through at [investigate.ai](https://investigate.ai/azcentral-text-reuse-model-legislation/)), but the analysis stopped in October 2018. Bill texts for all 50 states come from the [LegiScan API](https://legiscan.com/legiscan) (free key, 30,000 queries a month) and its weekly [bulk datasets](https://legiscan.com/datasets), or from [Open States](https://open.pluralpolicy.com/data/); templates come from lobby groups' own libraries such as [ALEC's model policies](https://alec.org/model-policy/). Index every bill since 2019, find candidate matches against the template corpus by shared phrases, then align each pair to extract the copied passages and attach the sponsors. Goal: a public, continuously updated table of copied bills since 2019, matching passages side by side, for statehouse reporters. Verifier: run on 2010–2018, it must recover the copied bills the 2019 investigation reported.

### K4 Catch federal judges ruling on companies they hold shares in

The [Wall Street Journal found in 2021](https://www.wsj.com/articles/131-federal-judges-broke-the-law-by-hearing-cases-where-they-had-a-financial-interest-11632834421) that 131 federal judges had heard 685 cases between 2010 and 2018 involving companies they or their families owned stock in, which the law forbids; the courts now require automated conflict screening, but nobody outside checks whether it works. The judges' holdings are in the Free Law Project's [financial disclosures database](https://www.courtlistener.com/financial-disclosures/) on CourtListener (about 1.7 million investment records from judges' annual forms, via a [free API](https://wiki.free.law/c/courtlistener/help/api/rest/v4/financial-disclosures) with an account), and parties come from dockets in the free [RECAP archive](https://www.courtlistener.com/recap/) of <abbr title="Public Access to Court Electronic Records">PACER</abbr> filings, which otherwise cost 10 cents a page ([docket API](https://wiki.free.law/c/courtlistener/help/api/rest/v4/pacer-data), [bulk data](https://wiki.free.law/c/courtlistener/help/api/bulk-data/bulk-legal-data)). Start by resolving each holding to a company and each corporate party to its parent, then join on judge and year. Goal: a list of cases since 2022 where the presiding judge held stock in a party, each with the disclosure line and docket entry, for the parties' lawyers, the circuit judicial councils and newsrooms. Verifier: run on 2010–2018, it must recover the WSJ's cases. State judges are the natural extension, but their disclosures are scattered across state ethics bodies, often as scanned forms.

### K5 Flag charity insiders paying themselves through their charities

Form 990 is the annual return US nonprofits file with the IRS, and its Schedule L lists loans, grants and business deals with officers, directors and their families: self-dealing disclosed in plain sight, across hundreds of thousands of returns that almost nobody reads systematically. Every e-filed return since 2019 is on the IRS's [Form 990 series downloads](https://www.irs.gov/charities-non-profits/form-990-series-downloads) as monthly XML zips with a CSV index (the older [AWS mirror](https://registry.opendata.aws/irs990/) stopped updating in 2021); [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/) has an [API](https://projects.propublica.org/nonprofits/api) for looking organisations up, and the [Nonprofit Open Data Collective](https://nonprofit-open-data-collective.github.io/) has tools for parsing the XML. Parse [Schedule L](https://www.irs.gov/pub/irs-pdf/f990sl.pdf) and the pay tables, then flag executive pay far above peers of similar size and field, grants to organisations sharing a board member, and insider business deals that grow year on year. Goal: a ranked list of organisations with the return lines attached, for state attorneys general (who regulate charities) and newsrooms. Verifier: flags should precede later returns in which the organisation admits an "excess benefit transaction" (Form 990 Part IV), the final adverse determinations in the IRS's [Tax Exempt Organization Search](https://apps.irs.gov/app/eos/), and state settlements such as the [New York Charities Bureau's](https://www.charitiesnys.com/); the IRS's automatic revocations are for not filing, so they are a weak check.

### K6 Match unidentified bodies to missing persons by their descriptions

About 15,500 sets of human remains in the US have no name while about 26,000 missing-person cases are open ([NamUs monthly statistics](https://namus.nij.ojp.gov/library/reports-and-statistics), December 2025), and every match gives a family an answer; genetic-genealogy labs such as [Othram](https://dnasolves.com) and the [DNA Doe Project](https://dnadoeproject.org) make the news solving them, but only for cases with usable DNA. <abbr title="National Missing and Unidentified Persons System">NamUs</abbr>, the Justice Department's national database, already compares cases automatically on dates, geography and basic demographics; tattoos, scars, clothing, jewellery and dental notes sit in descriptions that people search by hand. The cases are on the public [unidentified](https://www.namus.gov/UnidentifiedPersons/Search) and [missing](https://www.namus.gov/MissingPersons/Search) search pages (no bulk download; the pages sit on a JSON interface volunteers have scraped, so ask NamUs before harvesting at scale), with more text in the volunteer [Doe Network](https://www.doenetwork.org) case files. Doable as lead-ranking: extract features from the text ("rose tattoo left forearm", "partial upper denture"), score every pair compatible on sex, age, height and dates, and send top candidates privately to the investigating agency or medical examiner each case lists, never publicly. Goal: a ranked shortlist of missing-person candidates for each unidentified case. Verifier: freeze a snapshot, then count how many matches confirmed afterwards (NamUs marks cases resolved) were in your top ten.

### K7 Rebuild the lives of enslaved people across scattered records

Most enslaved people appear in the record only as a first name, an age and an owner in a ship manifest, a sale record or a runaway advertisement; linking those mentions into one person's life is what descendants and historians most want, and it is done by hand, one family at a time. [SlaveVoyages](https://www.slavevoyages.org) has named-person databases ([downloads](https://legacy.slavevoyages.org/voyage/downloads)), among them Oceans of Kinfolk (over 63,000 people shipped from US ports to New Orleans in the 19th century); the [Louisiana Slave Database](https://www.ibiblio.org/laslave/) holds about 100,000 enslaved people from Louisiana documents of 1699–1820 ([downloads](https://www.ibiblio.org/laslave/downloads/), dBase/Access/SPSS); [Freedom on the Move](https://database.freedomonthemove.org/) has tens of thousands of runaway advertisements, exportable as CSV; institutional records such as the [Georgetown Slavery Archive](https://slaveryarchive.georgetown.edu) are digitised but mostly unstructured. [Enslaved.org](https://enslaved.org) is the hub that joins such sources as linked open data ([RDF and JSON dumps](https://docs.enslaved.org/lod/)). Start where the sources overlap, Louisiana in 1800–1820: link Oceans of Kinfolk manifest entries (name, age, height, shipper) to Louisiana sale and estate records and to Louisiana runaway ads, scoring each candidate link. Goal: linked person records with every source cited, contributed to Enslaved.org. Verifier: hold out person-to-person links Enslaved.org's contributing projects already made by hand, and check the method recovers them.

### K8 Find employers who dodge wage-theft judgments by reincorporating

Workers in California who won wage claims before the state Labor Commissioner in 2008–2011 collected only about 15% of the $282 million awarded ([Hollow Victories](https://labor.ucla.edu/project/rework-research/publication/hollow-victories-the-crisis-in-collecting-unpaid-wages-for-californias-workers/), UCLA Labor Center and NELP, 2013), and a standard dodge is to close the company and reopen under a new name; since 2020 California makes such successor companies liable (AB 3075), so identifying them now has direct legal use. Federal wage-and-hour findings since 2005 ([data.gov](https://catalog.data.gov/dataset/wage-and-hour-division-compliance-action-data), browsable [mirror](https://labordata.bunkum.us/whisard)) name the employer, address, back wages owed and penalties, though not whether they were paid; state judgments are patchier. The reincorporation side comes from state company registries, via [OpenCorporates](https://api.opencorporates.com/documentation/API-Reference) (free bulk access for public-benefit projects, on application): for each employer with findings, look for a dissolution followed within two years by a new entity at the same address or with the same officers. Doable for one state with good registry data, California first; nationally the registries are too uneven. Goal: a list of likely successor companies with the findings and filings attached, for the California Labor Commissioner and worker legal-aid clinics. Verifier: hand-check a random sample of flagged pairs against the registry filings, and check the method finds successor cases already pursued under the California law.

### K9 Find FOIA releases agencies were legally required to publish

The US Freedom of Information Act (<abbr title="Freedom of Information Act">FOIA</abbr>) lets anyone request federal records, and since 2016 any record requested three or more times must be posted publicly ([DOJ summary of the "rule of three"](https://www.justice.gov/oip/oip-summary-foia-improvement-act-2016)); records released repeatedly to individuals but never posted are both a compliance failure and a trove anyone could then read. Agencies publish FOIA logs (each request's subject and outcome) in their reading rooms, reachable through [FOIA.gov's agency search](https://www.foia.gov/agency-search.html), and MuckRock's [FOIA Log Explorer](https://www.muckrock.com/foi/logs/) already holds about 170,000 log entries from 21 agencies. Cluster log entries by subject, find records granted three or more times, check each agency's reading room for them, and file requests through [MuckRock](https://www.muckrock.com) for the missing ones so they become public. The honest payoff: no new secrets, since someone already received these documents; the gain is putting them in public and measuring how far agencies ignore the rule. Goal: a per-agency table of frequently released, unposted records, for the [Office of Government Information Services](https://www.archives.gov/ogis) (the FOIA ombudsman) and newsrooms. Verifier: the documents themselves when the re-requests come back.

### K10 Check CITES plant exports declared "artificially propagated"

Declaring wild-collected animals or plants "captive-bred" or "artificially propagated" is the standard way to move protected species legally on paper. For animals the across-the-board check has been done: [Morton, Nijman and Edwards (2024)](https://doi.org/10.1016/j.jenvman.2024.120240) screened <abbr title="Convention on International Trade in Endangered Species">CITES</abbr> animal trade for 2000–2020 and found laundering real but uncommon (1.8% of trade volume was attributed to breeding facilities that do not exist); plants were outside that study, so check the orchid and succulent literature before starting. The [CITES Trade Database](https://trade.cites.org) is a free full download ([about 490 MB zip](https://trade.cites.org/en/cites_trade/download_db)) in which each shipment is reported separately by exporter and importer with a source code (W for wild, A for artificially propagated). For each plant taxon and exporter, flag sudden switches from W to A, A-volumes implausible for the country's known nurseries, and cases where the importer records wild what the exporter declared propagated. Goal: a ranked list of taxon–country flows for the CITES Plants Committee and Secretariat. Verifier: flows already under CITES's [Review of Significant Trade](https://rst.cites.org/public) should rank near the top when run blind.

### K11 Find wildlife sold online under code words

Sellers use euphemisms ("ox bone" for ivory) to list protected species on marketplaces and social media. This is already worked by the platforms themselves: the [Coalition to End Wildlife Trafficking Online](https://www.endwildlifetraffickingonline.org), run by WWF, TRAFFIC and IFAW with dozens of tech companies, reports tens of millions of listings removed since 2018, increasingly by the companies' own automated detection plus trained volunteer spotters. An outsider scraping marketplaces would breach most platforms' terms of service and duplicate those in-house systems. The gap an outsider can fill is independent measurement, since the Coalition [shares little evidence](https://news.mongabay.com/2022/03/coalition-against-online-wildlife-trafficking-shares-little-evidence-of-success-analysis/) that removals work: search a platform's public search as an ordinary user each month for a fixed lexicon of known code words, report what is live, and time the takedowns. Goal: a published, repeatable takedown-rate audit per platform. Verifier: takedown rate and time, measured on the reported listings.

### K12 Link wildlife seizures into trafficking networks

The [Wildlife Justice Commission](https://wildlifejustice.org/wildlife-justice-commission-report-reveals-major-disruption-in-pangolin-scale-and-ivory-trafficking-2/) attributes more than half of the major ivory and pangolin-scale seizures of 2018–2021 to a single criminal network, using intelligence work; whether open records alone can reproduce that kind of attribution is an open question. TRAFFIC's [Wildlife Trade Portal](https://www.wildlifetradeportal.org) (free registration, results exportable) holds seizure incidents compiled from press and official reports, with species, quantity, place, route, transport mode and concealment method. Pull every incident for one commodity (pangolin scales), go back to each source report for company names, consignees, shipping lines and routes, and link incidents that share any of them into a graph. Expect clusters by route and packing method more than named individuals, since names are sparse in open reporting; publish only company and route links, not unconvicted people's names. Goal: a public graph of linked seizures with a source for every link, for enforcement NGOs and journalists. Verifier: the clusters must line up with the networks the Commission's [2025 report](https://wildlifejustice.org/wp-content/uploads/2025/04/Disruption-and-Disarray-Report-2025-V11-Spreads.pdf) describes.

### K13 Trace fishing vessels that return under new names

Regional fisheries management organisations (<abbr title="Regional Fisheries Management Organisations">RFMOs</abbr>), the treaty bodies that manage tuna and other high-seas fish, blacklist vessels caught fishing illegally, and a blacklisted vessel can come back under a new name, flag and owner. This is largely policed already: Trygg Mat Tracking keeps the [Combined IUU Vessel List](https://iuu-vessels.org) with each listed vessel's history of names, flags and owners, and Global Fishing Watch's [vessel identity dataset](https://globalfishingwatch.org/datasets-and-code-vessel-identity/) reconciles more than 30 registries with satellite tracking from 2012 on ([Park et al. 2023](https://doi.org/10.1126/sciadv.abp8200) traced reflagging across 35,000 vessels). The remaining gap is vessels cited in RFMO compliance-committee reports (PDFs naming vessels with infringements) that were never blacklisted: link them to later authorised-vessel lists, such as those of [IOTC](https://iotc.org/vessels), [ICCAT](https://www.iccat.int/en/vesselsrecord.asp) and [WCPFC](https://vessels.wcpfc.int), under new names or flags. Goal: a list of cited vessels that reappear with changed identities, for Trygg Mat Tracking and the commissions' compliance committees. Verifier: vessels later added to the IUU lists.

### K14 Catch fish exports that exceed any plausible catch

A country cannot legally export more of a fish than it catches, farms and imports, so where exports exceed that supply the excess is illegal catch being laundered into legal trade. Reconstructed catch by country and taxon, including unreported catch, is on [Sea Around Us](https://www.seaaroundus.org/data/); official production and trade are in [FAO FishStat](https://www.fao.org/fishery/en/fishstat); country-to-country trade is in [UN Comtrade](https://comtradeplus.un.org) (free API key; [docs](https://uncomtrade.org/docs/)). The constraint is that the statistics are coarse (for snappers only 21% of reported landings are recorded to species, and trade codes lump them further: [Cawthorn and Mariani 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5634443/)), so work only on species with their own trade codes, such as eels, bluefin and other tunas, toothfish and cod. For each species and country-year compute supply as catch plus farming plus imports, flag exports above it, and flag gaps between what an exporter reports sending and what its partners report receiving. Goal: a ranked list of species–country flows for importing-country customs and fisheries journalists. Verifier: the method must rediscover the smuggling of European glass eels into East Asian farms documented in [UNODC's World Wildlife Crime Report 2020](https://www.unodc.org/documents/data-and-analysis/wildlife/2020/WWLC20_Chapter_7_Eels.pdf).

### K15 Score every pledge in a government's manifesto

Full Fact's [Government Tracker](https://fullfact.org/government-tracker/) checks by hand 80 of the nearly 300 trackable pledges in Labour's 2024 manifesto; covering all of them, each verdict linked to a primary source, would be the first complete public scorecard of a UK government. The pledges are in the [manifesto](https://labour.org.uk/change/) (every party's manifestos are in the [Manifesto Project corpus](https://manifesto-project.wzb.eu/information/documents/corpus), free registration); the evidence is in Acts and statutory instruments via the [legislation.gov.uk API](https://www.legislation.gov.uk/developer), Hansard, budgets and official statistics. Extract every testable pledge, write down what would count as fulfilled before looking, then link the evidence and give a dated status. Goal: a public pledge-by-pledge table for the 2024 manifesto, updated as evidence arrives, that others can extend to other countries. Verifier: agreement with Full Fact's verdicts on the 80 pledges it covers, and, run on older manifestos, fulfilment rates close to those hand-coded for over 20,000 pledges in 12 countries by the [Comparative Party Pledges Group](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/YJUIBI).

### K16 Predict which aid projects will fail

Knowing early which development projects will fail would let donors fix or stop them, but for the World Bank this has largely been done. Bank economists ([Geli, Kraay and Nobakht 2014](https://openknowledge.worldbank.org/entities/publication/8f9de0e6-4a37-5970-a45a-f01551d46b43)) showed that features observable early in a project predict its final evaluation rating better than staff self-assessments, and Luke Jordan at [MIT GOV/LAB](https://mitgovlab.org/news/predicting-development-aid-outcomes-with-machine-learning/) trained text models on documents from over 20,000 projects (above 70% accuracy) and released the [corpus](https://huggingface.co/datasets/lukesjordan/worldbank-project-documents). The ratings are the Independent Evaluation Group's (<abbr title="Independent Evaluation Group">IEG</abbr>), over 11,300 assessments of 9,600 completed projects on [Finances One](https://financesone.worldbank.org/ieg-world-bank-project-performance-ratings/DS00053), with project metadata from the [projects API](https://search.worldbank.org/api/v2/projects). What is left is a public forward test: score every active World Bank project now and publish the scores. Goal: a dated, public list of predicted outcomes for active projects. Verifier: the IEG ratings as those projects close, which takes years.

### K17 Find standing convictions built on discredited forensic science

Several forensic methods once used to convict people, notably bite-mark matching and microscopic hair comparison, were found scientifically unsupported by the [National Academy of Sciences in 2009](https://nap.nationalacademies.org/catalog/12589/strengthening-forensic-science-in-the-united-states-a-path-forward) and the [President's science advisers (PCAST) in 2016](https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/PCAST/pcast_forensic_science_report_final.pdf), and people convicted on them may still be in prison. The FBI admitted in 2015 that its hair examiners gave [erroneous testimony in over 90% of the trial cases reviewed](https://innocenceproject.org/news/fbi-testimony-on-microscopic-hair-analysis-contained-errors-in-at-least-90-of-cases-in-ongoing-review/), but that review covered FBI examiners only; state-lab hair testimony and bite-mark cases have no national equivalent. Appellate opinions describe the evidence a conviction rested on and are free text: CourtListener's [case-law API](https://wiki.free.law/c/courtlistener/help/api/rest/v4/case-law) and [bulk data](https://wiki.free.law/c/courtlistener/help/api/bulk-data/bulk-legal-data), and historical opinions from the [Caselaw Access Project](https://static.case.law); the [National Registry of Exonerations](https://exonerationregistry.org) tags cases with false or misleading forensic evidence (spreadsheet [on request](https://exonerationregistry.org/form/spreadsheet); see its [hair-comparison report](https://exonerationregistry.org/sites/exonerationregistry.org/files/documents/NREReportMHCAv1.1.pdf)). Search the opinions for bite-mark and hair testimony, classify whether the forensic evidence was central to an affirmed conviction, remove cases already exonerated, and have a human read every hit. Goal: a list of standing convictions whose appellate opinions rest on these methods, with the passages quoted, for innocence organisations in the [Innocence Network](https://innocencenetwork.org) and prosecutors' conviction integrity units. Verifier: run on opinions before a cutoff year, the list must include the convictions later overturned in the Registry.

### K18 Write each state's record-clearing rules as testable code

Expungement means sealing or erasing a criminal record so it stops showing up in background checks for jobs and housing, and the [Paper Prisons Initiative](https://paperprisons.org) estimates 20 to 30 million American adults are eligible but have never applied, largely because each state's rules are intricate and checking them takes a lawyer. The legal map is the Collateral Consequences Resource Center's [50-state restoration profiles](https://ccresourcecenter.org/state-restoration-profiles/), plus each state's statutes; existing tools encode the rules for their own use: Code for America's open-source [Clear My Record](https://www.codeforamerica.org/programs/criminal-legal-system/clear-my-record/) runs automatic clearance in California, Utah and elsewhere, and Paper Prisons models state rules as flow logic ([methodology](https://paperprisons.org/methodology.html)) but publishes results as reports, not code. Write each state's eligibility rules as executable code with a suite of test cases, each a hypothetical record with the expected outcome and the statute clause that decides it. Goal: an open, machine-checkable rule set with tests for every state, for legal-aid organisations and tool builders. Verifier: every test cites its statute, and outputs must agree with existing tools on the same inputs, with each disagreement reviewed by a lawyer; states amend these laws often, so upkeep is the real cost.

### K19 Find the audit recommendations governments keep ignoring

National audit offices (the US <abbr title="Government Accountability Office">GAO</abbr>, the UK <abbr title="National Audit Office">NAO</abbr>, Brazil's <abbr title="Tribunal de Contas da União">TCU</abbr>, India's <abbr title="Comptroller and Auditor General">CAG</abbr>) end every report with recommendations to fix waste or failure, and the story is the ones re-recommended audit after audit while nothing changes. The US tracks its own: the [GAO recommendations database](https://www.gao.gov/reports-testimonies/recommendations-database) lists 5,297 open recommendations (April 2026), exportable as CSV. In the UK, the Public Accounts Committee turns NAO reports into recommendations, and the government answers them in [Treasury Minutes](https://www.gov.uk/government/collections/treasury-minutes) and twice-yearly [progress reports](https://www.gov.uk/government/collections/treasury-minutes-progress-report) (PDFs, sessions 2010–12 onwards); [Elston and Zhang (2023)](https://researchonline.lse.ac.uk/id/eprint/119821/) tracked just the 615 recommendations of 2010–12 through 14 of them by hand. Brazil's [TCU rulings](https://pesquisa.apps.tcu.gov.br) and India's [CAG audit reports](https://cag.gov.in/en/audit-report) are PDFs with no tracker at all. First step: parse every UK progress report into a recommendation-by-recommendation table and reproduce Elston and Zhang's coding, then extend it to all sessions and match recommendations that recur in later NAO reports. Goal: a public status table and a list of recommendations repeated in three or more successive audits. Verifier: the dated document that closes or reopens each item, and Elston and Zhang's hand coding for 2010–12.

## L Improving documents, with adoption as the verifier

Most consultation documents got a week of a tired analyst's time. Some venues have a built-in scoreboard: the comment is adopted or it isn't.

### L1 Proposed federal rules

Get your comment answered in a final federal rule: an agency must consider and respond to significant comments ([Perez v. Mortgage Bankers](https://www.law.cornell.edu/supremecourt/text/13-1041)), and it does so in the final rule's preamble, so whether your point changed the rule is printed in the Federal Register. Every proposed rule, its docket and every comment filed on it is on [regulations.gov](https://www.regulations.gov), and the [regulations.gov API](https://open.gsa.gov/api/regulationsgov/) serves documents, dockets and comments with a free [api.data.gov key](https://api.data.gov/signup/). Start by pulling proposed rules whose comment period is still open and reading the regulatory impact analysis in each docket for cost-benefit arithmetic that doesn't add up, definitions that contradict the enabling statute, citations to superseded sections and compliance deadlines that cannot be met; the human decides which findings are real and writes the comment. Goal: comments filed on open dockets, each with its docket number and tracking number, and, months later, the preamble passages of the final rules that respond to them. Verifier: the preamble either concedes the point and changes the text or rebuts it; backtest first on closed dockets by checking whether the agent finds the errors that other commenters raised and the agency conceded.

### L2 Find the broken arithmetic in environmental impact statements

A federal highway, pipeline or dam is justified by an <abbr title="Environmental Impact Statement">EIS</abbr> hundreds of pages long, modelling traffic, emissions and water, and an error caught during the comment period can still change what gets built. [EPA's EIS database](https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search) records every EIS since 1987, holds the PDFs since October 2012 and EPA's own review letters since 2001, so draft statement, expert critique and final statement form a matched corpus. Start by running the agent over drafts EPA commented on and checking whether it finds the inconsistent baselines, mis-stated model inputs and wrongly dismissed alternatives that EPA's reviewers found; only then file on an open draft. Goal: a comment filed on an open draft EIS whose point is answered, and ideally fixed, in the final EIS's response to comments. Verifier: weak; agencies routinely reply "comment noted", and since <abbr title="Council on Environmental Quality">CEQ</abbr> [removed its NEPA regulations](https://www.federalregister.gov/documents/2025/02/25/2025-03014/removal-of-national-environmental-policy-act-implementing-regulations) in April 2025 the duty to respond rests on each agency's own procedures, so the backtest against EPA's letters is the only clean check.

### L3 Standards errata

When two implementations of the same protocol read the same input differently, the result is interoperability bugs and sometimes exploits (HTTP request smuggling is the famous case), and the lasting fix is to the spec sentence that allows both readings. The [RFC errata search](https://errata.rfc-editor.org/search/) lists every report filed against an <abbr title="Request for Comments, the IETF's standards series">RFC</abbr> with its status (Reported, Verified, Held for Document Update, Rejected; the [Verified ones](https://errata.rfc-editor.org/search/?status=verified) show what gets accepted), while [Ethereum EIPs](https://eips.ethereum.org), [Bitcoin BIPs](https://github.com/bitcoin/bips) and W3C specs take fixes as pull requests on GitHub. Method: pick a protocol with several open-source implementations, feed them identical edge-case inputs, and trace each disagreement to the spec text responsible. Goal: errata filed with the RFC Editor, or pull requests on the spec repository, each citing the implementations that diverge. Verifier: strong and public, since the erratum's status changes to Verified or Held for Document Update or the pull request is merged; the weakness is payoff, because accepted errata are usually small and rarely noticed outside the working group.

### L4 Local planning consultations

In England a planning decision must accord with the council's own adopted development plan unless material considerations indicate otherwise, so an objection showing that an application breaches a named plan policy is one the council has to deal with. [PlanIt](https://www.planit.org.uk/api/) aggregates application records from UK planning authorities into a free API with no registration; the application documents and the local plan sit on each council's own portal, so the agent has to scrape council by council. Goal: objections filed on live applications, each citing the plan policy breached. Adoption is readable in the planning officer's report to committee and the decision notice, and for refusals that go to appeal the Planning Inspectorate's [Appeals Casework Portal](https://acp.planninginspectorate.gov.uk/) records an independent ruling on plan conflict. Verifier: weak; the officer's report shows whether your point was taken up but not whether the outcome was better, and "missed Pareto improvements" have no check at all.

### L5 Dead and inconsistent statutory cross-references

Every body of law has sections pointing at provisions repealed or renumbered years ago and terms defined one way in one chapter and another way in the next; a complete, checked list of them across a whole code is exactly what legislative drafters need for their technical-corrections bills. The data is free and structured: the whole [US Code as XML](https://uscode.house.gov/download/download.shtml) (one zip per title, or all titles in one), the [eCFR API](https://www.ecfr.gov/developers/documentation/api/v1) for federal regulations, the [legislation.gov.uk API](https://www.legislation.gov.uk/developer) with point-in-time versions of UK statutes, and EU law through [EUR-Lex web services](https://eur-lex.europa.eu/content/help/data-reuse/webservice.html) or the Publications Office's [Cellar SPARQL endpoint](https://publications.europa.eu/webapi/rdf/sparql). Parse every cross-reference, resolve it against the current text, and flag targets that are repealed, renumbered, missing or about something unrelated, plus defined terms whose definitions conflict; the US Code's own editorial notes reading "So in original. Probably should be ..." are an answer key the parser should rediscover before its new finds are trusted. The EU version is stranger: the 24 language texts of a regulation are equally authentic and sometimes disagree on a number, a date or a negation, so align them article by article, compare every figure, date, cross-reference and negation, and have a bilingual human check each hit. Goal: a published list of broken references and language divergences, sent to the relevant drafting office or EU institution. Verifier: fixes enacted in technical-corrections acts or published as corrigenda; for the EU, the corrigenda EUR-Lex already publishes (CELEX numbers ending R(01), R(02) and so on, such as the [2018 GDPR corrigendum](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679R(02))) are ground truth for past divergences, so run the checker on the uncorrected text and count how many it catches.

### L6 Patent prior-art hunting

Patents held by firms that exist only to sue are often invalid over prior art nobody bothered to find, and one old manual, paper or product listing dated before the claims can sink them; [Unified Patents' PATROLL contests](https://patroll.unifiedpatents.com/contests) pay cash bounties, commonly $2,000, for the best prior art against a named patent, with [past winners published](https://www.unifiedpatents.com/insights/category/PATROLL). Search [Google Patents](https://patents.google.com), its [BigQuery public dataset](https://console.cloud.google.com/marketplace/product/google_patents_public_datasets/google-patents-public-data) for full-text search at scale, and the USPTO's [bulk data](https://data.uspto.gov/bulkdata) of granted and published applications; the winning art is often non-patent literature (manuals, standards, archived web pages), which is where an agent's patience pays. Method: split each claim into its elements, search for documents dated before the priority date that disclose every element, and chart claim against reference element by element, which is the form a contest entry takes. Goal: a PATROLL bounty win, or a third-party pre-issuance submission under [35 U.S.C. 122(e)](https://www.law.cornell.edu/uscode/text/35/122) on a pending application that the examiner then cites. Verifier: the contest's judging, and downstream whether the patent's claims are cancelled, visible in the <abbr title="Patent Trial and Appeal Board">PTAB</abbr> [trial records](https://data.uspto.gov/ptab) for patents that reach inter partes review.

### L7 Improper Orange Book listings

A drug company that lists a patent in the <abbr title="US Food and Drug Administration">FDA</abbr>'s Orange Book, the official list of approved drugs and the patents claimed to cover them, can block generics: if a generic challenges a listed patent and the brand sues, FDA approval of the generic is automatically stayed for 30 months, so an improper listing keeps a cheaper inhaler or injection off the market. The listing criteria are statutory: under [21 U.S.C. 355(b)(1)](https://www.law.cornell.edu/uscode/text/21/355) a patent must claim the drug substance, the drug product or a method of using it, and the Federal Circuit held in Teva v. Amneal (December 2024) that a patent claiming only device parts, such as an inhaler's dose counter, without the active ingredient does not qualify. The FTC disputed [100+ listings in November 2023](https://www.ftc.gov/news-events/news/press-releases/2023/11/ftc-challenges-more-100-patents-improperly-listed-fdas-orange-book), [300+ in April 2024](https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-expands-patent-listing-challenges-targeting-more-300-junk-listings-diabetes-weight-loss-asthma) and [200+ in May 2025](https://www.ftc.gov/news-events/news/press-releases/2025/05/ftc-renews-challenge-more-200-improper-patent-listings), producing delistings across 22 brand-name products, but only for asthma, <abbr title="chronic obstructive pulmonary disease">COPD</abbr>, diabetes, weight-loss and epinephrine products. Start from the FDA's [Orange Book data files](https://www.fda.gov/drugs/drug-approvals-and-databases/orange-book-data-files), a monthly zip of tilde-delimited text whose patent file lists every listed patent with its drug-substance, drug-product and use-code flags, then pull each patent's claims from [Google Patents](https://patents.google.com) and test them against the criteria. Goal: a public list of listed patents that fail the criteria, each with the claim analysis showing why. Verifier: the FTC's challenged patents are a backtest the screen must reproduce, and afterwards whether flagged listings are delisted (the patent file carries a delist-request flag) or challenged by the FTC or a generic maker.

## M Software

### Tools that unlock the archives

#### M1 Open handwritten-text recognition for historical hands

An open model that reads Kurrent, secretary hand, early Arabic and Ethiopic as well as a trained archivist would turn millions of scanned but unsearchable manuscript pages into text; today the most-used tool, [Transkribus](https://www.transkribus.org), is a closed, paid service. The open parts exist. The [HTR-United catalogue](https://htr-united.github.io/catalog.html) indexes openly licensed line-level ground truth, including a [9,317-line nineteenth-century Kurrent set](https://zenodo.org/records/17252677), the [READ 2016 Ratsprotokolle set](https://zenodo.org/records/218236) (Early Modern German, the ICFHR 2016 competition benchmark), the [Muharaf Arabic manuscripts](https://zenodo.org/records/11492215) (1,216 public pages) and [HHD-Ethiopic](https://huggingface.co/datasets/OCR-Ethiopic/HHD-Ethiopic) (about 80,000 lines, with a separate eighteenth-century test set); open engines include [Kraken](https://kraken.re), [PyLaia](https://gitlab.teklia.com/atr/pylaia), [Loghi](https://github.com/knaw-huc/loghi), [TrOCR](https://huggingface.co/microsoft/trocr-base-handwritten) and the open-weight vision-language model [CHURRO](https://huggingface.co/stanford-oval/churro-3B). Devanagari is the gap: historical ground truth is scarce and the [UniLipi](https://ihdia.iiit.ac.in/unilipi/) manuscript corpus is announced but not yet released. Start by fine-tuning one engine on the Kurrent and READ training splits and scoring it on their test lines, then repeat script by script. Goal: open weights for each script, published with their training data on HTR-United, each matching or beating the best published score on that script's benchmark. Verifier: <abbr title="Character Error Rate">CER</abbr> on the held-out test splits of those published datasets.

#### M2 Turn IMSLP's 880,000 scanned scores into machine-readable music

Nearly all public-domain sheet music is online only as pictures: [IMSLP](https://imslp.org) holds about 880,000 scores as scanned PDFs, and a machine-readable edition would let anyone search, play back, analyse or re-engrave them. <abbr title="Optical Music Recognition">OMR</abbr> has open tools that few people use: [Audiveris](https://github.com/Audiveris/audiveris) is the mature engine, [Legato](https://huggingface.co/guangyangmusic/legato) (2025) is an open-weight model that transcribes whole typeset pages into ABC notation, and training data is catalogued on the [OMR datasets list](https://apacha.github.io/OMR-Datasets/), including [DoReMi](https://github.com/steinbergmedia/DoReMi) and the handwritten [MUSCIMA++](https://ufal.mff.cuni.cz/muscima). The ready-made test set is [OpenScore Lieder](https://github.com/OpenScore/Lieder): over 1,200 songs hand-transcribed and proofread, each linked to the IMSLP scan it was made from and many to commercial recordings, with [OpenScore String Quartets](https://github.com/OpenScore/StringQuartets) as a second set. Start by running both engines over the Lieder source scans and diffing their output against the transcriptions. Goal: a pipeline that turns an IMSLP scan into MusicXML good enough to publish unedited, with a per-score confidence, run over the whole library. Verifier: note-level error rate against the OpenScore transcriptions and, for scores without one, alignment against a recording of the same piece.

#### M3 Extract the tables from scanned government statistical annuals

The prices, wages, output and population of most countries before about 1960 survive only as printed tables in statistical abstracts, census volumes and trade returns, and economic history is still bottlenecked on transcribing them by hand, because <abbr title="Optical Character Recognition">OCR</abbr> reads the prose and garbles the tables. Two runs make a good start. The US Census Bureau hosts every [Statistical Abstract of the United States](https://www.census.gov/library/publications/time-series/statistical_abstracts.html) since 1878 as PDFs, and the [Statistical Abstract for the United Kingdom](https://onlinebooks.library.upenn.edu/webbin/serial?id=statabsuk) (83 numbers, 1840 to 1938) is scanned almost completely on HathiTrust, alongside the [abstract for the colonies](https://catalog.hathitrust.org/Record/100779995) and colonial Blue Books such as [Hong Kong's, 1914 to 1938, on the Internet Archive](https://archive.org/details/hongkong-blue-book-1930). Each UK abstract reprints fifteen years of figures, so most numbers appear in several independently typeset editions. Detect tables with [Table Transformer](https://github.com/microsoft/table-transformer) or a vision-language model, read the cells, and export each with its page image and coordinates. Goal: a citable, cell-level database of one complete run, starting with the UK abstract. Verifier: printed row and column totals must add up, and the same figure read from overlapping editions must agree.

#### M4 Speech recognition for dysarthric and accented speech

Voice interfaces fail worst for the people who most need them, those whose speech is affected by Parkinson's, <abbr title="Amyotrophic Lateral Sclerosis">ALS</abbr>, cerebral palsy, Down syndrome or stroke, and a live competition with a prize now rewards fixing that. The large dataset needs a signed data use agreement: the [Speech Accessibility Project](https://speechaccessibilityproject.beckman.illinois.edu/conduct-research-through-the-project) at Illinois has recordings from about 2,000 people, while Google's [Project Euphonia](https://sites.research.google/euphonia/about/) corpus is not shared outside Google at all. Free to download today are [TORGO](http://www.cs.toronto.edu/~complingweb/data/TORGO/torgo.html) (dysarthric and control speakers) and, for accents and languages commercial systems ignore, Mozilla's [Common Voice](https://commonvoice.mozilla.org/en/datasets). Start by fine-tuning an open Whisper model on TORGO with some speakers held out, then apply for the SAP data and enter the [second SAP challenge](https://speechaccessibilityproject.beckman.illinois.edu/conduct-research-through-the-project/speech-accessibility-project-challenge-competition) (submissions close 24 October 2026). Goal: a published open model that beats the challenge baseline; in the [2025 round](https://arxiv.org/abs/2507.22047) the best team reached 8.11% word error rate against a Whisper-large-v2 baseline. Verifier: word error rate on the challenge's held-out test sets, scored by the organisers, or on held-out TORGO speakers for anyone without the agreement.

#### M5 Georeference the world's scanned historical maps automatically

This is a tool, not a discovery: most scanned historical maps cannot be overlaid on a modern map or measured until someone clicks matching control points by hand, and every map-reading project downstream waits on that. Volunteers have already done tens of thousands, which gives both training data and a test: [Allmaps](https://allmaps.org) publishes every georeference made in its editor as open data, a [200 MB file of about 64,000 maps](https://files.allmaps.org/maps.json) with their control points, and crowd tools such as [Map Warper](https://mapwarper.net) and the [Old Maps Online Georeferencer](https://www.georeferencer.com) hold more; [MapReader](https://github.com/maps-as-data/MapReader) then classifies patches of georeferenced sheets at scale, and [Smapshot](https://smapshot.heig-vd.ch) crowdsources the harder sibling problem of placing historic photographs. Train a matcher that finds control points between a scanned map and [OpenStreetMap](https://www.openstreetmap.org) (road junctions, coastlines, place-name labels read by OCR), then run it on collections not yet georeferenced, such as the [David Rumsey Map Collection](https://www.davidrumsey.com). Goal: Allmaps georeference annotations, with an error estimate, for every map the matcher places confidently. Verifier: median control-point error in metres against the volunteers' own points on Allmaps maps held out from training.

### Open replacements in professional niches (incumbent → open state → how a developer proves it's better)

_Guard against slop:_ every replacement ships with the incumbent's verification cases passing, a documented workflow a practitioner has actually used for a real job, and a maintainer who commits to a year.

#### M6a Open steel member design checks, proven on AISC's worked examples

What engineers pay [ETABS](https://www.csiamerica.com/products/etabs), [RISA](https://risa.com) and [Tekla](https://www.tekla.com) for is code checking (does this beam satisfy the steel specification?), and no open analysis program ships it. The verification suite is free: AISC's [v16.0 Manual Companion](https://www.aisc.org/aisc/publications/steel-construction-manual/manual-companion-for-16th-edition/) works design examples for the 2022 steel specification with every intermediate number printed. Member checks (tension, compression, flexure, shear, combined loading) on top of [OpenSees](https://opensees.berkeley.edu) results are a summer for a student and an agent; connections, seismic provisions, concrete and other national codes are years more, and nobody should rely on it until a licensed engineer has. Goal: an open library that reproduces every member-design example in the Companion. Verifier: the Companion's printed results, to the printed precision.

#### M6b Reproduce SAP2000's verification examples in OpenSees

The open solvers [OpenSees](https://opensees.berkeley.edu) (the research standard for nonlinear and earthquake analysis, scripted, no GUI), [Code_Aster](https://code-aster.org) and [CalculiX](http://www.calculix.de) can already do the mechanics of [SAP2000](https://www.csiamerica.com/products/sap2000); what is missing is public evidence that they give the same answers. CSI publishes its [verification examples](https://web.wiki.csiamerica.com/wiki/spaces/doc/pages/1245534/Verification+examples) problem by problem (frames, shells, links, dynamics), each against an independent hand or textbook solution; the [NAFEMS benchmarks](https://www.nafems.org/publications/) are a second suite but are sold, not free. Translating each CSI example into an OpenSeesPy script is a summer project; a practitioner-grade GUI is not. Goal: a public repository of the CSI examples reproduced in OpenSees, with every discrepancy explained. Verifier: agreement with the independent solutions CSI prints.

#### M7 River and flood hydraulics

[HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/), the basis of US flood maps, is free but closed, and it now ships [Linux compute engines](https://www.hec.usace.army.mil/confluence/rasdocs/rasum/latest/working-with-hec-ras/linux-computation-engines), so the old case for replacing it (Windows-only, no cloud) has gone; commercial rivals are [MIKE](https://www.dhigroup.com/technologies/mikepoweredbydhi) and [TUFLOW](https://www.tuflow.com). Open 2D solvers such as [LISFLOOD-FP](https://www.bristol.ac.uk/geography/research/hydrology/models/lisflood/) and ANUGA were tested in the Environment Agency's [2D benchmarking exercise](https://assets.publishing.service.gov.uk/media/6033a943d3bf7f721f4b0d49/_SC120002_Benchmarking_2D_hydraulic_models_Report.pdf), whose cases HEC also used to [benchmark HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/documentation/RD-51_Benchmarking_2D.pdf). What is left is an open reader and solver for HEC-RAS's own project files: steady 1D flow (the textbook standard-step method) is a summer's work, unsteady 1D and 2D parity several years. Goal: an open solver that loads HEC-RAS example projects and reproduces their water-surface profiles. Verifier: agreement to the centimetre on the example projects offered on the [HEC-RAS download page](https://www.hec.usace.army.mil/software/hec-ras/download.aspx), then the Environment Agency benchmark cases.

#### M8 Open statistics for regulated drug submissions

[SAS](https://www.sas.com)'s hold on pharmaceutical trials rests on validation rather than features, and that hold is already loosening: the R Consortium's [submission pilots](https://rconsortium.github.io/submissions-wg/pilot3.html) have taken R-generated analysis datasets and tables through FDA review using [pharmaverse](https://pharmaverse.org) packages, with package risk assessed by the [R Validation Hub](https://pharmar.org), and the code is public ([Pilot 3](https://github.com/RConsortium/submissions-pilot3-adam-to-fda)). For everyday statistics, [jamovi](https://www.jamovi.org) and [JASP](https://jasp-stats.org) already cover most of what [SPSS](https://www.ibm.com/products/spss), [Stata](https://www.stata.com) and [Prism](https://www.graphpad.com) are used for. This is a funded industry effort well under way; an undergraduate can contribute packages but will not move it much. Goal, if taken on: reproduce a further public trial's full table set in R as an open worked example. Verifier: the consortium's FDA-reviewed pilot outputs on the CDISC pilot study data.

#### M9 Open technology-assisted review for legal e-discovery

In litigation each side must find every relevant document among millions of emails; [Relativity](https://www.relativity.com) and [Everlaw](https://www.everlaw.com) sell the ranking-and-review workflow, while OCCRP's open [Aleph](https://aleph.occrp.org) is built for investigative search, not litigation-grade review. The ranking core is already open and tested: Cormack and Grossman's continuous-active-learning baseline was issued to every participant in TREC's [Total Recall track](https://trec.nist.gov/pubs/trec24/papers/Overview-TR.pdf), and the [TREC Legal track data](https://trec.nist.gov/data/legal.html) gives topics and relevance judgements over the [EDRM Enron email set](https://edrm.net/resources/data-sets-2/edrm-enron-email-data-set/). The summer-sized question is whether a language model in the loop beats that baseline on recall per document reviewed; turning the answer into a defensible product (processing, privilege logs, audit trails) is a multi-year software project. Goal: a published comparison of LLM-assisted review against the baseline on the TREC Legal topics. Verifier: recall and precision against the TREC relevance judgements, under the track's protocols.

#### M10 Faster word prediction for augmentative and alternative communication

People who cannot speak talk through <abbr title="Augmentative and Alternative Communication">AAC</abbr> symbol boards and eye-gaze keyboards, and every keystroke saved is conversation regained. Incumbents are paid: [Tobii Dynavox](https://www.tobiidynavox.com/pages/td-snap) and [Proloquo2Go](https://www.assistiveware.com/products/proloquo2go); the open [Cboard](https://www.cboard.io) and [AsTeRICS Grid](https://grid.asterics.eu) (symbol boards) and [OptiKey](https://www.optikey.org) (eye-gaze typing) work but have basic prediction. An offline verifier exists for prediction: Keith Vertanen's [conversational AAC corpus](https://aactext.org/imagine/) and [COMM2 test set](https://aactext.org/comm2/) measure keystroke savings in simulation, with published [AAC-tuned language models](https://osf.io/ajm7t/) as baselines. Putting a small on-device language model into OptiKey or Cboard and scoring it is a summer; showing it helps real users needs budgeted time with AAC users and their therapists. Goal: an open predictor, merged upstream, that beats the published AAC models on keystroke savings. Verifier: keystroke savings on COMM2, then words per minute and error rate in a small user study.

#### M11 Mechanical CAD

[SolidWorks](https://www.solidworks.com), [Inventor](https://www.autodesk.com/products/inventor/overview) and [Fusion](https://www.autodesk.com/products/fusion-360/overview) dominate; [FreeCAD](https://www.freecad.org) 1.0 (November 2024) fixed its worst flaw, topological naming, and [OpenSCAD](https://openscad.org) serves code-first users, but assemblies, drawings and fillet robustness in the underlying OpenCascade kernel still lag. There is no incumbent verification suite; the nearest public benchmark is the [Fusion 360 Gallery dataset](https://github.com/AutodeskAILab/Fusion360GalleryDataset), 8,625 human design sequences (sketch and extrude only) that can be replayed through FreeCAD's kernel and compared with the shipped reference geometry. Building that replay harness is a summer and gives FreeCAD a regression suite; closing the usability gap with SolidWorks is a multi-year, many-developer project, not an agent task. Goal: a public replay harness and failure report for FreeCAD. Verifier: volume and surface agreement with the dataset's reference solids, and a failure rate that falls from release to release.

#### M12 Electronics and chip design

Board design is largely solved in the open: [KiCad](https://www.kicad.org) is used professionally in place of [Altium](https://www.altium.com). For chips, [OpenROAD](https://theopenroadproject.org) takes designs from RTL to layout in place of [Cadence](https://www.cadence.com) tools, and [Tiny Tapeout](https://tinytapeout.com/chips/) has put many hobbyist designs through it onto real silicon, which is the nearest thing to a verification suite: taped-out designs measured on the bench. For RF, [openEMS](https://www.openems.de) is a capable field solver, but there appears to be no public set of measured S-parameters on published test structures to check it against. All three are large, funded or mature projects; an undergraduate would be a contributor, not the person who replaced an incumbent.

#### M13 Finite-element analysis and CFD

The open counterparts to [Ansys](https://www.ansys.com), [Abaqus](https://www.3ds.com/products/simulia/abaqus), [Fluent](https://www.ansys.com/products/fluids/ansys-fluent) and [STAR-CCM+](https://plm.sw.siemens.com/en-US/simcenter/fluids-thermal-simulation/star-ccm/), namely [CalculiX](http://www.calculix.de), [Elmer](https://www.elmerfem.org) and [OpenFOAM](https://www.openfoam.com), are numerically capable and brutal to use; the gap is meshing, set-up and post-processing, not solvers. Verification cases exist: NASA's [Turbulence Modeling Resource](https://tmbwg.github.io/turbmodels/) supplies grids and reference results for standard flows, and [NAFEMS](https://www.nafems.org/publications/) sells structural benchmarks. What remains is product and usability work measured by timed studies with engineers, which is years, not a summer. Goal: a set-up front end with which a new user reproduces a fixed set of NASA cases within a set time. Verifier: the NASA reference results, then time-to-result in a user study.

#### M14 Chemical process simulation

[DWSIM](https://dwsim.org) is a mature, free counterpart to [Aspen Plus](https://www.aspentech.com/en/products/engineering/aspen-plus) and [HYSYS](https://www.aspentech.com/en/products/engineering/aspen-hysys). The verification suite already exists and is growing: FOSSEE's [flowsheeting project](https://dwsim.fossee.in/flowsheeting-project/completed-flowsheet) has students take flowsheets from textbooks, papers and other simulators, solve them in DWSIM and compare, with over 270 completed and downloadable. That is exactly undergraduate-sized work, but FOSSEE already organises and credits it; an agent speeds it up rather than creating something new. Goal: find the published flowsheets where DWSIM disagrees with the reference and trace each gap to a property package or unit model. Verifier: agreement with the published stream tables.

#### M15 Open lens design software

[Zemax OpticStudio](https://www.ansys.com/products/optics/ansys-zemax-opticstudio) and [CODE V](https://www.keysight.com/us/en/products/software/optical-solutions-software/optical-design-solutions/codev.html) own professional lens design, and the open tools are further along than their reputation: [ray-optics](https://github.com/mjhoptics/ray-optics) and [Optiland](https://optiland.readthedocs.io) trace, analyse and optimise, and Optiland imports Zemax `.zmx`, CODE V `.seq` and OSLO files. The verifier is Zemax's own sample files and lens prescriptions from expired patents: reproduce OpticStudio's spot sizes, MTF and merit-function values, which needs one OpticStudio licence (a university lab's will do) to generate the reference outputs. The comparison suite is a summer; matching OpticStudio's optimisation and tolerancing is multi-year. Goal: a public cross-check of Optiland against OpticStudio on every sample file. Verifier: agreement of ray-trace results to the precision OpticStudio reports.

#### M16 Room acoustics simulation

[Odeon](https://odeon.dk) and [EASE](https://www.afmg.eu/en/ease) predict how a hall or classroom will sound before it is built; the open [I-Simpa](https://i-simpa.ifsttar.fr) and [pyroomacoustics](https://github.com/LCAV/pyroomacoustics) are research-grade. A real verifier exists: the [GRAS database](https://depositonce.tu-berlin.de/items/version/63) from the international round robin on room acoustical simulation gives eleven scenes with geometry, material data and measured impulse responses, and the round robin used it to score commercial simulators. Running the open tools on all eleven scenes is a summer; matching the best commercial results is research. Goal: open-simulator results on every GRAS scene, published beside the round robin's numbers. Verifier: error in reverberation time and clarity against the measured impulse responses, in just-noticeable differences.

#### M17 Power-system analysis

Open tools are already good: [pandapower](https://www.pandapower.org), [PyPSA](https://pypsa.org) and EPRI's [OpenDSS](https://sourceforge.net/projects/electricdss/) are widely used in research and planning alongside [PSS/E](https://www.siemens.com/global/en/products/energy/grid-software/planning/pss-software/pss-e.html) and [PowerFactory](https://www.digsilent.de/en/powerfactory.html), and are checked against the [IEEE PES test feeders](https://cmte.ieee.org/pes-testfeeders/). There is no replacement gap here that an undergraduate could close in a summer; the verifier (the test feeders) is already in routine use.

#### M18 Transport modelling

[SUMO](https://eclipse.dev/sumo/), [MATSim](https://www.matsim.org) and [AequilibraE](https://www.aequilibrae.com) are mature open counterparts to [VISSIM](https://www.ptvgroup.com/en/products/ptv-vissim) and Bentley's Cube and EMME (now [OpenPaths](https://www.bentley.com/products/openpaths/)). Public test data exists: the [Transportation Networks for Research](https://github.com/bstabler/TransportationNetworks) benchmark networks with demand, and the open, calibrated [MATSim Berlin scenario](https://github.com/matsim-scenarios/matsim-berlin). Capability is not the obvious gap, and a calibrated model of one more city is a consultancy deliverable rather than a finding. Verifier, if pursued: modelled against observed counts on a published city dataset.

#### M19 Civil road and rail alignment design

[Civil 3D](https://www.autodesk.com/products/civil-3d/overview) dominates alignment design (the horizontal curves, transitions and vertical profile a road or railway follows), and the open alternative is only now appearing: [Saikei Civil](https://saikeicivil.org/) is adding IFC 4.3 alignment and corridor authoring to [Bonsai](https://bonsaibim.org/), the Blender-based open BIM tool. The verifier is buildingSMART's own: the [test cases for IFC 4.3 Alignment-based Reference View certification](https://github.com/bSI-RailwayRoom/MVD-Infra-Test-Instructions), each with instructions, data and validation criteria. Passing them is a plausible summer contribution; a tool engineers use for real jobs, with national design-standard checks, is multi-year. Goal: Saikei and Bonsai passing every alignment certification case. Verifier: buildingSMART's validation criteria for each case.

#### M20 Photogrammetry

Open tools are close to the incumbents: [COLMAP](https://colmap.github.io), [Meshroom](https://alicevision.org) and [OpenDroneMap](https://www.opendronemap.org) against [Metashape](https://www.agisoft.com/) and RealityCapture, which Epic [made free](https://www.cgchannel.com/2024/04/realitycapture-1-4-makes-the-photogrammetry-app-free-to-indie-artists/) in 2024 for anyone earning under $1 million a year (now [RealityScan](https://www.realityscan.com/license)). Accuracy benchmarks already rank them: the [ISPRS benchmarks](https://www.isprs.org/resources/datasets/benchmarks/) (registration required for some data), [ETH3D](https://www.eth3d.net) and [Tanks and Temples](https://www.tanksandtemples.org). This is an active, well-funded research field; there is no replacement gap for an undergraduate to claim.

#### M21 NMR processing that reproduces TopSpin

Chemists process NMR spectra in Bruker's [TopSpin](https://www.bruker.com/en/products-and-solutions/mr/nmr-software/topspin.html) or [MestReNova](https://mestrelab.com); open tools are mature for mass spectrometry ([OpenMS](https://openms.de), [MZmine](https://mzmine.github.io)) and still catching up for NMR ([NMRium](https://www.nmrium.org), [nmrglue](https://www.nmrglue.com)). NMR has a built-in verifier: a Bruker dataset normally ships TopSpin's processed spectrum and parameters in its `pdata` folder beside the raw FID, and open repositories such as [nmrXiv](https://nmrxiv.org) hold such deposits. An open pipeline that reproduces TopSpin's processing (apodisation, phasing, baseline, referencing, peak picking) from the raw FID is a summer for a student and an agent. Goal: an open processor, contributed to nmrglue or NMRium, that matches TopSpin across a public corpus. Verifier: identical spectra and peak lists against the vendor-processed `pdata` of the same raw files.

#### M22 Music notation and the orphaned Finale files

[Finale](https://www.finalemusic.com) was discontinued in 2024, stranding decades of `.musx` files, while [MuseScore](https://musescore.org) is already a credible replacement for Finale and [Sibelius](https://www.avid.com/sibelius) for most users. The open job is migration: [Denigma](https://denigma.robertgpatterson.com/), built on the open [musxdom](https://github.com/rpatters1/musxdom) parser, and [musx2mxl](https://github.com/joris-vaneyghen/musx2mxl) convert `.musx` to MusicXML. The verifier is Finale's own MusicXML export for files where one exists; for engraving quality there appears to be no public test suite built on Gould's _Behind Bars_, so writing one would be a deliverable, not a check. Fixing converter bugs is summer-sized; out-engraving LilyPond or Dorico is not. Goal: a converter whose output matches Finale's own export, with no musical differences, across a public corpus of Finale files.

#### M23 Open hearing-aid processing

Hearing aids are now sold over the counter in the US, yet the fitting and signal processing inside them are proprietary to each manufacturer; the open research platform is [openMHA](https://www.openmha.org), with open hardware from [Tympan](https://shop.tympan.org/). The verifier is ready-made: the [Clarity Enhancement Challenge](https://claritychallenge.org) publishes scenes, listener audiograms and a [baseline](https://claritychallenge.org/docs/cec3/task_1/cec3_task1_baseline) (NAL-R fitting scored with the HASPI intelligibility metric), with the [CEC3 data on Zenodo](https://zenodo.org/records/17063943). Porting a strong Clarity entry to run in real time on openMHA or Tympan is a summer; clinical validation with hearing-impaired listeners is a separate, longer job. Goal: an open, real-time processing chain that beats the CEC3 baseline. Verifier: HASPI on the CEC3 evaluation set, then speech-in-noise tests with listeners.

#### M24 Small-business accounting and payroll

[GnuCash](https://www.gnucash.org) and [ERPNext](https://frappe.io/erpnext) are mature open counterparts to [QuickBooks](https://quickbooks.intuit.com), [Xero](https://www.xero.com) and [Sage](https://www.sage.com). The one concrete verifier is tax filing: HMRC's [developer sandbox](https://developer.service.hmrc.gov.uk/api-documentation) lets developers test Making Tax Digital VAT and income-tax submissions end to end. This is product work with legal liability and nothing to discover. Goal, if pursued: GnuCash filing UK VAT returns that pass the sandbox tests.

#### M25 Seismic interpretation of drowned landscapes

Mapping buried river valleys and coastlines on continental shelves drowned since the last ice age, as Gaffney did for Doggerland from oil-industry 3D seismic, needs seismic interpretation software, and the incumbent is SLB's [Petrel](https://www.software.slb.com/products/petrel). The open [OpendTect](https://www.dgbes.com/software/opendtect) already does the job (open-source core, commercial plugins) and comes with a free demonstration survey, the Dutch [F3 block](https://terranubis.com/datainfo/F3-Demo-2023), so the software is not the bottleneck. The one tool contribution with a real check is automatic horizon picking, which can be scored against the published [F3 interpretation labels](https://zenodo.org/records/1471548). Verifier: agreement with those hand-interpreted horizons.

#### M26 Hygrothermal (heat and moisture) simulation of building walls

Whether a wall rots depends on moisture moving through it, and designers check with [WUFI](https://wufi.de) or Delphin from [TU Dresden](https://tu-dresden.de/bu/architektur-landschaft/ibk/software), both closed; the open side is essentially [OpenHAM](https://github.com/ghorwin/OpenHAM), a one-dimensional reference implementation of the EN 15026 transport equations. Two verifiers exist: the numerical [HAMSTAD benchmarks 1 to 5](https://simquality.org/hygrothermal-component-simulation/hamstad-benchmarks-1-5/) and a new empirical set, the [56 instrumented timber-frame wall experiments on Zenodo](https://doi.org/10.5281/zenodo.17778562), which ship boundary conditions and humidity-dependent material properties as JSON. A 1D solver that passes HAMSTAD and predicts those walls is within a summer for a student and an agent; two-dimensional details, driving rain and a usable interface take longer. Goal: an open solver whose predictions for all 56 walls are published with error statistics. Verifier: HAMSTAD reference solutions and mass and energy conservation, then temperature and humidity in walls held out from calibration.

### Legacy and orphaned software

#### M27a Free lab instruments from their Windows XP control PCs

Working mass spectrometers, chromatographs and other instruments sit in lab corners tethered to Windows XP PCs because the vendor's control software runs nowhere else, and when that PC dies the instrument becomes scrap. The instrument usually talks over serial, GPIB or USB, so its protocol can be captured from the old PC and reimplemented as a driver in an open framework such as [PyMeasure](https://pymeasure.readthedocs.io), with [Wine](https://www.winehq.org) or [ReactOS](https://reactos.org) as stopgaps. There is no public registry of such machines; targets come from university core facilities and instrument user forums. Goal: an open, upstreamed control driver and documented protocol for one instrument model. Verifier: the same sample run through the old software and the new driver gives identical settings and data files.

#### M27b Add orphaned radios to CHIRP

Handheld and mobile radios are programmed (frequencies, tones, channel names) through vendor software that often runs only on old Windows; [CHIRP](https://chirpmyradio.com/projects/chirp/wiki/Home) is the open, cross-platform programmer and takes requests for unsupported models on its [issue tracker](https://chirpmyradio.com/projects/chirp/issues). Pick a requested model, capture the vendor software's serial traffic as it reads and writes the radio, and write a driver against CHIRP's [source](https://github.com/kk7ds/chirp). The payoff is modest and practical, not a headline. Goal: a driver merged into CHIRP. Verifier: a memory image read and written by CHIRP loads in the vendor software with identical channels, and CHIRP's driver tests pass.

#### M28 Matching decompilation of abandoned software

Matching decompilation rebuilds source code that compiles to a byte-identical copy of the original binary, which makes it one of the most cleanly verifiable jobs there is; the community tools are [decomp.me](https://decomp.me) (shared per-function scratchpads) and [objdiff](https://github.com/encounter/objdiff). In practice the work is almost entirely console games, and no non-game matching project of similar maturity turned up; abandoned instrument firmware is the obvious non-game target, but there recompilable source is usually enough and byte-identity is not needed. Agents already help: one developer used Claude Code to decompile [51% of a 2001 Game Boy Advance game](https://gambiconf.substack.com/p/starting-a-decompilation-project), and research models such as [LLM4Decompile](https://github.com/albertan017/LLM4Decompile) are scored on whether their output recompiles and passes tests. Goal: a published agent workflow that clears an existing project's backlog of unmatched functions faster than its human contributors. Verifier: byte-identical output, function by function, in objdiff.

#### M29a Readers for dead document and publishing formats

Files from WordPerfect, PageMaker, QuarkXPress, Microsoft Works and similar programs survive in archives and attics long after the software; the [Document Liberation Project](https://www.documentliberation.org/projects/) writes the open import libraries LibreOffice and others use, and lists its next targets (Serif PagePlus, InDesign, Software602 formats). The UK National Archives' [PRONOM registry](https://www.nationalarchives.gov.uk/PRONOM/) identifies formats and versions for building a fixture set. Work fixture by fixture through the library's bug tracker. Goal: a new import library, or fixes to an existing one, merged upstream. Verifier: rendering matches the original application's own print-to-PDF output for each fixture, then a real user finishes a real task with the converted files.

#### M29b Readers for proprietary scientific-instrument formats

Microscopes, spectrometers and analysis packages write proprietary files that open readers only partly understand, so metadata such as pixel size, channels and timestamps is silently lost. [Bio-Formats](https://www.openmicroscopy.org/bio-formats/) reads well over a hundred microscopy formats and keeps public [sample files](https://downloads.openmicroscopy.org/images/), and [liborigin](https://github.com/gerlachs/liborigin) reads [OriginLab](https://www.originlab.com) project files; both have issue trackers full of files they get wrong. Work fixture by fixture through those trackers. Goal: fixes merged upstream that close the open bugs for one format family. Verifier: values and metadata identical to the vendor application's own export of the same file.

#### M29c Readers for statistics, database and GIS files

Research data from the 1990s and 2000s often survives only as SPSS, SAS, Stata or Access files; [ReadStat](https://github.com/WizardMac/ReadStat) (the engine behind R's haven and Python's pyreadstat) and [MDB Tools](https://mdbtools.github.io) read them, with gaps in older versions, compression and metadata such as value labels, and [SLYR](https://github.com/north-road/slyr) does the same job for ArcGIS map styles. Work fixture by fixture through their issue trackers; generating reference outputs needs access to the original application. Goal: fixes merged upstream for one format's open bugs. Verifier: round-trip agreement with the original application's export, labels and metadata included.

#### M30a Write scanner drivers for scanners the vendor abandoned

Working film and flatbed scanners get scrapped because the vendor stopped shipping drivers, not because anything broke; the open scanner layer SANE marks several hundred models as unsupported in its [device list](http://www.sane-project.org/sane-mfgs.html). The protocol is usually plain USB traffic that can be captured from the Windows driver in a virtual machine and replayed. Pick a model whose owners are still asking on forums, reverse-engineer it, and upstream a SANE backend. Goal: the model's SANE status moved from unsupported to good. Verifier: scans from the new backend match the Windows driver's at the same settings.

#### M30b Add bench instruments to sigrok

Oscilloscopes, logic analysers, multimeters and power supplies outlive their Windows-only vendor software; [sigrok](https://sigrok.org/wiki/Supported_hardware) is the open, cross-platform layer for them and lists 144 devices as [planned](https://sigrok.org/wiki/Category:Planned) and 27 in progress. Capture the device's USB or serial traffic under the vendor software and write the driver. Goal: a driver merged into sigrok and the device moved to supported. Verifier: readings identical to the vendor software's on the same input signal.

#### M31a Run Macromedia Director CD-ROMs in ScummVM

Much 1990s interactive media (educational CD-ROMs, museum kiosks, artworks, games) was built in Macromedia Director and now runs only on period hardware or emulated old systems. [ScummVM](https://www.scummvm.org/compatibility/) has been rebuilding Director for about nine years, with Director 4 and 5 titles [the current focus](https://blogs.scummvm.org/superlemon/2025/08/31/expanding-director-engine-compatibility-in-scummvm/), and later versions barely started. Pick an unsupported title, find what breaks (usually a Lingo behaviour or an unimplemented Xtra plug-in), and fix it in the [ScummVM source](https://github.com/scummvm/scummvm). Goal: named titles moved to supported on ScummVM's compatibility list. Verifier: the title plays through with screens and behaviour matching the original running in an emulated classic Mac or Windows machine.

#### M31b Finish Flash support in Ruffle

Flash games, animations and teaching tools from two decades of the web stopped working when browsers dropped the plug-in; [Ruffle](https://ruffle.rs/compatibility) reimplements it and reports 99% of the ActionScript 1/2 language and 82% of its API done, against 90% and 82% for ActionScript 3. Pick unimplemented APIs that popular content needs and implement them in the [Ruffle source](https://github.com/ruffle-rs/ruffle). Goal: the ActionScript 3 API figure moved measurably upward with named content fixed. Verifier: Ruffle's regression tests, which compare output with Flash Player's, plus the fixed content running correctly.

#### M31c Get a non-working machine running in MAME

Software outlives its hardware only if someone emulates the machine, and [MAME](https://docs.mamedev.org) covers thousands of computers and workstations besides arcade boards, many of them flagged as not working. Run `mame -listxml` from a build of the [MAME source](https://github.com/mamedev/mame), filter for drivers marked not working, and pick one with surviving software images. Goal: the machine promoted to working and able to run its original operating system and applications. Verifier: the original software boots and runs to completion, matching documented behaviour or real-hardware footage.

## N Niche fields with public data and few analysts

### N1 Microplastics harmonisation

Thousands of papers in incompatible units and methods. Extend [NOAA](https://www.noaa.gov)'s [Marine Microplastics database](https://www.ncei.noaa.gov/products/microplastics) with method metadata; publish method-corrected trends. Improve polymer spectral matching in [Open Specy](https://www.openanalysis.org/openspecy/).

### N2 Soil spectroscopy

[Open Soil Spectral Library](https://soilspectroscopy.org): model improvements scoreable against lab values.

### N3 Driller's logs → 3D aquifers

California's ~1M [well completion reports](https://data.ca.gov/dataset/well-completion-reports), Australia's [Groundwater Explorer](http://www.bom.gov.au/water/groundwater/explorer/). Free-text lithology ("brn clay w/ gravel 40–65 ft") parsed into stratigraphy. Verifier: professionally logged wells.

### N4 Consumer-product injuries → recall prediction

People report injuries and near-misses to [SaferProducts.gov](https://www.saferproducts.gov); ER visits are coded in [NEISS](https://www.cpsc.gov/Research--Statistics/NEISS-Injury-Data). Learn which report patterns preceded past recalls, apply to current reports, publish which products look due for recall. Recalled products resurface under other brand names; shared OEM part numbers and identical diagrams in the manuals link them.

### N5 Car complaints → recall prediction

Same structure with [NHTSA complaints](https://www.nhtsa.gov/nhtsa-datasets-and-apis) as input and recalls as ground truth. In plain terms: people complain about brakes failing; months later the model is recalled; learn the pattern; flag the next one early.

### N6 Dangerous road design

[FARS](https://en.wikipedia.org/wiki/Fatality_Analysis_Reporting_System) fatality records plus [OpenStreetMap](https://www.openstreetmap.org) geometry: which intersection and road designs kill, controlled for traffic volume. Output: a ranked list for engineers.

### N7 Aviation precursors

[ASRS](https://asrs.arc.nasa.gov) (~2M anonymous pilot narratives), [FAA](https://www.faa.gov) [Service Difficulty Reports](https://sdrs.faa.gov) (part-level failures), [NTSB](https://www.ntsb.gov)'s [CAROL](https://data.ntsb.gov/carol-main-public/basic-search). Predict which part numbers get an airworthiness directive.

### N8 Pipelines and dams

[PHMSA incident narratives](https://www.phmsa.dot.gov/data-and-statistics/pipeline/pipeline-incident-20-year-trends); the [National Inventory of Dams](https://nid.sec.usace.army.mil) (~90k dams, patchy condition data). Combine with E6/E7 and downstream population to rank inspection priority.

### N9 Drinking water

[SDWIS](https://www.epa.gov/ground-water-and-drinking-water/safe-drinking-water-information-system-sdwis-federal-reporting) violations, [ECHO](https://echo.epa.gov) enforcement, [UCMR5](https://www.epa.gov/dwucmr/fifth-unregulated-contaminant-monitoring-rule) PFAS results, thousands of PDF consumer-confidence reports. Serial violators with no enforcement; reports contradicting the official record.

### N10 Chemical dossier audits

[ECHA](https://echa.europa.eu/information-on-chemicals) holds dossiers for 20k+ substances; many toxicity claims rest on weak "read-across" from a different chemical. Audit against [CompTox](https://comptox.epa.gov/dashboard) data. This is what regulators lack staff for.

### N11 Nuclear plant precursors

[NRC](https://en.wikipedia.org/wiki/United_States_Nuclear_Regulatory_Commission)'s [ADAMS](https://adams-search.nrc.gov/home) (millions of public documents) and [Licensee Event Reports](https://lersearch.inl.gov). Precursor analysis at scale.

### N12 Particle-physics reanalysis

[CERN Open Data](https://opendata.cern.ch) releases petabytes; reproduce published results first, then search where the collaborations didn't.

### N13 Occupational safety

[OSHA accident narratives](https://www.osha.gov/ords/imis/accidentsearch.html), [MSHA data](https://www.msha.gov/data-and-reports). Predict fatal-accident risk by employer and site; output is an inspection list.

### N14 Grid interconnection queues

[Berkeley Lab queue data](https://emp.lbl.gov/queues) (~2 TW waiting, most withdrawing), [ENTSO-E transparency](https://transparency.entsoe.eu). Predict withdrawals; build open power-flow models of real grids from [OSM](https://www.openstreetmap.org) line data.

### N15 Elections infrastructure

[OpenElections](https://openelections.net) still lacks precinct results for many states because they are PDFs or scans.

### N16 Bird strikes

[FAA wildlife strike database](https://wildlife.faa.gov) plus airport land use plus [eBird](https://ebird.org) migration: strike risk by airport and week, which changes mowing schedules.

### N17 Endangered-language recordings

[ELAR](https://www.elararchive.org), [PARADISEC](https://www.paradisec.org.au): thousands of hours never transcribed. Transcription plus speaker verification (budgeted).

### N18 Ethnomusicology archives

[British Library Sounds](https://www.bl.uk/subjects/sound), the [Lomax archive](https://research.culturalequity.org), [Smithsonian Folkways](https://en.wikipedia.org/wiki/Smithsonian_Folkways): unidentified recordings, tune families across cultures.

TODO: this data might be out of date, there was a ransom attack in 2023 that
removed lots of data.

### N19 Bioacoustics on land

[xeno-canto](https://xeno-canto.org), [Macaulay Library](https://www.macaulaylibrary.org), [AudioMoth](https://www.openacousticdevices.info) recordings of bats with no processing network.

### N20 Accessibility at scale

[Project Sidewalk](https://projectsidewalk.org) curb ramps from street imagery; ~100M [Wikimedia Commons](https://commons.wikimedia.org) images without alt text; every scanned government PDF inaccessible until OCR'd and tagged.

### N21 Measurement reconciliation across fields

Physics has [CODATA](https://codata.org) and the [Particle Data Group](https://pdg.lbl.gov) to reconcile discrepant measurements (neutron lifetime, Hubble constant). Nobody does it for global insect biomass, soil carbon stocks, ocean plastic mass, groundwater depletion, each measured by three or four fields with incompatible methods. Build the standing reconciliation, discrepancies published.

### N22 Lost media

[Lost Media Wiki](https://lostmediawiki.com) want-lists against millions of hours of archived radio and TV at the [Internet Archive](https://archive.org); the "[most mysterious song](https://en.wikipedia.org/wiki/Most_Mysterious_Song_on_the_Internet)" was identified in 2024 after 17 years.

### N23 Cipher cold cases with verifiable plaintext

Zodiac Z13/Z32 ([Z340 fell in 2020](https://en.wikipedia.org/wiki/Zodiac_Killer#Ciphers) to hobbyists), the [McCormick notes](https://en.wikipedia.org/wiki/Ricky_McCormick), [Dorabella](https://en.wikipedia.org/wiki/Dorabella_Cipher), [Beale](https://en.wikipedia.org/wiki/Beale_ciphers). Plaintext is self-verifying.

### N24 Find the missing fish in the mussel's life cycle

Freshwater mussels are the most endangered animal group in North America, and each species' larvae must attach to particular host fish to survive. The [Illinois Natural History Survey host database](https://mollusk.inhs.illinois.edu/resources/freshwater-mussel-host-database/) is the reference, says on its own page that it is incomplete and unstaffed, and publishes the exact submission fields it wants (evidence type, transformation success, juvenile counts, citation). Read a century of malacology papers and fill it, negative results included; then find the rivers with good water and habitat where the evidence says the host fish is the thing that's missing. Same shape for seed banks: germination pretreatments buried in old botany papers into [Genesys](https://ggce.genesys-pgr.org/docs/manual/seed/viability/), separating seeds that are dead from seeds nobody has persuaded to germinate.

## O Hardware you already own, plus an agent

Control layers exist: [ASCOM](https://ascom-standards.org)/[INDI](https://indilib.org) and schedulers like [N.I.N.A.](https://nighttime-imaging.eu) for telescopes; smart scopes like the [Seestar](https://www.zwoastro.com/product/seestar-s50/); [RTL-SDR](https://www.rtl-sdr.com) dongles; [Raspberry Pi](https://www.raspberrypi.org). The missing software is a dispatcher (science request → observation plan), a reduction pipeline, and a submitter to the right archive.

### Telescopes

#### O1 NEO confirmation follow-up

The [MPC NEO Confirmation Page](https://minorplanetcenter.net/iau/NEO/toconfirm_tabular.html) lists new asteroids that will be lost without re-observation within days. Agent reads it, picks reachable targets, images, submits astrometry; MPC residuals score you. [Unistellar](https://science.unistellar.com) runs a closed version.

#### O2 Exoplanet ephemerides

[ExoClock](https://www.exoclock.space) keeps transit times current for [ESA](https://www.esa.int)'s [Ariel](https://arielmission.space/) mission using hobby scopes.

#### O3 Asteroid occultations

[IOTA](https://occultations.org) and [OccultWatcher](https://www.occultwatcher.net) predict shadow tracks; timed light curves give shapes. The bottleneck is people awake at 3 a.m.

#### O4 Transient follow-up

Subscribe to [Rubin](https://rubinobservatory.org) alert brokers ([ALeRCE](https://alerce.science), [Fink](https://fink-broker.org)); observe what your aperture can reach; submit to [AAVSO](https://www.aavso.org).

#### O5 Debris light curves and reentry tracking

Optical observations in the last orbits sharpen predictions from [Space-Track](https://www.space-track.org)/[CelesTrak](https://celestrak.org); tumbling rates of dead satellites inform debris-removal planning; all-sky streak counts quantify constellation impact on astronomy.

#### O6 Lunar and Jupiter impact flashes

[NELIOTA](https://neliota.astro.noa.gr) has one telescope in Greece; more longitudes multiply coverage.

#### O7 Rented time

[iTelescope](https://www.itelescope.net), [Las Cumbres](https://lco.global), [Telescope Live](https://telescope.live) sell time by the minute; no hardware needed.

### Sky cameras

#### O8 Meteor network gaps

[Global Meteor Network](https://globalmeteornetwork.org) has ~1,000 Pi cameras and none across much of Africa, Asia and South America.

#### O9 Sprites, noctilucent clouds, aurora

No calibrated network; noctilucent cloud frequency is a mesospheric climate indicator.

#### O10 Sky brightness time series

[Globe at Night](https://globeatnight.org) gives points; calibrated all-sky cameras give continuous light-pollution data for lighting ordinances.

### Software-defined radio

#### O11 Ionosphere and flares

[HamSCI](https://hamsci.org) [Grape](https://hamsci.org/grape2) stations and [Stanford](https://www.stanford.edu)'s [SID monitors](https://solar-center.stanford.edu/SID/).

#### O12 Solar and Jupiter radio

[e-CALLISTO](https://www.e-callisto.org), [Radio JOVE](https://radiojove.gsfc.nasa.gov).

#### O13 Meteor scatter

[BRAMS](https://brams.aeronomie.be), [RMOB](https://www.rmob.org): radio counts work in daylight and cloud; cross-reference with optical.

#### O14 Spectrum occupancy and interference

Regulators have little ground truth; periodic scans plus [KrakenSDR](https://www.krakenrf.com) direction-finding of interference sources (receive only).

#### O15 Ground-truth GNSS jamming

[GPSJam](https://gpsjam.org) infers from aircraft; ground receivers see it at ports and highways.

#### O16 Satellite ground stations

[SatNOGS](https://satnogs.org) is the model for the whole genre; gaps are geographic and in decoders.

### GNSS receivers

#### O17 Water vapour for nowcasting

Tropospheric delay → precipitable water; density limits usefulness for storms.

#### O18 Snow and soil moisture by reflectometry

[GNSS-IR](https://gnss-reflections.org) turns any fixed antenna into a snow-depth sensor.

### Ground sensors

#### O19 Infrasound

[Raspberry Boom](https://raspberryshake.org): bolides, eruptions, avalanches, explosions; the international monitoring data isn't public.

#### O20 Magnetometers

Hobby fluxgates for geomagnetically induced currents; calibration is the hard part.

#### O21 Cosmic-ray flux

[CosmicWatch](http://www.cosmicwatch.lns.mit.edu) network as a check on a shrinking neutron-monitor network.

#### O22 Radon map

[Airthings](https://www.airthings.com)-class detectors are common; radon maps are coarse; opt-in map by geology and building type.

#### O23 Rebuild an open background-radiation baseline

An anomaly is only visible against a baseline, and outside Japan the public background-radiation map is thin: official networks are sparse and [Safecast](https://safecast.org), the volunteer network that mapped Fukushima's fallout, is under-maintained. A consumer detector and a logging agent produce calibrated, geotagged readings from a car or a windowsill. Revive the pipeline and publish the drives and fixed-point series.

#### O24 Power quality

Household voltage quality is unmapped; a plug-in logger and an agent give a per-street record. (Rooftop-solar irradiance is I15.)

### Cameras on Earth

#### O25 Public webcams as instruments

[Windy](https://www.windy.com/webcams), [EarthCam](https://www.earthcam.com), [explore.org](https://explore.org): glacier termini, volcanoes, harbours, snowlines, bird colonies. Extract a daily number; old frames verify. Nature and infrastructure only.

#### O26 Phenology

[PhenoCam](https://phenocam.nau.edu) method on any garden webcam; global gaps are enormous.

#### O27 Rivers

[CrowdWater](https://crowdwater.ch) plus a fixed camera gives a continuous gauge on ungauged streams.

#### O28 Turn a fixed camera into a daily shoreline gauge

Coastal erosion and storm recovery are managed from shoreline positions that most beaches have never had measured. [CoastSnap](https://www.coastsnap.com) solves the geometry with a phone cradle at a viewpoint, but depends on whoever walks past, so the series is ragged. A permanent camera in the same cradle and an agent extracting the waterline gives a daily record. Publish it.

#### O29 Street counts

[Telraam](https://telraam.net) outside Belgium and the Netherlands.

#### O30 Automated pollen station

Sticky tape plus an [OpenFlexure](https://openflexure.org) microscope plus grain classification, for a few hundred dollars; verify against the official station.

#### O31 Plankton and diatoms

Same microscope on water samples; diatom assemblages are a standard water-quality index.

#### O32 Insects and moths

[UKCEH](https://www.ceh.ac.uk)'s [AMI](https://www.insectmonitoring.org/) light-trap camera and Dutch [Diopsis](https://diopsis.eu/en/) are institutional; open versions with agent ID put insect monitoring in backyards.

#### O33 Birds and bats by sound

[BirdWeather](https://www.birdweather.com) exists; bats via [AudioMoth](https://www.openacousticdevices.info) have no equivalent.

#### O34 Nest boxes and hives

Clutch size, fledging success, colony health from cameras and scales; feed a scientific archive.

### Vehicles and phones

#### O35 Road condition

Dashcams and accelerometers for potholes, signs, streetlights.

#### O36 Bridge modes from cars

Crowdsourced accelerometer data recovers bridge natural frequencies; a real technique deployed almost nowhere.

#### O37 Mobile air quality

Bike- and car-mounted sensors with agent-run calibration against reference monitors.

### Ocean, dock-mounted

#### O38 Hydrophones and wave sensors

Dock hydrophones for ship noise and marine mammals; [Sofar Spotter](https://www.sofarocean.com) buoys for a club.

### Tying it together

#### O39 The dispatcher (meta-project)

A registry of instruments, a queue of science needs ([NEOCP](https://minorplanetcenter.net/iau/NEO/toconfirm_tabular.html), occultations, broker alerts, reentry windows, webcam watches), and an agent per instrument that plans, executes, reduces, checks and submits. [SatNOGS](https://satnogs.org) did it for one instrument type.

## P Appendix: small open problems with checkable certificates (lower priority)

Kept for completeness; real-world impact is indirect. The [bbchallenge](https://bbchallenge.org) community (amateurs, [Coq](https://coq.inria.fr)-verified, BB(5) settled 2024) is the organisational template.

### P1 Costas arrays of order 32 and 33

Existence is unknown for both orders. Real use: radar and sonar waveforms. ([Costas arrays](https://en.wikipedia.org/wiki/Costas_array).)

### P2 Hadamard matrix of order 668

The smallest order for which no [Hadamard matrix](https://en.wikipedia.org/wiki/Hadamard_matrix) is known. Real use: error-correcting codes.

### P3 Heesch numbers beyond 6

No tile with a [Heesch number](https://en.wikipedia.org/wiki/Heesch%27s_problem) above 6 is known.

### P4 BB(6) and its cryptids

Tracked on [bbchallenge](https://bbchallenge.org).

### P5 Graffiti's machine-generated conjectures

[Graffiti](<https://en.wikipedia.org/wiki/Graffiti_(program)>) produced hundreds of graph-theory conjectures that remain unresolved.

### P6 Record tables

[Friedman's Packing Center](https://erich-friedman.github.io/packing/), [La Jolla Covering Repository](https://dmgordon.org/covering-designs/), [Golomb rulers](https://en.wikipedia.org/wiki/Golomb_ruler), [van der Waerden numbers](https://en.wikipedia.org/wiki/Van_der_Waerden_number), [kissing numbers](https://en.wikipedia.org/wiki/Kissing_number) in dimensions 5–7, the [Lebesgue universal covering](https://en.wikipedia.org/wiki/Lebesgue%27s_universal_covering_problem), [chromatic number of the plane](https://en.wikipedia.org/wiki/Chromatic_number_of_the_plane). Every improvement is a construction anyone can check.

### P7 Combinatorial game positions

[Hex](<https://en.wikipedia.org/wiki/Hex_(board_game)>) and [Go](<https://en.wikipedia.org/wiki/Go_(game)>) variants, with [proof-number search](https://en.wikipedia.org/wiki/Proof-number_search) and [Lean](https://leanprover.github.io/) certificates.

## Q Reference: declassified and historical imagery sources

### Q1 CORONA, KH-7 GAMBIT and KH-9 HEXAGON

[CORONA](<https://en.wikipedia.org/wiki/Corona_(satellite)>) ran 1960–72 and left ~860k frames; all three are on [USGS EarthExplorer](https://earthexplorer.usgs.gov). The [CORONA Atlas](https://corona.cast.uark.edu) covers the Middle East.

### Q2 U-2 photography

1950s–60s, used for archaeology by [Hammer & Ur 2019](https://doi.org/10.1017/aap.2018.38); mostly at [NARA](https://www.archives.gov).

### Q3 Landsat

[Landsat](https://www.usgs.gov/landsat-missions) goes back to 1972 and is free.

### Q4 SPOT

1986–2015, released free under [CNES](https://cnes.fr)'s [SPOT World Heritage](https://spot.cnes.fr/en/spot-world-heritage-0) programme.

### Q5 Nimbus

1960s satellite imagery rescued at [NSIDC](https://nsidc.org/data/nimbus); sea ice 1964–72.

### Q6 Soviet military maps

1:10,000 for cities worldwide, extraordinary detail, mostly undigitised.

### Q7 Historical aerial photography

[NCAP](https://ncap.org.uk), [USGS](https://en.wikipedia.org/wiki/United_States_Geological_Survey) aerials via [EarthExplorer](https://earthexplorer.usgs.gov), [IWM](https://www.iwm.org.uk).

## S Women's health, hormones and wearables

The big consumer datasets ([Clue](https://helloclue.com), [Natural Cycles](https://www.naturalcycles.com), [Oura](https://ouraring.com), [WHOOP](<https://en.wikipedia.org/wiki/Whoop_(company)>), [Apple's Women's Health Study](https://www.hsph.harvard.edu/applewomenshealthstudy/)) are private. Work with the public cohorts and the regulatory databases, and fix the measurement layer.

### Public data

[NHANES](https://www.cdc.gov/nchs/nhanes/) (accelerometry, ferritin, sex-hormone assays, reproductive questionnaires); [UK Biobank](https://www.ukbiobank.ac.uk) (100k with accelerometry and hormones; application); [All of Us](https://www.researchallofus.org) (Fitbit data linked to surveys; registered); [National Sleep Research Resource](https://sleepdata.org) (thousands of overnight sleep studies); [SWAN](https://www.icpsr.umich.edu/web/ICPSR/series/253) (3,000 women through menopause, 25 years of FSH/estradiol; public-use); [Capture-24](https://github.com/OxWearables/capture24) (camera-verified activity labels); [Awesome-CGM](https://github.com/IrinaStatsLab/Awesome-CGM); [FAERS](https://open.fda.gov); [MAUDE](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm); [Drug Trials Snapshots](https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshots).

### S1 Sex-stratified adverse-drug-event signals

Women have ~1.5× the adverse-event rate of men; the [FDA](https://www.fda.gov) halved zolpidem doses for women only in [2013](https://www.fda.gov/drugs/drug-safety-and-availability/questions-and-answers-risk-next-morning-impairment-after-use-insomnia-drugs-fda-requires-lower). Run [FAERS](https://open.fda.gov) signal detection by sex, backtest against label changes, publish the unlabelled female signals.

### S2 Device adverse-event early warning

[MAUDE](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm) holds the mesh, [Essure](https://en.wikipedia.org/wiki/Essure) and breast-implant histories in free text years before regulatory action. Backtest against later recalls.

### S3 Trial representation tracker

Female, pregnant and over-65 enrolment per condition versus prevalence, continuously from [ClinicalTrials.gov](https://clinicaltrials.gov) results.

### S4 Sex-specific normative ranges for wearable metrics

Resting heart rate, HRV, sleep architecture, step counts by sex, age, cycle phase and menopausal status from [NHANES](https://www.cdc.gov/nchs/nhanes/), [NSRR](https://sleepdata.org) and [All of Us](https://www.researchallofus.org). Verifier: cross-cohort replication.

### S5 Cycle-phase physiology, independently replicated

Replicate the [Oura](https://ouraring.com)/[Natural Cycles](https://www.naturalcycles.com) temperature, HRV and sleep claims on [All of Us](https://www.researchallofus.org) [Fitbit](https://www.fitbit.com) data with survey-reported cycles.

### S6 Predicting the final menstrual period from hormone trajectories

[SWAN](https://www.swanstudy.org) data; open re-analysis with held-out validation.

### S7 Iron-deficiency thresholds

A [2023 JAMA re-analysis](https://doi.org/10.1001/jama.2023.8020) of [NHANES](https://www.cdc.gov/nchs/nhanes/) found ~40% of adolescent girls and young women deficient depending on the ferritin cut-off. Public, re-analysable, high stakes.

### S8 Estradiol immunoassay bias

Immunoassays are inaccurate at low estradiol levels; mass spectrometry is the reference ([CDC standardisation](https://www.cdc.gov/labstandards/hs.html)). Meta-analyse every published method comparison into correction factors by assay.

### S9 Benchmark wearable algorithms against camera ground truth

[Capture-24](https://github.com/OxWearables/capture24) plus raw data pulled from consumer devices via [Gadgetbridge](https://gadgetbridge.org); publish where sleep and step algorithms fail, by sex and body type.

### S10 Period-tracker privacy audit

Capture and document each app's network traffic; [Mozilla](https://www.mozilla.org)'s _Privacy Not Included_ did it once by hand.

## T Open hardware an agent could plausibly design

### Why now

[KiCad](https://www.kicad.org) is scriptable; [atopile](https://atopile.io) and [tscircuit](https://tscircuit.com) are code-to-PCB; [JLCPCB](https://jlcpcb.com) assembles from a BOM; enclosures via [OpenSCAD](https://openscad.org)/[CadQuery](https://cadquery.readthedocs.io/); open firmware stacks for [ESP32](https://www.espressif.com/en/products/socs/esp32)/[nRF52](https://www.nordicsemi.com/Products/nRF52840)/[RP2040](https://www.raspberrypi.com/products/rp2040/). The agent produces schematic, layout, firmware, enclosure and test procedure.

### Rule for every entry

A human builds it, benches it against the commercial device or a reference standard, and publishes the raw comparison. Unbuilt designs count for nothing. Criteria: simple electronics; commercial price driven by expertise, small market or regulatory moat; no implantation, no invasive sampling, no diagnostic claim; skin-contact parts from off-the-shelf medical-grade materials. Certify via [OSHWA](https://www.oshwa.org).

### Health and wellness (research/wellness grade)

#### T1 Over-the-counter hearing aid, ~$50

Legal in the US since 2022; commercial $200–$3,000, prescription $2–5k. [Tympan](https://tympan.org) is the open research platform; [openMHA](https://www.openmha.org) the fitting software. Verifier: ANSI S3.22 test box and real-ear measurement. Highest-impact item here.

#### T2 Continuous skin-temperature logger for cycle tracking

[Tempdrop](https://tempdrop.com) ~$200; BOM under $15. Open ovulation-detection algorithms don't exist. Verifier: reference thermometer plus LH strips.

#### T3 Hot-flash monitor

Sternal skin-conductance research devices cost thousands; it's a GSR circuit. Verifier: self-report concordance.

#### T4 Spirometer

Clinical $500–2,000; a differential pressure sensor. Verifier: 3-litre calibration syringe, ATS/ERS criteria.

#### T5 Calibrated audiometer

$2–5k commercially; calibrated DAC and headphones. Verifier: clinical audiogram.

#### T6 Child vision screener

Photorefraction with camera and off-axis flash; the commercial [Spot screener](https://www.hillrom.com/en/products/spot-vision-screener/) is ~$8k. Verifier: optometrist refraction. Catches amblyopia early.

#### T7 Pulse oximeter with skin-tone validation

[FDA-acknowledged](https://web.archive.org/web/20240110123831/https://www.fda.gov/medical-devices/safety-communications/pulse-oximeter-accuracy-and-limitations-fda-safety-communication) bias in dark skin; [HealthyPi](https://www.protocentral.com) is the open board. Needs a clinical partner for arterial-blood verification; research-only.

NOTE: we're using web-archives, not original webpage

#### T8 Fall-detection pendant

Accelerometer plus algorithm; verifier: public fall datasets and a scripted protocol.

#### T9 Pelvic-floor trainer with biofeedback

Pressure sensor in medical-grade silicone; only with a materials and hygiene section by someone qualified.

#### T10 Validated open smartwatch firmware

[PineTime](https://pine64.org/devices/pinetime/), [Bangle.js](https://banglejs.com); contribution is algorithms validated on [Capture-24](https://github.com/OxWearables/capture24) and [NSRR](https://sleepdata.org).

### Assistive technology

#### T11 Eye-gaze tracker for communication

Commercial $1,500–$10,000; [EyeWriter](http://www.eyewriter.org) proved it in 2009. Verifier: sub-degree accuracy. Home: [Makers Making Change](https://www.makersmakingchange.com).

#### T12 Refreshable braille cell

$3–5k per 40 cells because of piezo actuators; a cheap actuator is unsolved. Ambitious; iterative design plus human prototyping.

#### T13 Switch interfaces and adaptive controllers

Community-solved; gap is documentation and firmware.

### Instruments for other sections

#### T14 GPS time-inserter for occultation video

Unlocks O3.

#### T15 Water-level logger

[ESP32](https://www.espressif.com/en/products/socs/esp32) + pressure sensor + [LoRa](https://lora-alliance.org) for ~$30 vs $400 HOBO (O27, N3).

#### T16 Sound-level meter

With published calibration. Verifier: acoustic calibrator.

#### T17 Fluxgate magnetometer station

With a calibration procedure (O20).

#### T18 GNSS reflectometry station

Build and processing guide (O18).

#### T19 Hydrophone with preamp

For O38.

#### T20 Sun photometer

For aerosol optical depth.

#### T21 Wildlife and livestock GPS collars

[OpenCollar](https://github.com/opencollar-io) exists and needs variants.

### Already open; contribute, don't fork

[AirGradient](https://www.airgradient.com) (air quality), [OpenEnergyMonitor](https://openenergymonitor.org), [OpenBCI](https://openbci.com) (EEG), [OpenFlexure](https://openflexure.org), [AudioMoth](https://www.openacousticdevices.info), [Hiveeyes](https://hiveeyes.org), [e-NABLE](https://enablingthefuture.org), [OpenEarable](https://open-earable.teco.edu).

### On the Oura ring

The electronics are ordinary; the flexible PCB, 20 mAh battery and sensor-fusion tuning are the hard parts. Poor first target. An open wristband with better-validated algorithms is a good one.

## U Deeper dives: institutions and integrity

### Law and courts

#### U1 Open "Shepardizing"

Classify every citing sentence in the [Caselaw Access Project](https://case.law)/[CourtListener](https://www.courtlistener.com) citation graph as positive or negative treatment. Verifier: sampled comparison with [KeyCite](https://en.wikipedia.org/wiki/KeyCite). Breaks the core paid product of the legal-research duopoly.

#### U2 Zombie laws

Statutes ruled unconstitutional but never repealed (e.g., sodomy laws after [Lawrence v. Texas](https://en.wikipedia.org/wiki/Lawrence_v._Texas)) still get cited. Cross-reference every state code against controlling decisions.

#### U3 Link rot in opinions

[Perma.cc](https://perma.cc) found about half the links in [Supreme Court](https://www.supremecourt.gov) opinions dead. Archive every URL in every opinion and government report; reconstruct dead ones from the [Wayback Machine](https://web.archive.org).

#### U4 Court forms as code

Suffolk's [LIT Lab](https://suffolklitlab.org) hand-builds guided interviews; every state has thousands more forms. Verifier: the court accepts the output.

#### U5 Transcribe every public meeting

Council, zoning, parole, school board. [Documenters](https://www.documenters.org) pays humans; an agent produces timestamped, checkable records where no reporter is left.

### Mandatory financial filings nobody reads

#### U6 Retirement-plan fees

Every plan files a [Form 5500](https://www.efast.dol.gov); fee dispersion across identical plans is enormous and invisible to employees.

#### U7 Insurer negotiated rates

[Transparency in Coverage](https://www.cms.gov/priorities/key-initiatives/healthplan-price-transparency) files (terabytes, hostile formats) are the twin of hospital price files (J4); together they give the price of any procedure anywhere.

#### U8 Ghost provider directories

Over half of listed in-network mental-health providers are unreachable. Verify directories against licensing boards and [NPI](https://npiregistry.cms.hhs.gov/) records; binary per entry.

#### U9 Nursing-home staffing and ownership

[CMS](https://www.cms.gov) [payroll-based staffing data](https://data.cms.gov) and inspection narratives; ownership routed through shells. Predict neglect citations; verifier is the next inspection.

#### U10 Hospital cost reports

[HCRIS](https://www.cms.gov/data-research/statistics-trends-and-reports/cost-reports) plus [Form 990s](https://www.irs.gov/forms-pubs/about-form-990): charity-care claims versus actual; which nonprofit hospitals sue patients.

#### U11 Device predicate chains

[ICIJ](https://www.icij.org)'s [Implant Files](https://www.icij.org/investigations/implant-files/) found clearance chains leading to recalled devices. Build the full graph from the [510(k) database](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm).

#### U12 Property-tax regressivity

[Berry's work](https://propertytaxproject.uchicago.edu) shows poor homeowners over-assessed relative to sale prices; compute the ratio for every county from public rolls and sales.

#### U13 Municipal-bond distress

[EMMA](https://emma.msrb.org) holds every issuer's financials; distress prediction is backtestable.

#### U14 Wage filings

[H-1B/PERM disclosures](https://www.dol.gov/agencies/eta/foreign-labor/performance) versus prevailing wages; [NLRB](https://www.nlrb.gov/reports/graphs-data) records against employer identities.

NOTE: NLRB is down, not sure what's happening there

### Institutions that hold people and animals

#### U15 Animal-facility inspections

[APHIS reports](https://aphis.my.site.com/PublicSearchTool/s/) on breeders, dealers, labs, zoos; predict repeat violations, link facilities across renames.

#### U16 Slaughterhouse noncompliance

[FSIS](https://www.fsis.usda.gov) records via [FOIA](https://www.foia.gov); violations cluster by plant.

#### U17 Deaths in custody

[BJS](https://bjs.ojp.gov) data is incomplete by design; reconstruct from local news, coroners, litigation.

#### U18 Public-housing conditions

[HUD](https://www.hud.gov) [REAC](https://www.hud.gov/program_offices/public_indian_housing/reac) scores plus 311 and code violations predict which buildings fail next.

### Civic infrastructure

#### U19 Transit performance from open feeds

[GTFS](https://gtfs.org) and real-time feeds for thousands of agencies ([Mobility Database](https://mobilitydatabase.org)): on-time performance, bunching, transit deserts for every city.

#### U20 Blocked rail crossings

[FRA](https://en.wikipedia.org/wiki/Federal_Railroad_Administration)'s [complaint portal](https://www.fra.dot.gov/blockedcrossings/) lacks evidence; a webcam plus an agent supplies it.

#### U21 Zoning atlas

The [National Zoning Atlas](https://www.zoningatlas.org) digitises codes by hand; agents read codes, the atlas's manual work verifies.

#### U22 Worst homes first

England's [EPC open data](https://epc.opendatacommunities.org), 25M+ certificates: coldest housing by area and landlord.

#### U23 Urban heat and heat deaths

[Landsat](https://landsat.gsfc.nasa.gov) surface temperature, [heat.gov](https://www.heat.gov) campaigns, [CDC WONDER](https://wonder.cdc.gov) mortality; where cooling centres should go.

#### U24 Rural water points

[Water Point Data Exchange](https://www.waterpointdata.org), 500k+ points with functionality status; predict failures. Verifier: follow-up survey.

#### U25 Broadband truth

[FCC](https://en.wikipedia.org/wiki/Federal_Communications_Commission) claims versus [Ookla open data](https://github.com/teamookla/ookla-open-data).

#### U26 Gas leaks

[HEET](https://heet.org) mapped Boston with a car-mounted sensor; a cheap methane sensor on a commuter car is a section-T device.

### Science integrity and open science

#### U27 Paper mills and tortured phrases

Cabanac's [Problematic Paper Screener](https://www.irit.fr/~Guillaume.Cabanac/problematic-paper-screener) and [PubPeer](https://pubpeer.com); retractions verify.

#### U28 Retracted papers still cited as valid

[Retraction Watch data](https://gitlab.com/crossref/retraction-watch-data) is open via [Crossref](https://www.crossref.org); find every guideline, review and textbook citing a retracted result without noting it, then re-run the downstream analysis with the corrected value where the code exists, rather than just flagging the citation.

#### U29 Data that never arrived

Every [NIH](https://en.wikipedia.org/wiki/National_Institutes_of_Health), [NSF](https://www.nsf.gov), [ERC](https://erc.europa.eu) and [UKRI](https://www.ukri.org) grant promises a data deposit; check the promise against the repositories and the paper's supplements, and recover orphaned datasets from wherever they actually landed.

#### U30 Benchmark contamination

Audit every public machine-learning benchmark for exact duplicates and derived records crossing the train/test boundary; publish the witnesses and the corrected leaderboard.

#### U31 Social-science outcome switching

[AEA RCT Registry](https://www.socialscienceregistry.org) pre-registrations versus published outcomes.

#### U32 Large-facility data reanalysis

[ESRF](https://data.esrf.fr) and [ILL](https://data.ill.eu) publish petabytes after embargo, rarely reused.

#### U33 Forecast-skill scoreboards

Every weather provider's forecasts versus outcomes, every city, permanently; [ForecastWatch](https://forecastwatch.com) sells it, nobody publishes it open.

#### U34 Exam-item bias

[NAEP](https://nces.ed.gov/nationsreportcard/nqt/) and [PISA](https://www.oecd.org/pisa/data/) released items and microdata; differential item functioning by sex, language, region.

## W Bureaucracy navigation: asserting entitlements people already have

The pattern: a person is owed something and the process gates on knowing the magic words, the right address and the deadline. Patrick McKenzie's [debanking letters](https://www.bitsaboutmoney.com) are the template. The gap is large: under 1% of [ACA](https://www.healthcare.gov/glossary/affordable-care-act/) claim denials are [appealed](https://www.kff.org/private-insurance/claims-denials-and-appeals-in-aca-marketplace-plans-in-2023/); ~two-thirds of disability claims are denied initially and about half win at hearing; ~70% of UK [PIP](https://www.gov.uk/pip) tribunal appeals succeed; ~70% of 2023–24 Medicaid disenrollments were procedural; [Dollar For](https://dollarfor.org) has erased $100M+ in hospital bills by filing charity-care forms.

### Health

#### W1 Insurance denials

Internal appeal → [external review](https://www.healthcare.gov/appeal-insurance-company-decision/) → state commissioner. Cite the plan's own criteria.

#### W2 Prior-authorisation and Medicare Advantage denials

#### W3 Hospital discharge appeals

Calling the [QIO](https://www.medicare.gov/claims-appeals) before the deadline pauses discharge.

#### W4 Nursing-home discharges

30-day notice and appeal rights.

#### W5 Charity care under IRS 501(r)

Find the policy, check eligibility, file.

#### W6 Surprise bills

Under the [No Surprises Act](https://www.cms.gov/nosurprises); request itemised bills.

#### W7 HIPAA right of access

Thirty days to comply, then an [OCR complaint](https://www.hhs.gov/hipaa/filing-a-complaint/index.html).

### Money

#### W8 Account closures and frozen funds

Executive office, then the [CFPB portal](https://www.consumerfinance.gov/complaint/) (15-day response, public).

#### W9 Unauthorised transactions (Reg E)

60 days to report; the letter states only the person's own account.

#### W10 Card billing errors (Fair Credit Billing Act)

Written dispute within 60 days.

#### W11 Credit-report errors (FCRA)

30-day investigation.

#### W12 Debt collection

Validation within 30 days; statute-of-limitations defence; file an answer (most suits default).

#### W13 Background- and tenant-screening errors

The [FCRA](https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act) applies.

#### W14 Identity theft

[FTC affidavit](https://www.identitytheft.gov).

#### W15 Unclaimed property

~$70B in [state databases](https://unclaimed.org); finders take 10–35%.

#### W16 Taxes

[first-time penalty abatement](https://www.irs.gov/payments/administrative-penalty-relief); [CP2000](https://www.irs.gov/individuals/understanding-your-cp2000-notice) responses; [Taxpayer Advocate](https://www.taxpayeradvocate.irs.gov); property-tax appeals (U12).

### Benefits

#### W17 SNAP/Medicaid/TANF procedural terminations

Fair-hearing requests, short deadlines, benefits often continue if timely.

#### W18 Social Security disability

[Appeals](https://www.ssa.gov/apply/appeal-decision-we-made) within 60 days; assemble the medical narrative.

#### W19 Unemployment appeals

Deadlines as short as 10 days.

#### W20 Veterans benefits

[Decision reviews](https://www.va.gov/decision-reviews/), free via accredited representatives.

#### W21 Utility shutoff protections

[LIHEAP](https://www.acf.hhs.gov/ocs/programs/liheap) and public-utility-commission complaints.

### Housing

#### W22 Get withheld security deposits back by citing the penalty

Most states require a landlord to return a deposit within a set number of days with an itemised list of deductions, and impose double or treble damages for failing. Tenants rarely know either the deadline or the penalty, so the money stays withheld. Find the statute for the person's state, check the dates against it, and draft the demand letter.

#### W23 Written repair notices

Warranty of habitability; repair-and-deduct.

#### W24 Eviction answers

[Tenant Power Toolkit](https://tenantpowertoolkit.org), [Rentervention](https://rentervention.com), [Hello Landlord](https://sixfifty.com/pro-bono/hello-landlord) exist; every other jurisdiction is the gap.

#### W25 Reasonable-accommodation requests

Under the [FHA](https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview) and the [ADA](https://www.ada.gov/).

#### W26 UK Section 21 validity checks

[Shelter](https://england.shelter.org.uk) holds the criteria.

### Work and school

#### W27 Wage claims

Final-paycheck demands and misclassification ([Form SS-8](https://www.irs.gov/forms-pubs/about-form-ss-8)).

#### W28 ADA accommodation and FMLA requests

In writing.

#### W29 EEOC charges within 180/300 days

#### W30 IDEA evaluation requests

[Wrightslaw](https://www.wrightslaw.com) holds the templates.

#### W31 Financial-aid appeals

[Student-loan](https://studentaid.gov) servicer disputes; [PSLF](https://studentaid.gov/pslf/) reconsideration.

### Consumer and travel

#### W32 Air-travel refunds

[EU261](https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm) and the US DOT [refund rules](https://www.transportation.gov/airconsumer).

#### W33 FCC informal complaints

[Filed here](https://consumercomplaints.fcc.gov); the carrier has 30 days to respond.

#### W34 Warranty and lemon-law demands

#### W35 GDPR and CCPA subject-access requests

[GDPR](https://commission.europa.eu/law/law-topic/data-protection_en) Art. 15/22 and [CCPA](https://oag.ca.gov/privacy/ccpa), via the [ICO](https://ico.org.uk) where relevant. Subject access is the fastest way to learn why an institution acted.

#### W36 Platform account terminations

For legitimate businesses, and only from the person's own records.

### Government and records

#### W37 Congressional casework

[your representative's](https://www.house.gov/representatives/find-your-representative) constituent-services staff unstick federal cases; almost unused outside the professional class.

#### W38 USCIS inquiries

The [ombudsman](https://www.dhs.gov/topics/citizenship-and-immigration-services-ombudsman) and own-file [FOIA](https://www.foia.gov). Inquiries only; filings by non-lawyers is where notario fraud lives.

#### W39 Keep prison grievances alive through the exhaustion rules

The [<abbr title="Prison Litigation Reform Act">PLRA</abbr>](https://en.wikipedia.org/wiki/Prison_Litigation_Reform_Act) bars a prisoner from federal court unless every level of the facility's internal grievance process was completed first, on the right form and inside short deadlines. Claims die procedurally rather than on merit, and the rules differ by state and facility. Track the levels and dates for one person's grievance and draft each step.

#### W40 Own-records requests

Police reports, [FERPA](https://studentprivacy.ed.gov/ferpa) files, personnel files.

### Outside the US

#### W41 UK

[mandatory reconsideration](https://www.gov.uk/mandatory-reconsideration) → tribunal; [Financial Ombudsman](https://www.financial-ombudsman.org.uk); [POPLA](https://www.popla.co.uk); [Citizens Advice](https://www.citizensadvice.org.uk) and [Advicenow](https://www.advicenow.org.uk) templates as ground truth.

#### W42 India

[RTI](https://rtionline.gov.in) requests and first appeals.

NOTE: connection refused, I don't know what's up.

#### W43 Brazil

[consumidor.gov.br](https://www.consumidor.gov.br) (10-day public company response).
