---
unlisted: true
title: Verifiable Problems to Point an Agent At
tags: []
---

# Fable's Version

_Working title_
_Highest expected value per unit of compute, in Claude Fable's judgement: B1 (reproducibility), M1 → sections C and D (read the archives), E5/G (the offshore survey archives), H1–H8 (hazards from records), and J8/N4/N5 (backtestable early warnings)._

## A. Machine-checked

### A1 OEIS conjectures.

The [On-Line Encyclopedia of Integer Sequences](https://oeis.org) contains thousands of entries with unproved "Conjecture: a(n) = …" comments. Prove each in Lean, or refute with a computable counterexample. Nobody has attacked this systematically.

### A2 Erdős problems.

[erdosproblems.com](https://www.erdosproblems.com) lists ~1,000 problems; Terence Tao has been running AI on them since 2025, so this is not new, but hundreds remain and Lean is the verifier.

### A3 Formalise the unformalised.

DeepMind's [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) repo and [Freek Wiedijk's 100 theorems list](https://www.cs.ru.nl/~freek/100/) name what isn't yet in [Mathlib](https://leanprover-community.github.io). Deliverable is a standalone Lean project, not a Mathlib pull request (review is the bottleneck).

### A4 Formally verify existing zero-knowledge circuits.

The [0xPARC ZK bug tracker](https://github.com/0xPARC/zk-bug-tracker) shows under-constrained Circom/Halo2 circuits securing real money. Proof checks or it doesn't. No dual use.

### A5 Machine-checked correctness for the crypto everyone runs.

[HACL\*](https://hacl-star.github.io) covers a subset; BoringSSL, libsodium, RustCrypto and the Linux kernel crypto subsystem have large unverified surfaces. Tools: [Verus](https://github.com/verus-lang/verus), F\*, Lean. Deliverable is a proof.

### A6 Re-derive computer-assisted proofs with verified interval arithmetic.

Many published results rest on numerical code nobody re-ran. Discrepancies are findings. See [Flyspeck](https://github.com/flyspeck/flyspeck) for the model.

### A7 Verified parsers and interpreters for load-bearing formats.

PDF, JSON, ASN.1, eBPF, WebAssembly. Parsers are where exploits live. [CompCert](https://compcert.org) shows the approach scales.

### A8 Verified re-implementations of small C libraries with differential fuzzing.

zlib, libpng, libjpeg-turbo, expat; SQLite's [public test suite](https://www.sqlite.org/testing.html) is the gold standard. Verifier: byte-identical output across millions of fuzzed inputs plus upstream tests. [DARPA TRACTOR](https://www.darpa.mil/program/translating-all-c-to-rust) is adjacent.

### A9 Post-quantum migration with interop test vectors.

For libraries and protocols not yet moved. Verifier: [NIST PQC](https://csrc.nist.gov/projects/post-quantum-cryptography) known-answer tests and cross-implementation interop.

### A10 Executable law with official worked examples as tests.

[Catala](https://catala-lang.org) already encodes chunks of French benefits law. Targets: UK Universal Credit, US SNAP per state, EITC, student-loan repayment, pension rules. Verifier: government-published worked examples and [PolicyEngine](https://policyengine.org) cross-checks.

### A11 Open tax computation engine.

Start from the [open-sourced IRS Direct File code](https://github.com/IRS-Public/direct-file). Verifier: IRS e-file [Assurance Testing System scenarios](https://www.irs.gov/e-file-providers) and published worked examples. Scope honestly: the barrier to a "TurboTax killer" is e-file authorisation, liability and 50 state codes, not code.

## B. Re-run to verify

### B1 Computational reproducibility of every paper with a replication package.

[AEA journals](https://aeadataeditor.github.io) mandate packages since 2019; NeurIPS/ICML have code links; PLOS has data policies. Rerun, diff against the paper's tables, publish a scoreboard. The [Institute for Replication](https://i4replication.org) does dozens a year by hand. Probably the highest-value entry in the whole list: scalable, cheap verifier, no maintainer burden. Models too: [BioModels](https://www.ebi.ac.uk/about/news/announcements/biomodels-reproducibility-scorecard/) publishes a reproducibility scorecard, and running [memote](https://memote.readthedocs.io/en/latest/) over every published genome-scale metabolic model finds the ones that make energy from nothing, which is machine-checkable.

### B2 Resurrect dead scientific software.

[Software Heritage](https://www.softwareheritage.org) has the source; the paper names the figure. Verifier: the figure regenerates.

### B3 Port legacy Fortran/MATLAB/IDL models to open languages with numerical-equivalence tests.

Hydrology, ecology, epidemiology, climate. Verifier: outputs match to tolerance on reference inputs.

### B4 Statistical-error sweeps of the literature.

[statcheck](https://michelenuijten.shinyapps.io/statcheck-web/), [GRIM](https://en.wikipedia.org/wiki/GRIM_test), SPRITE, image-duplication detection across all of PubMed Central and arXiv. The Black Spatula Project started this in 2025; scale is what's missing. Two more with ground truth: gene symbols that Excel turned into dates ([still in a third of supplements](https://doi.org/10.1371/journal.pcbi.1008984)), and Cochrane reviews recomputed from their own [data packages](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html) for double-counted trials and arithmetic slips. Report to authors and journals, not Twitter.

### B5 Outcome switching in clinical trials.

Compare pre-registered primary outcomes on [ClinicalTrials.gov](https://clinicaltrials.gov) with the published paper. [COMPare](https://compare-trials.org) did ~60 trials by hand; [TrialsTracker](https://trialstracker.net) covers results reporting but not switching.

### B6 Does the cited source actually say that?

For Wikipedia and for review articles. Meta [prototyped this in 2022](https://ai.meta.com/research/publications/improving-wikipedia-verifiability-with-ai/) and dropped it. Verifier: crowd spot-check.

### B7 Errata hunting in open textbooks.

Recompute every worked example in [OpenStax](https://openstax.org), [LibreTexts](https://libretexts.org), MIT OCW problem sets. Verifier: the arithmetic.

### B8 Fuzz, fix and regression-test open-source software that has opted in.

[OSS-Fuzz](https://google.github.io/oss-fuzz/) and [AIxCC](https://aicyberchallenge.com) cover discovery. Include only with an opt-in registry.

### B9 Accessibility remediation of civic websites.

Measured by [axe-core](https://github.com/dequelabs/axe-core) and Lighthouse plus screen-reader scripts. Do it on forks and hand over.

### B10 Conformance test suites for standards that ship without them.

Many ISO/IETF specs have no reference tests. Deliverable is the suite; everyone's implementation then gets checked for free.

### B11 Cross-implementation differential testing.

TLS stacks, JSON parsers, date/time libraries, Unicode handling, payroll engines. Disagreements are bugs by construction.

## C. Text archives: digitised but unread

### C1 Oxyrhynchus papyri.

~500,000 fragments, under 10% published after a century ([Oxford POxy](https://www.papyrology.ox.ac.uk/POxy/); crowd project [Ancient Lives](https://www.ancientlives.org)). Transcribe; match against known texts in the TLG; find physical joins; flag what matches nothing (candidate lost works). Verifier: known texts, physical joins.

### C2 Cairo Genizah.

~400,000 fragments imaged by the [Friedberg project](https://fjms.genizah.org). Content-level indexing into a medieval Mediterranean social and economic database.

### C3 Cuneiform backlog.

~500,000 tablets excavated, most unpublished ([CDLI](https://cdli.mpiwg-berlin.mpg.de)); LMU's [Fragmentarium](https://www.ebl.lmu.de) does AI joins for literature. The 90% that is administrative text holds Bronze Age price series, harvests, disease.

### C4 Sinai palimpsests.

Multispectral images of ~70 overwritten manuscripts are online at the [Sinai Palimpsests Project](https://sinai.library.ucla.edu). Recovering undertext (lost Christian Palestinian Aramaic, Caucasian Albanian, Greek) from the image stacks.

### C5 Dunhuang, Timbuktu, Ethiopian and Armenian manuscripts.

[International Dunhuang Project](https://idp.bl.uk), [HMML](https://hmml.org) (which imaged Timbuktu and Ethiopian collections). Catalogue-level description first.

### C6 Undeciphered scripts with corpora.

Proto-Elamite (~1,600 tablets on CDLI), [Linear A](https://en.wikipedia.org/wiki/Linear_A), Cypro-Minoan, Indus. Verifier is Ventris's: consistent readings across the corpus that predict new tablets.

### C7 Vatican Archive, Pius XII pontificate.

Opened 2020, ~16 million pages ([Archivio Apostolico](https://www.archivioapostolicovaticano.va)). Wartime persecution questions plus 1939–58 diplomatic cables.

### C8 Arolsen Archives.

30 million Holocaust-era documents ([arolsen-archives.org](https://arolsen-archives.org)). Link the same person across camp registers, transport lists and tracing requests. Every resolved fate matters to a family.

### C9 Stasi shredded files.

~15,500 sacks of hand-torn documents at the [Stasi Records Archive](https://www.stasi-unterlagen-archiv.de); the Fraunhofer e-Puzzler stalled after a few hundred. Scanned-but-unreconstructed sacks are a jigsaw-vision problem. Caveat: no downloadable fragment corpus exists; this starts with a [Bundesarchiv](https://www.bundesarchiv.de/stasi-unterlagen-archiv/rekonstruktion/) partnership, not a download.

### C10 Declassified intelligence corpora.

[CIA CREST](https://www.cia.gov/readingroom/), [FBI Vault](https://vault.fbi.gov), the [2025 JFK release](https://www.archives.gov/research/jfk), MKUltra, Venona, UK releases. Build a who-met-whom-when graph; surface documents contradicting official histories. Every finding cites a page image.

### C11 UK "migrated archives".

Colonial-office files on Kenya, Malaya, Cyprus released 2011–13 ([FCO 141 at TNA](https://discovery.nationalarchives.gov.uk)). Barely read.

### C12 Trial and party archives.

[Nuremberg exhibits](https://nuremberg.law.harvard.edu), Comintern microfilm ([Hoover](https://www.hoover.org/library-archives)), Cultural Revolution local gazetteers.

### C13 Nazi-looted art.

[ERR card files](https://www.errproject.org), the [Lost Art register](https://www.lostart.de), the [Getty Provenance Index](https://www.getty.edu/databases-tools-and-technologies/provenance/) (dealer stock books and auction records), the [German Historical Museum databases](https://www.dhm.de/en/collection/research/provenance-research/databases/), post-1945 auction catalogues, museum provenance pages. Match objects across them. Two joins that a human can't do at scale and a machine can: inventory-number chains (the same object stamped, renumbered and crossed out across wartime repositories) and the same photograph reappearing under a different artist or title. Checkable object by object.

### C14 Historic newspapers.

[Chronicling America](https://chroniclingamerica.loc.gov) (20M+ pages), [Trove](https://trove.nla.gov.au), [Delpher](https://www.delpher.nl), [Gallica](https://gallica.bnf.fr), [Impresso](https://impresso-project.ch). Concrete wins already achieved by hand: 1918 flu spread by city ([Influenza Archive](https://www.influenzaarchive.org)), geomagnetic storms from aurora reports, earthquake intensity maps from damage columns, sea-ice dates from shipping news, text-reuse networks ([Viral Texts](https://viraltexts.org)). The archive is ~100× what has been read. Also the corpus for historical corruption: cross-reference politicians' names with land transfers, company formations and contract awards.

### C15 Industry document archives.

UCSF's [Industry Documents Library](https://www.industrydocuments.ucsf.edu) (14M+ tobacco documents), the [Opioid Industry Documents Archive](https://www.industrydocuments.ucsf.edu/opioids/), chemical and fossil-fuel collections ([Climate Files](https://www.climatefiles.com)). Primary documents from litigation, public, mostly unread.

### C16 Translate untranslated public-domain science.

Soviet-era mathematics and physics, German chemistry, Japanese engineering. Verifier is weaker (bilingual spot-check), but the downside is nil.

### C17 Transcribe and index public-domain audio/video.

[Internet Archive](https://archive.org), congressional hearings, oral histories. Verifier: word-error rate on a human-transcribed sample.

### C18 Un-redact by diffing releases.

The same page is often released more than once with different black boxes: the 2017 and 2025 JFK tranches, a CIA CREST copy versus the FBI Vault copy of the same memo, a cable held at both TNA and NARA. Align page images across releases and surface every word visible in one copy and redacted in another. Researchers do this by hand on famous documents; nobody has run it across the corpora in C10. Verifier: the recovered text must be visible in a public page image. Guessed redactions count for nothing.

## D. Scientific data rescue

### D1 Ship logbooks and weather sheets.

NOAA scanned tens of millions of pages; volunteers hand-type them at [Old Weather](https://www.oldweather.org) and [Rainfall Rescue](https://www.zooniverse.org/projects/edh/rainfall-rescue); [Copernicus](https://climate.copernicus.eu/data-rescue-service) coordinates. Handwriting → observations extends the instrumental record to the 1700s. Verifier: existing transcriptions; overlapping ships.

### D2 Analog seismograms.

Millions of paper records pre-1980 ([SeismoArchives](https://ds.iris.edu/seismo-archives/)). Digitising traces lets modern methods study 1906, 1923, 1960.

### D3 Harvard DASCH plates.

~450,000 photographic plates 1885–1992, fully scanned ([DASCH](https://dasch.cfa.harvard.edu)). Century-long light curves: historical supernovae, [vanishing stars](https://vasconsite.wordpress.com), pre-discovery asteroid images ([SSOIS](https://www3.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois/documentation.html) tells you which archived exposures a known object's orbit passes through).

### D4 Tree-ring backlog.

[ITRDB](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring) has ~5,000 chronologies; labs hold far more cores measured but never crossdated. Also dendroprovenance of historic timber.

### D5 Cross-proxy reconciliation.

[Neotoma](https://www.neotomadb.org) (pollen), SISAL (cave deposits), corals, ice cores all measure past climate through different lenses; [PAGES 2k](https://pastglobalchanges.org) reconciles with a few dozen people.

### D6 Glacier repeat photography.

[NSIDC Glacier Photograph Collection](https://nsidc.org/data/glacier_photo), Swiss and Norwegian archives. Match viewpoints to modern images for ice-loss measurements; targets in [GLIMS](https://www.glims.org) and [WGMS](https://wgms.ch).

### D7 Continuous Plankton Recorder.

90 years of silk samples ([CPR Survey](https://www.cprsurvey.org)) counted by human microscopists at a fixed rate. Image the archive and re-count at species resolution.

### D8 Pre-1950 tide-gauge charts.

[PSMSL](https://psmsl.org) has gaps that exist as paper marigrams in harbour archives.

### D9 Legacy soil surveys.

A century of national surveys are scanned PDFs with profile data never entered into [WoSIS](https://www.isric.org/explore/wosis). Feeds every soil-carbon estimate.

### D10 Agricultural experiment station bulletins.

Century-old variety-trial yield data, scanned, never aggregated. Seed data via [Genesys](https://www.genesys-pgr.org) and [GRIN](https://npgsweb.ars-grin.gov).

### D11 Amateur radio logs.

Decades of contest and contact logs are an ionosphere record; [HamSCI](https://hamsci.org) uses some. See also [WSPRnet](https://wsprnet.org).

## E. Earth imagery archives

### E1 Historical aerial photography.

[NCAP](https://ncap.org.uk) (tens of millions of RAF/Luftwaffe frames), USGS via [EarthExplorer](https://earthexplorer.usgs.gov) back to the 1930s, [IWM](https://www.iwm.org.uk). Products: WWII bomb-crater → UXO (Unexplained Ordinance) risk maps (see H1); 1940s landscape baseline before ploughing and development.

### E2 Declassified spy-satellite imagery.

CORONA (~860k frames 1960–72; [CORONA Atlas](https://corona.cast.uark.edu) covers the Middle East), KH-7 GAMBIT and KH-9 HEXAGON (declassified 2011, higher resolution, barely used), all on [EarthExplorer](https://earthexplorer.usgs.gov). Systematic survey of Central Asia, Iran, Iraq, Syria for sites since destroyed or built over. See Q for the full list of declassified sources.

### E3 Historical maps.

[David Rumsey](https://www.davidrumsey.com) (100k+), Ordnance Survey historic sheets, [Sanborn fire-insurance maps](https://www.loc.gov/collections/sanborn-maps/). Georeference with [MapReader](https://github.com/maps-as-data/MapReader), extract every named feature → gazetteer of vanished villages, old coastlines, forgotten mine shafts.

### E4 National LiDAR sweeps.

[England](https://environment.data.gov.uk/survey) (1 m, full coverage), [Netherlands AHN](https://www.ahn.nl), Denmark, Slovenia, [Poland](https://www.geoportal.gov.pl). Run a detector for barrows, enclosures, roads, field systems; reconcile with [Historic Environment Records](https://www.heritagegateway.org.uk). Held-out known sites give precision/recall.

### E5 High-resolution bathymetry and sonar.

Public [GEBCO](https://www.gebco.net) is ~400 m grid and useless for wrecks; the value is in engineering-grade multibeam that oil, gas and offshore-wind surveys must release: [UK Marine Data Exchange](https://www.marinedataexchange.co.uk), [US BOEM](https://www.boem.gov), [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry), [AusSeabed](https://www.ausseabed.gov.au), [NOAA multibeam archive](https://www.ncei.noaa.gov/maps/bathymetry/). Nobody looked at these for anything but engineering. See G for what to look for.

### E6 Every tailings dam, monitored.

Sentinel-1 InSAR (Interferometric Synthetic Aperture Radar) is free; the [Global Tailings Portal](https://tailing.grida.no) lists ~1,900 facilities. Deliverable: public per-dam deformation time series with a documented noise floor, not "alerts" (false positives from vegetation, thermal cycles, atmosphere are the real problem). Brumadinho killed 270.

### E7 Every bridge, same method.

[Morandi bridge InSAR (Interferometric Synthetic Aperture Radar) post-mortem](https://doi.org/10.3390/rs11121403) showed pre-collapse movement. Nobody runs it prospectively. In Europe the processing is already done: the [European Ground Motion Service](https://land.copernicus.eu/en/products/european-ground-motion-service) publishes millimetre-scale motion for every coherent point on the continent, updated yearly, and nobody has joined it to the dam, bridge and embankment inventories.

### E8 Museum specimen images.

~400 million specimens; growing fraction imaged via [GBIF](https://www.gbif.org) and [iDigBio](https://www.idigbio.org). Label transcription and georeferencing; phenology-vs-year shifts; morphological-outlier screening for undescribed species (most "new" species sat in drawers for decades). Taxonomists verify the shortlist.

### E9 Coral, mangrove, peatland and seagrass baselines.

In the style of the [Allen Coral Atlas](https://allencoralatlas.org) for the ecosystems it doesn't cover.

### E10 Brick kilns and forced-labour sites from satellite.

[Nottingham Rights Lab](https://www.nottingham.ac.uk/research/beacons-of-excellence/rights-lab/) did South Asian kilns; extend to other bonded-labour industries, illegal mining, informal landfills.

### E11 Unidentified photographs in library commons.

[Flickr Commons](https://www.flickr.com/commons), Library of Congress. Date and geolocate from signage, shadows, vehicles.

### E12 Landslide catalogue completion.

[NASA's catalogue](https://gpm.nasa.gov/landslides) is built from news reports; Sentinel-2 change detection fills it, verified against reported events.

### E13 Global coastline change.

[CoastSat](https://github.com/kvos/CoastSat) extracts shorelines from Landsat; nobody has run it globally with per-settlement erosion rates.

### E14 Heritage looting from satellite.

[EAMENA](https://eamena.org) documents endangered MENA sites; looting-pit detection was done by hand for Syria. Cross-reference auction catalogues with the [Interpol stolen works database](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/Stolen-Works-of-Art-Database).

### E15 iNaturalist backlog.

Hundreds of millions of observations on [iNaturalist](https://www.inaturalist.org), many stuck at "Unknown." Push to research grade; flag first records of invasives by region.

### E16 Insect biomass from weather radar.

The [NEXRAD archive](https://registry.opendata.aws/noaa-nexrad/) back to 1991 sees insects; BirdCast does birds. Cross-check against the 60-year [Rothamsted Insect Survey](https://insectsurvey.com).

### E17 Dark taxa.

[Global Malaise Program](https://biodiversitygenomics.net/projects/gmp/) and [BOLD](https://boldsystems.org) have millions of barcoded specimens without names; [UNITE](https://unite.ut.ee) and [GlobalFungi](https://globalfungi.com) have sequence-only fungi. Prerequisite nobody has published: for each common barcode primer set and a frozen reference library, which species are actually distinguishable and which collapse into identical-barcode groups. Machine-checkable, and every environmental-DNA study downstream needs it.

### E18 Top-down vs self-reported methane.

TROPOMI and [MethaneSAT](https://www.methanesat.org) see plumes; EPA's [GHGRP](https://www.epa.gov/ghgreporting) has facility self-reports. Reconcile facility by facility.

### E19 Flaring and refinery attribution.

[VIIRS Nightfire](https://eogdata.mines.edu/products/vnf/) flaring detections plus fence-line monitors (Texas TCEQ posts them) plus [OpenAQ](https://openaq.org)/[PurpleAir](https://www.purpleair.com).

### E20 Timber and deforestation supply chains.

[Trase](https://www.trase.earth), [Global Forest Watch](https://www.globalforestwatch.org). Gap: concession maps and species ID of traded timber, checkable against customs seizures.

## F. Other worlds: more images than eyes

Everything below is public in NASA's [Planetary Data System](https://pds.nasa.gov) or ESA's [Planetary Science Archive](https://archives.esac.esa.int/psa). The rule: bodies with O(10) images are studied to death; bodies with O(10⁵–10⁶) images are not.

### F1 Mars orbital.

[HiRISE](https://www.uahirise.org) (~80k images at 25 cm), [CTX](https://murray-lab.caltech.edu/CTX/) (global 6 m mosaic, ~100k images), daily global MARCI weather. Targets: new impact craters from before/after pairs (partially done by ML), recurring slope lineae changes, gullies, dune migration, avalanches at the polar cap, dust-devil tracks ([Planet Four](https://www.zooniverse.org/projects/mschwamb/planet-four) is the citizen version). Verifier: re-imaging requests, which HiRISE honours.

### F2 Mars rover images.

Curiosity and Perseverance have returned over a million [raw images](https://mars.nasa.gov/msl/multimedia/raw-images/). Several [meteorites on Mars](https://en.wikipedia.org/wiki/List_of_meteorites_on_Mars) were found by chance; a systematic search for meteorites, unusual rocks and dust-devil captures is unfinished.

### F3 Moon.

[LROC](https://quickmap.lroc.asu.edu) has millions of frames at 0.5 m; Chandrayaan-2's OHRC reaches 25 cm ([ISRO](https://www.isro.gov.in)); Kaguya and Chang'e add more. Targets: new craters, lava-tube skylights beyond the existing pit catalogue, boulder tracks, lunar swirls, crash sites of early landers, artefact inventory of every Apollo and Luna site.

### F4 Venus radar.

Magellan (1990–94) mapped the whole planet; in 2023, [re-analysis of old Magellan data found active volcanism](https://doi.org/10.1126/science.abm7735). The archive was studied in parts, never systematically for change between orbits.

### F5 Mercury.

MESSENGER returned ~300k images (PDS (Planetary Data System)); BepiColombo arrives 2026. Hollows, volatiles, crater statistics. Few people work on Mercury.

### F6 Saturn system.

Cassini's 13 years, ~450k images, plus radar swaths of Titan and VIMS spectral cubes ([PDS (Planetary Data System) Ring-Moon Systems Node](https://pds-rings.seti.org)). Targets: ring propellers and moonlets, Enceladus plume variability, Titan lake-level change, small-moon rotation states.

### F7 Jupiter.

[JunoCam](https://www.missionjuno.swri.edu/junocam) raw images are processed mostly by amateurs; Galileo's archive is older. Cloud tracking, lightning, small-moon recoveries.

### F8 Comets and asteroids.

Rosetta's ~100k OSIRIS images of 67P (activity, cliff collapses, boulder movement), Dawn at Vesta and Ceres, OSIRIS-REx at Bennu, Hayabusa2 at Ryugu. Rosetta's archive is the most under-exploited.

### F9 The Sun.

[SDO](https://sdo.gsfc.nasa.gov) returns terabytes per day since 2010; SOHO comet-hunting by amateurs is the existing model.

### F10 Survey backlog.

[Euclid](https://www.esa.int/Science_Exploration/Space_Science/Euclid) will image 1.5 billion galaxies; JWST and Hubble archives at [MAST](https://archive.stsci.edu); Kepler/TESS light curves still hide planets ([Planet Hunters TESS](https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess)). Galaxy Zoo is the model.

## G. Oceans: lost lands, lost things, the deep

### G1 Doggerland's method, applied everywhere.

Gaffney mapped Doggerland's rivers from oil-company 3D seismic data. National repositories now release seismic: [UK NSTA National Data Repository](https://ndr.nstauthority.co.uk), [Dutch NLOG](https://www.nlog.nl), [Norway's Sodir](https://www.sodir.no), [US BOEM](https://www.boem.gov). Every continental shelf exposed at the last glacial maximum has buried river valleys, lakes and coastlines in that data: Sundaland (SE Asia), Sahul (Australia's shelf, where [submerged Aboriginal sites were found off the Pilbara in 2020](https://doi.org/10.1371/journal.pone.0233912)), Beringia, the Persian Gulf basin, Black Sea shelf, Adriatic, Yellow Sea, Gulf of Mexico.

### G2 Structures in routine multibeam data.

The [Blinkerwall](https://en.wikipedia.org/wiki/Blinkerwall), a 10,000-year-old kilometre-long stone wall, was found in 2024 in ordinary survey data from the Baltic. The offshore-wind survey archives in E5 are full of unexamined 1–5 m data.

### G3 Shipwrecks and lost aircraft, prioritised.

UNESCO estimates [3 million wrecks](https://www.unesco.org/en/underwater-heritage). Records: [Wrecksite](https://www.wrecksite.eu) (crowd), NOAA's wreck database, UKHO, the [Lloyd's Register Foundation heritage archive](https://hec.lrfoundation.org.uk) (casualty returns), Lloyd's List reports in historic newspapers. Combine last-known positions with drift models and the high-resolution bathymetry of E5 to rank targets. For aircraft: the digitised [Missing Air Crew Reports](https://www.archives.gov/research/military/ww2/missing-air-crew-reports) give date, type and last reported position for thousands of WWII losses; intersect each with the footprint of surveys already flown and you get search-ready packets. Slave-ship wrecks via the [Slave Wrecks Project](https://nmaahc.si.edu/explore/initiatives/slave-wrecks-project).

### G4 Fishermen's snag records as a wreck finder.

Trawlers log where nets catch on the seabed. The UK [Kingfisher bulletin](https://kingfisherbulletin.org) and [KIS-ORCA](https://kis-orca.org) publish obstruction positions. Snags with no charted wreck are candidates. This is a side-channel (see I).

### G5 Dumped munitions and waste.

Hundreds of thousands of tonnes of conventional and chemical munitions were dumped at sea after both world wars ([OSPAR munitions work](https://www.ospar.org/work-areas/eiha/munitions)); ~200,000 barrels of radioactive waste were dumped in the NE Atlantic 1946–93 ([overview](https://en.wikipedia.org/wiki/Ocean_disposal_of_radioactive_waste)). Mapping, not touching: offshore wind and cable routes need to know. Sonar archives plus historical dumping logs.

### G6 Ghost fishing gear.

~640,000 tonnes lost per year ([Global Ghost Gear Initiative](https://www.ghostgear.org)). Predict accumulation zones from drift models plus sonar detection; verify with cleanup dives.

### G7 Lost containers.

Thousands lost per year, some with hazardous cargo. Drift modelling from the incident position plus shoreline arrival reports.

### G8 Deep-sea nodule mining baseline.

The [ISA DeepData](https://data.isa.org.jm) database holds contractors' environmental baseline data for the Clarion-Clipperton Zone; a [2023 analysis](https://doi.org/10.1016/j.cub.2023.04.062) found 5,000+ undescribed species in it. Independent re-analysis of contractor data, nodule-abundance mapping from box cores and backscatter, plume-dispersal reconstruction from the 1989 [DISCOL](https://www.discol.de) disturbance experiment (still visible), seabed-image species counts. Data also on [PANGAEA](https://www.pangaea.de).

### G9 Deep-sea video archives.

[NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/data/) Okeanos ROV dives, [MBARI's VARS](https://www.mbari.org/technology/video-annotation-and-reference-system-vars/) (28,000+ hours, expert-annotated, with [FathomNet](https://fathomnet.org) as the training set), [ONC SeaTube](https://data.oceannetworks.ca/SeaTube), [Schmidt Ocean](https://www.youtube.com/@SchmidtOcean), [Nautilus Live](https://nautiluslive.org), JAMSTEC's [J-EDI](https://www.godac.jamstec.go.jp/jedi/e/) and [Deep-sea Debris Database](https://www.godac.jamstec.go.jp/dsdebris/e/index.html). Annotators tag the object of interest; the background is unexamined. Targets: unannotated organisms at the frame edge, "unidentified" tags, behaviour events, litter counts, bioluminescence, re-sightings of individuals across dives.

### G10 Deep-sea audio archives.

NOAA's [passive acoustic archive](https://www.ncei.noaa.gov/products/passive-acoustic-data), MBARI's continuous hydrophone on [AWS Open Data](https://registry.opendata.aws/pacific-sound/) since 2015, [ONC hydrophones](https://data.oceannetworks.ca). NOAA maintains a list of [unexplained sounds](https://oceanexplorer.noaa.gov/explorations/sound01/background/seasounds/seasounds.html). Targets: unidentified call types, whale population trends, ship-noise exposure, cross-referencing sightings in [OBIS](https://obis.org).

### G11 Dark fibre as a sensor.

[DAS (Distributed Acoustic Sensing)](https://en.wikipedia.org/wiki/Distributed_acoustic_sensing) turns unused telecom fibre into thousands of vibration sensors: whales, earthquakes, ship traffic, cable strikes. Existing seafloor cables plus an interrogator, no new hardware in the water.

## H. Present-day hazards from historical records (the bomb-crater genre)

### H1 WWII bomb craters → UXO (Unexplained Ordinance)risk.

Aerial photos (E1) plus [RAF Bomber Command raid records at TNA](https://discovery.nationalarchives.gov.uk) and USAAF mission reports. Germany still evacuates cities for bombs; contractors do this privately, never openly. LiDAR also shows craters under forest.

### H2 WWI battlefields.

The "iron harvest" recovers ~900 tonnes of shells a year in France and Belgium ([overview](https://en.wikipedia.org/wiki/Iron_harvest)). WWI aerial photos ([IWM](https://www.iwm.org.uk)), trench maps and LiDAR of the Zone Rouge give a contamination map.

### H3 Indochina bombing.

The Pentagon's [THOR database](https://data.world/datamil/vietnam-war-thor-data) records every US bombing mission over Laos, Cambodia and Vietnam. [MAG](https://www.maginternational.org) and [Legacies of War](https://www.legaciesofwar.org) clear by hand; combining THOR with satellite crater detection and clearance records prioritises villages.

### H4 Landmines.

[HALO Trust](https://www.halotrust.org) and national databases coordinated by [GICHD](https://www.gichd.org) hold cleared and suspected areas; conflict records, unit positions and terrain predict the rest. Verifier: clearance teams.

### H5 Historic industrial sites → contamination.

[Sanborn](https://www.loc.gov/collections/sanborn-maps/) and Goad fire-insurance maps name every gasworks, tannery and foundry a century ago. Predict brownfield contamination; verify with sampling.

### H6 Eroding coastal landfills.

The Environment Agency's [historic landfill data](https://environment.data.gov.uk) plus coastline change (E13) identifies dumps about to wash into the sea.

### H7 Old mine shafts and workings.

[Coal Authority](https://www.gov.uk/government/organisations/the-coal-authority) records plus old maps; subsidence and sinkholes.

### H8 Undocumented orphan wells.

Hundreds of thousands of unrecorded oil and gas wells leak methane; the [federal plugging programme](https://www.doi.gov/orphanedwells) can't plug what it can't find. 1900s lease records, old topo maps, aerial-photo scars; verify with magnetometer surveys. [USGS MRDATA](https://mrdata.usgs.gov) for mines.

### H9 Lost rights of way.

England's [Don't Lose Your Way](https://dontloseyourway.ramblers.org.uk) campaign needs historic paths mapped from old maps before a statutory cut-off. Pure archival cartography with a legal verifier.

### H10 Historical flood extents.

Old maps, photos and newspaper reports of past floods, georeferenced, as a check on modelled flood maps. Newspapers report heights against named landmarks ("two feet above the bridge step"); extract the number, the unit and the local datum, and never invent a datum. Insurers and planners would use it.

### H11 Lead service lines.

The [revised Lead and Copper Rule](https://www.epa.gov/ground-water-and-drinking-water/revised-lead-and-copper-rule) forced every US water system to publish an inventory; millions of lines are "unknown." [BlueConduit](https://blueconduit.com) showed prediction from house age, tax records and plumbing codes works. Verifier: excavation records.

### H12 Asbestos and lead paint by building age and type.

Same method as H11 for housing stock.

## I. Side-channels: inferring things from data collected for something else

The pattern: an instrument built for X incidentally records Y. Each of these has a worked example proving it; none has been run at scale.

### I1 Weather radar → meteorite falls.

Marc Fries showed falling meteorites appear in [NEXRAD](https://www.ncei.noaa.gov/products/radar/next-generation-weather-radar) data. Scan 30 years of archive; cross-reference [Global Fireball Observatory](https://gfo.rocks) and [AllSky7](https://allsky7.net) detections; produce strewn-field maps for falls nobody recovered. Verifier: someone walks the field.

### I2 Weather radar → bats, birds, insects, wildfire plumes, chaff.

Radar sees bat colonies emerging from caves, migration, and smoke. Same archive.

### I3 Mobile-phone tower links → rainfall.

Signal attenuation on commercial microwave links maps rain at high resolution ([Overeem et al. 2013](https://doi.org/10.1073/pnas.1217961110)); telecoms hold the data and rarely release it. A public-interest data-sharing template plus the processing pipeline.

### I4 Seismometers → everything else.

[Raspberry Shake](https://raspberryshake.org) networks detected lockdown quiet in 2020; seismometers also see ocean storms, iceberg calving, stadium goals, avalanches, traffic. Time series of urban activity from the seismic archive.

### I5 GNSS → water vapour, tsunamis, earthquakes.

Tropospheric delay gives precipitable water; ionospheric disturbances show tsunamis before they arrive. Dense hobby networks add coverage (see O17).

### I6 Mains-frequency hum → dating and authenticating recordings.

[Electrical network frequency analysis](https://en.wikipedia.org/wiki/Electrical_network_frequency_analysis) dates any audio recorded near mains power. Reference databases exist for few grids; build them for the rest.

### I7 Ice cores + tree rings + chronicles → unlocated volcanoes.

The [1808 mystery eruption](https://en.wikipedia.org/wiki/1808_mystery_eruption) cooled the planet and its source is still unknown; the 1831 eruption was attributed only in 2024. Sulphate isotopes, tephra chemistry, historical sky reports and satellite geomorphology of candidate calderas. The tephra side is record linkage: glass chemistry from thousands of cores sits in [EarthChem](https://portal.earthchem.org/) in incompatible units and conventions, and the same ash layer has never been matched across them systematically.

### I8 Tree rings → solar superstorms.

[Miyake events](https://en.wikipedia.org/wiki/Miyake_event) are radiocarbon spikes from extreme solar storms; only a handful are known because few high-resolution tree-ring series exist. Finding more sets the risk baseline for grid and satellite operators.

### I9 Paintings and photographs → past atmosphere and ecology.

Sunset colours in landscape paintings track volcanic aerosols ([Zerefos et al. 2007](https://doi.org/10.5194/acp-7-4027-2007)); haze in old photographs tracks pollution; birds and plants in art give historical ranges.

### I10 Ship logbooks → magnetic field and sea ice.

Navigators recorded compass declination for centuries; the [gufm1 model](https://doi.org/10.1098/rsta.2000.0569) reconstructs the geomagnetic field from them. Whaling catch positions reconstruct the historical sea-ice edge.

### I11 Gravestones → historical mortality.

[Find a Grave](https://www.findagrave.com) and BillionGraves hold hundreds of millions of dated stones: child-mortality curves and epidemic timing by parish, checkable against the few places with good registers.

### I12 Bomb-pulse radiocarbon → poached ivory.

Atmospheric nuclear tests left a carbon-14 spike that dates any tissue ([Uno et al. 2013](https://doi.org/10.1073/pnas.1302226110)); ivory dated after the 1989 ban is evidence. The technique exists; the systematic application to seizure records doesn't.

### I13 Night-lights → outages, conflict, informal economy.

VIIRS night-time imagery tracks power outages and economic activity where statistics are missing.

### I14 Aircraft transponders → winds and turbulence.

ADS-B/Mode-S data on [OpenSky](https://opensky-network.org) yields wind fields (KNMI does this) and turbulence maps; also GNSS jamming (see [GPSJam](https://gpsjam.org)).

### I15 Solar-inverter output → cloud and irradiance maps.

[PVOutput](https://pvoutput.org) and similar hold millions of rooftop-solar time series; they are a dense irradiance sensor network nobody treats as one.

### I16 Fitness-app traces → informal paths and park use.

Desire lines for planners, from Strava-style heatmaps. Aggregate only.

### I17 Muons → imaging.

Cosmic-ray muons imaged hidden chambers in the pyramids; the same detectors ([CosmicWatch](http://www.cosmicwatch.lns.mit.edu)) image volcano interiors and cargo containers.

### I18 Church, tax and tithe records → harvests and climate.

Wine-harvest dates in Burgundy reconstruct summer temperature since 1354; hearth-tax rolls give population. Most such series remain in archives.

## J. Sequencing and biomedical archives

### J1 SRA/ENA sweeps.

[Serratus](https://serratus.io) found 130k new RNA viruses; [Logan](https://github.com/IndexThePlanet/Logan) assembled all of the Sequence Read Archive. Remaining: novel CRISPR systems, antibiotic biosynthetic clusters, giant viruses, and contamination/mislabeling audits (wrong species, wrong sex, cell-line cross-contamination). Mislabeling is checkable from the reads.

### J2 Restoring invisible trials.

Half of trials never publish; results exist in FDA approval packages ([Drugs@FDA](https://www.accessdata.fda.gov/scripts/cder/daf/)), EMA clinical data, and data-sharing portals. [RIAT](https://restoringtrials.org) did a handful by hand.

### J3 Adverse-event backtesting.

[openFDA](https://open.fda.gov) exposes FAERS. Freeze a signal detector on data to year N, score it against label changes and withdrawals in N+1..N+5, then run forward.

### J4 Hospital price files.

Every US hospital must post machine-readable prices; the files are deliberately unusable. [Dolthub](https://www.dolthub.com/repositories/dolthub/hospital-price-transparency) and [Turquoise](https://turquoise.health) have partial parses. Deliverable: one national table with a verified sample (call the billing office).

### J5 Image-archive audits.

[EMPIAR](https://www.ebi.ac.uk/empiar/), [IDR](https://idr.openmicroscopy.org), Human Protein Atlas for mislabeled or duplicated images; [PDB-REDO](https://pdb-redo.eu) covers geometry, not misassigned ligands.

### J6 Antimicrobial resistance from public isolates.

[NCBI Pathogen Detection](https://www.ncbi.nlm.nih.gov/pathogens/) (over a million isolates with resistance genes, dates, locations); Pfizer's ATLAS via [Vivli](https://amr.vivli.org). Spread maps, cross-hospital outbreak detection, gaps versus WHO GLASS.

### J7 Wastewater epidemiology methods.

[WastewaterSCAN](https://data.wastewaterscan.org) and CDC NWSS; site normalisation and variant deconvolution are live methods problems, backtestable against case data.

### J8 Drug-shortage prediction.

[FDA shortage list](https://www.accessdata.fda.gov/scripts/drugshortages/) plus [warning letters](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters), inspection reports via FOIA, and the number of manufacturers per active ingredient. Predict which sterile injectable goes short next; hospitals would use it. Backtestable, but only against a dated timeline rebuilt from archived snapshots: the live shortage API rewrites history, so a naive backtest leaks the answer.

### J9 Inspection-report clustering.

FDA Form 483s and EU inspection reports describe recurring plant failures in free text; cluster by facility over time.

### J10 Food-safety alert prediction.

[RASFF](https://webgate.ec.europa.eu/rasff-window/screen/search) (EU), FDA recalls, USDA pesticide-residue data. Predict the next product/origin alert; backtest.

### J11 Animal-disease early signals.

[ProMED](https://promedmail.org) (30 years of curated outbreak reports) versus official [WAHIS](https://wahis.woah.org) reporting: what preceded major outbreaks, and what the official system missed.

## K. Records that could be linked but aren't (investigative layer)

### K1 Procurement anomaly detection.

[EU TED](https://ted.europa.eu), [USAspending](https://www.usaspending.gov), [UK Contracts Finder](https://www.contractsfinder.service.gov.uk), [ProZorro](https://prozorro.gov.ua). Bid-rigging fingerprints: single-bidder tenders, price rotation, identical typos across "competing" bids, winners incorporated the week before. Output goes to journalists with documents attached.

### K2 Company-registry networks.

[Companies House bulk data](https://download.companieshouse.gov.uk), [OpenCorporates](https://opencorporates.com), [ICIJ Offshore Leaks](https://offshoreleaks.icij.org). Disqualified directors still directing, shared addresses across thousands of shells, ownership loops.

### K3 Model-bill fingerprinting.

[Copy, Paste, Legislate](https://publicintegrity.org/topics/politics/copy-paste-legislate/) matched lobbyist model bills to state laws once in 2019. Run continuously across all states, the EU and Westminster, with lobbying-disclosure filings attached.

### K4 Judicial conflicts.

The [WSJ found 131 federal judges](https://www.wsj.com/articles/131-federal-judges-broke-the-law-by-hearing-cases-where-they-had-a-financial-interest-11632834421) ruling on cases involving their holdings; [CourtListener](https://www.courtlistener.com/financial-disclosures/) hosts disclosures. Extend to state courts and arbitrators.

### K5 Charity self-dealing.

Every Form 990 is on [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/): related-party transactions, pay outliers, grants to entities sharing a board. Checkable against later IRS revocations.

### K6 Unidentified remains vs missing persons.

[NamUs](https://www.namus.gov) lists ~14,000 unidentified bodies; matching has been DNA-driven, but text and metadata (tattoos, dental, clothing, timeline) were never cross-searched at scale.

### K7 Slave-trade record linkage.

[SlaveVoyages](https://www.slavevoyages.org), [Freedom on the Move](https://freedomonthemove.org), [Enslaved.org](https://enslaved.org), plantation ledgers. Reconstruct individual lives across sources.

### K8 Unenforced judgments and wage theft.

[DOL enforcement data](https://enforcedata.dol.gov), state labour boards: who never paid, who reincorporated to dodge it.

### K9 FOIA archaeology.

Agencies publish FOIA logs (what was requested) and reading rooms (what was posted). Mine logs for records released to one requester but never posted, then request them via [MuckRock](https://www.muckrock.com).

### K10 Wildlife-trade discrepancies.

The [CITES Trade Database](https://trade.cites.org) records both exporter- and importer-reported shipments; systematic mismatches (e.g., "captive-bred" exports from countries with no breeding facilities) indicate laundering. Applied by hand to single species, never across all 40k listed taxa.

### K11 Coded-language wildlife marketplaces.

Sellers use euphemisms ("ox bone" for ivory). The [Coalition to End Wildlife Trafficking Online](https://www.endwildlifetraffickingonline.org) relies on volunteer spotters. Scoreable by takedown rate.

### K12 Seizure-record networks.

[TRAFFIC's Wildlife Trade Portal](https://www.wildlifetradeportal.org) holds thousands of seizures from press reports; link into trafficker networks by courier, route, concealment method.

### K13 RFMO (Regional Fisheries Management Organisation) paperwork.

Tuna commissions publish compliance reports and vessel lists as PDFs; the [combined IUU vessel list](https://iuu-vessels.org) is the tip. Cross-reference flag, owner and name changes to find vessels laundering identity. [Global Fishing Watch](https://globalfishingwatch.org) covers the satellite side.

### K14 Catch reconstruction vs trade.

[Sea Around Us](https://www.seaaroundus.org) reconstructs true catch; UN Comtrade has trade. Exporting more of a species than plausibly caught is checkable.

### K15 Politician promise and position tracker.

Automated, cross-country, every claim hyperlinked to a primary source; [PolitiFact](https://www.politifact.com) and [Full Fact](https://fullfact.org) manual trackers are the backtest. Will be received as partisan by whoever scores worst; include with eyes open.

### K16 Aid-project failure prediction.

Every World Bank project has a completion report and an IEG rating ([documents.worldbank.org](https://documents.worldbank.org), [IEG](https://ieg.worldbankgroup.org)); [IATI](https://iatistandard.org) has donor transactions. What predicts failure has only been studied in samples.

### K17 Discredited forensics in standing convictions.

The [National Registry of Exonerations](https://www.law.umich.edu/special/exoneration) tags contributing factors; appellate opinions are text. Find convictions resting on bite marks, hair microscopy or discredited shaken-baby criteria, with a human review layer. [US Sentencing Commission](https://www.ussc.gov/research/datafiles/commission-datafiles) data for disparity work.

### K18 Expungement and eligibility engines.

Per-state expungement eligibility verified against statute; the [Collateral Consequences Resource Center](https://ccresourcecenter.org) maintains the legal map.

### K19 Which promised repairs vanished.

Every public audit ends with recommendations; almost nobody checks what happened next. The US [GAO](https://www.gao.gov/reports-testimonies/recommendations-database) keeps an open-recommendations database, the UK NAO, Brazil's TCU and India's CAG publish equivalents as PDFs. Trace each recommendation through later budgets, minutes and implementation reports to a completion record or an explicit statement of non-completion, and find the ones that were re-recommended three audits running. Verifier: the dated document that closes or reopens each item. Non-US coverage comes free.

## L. Improving documents, with adoption as the verifier

Most consultation documents got a week of a tired analyst's time. Some venues have a built-in scoreboard: the comment is adopted or it isn't.

### L1 Proposed federal rules.

[regulations.gov](https://www.regulations.gov). Final rules must respond to substantive comments, so adoption is measurable. Target: cost-benefit arithmetic that doesn't add up, definitions conflicting with the enabling statute, impossible compliance timelines, references to superseded sections, and smarter trade-offs the drafter missed.

### L2 Environmental impact statements.

[EPA's EIS database](https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search): model-input errors, inconsistent baselines, alternatives dismissed on wrong arithmetic.

### L3 Standards errata.

The [RFC Editor](https://www.rfc-editor.org/errata.php) formally accepts errata; [Ethereum EIPs](https://eips.ethereum.org), Bitcoin BIPs, W3C specs. Spec ambiguities that produce implementation divergence (B11) are the richest vein.

### L4 Local planning consultations.

UK planning portals, US municipal agendas: proposals conflicting with the authority's own adopted plan; missed Pareto improvements.

### L5 Dead and inconsistent statutory cross-references.

[US Code](https://uscode.house.gov), CFR, [legislation.gov.uk](https://www.legislation.gov.uk), EU regulations: references to repealed sections, circular definitions, the same term defined differently across a code. Mechanical verifier. The multilingual version: the 24 official-language texts of the same EU regulation are equally authoritative and sometimes disagree on a number, a date or a negation; aligned passages plus a bilingual spot-check.

### L6 Patent prior-art hunting.

[Unified Patents](https://www.unifiedpatents.com) runs cash bounties; PTAB outcomes are the verifier.

### L7 Improper Orange Book listings.

The [FTC challenged 100+ patent listings](https://www.ftc.gov/news-events/news/press-releases/2023/11/ftc-challenges-more-100-patents-improperly-listed-fdas-orange-book) that delay generics; the listing criteria are statutory and checkable.

## M. Software

### Tools that unlock the archives

#### M1 Open handwritten-text recognition for historical hands.

[Transkribus](https://www.transkribus.org) is closed, paid and mediocre on Kurrent, secretary hand, early Arabic, Ethiopic, Devanagari. This one tool unlocks sections C and D. Verifier: character error rate on published ground truth.

#### M2 Optical music recognition.

[IMSLP](https://imslp.org) has ~700k scores as images; [Audiveris](https://github.com/Audiveris/audiveris) is the open tool and nobody uses it. Verifier: alignment with recordings.

#### M3 Table extraction from statistical yearbooks and old census volumes.

Economic history is bottlenecked on this.

#### M4 Speech recognition for dysarthric and accented speech and unserved languages.

[Project Euphonia](https://sites.research.google/euphonia/about/) collected data; open models are far behind. Word-error rate is the verifier.

#### M5 Geo-referencing at scale.

[MapReader](https://github.com/maps-as-data/MapReader) for maps; photo-viewpoint matching for D6 and E11.

### Open replacements in professional niches (incumbent → open state → how a developer proves it's better)

_Guard against slop:_ every replacement ships with the incumbent's verification cases passing, a documented workflow a practitioner has actually used for a real job, and a maintainer who commits to a year.

#### M6 Structural analysis.

Incumbents: ETABS/SAP2000 ([CSI](https://www.csiamerica.com)), RISA, Tekla. Open: [OpenSees](https://opensees.berkeley.edu) (research, no GUI), [Code_Aster](https://code-aster.org), [CalculiX](http://www.calculix.de). Proof: CSI publishes verification manuals; pass every case, then pass the [NAFEMS benchmarks](https://www.nafems.org) and the [AISC design examples](https://www.aisc.org) for code checking, which is what practitioners actually pay for.

#### M7 River and flood hydraulics.

Incumbent: [HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/) (free but closed, Windows-only, the basis of US flood maps), [MIKE](https://www.mikepoweredbydhi.com), [TUFLOW](https://www.tuflow.com). Open: [SWMM](https://www.epa.gov/water-research/storm-water-management-model-swmm) for urban drainage; nothing for HEC-RAS. Proof: identical results on HEC's own example projects, then run on Linux and in the cloud, which HEC-RAS can't.

#### M8 Regulated statistics.

Incumbents: SAS, SPSS, Stata, Prism. Open: R, [jamovi](https://www.jamovi.org), [JASP](https://jasp-stats.org). SAS's grip on pharma is validation, not features. Proof: packages validated to FDA-submission standards via the [R Validation Hub](https://www.pharmar.org) and [pharmaverse](https://pharmaverse.org); reproduce a published FDA submission's tables.

#### M9 Legal e-discovery.

Incumbents: [Relativity](https://www.relativity.com), Everlaw. Open: OCCRP's [Aleph](https://aleph.occrp.org) (investigative, not litigation-grade). Proof: recall/precision on the public [EDRM Enron set](https://edrm.net) under TREC Legal Track protocols.

#### M10 Augmentative and alternative communication (AAC).

Incumbents: Tobii Dynavox, Proloquo2Go. Open: [Cboard](https://www.cboard.io), [OptiKey](https://www.optikey.org). Proof: words-per-minute and error rate with real users; budget the human time.

#### M11 Mechanical CAD.

Incumbents: SolidWorks, Inventor, Fusion. Open: [FreeCAD](https://www.freecad.org) (1.0 in 2024 fixed the worst), OpenSCAD. Gaps: assemblies, drawings, fillet robustness. Proof: model a benchmark set of real parts and measure time-to-model and failure rate against the incumbent.

#### M12 Electronics and chip design.

Incumbents: Altium, Cadence. Open: [KiCad](https://www.kicad.org) (good), [OpenROAD](https://theopenroadproject.org) for chips, [openEMS](https://www.openems.de) for RF. Proof: tape-out-tested reference designs; measured vs simulated S-parameters on published RF test structures.

#### M13 Finite-element and CFD.

Incumbents: Ansys, Abaqus, Fluent, STAR-CCM. Open: [CalculiX](http://www.calculix.de), [Elmer](https://www.elmerfem.org), [OpenFOAM](https://www.openfoam.com) (capable, brutal to use). The gap is meshing and usability. Proof: NAFEMS and [NASA turbulence-modelling](https://turbmodels.larc.nasa.gov) validation cases, then a timed usability study.

#### M14 Chemical process simulation.

Incumbents: Aspen Plus, HYSYS. Open: [DWSIM](https://dwsim.org). Proof: published flowsheet cases.

#### M15 Optical design.

Incumbents: [Zemax OpticStudio](https://www.ansys.com/products/optics/ansys-zemax-opticstudio), Code V. Open: [ray-optics](https://github.com/mjhoptics/ray-optics) and a few small projects; a real gap. Proof: reproduce merit functions on Zemax sample files and published patent lens prescriptions.

#### M16 Room acoustics.

Incumbents: Odeon, EASE. Open: [I-Simpa](https://i-simpa.ifsttar.fr), [pyroomacoustics](https://github.com/LCAV/pyroomacoustics). Proof: round-robin datasets of measured reverberation times.

#### M17 Power-system analysis.

Incumbents: PSS/E, PowerFactory. Open: [pandapower](https://www.pandapower.org), [PyPSA](https://pypsa.org), [OpenDSS](https://sourceforge.net/projects/electricdss/). Already decent. Proof: [IEEE test feeders](https://cmte.ieee.org/pes-testfeeders/).

#### M18 Transport modelling.

Incumbents: VISSIM, Cube, EMME. Open: [SUMO](https://eclipse.dev/sumo/), [MATSim](https://www.matsim.org), [AequilibraE](https://www.aequilibrae.com). Proof: calibrate to real counts on a published city dataset.

#### M19 Civil road/rail alignment design.

Incumbent: Civil 3D. Open: nothing usable. Proof: published alignment design examples to code.

#### M20 Photogrammetry.

Incumbents: Metashape, RealityCapture. Open: [Meshroom](https://alicevision.org), [OpenDroneMap](https://www.opendronemap.org). Proof: [ISPRS benchmark](https://www.isprs.org) accuracy.

#### M21 NMR and mass-spec processing.

Incumbents: [MestReNova](https://mestrelab.com), TopSpin, vendor software. Open: [NMRium](https://www.nmrium.org), [nmrglue](https://www.nmrglue.com), [OpenMS](https://openms.de), [MZmine](https://mzmine.github.io). Proof: identical peak lists on the same raw files.

#### M22 Music notation.

Incumbents: Sibelius, Finale ([discontinued 2024](https://www.finalemusic.com)). Open: [MuseScore](https://musescore.org) is already close. Proof: engraving test suite against Gould's _Behind Bars_ rules.

#### M23 Hearing-aid fitting.

Every manufacturer's fitting software is proprietary. Open: [openMHA](https://www.openmha.org). Proof: standard audiological test batteries.

#### M24 Small-business accounting and payroll.

Incumbents: QuickBooks, Xero, Sage. Open: [GnuCash](https://www.gnucash.org), [ERPNext](https://erpnext.com). Proof: pass the tax authority's test filings and bank reconciliation on real data.

#### M25 Seismic interpretation.

Incumbent: Petrel. Open: [OpendTect](https://www.dgbes.com/software/opendtect). Needed for G1.

#### M26 Hygrothermal (heat and moisture) simulation of building walls.

Incumbents: [WUFI](https://wufi.de), Delphin. Open: nothing usable. Proof: reproduce the [56 instrumented timber-frame wall experiments on Zenodo](https://doi.org/10.5281/zenodo.17778562), which ship boundary conditions and material properties, with mass and energy conservation checks, then predict held-out walls.

### Legacy and orphaned software

#### M27 Critical software stuck on Windows XP.

Lab-instrument control (mass specs, chromatographs on XP boxes kept in a corner), older CNC controllers, radio programming, hospital and library admin systems, engineering codes from the 1990s. Approach: port or reimplement, verified by identical outputs on archived input/output pairs; [Wine](https://www.winehq.org) and [ReactOS](https://reactos.org) as compatibility fallbacks. HEC-RAS (M7) is the flagship example. [CHIRP](https://chirpmyradio.com) shows the model for radio programming.

#### M28 Matching decompilation.

Recover source for abandoned software and firmware; [decomp.me](https://decomp.me) is the community tool. Verifier: recompiles to the identical binary.

#### M29 Dead and badly-read file formats.

The [PRONOM registry](https://www.nationalarchives.gov.uk/PRONOM/) lists formats with no living reader; the [Document Liberation Project](https://www.documentliberation.org/projects/) keeps a want-list. The working model is fixture by fixture through an open reader's issue tracker: [Bio-Formats](https://www.openmicroscopy.org/bio-formats/) for microscopy, [liborigin](https://github.com/gerlachs/liborigin) for OriginLab, [lasio](https://lasio.readthedocs.io) for borehole logs, [ReadStat](https://github.com/WizardMac/ReadStat) for SPSS/SAS/Stata, [MDB Tools](https://mdbtools.github.io) for Access, [SLYR](https://github.com/north-road/slyr) for ArcGIS styling. Verifier: round-trip against the original application's export, metadata included, then a real user finishes their real task.

#### M30 Linux drivers for orphaned hardware.

Verifier: it works.

#### M31 Emulation for preservation.

The [Internet Archive](https://archive.org/details/software) maintains want-lists.

## N. Niche fields with public data and few analysts

### N1 Microplastics harmonisation.

Thousands of papers in incompatible units and methods. Extend NOAA's [Marine Microplastics database](https://www.ncei.noaa.gov/products/microplastics) with method metadata; publish method-corrected trends. Improve polymer spectral matching in [Open Specy](https://www.openanalysis.org/openspecy/).

### N2 Soil spectroscopy.

[Open Soil Spectral Library](https://soilspectroscopy.org): model improvements scoreable against lab values.

### N3 Driller's logs → 3D aquifers.

California's ~1M [well completion reports](https://data.ca.gov/dataset/well-completion-reports), Australia's [Groundwater Explorer](http://www.bom.gov.au/water/groundwater/explorer/). Free-text lithology ("brn clay w/ gravel 40–65 ft") parsed into stratigraphy. Verifier: professionally logged wells.

### N4 Consumer-product injuries → recall prediction.

People report injuries and near-misses to [SaferProducts.gov](https://www.saferproducts.gov); ER visits are coded in [NEISS](https://www.cpsc.gov/Research--Statistics/NEISS-Injury-Data). Learn which report patterns preceded past recalls, apply to current reports, publish which products look due for recall. Recalled products resurface under other brand names; shared OEM part numbers and identical diagrams in the manuals link them.

### N5 Car complaints → recall prediction.

Same structure with [NHTSA complaints](https://www.nhtsa.gov/nhtsa-datasets-and-apis) as input and recalls as ground truth. In plain terms: people complain about brakes failing; months later the model is recalled; learn the pattern; flag the next one early.

### N6 Dangerous road design.

FARS fatality records plus OpenStreetMap geometry: which intersection and road designs kill, controlled for traffic volume. Output: a ranked list for engineers.

### N7 Aviation precursors.

[ASRS](https://asrs.arc.nasa.gov) (~2M anonymous pilot narratives), FAA [Service Difficulty Reports](https://sdrs.faa.gov) (part-level failures), NTSB's [CAROL](https://data.ntsb.gov/carol-main-public/basic-search). Predict which part numbers get an airworthiness directive.

### N8 Pipelines and dams.

[PHMSA incident narratives](https://www.phmsa.dot.gov/data-and-statistics/pipeline/pipeline-incident-20-year-trends); the [National Inventory of Dams](https://nid.sec.usace.army.mil) (~90k dams, patchy condition data). Combine with E6/E7 and downstream population to rank inspection priority.

### N9 Drinking water.

[SDWIS](https://www.epa.gov/ground-water-and-drinking-water/safe-drinking-water-information-system-sdwis-federal-reporting) violations, [ECHO](https://echo.epa.gov) enforcement, UCMR5 PFAS results, thousands of PDF consumer-confidence reports. Serial violators with no enforcement; reports contradicting the official record.

### N10 Chemical dossier audits.

[ECHA](https://echa.europa.eu/information-on-chemicals) holds dossiers for 20k+ substances; many toxicity claims rest on weak "read-across" from a different chemical. Audit against [CompTox](https://comptox.epa.gov/dashboard) data. This is what regulators lack staff for.

### N11 Nuclear plant precursors.

NRC's [ADAMS](https://adams.nrc.gov/wba/) (millions of public documents) and [Licensee Event Reports](https://lersearch.inl.gov). Precursor analysis at scale.

### N12 Particle-physics reanalysis.

[CERN Open Data](https://opendata.cern.ch) releases petabytes; reproduce published results first, then search where the collaborations didn't.

### N13 Occupational safety.

[OSHA accident narratives](https://www.osha.gov/ords/imis/accidentsearch.html), [MSHA data](https://www.msha.gov/data-and-reports). Predict fatal-accident risk by employer and site; output is an inspection list.

### N14 Grid interconnection queues.

[Berkeley Lab queue data](https://emp.lbl.gov/queues) (~2 TW waiting, most withdrawing), [ENTSO-E transparency](https://transparency.entsoe.eu). Predict withdrawals; build open power-flow models of real grids from OSM line data.

### N15 Elections infrastructure.

[OpenElections](https://openelections.net) still lacks precinct results for many states because they are PDFs or scans.

### N16 Bird strikes.

[FAA wildlife strike database](https://wildlife.faa.gov) plus airport land use plus eBird migration: strike risk by airport and week, which changes mowing schedules.

### N17 Endangered-language recordings.

[ELAR](https://www.elararchive.org), [PARADISEC](https://www.paradisec.org.au): thousands of hours never transcribed. Transcription plus speaker verification (budgeted).

### N18 Ethnomusicology archives.

[British Library Sounds](https://sounds.bl.uk), the [Lomax archive](https://research.culturalequity.org), Smithsonian Folkways: unidentified recordings, tune families across cultures.

### N19 Bioacoustics on land.

[xeno-canto](https://xeno-canto.org), Macaulay Library, [AudioMoth](https://www.openacousticdevices.info) recordings of bats with no processing network.

### N20 Accessibility at scale.

[Project Sidewalk](https://projectsidewalk.org) curb ramps from street imagery; ~100M Wikimedia Commons images without alt text; every scanned government PDF inaccessible until OCR'd and tagged.

### N21 Measurement reconciliation across fields.

Physics has CODATA and the Particle Data Group to reconcile discrepant measurements (neutron lifetime, Hubble constant). Nobody does it for global insect biomass, soil carbon stocks, ocean plastic mass, groundwater depletion, each measured by three or four fields with incompatible methods. Build the standing reconciliation, discrepancies published.

### N22 Lost media.

[Lost Media Wiki](https://lostmediawiki.com) want-lists against millions of hours of archived radio and TV at the Internet Archive; the "most mysterious song" was identified in 2024 after 17 years.

### N23 Cipher cold cases with verifiable plaintext.

Zodiac Z13/Z32 ([Z340 fell in 2020](https://en.wikipedia.org/wiki/Zodiac_Killer#Ciphers) to hobbyists), the McCormick notes, Dorabella, Beale. Plaintext is self-verifying.

### N24 Find the missing fish in the mussel's life cycle.

Freshwater mussels are the most endangered animal group in North America, and each species' larvae must attach to particular host fish to survive. The [Illinois Natural History Survey host database](https://mollusk.inhs.illinois.edu/resources/freshwater-mussel-host-database/) is the reference, says on its own page that it is incomplete and unstaffed, and publishes the exact submission fields it wants (evidence type, transformation success, juvenile counts, citation). Read a century of malacology papers and fill it, negative results included; then find the rivers with good water and habitat where the evidence says the host fish is the thing that's missing. Same shape for seed banks: germination pretreatments buried in old botany papers into [Genesys](https://ggce.genesys-pgr.org/docs/manual/seed/viability/), separating seeds that are dead from seeds nobody has persuaded to germinate.

## O. Hardware you already own, plus an agent

Control layers exist: [ASCOM](https://ascom-standards.org)/[INDI](https://indilib.org) and schedulers like [N.I.N.A.](https://nighttime-imaging.eu) for telescopes; smart scopes like the [Seestar](https://www.zwoastro.com/product/seestar-s50/); [RTL-SDR](https://www.rtl-sdr.com) dongles; Raspberry Pi. The missing software is a dispatcher (science request → observation plan), a reduction pipeline, and a submitter to the right archive.

### Telescopes

#### O1 NEO confirmation follow-up.

The [MPC NEO Confirmation Page](https://minorplanetcenter.net/iau/NEO/toconfirm_tabular.html) lists new asteroids that will be lost without re-observation within days. Agent reads it, picks reachable targets, images, submits astrometry; MPC residuals score you. [Unistellar](https://science.unistellar.com) runs a closed version.

#### O2 Exoplanet ephemerides.

[ExoClock](https://www.exoclock.space) keeps transit times current for ESA's Ariel mission using hobby scopes.

#### O3 Asteroid occultations.

[IOTA](https://occultations.org) and [OccultWatcher](https://www.occultwatcher.net) predict shadow tracks; timed light curves give shapes. The bottleneck is people awake at 3 a.m.

#### O4 Transient follow-up.

Subscribe to Rubin alert brokers ([ALeRCE](https://alerce.science), [Fink](https://fink-broker.org)); observe what your aperture can reach; submit to [AAVSO](https://www.aavso.org).

#### O5 Debris light curves and reentry tracking.

Optical observations in the last orbits sharpen predictions from [Space-Track](https://www.space-track.org)/[CelesTrak](https://celestrak.org); tumbling rates of dead satellites inform debris-removal planning; all-sky streak counts quantify constellation impact on astronomy.

#### O6 Lunar and Jupiter impact flashes.

[NELIOTA](https://neliota.astro.noa.gr) has one telescope in Greece; more longitudes multiply coverage.

#### O7 Rented time.

[iTelescope](https://www.itelescope.net), [Las Cumbres](https://lco.global), Telescope Live sell time by the minute; no hardware needed.

### Sky cameras

#### O8 Meteor network gaps.

[Global Meteor Network](https://globalmeteornetwork.org) has ~1,000 Pi cameras and none across much of Africa, Asia and South America.

#### O9 Sprites, noctilucent clouds, aurora.

No calibrated network; noctilucent cloud frequency is a mesospheric climate indicator.

#### O10 Sky brightness time series.

[Globe at Night](https://globeatnight.org) gives points; calibrated all-sky cameras give continuous light-pollution data for lighting ordinances.

### Software-defined radio

#### O11 Ionosphere and flares.

[HamSCI](https://hamsci.org) Grape stations and Stanford's [SID monitors](https://solar-center.stanford.edu/SID/).

#### O12 Solar and Jupiter radio.

[e-CALLISTO](https://www.e-callisto.org), [Radio JOVE](https://radiojove.gsfc.nasa.gov).

#### O13 Meteor scatter.

[BRAMS](https://brams.aeronomie.be), [RMOB](https://www.rmob.org): radio counts work in daylight and cloud; cross-reference with optical.

#### O14 Spectrum occupancy and interference.

Regulators have little ground truth; periodic scans plus [KrakenSDR](https://www.krakenrf.com) direction-finding of interference sources (receive only).

#### O15 Ground-truth GNSS jamming.

[GPSJam](https://gpsjam.org) infers from aircraft; ground receivers see it at ports and highways.

#### O16 Satellite ground stations.

[SatNOGS](https://satnogs.org) is the model for the whole genre; gaps are geographic and in decoders.

### GNSS receivers

#### O17 Water vapour for nowcasting.

Tropospheric delay → precipitable water; density limits usefulness for storms.

#### O18 Snow and soil moisture by reflectometry.

[GNSS-IR](https://gnss-reflections.org) turns any fixed antenna into a snow-depth sensor.

### Ground sensors

#### O19 Infrasound.

[Raspberry Boom](https://raspberryshake.org): bolides, eruptions, avalanches, explosions; the international monitoring data isn't public.

#### O20 Magnetometers.

Hobby fluxgates for geomagnetically induced currents; calibration is the hard part.

#### O21 Cosmic-ray flux.

[CosmicWatch](http://www.cosmicwatch.lns.mit.edu) network as a check on a shrinking neutron-monitor network.

#### O22 Radon map.

[Airthings](https://www.airthings.com)-class detectors are common; radon maps are coarse; opt-in map by geology and building type.

#### O23 Radiation.

[Safecast](https://safecast.org) is under-maintained.

#### O24 Power quality.

Household voltage quality is unmapped; a plug-in logger and an agent give a per-street record. (Rooftop-solar irradiance is I15.)

### Cameras on Earth

#### O25 Public webcams as instruments.

[Windy](https://www.windy.com/webcams), EarthCam, [explore.org](https://explore.org): glacier termini, volcanoes, harbours, snowlines, bird colonies. Extract a daily number; old frames verify. Nature and infrastructure only.

#### O26 Phenology.

[PhenoCam](https://phenocam.nau.edu) method on any garden webcam; global gaps are enormous.

#### O27 Rivers.

[CrowdWater](https://crowdwater.ch) plus a fixed camera gives a continuous gauge on ungauged streams.

#### O28 Coastlines.

[CoastSnap](https://www.coastsnap.com) with permanent cameras.

#### O29 Street counts.

[Telraam](https://telraam.net) outside Belgium and the Netherlands.

#### O30 Automated pollen station.

Sticky tape plus an [OpenFlexure](https://openflexure.org) microscope plus grain classification, for a few hundred dollars; verify against the official station.

#### O31 Plankton and diatoms.

Same microscope on water samples; diatom assemblages are a standard water-quality index.

#### O32 Insects and moths.

UKCEH's AMI light-trap camera and Dutch Diopsis are institutional; open versions with agent ID put insect monitoring in backyards.

#### O33 Birds and bats by sound.

[BirdWeather](https://www.birdweather.com) exists; bats via [AudioMoth](https://www.openacousticdevices.info) have no equivalent.

#### O34 Nest boxes and hives.

Clutch size, fledging success, colony health from cameras and scales; feed a scientific archive.

### Vehicles and phones

#### O35 Road condition.

Dashcams and accelerometers for potholes, signs, streetlights.

#### O36 Bridge modes from cars.

Crowdsourced accelerometer data recovers bridge natural frequencies; a real technique deployed almost nowhere.

#### O37 Mobile air quality.

Bike- and car-mounted sensors with agent-run calibration against reference monitors.

### Ocean, dock-mounted

#### O38 Hydrophones and wave sensors.

Dock hydrophones for ship noise and marine mammals; [Sofar Spotter](https://www.sofarocean.com) buoys for a club.

### Tying it together

#### O39 The dispatcher (meta-project).

A registry of instruments, a queue of science needs (NEOCP, occultations, broker alerts, reentry windows, webcam watches), and an agent per instrument that plans, executes, reduces, checks and submits. SatNOGS did it for one instrument type.

## P. Appendix: small open problems with checkable certificates (lower priority)

Kept for completeness; real-world impact is indirect. The [bbchallenge](https://bbchallenge.org) community (amateurs, Coq-verified, BB(5) settled 2024) is the organisational template.

### P1 Costas arrays of order 32 and 33.

Existence is unknown for both orders. Real use: radar and sonar waveforms. ([Costas arrays](https://en.wikipedia.org/wiki/Costas_array).)

### P2 Hadamard matrix of order 668.

The smallest order for which no [Hadamard matrix](https://en.wikipedia.org/wiki/Hadamard_matrix) is known. Real use: error-correcting codes.

### P3 Heesch numbers beyond 6.

No tile with a [Heesch number](https://en.wikipedia.org/wiki/Heesch%27s_problem) above 6 is known.

### P4 BB(6) and its cryptids.

Tracked on [bbchallenge](https://bbchallenge.org).

### P5 Graffiti's machine-generated conjectures.

[Graffiti](<https://en.wikipedia.org/wiki/Graffiti_(program)>) produced hundreds of graph-theory conjectures that remain unresolved.

### P6 Record tables.

[Friedman's Packing Center](https://erich-friedman.github.io/packing/), [La Jolla Covering Repository](https://ljcr.dmgordon.org), Golomb rulers, van der Waerden numbers, kissing numbers in dimensions 5–7, the Lebesgue universal covering, chromatic number of the plane. Every improvement is a construction anyone can check.

### P7 Combinatorial game positions.

Hex and Go variants, with proof-number search and Lean certificates.

## Q. Reference: declassified and historical imagery sources

### Q1 CORONA, KH-7 GAMBIT and KH-9 HEXAGON.

CORONA ran 1960–72 and left ~860k frames; all three are on [USGS EarthExplorer](https://earthexplorer.usgs.gov). The [CORONA Atlas](https://corona.cast.uark.edu) covers the Middle East.

### Q2 U-2 photography.

1950s–60s, used for archaeology by [Hammer & Ur 2019](https://doi.org/10.1017/aap.2018.38); mostly at NARA.

### Q3 Landsat.

[Landsat](https://www.usgs.gov/landsat-missions) goes back to 1972 and is free.

### Q4 SPOT.

1986–2015, released free under CNES's [SPOT World Heritage](https://www.theia-land.fr/en/product/spot-world-heritage/) programme.

### Q5 Nimbus.

1960s satellite imagery rescued at [NSIDC](https://nsidc.org/data/nimbus); sea ice 1964–72.

### Q6 Soviet military maps.

1:10,000 for cities worldwide, extraordinary detail, mostly undigitised.

### Q7 Historical aerial photography.

[NCAP](https://ncap.org.uk), USGS aerials via EarthExplorer, [IWM](https://www.iwm.org.uk).

## S. Women's health, hormones and wearables

The big consumer datasets (Clue, Natural Cycles, Oura, WHOOP, Apple's Women's Health Study) are private. Work with the public cohorts and the regulatory databases, and fix the measurement layer.

### Public data

[NHANES](https://www.cdc.gov/nchs/nhanes/) (accelerometry, ferritin, sex-hormone assays, reproductive questionnaires); [UK Biobank](https://www.ukbiobank.ac.uk) (100k with accelerometry and hormones; application); [All of Us](https://www.researchallofus.org) (Fitbit data linked to surveys; registered); [National Sleep Research Resource](https://sleepdata.org) (thousands of overnight sleep studies); [SWAN](https://www.icpsr.umich.edu/web/ICPSR/series/253) (3,000 women through menopause, 25 years of FSH/estradiol; public-use); [Capture-24](https://github.com/OxWearables/capture24) (camera-verified activity labels); [Awesome-CGM](https://github.com/IrinaStatsLab/Awesome-CGM); [FAERS](https://open.fda.gov); [MAUDE](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm); [Drug Trials Snapshots](https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshots).

### S1 Sex-stratified adverse-drug-event signals.

Women have ~1.5× the adverse-event rate of men; the FDA halved zolpidem doses for women only in [2013](https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-risk-next-morning-impairment-after-use-insomnia-drugs-fda-requires-lower-recommended-doses-certain-drugs). Run FAERS signal detection by sex, backtest against label changes, publish the unlabelled female signals.

### S2 Device adverse-event early warning.

MAUDE holds the mesh, Essure and breast-implant histories in free text years before regulatory action. Backtest against later recalls.

### S3 Trial representation tracker.

Female, pregnant and over-65 enrolment per condition versus prevalence, continuously from ClinicalTrials.gov results.

### S4 Sex-specific normative ranges for wearable metrics.

Resting heart rate, HRV, sleep architecture, step counts by sex, age, cycle phase and menopausal status from NHANES, NSRR and All of Us. Verifier: cross-cohort replication.

### S5 Cycle-phase physiology, independently replicated.

Replicate the Oura/Natural Cycles temperature, HRV and sleep claims on All of Us Fitbit data with survey-reported cycles.

### S6 Predicting the final menstrual period from hormone trajectories.

SWAN data; open re-analysis with held-out validation.

### S7 Iron-deficiency thresholds.

A [2023 JAMA re-analysis](https://doi.org/10.1001/jama.2023.8020) of NHANES found ~40% of adolescent girls and young women deficient depending on the ferritin cut-off. Public, re-analysable, high stakes.

### S8 Estradiol immunoassay bias.

Immunoassays are inaccurate at low estradiol levels; mass spectrometry is the reference ([CDC standardisation](https://www.cdc.gov/labstandards/hs.html)). Meta-analyse every published method comparison into correction factors by assay.

### S9 Benchmark wearable algorithms against camera ground truth.

Capture-24 plus raw data pulled from consumer devices via [Gadgetbridge](https://gadgetbridge.org); publish where sleep and step algorithms fail, by sex and body type.

### S10 Period-tracker privacy audit.

Capture and document each app's network traffic; Mozilla's _Privacy Not Included_ did it once by hand.

## T. Open hardware an agent could plausibly design

### Why now

[KiCad](https://www.kicad.org) is scriptable; [atopile](https://atopile.io) and [tscircuit](https://tscircuit.com) are code-to-PCB; [JLCPCB](https://jlcpcb.com) assembles from a BOM; enclosures via OpenSCAD/CadQuery; open firmware stacks for ESP32/nRF52/RP2040. The agent produces schematic, layout, firmware, enclosure and test procedure.

### Rule for every entry

A human builds it, benches it against the commercial device or a reference standard, and publishes the raw comparison. Unbuilt designs count for nothing. Criteria: simple electronics; commercial price driven by expertise, small market or regulatory moat; no implantation, no invasive sampling, no diagnostic claim; skin-contact parts from off-the-shelf medical-grade materials. Certify via [OSHWA](https://www.oshwa.org).

### Health and wellness (research/wellness grade)

#### T1 Over-the-counter hearing aid, ~$50.

Legal in the US since 2022; commercial $200–$3,000, prescription $2–5k. [Tympan](https://tympan.org) is the open research platform; [openMHA](https://www.openmha.org) the fitting software. Verifier: ANSI S3.22 test box and real-ear measurement. Highest-impact item here.

#### T2 Continuous skin-temperature logger for cycle tracking.

Tempdrop ~$200; BOM under $15. Open ovulation-detection algorithms don't exist. Verifier: reference thermometer plus LH strips.

#### T3 Hot-flash monitor.

Sternal skin-conductance research devices cost thousands; it's a GSR circuit. Verifier: self-report concordance.

#### T4 Spirometer.

Clinical $500–2,000; a differential pressure sensor. Verifier: 3-litre calibration syringe, ATS/ERS criteria.

#### T5 Calibrated audiometer.

$2–5k commercially; calibrated DAC and headphones. Verifier: clinical audiogram.

#### T6 Child vision screener.

Photorefraction with camera and off-axis flash; the commercial Spot screener is ~$8k. Verifier: optometrist refraction. Catches amblyopia early.

#### T7 Pulse oximeter with skin-tone validation.

[FDA-acknowledged](https://www.fda.gov/medical-devices/safety-communications/pulse-oximeter-accuracy-and-limitations-fda-safety-communication) bias in dark skin; [HealthyPi](https://www.protocentral.com) is the open board. Needs a clinical partner for arterial-blood verification; research-only.

#### T8 Fall-detection pendant.

Accelerometer plus algorithm; verifier: public fall datasets and a scripted protocol.

#### T9 Pelvic-floor trainer with biofeedback.

Pressure sensor in medical-grade silicone; only with a materials and hygiene section by someone qualified.

#### T10 Validated open smartwatch firmware.

[PineTime](https://pine64.org/devices/pinetime/), [Bangle.js](https://banglejs.com); contribution is algorithms validated on Capture-24 and NSRR.

### Assistive technology

#### T11 Eye-gaze tracker for communication.

Commercial $1,500–$10,000; [EyeWriter](http://www.eyewriter.org) proved it in 2009. Verifier: sub-degree accuracy. Home: [Makers Making Change](https://www.makersmakingchange.com).

#### T12 Refreshable braille cell.

$3–5k per 40 cells because of piezo actuators; a cheap actuator is unsolved. Ambitious; iterative design plus human prototyping.

#### T13 Switch interfaces and adaptive controllers.

Community-solved; gap is documentation and firmware.

### Instruments for other sections

#### T14 GPS time-inserter for occultation video.

Unlocks O3.

#### T15 Water-level logger.

ESP32 + pressure sensor + LoRa for ~$30 vs $400 HOBO (O27, N3).

#### T16 Sound-level meter.

With published calibration. Verifier: acoustic calibrator.

#### T17 Fluxgate magnetometer station.

With a calibration procedure (O20).

#### T18 GNSS reflectometry station.

Build and processing guide (O18).

#### T19 Hydrophone with preamp.

For O38.

#### T20 Sun photometer.

For aerosol optical depth.

#### T21 Wildlife and livestock GPS collars.

[OpenCollar](https://opencollar.io) exists and needs variants.

### Already open; contribute, don't fork

[AirGradient](https://www.airgradient.com) (air quality), [OpenEnergyMonitor](https://openenergymonitor.org), [OpenBCI](https://openbci.com) (EEG), [OpenFlexure](https://openflexure.org), [AudioMoth](https://www.openacousticdevices.info), [Hiveeyes](https://hiveeyes.org), [e-NABLE](https://enablingthefuture.org), [OpenEarable](https://open-earable.teco.edu).

### On the Oura ring

The electronics are ordinary; the flexible PCB, 20 mAh battery and sensor-fusion tuning are the hard parts. Poor first target. An open wristband with better-validated algorithms is a good one.

## U. Deeper dives: institutions and integrity

### Law and courts

#### U1 Open "Shepardizing."

Classify every citing sentence in the [Caselaw Access Project](https://case.law)/[CourtListener](https://www.courtlistener.com) citation graph as positive or negative treatment. Verifier: sampled comparison with KeyCite. Breaks the core paid product of the legal-research duopoly.

#### U2 Zombie laws.

Statutes ruled unconstitutional but never repealed (e.g., sodomy laws after [Lawrence v. Texas](https://en.wikipedia.org/wiki/Lawrence_v._Texas)) still get cited. Cross-reference every state code against controlling decisions.

#### U3 Link rot in opinions.

[Perma.cc](https://perma.cc) found about half the links in Supreme Court opinions dead. Archive every URL in every opinion and government report; reconstruct dead ones from the Wayback Machine.

#### U4 Court forms as code.

Suffolk's [LIT Lab](https://suffolklitlab.org) hand-builds guided interviews; every state has thousands more forms. Verifier: the court accepts the output.

#### U5 Transcribe every public meeting.

Council, zoning, parole, school board. [Documenters](https://www.documenters.org) pays humans; an agent produces timestamped, checkable records where no reporter is left.

### Mandatory financial filings nobody reads

#### U6 Retirement-plan fees.

Every plan files a [Form 5500](https://www.efast.dol.gov); fee dispersion across identical plans is enormous and invisible to employees.

#### U7 Insurer negotiated rates.

[Transparency in Coverage](https://www.cms.gov/priorities/key-initiatives/healthplan-price-transparency) files (terabytes, hostile formats) are the twin of hospital price files (J4); together they give the price of any procedure anywhere.

#### U8 Ghost provider directories.

Over half of listed in-network mental-health providers are unreachable. Verify directories against licensing boards and NPI records; binary per entry.

#### U9 Nursing-home staffing and ownership.

CMS [payroll-based staffing data](https://data.cms.gov) and inspection narratives; ownership routed through shells. Predict neglect citations; verifier is the next inspection.

#### U10 Hospital cost reports.

[HCRIS](https://www.cms.gov/data-research/statistics-trends-and-reports/cost-reports) plus Form 990s: charity-care claims versus actual; which nonprofit hospitals sue patients.

#### U11 Device predicate chains.

ICIJ's [Implant Files](https://www.icij.org/investigations/implant-files/) found clearance chains leading to recalled devices. Build the full graph from the [510(k) database](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm).

#### U12 Property-tax regressivity.

[Berry's work](https://propertytaxproject.uchicago.edu) shows poor homeowners over-assessed relative to sale prices; compute the ratio for every county from public rolls and sales.

#### U13 Municipal-bond distress.

[EMMA](https://emma.msrb.org) holds every issuer's financials; distress prediction is backtestable.

#### U14 Wage filings.

[H-1B/PERM disclosures](https://www.dol.gov/agencies/eta/foreign-labor/performance) versus prevailing wages; [NLRB](https://www.nlrb.gov/reports/graphs-data) records against employer identities.

### Institutions that hold people and animals

#### U15 Animal-facility inspections.

[APHIS reports](https://aphis.my.site.com/PublicSearchTool/s/) on breeders, dealers, labs, zoos; predict repeat violations, link facilities across renames.

#### U16 Slaughterhouse noncompliance.

[FSIS](https://www.fsis.usda.gov) records via FOIA; violations cluster by plant.

#### U17 Deaths in custody.

[BJS](https://bjs.ojp.gov) data is incomplete by design; reconstruct from local news, coroners, litigation.

#### U18 Public-housing conditions.

HUD [REAC](https://www.hud.gov/program_offices/public_indian_housing/reac) scores plus 311 and code violations predict which buildings fail next.

### Civic infrastructure

#### U19 Transit performance from open feeds.

[GTFS](https://gtfs.org) and real-time feeds for thousands of agencies ([Mobility Database](https://mobilitydatabase.org)): on-time performance, bunching, transit deserts for every city.

#### U20 Blocked rail crossings.

FRA's [complaint portal](https://www.fra.dot.gov/blockedcrossings/) lacks evidence; a webcam plus an agent supplies it.

#### U21 Zoning atlas.

The [National Zoning Atlas](https://www.zoningatlas.org) digitises codes by hand; agents read codes, the atlas's manual work verifies.

#### U22 Worst homes first.

England's [EPC open data](https://epc.opendatacommunities.org), 25M+ certificates: coldest housing by area and landlord.

#### U23 Urban heat and heat deaths.

Landsat surface temperature, [heat.gov](https://www.heat.gov) campaigns, [CDC WONDER](https://wonder.cdc.gov) mortality; where cooling centres should go.

#### U24 Rural water points.

[Water Point Data Exchange](https://www.waterpointdata.org), 500k+ points with functionality status; predict failures. Verifier: follow-up survey.

#### U25 Broadband truth.

FCC claims versus [Ookla open data](https://github.com/teamookla/ookla-open-data).

#### U26 Gas leaks.

[HEET](https://heet.org) mapped Boston with a car-mounted sensor; a cheap methane sensor on a commuter car is a section-T device.

### Science integrity and open science

#### U27 Paper mills and tortured phrases.

Cabanac's [Problematic Paper Screener](https://www.irit.fr/~Guillaume.Cabanac/problematic-paper-screener) and [PubPeer](https://pubpeer.com); retractions verify.

#### U28 Retracted papers still cited as valid.

[Retraction Watch data](https://gitlab.com/crossref/retraction-watch-data) is open via Crossref; find every guideline, review and textbook citing a retracted result without noting it, then re-run the downstream analysis with the corrected value where the code exists, rather than just flagging the citation.

#### U29 Data that never arrived.

Every NIH, NSF, ERC and UKRI grant promises a data deposit; check the promise against the repositories and the paper's supplements, and recover orphaned datasets from wherever they actually landed.

#### U30 Benchmark contamination.

Audit every public machine-learning benchmark for exact duplicates and derived records crossing the train/test boundary; publish the witnesses and the corrected leaderboard.

#### U31 Social-science outcome switching.

[AEA RCT Registry](https://www.socialscienceregistry.org) pre-registrations versus published outcomes.

#### U32 Large-facility data reanalysis.

[ESRF](https://data.esrf.fr) and [ILL](https://data.ill.eu) publish petabytes after embargo, rarely reused.

#### U33 Forecast-skill scoreboards.

Every weather provider's forecasts versus outcomes, every city, permanently; [ForecastWatch](https://forecastwatch.com) sells it, nobody publishes it open.

#### U34 Exam-item bias.

[NAEP](https://nces.ed.gov/nationsreportcard/nqt/) and [PISA](https://www.oecd.org/pisa/data/) released items and microdata; differential item functioning by sex, language, region.

## W. Bureaucracy navigation: asserting entitlements people already have

The pattern: a person is owed something and the process gates on knowing the magic words, the right address and the deadline. Patrick McKenzie's [debanking letters](https://www.bitsaboutmoney.com) are the template. The gap is large: under 1% of ACA claim denials are [appealed](https://www.kff.org/private-insurance/claims-denials-and-appeals-in-aca-marketplace-plans-in-2023/); ~two-thirds of disability claims are denied initially and about half win at hearing; ~70% of UK PIP tribunal appeals succeed; ~70% of 2023–24 Medicaid disenrollments were procedural; [Dollar For](https://dollarfor.org) has erased $100M+ in hospital bills by filing charity-care forms.

### Rules

Assert only facts the person supplies; never fabricate or coach; one person, one matter, no bulk; prefer channels with case numbers (ombudsmen, formal appeals) over open complaint boxes; stay inside unauthorised-practice lines ([DoNotPay's FTC settlement](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes) is the cautionary tale; [Upsolve](https://upsolve.org) the model). Deadlines are the highest-value knowledge. A related finding with a mechanical verifier: processes that cannot be completed as written, where document A requires B and B requires A. A minimal dependency cycle with the official source passages is publishable and usually gets fixed.

### Health

#### W1 Insurance denials.

Internal appeal → [external review](https://www.healthcare.gov/appeal-insurance-company-decision/) → state commissioner. Cite the plan's own criteria.

#### W2 Prior-authorisation and Medicare Advantage denials.

#### W3 Hospital discharge appeals.

Calling the [QIO](https://www.medicare.gov/claims-appeals) before the deadline pauses discharge.

#### W4 Nursing-home discharges.

30-day notice and appeal rights.

#### W5 Charity care under IRS 501(r).

Find the policy, check eligibility, file.

#### W6 Surprise bills.

Under the [No Surprises Act](https://www.cms.gov/nosurprises); request itemised bills.

#### W7 HIPAA right of access.

Thirty days to comply, then an [OCR complaint](https://www.hhs.gov/hipaa/filing-a-complaint/index.html).

### Money

#### W8 Account closures and frozen funds.

Executive office, then the [CFPB portal](https://www.consumerfinance.gov/complaint/) (15-day response, public).

#### W9 Unauthorised transactions (Reg E).

60 days to report; the letter states only the person's own account.

#### W10 Card billing errors (Fair Credit Billing Act).

Written dispute within 60 days.

#### W11 Credit-report errors (FCRA).

30-day investigation.

#### W12 Debt collection.

Validation within 30 days; statute-of-limitations defence; file an answer (most suits default).

#### W13 Background- and tenant-screening errors.

The FCRA applies.

#### W14 Identity theft.

[FTC affidavit](https://www.identitytheft.gov).

#### W15 Unclaimed property.

~$70B in [state databases](https://unclaimed.org); finders take 10–35%.

#### W16 Taxes.

[first-time penalty abatement](https://www.irs.gov/payments/administrative-penalty-relief); CP2000 responses; [Taxpayer Advocate](https://www.taxpayeradvocate.irs.gov); property-tax appeals (U12).

### Benefits

#### W17 SNAP/Medicaid/TANF procedural terminations.

Fair-hearing requests, short deadlines, benefits often continue if timely.

#### W18 Social Security disability.

[Appeals](https://www.ssa.gov/apply/appeal-decision-we-made) within 60 days; assemble the medical narrative.

#### W19 Unemployment appeals.

Deadlines as short as 10 days.

#### W20 Veterans benefits.

[Decision reviews](https://www.va.gov/decision-reviews/), free via accredited representatives.

#### W21 Utility shutoff protections.

[LIHEAP](https://www.acf.hhs.gov/ocs/programs/liheap) and public-utility-commission complaints.

### Housing

#### W22 Security-deposit demand letters.

Cite the statutory penalty.

#### W23 Written repair notices.

Warranty of habitability; repair-and-deduct.

#### W24 Eviction answers.

[Tenant Power Toolkit](https://tenantpowertoolkit.org), [Rentervention](https://rentervention.com), [Hello Landlord](https://hellolandlord.org) exist; every other jurisdiction is the gap.

#### W25 Reasonable-accommodation requests.

Under the FHA and the ADA.

#### W26 UK Section 21 validity checks.

[Shelter](https://england.shelter.org.uk) holds the criteria.

### Work and school

#### W27 Wage claims.

Final-paycheck demands and misclassification (Form SS-8).

#### W28 ADA accommodation and FMLA requests.

In writing.

#### W29 EEOC charges within 180/300 days.

#### W30 IDEA evaluation requests.

[Wrightslaw](https://www.wrightslaw.com) holds the templates.

#### W31 Financial-aid appeals.

[Student-loan](https://studentaid.gov) servicer disputes; PSLF reconsideration.

### Consumer and travel

#### W32 Air-travel refunds.

EU261 and the US DOT [refund rules](https://www.transportation.gov/airconsumer).

#### W33 FCC informal complaints.

[Filed here](https://consumercomplaints.fcc.gov); the carrier has 30 days to respond.

#### W34 Warranty and lemon-law demands.

#### W35 GDPR and CCPA subject-access requests.

GDPR Art. 15/22 and CCPA, via the [ICO](https://ico.org.uk) where relevant. Subject access is the fastest way to learn why an institution acted.

#### W36 Platform account terminations.

For legitimate businesses, and only from the person's own records.

### Government and records

#### W37 Congressional casework.

[your representative's](https://www.house.gov/representatives/find-your-representative) constituent-services staff unstick federal cases; almost unused outside the professional class.

#### W38 USCIS inquiries.

The [ombudsman](https://www.dhs.gov/topics/citizenship-and-immigration-services-ombudsman) and own-file FOIA. Inquiries only; filings by non-lawyers is where notario fraud lives.

#### W39 Prison grievances.

PLRA exhaustion discipline.

#### W40 Own-records requests.

Police reports, FERPA files, personnel files.

### Outside the US

#### W41 UK.

[mandatory reconsideration](https://www.gov.uk/mandatory-reconsideration) → tribunal; [Financial Ombudsman](https://www.financial-ombudsman.org.uk); [POPLA](https://www.popla.co.uk); [Citizens Advice](https://www.citizensadvice.org.uk) and [Advicenow](https://www.advicenow.org.uk) templates as ground truth.

#### W42 India.

[RTI](https://rtionline.gov.in) requests and first appeals.

#### W43 Brazil.

[consumidor.gov.br](https://www.consumidor.gov.br) (10-day public company response).
