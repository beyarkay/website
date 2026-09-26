---
unlisted: true
title: Verifiable Problems to Point an Agent At
tags: []
---

This doc contains some problems that are unusually amenable to being solvable
by AI. Specifically, they have have some/all of these properties:

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

## What this is

A list of problems that are unusually amenable to an AI agent working with a person who is willing to get into the weeds, for anyone with spare time and tokens who would rather point them at something useful than at getting the newest model to play Minecraft. The models to have in mind are the [Vesuvius Challenge](https://scrollprize.org/), the [Amazon cities found with airborne lidar](https://www.nature.com/articles/s41586-022-04780-4), and the [Nazca geoglyphs nearly doubled by a machine-learning survey](https://doi.org/10.1073/pnas.2407652121): a small team, an archive nobody had finished reading, a tool that scales, and a result that made the news.

Each entry has some or all of these properties: it is easy to check whether you got the answer right; there is far more data than anyone has looked through; the data is public but in a painful format (scans of tables, handwriting, bespoke file formats); it sits in a field whose practitioners don't use machine learning; nobody is paid or responsible for doing it; and it is an easy win with an agent's help but not so easy that the agent can do it alone.

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

The 1918 pandemic is the reference case for how school closures and gathering bans change an epidemic curve, but careful timelines exist for only about 50 US cities. Every small-town paper reported first cases, closure orders, reopenings and funerals day by day, and the [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) dataset already holds 20M+ Chronicling America pages as article-level text, with the rest reachable through the [loc.gov APIs](https://www.loc.gov/apis/). Extract a dated timeline of cases, deaths and interventions for every US town with a surviving paper in 1918–19. Goal: intervention-and-outcome timelines for thousands of towns rather than dozens. Verifier: for the cities in the [Influenza Encyclopedia](https://www.influenzaarchive.org), extracted closure dates and curves must match its hand-built ones and the weekly death registrations it reproduces.

### C14b Map pre-instrumental earthquakes from newspaper damage reports

Hazard maps depend on how often large earthquakes recur, and for most of the world the record before seismographs is whatever someone wrote down about fallen chimneys. Newspapers reported damage and felt effects town by town; [Trove](https://trove.nla.gov.au/about/create-something/using-api), [Papers Past](https://paperspast.natlib.govt.nz/), the [Gallica search API](https://api.bnf.fr/fr/api-gallica-de-recherche) and [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) (Chronicling America as article text) are searchable in bulk. Turn each report into a dated macroseismic intensity point per locality, then fit a location and magnitude for each event. Goal: intensity data points and magnitude estimates for pre-1900 events in regions with thin catalogues (Australia, New Zealand, the Americas). Verifier: for events already in [AHEAD](https://www.emidius.eu/AHEAD/), [SISFRANCE](https://www.sisfrance.net/) or [CFTI5Med](https://storing.ingv.it/cfti/cfti5/), held-out newspaper-derived intensities must match the catalogue's points, and magnitudes must fall within [ISC-GEM](https://www.isc.ac.uk/iscgem/) error bars where it covers the event.

### C14c Build a storm catalogue from historic aurora sightings

The worst-case solar storm is estimated from a handful of events (1859, 1872, 1921), and the size of a storm shows in how close to the equator the aurora was seen. Newspapers printed local sightings every time; [Trove](https://trove.nla.gov.au/about/create-something/using-api), [Papers Past](https://paperspast.natlib.govt.nz/), [Delpher](https://www.delpher.nl) and [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories) cover both hemispheres from the early 1800s. Extract every dated sighting with place and direction, and derive the lowest-latitude aurora for each night. Goal: a nightly catalogue of auroral extent from about 1800 to 1950, and from it a return-period estimate for extreme storms. Verifier: nights with big sightings must line up with high values of the [aa index](https://isgi.unistra.fr/) (continuous since 1868) and with the magnetograms held at [NOAA NCEI](https://www.ngdc.noaa.gov/geomag/).

### C14d Map reprinting across the world's newspapers

Nineteenth-century papers filled columns by copying each other, so reprints trace how news, fiction and misinformation travelled. [Viral Texts](https://viraltexts.org) has built these networks for US papers and some others, and [Impresso](https://impresso-project.ch/app/) for Swiss and Luxembourg ones; the gap is joining them up across countries and languages. Run text-reuse detection (with translation for cross-language reprints) over [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories), [Trove](https://trove.nla.gov.au/about/create-something/using-api), [Papers Past](https://paperspast.natlib.govt.nz/), [Delpher](https://www.delpher.nl) and [Gallica](https://api.bnf.fr/fr/api-gallica-de-recherche). Goal: one global reprint graph with first appearance and every copy. Verifier: on the overlapping US corpus the clusters must reproduce Viral Texts' published ones.

### C14e Cross-reference politicians with company and contract notices

Newspapers printed company prospectuses with their directors, government contract awards and land sales, so a legislator who voted on a railway bill and sat on that railway's board can sometimes be caught from print alone. Member biographies and speeches are online: the [History of Parliament](https://www.historyofparliamentonline.org/) and [Hansard](https://hansard.parliament.uk/) for Britain, the [Congressional Biographical Directory](https://bioguide.congress.gov/) for the US; the newspapers are at [American Stories](https://huggingface.co/datasets/dell-research-harvard/AmericanStories), [Welsh Newspapers](https://newspapers.library.wales/) and [Trove](https://trove.nla.gov.au/about/create-something/using-api). Link each named member to directorships and contracts in print, then to their votes and speeches on the same business. The hard part is honest: land registries and company files are mostly unscanned, so this is limited to what newspapers printed. Verifier: each link cites a page image for both ends, and known cases from the historiography (Railway Mania MPs who were also directors) must be recovered.

### C15a Match tobacco industry drafts to published science

The tobacco industry ghostwrote and funded papers that shaped regulation, and the evidence sits in its own files. The [Truth Tobacco Industry Documents](https://www.industrydocuments.ucsf.edu/tobacco/) hold 14M+ documents from litigation, full text searchable through the [API](https://www.industrydocuments.ucsf.edu/research-tools/api/); most have never been read. Find internal drafts, funding memos and payments, and match each to the paper it became in [PubMed](https://pubmed.ncbi.nlm.nih.gov/). Goal: a list of published papers with an internal draft or undisclosed industry funding, each with the evidence. Verifier: every match pairs a document page with the published text, and cases already documented in the tobacco-control literature must be found.

### C15b Opioid marketing notes against pill shipments

Whether sales visits drove prescribing is the core question of the opioid litigation, and both sides of it are public. The [Opioid Industry Documents Archive](https://www.industrydocuments.ucsf.edu/opioids/) holds manufacturers' and distributors' emails, call notes and targeting lists (searchable via the [API](https://www.industrydocuments.ucsf.edu/research-tools/api/)); DEA <abbr title="Automation of Reports and Consolidated Orders System">ARCOS</abbr> shipment records down to the pharmacy were released through the [Washington Post](https://www.washingtonpost.com/graphics/2019/investigations/dea-pain-pill-database/). Extract every named prescriber and pharmacy contacted, with dates, and join to shipments. Goal: a pharmacy-level table of marketing contacts and the shipment changes that followed. Verifier: the shipment side is independent government data, so any claimed effect can be recomputed from ARCOS alone.

### C15c Geocode every spill and dump in the chemical industry papers

Chemical companies' internal records name plants, spills, dumps and quantities that often never reached a regulator. The UCSF [chemical collection](https://www.industrydocuments.ucsf.edu/chemical/), [ToxicDocs](https://www.toxicdocs.org/) and the [Poison Papers](https://www.poisonpapers.org/) are public, together millions of pages, mostly unread. Extract every named site, event, substance and quantity with dates, and geocode them. Goal: a mapped table of documented releases, flagging those absent from public records. Verifier: sites and releases cross-check against EPA [Superfund](https://www.epa.gov/superfund/search-superfund-sites-where-you-live) and [TRI](https://www.epa.gov/toxics-release-inventory-tri-program) records, and each entry cites a page image.

### C15d Score oil companies' internal climate projections

What fossil-fuel firms privately predicted about warming, set against what they said publicly, is evidence in current lawsuits. [Supran, Rahmstorf and Oreskes (2023)](https://doi.org/10.1126/science.abk0063) did this for Exxon; Shell, BP, the American Petroleum Institute and coal companies have not had the same treatment. The documents are in the UCSF [fossil fuel collection](https://www.industrydocuments.ucsf.edu/fossilfuel/) and [Climate Files](https://www.climatefiles.com). Extract every internal temperature or CO₂ projection with its date, and every public statement on the same question. Goal: a table per company of projections, their skill, and the matching public claims. Verifier: projections are scored against observed warming ([HadCRUT5](https://www.metoffice.gov.uk/hadobs/hadcrut5/)) with the same method as the Exxon paper, which must be reproduced first.

### C16 Translate highly cited science that exists only in Russian, German or Japanese

A result that is only in Russian is invisible to English search and gets rediscovered. [Math-Net.Ru](https://www.mathnet.ru/) holds Russian mathematics and physics journals back to the 1860s; the main Soviet journals were translated cover to cover from the late 1950s, but earlier volumes and many smaller journals never were. German journals are at [DigiZeitschriften](https://www.digizeitschriften.de/), Japanese ones at [J-STAGE](https://www.jstage.jst.go.jp/browse/-char/en) and [NDL Digital Collections](https://dl.ndl.go.jp/). Pick targets with [OpenAlex](https://help.openalex.org/api/) (e.g. [works filtered by language](https://api.openalex.org/works?filter=language:ru), sorted by citations, with no English version), translate them with equations intact, and publish alongside the original. Goal: an English text beside every highly cited paper whose only version is non-English. Verifier: papers that do have a professional translation (AMS Translations, the English [JETP](http://www.jetp.ras.ru/) volumes from 1955) are held out and the machine output scored against them.

### C17a Transcribe the secret White House tapes

Presidents from Roosevelt to Nixon recorded thousands of hours of meetings and calls, and most of it has never been transcribed, so historians cite the same few famous conversations. The [Nixon tapes](https://www.nixonlibrary.gov/white-house-tapes) run to about 3,700 hours, public domain, with transcripts only for Watergate trial and a few other subsets; the [Miller Center](https://millercenter.org/the-presidency/secret-white-house-tapes) holds the Kennedy and Johnson recordings, partly transcribed. Produce a timestamped, speaker-labelled transcript of every released hour, marking inaudible passages rather than guessing. Goal: the whole released collection full-text searchable. Verifier: the existing professional transcripts, held out, give word-error rate and speaker-attribution accuracy.

### C17b Transcribe public broadcasting, oral histories and hearings

Decades of radio, television and interviews can only be found by their catalogue titles because nobody has the words. The [American Archive of Public Broadcasting](https://americanarchive.org/) holds 100k+ programmes (with rough machine transcripts for some, corrected through its FIX IT game), and oral-history collections such as the [Veterans History Project](https://www.loc.gov/vets/) and [Densho](https://densho.org/) hold thousands of interviews; congressional hearing video is linked from the [House Committee Repository](https://docs.house.gov/Committee/Calendar/ByMonth.aspx). Produce timestamped, speaker-labelled transcripts. Goal: every spoken word in these archives searchable, with speaker and time. Verifier: hearings have printed transcripts on [govinfo](https://www.govinfo.gov/app/collection/chrg) and many oral histories have human transcripts; held out, these give word-error rate.

### C18 Un-redact by diffing releases S

The same page is often released more than once with different black boxes: the 2017 and 2025 [JFK](https://www.archives.gov/research/jfk) tranches, a [CIA CREST](https://www.cia.gov/readingroom/) copy versus the [FBI Vault](https://vault.fbi.gov) copy of the same memo, a cable held at both [TNA](https://www.nationalarchives.gov.uk) and [NARA](https://www.archives.gov). Align page images across releases and surface every word visible in one copy and redacted in another. Researchers do this by hand on famous documents; nobody has run it across CIA CREST, the FBI Vault and the JFK releases. Verifier: the recovered text must be visible in a public page image. Guessed redactions count for nothing.

## D Scientific data rescue

### D1a Turn ship logbooks into marine weather observations S

The ocean weather record before 1900 is thin, and every watch on a naval ship logged position, pressure, temperature and wind. US Navy deck logs are scanned in the [NARA catalog](https://www.archives.gov/research/military/logbooks/navy-online) and Royal Navy logs sit in [TNA ADM 53](https://discovery.nationalarchives.gov.uk/details/r/C1762) (2.4M items, some digitised); volunteers at [Old Weather](https://www.oldweather.org) have typed a fraction by hand. Read the handwritten tables into dated, positioned observations and submit them to <abbr title="International Comprehensive Ocean-Atmosphere Data Set">ICOADS</abbr> ([NOAA](https://www.ncei.noaa.gov/products/international-comprehensive-ocean-atmosphere-data-set)). Goal: every scanned logbook page as ICOADS observations. Verifier: pages already transcribed by Old Weather are held out, and two ships in the same port on the same day must agree on pressure.

### D1b Transcribe land weather-station sheets S

Long station records set the baseline for local climate trends and extremes, and millions of handwritten monthly sheets are scanned but never typed. NOAA's scanned US cooperative observer forms are on the [NCEI forms page](https://www.ncei.noaa.gov/access/search/data-search/cooperative-weather-observations-publication), and registries of un-rescued sources worldwide are kept by the [Copernicus data-rescue service](https://data-rescue.copernicus-climate.eu/), [ACRE](https://www.met-acre.net/) and the [I-DARE portal](https://www.idare-portal.org/). [Rainfall Rescue](https://www.zooniverse.org/projects/edh/rainfall-rescue) is the model: volunteers typed over five million UK rainfall values in about two weeks in 2020, and after quality control they entered the Met Office record ([Hawkins et al.](https://doi.org/10.1002/gdj3.157)). Transcribe sheets into daily or monthly series. Goal: scanned sheets listed in these registries turned into series in national archives or <abbr title="Global Historical Climatology Network">GHCN</abbr>. Verifier: sheets already keyed in (Rainfall Rescue's are public) are held out, and neighbouring stations must agree within normal spatial variance.

### D2 Digitise analogue seismograms of the great pre-digital earthquakes

The largest earthquakes ever recorded (1906 San Francisco, 1923 Kanto, 1960 Chile, 1964 Alaska) and the early nuclear tests exist only as ink or film traces, so modern relocation and moment-tensor methods have never been applied to them. USGS has released the [WWSSN film-chip scans](https://www.usgs.gov/data/world-wide-standardized-seismographic-network-film-chip-scans) (1962–78, including 153 M6+ earthquakes and 156 nuclear explosions, about 5% of 3.7M chips), INGV's [Seismogram Request](http://seismogramrequest.rm.ingv.it/) serves 200,000+ European scans from 1895–1984 (free registration), and the [Legacy Seismograms](https://www.legacy-seismograms.eu/useful-links/) group lists other archives. The former IRIS SeismoArchives site, with the Caltech scans and event collections, survives only as a [Wayback capture](https://web.archive.org/web/20231205151122/http://ds.iris.edu/seismo-archives/); recovering and republishing those scans is itself a contribution. Convert traces to calibrated time series (Harvard's [DigitSeis](https://projects.iq.harvard.edu/digitseis) is a starting tool) and re-derive locations and mechanisms. Goal: calibrated waveforms and modern source parameters for every pre-1980 event above magnitude 7. Verifier: magnitudes must fall within [ISC-GEM](https://www.isc.ac.uk/iscgem/) uncertainties, and late-1970s events recorded both on film and by early digital stations must give the same waveform.

### D3 Harvard DASCH plates: century-long light curves S

Harvard photographed the whole sky over and over from 1885 to 1992, so almost any star or asteroid brighter than about 15th magnitude has a century of measurements waiting. [DASCH](https://dasch.cfa.harvard.edu/dr7/) finished scanning ~450,000 plates and released its final data (DR7) in 2024 with light-curve access; the German plate archives are in [APPLAUSE](https://www.plate-archive.org/). Targets: stars that vanished between old plates and modern surveys ([VASCO](https://vasconsite.wordpress.com)); pre-discovery positions of asteroids and comets ([SSOIS](https://www3.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois/) lists which plates an orbit crosses, and each recovered position lengthens the orbital arc); and century-long fades or outbursts of now-famous objects. The catch is plate artefacts: Schaefer's 2016 finding that Boyajian's star faded over the century was attributed by Hippke et al. and Lund et al. to plate systematics. Goal: a century-long light curve for every object to ~15th magnitude, with artefacts flagged. Verifier: recovered asteroid positions must fit the orbit at the [Minor Planet Center](https://www.minorplanetcenter.net/), and known variable stars must reproduce their published periods.

### D4 Annotate tree-rings with calendar years

Tree rings are used to estimate land temperature before thermometers, but first each ring on a core scan must be annotated with the year it grew. The [<abbr title="International Tree-Ring Data Bank">ITRDB</abbr>](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring) holds ~5,000 cores already done; labs hold far more measured once and never dated. Date those against the published chronologies and publish the result.

### D5 Find climate proxy records whose dates disagree with their neighbours

Pollen, cave deposits, corals, ice cores and tree rings each record past climate, but each series carries its own age model, and a series dated a few decades wrong smears every reconstruction built from it. The data are open: the [PAGES 2k temperature database](https://www.ncei.noaa.gov/access/paleo-search/study/21171) (692 records), [Neotoma](https://api.neotomadb.org/) for pollen, [SISALv3](https://www.ncei.noaa.gov/pub/data/paleo/speleothem/SISAL-v3/) for speleothems, and the [NOAA paleoclimate archive](https://www.ncei.noaa.gov/products/paleoclimatology) for the rest; [LiPD](https://lipd.net/) and [Pyleoclim](https://pyleoclim-util.readthedocs.io/) make them machine-readable. Reconciliation means three concrete checks: records from the same site or region should agree on when shifts happened; every proxy that can record them should show the big volcanic tie-points (the 1257 Samalas and 1815 Tambora sulfate spikes and their cooling) in the same year; and each record should track the instrumental series where they overlap. Goal: a list of proxy series whose age models are inconsistent with their neighbours, with the evidence and the offset that fixes them. Verifier: an offset proposed for one series must bring it into line with independent records it was not fitted to.

### D6 Measure glacier retreat from historic photographs

Glacier length changes before 1950 are known for only a few hundred glaciers, yet photographers and surveyors captured thousands of termini. The [NSIDC Glacier Photograph Collection](https://nsidc.org/data/g00472) holds over 25,000 images dating back to 1857, the [ETH Zurich image archive](https://ba.e-pics.ethz.ch/) covers the Alps, and USGS runs [repeat photography in Glacier National Park](https://www.usgs.gov/centers/norock/science/repeat-photography-project). Monoplotting projects an old oblique photo onto a terrain model so the terminus can be mapped ([WSL Monoplotting Tool](https://www.wsl.ch/de/services-produkte/monoplotting-tool/)); match each photo to its glacier in [GLIMS](https://www.glims.org/maps/glims). Goal: a dated terminus position for every photographed glacier that has no pre-1950 front-variation record in the [WGMS Fluctuations of Glaciers database](https://wgms.ch/data_databaseversions/). Verifier: glaciers with both photographs and surveyed front variations in WGMS are held out and must agree.

### D7 Classify the plankton image backlog

Plankton cameras now take images far faster than anyone can label them. (The bigger prize, re-counting the Continuous Plankton Recorder's 90 years of silk samples at species level, needs a Marine Biological Association partnership to image the physical archive first, so it is not listed.) [EcoTaxa](https://ecotaxa.obs-vlfr.fr/) holds hundreds of millions of plankton images from many instruments, a large share never validated, and the Imaging FlowCytobot [dashboards](https://ifcb-data.whoi.edu/) stream more from fixed stations. Classify the unvalidated images to species where possible, with calibrated confidence. Goal: validated species-level counts for the whole unclassified backlog. Verifier: the human-validated subsets, held out, give per-class precision and recall.

### D8 Extend the sea-level record backwards from paper tide charts

Measuring how fast sea level is rising needs records long enough to show acceleration, and [<abbr title="Permanent Service for Mean Sea Level">PSMSL</abbr>](https://psmsl.org) thins out before 1950. The missing years are ink traces on paper. [BODC](https://www.bodc.ac.uk/data/hosted_data_systems/sea_level/historical_uk_tide_gauge_data/) has scanned UK station charts and [NOAA](https://www.ngdc.noaa.gov/hazel/view/hazards/tsunami/marigram-search/) 3,000 more around tsunami events, nearly all still un-traced; elsewhere they sit in harbour archives and need someone to go in person. Trace them into series and submit to PSMSL. Goal: station-years before 1950 added to PSMSL.

### D9 Enter legacy soil surveys into WoSIS

Whether soils are gaining or losing carbon can only be measured against a baseline, and the best baseline is a century of national surveys that recorded profile depth, texture and organic carbon. Most are scanned but never entered into a database: the [ISRIC World Soil Library](https://library.wur.nl/WebQuery/isric/start) holds 17,000 reports and 10,000 maps (a third or more as PDFs), and USDA's archived county soil survey manuscripts are on [NRCS's download site](https://nrcs.app.box.com/s/d0hq4ddo8t8otkwaejj131xp7xo0yi9g). Extract profile descriptions and lab tables, with location and date, into the format of [WoSIS](https://www.isric.org/explore/wosis). Goal: pre-1980 profiles in WoSIS so soil-carbon change over a century can be measured. Verifier: surveys whose profiles are already in WoSIS are held out and must match.

### D10 Agricultural experiment station bulletins

Century-old variety-trial yield data, scanned, never aggregated. The bulletins are in Cornell's [Core Historical Literature of Agriculture](https://digital.library.cornell.edu/collections/chla), [HathiTrust](https://babel.hathitrust.org/cgi/ls) (full-text search for "agricultural experiment station bulletin"), and the land-grant repositories listed by [USAIN](https://usain.org/Access-to-Extension-and-Experiment-Station-Publications); variety pedigrees are in [Genesys](https://www.genesys-pgr.org) and [GRIN](https://npgsweb.ars-grin.gov). Goal: century-long yield series for named varieties, separating genetic gain from weather and climate sensitivity.

### D11 Rebuild ionosphere history from amateur radio contest logs

A solar storm that garbles <abbr title="High Frequency">HF</abbr> radio also degrades satellite positioning and pushes current into power grids, and forecasting it means knowing how the ionosphere has behaved over many solar cycles. Ionosondes are sparse and recent. A logged radio contact dates and locates one, so decades of public contest logs (e.g. the [CQ WW public logs](https://cqww.com/publiclogs/)) are a measurement record nobody has assembled: [HamSCI](https://hamsci.org) uses a fraction, [WSPRnet](https://wsprnet.org) only the automated era. Parse the archives into a propagation dataset.

### D12 Date and place the timber in historic buildings and artefacts

A roof beam, a panel painting or a ship's frame carries the same ring pattern as a living tree, so it can be matched against dated chronologies to say when the wood was felled and where it grew. Museums pay specialists to do this one object at a time. The realistic start is ring-width series already measured but undated or dated against only one chronology: the [Digital Collaboratory for Cultural Dendrochronology](https://dendro.dans.knaw.nl/) holds thousands from buildings and art, and the [ITRDB](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring) supplies reference chronologies; [dplR](https://cran.r-project.org/package=dplR) does the cross-dating statistics. Photographs rarely show end grain, so photographed collections help only where macro images of sections exist. Goal: a felling date and provenance region for every undated series, with match statistics. Verifier: buildings with published felling dates in the [Vernacular Architecture Group database](https://archaeologydataservice.ac.uk/archives/view/vag_dendro/) are held out and must be recovered.

## E Earth imagery archives

### E1a Map wartime bomb craters to locate unexploded ordnance

Unexploded WWII bombs still turn up on British building sites, and the <abbr title="unexploded ordnance">UXO</abbr> risk maps that developers buy are drawn mainly from wartime bomb-census records, not from what the ground looked like afterwards. The [National Collection of Aerial Photography](https://ncap.org.uk/) (NCAP) holds tens of millions of RAF reconnaissance frames and captured Luftwaffe coverage of Britain, and the RAF's 1940s post-war verticals of England are in the [Historic England Archive](https://historicengland.org.uk/images-books/archive/collections/aerial-photos/). The agent georeferences the frames for a named city, detects craters and bomb-damaged plots, and records each with the date of the photograph. Goal: a georeferenced crater layer for London, Coventry, Hull and Plymouth, precise enough for a site surveyor to use. Verifier: agreement with the London bomb census mapped by [Bomb Sight](http://bombsight.org/), with [Zetica's free UK UXO risk maps](https://zeticauxo.com/downloads-and-resources/risk-maps/), and with recorded UXO finds.

### E1b Measure post-war landscape loss from 1930s–50s aerial photographs

Hedgerow, pond, wetland and orchard loss after 1945 is widely asserted but has been measured only in sample surveys that start in the 1970s. Photographs of the earlier landscape survive: the RAF 1940s verticals in the [Historic England Archive](https://historicengland.org.uk/images-books/archive/collections/aerial-photos/), Cambridge's [CUCAP](https://www.cambridgeairphotos.com/) collection, and US frames back to the 1930s in [USGS Aerial Photo Single Frames](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-aerial-photography-aerial-photo-single-frames), searchable in [EarthExplorer](https://earthexplorer.usgs.gov/). The agent orthorectifies a county's mid-century frames, maps those four features, and compares them with modern imagery. Goal: per-parish tables of hedgerow length, pond count, and wetland and orchard area around 1946 against today, for at least one English county and one US county. Verifier: hand-digitised sample parishes held out, plus UKCEH's [Countryside Survey](https://www.ceh.ac.uk/our-science/projects/countryside-survey), which starts in 1978 and so checks the trend rather than the baseline.

### E2 Find archaeological sites lost since the 1960s in declassified spy-satellite photos

Reconnaissance photos from the 1960s and 1970s show the Middle East and Central Asia before dams, irrigation, urban sprawl and war erased thousands of archaeological sites. They are free on [EarthExplorer](https://earthexplorer.usgs.gov/) under "Declassified Data": [Declass 1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1) (CORONA, ARGON and LANYARD, 1960–72, ~860,000 frames), [Declass 2](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-2) (KH-7 GAMBIT and the KH-9 mapping camera) and [Declass 3](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-3) (KH-9 HEXAGON panoramic at about 1 m, declassified in 2011 and barely used). The [CORONA Atlas](https://corona.cast.uark.edu/) has orthorectified part of the Middle East CORONA coverage, but most KH-9 frames are unrectified. The agent orthorectifies frames over Iraq, Syria, Iran and Central Asia and catalogues tells, canals, qanats and fortifications visible then and absent from modern imagery. Goal: georeferenced declassified coverage of the region plus a catalogue of sites visible in the old frames and gone today. Verifier: match against site records and condition assessments in the [EAMENA database](https://database.eamena.org/), and a random sample of new sites checked by eye in both images.

### E3a Build a building-level database of US cities from Sanborn fire-insurance maps

Sanborn maps recorded every building in thousands of US towns from the 1860s to the 1960s: footprint, construction material, number of storeys, use, and named industrial occupants. That makes them the best record of what American cities were built from and where polluting industry stood. The Library of Congress has more than 35,000 sheets online in its [Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/), with IIIF images and the loc.gov JSON API. The agent georeferences the sheets and extracts each building polygon with its colour-coded material, storeys and labelled use. Goal: a building-level database of US cities for 1880–1950 that can be queried for, say, every former gasworks, tannery and dry cleaner, for brownfield screening. Verifier: hand-transcribed sample sheets held out, and footprint overlap with modern parcel data where buildings survive.

### E3b Gazetteer of vanished features from historic Ordnance Survey maps

Victorian and Edwardian Ordnance Survey sheets mark mills, mine shafts, wells, ponds, quarries and railways that have since vanished, and some still matter: filled shafts collapse, and old quarries and ponds lie under housing. The National Library of Scotland serves georeferenced OS sheets for Great Britain from the 1840s onward at [maps.nls.uk](https://maps.nls.uk/geo/explore/), and [MapReader](https://mapreader.readthedocs.io/) (Alan Turing Institute) is an open pipeline built for these sheets. The agent runs feature detection and text spotting across the sheets and records each feature with the dates it first and last appears. Goal: a national gazetteer of features shown on historic OS maps and absent from the current map, with coordinates and date ranges. Verifier: comparison with current OS OpenData and with the Coal Authority's mine-entry records, plus precision on a hand-checked sample.

### E3c Old coastlines and river courses from georeferenced historic maps

Where a coast or river lay 200 years ago tells engineers how fast it moves and where floods may take it back. The [David Rumsey Map Collection](https://www.davidrumsey.com/view/georeferencer) has over 100,000 maps online, many already crowd-georeferenced, and [Allmaps](https://allmaps.org/) georeferences IIIF maps from several libraries and exposes the control points. The agent extracts coastlines and river centrelines from dated maps and builds a time series for each location, with a positional uncertainty derived from the georeferencing residuals. Goal: a public layer of pre-1900 coastline and river positions for a named region (for example the English North Sea coast or the lower Mississippi), each line carrying its date and error bar. Verifier: residuals on held-out control points, agreement between independent maps of the same date, and overlap with early aerial photography where the dates meet.

### E5a Find uncharted wrecks in UK offshore-wind survey data

Wrecks, crashed aircraft, dumped munitions, lost containers and drowned prehistoric landscapes show up in engineering-grade multibeam and side-scan sonar but not in public global grids, since [GEBCO](https://www.gebco.net/data-products-gridded-bathymetry-data/gebco2025-grid) is a 15-arc-second (~450 m) grid. The Crown Estate's [Marine Data Exchange](https://www.marinedataexchange.co.uk) holds more than 200 TB of survey data that offshore wind, cable and aggregate developers must deposit, and nobody has looked at it except for engineering. The agent processes the multibeam and side-scan data, detects discrete seabed contacts and classifies them. Goal: every seabed object larger than a few metres in the released survey areas that is missing from the UK Hydrographic Office wrecks and obstructions layer. Verifier: recall on known wrecks in the UKHO layer (via the [Admiralty marine data portal](https://datahub.admiralty.co.uk/portal/apps/sites/#/marine-data-portal)), and a sample of new contacts reviewed by eye.

### E5b Find uncharted wrecks in NOAA's multibeam archive

Wrecks, crashed aircraft, dumped munitions, lost containers and drowned landscapes are visible in high-resolution multibeam but not in coarse global grids. NOAA's [NCEI bathymetry viewer](https://www.ncei.noaa.gov/maps/bathymetry/) serves downloadable multibeam from thousands of research and hydrographic cruises, plus NOS hydrographic surveys as gridded BAG files, mostly in US waters. The agent grids the swaths at their native resolution, detects discrete seabed contacts and classifies them. Goal: every object larger than a few metres in the archive's coverage that is missing from NOAA's [Wrecks and Obstructions database](https://nauticalcharts.noaa.gov/data/wrecks-and-obstructions.html). Verifier: recall on the charted wrecks in that database, and a sample of new contacts reviewed by eye.

### E5c Find uncharted wrecks in EMODnet's high-resolution European bathymetry

Wrecks, crashed aircraft, dumped munitions, lost containers and drowned landscapes are visible only in bathymetry at a few metres' resolution. The main [EMODnet Bathymetry](https://emodnet.ec.europa.eu/en/bathymetry) terrain model is ~115 m and too coarse, but EMODnet also serves more than 200 high-resolution composite DTMs of coastal areas and hotspots at up to 1/512 arc-minute (a few metres), and its survey catalogue lets users request the underlying survey data from providers. The agent downloads the high-resolution DTMs, detects discrete seabed contacts and classifies them. Goal: every object above a few metres in those tiles that is missing from the UKHO wrecks database, which covers all European seas. Verifier: recall against the wrecks layer in the [EMODnet geoviewer](https://emodnet.ec.europa.eu/geoviewer/), which is built from the UKHO database, plus a sample of new contacts checked by eye.

### E5d Find uncharted wrecks in Australian survey data

Wrecks, sunken aircraft, dumped munitions and drowned landscapes are visible in high-resolution multibeam, and Australia's waters are large and thinly charted. Geoscience Australia's AusSeabed programme publishes multibeam surveys through the [GA marine portal](https://portal.ga.gov.au/persona/marine). The agent downloads the highest-resolution surveys, detects discrete seabed contacts and classifies them. Goal: every object above a few metres in the surveyed areas that is missing from the national wreck register. Verifier: recall against the [Australasian Underwater Cultural Heritage Database](https://www.dcceew.gov.au/parks-heritage/heritage/underwater-heritage/auchd) of shipwrecks and aircraft wrecks, and a sample of new contacts checked by eye.

### E6 Measure every tailings dam's movement with free radar

Tailings dams hold mine waste behind embankments often built from the waste itself. The Brumadinho failure in Brazil in 2019 killed 270 people, and a retrospective study [found precursory deformation in Sentinel-1 radar data](https://www.nature.com/articles/s43247-020-00079-2). The [Global Tailings Portal](https://tailing.grida.no) lists about 1,800 facilities, with locations, disclosed by more than 100 mining companies. Sentinel-1 radar since 2014 is free from the [Copernicus Data Space](https://dataspace.copernicus.eu/), pre-processed interferograms are in the [COMET LiCSAR portal](https://comet.nerc.ac.uk/comet-lics-portal/), and in Europe the [European Ground Motion Service](https://egms.land.copernicus.eu/) already publishes calibrated time series. The agent builds an <abbr title="Interferometric Synthetic Aperture Radar">InSAR</abbr> displacement time series for each dam with a documented noise floor, not "alerts", because vegetation, thermal cycles and atmosphere produce most false positives. Goal: public time series for every portal dam coherent enough to measure, with the per-site noise floor stated. Verifier: a rerun on Brumadinho must reproduce the published precursor, and dams known to be stable must stay within their noise floor.

### E7 Find the bridges that are already moving

Retrospective radar analysis of Genoa's Morandi bridge [showed movement before its 2018 collapse](https://doi.org/10.3390/rs11121403), and after Dresden's Carola bridge fell in 2024 analysts found [a movement cluster at the failure point](https://www.newcivilengineer.com/latest/distinct-movement-cluster-evident-on-carola-bridge-in-dresden-prior-to-its-collapse-research-finds-17-09-2024/) in archived Sentinel-1 data; nobody runs this prospectively and publishes the results. The processing already exists: the [European Ground Motion Service](https://egms.land.copernicus.eu/) publishes millimetre-scale motion for every coherent point in Europe, updated yearly, and NASA's [OPERA DISP-S1](https://www.earthdata.nasa.gov/data/catalog/asf-opera-l3-disp-s1-v1-1) gives 30 m displacement time series for North America from 2016. Bridge locations come from the [US National Bridge Inventory](https://www.fhwa.dot.gov/bridge/nbi/ascii.cfm) (about 620,000 bridges with condition ratings) and OpenStreetMap bridge ways elsewhere. The agent joins points to bridges, removes seasonal thermal motion, and ranks bridges by residual long-term displacement. Goal: a public per-bridge table of residual trend with uncertainty. Verifier: correlation with NBI condition ratings, and a time-split test in which the ranking built from earlier data should put later closures and failures near the top.

### E8a Transcribe and georeference imaged museum specimens that lack coordinates

A specimen without coordinates cannot feed a range map, a niche model or a conservation assessment, and for most old specimens the locality exists only as handwriting on a photographed label. GBIF indexes about 77 million imaged preserved specimens, some 50 million of them without coordinates ([filtered search](https://www.gbif.org/occurrence/search?media_type=StillImage&has_coordinate=false&basis_of_record=PRESERVED_SPECIMEN), [same query via the API](https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&hasCoordinate=false&basisOfRecord=PRESERVED_SPECIMEN&limit=0)), and [iDigBio](https://portal.idigbio.org/portal/search) adds more through its [search API](https://github.com/iDigBio/idigbio-search-api/wiki). Volunteers on [Notes from Nature](https://www.zooniverse.org/organizations/md68135/notes-from-nature) do this by hand, one expedition at a time. The agent reads each label image, transcribes and parses the locality, and assigns coordinates with an uncertainty radius (the standard point-radius method). Goal: coordinates with uncertainty for millions of specimens, returned to the holding institutions as annotations. Verifier: hold out specimens that already have both a label image and expert-assigned coordinates, and report the distribution of error distances.

### E8b Measure flowering-time shifts from herbarium sheets

Herbarium sheets record the date a plant was collected in flower, so a century of sheets shows how much earlier spring now arrives. The method, flowering day-of-year regressed on year or spring temperature, is established ([Willis et al. 2017 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5888139/)) but has been applied species by species with hand scoring. GBIF indexes about 62 million imaged plant specimens ([search](https://www.gbif.org/occurrence/search?media_type=StillImage&basis_of_record=PRESERVED_SPECIMEN&taxon_key=6), [API](https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&basisOfRecord=PRESERVED_SPECIMEN&taxonKey=6&limit=0)). The agent scores each sheet's phenophase (bud, flower, fruit) from the image, pairs it with collection date and place, and fits the shift per species and region. Goal: a table of flowering-date shift in days per decade, with confidence intervals, for every species with enough dated sheets. Verifier: hand-scored sheets held out to test the scoring, and agreement with field observations from the [USA National Phenology Network](https://www.usanpn.org/data) where species and regions overlap.

### E9a Map seagrass in turbid temperate waters

Seagrass stores carbon and shelters fisheries, and the easy part of mapping it is done. Mangroves are mapped by [Global Mangrove Watch](https://www.globalmangrovewatch.org/), tropical coral and shallow benthic habitats by the [Allen Coral Atlas](https://allencoralatlas.org), and in 2026 an Arizona State team published [the first global 10 m seagrass map](https://news.asu.edu/20260624-environment-and-sustainability-first-complete-map-worlds-seagrass-offers-warnings-and-hope) from Sentinel-2, covering clear, shallow water only. Turbid temperate coasts, where optical satellites cannot see the bottom, are still covered mainly by the patchy [UNEP-WCMC seagrass layer](https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb). The agent maps intertidal and shallow subtidal beds along a named turbid coast (for example Great Britain or the Wadden Sea) from low-tide Sentinel-2 scenes from the [Copernicus Data Space](https://dataspace.copernicus.eu/), plus public aerial and drone surveys. Goal: a seagrass extent map for that coast with stated accuracy and minimum mappable bed size. Verifier: field records from [Project Seagrass](https://www.projectseagrass.org/) and its [SeagrassSpotter](https://seagrassspotter.org/) app, and quadrat data from [Seagrass-Watch](https://www.seagrasswatch.org/).

### E9b Map which peatlands are drained, field by field

Drained peat oxidises and releases carbon, a few per cent of global human greenhouse emissions, and restoration funding needs to know which fields are drained. The [Global Peatland Database](https://greifswaldmoor.de/global-peatland-database-en.html) (Greifswald Mire Centre) compiles peat extent and drainage status for 268 countries and regions from national maps of very uneven quality, mostly as per-country estimates rather than mapped fields. England has done it properly: the [England Peat Map](https://england-peat-map-portal-ncea.hub.arcgis.com/) models peat extent, depth, condition and drainage grips from lidar and satellite imagery, trained on [field depth surveys](https://naturalengland-defra.opendata.arcgis.com/datasets/Defra::england-peat-map-peat-depth-surveys/about). The agent applies the same approach to a country without such a map (for example Ireland or Poland), detecting drainage ditches from open lidar and imagery. Goal: a field-level drained/undrained peat map for that country, with accuracy stated. Verifier: train the pipeline without English data and test it against the England Peat Map and its survey points, then check against national soil-survey peat points in the target country.

### E10a Inventory brick kilns outside South Asia

Brick kilns across South Asia rely heavily on debt-bonded labour, and the Rights Lab's [Slavery from Space](https://www.zooniverse.org/projects/ezzjcw/slavery-from-space) work estimated 55,387 kilns in the "Brick Belt" ([Boyd et al. 2018](https://www.nottingham.ac.uk/research/beacons-of-excellence/rights-lab/resources/academic-publications/2019/march/boyd-et-al-brick-kilns.pdf)). Counting and kiln technology in South Asia are now done: [SentinelKilnDB](https://huggingface.co/datasets/SustainabilityLabIITGN/SentinelKilnDB) has 62,671 hand-validated kilns across the Indo-Gangetic Plain, Pakistan, Afghanistan and Bangladesh, labelled by type (fixed-chimney, circular and zigzag) on free Sentinel-2 imagery. The gap is elsewhere: Cambodia, Myanmar and East Africa have kiln industries with reported debt bondage and no public inventory. The agent trains on SentinelKilnDB and runs on Sentinel-2 from the [Copernicus Data Space](https://dataspace.copernicus.eu/) for those countries. Goal: a public kiln inventory with type and first-seen year for each new country. Verifier: precision and recall on hand-labelled random tiles; a kiln is not proof of forced labour, so the product is a sampling frame for inspectors and surveys.

### E10b Predict Brazil's forced-labour sites from land-use history

Brazil publishes a "dirty list" ([Cadastro de Empregadores](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/areas-de-atuacao/cadastro_de_empregadores.pdf)) of employers caught using slave-like labour, naming each establishment, often a farm or charcoal camp identified by name and municipality, and updating it about twice a year. Rural properties have mapped boundaries in the national rural environmental register ([SICAR](https://www.car.gov.br/)), and their history is visible in [Global Forest Watch](https://www.globalforestwatch.org/map/) deforestation layers and [IBAMA's embargoed areas](https://servicos.ibama.gov.br/ctf/publico/areasembargadas/ConsultaPublicaAreasEmbargadas.php). The agent matches each listed establishment to a property polygon and profiles it: clearing, burning, pasture conversion, charcoal kilns, embargoes. It then tests whether that profile identifies properties that appear on later lists. Goal: a matched, geolocated version of the list, plus a ranked risk map of unlisted properties. Verifier: a time split, in which a model built on older lists is scored on the employers added in later updates. [Amazon Mining Watch](https://amazonminingwatch.org/), which maps illegal mining across the Amazon from Sentinel-2, is the model for publishing such a layer.

### E11 Identify uncaptioned photographs in library collections

The Library of Congress's [Bain News Service collection](https://www.loc.gov/pictures/collection/ggbain/) holds about 40,000 glass negatives, mostly from 1900 to the 1920s, many with only a word or two of caption. The Library posts them to its [Flickr Commons photostream](https://www.flickr.com/photos/library_of_congress/) and has updated more than 500 catalogue records from commenters' identifications, and other members of [Flickr Commons](https://www.flickr.com/commons) have similar backlogs. Bain was a news agency, so many of these photographs were printed with captions in newspapers. The strongest method is to image-match each negative against the page images in [Chronicling America](https://www.loc.gov/collections/chronicling-america/) and take the printed caption, falling back on dating from vehicles, signage and shadows. Goal: date, place and named people for each uncaptioned Bain image, with the newspaper page cited as evidence. Verifier: images the Flickr crowd has already solved (records citing "Source: Flickr Commons project") serve as held-out answers.

### E12 Complete the landslide catalogue where news coverage is thin

Landslide hazard models are trained on catalogues, and NASA's [Global Landslide Catalog](https://gpm.nasa.gov/landslides/) is compiled from news reports since 2007, so it is densest wherever English-language media are. Sentinel-2 images every land surface at 10 m every five days, free from the [Copernicus Data Space](https://dataspace.copernicus.eu/), and a fresh landslide shows as sudden bare ground on a vegetated slope. The agent runs change detection after heavy-rain and earthquake events and outputs dated landslide polygons. Goal: new events and a completeness estimate for regions where news coverage is thin (Central Africa, New Guinea, the Andes). Verifier: held-out mapped inventories, namely the [BGS National Landslide Database](https://www.bgs.ac.uk/datasets/national-landslide-database/), Italy's [IFFI](https://www.progettoiffi.isprambiente.it/cartografia-on-line/), the [USGS US Landslide Inventory](https://www.usgs.gov/tools/us-landslide-inventory-and-susceptibility-map), and post-event inventories such as the ~25,000 landslides mapped after the 2015 Gorkha earthquake.

### E13 Validated shoreline-change rates for every coastal settlement

Global shoreline change has been measured: Luijendijk et al. [found about 24% of sandy beaches eroding](https://doi.org/10.1038/s41598-018-24630-6), the [Deltares Shoreline Monitor](https://shorelinemonitor.deltares.nl/) publishes rates along global transects, and [DEA Coastlines](https://www.dea.ga.gov.au/products/dea-coastlines) and [Digital Earth Africa Coastlines](https://docs.digitalearthafrica.org/en/latest/data_specs/Coastlines_specs.html) give tide-corrected annual shorelines for two continents. What is missing is a validated rate with uncertainty for each settlement, the number a council or insurer would actually use. [CoastSat](https://github.com/kvos/CoastSat) is the open Python toolkit to start from: install it, authenticate to Google Earth Engine, draw a polygon, and it extracts shorelines from Landsat and Sentinel-2 since 1984 with tidal correction, while [SDS_Benchmark](https://github.com/kvos/SDS_Benchmark) gives the validation protocol. The agent runs this for every coastal settlement above a population threshold. Goal: an erosion or accretion rate with confidence interval per settlement, with a flag where tide or wave corrections are inadequate. Verifier: long-term surveyed beaches, namely [Narrabeen](http://narrabeen.wrl.unsw.edu.au/), Duck (North Carolina) and Truc Vert (France).

### E14a Detect looting pits at Middle Eastern and North African archaeological sites

Looting in Syria and Iraq after 2011 was measured by analysts counting pits by hand on commercial imagery. The [EAMENA database](https://database.eamena.org/) records sites across the Middle East and North Africa with condition assessments. The binding constraint is imagery: pits are a metre or two across and invisible at Sentinel-2's 10 m, so the agent needs sub-metre data, which is free only after disasters via the [Vantor (formerly Maxar) Open Data Program](https://vantor.com/company/open-data-program/) or under licence; the 1960s–70s baseline is free as CORONA and KH-9 frames in [EarthExplorer](https://earthexplorer.usgs.gov/) under "Declassified Data". The agent trains a pit detector on existing hand counts and runs it on every high-resolution time series it can legally obtain for EAMENA sites. Goal: a dated looting index for each covered site. Verifier: EAMENA condition assessments that record looting, held out.

### E14b Match auction lots against stolen-art databases

Stolen and looted objects resurface at auction, often years later and in another country, and matching is still done by hand, lot by lot. The registers are Interpol's [Stolen Works of Art Database](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/Stolen-Works-of-Art-Database) (free, but it needs a registered account or the [ID-Art app](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/ID-Art-mobile-app)), the Carabinieri's [Leonardo database](https://tpcweb.carabinieri.it/SitoPubblico/), and the FBI's [National Stolen Art File](https://www.fbi.gov/investigate/violent-crime/art-theft/national-stolen-art-file). Online auction catalogues are public. The agent image-matches each new lot photograph against the registers, subject to their terms of use, and queues candidate matches with a similarity score for a human to check. Goal: a continuous feed of candidate matches between current auction lots and registered stolen objects. Verifier: replay past cases where a stolen object was recovered after being spotted at auction; the matcher should find them from the catalogue photographs.

### E15 Triage iNaturalist's Unknown observations for human identifiers

iNaturalist holds millions of observations with no identification. It is not simply cleared because the site's computer vision already suggests names, but research grade requires agreement from at least two human identifiers, and iNaturalist's [machine-generated content rules](https://www.inaturalist.org/pages/machine_generated_content) make automated identifications a suspendable offence, so an agent must not vote. The legitimate work is triage: pull [Unknown observations](https://www.inaturalist.org/observations?iconic_taxa=unknown) through the [API](https://api.inaturalist.org/v1/docs/), classify them, and publish per-taxon queues so that human specialists spend their time where it counts. The agent also flags candidate first regional records of invasive species, checked against [EASIN](https://easin.jrc.ec.europa.eu/) and the [Global Invasive Species Database](http://www.iucngisd.org/gisd/), for a human to confirm and report. Goal: per-taxon identifier queues and a short list of candidate first records. Verifier: the share of queued observations that humans later confirm at the suggested taxon, and whether flagged invasives are confirmed as new regional records.

### E16 Measure insect emergences from weather radar

Weather radar can measure insects, but only discrete mass events, and only in recent years. The US NEXRAD archive is free on [AWS](https://registry.opendata.aws/noaa-nexrad/) back to 1991, but only since the dual-polarisation upgrade was completed in 2013 can insects be reliably separated from birds and rain; Stepanian et al. 2020 ([PNAS](https://doi.org/10.1073/pnas.1913598117)) used it to count burrowing-mayfly emergences on the Upper Mississippi and western Lake Erie and found they more than halved between 2012 and 2019. Turning echoes into biomass for the general nocturnal insect flow still lacks a calibration, so the feasible product is emergence events. Goal: an annual emergence-size series since 2013 for every major mayfly and caddisfly emergence visible to NEXRAD. Verifier: first reproduce Stepanian's Mississippi and Lake Erie series, then check against state benthic sampling. The 60-year [Rothamsted Insect Survey](https://insectsurvey.com) traps are in the UK and cannot check NEXRAD; their counterpart is Met Office radar data at [CEDA](https://catalogue.ceda.ac.uk/uuid/82adec1f896af6169112d09cc1174499), which includes single-site dual-polarisation products, and the [BioDAR](https://biodar.uk) project has begun pairing the two.

### E17 Publish which species each DNA barcode marker cannot tell apart

Environmental-DNA surveys report species lists from short barcode sequences, but some species share identical barcodes at a given marker, and many sequences are "dark taxa" (sequences with no Linnaean name), so studies often claim more resolution than the marker can give. The reference libraries are public: [BOLD](https://boldsystems.org/) (COI, with downloadable data packages, including the Global Malaise Program's specimens), [UNITE](https://unite.ut.ee/repository.php) (fungal ITS), [MIDORI2](https://www.reference-midori.info/) (curated mitochondrial references, including 12S), [SILVA](https://www.arb-silva.de/) (16S and 18S rRNA) and [GlobalFungi](https://globalfungi.com) (environmental fungal sequences). The agent freezes a version of each library, runs in-silico PCR for each common primer set (COI Folmer and Leray, ITS2, 16S V4, 12S MiFish), trims to the amplicon, and groups species whose amplicons are identical or within the usual clustering threshold. Goal: for each marker and library version, a published table of species that collapse into shared barcodes, which any eDNA study can check its claims against. Verifier: the whole pipeline reruns from frozen library hashes, and it must recover the collapses already reported in the literature for particular groups.

### E18 Compare satellite-observed methane with facility self-reports

Alvarez et al. 2018 ([Science](https://doi.org/10.1126/science.aar7204)) found US oil-and-gas methane emissions about 60% above the EPA inventory, much of it from abnormal events that self-reporting misses. Observations: TROPOMI on Sentinel-5P, from the [Copernicus Data Space](https://dataspace.copernicus.eu/), maps methane daily at about 5.5 × 7 km, enough for basins and the largest super-emitters, while point-source imagers resolve individual facilities, with public plumes from [Carbon Mapper](https://data.carbonmapper.org/) and NASA's [EMIT methane plume complexes](https://www.earthdata.nasa.gov/data/catalog/lpcloud-emitl2bch4plm-002), and alerts from UNEP's [Methane Alert and Response System](https://www.unep.org/topics/energy/methane/international-methane-emissions-observatory/methane-alert-and-response-system-mars). MethaneSAT, built for this job, was lost in June 2025. Self-reports: EPA's Greenhouse Gas Reporting Program, Subpart W for oil and gas, in its [data sets](https://www.epa.gov/ghgreporting/data-sets). The agent attributes each plume to a reporting facility and converts observed emission rates and observation frequency into a lower bound on annual emissions. Goal: a per-facility table of observed versus reported emissions, flagging facilities whose observed plumes alone exceed their reported annual total. Verifier: that contradiction is arithmetic and checkable from public data, and flagged facilities can be compared with MARS notifications and operator responses.

### E19 Match refinery flaring to air monitors and Texas emissions-event reports

Flaring at refineries and chemical plants brings pollution spikes to fenceline neighbourhoods, and Texas requires facilities to self-report unauthorised "emissions events" to the state regulator, TCEQ, in its public [Air Emission Event Report database](https://www2.tceq.texas.gov/oce/eer/). That database is the check. [VIIRS Nightfire](https://eogdata.mines.edu/products/vnf/) detects flares nightly with temperature and radiant heat since 2012. The pollution side comes from TCEQ monitor readings in [TAMIS](https://www17.tceq.texas.gov/tamis/), refinery benzene sampling in EPA's [fenceline monitoring dashboard](https://awsedap.epa.gov/public/extensions/Fenceline_Monitoring/welcome.html) (reported quarterly since 2019), and low-cost sensors via [OpenAQ](https://openaq.org). The agent assigns each VIIRS flare to a facility, looks for concurrent downwind monitor spikes, and searches for a matching event report. Goal: a per-facility tally of flaring events, whether monitors spiked, and whether each was self-reported. Verifier: events that do appear in the TCEQ database confirm the pipeline, unmatched ones are the finding, and the [Environmental Integrity Project](https://environmentalintegrity.org/)'s reports on Texas emission events give known cases to reproduce.

### E20 Find timber laundering in Brazil's transport permits

Customs seizure microdata is mostly not public, so the check has to come from Brazil's own records. IBAMA publishes every DOF timber transport document since 2007 ([open data](https://dadosabertos.ibama.gov.br/dataset/dof-transportes-de-produtos-florestais)), giving origin, species, volume and destination, along with authorised extraction volumes. Brancalion et al. 2018 [showed](https://www.science.org/doi/10.1126/sciadv.aat1192) that Amazon logging permits claim implausible volumes of high-value species (over 4 m³/ha of ipê against 0.7 in inventory plots), creating paper credits that launder illegally cut timber. The agent compares each authorisation's claimed species volumes with forest-inventory expectations and with canopy disturbance in [Global Forest Watch](https://www.globalforestwatch.org/map/), then follows the credits through the DOF chain to exporters, with [Trase](https://www.trase.earth) linking exports to municipalities. Goal: a ranked list of management plans and exporters whose shipped volume exceeds what their permitted area can plausibly yield. Verifier: IBAMA enforcement held out by date, namely [embargoed areas](https://servicos.ibama.gov.br/ctf/publico/areasembargadas/ConsultaPublicaAreasEmbargadas.php) and infraction notices issued after the analysis window. Identifying the species of traded timber needs physical samples matched to reference collections such as [World Forest ID](https://worldforestid.org/), so it is lab work, not agent work.

## F Other worlds: more images than eyes

Planetary missions return far more images than their teams can inspect, and almost all of it is public in NASA's [Planetary Data System](https://pds.nasa.gov) or ESA's [Planetary Science Archive](https://psa.esa.int/psa/). The entries below are the change-detection and cataloguing jobs where a patient agent could finish what hand searches started. Dawn, OSIRIS-REx and Hayabusa2 are left out: their teams have mined those archives thoroughly and no concrete gap stands out.

### F1a Catalogue every new impact crater on Mars

Counting craters that form today gives the present-day impact rate, which calibrates the crater-count ages used for every surface in the Solar System. The Mars Reconnaissance Orbiter's <abbr title="Context Camera">CTX</abbr> has taken more than 112,000 images at 6 m per pixel, many overlapping in time; they are in the [PDS Imaging Node MRO volumes](https://pds-imaging.jpl.nasa.gov/volumes/mro.html), searchable by footprint and date in [ODE](https://ode.rsl.wustl.edu/mars/), with a global mosaic from the [Murray Lab](https://murray-lab.caltech.edu/CTX/). [Daubar et al. 2022](https://doi.org/10.1029/2021JE007145) list 1,203 dated new impacts, and a JPL classifier run over single CTX frames ([Wagstaff et al. 2022](https://arxiv.org/abs/2207.05679)) turned up 69 more from only its top 1,000 candidates. Goal: a before/after search of every overlapping CTX pair, giving a dated, bias-corrected catalogue and an impact rate by size, cross-matched to InSight marsquakes in the [Marsquake Service catalogue](https://doi.org/10.12686/a19) as [Posiolova et al. 2022](https://doi.org/10.1126/science.abq7704) did for two large ones. Verifier: each candidate is confirmed by <abbr title="High Resolution Imaging Science Experiment">HiRISE</abbr> follow-up (existing frames in the [HiRISE catalogue](https://www.uahirise.org/catalog/), new ones via [HiWish](https://www.uahirise.org/hiwish/)), and the pipeline must recover Daubar's list.

### F1b Map active surface change on Mars from HiRISE repeat pairs

Recurring slope lineae, gully flows, dune migration and spring avalanches off the polar scarps are the only places Mars visibly changes, and each constrains how much water, CO₂ frost and wind shape the surface now. <abbr title="High Resolution Imaging Science Experiment">HiRISE</abbr> has taken some 80,000 images at 25–50 cm per pixel since 2006, thousands of them repeat looks at the same sites; browse them in the [HiRISE catalogue](https://www.uahirise.org/catalog/) and download from the [HiRISE PDS archive](https://hirise-pds.lpl.arizona.edu/PDS/). Published studies cover chosen sites one process at a time, and [Planet Four](https://www.zooniverse.org/projects/mschwamb/planet-four) volunteers map only the seasonal CO₂-jet fans near the south pole. Goal: co-register every HiRISE repeat pair and publish a classified change map (slope streak, gully, dune, avalanche, frost) with dates bracketed by the image pair. Verifier: predicted active sites submitted through [HiWish](https://www.uahirise.org/hiwish/), which the HiRISE team honours, show the change continuing in new images.

### F1c Extend the Mars dust-storm database to the present

Dust storms set Martian weather and are the main hazard for landers and solar-powered rovers, and forecasting them needs a long, uniform record of where and when they start. The <abbr title="Mars Color Imager">MARCI</abbr> camera has mapped the whole planet daily since 2006 (data in the [PDS Imaging Node MRO volumes](https://pds-imaging.jpl.nasa.gov/volumes/mro.html); human-written summaries in the [MSSS weekly weather reports](https://www.msss.com/msss_images/subject/weather_reports.html)). The [Mars Dust Activity Database](https://doi.org/10.7910/DVN/F8R2JX) (Battalio and Wang 2021) outlines every storm by hand for Mars Years 24–32, roughly 1999–2015, and nothing uniform exists since. Goal: an automated storm detector that extends the database through Mars Year 38 with the same fields (outline, area, duration, sol). Verifier: run over Mars Years 24–32, it must reproduce the hand-drawn database, and its storm onsets must match dust-opacity rises in Mars Climate Sounder retrievals.

### F2a Find the meteorites in Mars rover images

Iron meteorites on Mars record how fast rocks weather there and sample asteroid populations different from those that reach Earth, but every one so far was spotted by chance. Curiosity and Perseverance have returned well over a million raw frames, public within days on the [Curiosity raw images](https://mars.nasa.gov/msl/multimedia/raw-images/) and [Perseverance raw images](https://mars.nasa.gov/mars2020/multimedia/raw-images/) pages, with sol-by-sol context in the [Analyst's Notebook](https://an.rsl.wustl.edu/). Known finds (Lebanon, Egg Rock, Cacao for Curiosity; Phippsaksla, Perseverance's first in 2025) give a training set of shiny, sculpted, dark metallic rocks. Goal: a candidate list of iron meteorites across both missions, by sol and frame, with a confidence score. Verifier: where the team fired its laser at a candidate, <abbr title="laser-induced breakdown spectroscopy">LIBS</abbr> spectra in the PDS Geosciences Node ([ChemCam](https://pds-geosciences.wustl.edu/missions/msl/chemcam.htm), [SuperCam](https://pds-geosciences.wustl.edu/missions/mars2020/supercam.htm)) show iron-nickel, as they did for Egg Rock and Phippsaksla; candidates the rover has driven past can only be ranked, not confirmed.

### F2b Catalogue dust devils caught by accident in rover images

Dust devils lift much of the dust in the Martian atmosphere, and their frequency by hour and season tests atmospheric models, but the rover teams survey them only in dedicated movie sequences. Many more are visible in the background of navigation and hazard-camera frames on the [Curiosity raw images](https://mars.nasa.gov/msl/multimedia/raw-images/) and [Perseverance raw images](https://mars.nasa.gov/mars2020/multimedia/raw-images/) pages. Goal: a catalogue of every dust devil in non-dedicated frames, with time, bearing and apparent size, merged with the published dedicated surveys. Verifier: the detector must recover the teams' dedicated-survey detections, and close passes must line up with pressure dips in the rovers' weather-station data in the PDS Atmospheres Node ([REMS](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/MARS/curiosity/rems.html) for Curiosity, [MEDA](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/PERSEVERANCE/meda.html) for Perseverance).

### F3a Find every new crater on the Moon from LROC before/after pairs

The Moon's present-day impact rate calibrates crater-count ages everywhere and sets the risk to long-lived lunar bases. [Speyerer et al. 2016](https://doi.org/10.1038/nature19829) compared 14,092 <abbr title="Lunar Reconnaissance Orbiter Camera Narrow Angle Camera">LROC NAC</abbr> image pairs and found 222 new craters, more than models predicted, plus tens of thousands of fresh surface "splotches"; LRO is still imaging, so the pool of overlapping pairs has grown many times since. NAC frames at 0.5 m per pixel are searchable in the [LROC data search](https://data.lroc.im-ldi.com/lroc/search) and viewable in [QuickMap](https://quickmap.lroc.im-ldi.com/). Goal: search every overlapping NAC pair to date and publish a dated new-crater catalogue and an updated flux by size. Verifier: the pipeline must recover Speyerer's 222, and new candidates can be re-imaged through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F3b Search the Moon for pits and lava-tube skylights

Pits that open into lava tubes are the leading candidates for sheltered lunar bases and for untouched subsurface geology. The [LROC Pits Atlas](https://lroc.im-ldi.com/atlases/pits/list) lists 278 pits found largely by hand and by targeted searches of <abbr title="Narrow Angle Camera">NAC</abbr> images ([search the frames](https://data.lroc.im-ldi.com/lroc/search)); Chandrayaan-2's <abbr title="Orbiter High Resolution Camera">OHRC</abbr> adds 25 cm images via ISRO's [PRADAN portal](https://pradan.issdc.gov.in/ch2/), which requires free registration. Goal: a systematic scan of all NAC and OHRC frames for pits the atlas misses, each flagged for signs of an overhang or tube opening. Verifier: a real pit shows consistent shadow depth across frames taken at different sun angles, which the NAC archive often already holds, and the rest can be requested through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F3c Inventory human artefacts and crash sites on the Moon

A complete map of hardware on the Moon matters for heritage protection as landing traffic grows, and the unfound crash sites are small experiments in impact physics with known mass and speed. LROC has imaged every Apollo, Surveyor and later Luna landing site, and an amateur, Shanmuga Subramanian, found India's Vikram lander debris in its images in 2019; but Luna 9's position is still contested (a 2025 machine-learning search proposed [a candidate](https://www.nature.com/articles/s44453-025-00020-x)) and several deliberate impactors have never been located. The best images are LROC <abbr title="Narrow Angle Camera">NAC</abbr> frames ([LROC data search](https://data.lroc.im-ldi.com/lroc/search)) and Chandrayaan-2 <abbr title="Orbiter High Resolution Camera">OHRC</abbr> frames via [PRADAN](https://pradan.issdc.gov.in/ch2/) (free registration); Kaguya ([JAXA DARTS](https://darts.isas.jaxa.jp/planet/pdap/selene/)) and Chang'e ([China's lunar data release system](https://moon.bao.ac.cn/)) are coarser but add before/after coverage. Goal: a catalogue of every known artefact and a ranked candidate list for each missing one within its historical error ellipse. Verifier: the detector must find the known sites blind, and candidates can be re-imaged at low sun through the [LROC target request](https://target.lroc.im-ldi.com/output/lroc/lroc_page.html) page.

### F4 Search all of Magellan's repeat radar coverage of Venus for change

Whether Venus is volcanically active today decides how it lost its water and how its atmosphere is resupplied, and the only images old enough to show change are Magellan's radar maps from 1990–92, downloadable from the [PDS Geosciences Node](https://pds-geosciences.wustl.edu/missions/magellan/index.htm) (global mosaics at [USGS Astrogeology](https://astrogeology.usgs.gov/search/map/venus_magellan_sar_fmap_left_look_global_mosaic_75m)). [Herrick and Hensley 2023](https://doi.org/10.1126/science.abm7735) found a vent on Maat Mons that changed shape in eight months after hand-searching a few per cent of the area imaged twice, and [Sulcanese et al. 2024](https://www.nature.com/articles/s41550-024-02272-1) reported new lava flows at Sif Mons and Niobe Planitia; [Bhiravarasu et al. 2026](https://www.nature.com/articles/s41550-026-02832-7) argue that differing look angles between cycles can mimic such changes. Goal: search 100% of the overlap between Magellan's three mapping cycles and publish every candidate change with before/after chips and a geometry-corrected backscatter comparison. Final confirmation waits for VERITAS and EnVision in the 2030s; the near-term verifier is that each candidate survives radar-geometry simulation and an independent re-analysis by a second team.

### F5 Build a MESSENGER baseline for BepiColombo to test Mercury for change

Mercury's hollows are bright, shallow pits thought to form as volatiles escape from the rock, and if they are growing now Mercury is one of the few airless bodies with active geology. MESSENGER's <abbr title="Mercury Dual Imaging System">MDIS</abbr> took about 300,000 images from 2011 to 2015 ([PDS Imaging Node volumes](https://pds-imaging.jpl.nasa.gov/volumes/mess.html), browsable in [Mercury QuickMap](https://mercury.quickmap.io/)), and the global catalogue is already done: [Bickel et al. 2025](https://doi.org/10.1029/2024JH000431) mapped up to 19,110 hollows with a neural network and released the catalogue, though southern coverage is sparse. The open job is change: BepiColombo enters Mercury orbit on 21 November 2026 and starts science in April 2027. Goal: for every catalogued hollow and every patch of terrain likely to show new impact craters, extract the best MESSENGER image chip and a rendering under BepiColombo's planned lighting, so later images can be diffed automatically. Verifier: BepiColombo imaging from 2027 onwards, which will show which hollows grew and which craters are new since 2015.

### F6a Track Saturn's ring propellers across Cassini's 13 years

A ring propeller is a moonlet 100 m to a few km across embedded in Saturn's A ring, too small to see directly, that clears a pair of short gaps shaped like an aircraft propeller; they are the closest analogue we can watch to planets embedded in a protoplanetary disc. [Tiscareno et al. 2010](https://doi.org/10.1088/2041-8205/718/2/L92) showed that the dozen largest drift from simple orbits, which may be migration through the ring, but of the roughly 150 small propellers found in Cassini images only a handful have been followed beyond a single sighting. Cassini's Imaging Science Subsystem ring images are searchable with [OPUS](https://opus.pds-rings.seti.org/) at the [Ring-Moon Systems Node](https://pds-rings.seti.org/). Goal: a mission-long ephemeris for every propeller seen more than once, with measured migration or libration. Verifier: fit on early images, then predict positions in held-out later frames.

### F6b Build a full-mission light curve of the Enceladus plume

The Enceladus plume vents Enceladus's subsurface ocean into space, and how its brightness varies with the moon's 33-hour orbit reveals how tides open and close the fissures. [Hedman et al. 2013](https://doi.org/10.1038/nature12371) found the plume several times brighter near the far point of the orbit using some VIMS spectra, but no one has combined every Imaging Science Subsystem and VIMS plume observation from 2005 to 2017 into one geometry-corrected series. Both instruments' images are searchable in [OPUS](https://opus.pds-rings.seti.org/) at the [Ring-Moon Systems Node](https://pds-rings.seti.org/). Goal: a plume brightness time series against orbital phase and year, with individual jets separated where resolution allows. Verifier: the series must reproduce Hedman's VIMS modulation where they overlap, and a phase curve fitted on some years must predict the rest.

### F6c Search Cassini's Titan radar swaths for change in its lakes and seas

Titan is the only other world with liquid on its surface, and changes in its methane lakes and seas show a working weather cycle. Cassini's RADAR imaged the northern seas repeatedly from 2004 to 2017 (swath images at the [PDS Imaging Node Cassini RADAR volumes](https://pds-imaging.jpl.nasa.gov/volumes/radar.html)); hand comparisons found transient bright features in Ligeia Mare (the "magic islands", Hofgartner et al. 2014) and claimed, disputed shoreline retreat at Ontario Lacus. Goal: co-register every repeat swath over lakes and seas and catalogue shoreline shifts and transient features with dates. No spacecraft will re-image the seas before the 2030s (Dragonfly lands far from them), so the check is internal: a claimed change must persist across more than one later swath and survive simulations of the differing viewing geometry and speckle noise.

### F7a Measure Jupiter's winds from JunoCam image pairs

Jupiter's jets and storms are the best laboratory for giant-planet weather, and Juno's close passes see the poles and small storms that Earth-orbiting telescopes cannot. JunoCam has returned raw images from each close pass since 2016 on the [Mission Juno processing page](https://www.missionjuno.swri.edu/junocam/processing) (also in the [PDS Imaging Node Juno volumes](https://pds-imaging.jpl.nasa.gov/volumes/juno.html)); amateurs have made most of the processed images, but frames of the same clouds minutes apart have rarely been turned into winds (Juno's funding beyond 2026 is uncertain). Goal: wind-vector maps from every close pass, with storm tracks followed across passes. Verifier: at overlapping latitudes the winds must agree with the Hubble <abbr title="Outer Planet Atmospheres Legacy">OPAL</abbr> [annual wind fields](https://archive.stsci.edu/hlsp/opal).

### F7b Catalogue Io's volcanic changes in the Galileo archive

Io is the most volcanically active body in the Solar System, and a long record of where it erupts tests models of how tidal heat escapes. Galileo's Solid State Imager took Io images from 1996 to 2003 ([PDS Imaging Node Galileo volumes](https://pds-imaging.jpl.nasa.gov/volumes/galileo.html)); [Geissler et al. 2004](https://doi.org/10.1016/j.icarus.2003.09.024) catalogued the surface changes by eye, but the frames have never been photometrically co-registered as a whole and compared with Voyager's 1979 images and Juno's 2023–24 close flybys. Goal: a dated change catalogue (new plume deposits, lava flows, darkened patera floors) across Voyager, Galileo and Juno. Verifier: every change the catalogue says persisted after 2003 must appear in the JunoCam Io images on the [Mission Juno processing page](https://www.missionjuno.swri.edu/junocam/processing).

### F8a Catalogue surface changes on comet 67P from Rosetta images

Watching a comet's surface erode over one perihelion shows how comets lose mass and how their shapes evolve. Rosetta's OSIRIS cameras took some 70,000 images of comet 67P/Churyumov-Gerasimenko in 2014–16, plus NavCam frames, all in the ESA Planetary Science Archive ([OSIRIS narrow-angle directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/OSINAC/), [Rosetta mission page](https://www.cosmos.esa.int/web/psa/rosetta), [image browser](https://imagearchives.esac.esa.int/index.php?/category/1)). [El-Maarry et al. 2017](https://doi.org/10.1126/science.aak9384) documented cliff collapses, boulders moving over 100 m and growing fractures by comparing selected pre- and post-perihelion images. Goal: register every OSIRIS image to the shape model and publish a complete change catalogue with bracketing dates. Verifier: each change must appear in at least two independent image pairs taken at different viewing geometries, and the pipeline must recover El-Maarry's changes.

### F8b Catalogue every outburst and jet on comet 67P

Short outbursts carry off a large share of a comet's mass and hint at what triggers activity: collapsing cliffs, trapped gas or sunrise heating. [Vincent et al. 2016](https://doi.org/10.1093/mnras/stw2409) found 34 outbursts in the three months around perihelion; the rest of Rosetta's two years has no uniform catalogue. The OSIRIS images are in the ESA Planetary Science Archive ([OSIRIS narrow-angle directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/OSINAC/), [image browser](https://imagearchives.esac.esa.int/index.php?/category/1)), with NavCam in the [NavCam directory](https://archives.esac.esa.int/psa/ftp/INTERNATIONAL-ROSETTA-MISSION/NAVCAM/). Goal: a full-mission catalogue of outbursts and persistent jets, each with time, source location on the shape model and local time of day. Verifier: the detector must recover Vincent's 34, and new outbursts should coincide with spikes in the Rosetta gas and dust instruments' records, also in the [Rosetta archive](https://www.cosmos.esa.int/web/psa/rosetta).

### F9a Find the fainter sungrazing comets in SOHO's coronagraph archive

The Kreutz sungrazers are fragments of one great comet that broke up centuries ago, and counting the smallest pieces tests how comets fragment. Volunteers of the [Sungrazer Project](https://sungrazer.nrl.navy.mil/) have found more than 5,000 comets by eye in SOHO's <abbr title="Large Angle and Spectrometric Coronagraph">LASCO</abbr> C2 and C3 images since 1996 (archive via [NRL LASCO](https://lasco-www.nrl.navy.mil/) and the [SOHO data archive](https://soho.nascom.nasa.gov/data/archive.html)); a NASA machine-learning challenge built on [3,000 labelled sequences](https://registry.opendata.aws/nasa-soho-comet-challenge-on-aws/) produced detectors that found [two missed comets](https://sungrazer.nrl.navy.mil/index.php/aiml-comet-discoveries) but were never run over the whole archive. Goal: a detector run over every C2 and C3 frame since 1996, publishing candidates below the human detection limit with astrometry. Verifier: it must recover the known comets, and new ones must pass Sungrazer Project/NRL review and receive Minor Planet Center designations.

### F9b Extend the reconstructed solar magnetic field back before 1915

Knowing the Sun's magnetic field over a century shows how solar activity, and its effect on climate and space weather, has varied, but magnetographs only began in the 1970s. Much has been done: [Chatzistergos et al. 2020](https://arxiv.org/abs/2005.01435) combined 43 Ca II K archives into a plage composite from 1892, and Virtanen, Pevtsov and colleagues reconstructed the magnetic field for 1915–85 by giving Ca II K plages polarities from the Mount Wilson sunspot drawings ([digitised 1917–2016 drawings at CDS](https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A+A/628/A103)). Before 1917 there are Ca II K plates but no polarity measurements: [Kodaikanal](https://kso.iiap.res.in/new/data) from 1904 and Meudon spectroheliograms in [BASS2000](https://bass2000.obspm.fr/search.php) from the 1900s. Goal: synoptic magnetic maps for about 1904–15, with polarities inferred from the hemispheric rules sunspots obey (Hale's and Joy's laws). Verifier: apply the same inference to 1917–85 and compare against the polarity-measured reconstruction and, from 2010, against [SDO magnetograms](https://sdo.gsfc.nasa.gov/data/aiahmi/) (SDO itself is well served: the [Heliophysics Events Knowledgebase](https://www.lmsal.com/hek/) already runs automated feature detection on every frame).

### F10a Search TESS light curves for single-transit and long-period planets

Planets on orbits of months to years are the ones most like our own, and most transit only once in a TESS sector, which the automated pipelines, built around repeated transits, largely miss. TESS light curves for millions of stars are at [MAST](https://archive.stsci.edu/missions-and-data/tess); volunteers on [Planet Hunters TESS](https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess) have found about 90 community candidates by eye from the first two years alone, and the official candidates are listed on [ExoFOP](https://exofop.ipac.caltech.edu/tess/view_toi.php). Goal: a vetted catalogue of single- and double-transit candidates across every TESS sector, with period limits and false-positive checks. Verifier: the search must recover the Planet Hunters TESS candidates, and new ones submitted to ExoFOP must survive follow-up by the TESS Follow-up Observing Program.

### F10b Mine Hubble and JWST archives for serendipitous asteroids

Faint asteroids crossing unrelated telescope pointings reveal the small end of the asteroid population, which surveys cannot reach and which supplies most meteorites. The Hubble Asteroid Hunter ([Zooniverse project](https://www.zooniverse.org/projects/sandorkruk/hubble-asteroid-hunter), [Kruk et al. 2022](https://arxiv.org/abs/2202.00246)) found 1,701 trails in two cameras' images from 2002–21, 1,031 of them unmatched to known objects, and [Burdanov et al. 2025](https://www.nature.com/articles/s41586-024-08480-z) found 138 decametre main-belt asteroids by shift-and-stack in a single JWST programme. Both archives are at [MAST](https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html). Goal: extend trail detection to every Hubble instrument and year, and shift-and-stack to every long JWST stare, publishing astrometry. Verifier: detections of known objects must match Minor Planet Center ephemerides, and new ones become real when the [Minor Planet Center](https://minorplanetcenter.net/iau/mpc.html) links them into orbits.

### F10c Find strong gravitational lenses in Euclid's first big data release

Strong lenses, where a foreground galaxy bends a background one into arcs or rings, weigh dark matter in galaxies and measure cosmic expansion, and Euclid is expected to find over 100,000 of them. The quick release ([Q1, March 2025](https://www.cosmos.esa.int/web/euclid/euclid-q1-data-release): 63 deg², 26 million galaxies) has already been searched by the consortium and [Space Warps](https://www.zooniverse.org/projects/aprajita/space-warps-esa-euclid) volunteers, yielding about 500 candidates; the first large release, DR1-Foundation (about 1,900 deg²), is [due in November 2026](https://www.cosmos.esa.int/web/euclid/dr1-timeline) through the [ESA Euclid Science Archive](https://eas.esac.esa.int/sas/) and [IRSA](https://irsa.ipac.caltech.edu/Missions/euclid.html). Goal: an independent, graded lens-candidate catalogue for all of DR1. Verifier: the search must recover the graded Q1 candidates, and its top candidates must be confirmed by expert grading and by lens and source redshifts from overlapping spectroscopic surveys.

## G Oceans: lost lands, lost things, the deep

### G1a Map drowned Stone Age landscapes under the North Sea beyond Doggerland

Until about 8,000 years ago the southern North Sea was inhabited dry land, and Gaffney's team mapped its rivers, lakes and coasts from 23,000 km² of oil-company 3D seismic, which is still only part of the basin. Released seismic for much of the rest is free: the UK [National Data Repository](https://ndr.nstauthority.co.uk) (free registration, SEG-Y packages under 20 GB download directly) and the Dutch [NLOG seismic archive](https://www.nlog.nl/en/seismic-data) (over 135 3D surveys, non-confidential ones downloadable from the map). Goal: a GIS layer of palaeo-river valleys, lake basins and former shorelines traced in the shallowest part of every released survey outside the already-mapped area, with ranked candidate site locations such as confluences, lake margins and estuary heads. Verifier: dated shallow cores and boreholes in [BGS GeoIndex Offshore](https://www.bgs.ac.uk/map-viewers/geoindex-offshore/), and whether known submerged finds such as the Brown Bank artefacts sit on predicted dry-land features. The same method would suit the Sundaland, Persian Gulf, Black Sea and Yellow Sea shelves, but their seismic is held by national oil companies and is not public.

### G1b Map drowned landscapes in the Norwegian North Sea sector

The Doggerland plain ran east to the Norwegian Trench, and its Norwegian part (roughly 56–58°N) has had far less palaeolandscape mapping than the UK and Dutch sectors. Norway's repository, Diskos, holds over 1,300 released 3D surveys ([Sodir: Diskos seismic](https://www.sodir.no/en/diskos/seismic/)); non-members order released data through the Diskos public portal for an administrative fee ([access terms](https://www.sodir.no/en/facts/data-and-analyses/release-of-data/access-to-released-data/)), so this starts with a small data budget rather than a free download. Goal: palaeo-river valleys, lake basins and shorelines mapped from the shallow section of released surveys in the southern Norwegian sector, joined across the median line to the river systems already mapped on the UK side, with candidate site locations. Verifier: dated cores from the adjacent UK sector in [BGS GeoIndex Offshore](https://www.bgs.ac.uk/map-viewers/geoindex-offshore/), and whether rivers traced independently on each side of the median line meet.

### G1c Map the drowned Gulf of Mexico coastal plain from released BOEM seismic

People lived along the northern Gulf coast at least 13,000 years ago, when the shoreline lay far out on what is now the outer continental shelf. US offshore seismic is released into the public domain after 25 years: [BOEM's seismic data listing](https://www.data.boem.gov/Main/Seismic.aspx) and the USGS/BOEM [National Archive of Marine Seismic Surveys](https://walrus.wr.usgs.gov/namss/) (mostly 2D, which also covers the Alaskan Beaufort and Chukchi margins of Beringia). Goal: mapped palaeo-channels of the Sabine, Trinity, Calcasieu and Mississippi systems and the successive drowned shorelines across the Texas–Louisiana shelf, with ranked candidate site locations on terraces and channel margins. Verifier: hold out the cores and high-resolution seismic of BOEM's Sabine palaeovalley study ([OCS Study BOEM 2020-004](https://espis.boem.gov/final%20reports/BOEM_2020-004.pdf)) and check the predicted valleys and surfaces against them.

### G1d Map the drowned north-west shelf of Sahul

At the last glacial maximum Australia's north-west shelf was a broad coastal plain, and in 2020 divers found Aboriginal stone artefacts on the seabed at Cape Bruguieres and Flying Foam Passage in the Dampier Archipelago ([Benjamin et al. 2020](https://doi.org/10.1371/journal.pone.0233912)), the first confirmed submerged sites on the continent. Offshore petroleum survey data (navigation, processed seismic, reports) is downloadable from Geoscience Australia and NOPTA's [NOPIMS](https://www.ga.gov.au/nopims). Goal: palaeo-river valleys, freshwater sources and shorelines mapped across the Pilbara shelf, with ranked candidate site locations near former water sources. Verifier: the two known sites and their cores should fall on predicted dry-land features near water. Caveat: industry seismic resolves the top few tens of metres poorly and rarely covers water shallower than about 20 m, so the inshore strip needs sub-bottom profiler data.

### G2 Find stone structures in routine multibeam data

In 2024 a 971 m line of 1,673 stones set by hunters more than 10,000 years ago, the Blinkerwall, was identified 21 m down in the Bay of Mecklenburg in multibeam collected on a student training cruise ([Geersen et al. 2024, PNAS](https://doi.org/10.1073/pnas.2312008121)). Metre-scale multibeam over former dry land keeps piling up from wind-farm, cable and charting surveys, and almost none of it is screened for archaeology: the UK [Marine Data Exchange](https://www.marinedataexchange.co.uk/search) (offshore wind and cable survey data), [NOAA NCEI multibeam](https://www.ncei.noaa.gov/maps/bathymetry/), [EMODnet bathymetry](https://emodnet.ec.europa.eu/en/bathymetry), Norway's [MAREANO](https://www.mareano.no/en/maps-and-data/marine-geospatial-data) and Germany's [BSH GeoSeaPortal](https://gdi.bsh.de/mapapps/resources/apps/bathymetrie/index.html?lang=en), though the BSH offers only 50 m grids and Norway restricts fine grids inside 12 nautical miles. Goal: a ranked list of stone alignments, enclosures, cairns and trap-like features in public surveys shallower than the roughly 120 m last-glacial lowstand, each with coordinates and a hillshade snapshot. Verifier: the detector must find the Blinkerwall and other published submerged structures without being told where they are, and the top candidates are checked by diver or ROV.

### G3a Rank search boxes for historic shipwrecks

UNESCO estimates [3 million wrecks](https://www.unesco.org/en/underwater-heritage) on the seabed; most recorded losses have never been matched to a wreck, and each unmatched one is a war grave, a heritage site or a pollution risk nobody can find. Loss records: [Wrecksite](https://www.wrecksite.eu) (crowd-sourced), [NOAA's wrecks and obstructions database](https://nauticalcharts.noaa.gov/data/wrecks-and-obstructions.html) (about 20,000 US features), the UKHO's global [Wrecks and Obstructions shapefile](https://datahub.admiralty.co.uk/portal/home/item.html?id=4dbf2ace22bf4f9785fb445d0593bc2c) (over 94,000 charted and uncharted items, free under the Open Government Licence) and the Lloyd's Register Foundation [casualty returns](https://heritage.lrfoundation.org.uk/casualty-returns), which give date and approximate place for every ocean-going loss since 1890. Goal: for each recorded loss with no matched wreck, a probability box built from last-known position, weather and a drift-and-sink model such as [OpenDrift](https://opendrift.github.io/), intersected with public multibeam from [NOAA NCEI](https://www.ncei.noaa.gov/maps/bathymetry/) and [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry) to flag unidentified seabed targets inside it, and a ranked target list. Verifier: run it blind on losses whose wrecks have since been found and identified; their true positions should land in the top-ranked boxes.

### G3b Turn Missing Air Crew Reports into search packets for aircraft lost at sea

Thousands of US airmen lost over water in the Second World War are still unaccounted for. The National Archives has digitised the [Missing Air Crew Reports](https://catalog.archives.gov/id/305256), over 16,000 case files from 1942–47, each a typed form giving aircraft type and serial, date, crew and a location marked as last known position, last sighting, last radio contact or seen to crash ([guide](https://www.archives.gov/research/military/ww2/missing-air-crew-reports)). Goal: extract every over-water loss into a table with a search polygon, then intersect the polygons with the footprints of public multibeam and side-scan surveys ([NOAA NCEI bathymetry viewer](https://www.ncei.noaa.gov/maps/bathymetry/), [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry)) to list losses whose search area is already covered by data someone can review from a desk. Verifier: aircraft already found and identified by [Project Recover](https://www.projectrecover.org) and the US Defense POW/MIA Accounting Agency should fall inside the polygons their own reports generate.

### G3c Locate slave-ship wrecks from voyage records

Only a handful of slave-ship wrecks have been archaeologically identified, among them the São José Paquete de Africa off Cape Town, documented in 2015 by the [Slave Wrecks Project](https://nmaahc.si.edu/explore/initiatives/slave-wrecks-project). The [SlaveVoyages Trans-Atlantic database](https://www.slavevoyages.org/voyage/database) records about 36,000 voyages, with an outcome field that flags ships wrecked and the place each voyage ended. Goal: a list of every voyage recorded as wrecked, with the loss place resolved to coordinates using the database plus contemporary Lloyd's List and newspaper reports, ranked by positional precision into search boxes. Verifier: with the known wreck positions held out, the method should put the São José and other identified slave wrecks inside their predicted boxes.

### G4 Fishermen's snag records as a wreck finder

Trawler skippers do record where their gear catches on the seabed, since a snag ("fastener" or "hang") can cost a net, and several of England's most important protected wrecks were first found this way. From the 1960s to the 1990s these positions were printed on Kingfisher fishing charts, and Historic England folded them into its national marine record, which now holds almost 7,000 fastener records ([Fishing for Heritage](https://historicengland.org.uk/whats-new/research/back-issues/fishing-for-heritage/)); today's Seafish products, the [Kingfisher Bulletin](https://kingfisherbulletin.org) and [KIS-ORCA](https://kis-orca.org), cover cables, wind farms and oil and gas infrastructure, not snags, and skippers now keep hang logs privately on their plotters. There is no bulk download, so this starts with a request to Historic England for an extract of the fastener records. Goal: every fastener matched against the UKHO's [Wrecks and Obstructions shapefile](https://datahub.admiralty.co.uk/portal/home/item.html?id=4dbf2ace22bf4f9785fb445d0593bc2c) and high-resolution multibeam from the [Marine Data Exchange](https://www.marinedataexchange.co.uk/search), leaving a list of fasteners with no charted wreck but a visible seabed target. Verifier: fasteners that match wrecks identified since the charts were printed test the matching, and the unmatched targets are checked by divers or the next survey.

### G5a Catalogue dumped munitions object by object

Hundreds of thousands of tonnes of conventional and chemical munitions were dumped in European seas after both world wars, and every wind farm and cable route crossing them has to find each object first. Three public sources describe them: dump-site polygons compiled from historical dumping logs ([EMODnet dumped munitions layer](https://emodnet.ec.europa.eu/geonetwork/srv/api/records/661aa259-8ea9-49ae-a39d-49685057b013), [HELCOM Baltic chemical weapons dumpsites](https://metadata.helcom.fi/geonetwork/srv/api/records/b55b508d-3c40-484c-8c7f-38869a8df368)); point reports of munitions caught in nets or washed ashore, about 900 a year, in OSPAR's [ODIMS encounters map](https://odims.ospar.org/en/maps/map-encounters-with-munitions-1999-2021/); and the objects themselves, visible in the magnetometer, side-scan and multibeam surveys that developers deposit on the UK [Marine Data Exchange](https://www.marinedataexchange.co.uk/search). Goal: for each dump site crossed by a public survey, a georeferenced catalogue of detected objects, with how far the scatter extends beyond the charted polygon and how it compares with the encounter reports. Verifier: the unexploded-ordnance target lists in developers' survey reports, which record what divers or ROVs confirmed at each target.

### G5b Map the North-East Atlantic radioactive waste dumps

Between 1946 and 1993 European states dumped more than 200,000 drums of low-level radioactive waste in the North-East Atlantic, mostly deeper than 4,000 m; the official site-by-site record of dates, countries, tonnages and activities is the IAEA's [Inventory of radioactive waste disposals at sea](https://www-pub.iaea.org/MTCD/publications/PDF/te_1105_prn.pdf) (IAEA-TECDOC-1105). In June–July 2025 the French-led <abbr title="Nuclear Ocean Dump Site Survey Monitoring">NODSSUM</abbr> mission mapped part of the main dump site with the AUV UlyX and found 3,355 drums ([Thünen Institute summary](https://www.thuenen.de/en/newsroom/news/detail/thuenen-scientists-on-a-search-for-clues-in-the-atlantic); [CNRS mission page](https://www.cnrs.fr/en/press/radioactive-waste-scientific-mission-sets-out-map-submerged-barrels-atlantic)), and a 2026 submersible follow-up sampled them; the sonar and imagery are not yet public. Goal: the inventory digitised into a per-site table with predicted drum densities and spread from the recorded dumping positions and years, ready to compare with NODSSUM's map. Verifier: NODSSUM's drum positions once released; until then this is a digitisation task only.

### G7 Hindcast the MSC Zoe container spill

The [World Shipping Council](https://www.worldshipping.org/containers-lost-at-sea) counted 1,478 containers lost at sea in 2025 and 576 in 2024, and since January 2026 SOLAS requires every loss to be reported; a general prediction service for where they end up is a research programme, but a single well-documented incident is a tractable test. On 1–2 January 2019 MSC Zoe lost 342 containers north of the Wadden Islands, and the [joint Dutch, German and Panamanian investigation report](https://onderzoeksraad.nl/wp-content/uploads/2023/11/internationale_toedrachtsrapport_msc_zoe.pdf) reconstructs six loss locations from the ship's track and a Rijkswaterstaat seabed survey and records where cargo washed up on Dutch and German islands. Goal: an [OpenDrift](https://opendrift.github.io/) hindcast from the reported loss positions, driven by archived wind and current fields, that reproduces where the containers sank and where cargo beached. Verifier: the seabed positions and beaching records in the report, and whether the model run backwards from beach arrivals alone recovers the six loss locations.

### G8 Deep-sea nodule mining baseline

The Clarion-Clipperton Zone (CCZ) in the Pacific is where commercial nodule mining is most likely to start, and any damage will be judged against a baseline that currently rests mostly on contractors' own data. Contractors' environmental data sits in the International Seabed Authority's [DeepData](https://data.isa.org.jm), with its biological records mirrored to the [OBIS ISA node](https://obis.org/node/9d2d95be-32eb-4d81-8911-32cb8bc641c8); their geological data, including nodule abundance, is classed as confidential. Independent sources: a [2023 synthesis](https://doi.org/10.1016/j.cub.2023.04.052) counting 5,578 recorded species, around 90% undescribed, with a checklist of 436 named ones, and analysis-ready, scaled and georeferenced seafloor photographs from SONNE cruises SO268 on [PANGAEA](https://doi.pangaea.de/10.1594/PANGAEA.957274). Goal: two public baselines, an updated CCZ species checklist from every DeepData and OBIS record reconciled against WoRMS, and a nodule-cover map from the public photographs. Verifier: the checklist against the 2023 synthesis and the [ISA–WoRMS CCZ checklist](https://www.isa.org.jm/news/isa-and-worms-release-a-species-checklist-for-the-clarion-clipperton-zone-in-celebration-of-the-one-year-anniversary-of-the-sustainable-seabed-knowledge-initiative/); nodule cover against box-core abundances published from the same cruises and the abundance model in ISA's [Technical Study 6](https://isa.org.jm/wp-content/uploads/2022/06/tstudy6.pdf).

### G9 Count litter in deep-sea video

How much human debris lies on the deep seafloor is known mainly from one archive, JAMSTEC's [Deep-sea Debris Database](https://www.godac.jamstec.go.jp/dsdebris/e/index.html), which logs about 3,400 items from 5,000 submersible dives since 1983. NOAA's Okeanos Explorer has recorded thousands of hours of ROV video since 2010, searchable and downloadable by dive in the [Ocean Exploration Video Portal](https://www.ncei.noaa.gov/access/ocean-exploration/video/), but its annotators tag organisms and geology, not litter; labelled training images exist in [FathomNet](https://database.fathomnet.org/) and in the [TrashCan](https://arxiv.org/abs/2007.08097) debris set built from JAMSTEC's [J-EDI](https://www.godac.jamstec.go.jp/jedi/e/) footage. Goal: debris items per kilometre of seafloor track for every Okeanos ROV dive, by type and depth, published as a table with a frame grab per item. Verifier: a hand audit of a random sample of detections and of undetected stretches, and comparison with JAMSTEC's densities at similar depths and distances from land. The same pipeline extends to [MBARI's VARS](https://www.mbari.org/technology/video-annotation-and-reference-system-vars/), [ONC SeaTube](https://data.oceannetworks.ca/SeaTube) and [Nautilus Live](https://nautiluslive.org) video.

### G10 Deep-sea audio archives A

[NOAA](https://www.noaa.gov)'s [passive acoustic archive](https://www.ncei.noaa.gov/products/passive-acoustic-data), [MBARI](https://www.mbari.org)'s continuous hydrophone on [AWS Open Data](https://registry.opendata.aws/pacific-sound/) since 2015, [ONC hydrophones](https://data.oceannetworks.ca). NOAA maintains a list of [unexplained sounds](https://archive.oceanexplorer.noaa.gov/explorations/sound01/background/seasounds/seasounds.html). Targets: unidentified call types, whale population trends, ship-noise exposure, cross-referencing sightings in [OBIS](https://obis.org).

### G11 Dark fibre as a whale and ship sensor

<abbr title="Distributed Acoustic Sensing">DAS</abbr> puts an interrogator at the shore end of an existing seafloor telecom fibre and turns every few metres of cable into a vibration sensor, giving tens of kilometres of array with no new hardware in the water. Public seafloor datasets: the OOI Regional Cabled Array experiment off Oregon in November 2021, two cables of 65 and 95 km recording fin and blue whales and ships ([data](https://doi.org/10.58046/5J60-FJ89)); DAS4Whale, 120 km of cable out of Longyearbyen, Svalbard ([Zenodo](https://zenodo.org/records/5823343)); a labelled fin-whale set spanning Oregon, Svalbard and the Mediterranean ([Zenodo](https://zenodo.org/records/15008561)); and [PubDAS](https://eartharxiv.org/repository/view/3574/), about 90 TB from eight experiments including seafloor cables, served over Globus. Single-cable detectors already exist; the gap is one that works across cables. Goal: an open whale-call and ship detector trained on one cable and tested unchanged on the others, with published precision and recall. Verifier: the OOI hydrophones on the same Oregon cables ([OOI data portal](https://interactiveoceans.washington.edu/data-portal/)) for calls, and AIS tracks from [MarineCadastre](https://hub.marinecadastre.gov/pages/vesseltraffic) for ship passages.

## H Present-day hazards from historical records

### H1 WWII bomb craters → unexploded ordnance risk

A bomb that failed to go off in 1944 is still live, and German cities still evacuate neighbourhoods when builders hit one; the craters and stick patterns of each raid show where the duds are likely to lie. [NCAP](https://www.ncap.org/) holds millions of RAF post-raid reconnaissance frames of Germany and captured Luftwaffe frames of Britain. The raids are documented in RAF squadron operations record books ([AIR 27](https://discovery.nationalarchives.gov.uk/details/r/C2082), digitised, downloadable per month), Bomber Command night raid reports in [AIR 14](https://discovery.nationalarchives.gov.uk/details/r/C2069), USAAF mission reports in NARA's [World War II Combat Operations Reports](https://catalog.archives.gov/id/596339) (mostly paper and microfilm, copies at the Air Force Historical Research Agency), and a target-level table of Allied WWII bombing in [THOR on Kaggle](https://www.kaggle.com/datasets/usaf/world-war-ii); England's free 1 m LiDAR on the [Defra survey portal](https://environment.data.gov.uk/survey) shows craters that survive under woodland. Goal: an open, georeferenced layer of craters and bomb sticks for named cities, each tied to its raid record, with an estimated count of <abbr title="unexploded ordnance">UXO</abbr> per block. Verifier: reported bomb finds, and for Britain the Home Office [bomb census maps](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/bomb-census-survey-records-1940-1945/) and [Zetica's free UXO risk maps](https://zeticauxo.com/guidance/risk-maps/). In Germany this is already done privately, plot by plot: state bomb-disposal services and firms such as [Luftbilddatenbank Dr. Carls](https://luftbilddatenbank.de/de/) (about 10 million Allied frames indexed) interpret the photos for each building site, and the results are not published.

### H2 Map WWI shelling density on the Western Front

The "iron harvest" still turns up hundreds of tonnes of live shells a year: Belgium's bomb-disposal service DOVO destroys [over 200 tonnes a year](https://www.mil.be/en/our-missions/explosive-ordnance-disposal/), and France's Sécurité civile deminers say they collect over 450 tonnes, from nearly 17,000 call-outs in 2023 ([Sénat report](https://www.senat.fr/rap/r23-718/r23-718_mono.html)). Where the battlefield is still forest, LiDAR has already done the job: at Verdun, [De Matos-Machado et al.](https://doi.org/10.1002/esp.4586) mapped over a million war landforms in 100 km². Most shells now surface in ploughed farmland, where LiDAR shows nothing, so shelling density there has to come from wartime aerial photos ([IWM's First World War aerial photograph collection](https://www.iwm.org.uk/collections/item/object/205014033), about 150,000 prints, largely undigitised) and trench maps ([NLS](https://maps.nls.uk/ww1/trenches/), georeferenced; [McMaster](https://library.mcmaster.ca/wwi-trench-maps-aerial-photographs), about 1,500 maps plus aerial photos as 600 dpi TIFFs), calibrated against crater counts in woodland from France's free national [LiDAR HD](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_NUAGES-DE-POINTS-LIDAR-HD) point clouds and Flanders' [DHMV II](https://remotesensing.vlaanderen.be/apps/openlidar/). Goal: a shell-density map at field resolution for one sector, such as the Somme or the Ypres Salient. Verifier: shell-collection records by commune and known clearance sites; deminers log each pickup but publish only national totals, so this needs a data request to Sécurité civile or DOVO.

### H3 Prioritise Laos villages for cluster-bomb clearance

The US dropped about 2 million tonnes of bombs on Laos in 1964–73, including some 270 million cluster submunitions of which up to 30% failed to explode ([Legacies of War](https://www.legaciesofwar.org/)); they still kill and maim farmers, and clearance teams such as [MAG](https://www.maginternational.org/what-we-do/where-we-work/laos/) clear them by hand. The US Air Force's THOR database of over 4 million Vietnam-era air sorties, with target coordinates and ordnance, is on [Kaggle](https://www.kaggle.com/datasets/usaf/vietnam-war-bombing-operations) (the data.mil and data.world copies are gone). Crater detection in imagery works: [Lin et al.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229826) detected craters in commercial satellite imagery of 100 km² of Cambodia and estimated that 44–50% of the bombs there had not exploded. Clearance to date sits in the Lao national IMSMA database run by the [National Regulatory Authority](http://www.nra.gov.la/), which is not public; [Mine Action Review](https://www.mineactionreview.org/country/lao-peoples-democratic-republic) and the [Landmine and Cluster Munition Monitor](https://the-monitor.org/country-profile/lao-pdr/impact) publish national totals. Goal: a village-level priority list for one province that combines THOR strike density, crater counts from imagery and clearance to date. Verifier: items found per hectare in subsequent clearance, which needs a data-sharing agreement with the NRA or an operator.

### H4 Predict where the unmapped minefields are

Mines laid in wars decades ago still maim people from Bosnia to Cambodia, and most of the cost of clearance goes on land that turns out to be clean, so the value is in predicting which suspected land is really mined. Each country records suspected, confirmed and cleared areas in an <abbr title="Information Management System for Mine Action">IMSMA</abbr> database, the standard maintained by [GICHD](https://www.gichd.org/what-we-do/mine-action/information-management-imsma/), but national data are mostly not public; [Mine Action Review](https://www.mineactionreview.org/country/bosnia-and-herzegovina) and [Landmine Monitor](https://the-monitor.org/) publish annual contamination and clearance estimates by country. Bosnia is a workable pilot: BHMAC's mine-suspected areas are published as [PDF map sheets on the EUFOR site](https://www.euforbih.org/index.php/en/bih-minefield-maps) (to be vectorised), and the 1992–95 war is covered event by event in [UCDP GED](https://ucdp.uu.se/downloads/); for recent wars such as Ukraine, [ACLED](https://acleddata.com/conflict-data) adds event data. Goal: a predicted-hazard score for every suspected polygon in Bosnia from conflict events, front lines and terrain. Verifier: clearance outcomes, that is, which suspected areas actually yielded mines when BHMAC or operators such as [HALO Trust](https://www.halotrust.org/) cleared them. [RELand](https://arxiv.org/abs/2311.03115) has piloted this kind of model in Colombia.

### H5 Predict contaminated land from old fire-insurance maps

Gasworks, tanneries, foundries and dry cleaners left coal tar, chromium, lead and solvents in the ground, and many sites were built over before anyone tested them. Fire-insurance maps recorded the use of every building: the Library of Congress has over 50,000 digitised [Sanborn map items](https://www.loc.gov/collections/sanborn-maps/) for US towns, with a JSON API; NLS has [Goad plans of Scottish towns](https://maps.nls.uk/towns/goad/) and the British Library holds Goad's English set; old OS 25-inch sheets on [NLS](https://maps.nls.uk/) label gasworks and tanneries by name. Goal: a parcel-by-parcel list for one city of predicted past industrial uses and the contaminants they imply; a New Jersey city such as Newark is a good pilot because the state publishes its [Known Contaminated Sites List](https://gisdata-njdep.opendata.arcgis.com/datasets/b167bb2ae09c43f8ab9e954700be45d9) as open GIS. Verifier: overlap with that list, with EPA brownfield (ACRES) and Superfund sites downloadable from [Cleanups in My Community](https://www.epa.gov/cleanups/cleanups-my-community), and with site-investigation reports for flagged parcels. Commercial environmental searches (EDR in the US, Groundsure and Landmark in the UK) already sell this site by site; the gap is an open, city-wide layer.

### H6 Rank eroding coastal landfills by years to breach

England has over 1,200 historic landfills in low-lying coastal areas at risk of tidal flooding or erosion, mostly unlined and with poor records of what went in ([Brand, Spencer, O'Shea and Lindsay 2018](https://doi.org/10.1002/wat2.1264), Queen Mary University of London). When the sea cuts into one, decades-old waste spills onto the beach, as at East Tilbury in Essex and at Lynemouth in Northumberland, where the council began a £5m excavation in 2024; Brand and colleagues estimated that 122 sites could start eroding by 2055 without protection, from a static overlay. The inputs are open: the Environment Agency's [Historic Landfill Sites](https://environment.data.gov.uk/dataset/7a955570-d465-11e4-a37c-f0def148f590) polygons, projected erosion zones from [NCERM 2024](https://environment.data.gov.uk/dataset/9fede91f-5acd-4fd2-9bd8-98153fa3c2ff), and measured shoreline retreat from satellite imagery with [CoastSat](https://github.com/kvos/CoastSat). Goal: a ranked list of coastal landfills by estimated years until the shoreline reaches the waste, with the retreat rate and its uncertainty for each site. Verifier: landfills that have already breached should rank near the top when the model is run on data from before they breached.

### H7 Find unrecorded mine shafts on old maps

An old mine shaft nobody recorded can open under a garden or road without warning; the Mining Remediation Authority (formerly the Coal Authority) deals with 600–700 reported surface hazards a year, some over entries it had no record of. Its national dataset of over 175,000 coal mine entries is built from plans deposited after 1872, and its own [user guide](https://www.gov.uk/government/publications/coal-mining-data-mine-entries) says many older entries are missing; the entries can be viewed free in its [map viewer](https://datamine-cauk.hub.arcgis.com/) and over WMS, but bulk download needs a licence. Victorian OS six-inch and 25-inch maps on [NLS](https://maps.nls.uk/) mark "Old Shaft", "Old Coal Pit" and "Air Shaft", and BGS's [mine plans catalogue](https://mine-plans.bgs.ac.uk/) indexes non-coal workings. Goal: for one coalfield, a list of shafts marked on historic maps that lie more than a set distance (say 20 m) from any recorded mine entry. Verifier: collapses and ground investigations that find a shaft at a predicted location; the Authority sells its surface-hazard records site by site, so bulk checking needs its cooperation.

### H8 Find undocumented orphan oil and gas wells

An unplugged well leaks methane and can let gas or brine into drinking water, and states can only plug the wells they know about. The USGS [documented orphaned well dataset](https://www.sciencebase.gov/catalog/item/62ebd67bd34eacf539724c56) lists about 118,000 known wells in 27 states, while Pennsylvania alone may have [300,000 to 700,000](https://www.edf.org/unearthing-pennsylvanias-legacy-orphan-and-abandoned-wells) old wells, of which about 30,000 are documented; the federal [orphaned wells programme](https://www.doi.gov/orphanedwells) funds plugging. Historic USGS topographic sheets in [topoView](https://ngmdb.usgs.gov/topoview/) mark wells with a symbol, and historic aerial photos on [EarthExplorer](https://earthexplorer.usgs.gov/) show well pads and tank scars; Berkeley Lab's [Ciulla et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC11656717/) trained a model on the topo maps and found 1,301 candidate wells in four counties of California and Oklahoma, so the method exists and the gap is coverage. Goal: candidate coordinates for Pennsylvania wells that appear on historic maps or photos but not in the DEP's [oil and gas well map](https://gis.dep.pa.gov/PaOilAndGasMapping/OilGasWellsStrayGasMap.html) or its [orphan and abandoned well list](http://cedatareporting.pa.gov/Reportserver/Pages/ReportViewer.aspx?/Public/DEP/OG/SSRS/Abandoned_Orphan_Web). Verifier: magnetometer surveys (drone or ground) and field visits at the candidate points.

### H9 Build evidence packs to record lost rights of way

The Ramblers' [Don't Lose Your Way](https://dontloseyourway.ramblers.org.uk) volunteers compared current maps with OS maps from about 1900 and found over 49,000 miles of historic paths in England and Wales missing from the definitive maps, the legal record of public rights of way. Finding them is done; adding one needs a definitive map modification order application to the highway authority backed by documentary evidence, and each takes a volunteer weeks. The evidence is archival: OS county series maps on [NLS](https://maps.nls.uk/), tithe maps (TNA series IR 29 and IR 30, [research guide](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/tithes/); free and georeferenced for one county at [Cheshire Tithe Maps Online](https://maps.cheshireeast.gov.uk/tithemaps/)), [enclosure awards](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/enclosure-awards/) and county record offices, checked against current definitive map data that [rowmaps](https://www.rowmaps.com/datasets/) gathers from the 149 authorities that publish it openly. Goal: a complete, cited evidence pack for each missing path in one county, in the form the authority requires. Verifier: applications accepted and orders confirmed. The statutory cut-off for recording pre-1949 paths in England is still 1 January 2031 in law, but the government [announced in December 2024](https://defraenvironment.blog.gov.uk/2025/01/03/historic-rights-of-way-saved/) that it will repeal it "when parliamentary time allows"; check whether that has happened before treating the date as a deadline.

### H10 Georeference historical flood extents to check flood models

The flood maps insurers and planners use are mostly modelled, and in many towns the model has never been checked against a real flood. Past floods survive as text: the [Chronology of British Hydrological Events](https://cbhe.hydrology.org.uk/) collects documentary accounts going back centuries, most not yet georeferenced, and newspapers ([Chronicling America](https://www.loc.gov/collections/chronicling-america/), free, US; [British Newspaper Archive](https://www.britishnewspaperarchive.co.uk/), subscription) report heights against named landmarks ("two feet above the bridge step"). Extract the number, the unit and the landmark it was measured from, locate the landmark and take its height from LiDAR (England's is free on the [Defra survey portal](https://environment.data.gov.uk/survey)); where the landmark cannot be found, record the level as unanchored and never invent a datum. Goal: georeferenced historic flood extents or levels for towns whose modelled map has never been checked. Verifier: overlap with the Environment Agency's [Recorded Flood Outlines](https://environment.data.gov.uk/dataset/8c75e700-d465-11e4-8b5b-f0def148f590) (surveyed events since 1946) in England and with USGS high-water marks in the [Flood Event Viewer](https://apps.usgs.gov/fev/) in the US, for events both cover.

### H11 Predict the material of "unknown" lead service lines

Lead service lines leach lead into tap water, and EPA estimates about 4 million remain in the US; under the [revised Lead and Copper Rule](https://www.epa.gov/ground-water-and-drinking-water/revised-lead-and-copper-rule) every community water system had to file a service-line inventory by October 2024, and millions of lines went in as "lead status unknown". EPA's [national service line inventory report](https://sdwis.epa.gov/ords/sfdw_pub/r/sfdw/sdwis_fed_reports_public/service-line-inventory) gives counts of lead, galvanised and unknown lines for each system; states publish more, for example [Michigan](https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/community-water-supply/lead-and-copper-rule/dsmi), [Illinois](https://epa.illinois.gov/topics/drinking-water/public-water-users/lead-service-line-information.html) and [New Jersey](https://dep.nj.gov/lead/map/), and systems serving over 50,000 people must post their address-level inventory online. [BlueConduit](https://blueconduit.com/) showed in Flint that house age, tax-assessor records, local plumbing codes and a sample of verified excavations predict material well enough to target digging. Goal: a predicted material, with a probability, for every "unknown" line in one utility that publishes an address-level inventory. Verifier: the utility's later excavation and verification records, held out from training.

### H12 Predict asbestos and lead paint building by building

Asbestos and lead paint are dangerous mainly when disturbed, so renovators, landlords and councils need to know which buildings have them before work starts; the usual rule is age alone (anything pre-2000 in the UK may contain asbestos, anything pre-1978 in the US may have lead paint), which flags most of the stock and discriminates poorly within it. Bans set the upper bounds: in the UK blue and brown asbestos were banned in 1985, white asbestos in 1999 and lead paint for general use in 1992; in the US residential lead paint was banned in 1978, while asbestos was only partly restricted until EPA's 2024 chrysotile ban. Building age and type are open data: England's [EPC register](https://get-energy-performance-data.communities.gov.uk/) gives construction age band and wall and roof type for millions of homes, New York City's [PLUTO](https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page) gives year built for every tax lot, and HUD's [American Healthy Homes Survey II](https://stacks.cdc.gov/view/cdc/113072) gives US lead-paint prevalence by construction era. Goal: a per-building probability of lead paint or asbestos for one region that has a public building-level record to test against. Verifier: for lead, New York City's [lead paint violations](https://data.cityofnewyork.us/Housing-Development/Recent-Lead-Paint-Violations/v574-pyre) from HPD inspections; for asbestos, public building-level records are rare (UK asbestos registers are held privately by building owners), and the best available is the New South Wales [loose-fill asbestos insulation register](https://www.nsw.gov.au/housing-and-construction/safety-home/loose-fill-asbestos-insulation/loose-fill-asbestos-insulation-register), which covers one product only.

## I Side-channels: inferring things from data collected for something else

The pattern: an instrument built for X incidentally records Y.

### I1 Weather radar → meteorite falls

Most meteorites that fall are never found, and a fresh fall is worth far more to science than a weathered desert find. Marc Fries showed that falling stones show up in US weather radar during dark flight, after the fireball has gone out ([Fries & Fries 2010](https://doi.org/10.1111/j.1945-5100.2010.01115.x)); his [2025 review](https://doi.org/10.1155/aa/3041760) counts 32 recovered falls and 20 probable falls never recovered, and NASA ARES lists the events on its [meteorite-falls page](https://ares.jsc.nasa.gov/meteorite-falls/events/). The full <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive, 1991 onward, is free on [AWS](https://registry.opendata.aws/noaa-nexrad/). Train a detector on known falls from the [Meteoritical Bulletin database](https://www.lpi.usra.edu/meteor/) and bolide times and positions from [NASA CNEOS](https://cneos.jpl.nasa.gov/fireballs/) (the [Global Fireball Observatory](https://gfo.rocks) and [AllSky7](https://allsky7.net) do the same for Australia and Europe, where national radar archives are the analogue), then scan the archive for radar returns under fireballs nobody searched. Goal: published strewn-field maps, with predicted fragment masses, for every unrecovered fall found. Verifier: someone walks the field and finds stones.

### I2a Weather radar → bat colony counts

Mexican free-tailed bats eat thousands of tonnes of crop pests a night across Texas and the south-west, and their colonies are shifting with climate, but most roosts have never been counted more than a few times. A colony leaving its cave at dusk appears on Doppler weather radar as an expanding ring, and the <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive on [AWS](https://registry.opendata.aws/noaa-nexrad/) holds every scan since the early 1990s. The method is proven for a few Texas caves ([Frick et al. 2012](https://doi.org/10.1371/journal.pone.0042737); Stepanian and Wainwright's [Bracken Cave series](https://doi.org/10.1111/gcb.14051) back to 1995), while bird migration is already done nationally by [BirdCast](https://birdcast.info). Goal: nightly emergence-size and timing series back to the 1990s for every radar-visible roost in the US, each named and located. Verifier: published thermal-camera emergence counts at Bracken and other monitored caves.

### I2b Weather radar → wildfire smoke plume heights

How high a wildfire lofts its smoke decides whether it chokes the next valley or crosses a continent, and air-quality models mostly guess it. Weather radar sees the ash and debris in a plume, and [Krishna et al. 2024](https://doi.org/10.1029/2023JD039926) showed radar-derived injection heights match airborne lidar on average, for a handful of fires. The <abbr title="Next-Generation Weather Radar">NEXRAD</abbr> Level II archive is free on [AWS](https://registry.opendata.aws/noaa-nexrad/), with dual-polarisation (which separates smoke from rain) on every radar since 2013. Goal: a daily plume-top catalogue for every large US wildfire since 2013. Verifier: satellite plume heights from the [MISR Plume Height Project](https://misr.jpl.nasa.gov/get-data/misr-plume-height-project-2/) for the fires both observed.

### I3 Mobile-phone tower links → rainfall

Rain weakens the microwave backhaul links between mobile towers, so a phone network is a dense rain gauge in exactly the places, cities and the tropics, where real gauges are sparse ([Overeem et al. 2013](https://doi.org/10.1073/pnas.1217961110)). Operators hold the signal-level data and rarely release it; the main fully open set is [OpenMRG](https://doi.org/10.5281/zenodo.7107689) (364 links at 10-second resolution in Gothenburg, June–August 2015, with 11 gauges and a radar composite; described in [ESSD](https://doi.org/10.5194/essd-14-5411-2022)), and the [OpenSense COST Action](https://opensenseaction.eu/zenodo-datasets/) lists a few more, including a New York set. Open processing code exists in [pycomlink](https://github.com/pycomlink/pycomlink). Goal: a benchmarked open pipeline (wet/dry classification, baseline, attenuation to rain rate, mapping) that beats published scores on OpenMRG, packaged with a data-sharing template so an operator can run it on its own network. Verifier: the gauges and radar shipped in the same dataset, scored on a held-out period.

### I4 Seismometers → city activity

A seismometer in a city records traffic, trains, factories and crowds as high-frequency noise, and in the 2020 lockdowns that noise fell by up to 50% worldwide ([Lecocq et al. 2020](https://doi.org/10.1126/science.abd2438), code on [GitHub](https://github.com/ThomasLecocq/2020_Science_GlobalQuieting)), which makes it a free daily activity signal where economic statistics are late or missing. Continuous waveforms from thousands of stations are open through the [EarthScope FDSN dataselect service](https://service.iris.edu/fdsnws/dataselect/1/) and the other [FDSN data centres](https://www.fdsn.org/webservices/), and the citizen [Raspberry Shake](https://data.raspberryshake.org/) network, many units in houses in town centres, has its own FDSN server. Compute daily 4–14 Hz noise per station with [MSNoise](https://www.msnoise.org/) or the Lecocq code and turn it into a per-city index as far back as each station goes. Goal: a public daily activity index for every city with a usable station. Verifier: the [Google COVID-19 Community Mobility Reports](https://www.google.com/covid19/mobility/) for 2020–22.

### I5 GNSS → water vapour and tsunamis

Every permanent <abbr title="Global Navigation Satellite System">GNSS</abbr> station also measures the atmosphere: the tropospheric delay gives precipitable water, and the ionosphere's <abbr title="total electron content">TEC</abbr> ripples when a tsunami passes beneath, hours before it reaches a distant coast. The water-vapour side is largely done: the [Nevada Geodetic Laboratory](https://geodesy.unr.edu/gps_timeseries/README_trop2.txt) publishes 5-minute zenith delay and water vapour for more than 18,600 stations since 1994. The tsunami side is not: JPL's [GUARDIAN](https://guardian.jpl.nasa.gov/) flagged the July 2025 Kamchatka tsunami 30 minutes before it reached Hawaii ([paper](https://doi.org/10.1007/s11069-026-08151-4)), but there is no public benchmark to compare detection methods on. Raw observations are open from [IGS](https://igs.org/data/) and [EarthScope](https://www.unavco.org/data/gps-gnss/data-access-methods/data-access-methods.html) (free registration). Goal: a public benchmark of TEC series from every station in range of the major tsunamis since 2004 (Sumatra 2004, Chile 2010, Tohoku 2011, Hunga Tonga 2022, Kamchatka 2025), labelled with wave arrival, plus a baseline detector scored on lead time and false alarms. Verifier: arrival times at [DART buoys](https://www.ndbc.noaa.gov/dart/dart.shtml) and [tide gauges](https://www.ioc-sealevelmonitoring.org/).

### I6 Mains hum → dating and authenticating recordings

Audio or video recorded near mains wiring picks up a faint hum whose frequency wanders around 50 or 60 Hz in a pattern unique to each grid and each second, so matching it against a logged reference dates a recording and exposes edits; UK police labs have used this in court for years. It only works where a reference log exists. Public ones: Great Britain at 1 s from [NESO](https://www.neso.energy/data-portal/system-frequency-data), the Nordic grid at 10 Hz from [Fingrid](https://data.fingrid.fi/en/datasets/339), Continental Europe at 1 s (2012 onward) from the German operators on [Netztransparenz](https://www.netztransparenz.de/de-de/Regelenergie/Daten-Regelreserve/Sek%C3%BCndliche-Daten), and a one-off twelve-grid campaign by [Jumar et al.](https://arxiv.org/abs/2006.01771); North America's [FNET/GridEye](https://fnetpublic.utk.edu/) shows live maps but no public archive, and most of Asia, Africa and Latin America have nothing. Goal: an open matching tool benchmarked on the [ENF-WHU](https://github.com/ghua-ac/ENF-WHU-Dataset) recordings, plus a logger design (Jumar's used an ordinary socket) and the first months of public reference data for grids that lack one. Verifier: recordings with independently known timestamps, matched blind.

### I7a Ash layers → matching sediment and ice cores

A volcanic ash layer is an instant in time: if the same eruption's glass turns up in two cores, the dates of one transfer to the other, which is how lake, marine and ice records get aligned. Glass chemistry from thousands of cores sits in [EarthChem](https://portal.earthchem.org/) and [Tephrabase](https://www.tephrabase.org/) in incompatible units, normalisations and naming conventions, and the same layer has never been matched across them systematically. Harmonise the oxide analyses with their analytical metadata, then cluster them into candidate correlations with probabilities. Goal: an open table of cross-core tephra correlations, each listing the analyses that support it. Verifier: established correlations of well-known marker layers (Vedde Ash, Campanian Ignimbrite) held out and recovered, and independent dates on newly matched layers.

### I7b Ice cores + chronicles → the unidentified 1808/09 eruption

Ice cores from both Greenland and Antarctica show a sulphate spike in 1808/09 about half Tambora's size, from an eruption that cooled the planet and whose volcano is still unknown; it may be two eruptions ([Timmreck et al. 2021](https://cp.copernicus.org/articles/17/1455/2021/)). The 1831 cooling was pinned on Zavaritskii caldera in the Kurils only in December 2024, by matching ice-core glass shards to deposits on the volcano ([Hutchison et al.](https://doi.org/10.1073/pnas.2416699122)). Inputs: the [eVolv2k](https://doi.org/10.1594/WDCC/eVolv2k_v2) ice-core sulphate reconstruction ([Toohey & Sigl 2017](https://doi.org/10.5194/essd-9-809-2017)), the [Global Volcanism Program](https://volcano.si.edu/) database of Holocene volcanoes, published glass analyses from the 1809 ice layer, historical reports of odd skies and ashfall, and satellite imagery of young calderas. Goal: a ranked list of candidate volcanoes with the evidence for each (hemisphere from the bipolar sulphate ratio, glass-chemistry match, undated young deposits, local records). Verifier: field sampling and dating of the top candidates, which needs volcanologists on site.

### I8a Tree rings → screening radiocarbon series for solar superstorms

An extreme solar particle storm leaves a one-year jump in radiocarbon in tree rings (a Miyake event, such as 774 and 993 CE); a repeat today would damage satellites and power grids, and the risk estimate rests on how many there have been. Annually resolved radiocarbon now covers long stretches: [Brehm et al. 2021](https://doi.org/10.1038/s41561-020-00674-0) measured every year from 969 to 1933 and flagged two new candidates (1052, 1279), and the [IntCal20 data archive](https://intcal.org/data.html) holds the raw tree-ring sets behind the calibration curve, many at annual or near-annual resolution. Goal: a list of candidate event years across all published annual series, each with jump size, significance against the series noise, and whether other trees at the same year agree. Verifier: independent trees for the same year from other labs, and coincident beryllium-10 or chlorine-36 peaks in ice cores.

### I8b Tree rings → choosing which years to measure for solar superstorms

About half a dozen Miyake events (one-year radiocarbon jumps from extreme solar storms) are known, most found by measuring annual rings around a suspect year, and most of the Holocene has never been measured at annual resolution. The measurement needs an <abbr title="accelerator mass spectrometry">AMS</abbr> radiocarbon lab and dated wood, so an agent cannot do it; it can rank unmeasured years by prior evidence: decadal anomalies in the [IntCal20 raw data](https://intcal.org/data.html), beryllium-10 peaks in ice cores, historical aurora reports, and which dendro-dated wood exists in collections. Goal: a ranked target list handed to a lab. Verifier: the lab's hit rate against random years.

### I9 Paintings → volcanic sunsets before instruments

Before instruments, the main evidence for how much a volcano dimmed and reddened the sky is what people saw. [Zerefos et al. 2007](https://doi.org/10.5194/acp-7-4027-2007) showed that the red-to-green ratio of sunsets in about 550 dated landscape paintings, 1500–1900, rises after major eruptions such as Tambora (1815) and Krakatau (1883) and tracks aerosol optical depth. Paintings are a weak instrument (pigments fade and shift, varnish and restoration change colour, taste and studio practice vary), but they are dated, often located, and there are now hundreds of thousands openly licensed through the [Rijksmuseum API](https://data.rijksmuseum.nl/docs/), the [Art Institute of Chicago API](https://api.artic.edu/docs/), the [Met collection API](https://metmuseum.github.io/) and [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:API). Classify which images show a sunset or twilight sky, measure sky colour, and model it with date, place, artist and school as covariates. Goal: a per-year sunset-colour index, 1600–1900, with uncertainties. Verifier: with eruption years held out of the fit, the index should pick out 1815, 1883 and the unidentified 1809 eruption, and correlate with ice-core sulphate.

### I10a Ship logbooks → the geomagnetic field

Navigators logged compass declination for four centuries, and those readings are the backbone of field models before observatories: [gufm1](https://doi.org/10.1098/rsta.2000.0569) reconstructs 1590–1990 from Jonkers' logbook compilation, and the [HISTMAG database](https://cobs.zamg.ac.at/gsa/index.php/en/models-and-databases/histmag) now holds about 155,000 historical declination records ([Arneitz et al. 2017](https://doi.org/10.1093/gji/ggx245)). The model is done; the gap is logbooks transcribed or scanned since, whose variation readings are not in HISTMAG: candidates are the [CLIWOC](https://www.historicalclimatology.com/cliwoc.html) 1750–1850 logbook database, [Old Weather](https://www.oldweather.org/) naval and whaling logs, and whaling logbooks behind the [American Offshore Whaling Logbook data](https://whalinghistory.org/av/logs/aowl/), and the first job is finding which kept the variation column. Goal: new declination records with position, date and ship, deduplicated against HISTMAG and submitted to it. Verifier: agreement with gufm1 where it is well constrained; the pay-off is in sparse regions (South Pacific, Southern Ocean) and early periods, where [ship-log declinations still move the model](https://doi.org/10.1186/s40623-023-01852-1).

### I10b Whaling logbooks → the 19th-century sea-ice edge

Whales feed along the ice edge, so where whalers caught them traces where the ice was: de la Mare used 1931–87 Antarctic catch positions to argue for a mid-century sea-ice decline ([Nature 1997](https://doi.org/10.1038/37956)), and [Mahoney et al. 2011](https://journalhosting.ucalgary.ca/index.php/arctic/article/view/67193) used whaleship logs to map Bering and Chukchi ice from 1850 to 1910. The [American Offshore Whaling Logbook data](https://whalinghistory.org/participate/download/) give daily positions and whale encounters by species, including ice-associated bowheads, for about 1,500 voyages from 1784 to 1920, free to download. Goal: a seasonal 19th-century ice-edge series for the other ice regions whalers worked, chiefly the Sea of Okhotsk and Hudson Bay. Verifier: the method must first reproduce Mahoney's Bering–Chukchi result from the same data, then agree where it overlaps the gridded [Walsh et al. sea-ice record from 1850](https://nsidc.org/data/g10010/versions/2) at NSIDC.

### I11 Gravestones → historical mortality

Before civil registration, child mortality and epidemic timing are known only where parish burial registers survive and have been transcribed, a small fraction of parishes. Gravestone indexes cover far more: [Find a Grave](https://www.findagrave.com) and [BillionGraves](https://billiongraves.com) hold hundreds of millions of memorials with dates and cemetery locations, and the [Gravestone Photographic Resource](https://www.gravestonephotos.com/) a smaller, mainly British set. Access is the obstacle: Find a Grave's terms forbid scraping and bulk reuse, so this needs a data agreement with Ancestry (its owner) or BillionGraves, or a smaller permitted sample. Goal: age-at-death and season-of-death curves by parish and decade, corrected for who got a stone (children and the poor are under-represented). Verifier: the same parishes' burial registers transcribed in [FreeREG](https://www.freereg.org.uk/).

### I12 Bomb-pulse radiocarbon → poached ivory

Nuclear tests in 1952–62 nearly doubled atmospheric carbon-14, and its decline since dates tissue formed after 1955 to within a year or two ([Uno et al. 2013](https://doi.org/10.1073/pnas.1302226110)), so ivory from an elephant killed after the 1989 trade ban can be proven illegal. The systematic application has started: [Cerling et al. 2016](https://doi.org/10.1073/pnas.1614938113) dated 231 tusks from 14 large seizures and found 90% came from elephants dead under three years, and a [2022 follow-up](https://doi.org/10.1073/pnas.2211550119) showed ivory leaking from government stockpiles. New dates need an <abbr title="accelerator mass spectrometry">AMS</abbr> lab and access to seized tusks, and the CITES ETIS seizure database is confidential; what an agent can do is compile every published ivory radiocarbon result and link it to public seizure records in TRAFFIC's [Wildlife Trade Portal](https://www.wildlifetradeportal.org/), CITES documents and news reports. Goal: one open table of dated seizures with place, seizure date and death-to-seizure lag. Verifier: the lags reproduce those reported in the source papers.

### I13 Night lights → power outages

Where utilities publish no outage data, which is most of the world and every war zone, satellite night lights are the only record of who lost power and for how long. NASA's [Black Marble](https://blackmarble.gsfc.nasa.gov/) daily product ([VNP46A2 on LAADS](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)) corrects <abbr title="Visible Infrared Imaging Radiometer Suite">VIIRS</abbr> night radiance for moonlight, cloud and snow at 500 m from 2012, and the Colorado School of Mines [EOG](https://eogdata.mines.edu/products/vnl/) publishes nightly and monthly mosaics. Black Marble has been used for single disasters such as Puerto Rico after Hurricane Maria, but nobody runs a systematic global outage detector. Goal: a daily outage catalogue by district (start, duration, population affected), validated in the US, then run globally. Verifier: the county-level [EAGLE-I outage record](https://doi.org/10.6084/m9.figshare.24237376) for 2014–22, 15-minute customers-out counts scraped from utility outage maps.

### I14 Aircraft transponders → winds and turbulence

Airliners broadcast heading, airspeed and ground speed every few seconds, from which the wind along every flight path can be computed; KNMI's EMADDC does this operationally for Europe from Mode-S replies, and its reprocessed archive from 2016 is open on the [KNMI Data Platform](https://dataplatform.knmi.nl/dataset/emaddc-hist-repro-data-1-0). Jitter in the same aircraft's vertical rate marks turbulence, which forecasters most lack observations of. Raw <abbr title="Automatic Dependent Surveillance–Broadcast">ADS-B</abbr> and Mode-S messages from the [OpenSky Network](https://openskynetwork.github.io/opensky-api/trino.html) cover much of the world, though the full historical database is granted only to academic, government and aviation-authority users (GNSS jamming maps from the same data are already done by [GPSJam](https://gpsjam.org)). Goal: an open turbulence (eddy dissipation rate) and wind product for regions outside Europe, starting with the US, with published skill scores. Verifier: turbulence [pilot reports](https://mesonet.agron.iastate.edu/request/gis/pireps.php), radiosonde winds from [IGRA](https://www.ncei.noaa.gov/products/weather-balloon/integrated-global-radiosonde-archive), and [ERA5](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-pressure-levels).

### I15 Rooftop solar → cloud and irradiance maps

Every rooftop solar system is an irradiance sensor, and countries like the UK, Germany and Australia have tens of thousands, far denser than any radiometer network; [Open Climate Fix](https://github.com/openclimatefix) already uses PV output to nowcast national solar generation, but nobody publishes the fleet as a weather map. Data: Sheffield Solar's [UK PV dataset](https://huggingface.co/datasets/openclimatefix/uk_pv) (30,000+ systems, 2010–2025, 30-minute, about 1,300 at 5-minute, locations blurred to ~1 km, CC-BY) and the worldwide volunteer uploads behind the [PVOutput API](https://pvoutput.org/help/api_specification.html) (rate-limited per account). Converting output to irradiance needs each panel's tilt, orientation and shading, which can be fitted from clear-sky days. Goal: a 5-minute, 1–2 km gridded surface irradiance product for Great Britain from 2010, published as a dataset. Verifier: [BSRN](https://bsrn.awi.de/) radiometers (Camborne and Lerwick in the UK) and [CAMS](https://ads.atmosphere.copernicus.eu/datasets/cams-solar-radiation-timeseries) satellite irradiance.

### I18 Harvest dates and tithes → climate before thermometers

Before thermometers, the best summer-temperature record in Europe is when the grapes were picked: the Beaune series runs unbroken from 1354 to 2018 and tracks instrumental temperature where they overlap ([Labbé et al. 2019](https://doi.org/10.5194/cp-15-1485-2019), data in the [supplement](https://doi.org/10.5194/cp-15-1485-2019-supplement)). About 380 grape-harvest series, 93% French, are compiled in the open [Daux et al. database](https://www.ncei.noaa.gov/access/paleo-search/study/13194) at NOAA; [Euro-Climhist](https://www.euroclimhist.unibe.ch/index_eng.html) (search needs a free login) holds documentary weather observations; and grain tithes, which rose and fell with the harvest, have been compiled for Sweden, Switzerland and Spain ([Ljungqvist et al. 2023](https://cp.copernicus.org/articles/19/2463/2023/)). Many more series sit untranscribed in digitised municipal harvest proclamations, tithe accounts and estate books. Goal: new annual series (harvest date or tithe yield) transcribed from digitised archives, each with place, citation and page image, and not already in the Daux database or Euro-Climhist. Verifier: overlap with instrumental temperature after about 1750 and with neighbouring existing series.

## J Sequencing and biomedical archives

### J1 SRA/ENA sweeps explain acronyms, better title, split, elaborate

[Serratus](https://serratus.io) found 130k new RNA viruses; [Logan](https://github.com/IndexThePlanet/Logan) assembled all of the [Sequence Read Archive](https://www.ncbi.nlm.nih.gov/sra). Remaining: novel CRISPR systems, antibiotic biosynthetic clusters, giant viruses, and contamination/mislabeling audits (wrong species, wrong sex, cell-line cross-contamination). Mislabeling is checkable from the reads.

### J2 Restoring invisible trials elaborate titel, links? is this even doablee?

Half of trials never publish; results exist in [FDA](https://www.fda.gov) approval packages ([Drugs@FDA](https://www.accessdata.fda.gov/scripts/cder/daf/)), [EMA](https://www.ema.europa.eu) clinical data, and data-sharing portals. [RIAT](https://restoringtrials.org) did a handful by hand.

### J3 Adverse-event backtesting elaborate? jargon? dataset? unclear if this is

doable

[openFDA](https://open.fda.gov) exposes [FAERS](https://www.fda.gov/drugs/surveillance/fda-adverse-event-reporting-system-faers). Freeze a signal detector on data to year N, score it against label changes and withdrawals in N+1..N+5, then run forward.

### J4 Hospital price files is this underserved? unclear if it's not already being done

Every US hospital must post machine-readable prices; the files are deliberately unusable. [Dolthub](https://www.dolthub.com/repositories/dolthub/hospital-price-transparency) and [Turquoise](https://turquoise.health) have partial parses. Deliverable: one national table with a verified sample (call the billing office).

### J5 Image-archive audits jargon, dataset source of truth? how to get started? jargon?

[EMPIAR](https://www.ebi.ac.uk/empiar/), [IDR](https://idr.openmicroscopy.org), [Human Protein Atlas](https://www.proteinatlas.org) for mislabeled or duplicated images; [PDB-REDO](https://pdb-redo.eu) covers geometry, not misassigned ligands.

### J6 Antimicrobial resistance from public isolates jragon? goal? split? elaborate?

[NCBI Pathogen Detection](https://www.ncbi.nlm.nih.gov/pathogens/) (over a million isolates with resistance genes, dates, locations); [Pfizer](https://www.pfizer.com)'s ATLAS via [Vivli](https://amr.vivli.org). Spread maps, cross-hospital outbreak detection, gaps versus [WHO GLASS](https://www.who.int/initiatives/glass).

### J7 Wastewater epidemiology methods split, is the data public? elaborate? goal?

[WastewaterSCAN](https://data.wastewaterscan.org) and CDC NWSS; site normalisation and variant deconvolution are live methods problems, backtestable against case data.

### J8 Drug-shortage prediction

[FDA shortage list](https://www.accessdata.fda.gov/scripts/drugshortages/) plus [warning letters](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters), inspection reports via [FOIA](https://www.foia.gov), and the number of manufacturers per active ingredient. Predict which sterile injectable goes short next; hospitals would use it. Backtestable, but only against a dated timeline rebuilt from archived snapshots: the live shortage API rewrites history, so a naive backtest leaks the answer.

### J9 Inspection-report clustering goal? elaborate? jargon, better dataset/urls?

[FDA Form 483s](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-references/fda-form-483-frequently-asked-questions) and EU inspection reports describe recurring plant failures in free text; cluster by facility over time.

### J10 Food-safety alert prediction datasets? urls? goal? elaborate

[RASFF](https://webgate.ec.europa.eu/rasff-window/screen/search) (EU), [FDA](https://www.fda.gov) recalls, [USDA](https://en.wikipedia.org/wiki/United_States_Department_of_Agriculture) pesticide-residue data. Predict the next product/origin alert; backtest.

### J11 Animal-disease early signals likelihood of there being enough data to do this properly?

[ProMED](https://promedmail.org) (30 years of curated outbreak reports) versus official [WAHIS](https://wahis.woah.org) reporting: what preceded major outbreaks, and what the official system missed.

## K Records that could be linked but aren't (investigative layer)

### K1 Procurement anomaly detection split, unclear if this is doable

[EU TED](https://ted.europa.eu), [USAspending](https://www.usaspending.gov), [UK Contracts Finder](https://www.contractsfinder.service.gov.uk), [ProZorro](https://prozorro.gov.ua). Bid-rigging fingerprints: single-bidder tenders, price rotation, identical typos across "competing" bids, winners incorporated the week before. Output goes to journalists with documents attached.

### K2 Company-registry networks better title, jargon, unclear if this is underserved,probbly already well-served by govt's wanting to disallow disqualified directors

[Companies House bulk data](https://download.companieshouse.gov.uk), [OpenCorporates](https://opencorporates.com), [ICIJ Offshore Leaks](https://offshoreleaks.icij.org). Disqualified directors still directing, shared addresses across thousands of shells, ownership loops.

### K3 Model-bill fingerprinting, better title, model bills??? jargon, unclear whta this is doing, goal?

[Copy, Paste, Legislate](https://publicintegrity.org/topics/politics/copy-paste-legislate/) matched lobbyist model bills to state laws once in 2019. Run continuously across all states, the [EU](https://european-union.europa.eu) and [Westminster](https://en.wikipedia.org/wiki/Parliament_of_the_United_Kingdom), with lobbying-disclosure filings attached.

### K4 Judicial conflicts, better title! datasets? urls? how to get started?

The [WSJ found 131 federal judges](https://www.wsj.com/articles/131-federal-judges-broke-the-law-by-hearing-cases-where-they-had-a-financial-interest-11632834421) ruling on cases involving their holdings; [CourtListener](https://www.courtlistener.com/financial-disclosures/) hosts disclosures. Extend to state courts and arbitrators.

### K5 Charity self-dealing datasets? irs.gov isn't good enough, better urls, better title

Every [Form 990](https://en.wikipedia.org/wiki/Form_990) is on [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/): related-party transactions, pay outliers, grants to entities sharing a board. Checkable against later [IRS](https://www.irs.gov) revocations.

### K6 Unidentified remains vs missing persons unclear how to make progress, datasets? goal?

[NamUs](https://www.namus.gov) lists ~14,000 unidentified bodies; matching has been DNA-driven, but text and metadata (tattoos, dental, clothing, timeline) were never cross-searched at scale.

### K7 Slave-trade record linkage goal? URLS for planation legers?

[SlaveVoyages](https://www.slavevoyages.org), [Freedom on the Move](https://freedomonthemove.org), [Enslaved.org](https://enslaved.org), plantation ledgers. Reconstruct individual lives across sources.

### K8 Unenforced judgments and wage theft better data? I don't know if this is

enough to get started? goal?

[DOL enforcement data](https://enforcedata.dol.gov), state labour boards: who never paid, who reincorporated to dodge it.

### K9 FOIA archaeology goal? seems kinda pointless?

Agencies publish [FOIA](<https://en.wikipedia.org/wiki/Freedom_of_Information_Act_(United_States)>) logs (what was requested) and reading rooms (what was posted). Mine logs for records released to one requester but never posted, then request them via [MuckRock](https://www.muckrock.com).

### K10 Wildlife-trade discrepancies data?urls? goal?

The [CITES Trade Database](https://trade.cites.org) records both exporter- and importer-reported shipments; systematic mismatches (e.g., "captive-bred" exports from countries with no breeding facilities) indicate laundering. Applied by hand to single species, never across all 40k listed taxa.

### K11 Coded-language wildlife marketplaces dataset? elaborate

Sellers use euphemisms ("ox bone" for ivory). The [Coalition to End Wildlife Trafficking Online](https://www.endwildlifetraffickingonline.org) relies on volunteer spotters. Scoreable by takedown rate.

### K12 Seizure-record networks dataset? goal? elaborate

[TRAFFIC's Wildlife Trade Portal](https://www.wildlifetradeportal.org) holds thousands of seizures from press reports; link into trafficker networks by courier, route, concealment method.

### K13 RFMO (Regional Fisheries Management Organisation) paperwork goal? seems like there's already an incentive to catch this sorta laundering identity crimes?

Tuna commissions publish compliance reports and vessel lists as PDFs; the [combined IUU vessel list](https://iuu-vessels.org) is the tip. Cross-reference flag, owner and name changes to find vessels laundering identity. [Global Fishing Watch](https://globalfishingwatch.org) covers the satellite side.

### K14 Catch reconstruction vs trade elaborate? URLs?

[Sea Around Us](https://www.seaaroundus.org) reconstructs true catch; [UN Comtrade](https://comtrade.un.org) has trade. Exporting more of a species than plausibly caught is checkable.

### K15 Politician promise and position tracker goal?

Automated, cross-country, every claim hyperlinked to a primary source; [PolitiFact](https://www.politifact.com) and [Full Fact](https://fullfact.org) manual trackers are the backtest.

### K16 Aid-project failure prediction again, seems to probably have someone checking this already??

Every [World Bank](https://www.worldbank.org) project has a completion report and an IEG rating ([documents.worldbank.org](https://documents.worldbank.org), [IEG](https://ieg.worldbankgroup.org)); [IATI](https://iatistandard.org) has donor transactions. What predicts failure has only been studied in samples.

### K17 Discredited forensics in standing convictions what on earth is going on here? elaborate? jargon? datasets?

The [National Registry of Exonerations](https://www.law.umich.edu/special/exoneration) tags contributing factors; appellate opinions are text. Find convictions resting on bite marks, hair microscopy or discredited shaken-baby criteria, with a human review layer. [US Sentencing Commission](https://www.ussc.gov/research/datafiles/commission-datafiles) data for disparity work.

### K18 Expungement and eligibility engines elaborate? datasets?

Per-state expungement eligibility verified against statute; the [Collateral Consequences Resource Center](https://ccresourcecenter.org) maintains the legal map.

### K19 Which promised repairs vanished goal? jargon? what's going on here? clarify?

Every public audit ends with recommendations; almost nobody checks what happened next. The US [GAO](https://www.gao.gov/reports-testimonies/recommendations-database) keeps an open-recommendations database, the UK [NAO](https://www.nao.org.uk), Brazil's [TCU](https://www.tcu.gov.br) and India's [CAG](https://cag.gov.in) publish equivalents as PDFs. Trace each recommendation through later budgets, minutes and implementation reports to a completion record or an explicit statement of non-completion, and find the ones that were re-recommended three audits running. Verifier: the dated document that closes or reopens each item. Non-US coverage comes free.

## L Improving documents, with adoption as the verifier

Most consultation documents got a week of a tired analyst's time. Some venues have a built-in scoreboard: the comment is adopted or it isn't.

### L1 Proposed federal rules, goal?

[regulations.gov](https://www.regulations.gov). Final rules must respond to substantive comments, so adoption is measurable. Target: cost-benefit arithmetic that doesn't add up, definitions conflicting with the enabling statute, impossible compliance timelines, references to superseded sections, and smarter trade-offs the drafter missed.

### L2 Find the broken arithmetic in environmental impact statements, goal? seems hard to do properly

A major US federal project files an <abbr title="Environmental Impact Statement">EIS</abbr> of hundreds of pages modelling traffic, emissions and water, and a comment period in which an error still changes the outcome. Read [EPA's database](https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search) for inconsistent baselines, mis-stated model inputs and alternatives dismissed on wrong arithmetic, then file the comment.

### L3 Standards errata Seems hard to verify? goal?

The [RFC Editor](https://www.rfc-editor.org/errata.php) formally accepts errata; [Ethereum EIPs](https://eips.ethereum.org), [Bitcoin BIPs](https://github.com/bitcoin/bips), [W3C](https://www.w3.org) specs. Spec ambiguities that produce implementation divergence (B11) are the richest vein.

### L4 Local planning consultations how to verify the change is good?

UK planning portals, US municipal agendas: proposals conflicting with the authority's own adopted plan; missed Pareto improvements.

### L5 Dead and inconsistent statutory cross-references okay this one is nice

[US Code](https://www.govinfo.gov/app/collection/uscode), [CFR](https://www.ecfr.gov), [legislation.gov.uk](https://www.legislation.gov.uk), EU regulations: references to repealed sections, circular definitions, the same term defined differently across a code. The multilingual version: the 24 official-language texts of the same EU regulation are equally authoritative and sometimes disagree on a number, a date or a negation; aligned passages plus a bilingual spot-check.

### L6 Patent prior-art hunting elaborate?

[Unified Patents](https://www.unifiedpatents.com) runs cash bounties; [PTAB](https://www.uspto.gov/patents/ptab) outcomes are the verifier.

### L7 Improper Orange Book listings elaborate? orange book??? jargon

The [FTC challenged 100+ patent listings](https://www.ftc.gov/news-events/news/press-releases/2023/11/ftc-challenges-more-100-patents-improperly-listed-fdas-orange-book) that delay generics; the listing criteria are statutory and checkable.

## M Software

### Tools that unlock the archives

#### M1 Open handwritten-text recognition for historical hands datasets? urls?

[Transkribus](https://www.transkribus.org) is closed, paid and mediocre on Kurrent, secretary hand, early Arabic, Ethiopic, Devanagari. This one tool unlocks sections C and D. Verifier: character error rate on published ground truth.

#### M2 Optical music recognition datasets? better title

[IMSLP](https://imslp.org) has ~700k scores as images; [Audiveris](https://github.com/Audiveris/audiveris) is the open tool and nobody uses it. Verifier: alignment with recordings.

#### M3 Extract the tables from scanned government statistical annuals

Before governments kept databases they printed the numbers: statistical abstracts, census volumes, trade and customs returns, agricultural and factory returns. Those pages are the only record of prices, wages, output and population for most countries before about 1960, and they are scanned. <abbr title="Optical Character Recognition">OCR</abbr> reads the prose and fails on the tables, so economic history is bottlenecked on hand transcription. Extract the tables and publish each cell with its page image.

#### M4 Speech recognition for dysarthric and accented speech and unserved languages elaborate? datasets? urls? goal?

[Project Euphonia](https://sites.research.google/euphonia/about/) collected data; open models are far behind.

#### M5 Geo-referencing at scale elaborate? datasets? urls? goal?

[MapReader](https://github.com/maps-as-data/MapReader) for maps; photo-viewpoint matching for D6 and E11.

### Open replacements in professional niches (incumbent → open state → how a developer proves it's better)

NOTE: Lots of the "replace this software with vibe-coded software" is maybe a good project but also maybe not. idk.

_Guard against slop:_ every replacement ships with the incumbent's verification cases passing, a documented workflow a practitioner has actually used for a real job, and a maintainer who commits to a year.

#### M6 Structural analysis split, elaborate, better title

Incumbents: [ETABS](https://www.csiamerica.com/products/etabs)/[SAP2000](https://www.csiamerica.com/products/sap2000) ([CSI](https://www.csiamerica.com)), [RISA](https://risa.com), [Tekla](https://www.tekla.com). Open: [OpenSees](https://opensees.berkeley.edu) (research, no GUI), [Code_Aster](https://code-aster.org), [CalculiX](http://www.calculix.de). Proof: CSI publishes verification manuals; pass every case, then pass the [NAFEMS benchmarks](https://www.nafems.org) and the [AISC design examples](https://www.aisc.org) for code checking, which is what practitioners actually pay for.

#### M7 River and flood hydraulics split, elaborate.

Incumbent: [HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/) (free but closed, Windows-only, the basis of US flood maps), [MIKE](https://www.mikepoweredbydhi.com), [TUFLOW](https://www.tuflow.com). Open: [SWMM](https://www.epa.gov/water-research/storm-water-management-model-swmm) for urban drainage; nothing for HEC-RAS. Proof: identical results on HEC's own example projects, then run on Linux and in the cloud, which HEC-RAS can't.

#### M8 Regulated statistics split, elaborate

Incumbents: [SAS](https://www.sas.com), [SPSS](https://www.ibm.com/spss), [Stata](https://www.stata.com), [Prism](https://www.graphpad.com). Open: [R](https://www.r-project.org), [jamovi](https://www.jamovi.org), [JASP](https://jasp-stats.org). SAS's grip on pharma is validation, not features. Proof: packages validated to [FDA](https://www.fda.gov)-submission standards via the [R Validation Hub](https://www.pharmar.org) and [pharmaverse](https://pharmaverse.org); reproduce a published FDA submission's tables.

#### M9 Legal e-discovery split, elaborate, explain

Incumbents: [Relativity](https://www.relativity.com), [Everlaw](https://www.everlaw.com). Open: OCCRP's [Aleph](https://aleph.occrp.org) (investigative, not litigation-grade). Proof: recall/precision on the public [EDRM Enron set](https://edrm.net) under [TREC Legal Track](https://trec-legal.umiacs.umd.edu/) protocols.

#### M10 Augmentative and alternative communication (AAC) split, elaborate, explain

Incumbents: [Tobii Dynavox](https://www.tobiidynavox.com), [Proloquo2Go](https://www.assistiveware.com/products/proloquo2go). Open: [Cboard](https://www.cboard.io), [OptiKey](https://www.optikey.org). Proof: words-per-minute and error rate with real users; budget the human time.

#### M11 Mechanical CAD elaborate, split, explain.

Incumbents: [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks), [Inventor](https://en.wikipedia.org/wiki/Autodesk_Inventor), [Fusion](https://en.wikipedia.org/wiki/Autodesk_Fusion_360). Open: [FreeCAD](https://www.freecad.org) (1.0 in 2024 fixed the worst), [OpenSCAD](https://openscad.org). Gaps: assemblies, drawings, fillet robustness. Proof: model a benchmark set of real parts and measure time-to-model and failure rate against the incumbent.

#### M12 Electronics and chip design elaborate, goal?

Incumbents: [Altium](https://www.altium.com), [Cadence](https://en.wikipedia.org/wiki/Cadence_Design_Systems). Open: [KiCad](https://www.kicad.org) (good), [OpenROAD](https://theopenroadproject.org) for chips, [openEMS](https://www.openems.de) for RF. Proof: tape-out-tested reference designs; measured vs simulated S-parameters on published RF test structures.

#### M13 Finite-element and CFD, elaborate the goal

Incumbents: [Ansys](https://www.ansys.com), [Abaqus](https://www.3ds.com/products/simulia/abaqus), [Fluent](https://www.ansys.com/products/fluids/ansys-fluent), [STAR-CCM](https://plm.sw.siemens.com/en-US/simcenter/fluids-thermal-simulation/star-ccm/). Open: [CalculiX](http://www.calculix.de), [Elmer](https://www.elmerfem.org), [OpenFOAM](https://www.openfoam.com) (capable, brutal to use). The gap is meshing and usability. Proof: [NAFEMS](https://www.nafems.org) and [NASA turbulence-modelling](https://turbmodels.larc.nasa.gov) validation cases, then a timed usability study.

#### M14 Chemical process simulation elaborate.

Incumbents: [Aspen Plus](https://www.aspentech.com/en/products/engineering/aspen-plus), [HYSYS](https://www.aspentech.com/en/products/engineering/aspen-hysys). Open: [DWSIM](https://dwsim.org). Proof: published flowsheet cases.

#### M15 Optical design, better title

Incumbents: [Zemax OpticStudio](https://www.ansys.com/products/optics/ansys-zemax-opticstudio), [Code V](https://en.wikipedia.org/wiki/Code_V). Open: [ray-optics](https://github.com/mjhoptics/ray-optics) and a few small projects; a real gap. Proof: reproduce merit functions on Zemax sample files and published patent lens prescriptions.

#### M16 Room acoustics, better title

Incumbents: Odeon, [EASE](https://ease.afmg.eu). Open: [I-Simpa](https://i-simpa.ifsttar.fr), [pyroomacoustics](https://github.com/LCAV/pyroomacoustics). Proof: round-robin datasets of measured reverberation times.

#### M17 Power-system analysis better title, elaboarte?

Incumbents: [PSS/E](https://www.siemens.com/global/en/products/energy/grid-software/planning/pss-software/pss-e.html), [PowerFactory](https://www.digsilent.de/en/powerfactory.html). Open: [pandapower](https://www.pandapower.org), [PyPSA](https://pypsa.org), [OpenDSS](https://sourceforge.net/projects/electricdss/). Already decent. Proof: [IEEE test feeders](https://cmte.ieee.org/pes-testfeeders/).

#### M18 Transport modelling better title, elaborate, datasets?.

Incumbents: [VISSIM](https://www.ptvgroup.com/en/products/ptv-vissim), [Cube](https://www.bentley.com/software/cube/), [EMME](https://www.bentley.com/software/emme/). Open: [SUMO](https://eclipse.dev/sumo/), [MATSim](https://www.matsim.org), [AequilibraE](https://www.aequilibrae.com). Proof: calibrate to real counts on a published city dataset.

#### M19 Civil road/rail alignment design datasets? elaborate?

Incumbent: [Civil 3D](https://en.wikipedia.org/wiki/AutoCAD_Civil_3D). Open: nothing usable. Proof: published alignment design examples to code.

#### M20 Photogrammetry

Incumbents: [Metashape](https://www.agisoft.com/), [RealityCapture](https://www.capturingreality.com). Open: [Meshroom](https://alicevision.org), [OpenDroneMap](https://www.opendronemap.org). Proof: [ISPRS benchmark](https://www.isprs.org) accuracy.

#### M21 NMR and mass-spec processing

Incumbents: [MestReNova](https://mestrelab.com), [TopSpin](https://www.bruker.com/en/products-and-solutions/mr/nmr-software/topspin.html), vendor software. Open: [NMRium](https://www.nmrium.org), [nmrglue](https://www.nmrglue.com), [OpenMS](https://openms.de), [MZmine](https://mzmine.github.io). Proof: identical peak lists on the same raw files.

#### M22 Music notation, elaborate

Incumbents: [Sibelius](<https://en.wikipedia.org/wiki/Sibelius_(scorewriter)>), Finale ([discontinued 2024](https://www.finalemusic.com)). Open: [MuseScore](https://musescore.org) is already close. Proof: engraving test suite against Gould's _[Behind Bars](<https://en.wikipedia.org/wiki/Behind_Bars_(book)>)\_ rules.

#### M23 Hearing-aid fitting, elaborate, goal?

Every manufacturer's fitting software is proprietary. Open: [openMHA](https://www.openmha.org). Proof: standard audiological test batteries.

#### M24 Small-business accounting and payroll, goal?

Incumbents: [QuickBooks](https://en.wikipedia.org/wiki/QuickBooks), [Xero](https://www.xero.com), [Sage](https://en.wikipedia.org/wiki/Sage_Group). Open: [GnuCash](https://www.gnucash.org), [ERPNext](https://erpnext.com). Proof: pass the tax authority's test filings and bank reconciliation on real data.

#### M25 Seismic interpretation, goal?

Incumbent: [Petrel](https://www.software.slb.com/products/petrel). Open: [OpendTect](https://www.dgbes.com/software/opendtect). Needed for G1.

#### M26 Hygrothermal (heat and moisture) simulation of building walls, goal?

Incumbents: [WUFI](https://wufi.de), Delphin. Open: nothing usable. Proof: reproduce the [56 instrumented timber-frame wall experiments on Zenodo](https://doi.org/10.5281/zenodo.17778562), which ship boundary conditions and material properties, with mass and energy conservation checks, then predict held-out walls.

### Legacy and orphaned software

#### M27 Critical software stuck on Windows XP, split

Lab-instrument control (mass specs, chromatographs on XP boxes kept in a corner), older CNC controllers, radio programming, hospital and library admin systems, engineering codes from the 1990s. Approach: port or reimplement, verified by identical outputs on archived input/output pairs; [Wine](https://www.winehq.org) and [ReactOS](https://reactos.org) as compatibility fallbacks. [HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/) (M7) is the flagship example. [CHIRP](https://chirpmyradio.com) shows the model for radio programming.

#### M28 Matching decompilation split

Recover source for abandoned software and firmware; [decomp.me](https://decomp.me) is the community tool. Verifier: recompiles to the identical binary.

#### M29 Dead and badly-read file formats, split

The [PRONOM registry](https://www.nationalarchives.gov.uk/PRONOM/) lists formats with no living reader; the [Document Liberation Project](https://www.documentliberation.org/projects/) keeps a want-list. The working model is fixture by fixture through an open reader's issue tracker: [Bio-Formats](https://www.openmicroscopy.org/bio-formats/) for microscopy, [liborigin](https://github.com/gerlachs/liborigin) for [OriginLab](https://www.originlab.com), [lasio](https://lasio.readthedocs.io) for borehole logs, [ReadStat](https://github.com/WizardMac/ReadStat) for [SPSS](https://www.ibm.com/spss)/[SAS](https://www.sas.com)/[Stata](https://www.stata.com), [MDB Tools](https://mdbtools.github.io) for [Access](https://www.microsoft.com/en-us/microsoft-365/access), [SLYR](https://github.com/north-road/slyr) for [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview) styling. Verifier: round-trip against the original application's export, metadata included, then a real user finishes their real task.

#### M30 Write Linux drivers for hardware whose vendor walked away, split

Working microscopes, spectrometers, scanners and industrial controllers get scrapped because the vendor stopped shipping drivers, not because anything broke. The protocol is usually plain USB or PCI traffic you can capture and replay, which is slow, unglamorous work nobody is paid for. Pick devices whose owners are still asking on forums, reverse-engineer the protocol, and upstream the driver.

#### M31 Emulate the platforms nobody has got running yet, split

Software outlives the hardware it was written for only if someone emulates the machine; scientific tools, interactive media and government systems all become unreadable otherwise. The [Internet Archive](https://archive.org/details/software) runs thousands of titles in the browser and keeps want-lists of the platforms it still cannot. Take one, get real software running on it, and contribute the emulator back.

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
