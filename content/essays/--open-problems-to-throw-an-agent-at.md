---
unlisted: true
title: Verifiable Problems to Point an Agent At
tags: []
---

# Fable's Version

_Working title_
_Highest expected value per unit of compute, in Claude Fable's judgement: B1 (reproducibility), M1a → sections C and D (read the archives), E5/G (the offshore survey archives), H1–H8 (hazards from records), and J8/N4/N5 (backtestable early warnings)._

## A. Machine-checked

**A1. OEIS conjectures.** The [On-Line Encyclopedia of Integer Sequences](https://oeis.org) contains thousands of entries with unproved "Conjecture: a(n) = …" comments. Prove each in Lean, or refute with a computable counterexample. Nobody has attacked this systematically.

**A2. Erdős problems.** [erdosproblems.com](https://www.erdosproblems.com) lists ~1,000 problems; Terence Tao has been running AI on them since 2025, so this is not new, but hundreds remain and Lean is the verifier.

**A3. Formalise the unformalised.** DeepMind's [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) repo and [Freek Wiedijk's 100 theorems list](https://www.cs.ru.nl/~freek/100/) name what isn't yet in [Mathlib](https://leanprover-community.github.io). Deliverable is a standalone Lean project, not a Mathlib pull request (review is the bottleneck).

**A4. Formally verify existing zero-knowledge circuits.** The [0xPARC ZK bug tracker](https://github.com/0xPARC/zk-bug-tracker) shows under-constrained Circom/Halo2 circuits securing real money. Proof checks or it doesn't. No dual use.

**A5. Machine-checked correctness for the crypto everyone runs.** [HACL\*](https://hacl-star.github.io) covers a subset; BoringSSL, libsodium, RustCrypto and the Linux kernel crypto subsystem have large unverified surfaces. Tools: [Verus](https://github.com/verus-lang/verus), F\*, Lean. Deliverable is a proof.

**A6. Re-derive computer-assisted proofs with verified interval arithmetic.** Many published results rest on numerical code nobody re-ran. Discrepancies are findings. See [Flyspeck](https://github.com/flyspeck/flyspeck) for the model.

**A7. Verified parsers and interpreters for load-bearing formats.** PDF, JSON, ASN.1, eBPF, WebAssembly. Parsers are where exploits live. [CompCert](https://compcert.org) shows the approach scales.

**A8. Verified re-implementations of small C libraries with differential fuzzing.** zlib, libpng, libjpeg-turbo, expat; SQLite's [public test suite](https://www.sqlite.org/testing.html) is the gold standard. Verifier: byte-identical output across millions of fuzzed inputs plus upstream tests. [DARPA TRACTOR](https://www.darpa.mil/program/translating-all-c-to-rust) is adjacent.

**A9. Post-quantum migration with interop test vectors.** For libraries and protocols not yet moved. Verifier: [NIST PQC](https://csrc.nist.gov/projects/post-quantum-cryptography) known-answer tests and cross-implementation interop.

**A10. Executable law with official worked examples as tests.** [Catala](https://catala-lang.org) already encodes chunks of French benefits law. Targets: UK Universal Credit, US SNAP per state, EITC, student-loan repayment, pension rules. Verifier: government-published worked examples and [PolicyEngine](https://policyengine.org) cross-checks.

**A11. Open tax computation engine.** Start from the [open-sourced IRS Direct File code](https://github.com/IRS-Public/direct-file). Verifier: IRS e-file [Assurance Testing System scenarios](https://www.irs.gov/e-file-providers) and published worked examples. Scope honestly: the barrier to a "TurboTax killer" is e-file authorisation, liability and 50 state codes, not code.

## B. Re-run to verify

**B1. Computational reproducibility of every paper with a replication package.** [AEA journals](https://aeadataeditor.github.io) mandate packages since 2019; NeurIPS/ICML have code links; PLOS has data policies. Rerun, diff against the paper's tables, publish a scoreboard. The [Institute for Replication](https://i4replication.org) does dozens a year by hand. Probably the highest-value entry in the whole list: scalable, cheap verifier, no maintainer burden.

**B2. Resurrect dead scientific software.** [Software Heritage](https://www.softwareheritage.org) has the source; the paper names the figure. Verifier: the figure regenerates.

**B3. Port legacy Fortran/MATLAB/IDL models to open languages with numerical-equivalence tests.** Hydrology, ecology, epidemiology, climate. Verifier: outputs match to tolerance on reference inputs.

**B4. Statistical-error sweeps of the literature.** [statcheck](https://michelenuijten.shinyapps.io/statcheck-web/), [GRIM](https://en.wikipedia.org/wiki/GRIM_test), SPRITE, image-duplication detection across all of PubMed Central and arXiv. The Black Spatula Project started this in 2025; scale is what's missing. Report to authors and journals, not Twitter.

**B5. Outcome switching in clinical trials.** Compare pre-registered primary outcomes on [ClinicalTrials.gov](https://clinicaltrials.gov) with the published paper. [COMPare](https://compare-trials.org) did ~60 trials by hand; [TrialsTracker](https://trialstracker.net) covers results reporting but not switching.

**B6. Does the cited source actually say that?** For Wikipedia and for review articles. Meta [prototyped this in 2022](https://ai.meta.com/research/publications/improving-wikipedia-verifiability-with-ai/) and dropped it. Verifier: crowd spot-check.

**B7. Errata hunting in open textbooks.** Recompute every worked example in [OpenStax](https://openstax.org), [LibreTexts](https://libretexts.org), MIT OCW problem sets. Verifier: the arithmetic.

**B8. Fuzz, fix and regression-test open-source software that has opted in.** [OSS-Fuzz](https://google.github.io/oss-fuzz/) and [AIxCC](https://aicyberchallenge.com) cover discovery. Include only with an opt-in registry.

**B9. Accessibility remediation of civic websites.** Measured by [axe-core](https://github.com/dequelabs/axe-core) and Lighthouse plus screen-reader scripts. Do it on forks and hand over.

**B10. Conformance test suites for standards that ship without them.** Many ISO/IETF specs have no reference tests. Deliverable is the suite; everyone's implementation then gets checked for free.

**B11. Cross-implementation differential testing.** TLS stacks, JSON parsers, date/time libraries, Unicode handling, payroll engines. Disagreements are bugs by construction.

## C. Text archives: digitised but unread

**C1. Oxyrhynchus papyri.** ~500,000 fragments, under 10% published after a century ([Oxford POxy](https://www.papyrology.ox.ac.uk/POxy/); crowd project [Ancient Lives](https://www.ancientlives.org)). Transcribe; match against known texts in the TLG; find physical joins; flag what matches nothing (candidate lost works). Verifier: known texts, physical joins.

**C2. Cairo Genizah.** ~400,000 fragments imaged by the [Friedberg project](https://fjms.genizah.org). Content-level indexing into a medieval Mediterranean social and economic database.

**C3. Cuneiform backlog.** ~500,000 tablets excavated, most unpublished ([CDLI](https://cdli.mpiwg-berlin.mpg.de)); LMU's [Fragmentarium](https://www.ebl.lmu.de) does AI joins for literature. The 90% that is administrative text holds Bronze Age price series, harvests, disease.

**C4. Sinai palimpsests.** Multispectral images of ~70 overwritten manuscripts are online at the [Sinai Palimpsests Project](https://sinai.library.ucla.edu). Recovering undertext (lost Christian Palestinian Aramaic, Caucasian Albanian, Greek) from the image stacks.

**C5. Dunhuang, Timbuktu, Ethiopian and Armenian manuscripts.** [International Dunhuang Project](https://idp.bl.uk), [HMML](https://hmml.org) (which imaged Timbuktu and Ethiopian collections). Catalogue-level description first.

**C6. Undeciphered scripts with corpora.** Proto-Elamite (~1,600 tablets on CDLI), [Linear A](https://en.wikipedia.org/wiki/Linear_A), Cypro-Minoan, Indus. Verifier is Ventris's: consistent readings across the corpus that predict new tablets.

**C7. Vatican Archive, Pius XII pontificate.** Opened 2020, ~16 million pages ([Archivio Apostolico](https://www.archivioapostolicovaticano.va)). Wartime persecution questions plus 1939–58 diplomatic cables.

**C8. Arolsen Archives.** 30 million Holocaust-era documents ([arolsen-archives.org](https://arolsen-archives.org)). Link the same person across camp registers, transport lists and tracing requests. Every resolved fate matters to a family.

**C9. Stasi shredded files.** ~15,500 sacks of hand-torn documents at the [Stasi Records Archive](https://www.stasi-unterlagen-archiv.de); the Fraunhofer e-Puzzler stalled after a few hundred. Scanned-but-unreconstructed sacks are a jigsaw-vision problem.

**C10. Declassified intelligence corpora.** [CIA CREST](https://www.cia.gov/readingroom/), [FBI Vault](https://vault.fbi.gov), the [2025 JFK release](https://www.archives.gov/research/jfk), MKUltra, Venona, UK releases. Build a who-met-whom-when graph; surface documents contradicting official histories. Every finding cites a page image.

**C11. UK "migrated archives".** Colonial-office files on Kenya, Malaya, Cyprus released 2011–13 ([FCO 141 at TNA](https://discovery.nationalarchives.gov.uk)). Barely read.

**C12. Trial and party archives.** [Nuremberg exhibits](https://nuremberg.law.harvard.edu), Comintern microfilm ([Hoover](https://www.hoover.org/library-archives)), Cultural Revolution local gazetteers.

**C13. Nazi-looted art.** [ERR card files](https://www.errproject.org), the [Lost Art register](https://www.lostart.de), post-1945 auction catalogues, museum provenance pages. Match objects across them. Checkable object by object.

**C14. Historic newspapers.** [Chronicling America](https://chroniclingamerica.loc.gov) (20M+ pages), [Trove](https://trove.nla.gov.au), [Delpher](https://www.delpher.nl), [Gallica](https://gallica.bnf.fr), [Impresso](https://impresso-project.ch). Concrete wins already achieved by hand: 1918 flu spread by city ([Influenza Archive](https://www.influenzaarchive.org)), geomagnetic storms from aurora reports, earthquake intensity maps from damage columns, sea-ice dates from shipping news, text-reuse networks ([Viral Texts](https://viraltexts.org)). The archive is ~100× what has been read. Also the corpus for historical corruption: cross-reference politicians' names with land transfers, company formations and contract awards.

**C15. Industry document archives.** UCSF's [Industry Documents Library](https://www.industrydocuments.ucsf.edu) (14M+ tobacco documents), the [Opioid Industry Documents Archive](https://www.industrydocuments.ucsf.edu/opioids/), chemical and fossil-fuel collections ([Climate Files](https://www.climatefiles.com)). Primary documents from litigation, public, mostly unread.

**C16. Translate untranslated public-domain science.** Soviet-era mathematics and physics, German chemistry, Japanese engineering. Verifier is weaker (bilingual spot-check), but the downside is nil.

**C17. Transcribe and index public-domain audio/video.** [Internet Archive](https://archive.org), congressional hearings, oral histories. Verifier: word-error rate on a human-transcribed sample.

## D. Scientific data rescue

**D1. Ship logbooks and weather sheets.** NOAA scanned tens of millions of pages; volunteers hand-type them at [Old Weather](https://www.oldweather.org) and [Rainfall Rescue](https://www.zooniverse.org/projects/edh/rainfall-rescue); [Copernicus](https://climate.copernicus.eu/data-rescue-service) coordinates. Handwriting → observations extends the instrumental record to the 1700s. Verifier: existing transcriptions; overlapping ships.

**D2. Analog seismograms.** Millions of paper records pre-1980 ([SeismoArchives](https://ds.iris.edu/seismo-archives/)). Digitising traces lets modern methods study 1906, 1923, 1960.

**D3. Harvard DASCH plates.** ~450,000 photographic plates 1885–1992, fully scanned ([DASCH](https://dasch.cfa.harvard.edu)). Century-long light curves: historical supernovae, [vanishing stars](https://vasconsite.wordpress.com), pre-discovery asteroid images.

**D4. Tree-ring backlog.** [ITRDB](https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring) has ~5,000 chronologies; labs hold far more cores measured but never crossdated. Also dendroprovenance of historic timber.

**D5. Cross-proxy reconciliation.** [Neotoma](https://www.neotomadb.org) (pollen), SISAL (cave deposits), corals, ice cores all measure past climate through different lenses; [PAGES 2k](https://pastglobalchanges.org) reconciles with a few dozen people.

**D6. Glacier repeat photography.** [NSIDC Glacier Photograph Collection](https://nsidc.org/data/glacier_photo), Swiss and Norwegian archives. Match viewpoints to modern images for ice-loss measurements; targets in [GLIMS](https://www.glims.org) and [WGMS](https://wgms.ch).

**D7. Continuous Plankton Recorder.** 90 years of silk samples ([CPR Survey](https://www.cprsurvey.org)) counted by human microscopists at a fixed rate. Image the archive and re-count at species resolution.

**D8. Pre-1950 tide-gauge charts.** [PSMSL](https://psmsl.org) has gaps that exist as paper marigrams in harbour archives.

**D9. Legacy soil surveys.** A century of national surveys are scanned PDFs with profile data never entered into [WoSIS](https://www.isric.org/explore/wosis). Feeds every soil-carbon estimate.

**D10. Agricultural experiment station bulletins.** Century-old variety-trial yield data, scanned, never aggregated. Seed data via [Genesys](https://www.genesys-pgr.org) and [GRIN](https://npgsweb.ars-grin.gov).

**D11. Amateur radio logs.** Decades of contest and contact logs are an ionosphere record; [HamSCI](https://hamsci.org) uses some. See also [WSPRnet](https://wsprnet.org).

## E. Earth imagery archives

**E1. Historical aerial photography.** [NCAP](https://ncap.org.uk) (tens of millions of RAF/Luftwaffe frames), USGS via [EarthExplorer](https://earthexplorer.usgs.gov) back to the 1930s, [IWM](https://www.iwm.org.uk). Products: WWII bomb-crater → UXO (Unexplained Ordinance) risk maps (see H1); 1940s landscape baseline before ploughing and development.

**E2. Declassified spy-satellite imagery.** CORONA (~860k frames 1960–72; [CORONA Atlas](https://corona.cast.uark.edu) covers the Middle East), KH-7 GAMBIT and KH-9 HEXAGON (declassified 2011, higher resolution, barely used), all on [EarthExplorer](https://earthexplorer.usgs.gov). Systematic survey of Central Asia, Iran, Iraq, Syria for sites since destroyed or built over. See Q for the full list of declassified sources.

**E3. Historical maps.** [David Rumsey](https://www.davidrumsey.com) (100k+), Ordnance Survey historic sheets, [Sanborn fire-insurance maps](https://www.loc.gov/collections/sanborn-maps/). Georeference with [MapReader](https://github.com/maps-as-data/MapReader), extract every named feature → gazetteer of vanished villages, old coastlines, forgotten mine shafts.

**E4. National LiDAR sweeps.** [England](https://environment.data.gov.uk/survey) (1 m, full coverage), [Netherlands AHN](https://www.ahn.nl), Denmark, Slovenia, [Poland](https://www.geoportal.gov.pl). Run a detector for barrows, enclosures, roads, field systems; reconcile with [Historic Environment Records](https://www.heritagegateway.org.uk). Held-out known sites give precision/recall.

**E5. High-resolution bathymetry and sonar.** Public [GEBCO](https://www.gebco.net) is ~400 m grid and useless for wrecks; the value is in engineering-grade multibeam that oil, gas and offshore-wind surveys must release: [UK Marine Data Exchange](https://www.marinedataexchange.co.uk), [US BOEM](https://www.boem.gov), [EMODnet](https://emodnet.ec.europa.eu/en/bathymetry), [AusSeabed](https://www.ausseabed.gov.au), [NOAA multibeam archive](https://www.ncei.noaa.gov/maps/bathymetry/). Nobody looked at these for anything but engineering. See G for what to look for.

**E6. Every tailings dam, monitored.** Sentinel-1 InSAR (Interferometric Synthetic Aperture Radar) is free; the [Global Tailings Portal](https://tailing.grida.no) lists ~1,900 facilities. Deliverable: public per-dam deformation time series with a documented noise floor, not "alerts" (false positives from vegetation, thermal cycles, atmosphere are the real problem). Brumadinho killed 270.

**E7. Every bridge, same method.** [Morandi bridge InSAR (Interferometric Synthetic Aperture Radar) post-mortem](https://doi.org/10.3390/rs11121403) showed pre-collapse movement. Nobody runs it prospectively.

**E8. Museum specimen images.** ~400 million specimens; growing fraction imaged via [GBIF](https://www.gbif.org) and [iDigBio](https://www.idigbio.org). Label transcription and georeferencing; phenology-vs-year shifts; morphological-outlier screening for undescribed species (most "new" species sat in drawers for decades). Taxonomists verify the shortlist.

**E9. Coral, mangrove, peatland and seagrass baselines.** In the style of the [Allen Coral Atlas](https://allencoralatlas.org) for the ecosystems it doesn't cover.

**E10. Brick kilns and forced-labour sites from satellite.** [Nottingham Rights Lab](https://www.nottingham.ac.uk/research/beacons-of-excellence/rights-lab/) did South Asian kilns; extend to other bonded-labour industries, illegal mining, informal landfills.

**E11. Unidentified photographs in library commons.** [Flickr Commons](https://www.flickr.com/commons), Library of Congress. Date and geolocate from signage, shadows, vehicles.

**E12. Landslide catalogue completion.** [NASA's catalogue](https://gpm.nasa.gov/landslides) is built from news reports; Sentinel-2 change detection fills it, verified against reported events.

**E13. Global coastline change.** [CoastSat](https://github.com/kvos/CoastSat) extracts shorelines from Landsat; nobody has run it globally with per-settlement erosion rates.

**E14. Heritage looting from satellite.** [EAMENA](https://eamena.org) documents endangered MENA sites; looting-pit detection was done by hand for Syria. Cross-reference auction catalogues with the [Interpol stolen works database](https://www.interpol.int/en/Crimes/Cultural-heritage-crime/Stolen-Works-of-Art-Database).

**E15. iNaturalist backlog.** Hundreds of millions of observations on [iNaturalist](https://www.inaturalist.org), many stuck at "Unknown." Push to research grade; flag first records of invasives by region.

**E16. Insect biomass from weather radar.** The [NEXRAD archive](https://registry.opendata.aws/noaa-nexrad/) back to 1991 sees insects; BirdCast does birds. Cross-check against the 60-year [Rothamsted Insect Survey](https://insectsurvey.com).

**E17. Dark taxa.** [Global Malaise Program](https://biodiversitygenomics.net/projects/gmp/) and [BOLD](https://boldsystems.org) have millions of barcoded specimens without names; [UNITE](https://unite.ut.ee) and [GlobalFungi](https://globalfungi.com) have sequence-only fungi.

**E18. Top-down vs self-reported methane.** TROPOMI and [MethaneSAT](https://www.methanesat.org) see plumes; EPA's [GHGRP](https://www.epa.gov/ghgreporting) has facility self-reports. Reconcile facility by facility.

**E19. Flaring and refinery attribution.** [VIIRS Nightfire](https://eogdata.mines.edu/products/vnf/) flaring detections plus fence-line monitors (Texas TCEQ posts them) plus [OpenAQ](https://openaq.org)/[PurpleAir](https://www.purpleair.com).

**E20. Timber and deforestation supply chains.** [Trase](https://www.trase.earth), [Global Forest Watch](https://www.globalforestwatch.org). Gap: concession maps and species ID of traded timber, checkable against customs seizures.

## F. Other worlds: more images than eyes

Everything below is public in NASA's [Planetary Data System](https://pds.nasa.gov) or ESA's [Planetary Science Archive](https://archives.esac.esa.int/psa). The rule: bodies with O(10) images are studied to death; bodies with O(10⁵–10⁶) images are not.

**F1. Mars orbital.** [HiRISE](https://www.uahirise.org) (~80k images at 25 cm), [CTX](https://murray-lab.caltech.edu/CTX/) (global 6 m mosaic, ~100k images), daily global MARCI weather. Targets: new impact craters from before/after pairs (partially done by ML), recurring slope lineae changes, gullies, dune migration, avalanches at the polar cap, dust-devil tracks ([Planet Four](https://www.zooniverse.org/projects/mschwamb/planet-four) is the citizen version). Verifier: re-imaging requests, which HiRISE honours.

**F2. Mars rover images.** Curiosity and Perseverance have returned over a million [raw images](https://mars.nasa.gov/msl/multimedia/raw-images/). Several [meteorites on Mars](https://en.wikipedia.org/wiki/List_of_meteorites_on_Mars) were found by chance; a systematic search for meteorites, unusual rocks and dust-devil captures is unfinished.

**F3. Moon.** [LROC](https://quickmap.lroc.asu.edu) has millions of frames at 0.5 m; Chandrayaan-2's OHRC reaches 25 cm ([ISRO](https://www.isro.gov.in)); Kaguya and Chang'e add more. Targets: new craters, lava-tube skylights beyond the existing pit catalogue, boulder tracks, lunar swirls, crash sites of early landers, artefact inventory of every Apollo and Luna site.

**F4. Venus radar.** Magellan (1990–94) mapped the whole planet; in 2023, [re-analysis of old Magellan data found active volcanism](https://doi.org/10.1126/science.abm7735). The archive was studied in parts, never systematically for change between orbits.

**F5. Mercury.** MESSENGER returned ~300k images (PDS (Planetary Data System)); BepiColombo arrives 2026. Hollows, volatiles, crater statistics. Few people work on Mercury.

**F6. Saturn system.** Cassini's 13 years, ~450k images, plus radar swaths of Titan and VIMS spectral cubes ([PDS (Planetary Data System) Ring-Moon Systems Node](https://pds-rings.seti.org)). Targets: ring propellers and moonlets, Enceladus plume variability, Titan lake-level change, small-moon rotation states.

**F7. Jupiter.** [JunoCam](https://www.missionjuno.swri.edu/junocam) raw images are processed mostly by amateurs; Galileo's archive is older. Cloud tracking, lightning, small-moon recoveries.

**F8. Comets and asteroids.** Rosetta's ~100k OSIRIS images of 67P (activity, cliff collapses, boulder movement), Dawn at Vesta and Ceres, OSIRIS-REx at Bennu, Hayabusa2 at Ryugu. Rosetta's archive is the most under-exploited.

**F9. The Sun.** [SDO](https://sdo.gsfc.nasa.gov) returns terabytes per day since 2010; SOHO comet-hunting by amateurs is the existing model.

**F10. Survey backlog.** [Euclid](https://www.esa.int/Science_Exploration/Space_Science/Euclid) will image 1.5 billion galaxies; JWST and Hubble archives at [MAST](https://archive.stsci.edu); Kepler/TESS light curves still hide planets ([Planet Hunters TESS](https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess)). Galaxy Zoo is the model.

## G. Oceans: lost lands, lost things, the deep

**G1. Doggerland's method, applied everywhere.** Gaffney mapped Doggerland's rivers from oil-company 3D seismic data. National repositories now release seismic: [UK NSTA National Data Repository](https://ndr.nstauthority.co.uk), [Dutch NLOG](https://www.nlog.nl), [Norway's Sodir](https://www.sodir.no), [US BOEM](https://www.boem.gov). Every continental shelf exposed at the last glacial maximum has buried river valleys, lakes and coastlines in that data: Sundaland (SE Asia), Sahul (Australia's shelf, where [submerged Aboriginal sites were found off the Pilbara in 2020](https://doi.org/10.1371/journal.pone.0233912)), Beringia, the Persian Gulf basin, Black Sea shelf, Adriatic, Yellow Sea, Gulf of Mexico.

**G2. Structures in routine multibeam data.** The [Blinkerwall](https://en.wikipedia.org/wiki/Blinkerwall), a 10,000-year-old kilometre-long stone wall, was found in 2024 in ordinary survey data from the Baltic. The offshore-wind survey archives in E5 are full of unexamined 1–5 m data.

**G3. Shipwrecks and lost aircraft, prioritised.** UNESCO estimates [3 million wrecks](https://www.unesco.org/en/underwater-heritage). Records: [Wrecksite](https://www.wrecksite.eu) (crowd), NOAA's wreck database, UKHO, the [Lloyd's Register Foundation heritage archive](https://hec.lrfoundation.org.uk) (casualty returns), Lloyd's List reports in historic newspapers. Combine last-known positions with drift models and the high-resolution bathymetry of E5 to rank targets. Slave-ship wrecks via the [Slave Wrecks Project](https://nmaahc.si.edu/explore/initiatives/slave-wrecks-project).

**G4. Fishermen's snag records as a wreck finder.** Trawlers log where nets catch on the seabed. The UK [Kingfisher bulletin](https://kingfisherbulletin.org) and [KIS-ORCA](https://kis-orca.org) publish obstruction positions. Snags with no charted wreck are candidates. This is a side-channel (see I).

**G5. Dumped munitions and waste.** Hundreds of thousands of tonnes of conventional and chemical munitions were dumped at sea after both world wars ([OSPAR munitions work](https://www.ospar.org/work-areas/eiha/munitions)); ~200,000 barrels of radioactive waste were dumped in the NE Atlantic 1946–93 ([overview](https://en.wikipedia.org/wiki/Ocean_disposal_of_radioactive_waste)). Mapping, not touching: offshore wind and cable routes need to know. Sonar archives plus historical dumping logs.

**G6. Ghost fishing gear.** ~640,000 tonnes lost per year ([Global Ghost Gear Initiative](https://www.ghostgear.org)). Predict accumulation zones from drift models plus sonar detection; verify with cleanup dives.

**G7. Lost containers.** Thousands lost per year, some with hazardous cargo. Drift modelling from the incident position plus shoreline arrival reports.

**G8. Deep-sea nodule mining baseline.** The [ISA DeepData](https://data.isa.org.jm) database holds contractors' environmental baseline data for the Clarion-Clipperton Zone; a [2023 analysis](https://doi.org/10.1016/j.cub.2023.04.062) found 5,000+ undescribed species in it. Independent re-analysis of contractor data, nodule-abundance mapping from box cores and backscatter, plume-dispersal reconstruction from the 1989 [DISCOL](https://www.discol.de) disturbance experiment (still visible), seabed-image species counts. Data also on [PANGAEA](https://www.pangaea.de).

**G9. Deep-sea video archives.** [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/data/) Okeanos ROV dives, [MBARI's VARS](https://www.mbari.org/technology/video-annotation-and-reference-system-vars/) (28,000+ hours, expert-annotated, with [FathomNet](https://fathomnet.org) as the training set), [ONC SeaTube](https://data.oceannetworks.ca/SeaTube), [Schmidt Ocean](https://www.youtube.com/@SchmidtOcean), [Nautilus Live](https://nautiluslive.org), JAMSTEC's [J-EDI](https://www.godac.jamstec.go.jp/jedi/e/) and [Deep-sea Debris Database](https://www.godac.jamstec.go.jp/dsdebris/e/). Annotators tag the object of interest; the background is unexamined. Targets: unannotated organisms at the frame edge, "unidentified" tags, behaviour events, litter counts, bioluminescence, re-sightings of individuals across dives.

**G10. Deep-sea audio archives.** NOAA's [passive acoustic archive](https://www.ncei.noaa.gov/products/passive-acoustic-data), MBARI's continuous hydrophone on [AWS Open Data](https://registry.opendata.aws/pacific-sound/) since 2015, [ONC hydrophones](https://data.oceannetworks.ca). NOAA maintains a list of [unexplained sounds](https://oceanexplorer.noaa.gov/explorations/sound01/background/seasounds/seasounds.html). Targets: unidentified call types, whale population trends, ship-noise exposure, cross-referencing sightings in [OBIS](https://obis.org).

**G11. Dark fibre as a sensor.** [DAS (Distributed Acoustic Sensing)](https://en.wikipedia.org/wiki/Distributed_acoustic_sensing) turns unused telecom fibre into thousands of vibration sensors: whales, earthquakes, ship traffic, cable strikes. Existing seafloor cables plus an interrogator, no new hardware in the water.

## H. Present-day hazards from historical records (the bomb-crater genre)

**H1. WWII bomb craters → UXO (Unexplained Ordinance)risk.** Aerial photos (E1) plus [RAF Bomber Command raid records at TNA](https://discovery.nationalarchives.gov.uk) and USAAF mission reports. Germany still evacuates cities for bombs; contractors do this privately, never openly. LiDAR also shows craters under forest.

**H2. WWI battlefields.** The "iron harvest" recovers ~900 tonnes of shells a year in France and Belgium ([overview](https://en.wikipedia.org/wiki/Iron_harvest)). WWI aerial photos ([IWM](https://www.iwm.org.uk)), trench maps and LiDAR of the Zone Rouge give a contamination map.

**H3. Indochina bombing.** The Pentagon's [THOR database](https://data.world/datamil/vietnam-war-thor-data) records every US bombing mission over Laos, Cambodia and Vietnam. [MAG](https://www.maginternational.org) and [Legacies of War](https://www.legaciesofwar.org) clear by hand; combining THOR with satellite crater detection and clearance records prioritises villages.

**H4. Landmines.** [HALO Trust](https://www.halotrust.org) and national databases coordinated by [GICHD](https://www.gichd.org) hold cleared and suspected areas; conflict records, unit positions and terrain predict the rest. Verifier: clearance teams.

**H5. Historic industrial sites → contamination.** [Sanborn](https://www.loc.gov/collections/sanborn-maps/) and Goad fire-insurance maps name every gasworks, tannery and foundry a century ago. Predict brownfield contamination; verify with sampling.

**H6. Eroding coastal landfills.** The Environment Agency's [historic landfill data](https://environment.data.gov.uk) plus coastline change (E13) identifies dumps about to wash into the sea.

**H7. Old mine shafts and workings.** [Coal Authority](https://www.gov.uk/government/organisations/the-coal-authority) records plus old maps; subsidence and sinkholes.

**H8. Undocumented orphan wells.** Hundreds of thousands of unrecorded oil and gas wells leak methane; the [federal plugging programme](https://www.doi.gov/orphanedwells) can't plug what it can't find. 1900s lease records, old topo maps, aerial-photo scars; verify with magnetometer surveys. [USGS MRDATA](https://mrdata.usgs.gov) for mines.

**H9. Lost rights of way.** England's [Don't Lose Your Way](https://dontloseyourway.ramblers.org.uk) campaign needs historic paths mapped from old maps before a statutory cut-off. Pure archival cartography with a legal verifier.

**H10. Historical flood extents.** Old maps, photos and newspaper reports of past floods, georeferenced, as a check on modelled flood maps. Insurers and planners would use it.

**H11. Lead service lines.** The [revised Lead and Copper Rule](https://www.epa.gov/ground-water-and-drinking-water/revised-lead-and-copper-rule) forced every US water system to publish an inventory; millions of lines are "unknown." [BlueConduit](https://blueconduit.com) showed prediction from house age, tax records and plumbing codes works. Verifier: excavation records.

**H12. Asbestos and lead paint by building age and type.** Same method as H11 for housing stock.

## I. Side-channels: inferring things from data collected for something else

The pattern: an instrument built for X incidentally records Y. Each of these has a worked example proving it; none has been run at scale.

**I1. Weather radar → meteorite falls.** Marc Fries showed falling meteorites appear in [NEXRAD](https://www.ncei.noaa.gov/products/radar/next-generation-weather-radar) data. Scan 30 years of archive; cross-reference [Global Fireball Observatory](https://gfo.rocks) and [AllSky7](https://allsky7.net) detections; produce strewn-field maps for falls nobody recovered. Verifier: someone walks the field.

**I2. Weather radar → bats, birds, insects, wildfire plumes, chaff.** Radar sees bat colonies emerging from caves, migration, and smoke. Same archive.

**I3. Fishermen's snags → wrecks.** See G4.

**I4. Mobile-phone tower links → rainfall.** Signal attenuation on commercial microwave links maps rain at high resolution ([Overeem et al. 2013](https://doi.org/10.1073/pnas.1217961110)); telecoms hold the data and rarely release it. A public-interest data-sharing template plus the processing pipeline.

**I5. Seismometers → everything else.** [Raspberry Shake](https://raspberryshake.org) networks detected lockdown quiet in 2020; seismometers also see ocean storms, iceberg calving, stadium goals, avalanches, traffic. Time series of urban activity from the seismic archive.

**I6. GNSS → water vapour, tsunamis, earthquakes.** Tropospheric delay gives precipitable water; ionospheric disturbances show tsunamis before they arrive. Dense hobby networks add coverage (see O17).

**I7. Mains-frequency hum → dating and authenticating recordings.** [Electrical network frequency analysis](https://en.wikipedia.org/wiki/Electrical_network_frequency_analysis) dates any audio recorded near mains power. Reference databases exist for few grids; build them for the rest.

**I8. Ice cores + tree rings + chronicles → unlocated volcanoes.** The [1808 mystery eruption](https://en.wikipedia.org/wiki/1808_mystery_eruption) cooled the planet and its source is still unknown; the 1831 eruption was attributed only in 2024. Sulphate isotopes, tephra chemistry, historical sky reports and satellite geomorphology of candidate calderas.

**I9. Tree rings → solar superstorms.** [Miyake events](https://en.wikipedia.org/wiki/Miyake_event) are radiocarbon spikes from extreme solar storms; only a handful are known because few high-resolution tree-ring series exist. Finding more sets the risk baseline for grid and satellite operators.

**I10. Paintings and photographs → past atmosphere and ecology.** Sunset colours in landscape paintings track volcanic aerosols ([Zerefos et al. 2007](https://doi.org/10.5194/acp-7-4027-2007)); haze in old photographs tracks pollution; birds and plants in art give historical ranges.

**I11. Ship logbooks → magnetic field and sea ice.** Navigators recorded compass declination for centuries; the [gufm1 model](https://doi.org/10.1098/rsta.2000.0569) reconstructs the geomagnetic field from them. Whaling catch positions reconstruct the historical sea-ice edge.

**I12. Gravestones → historical mortality.** [Find a Grave](https://www.findagrave.com) and BillionGraves hold hundreds of millions of dated stones: child-mortality curves and epidemic timing by parish, checkable against the few places with good registers.

**I13. Bomb-pulse radiocarbon → poached ivory.** Atmospheric nuclear tests left a carbon-14 spike that dates any tissue ([Uno et al. 2013](https://doi.org/10.1073/pnas.1302226110)); ivory dated after the 1989 ban is evidence. The technique exists; the systematic application to seizure records doesn't.

**I14. Night-lights → outages, conflict, informal economy.** VIIRS night-time imagery tracks power outages and economic activity where statistics are missing.

**I15. Aircraft transponders → winds and turbulence.** ADS-B/Mode-S data on [OpenSky](https://opensky-network.org) yields wind fields (KNMI does this) and turbulence maps; also GNSS jamming (see [GPSJam](https://gpsjam.org)).

**I16. Solar-inverter output → cloud and irradiance maps.** [PVOutput](https://pvoutput.org) and similar hold millions of rooftop-solar time series; they are a dense irradiance sensor network nobody treats as one.

**I17. Fitness-app traces → informal paths and park use.** Desire lines for planners, from Strava-style heatmaps. Aggregate only.

**I18. Muons → imaging.** Cosmic-ray muons imaged hidden chambers in the pyramids; the same detectors ([CosmicWatch](http://www.cosmicwatch.lns.mit.edu)) image volcano interiors and cargo containers.

**I19. Church, tax and tithe records → harvests and climate.** Wine-harvest dates in Burgundy reconstruct summer temperature since 1354; hearth-tax rolls give population. Most such series remain in archives.

## J. Sequencing and biomedical archives

**J1. SRA/ENA sweeps.** [Serratus](https://serratus.io) found 130k new RNA viruses; [Logan](https://github.com/IndexThePlanet/Logan) assembled all of the Sequence Read Archive. Remaining: novel CRISPR systems, antibiotic biosynthetic clusters, giant viruses, and contamination/mislabeling audits (wrong species, wrong sex, cell-line cross-contamination). Mislabeling is checkable from the reads.

**J2. Restoring invisible trials.** Half of trials never publish; results exist in FDA approval packages ([Drugs@FDA](https://www.accessdata.fda.gov/scripts/cder/daf/)), EMA clinical data, and data-sharing portals. [RIAT](https://restoringtrials.org) did a handful by hand.

**J3. Adverse-event backtesting.** [openFDA](https://open.fda.gov) exposes FAERS. Freeze a signal detector on data to year N, score it against label changes and withdrawals in N+1..N+5, then run forward.

**J4. Hospital price files.** Every US hospital must post machine-readable prices; the files are deliberately unusable. [Dolthub](https://www.dolthub.com/repositories/dolthub/hospital-price-transparency) and [Turquoise](https://turquoise.health) have partial parses. Deliverable: one national table with a verified sample (call the billing office).

**J5. Image-archive audits.** [EMPIAR](https://www.ebi.ac.uk/empiar/), [IDR](https://idr.openmicroscopy.org), Human Protein Atlas for mislabeled or duplicated images; [PDB-REDO](https://pdb-redo.eu) covers geometry, not misassigned ligands.

**J6. Antimicrobial resistance from public isolates.** [NCBI Pathogen Detection](https://www.ncbi.nlm.nih.gov/pathogens/) (over a million isolates with resistance genes, dates, locations); Pfizer's ATLAS via [Vivli](https://amr.vivli.org). Spread maps, cross-hospital outbreak detection, gaps versus WHO GLASS.

**J7. Wastewater epidemiology methods.** [WastewaterSCAN](https://data.wastewaterscan.org) and CDC NWSS; site normalisation and variant deconvolution are live methods problems, backtestable against case data.

**J8. Drug-shortage prediction.** [FDA shortage list](https://www.accessdata.fda.gov/scripts/drugshortages/) plus [warning letters](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters), inspection reports via FOIA, and the number of manufacturers per active ingredient. Predict which sterile injectable goes short next; hospitals would use it. Backtestable.

**J9. Inspection-report clustering.** FDA Form 483s and EU inspection reports describe recurring plant failures in free text; cluster by facility over time.

**J10. Food-safety alert prediction.** [RASFF](https://webgate.ec.europa.eu/rasff-window/screen/search) (EU), FDA recalls, USDA pesticide-residue data. Predict the next product/origin alert; backtest.

**J11. Animal-disease early signals.** [ProMED](https://promedmail.org) (30 years of curated outbreak reports) versus official [WAHIS](https://wahis.woah.org) reporting: what preceded major outbreaks, and what the official system missed.

## K. Records that could be linked but aren't (investigative layer)

**K1. Procurement anomaly detection.** [EU TED](https://ted.europa.eu), [USAspending](https://www.usaspending.gov), [UK Contracts Finder](https://www.contractsfinder.service.gov.uk), [ProZorro](https://prozorro.gov.ua). Bid-rigging fingerprints: single-bidder tenders, price rotation, identical typos across "competing" bids, winners incorporated the week before. Output goes to journalists with documents attached.

**K2. Company-registry networks.** [Companies House bulk data](https://download.companieshouse.gov.uk), [OpenCorporates](https://opencorporates.com), [ICIJ Offshore Leaks](https://offshoreleaks.icij.org). Disqualified directors still directing, shared addresses across thousands of shells, ownership loops.

**K3. Model-bill fingerprinting.** [Copy, Paste, Legislate](https://publicintegrity.org/topics/politics/copy-paste-legislate/) matched lobbyist model bills to state laws once in 2019. Run continuously across all states, the EU and Westminster, with lobbying-disclosure filings attached.

**K4. Judicial conflicts.** The [WSJ found 131 federal judges](https://www.wsj.com/articles/131-federal-judges-broke-the-law-by-hearing-cases-where-they-had-a-financial-interest-11632834421) ruling on cases involving their holdings; [CourtListener](https://www.courtlistener.com/financial-disclosures/) hosts disclosures. Extend to state courts and arbitrators.

**K5. Charity self-dealing.** Every Form 990 is on [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/): related-party transactions, pay outliers, grants to entities sharing a board. Checkable against later IRS revocations.

**K6. Unidentified remains vs missing persons.** [NamUs](https://www.namus.gov) lists ~14,000 unidentified bodies; matching has been DNA-driven, but text and metadata (tattoos, dental, clothing, timeline) were never cross-searched at scale.

**K7. Slave-trade record linkage.** [SlaveVoyages](https://www.slavevoyages.org), [Freedom on the Move](https://freedomonthemove.org), [Enslaved.org](https://enslaved.org), plantation ledgers. Reconstruct individual lives across sources.

**K8. Unenforced judgments and wage theft.** [DOL enforcement data](https://enforcedata.dol.gov), state labour boards: who never paid, who reincorporated to dodge it.

**K9. FOIA archaeology.** Agencies publish FOIA logs (what was requested) and reading rooms (what was posted). Mine logs for records released to one requester but never posted, then request them via [MuckRock](https://www.muckrock.com).

**K10. Wildlife-trade discrepancies.** The [CITES Trade Database](https://trade.cites.org) records both exporter- and importer-reported shipments; systematic mismatches (e.g., "captive-bred" exports from countries with no breeding facilities) indicate laundering. Applied by hand to single species, never across all 40k listed taxa.

**K11. Coded-language wildlife marketplaces.** Sellers use euphemisms ("ox bone" for ivory). The [Coalition to End Wildlife Trafficking Online](https://www.endwildlifetraffickingonline.org) relies on volunteer spotters. Scoreable by takedown rate.

**K12. Seizure-record networks.** [TRAFFIC's Wildlife Trade Portal](https://www.wildlifetradeportal.org) holds thousands of seizures from press reports; link into trafficker networks by courier, route, concealment method.

**K13. RFMO (Regional Fisheries Management Organisation) paperwork.** Tuna commissions publish compliance reports and vessel lists as PDFs; the [combined IUU vessel list](https://iuu-vessels.org) is the tip. Cross-reference flag, owner and name changes to find vessels laundering identity. [Global Fishing Watch](https://globalfishingwatch.org) covers the satellite side.

**K14. Catch reconstruction vs trade.** [Sea Around Us](https://www.seaaroundus.org) reconstructs true catch; UN Comtrade has trade. Exporting more of a species than plausibly caught is checkable.

**K15. Politician promise and position tracker.** Automated, cross-country, every claim hyperlinked to a primary source; [PolitiFact](https://www.politifact.com) and [Full Fact](https://fullfact.org) manual trackers are the backtest. Will be received as partisan by whoever scores worst; include with eyes open.

**K16. Aid-project failure prediction.** Every World Bank project has a completion report and an IEG rating ([documents.worldbank.org](https://documents.worldbank.org), [IEG](https://ieg.worldbankgroup.org)); [IATI](https://iatistandard.org) has donor transactions. What predicts failure has only been studied in samples.

**K17. Discredited forensics in standing convictions.** The [National Registry of Exonerations](https://www.law.umich.edu/special/exoneration) tags contributing factors; appellate opinions are text. Find convictions resting on bite marks, hair microscopy or discredited shaken-baby criteria, with a human review layer. [US Sentencing Commission](https://www.ussc.gov/research/datafiles/commission-datafiles) data for disparity work.

**K18. Expungement and eligibility engines.** Per-state expungement eligibility verified against statute; the [Collateral Consequences Resource Center](https://ccresourcecenter.org) maintains the legal map.

## L. Improving documents, with adoption as the verifier

Most consultation documents got a week of a tired analyst's time. Some venues have a built-in scoreboard: the comment is adopted or it isn't.

**L1. Proposed federal rules.** [regulations.gov](https://www.regulations.gov). Final rules must respond to substantive comments, so adoption is measurable. Target: cost-benefit arithmetic that doesn't add up, definitions conflicting with the enabling statute, impossible compliance timelines, references to superseded sections, and smarter trade-offs the drafter missed.

**L2. Environmental impact statements.** [EPA's EIS database](https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search): model-input errors, inconsistent baselines, alternatives dismissed on wrong arithmetic.

**L3. Standards errata.** The [RFC Editor](https://www.rfc-editor.org/errata.php) formally accepts errata; [Ethereum EIPs](https://eips.ethereum.org), Bitcoin BIPs, W3C specs. Spec ambiguities that produce implementation divergence (B11) are the richest vein.

**L4. Local planning consultations.** UK planning portals, US municipal agendas: proposals conflicting with the authority's own adopted plan; missed Pareto improvements.

**L5. Dead and inconsistent statutory cross-references.** [US Code](https://uscode.house.gov), CFR, [legislation.gov.uk](https://www.legislation.gov.uk), EU regulations: references to repealed sections, circular definitions, the same term defined differently across a code. Mechanical verifier.

**L6. Patent prior-art hunting.** [Unified Patents](https://www.unifiedpatents.com) runs cash bounties; PTAB outcomes are the verifier.

**L7. Improper Orange Book listings.** The [FTC challenged 100+ patent listings](https://www.ftc.gov/news-events/news/press-releases/2023/11/ftc-challenges-more-100-patents-improperly-listed-fdas-orange-book) that delay generics; the listing criteria are statutory and checkable.

## M. Software

### M1. Tools that unlock the archives

**M1a. Open handwritten-text recognition for historical hands.** [Transkribus](https://www.transkribus.org) is closed, paid and mediocre on Kurrent, secretary hand, early Arabic, Ethiopic, Devanagari. This one tool unlocks sections C and D. Verifier: character error rate on published ground truth.

**M1b. Optical music recognition.** [IMSLP](https://imslp.org) has ~700k scores as images; [Audiveris](https://github.com/Audiveris/audiveris) is the open tool and nobody uses it. Verifier: alignment with recordings.

**M1c. Table extraction from statistical yearbooks and old census volumes.** Economic history is bottlenecked on this.

**M1d. Speech recognition for dysarthric and accented speech and unserved languages.** [Project Euphonia](https://sites.research.google/euphonia/) collected data; open models are far behind. Word-error rate is the verifier.

**M1e. Geo-referencing at scale.** [MapReader](https://github.com/maps-as-data/MapReader) for maps; photo-viewpoint matching for D6 and E11.

### M2. Open replacements in professional niches (incumbent → open state → how a developer proves it's better)

**M2a. Structural analysis.** Incumbents: ETABS/SAP2000 ([CSI](https://www.csiamerica.com)), RISA, Tekla. Open: [OpenSees](https://opensees.berkeley.edu) (research, no GUI), [Code_Aster](https://code-aster.org), [CalculiX](http://www.calculix.de). Proof: CSI publishes verification manuals; pass every case, then pass the [NAFEMS benchmarks](https://www.nafems.org) and the [AISC design examples](https://www.aisc.org) for code checking, which is what practitioners actually pay for.

**M2b. River and flood hydraulics.** Incumbent: [HEC-RAS](https://www.hec.usace.army.mil/software/hec-ras/) (free but closed, Windows-only, the basis of US flood maps), [MIKE](https://www.mikepoweredbydhi.com), [TUFLOW](https://www.tuflow.com). Open: [SWMM](https://www.epa.gov/water-research/storm-water-management-model-swmm) for urban drainage; nothing for HEC-RAS. Proof: identical results on HEC's own example projects, then run on Linux and in the cloud, which HEC-RAS can't.

**M2c. Regulated statistics.** Incumbents: SAS, SPSS, Stata, Prism. Open: R, [jamovi](https://www.jamovi.org), [JASP](https://jasp-stats.org). SAS's grip on pharma is validation, not features. Proof: packages validated to FDA-submission standards via the [R Validation Hub](https://www.pharmar.org) and [pharmaverse](https://pharmaverse.org); reproduce a published FDA submission's tables.

**M2d. Legal e-discovery.** Incumbents: [Relativity](https://www.relativity.com), Everlaw. Open: OCCRP's [Aleph](https://aleph.occrp.org) (investigative, not litigation-grade). Proof: recall/precision on the public [EDRM Enron set](https://edrm.net) under TREC Legal Track protocols.

**M2e. Augmentative and alternative communication (AAC).** Incumbents: Tobii Dynavox, Proloquo2Go. Open: [Cboard](https://www.cboard.io), [OptiKey](https://www.optikey.org). Proof: words-per-minute and error rate with real users; budget the human time.

**M2f. Mechanical CAD.** Incumbents: SolidWorks, Inventor, Fusion. Open: [FreeCAD](https://www.freecad.org) (1.0 in 2024 fixed the worst), OpenSCAD. Gaps: assemblies, drawings, fillet robustness. Proof: model a benchmark set of real parts and measure time-to-model and failure rate against the incumbent.

**M2g. Electronics and chip design.** Incumbents: Altium, Cadence. Open: [KiCad](https://www.kicad.org) (good), [OpenROAD](https://theopenroadproject.org) for chips, [openEMS](https://www.openems.de) for RF. Proof: tape-out-tested reference designs; measured vs simulated S-parameters on published RF test structures.

**M2h. Finite-element and CFD.** Incumbents: Ansys, Abaqus, Fluent, STAR-CCM. Open: [CalculiX](http://www.calculix.de), [Elmer](https://www.csc.fi/elmer), [OpenFOAM](https://www.openfoam.com) (capable, brutal to use). The gap is meshing and usability. Proof: NAFEMS and [NASA turbulence-modelling](https://turbmodels.larc.nasa.gov) validation cases, then a timed usability study.

**M2i. Chemical process simulation.** Incumbents: Aspen Plus, HYSYS. Open: [DWSIM](https://dwsim.org). Proof: published flowsheet cases.

**M2j. Optical design.** Incumbents: [Zemax OpticStudio](https://www.ansys.com/products/optics/ansys-zemax-opticstudio), Code V. Open: [ray-optics](https://github.com/mjhoptics/ray-optics) and a few small projects; a real gap. Proof: reproduce merit functions on Zemax sample files and published patent lens prescriptions.

**M2k. Room acoustics.** Incumbents: Odeon, EASE. Open: [I-Simpa](https://i-simpa.ifsttar.fr), [pyroomacoustics](https://github.com/LCAV/pyroomacoustics). Proof: round-robin datasets of measured reverberation times.

**M2l. Power-system analysis.** Incumbents: PSS/E, PowerFactory. Open: [pandapower](https://www.pandapower.org), [PyPSA](https://pypsa.org), [OpenDSS](https://sourceforge.net/projects/electricdss/). Already decent. Proof: [IEEE test feeders](https://cmte.ieee.org/pes-testfeeders/).

**M2m. Transport modelling.** Incumbents: VISSIM, Cube, EMME. Open: [SUMO](https://eclipse.dev/sumo/), [MATSim](https://www.matsim.org), [AequilibraE](https://www.aequilibrae.com). Proof: calibrate to real counts on a published city dataset.

**M2n. Civil road/rail alignment design.** Incumbent: Civil 3D. Open: nothing usable. Proof: published alignment design examples to code.

**M2o. Photogrammetry.** Incumbents: Metashape, RealityCapture. Open: [Meshroom](https://alicevision.org), [OpenDroneMap](https://www.opendronemap.org). Proof: [ISPRS benchmark](https://www.isprs.org) accuracy.

**M2p. NMR and mass-spec processing.** Incumbents: [MestReNova](https://mestrelab.com), TopSpin, vendor software. Open: [NMRium](https://www.nmrium.org), [nmrglue](https://www.nmrglue.com), [OpenMS](https://openms.de), [MZmine](https://mzmine.github.io). Proof: identical peak lists on the same raw files.

**M2q. Music notation.** Incumbents: Sibelius, Finale ([discontinued 2024](https://www.finalemusic.com)). Open: [MuseScore](https://musescore.org) is already close. Proof: engraving test suite against Gould's _Behind Bars_ rules.

**M2r. Hearing-aid fitting.** Every manufacturer's fitting software is proprietary. Open: [openMHA](https://www.openmha.org). Proof: standard audiological test batteries.

**M2s. Small-business accounting and payroll.** Incumbents: QuickBooks, Xero, Sage. Open: [GnuCash](https://www.gnucash.org), [ERPNext](https://erpnext.com). Proof: pass the tax authority's test filings and bank reconciliation on real data.

**M2t. Seismic interpretation.** Incumbent: Petrel. Open: [OpendTect](https://www.dgbes.com/software/opendtect). Needed for G1.

_Guard against slop:_ every replacement ships with the incumbent's verification cases passing, a documented workflow a practitioner has actually used for a real job, and a maintainer who commits to a year.

### M3. Legacy and orphaned software

**M3a. Critical software stuck on Windows XP.** Lab-instrument control (mass specs, chromatographs on XP boxes kept in a corner), older CNC controllers, radio programming, hospital and library admin systems, engineering codes from the 1990s. Approach: port or reimplement, verified by identical outputs on archived input/output pairs; [Wine](https://www.winehq.org) and [ReactOS](https://reactos.org) as compatibility fallbacks. HEC-RAS (M2b) is the flagship example. [CHIRP](https://chirpmyradio.com) shows the model for radio programming.

**M3b. Matching decompilation.** Recover source for abandoned software and firmware; [decomp.me](https://decomp.me) is the community tool. Verifier: recompiles to the identical binary.

**M3c. Dead file formats.** The [PRONOM registry](https://www.nationalarchives.gov.uk/PRONOM/) lists formats with no living reader. Verifier: round-trip sample files.

**M3d. Linux drivers for orphaned hardware.** Verifier: it works.

**M3e. Emulation for preservation.** The [Internet Archive](https://archive.org/details/software) maintains want-lists.

## N. Niche fields with public data and few analysts

**N1. Microplastics harmonisation.** Thousands of papers in incompatible units and methods. Extend NOAA's [Marine Microplastics database](https://www.ncei.noaa.gov/products/microplastics) with method metadata; publish method-corrected trends. Improve polymer spectral matching in [Open Specy](https://www.openanalysis.org/openspecy/).

**N2. Soil spectroscopy.** [Open Soil Spectral Library](https://soilspectroscopy.org): model improvements scoreable against lab values.

**N3. Driller's logs → 3D aquifers.** California's ~1M [well completion reports](https://data.ca.gov/dataset/well-completion-reports), Australia's [Groundwater Explorer](http://www.bom.gov.au/water/groundwater/explorer/). Free-text lithology ("brn clay w/ gravel 40–65 ft") parsed into stratigraphy. Verifier: professionally logged wells.

**N4. Consumer-product injuries → recall prediction.** People report injuries and near-misses to [SaferProducts.gov](https://www.saferproducts.gov); ER visits are coded in [NEISS](https://www.cpsc.gov/Research--Statistics/NEISS-Injury-Data). Learn which report patterns preceded past recalls, apply to current reports, publish which products look due for recall.

**N5. Car complaints → recall prediction.** Same structure with [NHTSA complaints](https://www.nhtsa.gov/nhtsa-datasets-and-apis) as input and recalls as ground truth. In plain terms: people complain about brakes failing; months later the model is recalled; learn the pattern; flag the next one early.

**N6. Dangerous road design.** FARS fatality records plus OpenStreetMap geometry: which intersection and road designs kill, controlled for traffic volume. Output: a ranked list for engineers.

**N7. Aviation precursors.** [ASRS](https://asrs.arc.nasa.gov) (~2M anonymous pilot narratives), FAA [Service Difficulty Reports](https://sdrs.faa.gov) (part-level failures), NTSB's [CAROL](https://data.ntsb.gov/carol-main-public/basic-search). Predict which part numbers get an airworthiness directive.

**N8. Pipelines and dams.** [PHMSA incident narratives](https://www.phmsa.dot.gov/data-and-statistics/pipeline/pipeline-incident-20-year-trends); the [National Inventory of Dams](https://nid.sec.usace.army.mil) (~90k dams, patchy condition data). Combine with E6/E7 and downstream population to rank inspection priority.

**N9. Drinking water.** [SDWIS](https://www.epa.gov/enviro/sdwis-search) violations, [ECHO](https://echo.epa.gov) enforcement, UCMR5 PFAS results, thousands of PDF consumer-confidence reports. Serial violators with no enforcement; reports contradicting the official record.

**N10. Chemical dossier audits.** [ECHA](https://echa.europa.eu/information-on-chemicals) holds dossiers for 20k+ substances; many toxicity claims rest on weak "read-across" from a different chemical. Audit against [CompTox](https://comptox.epa.gov/dashboard) data. This is what regulators lack staff for.

**N11. Nuclear plant precursors.** NRC's [ADAMS](https://adams.nrc.gov/wba/) (millions of public documents) and [Licensee Event Reports](https://lersearch.inl.gov). Precursor analysis at scale.

**N12. Particle-physics reanalysis.** [CERN Open Data](https://opendata.cern.ch) releases petabytes; reproduce published results first, then search where the collaborations didn't.

**N13. Occupational safety.** [OSHA accident narratives](https://www.osha.gov/ords/imis/accidentsearch.html), [MSHA data](https://www.msha.gov/data-and-reports). Predict fatal-accident risk by employer and site; output is an inspection list.

**N14. Grid interconnection queues.** [Berkeley Lab queue data](https://emp.lbl.gov/queues) (~2 TW waiting, most withdrawing), [ENTSO-E transparency](https://transparency.entsoe.eu). Predict withdrawals; build open power-flow models of real grids from OSM line data.

**N15. Elections infrastructure.** [OpenElections](https://openelections.net) still lacks precinct results for many states because they are PDFs or scans.

**N16. Bird strikes.** [FAA wildlife strike database](https://wildlife.faa.gov) plus airport land use plus eBird migration: strike risk by airport and week, which changes mowing schedules.

**N17. Endangered-language recordings.** [ELAR](https://www.elararchive.org), [PARADISEC](https://www.paradisec.org.au): thousands of hours never transcribed. Transcription plus speaker verification (budgeted).

**N18. Ethnomusicology archives.** [British Library Sounds](https://sounds.bl.uk), the [Lomax archive](https://research.culturalequity.org), Smithsonian Folkways: unidentified recordings, tune families across cultures.

**N19. Bioacoustics on land.** [xeno-canto](https://xeno-canto.org), Macaulay Library, [AudioMoth](https://www.openacousticdevices.info) recordings of bats with no processing network.

**N20. Accessibility at scale.** [Project Sidewalk](https://projectsidewalk.org) curb ramps from street imagery; ~100M Wikimedia Commons images without alt text; every scanned government PDF inaccessible until OCR'd and tagged.

**N21. Measurement reconciliation across fields.** Physics has CODATA and the Particle Data Group to reconcile discrepant measurements (neutron lifetime, Hubble constant). Nobody does it for global insect biomass, soil carbon stocks, ocean plastic mass, groundwater depletion, each measured by three or four fields with incompatible methods. Build the standing reconciliation, discrepancies published.

**N22. Lost media.** [Lost Media Wiki](https://lostmediawiki.com) want-lists against millions of hours of archived radio and TV at the Internet Archive; the "most mysterious song" was identified in 2024 after 17 years.

**N23. Cipher cold cases with verifiable plaintext.** Zodiac Z13/Z32 ([Z340 fell in 2020](https://en.wikipedia.org/wiki/Zodiac_Killer#Ciphers) to hobbyists), the McCormick notes, Dorabella, Beale. Plaintext is self-verifying.

## O. Hardware you already own, plus an agent

Control layers exist: [ASCOM](https://ascom-standards.org)/[INDI](https://indilib.org) and schedulers like [N.I.N.A.](https://nighttime-imaging.eu) for telescopes; smart scopes like the [Seestar](https://www.zwoastro.com/product/seestar-s50/); [RTL-SDR](https://www.rtl-sdr.com) dongles; Raspberry Pi. The missing software is a dispatcher (science request → observation plan), a reduction pipeline, and a submitter to the right archive.

**Telescopes**

- **O1. NEO confirmation follow-up.** The [MPC NEO Confirmation Page](https://minorplanetcenter.net/iau/NEO/toconfirm_tabular.html) lists new asteroids that will be lost without re-observation within days. Agent reads it, picks reachable targets, images, submits astrometry; MPC residuals score you. [Unistellar](https://science.unistellar.com) runs a closed version.
- **O2. Exoplanet ephemerides.** [ExoClock](https://www.exoclock.space) keeps transit times current for ESA's Ariel mission using hobby scopes.
- **O3. Asteroid occultations.** [IOTA](https://occultations.org) and [OccultWatcher](https://www.occultwatcher.net) predict shadow tracks; timed light curves give shapes. The bottleneck is people awake at 3 a.m.
- **O4. Transient follow-up.** Subscribe to Rubin alert brokers ([ALeRCE](https://alerce.science), [Fink](https://fink-broker.org)); observe what your aperture can reach; submit to [AAVSO](https://www.aavso.org).
- **O5. Debris light curves and reentry tracking.** Optical observations in the last orbits sharpen predictions from [Space-Track](https://www.space-track.org)/[CelesTrak](https://celestrak.org); tumbling rates of dead satellites inform debris-removal planning; all-sky streak counts quantify constellation impact on astronomy.
- **O6. Lunar and Jupiter impact flashes.** [NELIOTA](https://neliota.astro.noa.gr) has one telescope in Greece; more longitudes multiply coverage.
- **O7. Rented time.** [iTelescope](https://www.itelescope.net), [Las Cumbres](https://lco.global), Telescope Live sell time by the minute; no hardware needed.

**Sky cameras**

- **O8. Meteor network gaps.** [Global Meteor Network](https://globalmeteornetwork.org) has ~1,000 Pi cameras and none across much of Africa, Asia and South America.
- **O9. Sprites, noctilucent clouds, aurora.** No calibrated network; noctilucent cloud frequency is a mesospheric climate indicator.
- **O10. Sky brightness time series.** [Globe at Night](https://globeatnight.org) gives points; calibrated all-sky cameras give continuous light-pollution data for lighting ordinances.

**Software-defined radio**

- **O11. Ionosphere and flares.** [HamSCI](https://hamsci.org) Grape stations and Stanford's [SID monitors](https://solar-center.stanford.edu/SID/).
- **O12. Solar and Jupiter radio.** [e-CALLISTO](https://www.e-callisto.org), [Radio JOVE](https://radiojove.gsfc.nasa.gov).
- **O13. Meteor scatter.** [BRAMS](https://brams.aeronomie.be), [RMOB](https://www.rmob.org): radio counts work in daylight and cloud; cross-reference with optical.
- **O14. Spectrum occupancy and interference.** Regulators have little ground truth; periodic scans plus [KrakenSDR](https://www.krakenrf.com) direction-finding of interference sources (receive only).
- **O15. Ground-truth GNSS jamming.** [GPSJam](https://gpsjam.org) infers from aircraft; ground receivers see it at ports and highways.
- **O16. Satellite ground stations.** [SatNOGS](https://satnogs.org) is the model for the whole genre; gaps are geographic and in decoders.

**GNSS receivers**

- **O17. Water vapour for nowcasting.** Tropospheric delay → precipitable water; density limits usefulness for storms.
- **O18. Snow and soil moisture by reflectometry.** [GNSS-IR](https://gnss-reflections.org) turns any fixed antenna into a snow-depth sensor.

**Ground sensors**

- **O19. Infrasound.** [Raspberry Boom](https://raspberryshake.org): bolides, eruptions, avalanches, explosions; the international monitoring data isn't public.
- **O20. Magnetometers.** Hobby fluxgates for geomagnetically induced currents; calibration is the hard part.
- **O21. Cosmic-ray flux.** [CosmicWatch](http://www.cosmicwatch.lns.mit.edu) network as a check on a shrinking neutron-monitor network.
- **O22. Radon map.** [Airthings](https://www.airthings.com)-class detectors are common; radon maps are coarse; opt-in map by geology and building type.
- **O23. Radiation.** [Safecast](https://safecast.org) is under-maintained.
- **O24. Power quality and rooftop irradiance.** Household voltage quality is unmapped; [PVOutput](https://pvoutput.org) is a dense irradiance network.

**Cameras on Earth**

- **O25. Public webcams as instruments.** [Windy](https://www.windy.com/webcams), EarthCam, [explore.org](https://explore.org): glacier termini, volcanoes, harbours, snowlines, bird colonies. Extract a daily number; old frames verify. Nature and infrastructure only.
- **O26. Phenology.** [PhenoCam](https://phenocam.nau.edu) method on any garden webcam; global gaps are enormous.
- **O27. Rivers.** [CrowdWater](https://crowdwater.ch) plus a fixed camera gives a continuous gauge on ungauged streams.
- **O28. Coastlines.** [CoastSnap](https://www.coastsnap.com) with permanent cameras.
- **O29. Street counts.** [Telraam](https://telraam.net) outside Belgium and the Netherlands.
- **O30. Automated pollen station.** Sticky tape plus an [OpenFlexure](https://openflexure.org) microscope plus grain classification, for a few hundred dollars; verify against the official station.
- **O31. Plankton and diatoms.** Same microscope on water samples; diatom assemblages are a standard water-quality index.
- **O32. Insects and moths.** UKCEH's AMI light-trap camera and Dutch Diopsis are institutional; open versions with agent ID put insect monitoring in backyards.
- **O33. Birds and bats by sound.** [BirdWeather](https://www.birdweather.com) exists; bats via [AudioMoth](https://www.openacousticdevices.info) have no equivalent.
- **O34. Nest boxes and hives.** Clutch size, fledging success, colony health from cameras and scales; feed a scientific archive.

**Vehicles and phones**

- **O35. Road condition.** Dashcams and accelerometers for potholes, signs, streetlights.
- **O36. Bridge modes from cars.** Crowdsourced accelerometer data recovers bridge natural frequencies; a real technique deployed almost nowhere.
- **O37. Mobile air quality.** Bike- and car-mounted sensors with agent-run calibration against reference monitors.

**Ocean, dock-mounted**

- **O38. Hydrophones and wave sensors.** Dock hydrophones for ship noise and marine mammals; [Sofar Spotter](https://www.sofarocean.com) buoys for a club.

**O39. The dispatcher (meta-project).** A registry of instruments, a queue of science needs (NEOCP, occultations, broker alerts, reentry windows, webcam watches), and an agent per instrument that plans, executes, reduces, checks and submits. SatNOGS did it for one instrument type.

## P. Appendix: small open problems with checkable certificates (lower priority)

Kept for completeness; real-world impact is indirect. The [bbchallenge](https://bbchallenge.org) community (amateurs, Coq-verified, BB(5) settled 2024) is the organisational template.

- [Costas arrays](https://en.wikipedia.org/wiki/Costas_array) of order 32 and 33 (existence unknown). Real use: radar and sonar waveforms.
- [Hadamard matrix](https://en.wikipedia.org/wiki/Hadamard_matrix) of order 668, smallest unknown. Real use: error-correcting codes.
- [Heesch numbers](https://en.wikipedia.org/wiki/Heesch%27s_problem) beyond 6.
- BB(6) and its cryptids on [bbchallenge](https://bbchallenge.org).
- [Graffiti](<https://en.wikipedia.org/wiki/Graffiti_(program)>) machine-generated graph-theory conjectures, hundreds unresolved.
- Record tables: [Friedman's Packing Center](https://erich-friedman.github.io/packing/), [La Jolla Covering Repository](https://ljcr.dmgordon.org), Golomb rulers, van der Waerden numbers, kissing numbers in dimensions 5–7, the Lebesgue universal covering, chromatic number of the plane. Every improvement is a construction anyone can check.
- Combinatorial game positions (Hex, Go variants) with proof-number search and Lean certificates.

## Q. Reference: declassified and historical imagery sources

- CORONA (1960–72, ~860k frames), KH-7 GAMBIT, KH-9 HEXAGON: [USGS EarthExplorer](https://earthexplorer.usgs.gov). [CORONA Atlas](https://corona.cast.uark.edu) for the Middle East.
- U-2 photography (1950s–60s), used for archaeology by [Hammer & Ur 2019](https://doi.org/10.1017/aap.2018.38); mostly at NARA.
- [Landsat](https://www.usgs.gov/landsat-missions) back to 1972, free.
- SPOT 1986–2015 released free under CNES's [SPOT World Heritage](https://www.theia-land.fr/en/product/spot-world-heritage/).
- 1960s Nimbus satellite imagery rescued at [NSIDC](https://nsidc.org/data/nimbus) (sea ice 1964–72).
- [Soviet military maps](https://en.wikipedia.org/wiki/Soviet_military_mapping) at 1:10,000 for cities worldwide, extraordinary detail, mostly undigitised.
- Historical aerial: [NCAP](https://ncap.org.uk), USGS aerials via EarthExplorer, [IWM](https://www.iwm.org.uk).

## S. Women's health, hormones and wearables

The big consumer datasets (Clue, Natural Cycles, Oura, WHOOP, Apple's Women's Health Study) are private. Work with the public cohorts and the regulatory databases, and fix the measurement layer.

**Public data:** [NHANES](https://www.cdc.gov/nchs/nhanes/) (accelerometry, ferritin, sex-hormone assays, reproductive questionnaires); [UK Biobank](https://www.ukbiobank.ac.uk) (100k with accelerometry and hormones; application); [All of Us](https://www.researchallofus.org) (Fitbit data linked to surveys; registered); [National Sleep Research Resource](https://sleepdata.org) (thousands of overnight sleep studies); [SWAN](https://www.icpsr.umich.edu/web/ICPSR/series/253) (3,000 women through menopause, 25 years of FSH/estradiol; public-use); [Capture-24](https://github.com/OxWearables/capture24) (camera-verified activity labels); [Awesome-CGM](https://github.com/IrinaStatsLab/Awesome-CGM); [FAERS](https://open.fda.gov); [MAUDE](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm); [Drug Trials Snapshots](https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshots).

**S1. Sex-stratified adverse-drug-event signals.** Women have ~1.5× the adverse-event rate of men; the FDA halved zolpidem doses for women only in [2013](https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-risk-next-morning-impairment-after-use-insomnia-drugs-fda-requires-lower-recommended-doses-certain-drugs). Run FAERS signal detection by sex, backtest against label changes, publish the unlabelled female signals.

**S2. Device adverse-event early warning.** MAUDE holds the mesh, Essure and breast-implant histories in free text years before regulatory action. Backtest against later recalls.

**S3. Trial representation tracker.** Female, pregnant and over-65 enrolment per condition versus prevalence, continuously from ClinicalTrials.gov results.

**S4. Sex-specific normative ranges for wearable metrics.** Resting heart rate, HRV, sleep architecture, step counts by sex, age, cycle phase and menopausal status from NHANES, NSRR and All of Us. Verifier: cross-cohort replication.

**S5. Cycle-phase physiology, independently replicated.** Replicate the Oura/Natural Cycles temperature, HRV and sleep claims on All of Us Fitbit data with survey-reported cycles.

**S6. Predicting the final menstrual period from hormone trajectories.** SWAN data; open re-analysis with held-out validation.

**S7. Iron-deficiency thresholds.** A [2023 JAMA re-analysis](https://doi.org/10.1001/jama.2023.8020) of NHANES found ~40% of adolescent girls and young women deficient depending on the ferritin cut-off. Public, re-analysable, high stakes.

**S8. Estradiol immunoassay bias.** Immunoassays are inaccurate at low estradiol levels; mass spectrometry is the reference ([CDC standardisation](https://www.cdc.gov/labstandards/hs.html)). Meta-analyse every published method comparison into correction factors by assay.

**S9. Benchmark wearable algorithms against camera ground truth.** Capture-24 plus raw data pulled from consumer devices via [Gadgetbridge](https://gadgetbridge.org); publish where sleep and step algorithms fail, by sex and body type.

**S10. Period-tracker privacy audit.** Capture and document each app's network traffic; Mozilla's _Privacy Not Included_ did it once by hand.

## T. Open hardware an agent could plausibly design

**Why now:** [KiCad](https://www.kicad.org) is scriptable; [atopile](https://atopile.io) and [tscircuit](https://tscircuit.com) are code-to-PCB; [JLCPCB](https://jlcpcb.com) assembles from a BOM; enclosures via OpenSCAD/CadQuery; open firmware stacks for ESP32/nRF52/RP2040. The agent produces schematic, layout, firmware, enclosure and test procedure.

**Rule for every entry:** a human builds it, benches it against the commercial device or a reference standard, and publishes the raw comparison. Unbuilt designs count for nothing. Criteria: simple electronics; commercial price driven by expertise, small market or regulatory moat; no implantation, no invasive sampling, no diagnostic claim; skin-contact parts from off-the-shelf medical-grade materials. Certify via [OSHWA](https://www.oshwa.org).

**Health and wellness (research/wellness grade)**

- **T1. Over-the-counter hearing aid, ~$50.** Legal in the US since 2022; commercial $200–$3,000, prescription $2–5k. [Tympan](https://tympan.org) is the open research platform; [openMHA](https://www.openmha.org) the fitting software. Verifier: ANSI S3.22 test box and real-ear measurement. Highest-impact item here.
- **T2. Continuous skin-temperature logger for cycle tracking.** Tempdrop ~$200; BOM under $15. Open ovulation-detection algorithms don't exist. Verifier: reference thermometer plus LH strips.
- **T3. Hot-flash monitor.** Sternal skin-conductance research devices cost thousands; it's a GSR circuit. Verifier: self-report concordance.
- **T4. Spirometer.** Clinical $500–2,000; a differential pressure sensor. Verifier: 3-litre calibration syringe, ATS/ERS criteria.
- **T5. Calibrated audiometer.** $2–5k commercially; calibrated DAC and headphones. Verifier: clinical audiogram.
- **T6. Child vision screener.** Photorefraction with camera and off-axis flash; the commercial Spot screener is ~$8k. Verifier: optometrist refraction. Catches amblyopia early.
- **T7. Pulse oximeter with skin-tone validation.** [FDA-acknowledged](https://www.fda.gov/medical-devices/safety-communications/pulse-oximeter-accuracy-and-limitations-fda-safety-communication) bias in dark skin; [HealthyPi](https://www.protocentral.com) is the open board. Needs a clinical partner for arterial-blood verification; research-only.
- **T8. Fall-detection pendant.** Accelerometer plus algorithm; verifier: public fall datasets and a scripted protocol.
- **T9. Pelvic-floor trainer with biofeedback.** Pressure sensor in medical-grade silicone; only with a materials and hygiene section by someone qualified.
- **T10. Validated open smartwatch firmware.** [PineTime](https://pine64.org/devices/pinetime/), [Bangle.js](https://banglejs.com); contribution is algorithms validated on Capture-24 and NSRR.

**Assistive technology**

- **T11. Eye-gaze tracker for communication.** Commercial $1,500–$10,000; [EyeWriter](http://www.eyewriter.org) proved it in 2009. Verifier: sub-degree accuracy. Home: [Makers Making Change](https://www.makersmakingchange.com).
- **T12. Refreshable braille cell.** $3–5k per 40 cells because of piezo actuators; a cheap actuator is unsolved. Ambitious; iterative design plus human prototyping.
- **T13. Switch interfaces and adaptive controllers.** Community-solved; gap is documentation and firmware.

**Instruments for other sections**

- **T14. GPS time-inserter for occultation video** (unlocks O3).
- **T15. Water-level logger**, ESP32 + pressure sensor + LoRa for ~$30 vs $400 HOBO (O27, N3).
- **T16. Sound-level meter** with published calibration; verifier: acoustic calibrator.
- **T17. Fluxgate magnetometer station** with calibration procedure (O20).
- **T18. GNSS reflectometry station** build and processing guide (O18).
- **T19. Hydrophone with preamp** (O38).
- **T20. Sun photometer** for aerosol optical depth.
- **T21. Wildlife and livestock GPS collars**; [OpenCollar](https://opencollar.io) exists and needs variants.

**Already open; contribute, don't fork:** [AirGradient](https://www.airgradient.com) (air quality), [OpenEnergyMonitor](https://openenergymonitor.org), [OpenBCI](https://openbci.com) (EEG), [OpenFlexure](https://openflexure.org), [AudioMoth](https://www.openacousticdevices.info), [Hiveeyes](https://hiveeyes.org), [e-NABLE](https://enablingthefuture.org), [OpenEarable](https://open-earable.teco.edu).

**On the Oura ring:** the electronics are ordinary; the flexible PCB, 20 mAh battery and sensor-fusion tuning are the hard parts. Poor first target. An open wristband with better-validated algorithms is a good one.

## U. Deeper dives: institutions and integrity

### U1. Law and courts

- **U1a. Open "Shepardizing."** Classify every citing sentence in the [Caselaw Access Project](https://case.law)/[CourtListener](https://www.courtlistener.com) citation graph as positive or negative treatment. Verifier: sampled comparison with KeyCite. Breaks the core paid product of the legal-research duopoly.
- **U1b. Zombie laws.** Statutes ruled unconstitutional but never repealed (e.g., sodomy laws after [Lawrence v. Texas](https://en.wikipedia.org/wiki/Lawrence_v._Texas)) still get cited. Cross-reference every state code against controlling decisions.
- **U1c. Link rot in opinions.** [Perma.cc](https://perma.cc) found about half the links in Supreme Court opinions dead. Archive every URL in every opinion and government report; reconstruct dead ones from the Wayback Machine.
- **U1d. Court forms as code.** Suffolk's [LIT Lab](https://suffolklitlab.org) hand-builds guided interviews; every state has thousands more forms. Verifier: the court accepts the output.
- **U1e. Transcribe every public meeting.** Council, zoning, parole, school board. [Documenters](https://www.documenters.org) pays humans; an agent produces timestamped, checkable records where no reporter is left.

### U2. Mandatory financial filings nobody reads

- **U2a. Retirement-plan fees.** Every plan files a [Form 5500](https://www.efast.dol.gov); fee dispersion across identical plans is enormous and invisible to employees.
- **U2b. Insurer negotiated rates.** [Transparency in Coverage](https://www.cms.gov/priorities/key-initiatives/healthplan-price-transparency) files (terabytes, hostile formats) are the twin of hospital price files (J4); together they give the price of any procedure anywhere.
- **U2c. Ghost provider directories.** Over half of listed in-network mental-health providers are unreachable. Verify directories against licensing boards and NPI records; binary per entry.
- **U2d. Nursing-home staffing and ownership.** CMS [payroll-based staffing data](https://data.cms.gov) and inspection narratives; ownership routed through shells. Predict neglect citations; verifier is the next inspection.
- **U2e. Hospital cost reports.** [HCRIS](https://www.cms.gov/data-research/statistics-trends-and-reports/cost-reports) plus Form 990s: charity-care claims versus actual; which nonprofit hospitals sue patients.
- **U2f. Device predicate chains.** ICIJ's [Implant Files](https://www.icij.org/investigations/implant-files/) found clearance chains leading to recalled devices. Build the full graph from the [510(k) database](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm).
- **U2g. Property-tax regressivity.** [Berry's work](https://propertytaxproject.uchicago.edu) shows poor homeowners over-assessed relative to sale prices; compute the ratio for every county from public rolls and sales.
- **U2h. Municipal-bond distress.** [EMMA](https://emma.msrb.org) holds every issuer's financials; distress prediction is backtestable.
- **U2i. Wage filings.** [H-1B/PERM disclosures](https://www.dol.gov/agencies/eta/foreign-labor/performance) versus prevailing wages; [NLRB](https://www.nlrb.gov/reports/graphs-data) records against employer identities.

### U3. Institutions that hold people and animals

- **U3a. Animal-facility inspections.** [APHIS reports](https://aphis.my.site.com/PublicSearchTool/s/) on breeders, dealers, labs, zoos; predict repeat violations, link facilities across renames.
- **U3b. Slaughterhouse noncompliance.** [FSIS](https://www.fsis.usda.gov) records via FOIA; violations cluster by plant.
- **U3c. Deaths in custody.** [BJS](https://bjs.ojp.gov) data is incomplete by design; reconstruct from local news, coroners, litigation.
- **U3d. Public-housing conditions.** HUD [REAC](https://www.hud.gov/program_offices/public_indian_housing/reac) scores plus 311 and code violations predict which buildings fail next.

### U4. Civic infrastructure

- **U4a. Transit performance from open feeds.** [GTFS](https://gtfs.org) and real-time feeds for thousands of agencies ([Mobility Database](https://mobilitydatabase.org)): on-time performance, bunching, transit deserts for every city.
- **U4b. Blocked rail crossings.** FRA's [complaint portal](https://www.fra.dot.gov/blockedcrossings/) lacks evidence; a webcam plus an agent supplies it.
- **U4c. Zoning atlas.** The [National Zoning Atlas](https://www.zoningatlas.org) digitises codes by hand; agents read codes, the atlas's manual work verifies.
- **U4d. Worst homes first.** England's [EPC open data](https://epc.opendatacommunities.org), 25M+ certificates: coldest housing by area and landlord.
- **U4e. Urban heat and heat deaths.** Landsat surface temperature, [heat.gov](https://www.heat.gov) campaigns, [CDC WONDER](https://wonder.cdc.gov) mortality; where cooling centres should go.
- **U4f. Rural water points.** [Water Point Data Exchange](https://www.waterpointdata.org), 500k+ points with functionality status; predict failures. Verifier: follow-up survey.
- **U4g. Broadband truth.** FCC claims versus [Ookla open data](https://github.com/teamookla/ookla-open-data).
- **U4h. Gas leaks.** [HEET](https://heet.org) mapped Boston with a car-mounted sensor; a cheap methane sensor on a commuter car is a section-T device.

### U5. Science integrity and open science

- **U5a. Paper mills and tortured phrases.** Cabanac's [Problematic Paper Screener](https://dbrech.irit.fr/pls/) and [PubPeer](https://pubpeer.com); retractions verify.
- **U5b. Retracted papers still cited as valid.** [Retraction Watch data](https://gitlab.com/crossref/retraction-watch-data) is open via Crossref; find every guideline, review and textbook citing a retracted result without noting it.
- **U5c. Social-science outcome switching.** [AEA RCT Registry](https://www.socialscienceregistry.org) pre-registrations versus published outcomes.
- **U5d. Large-facility data reanalysis.** [ESRF](https://data.esrf.fr) and [ILL](https://data.ill.eu) publish petabytes after embargo, rarely reused.
- **U5e. Forecast-skill scoreboards.** Every weather provider's forecasts versus outcomes, every city, permanently; [ForecastWatch](https://forecastwatch.com) sells it, nobody publishes it open.
- **U5f. Exam-item bias.** [NAEP](https://nces.ed.gov/nationsreportcard/nqt/) and [PISA](https://www.oecd.org/pisa/data/) released items and microdata; differential item functioning by sex, language, region.

## V. Gaps in this list

- **Geography.** US/UK-heavy. Brazil's [Portal da Transparência](https://portaldatransparencia.gov.br), India's [data.gov.in](https://data.gov.in) and [data.europa.eu](https://data.europa.eu) host equivalents of most sources in K, L and U with far fewer analysts. Nearly every entry there has a Brazilian, Indian and EU version.
- **Closing the loop.** For investigative entries the deliverable that changes anything is a filed complaint, comment letter, FOIA request or regulator submission with documents attached, plus a public dashboard. Each entry should name the body that acts on it.
- **Slop control.** The likely failure mode is 10,000 low-quality dashboards. R1 (a verifier per entry) matters more than any single item; an entry without a verifier script shouldn't be on the list.

## W. Bureaucracy navigation: asserting entitlements people already have

The pattern: a person is owed something and the process gates on knowing the magic words, the right address and the deadline. Patrick McKenzie's [debanking letters](https://www.bitsaboutmoney.com) are the template. The gap is large: under 1% of ACA claim denials are [appealed](https://www.kff.org/private-insurance/claims-denials-and-appeals-in-aca-marketplace-plans-in-2023/); ~two-thirds of disability claims are denied initially and about half win at hearing; ~70% of UK PIP tribunal appeals succeed; ~70% of 2023–24 Medicaid disenrollments were procedural; [Dollar For](https://dollarfor.org) has erased $100M+ in hospital bills by filing charity-care forms.

**Rules:** assert only facts the person supplies; never fabricate or coach; one person, one matter, no bulk; prefer channels with case numbers (ombudsmen, formal appeals) over open complaint boxes; stay inside unauthorised-practice lines ([DoNotPay's FTC settlement](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes) is the cautionary tale; [Upsolve](https://upsolve.org) the model). Deadlines are the highest-value knowledge.

**Health**

- **W1.** Insurance denials: internal appeal → [external review](https://www.healthcare.gov/appeal-insurance-company-decision/) → state commissioner. Cite the plan's own criteria.
- **W2.** Prior-authorisation and Medicare Advantage denials.
- **W3.** Hospital discharge appeals: calling the [QIO](https://www.medicare.gov/claims-appeals) before the deadline pauses discharge.
- **W4.** Nursing-home discharges: 30-day notice and appeal rights.
- **W5.** Charity care under IRS 501(r): find the policy, check eligibility, file.
- **W6.** Surprise bills under the [No Surprises Act](https://www.cms.gov/nosurprises); request itemised bills.
- **W7.** HIPAA right of access (30 days); [OCR complaint](https://www.hhs.gov/hipaa/filing-a-complaint/index.html).

**Money**

- **W8.** Account closures and frozen funds: executive office, then the [CFPB portal](https://www.consumerfinance.gov/complaint/) (15-day response, public).
- **W9.** Unauthorised transactions (Reg E): 60 days to report; the letter states only the person's own account.
- **W10.** Card billing errors (Fair Credit Billing Act): written dispute within 60 days.
- **W11.** Credit-report errors (FCRA): 30-day investigation.
- **W12.** Debt collection: validation within 30 days; statute-of-limitations defence; file an answer (most suits default).
- **W13.** Background- and tenant-screening errors (FCRA applies).
- **W14.** Identity theft: [FTC affidavit](https://www.identitytheft.gov).
- **W15.** Unclaimed property: ~$70B in [state databases](https://unclaimed.org); finders take 10–35%.
- **W16.** Taxes: [first-time penalty abatement](https://www.irs.gov/payments/administrative-penalty-relief); CP2000 responses; [Taxpayer Advocate](https://www.taxpayeradvocate.irs.gov); property-tax appeals (U2g).

**Benefits**

- **W17.** SNAP/Medicaid/TANF procedural terminations: fair-hearing requests, short deadlines, benefits often continue if timely.
- **W18.** Social Security disability [appeals](https://www.ssa.gov/apply/appeal-decision-we-made) within 60 days; assemble the medical narrative.
- **W19.** Unemployment appeals (deadlines as short as 10 days).
- **W20.** Veterans [decision reviews](https://www.va.gov/decision-reviews/), free via accredited reps.
- **W21.** Utility shutoff protections, [LIHEAP](https://www.acf.hhs.gov/ocs/programs/liheap), PUC complaints.

**Housing**

- **W22.** Security-deposit demand letters citing the statutory penalty.
- **W23.** Written repair notices (warranty of habitability, repair-and-deduct).
- **W24.** Eviction answers: [Tenant Power Toolkit](https://tenantpowertoolkit.org), [Rentervention](https://rentervention.com), [Hello Landlord](https://hellolandlord.org) exist; every other jurisdiction is the gap.
- **W25.** Reasonable-accommodation requests (FHA/ADA).
- **W26.** UK Section 21 validity checks ([Shelter](https://england.shelter.org.uk)).

**Work and school**

- **W27.** Wage claims, final-paycheck demands, misclassification (Form SS-8).
- **W28.** ADA accommodation and FMLA requests, in writing.
- **W29.** EEOC charges within 180/300 days.
- **W30.** IDEA evaluation requests ([Wrightslaw](https://www.wrightslaw.com)).
- **W31.** Financial-aid appeals; [student-loan](https://studentaid.gov) servicer disputes; PSLF reconsideration.

**Consumer and travel**

- **W32.** EU261 and US DOT [refund rules](https://www.transportation.gov/airconsumer).
- **W33.** [FCC informal complaints](https://consumercomplaints.fcc.gov) (30-day carrier response).
- **W34.** Warranty and lemon-law demands.
- **W35.** GDPR Art. 15/22 and CCPA requests ([ICO](https://ico.org.uk)); subject access is the fastest way to learn why an institution acted.
- **W36.** Platform account terminations for legitimate businesses; only from the person's own records.

**Government and records**

- **W37.** Congressional casework: [your representative's](https://www.house.gov/representatives/find-your-representative) constituent-services staff unstick federal cases; almost unused outside the professional class.
- **W38.** USCIS inquiries and the [ombudsman](https://www.dhs.gov/cisomb); own-file FOIA. Inquiries only; filings by non-lawyers is where notario fraud lives.
- **W39.** Prison grievances: PLRA exhaustion discipline.
- **W40.** Own-records requests (police reports, FERPA, personnel files).

**Outside the US**

- **W41.** UK: [mandatory reconsideration](https://www.gov.uk/mandatory-reconsideration) → tribunal; [Financial Ombudsman](https://www.financial-ombudsman.org.uk); [POPLA](https://www.popla.co.uk); [Citizens Advice](https://www.citizensadvice.org.uk) and [Advicenow](https://www.advicenow.org.uk) templates as ground truth.
- **W42.** India: [RTI](https://rtionline.gov.in) requests and first appeals.
- **W43.** Brazil: [consumidor.gov.br](https://www.consumidor.gov.br) (10-day public company response).

**Build and verify**

- The verifier is the decision letter; publish success rates by institution and issue (Dollar For and Upsolve do).
- Build with legal-aid organisations ([Suffolk LIT Lab](https://suffolklitlab.org), LSC programmes, Citizens Advice), which hold templates, jurisdictional knowledge and UPL guardrails.
- Intake matters more than prose: eliciting the story, gathering documents, finding the deadline.
- **Shared infrastructure nobody has built:** a public, jurisdiction-by-jurisdiction table of appeal deadlines and required language, verified against statute.



---

# ChatGPT's version


## Main queue

Numbers are stable references within this draft, not rankings. The first software milestones may be small; a reliable converter covering an entire neglected format can still become a substantial engineering project. For image archives, large compute scales the search volume rather than guaranteeing a discovery.

### 1. Drowned landscapes and forgotten coastlines

The first deliverable is a mapped physical feature supported by survey evidence. Establishing its age, human occupation, or cultural identity is a later archaeological question. Regional bathymetry can reveal valleys and banks; it cannot substitute for metre-scale data when searching for small objects.

#### M001. Trace one missing piece of Doggerland’s river network

**Corpus:** [EMODnet bathymetry and high-resolution products](https://emodnet.ec.europa.eu/en/bathymetry); [Bradford: Doggerland and offshore survey evidence](https://www.bradford.ac.uk/news/archive/2022/uks-renewed-focus-on-energy-security-could-lead-to-more-archaeological-discoveries-under-the-north-sea.php).

**Access:** Public grids; industrial seismic profiles require a separate agreement.

**Parallel unit:** One high-resolution survey tile and its neighbours.

**Agent work:** Mark channel-like depressions, intersections and breaks; reconcile them with an existing published palaeolandscape map. Return only candidate additions or documented disagreements.

**Pass / useful output:** A reviewer can follow the feature across raw soundings or multiple profiles; flag interpolation seams. The accepted claim is a mapped channel candidate, not a discovered settlement.

#### M002. Find other drowned river valleys on Australia’s continental shelf

**Corpus:** [Geoscience Australia bathymetry and topography grids](https://www.ga.gov.au/scientific-topics/marine-and-coastal/seabed/ausbathytopo-grids); [NOAA / IHO bathymetry archive](https://www.ncei.noaa.gov/iho-data-centre-digital-bathymetry).

**Access:** Public grids and soundings; resolution varies sharply.

**Parallel unit:** One shelf tile with documented resolution and vertical datum.

**Agent work:** Trace continuous valley or estuary shapes on the North West Shelf and other surveyed shelf regions, including areas associated with former Sahul coastlines.

**Pass / useful output:** Show the native-resolution grid, two cross-sections and continuity into adjacent tiles. Compare with existing mapped features; broad geomorphology is the finish line.

#### M003. Recover vanished islands from old survey sheets

**Corpus:** [NOAA historical hydrographic surveys and survey data](https://www.ncei.noaa.gov/products/nos-hydrographic-survey).

**Access:** Public digitized survey material; select already available sheets.

**Parallel unit:** One island or bank on two dated surveys.

**Agent work:** Find land outlines, shoals or named islands that disappear from later charts; extract the original sounding and shoreline evidence.

**Pass / useful output:** A paired crop, survey dates and datum notes establish what each survey recorded. Do not infer physical disappearance merely from omission on a smaller-scale map.

#### M004. Locate drowned-land survey coverage that researchers have overlooked

**Corpus:** [NOAA / IHO bathymetry archive](https://www.ncei.noaa.gov/iho-data-centre-digital-bathymetry); [EMODnet bathymetry and high-resolution products](https://emodnet.ec.europa.eu/en/bathymetry); [Geoscience Australia bathymetry and topography grids](https://www.ga.gov.au/scientific-topics/marine-and-coastal/seabed/ausbathytopo-grids).

**Access:** Public catalogue and available survey metadata.

**Parallel unit:** One survey footprint intersecting a published drowned-land region.

**Agent work:** Build a coverage index exposing useful high-resolution surveys hidden behind expedition IDs, old names and disconnected portals.

**Pass / useful output:** Every polygon resolves to a downloadable product with measured spacing, dates and usable coordinate metadata. Count newly linked usable surveys, not attractive map layers.

### 2. Shipwrecks, lost aircraft and submerged structures

Use local multibeam, side-scan or sufficiently detailed photogrammetry. The main EMODnet regional grid is about 115 m; many global products are coarser still. A convincing wreck-shaped candidate is useful, while an exact ship identity usually needs another record.

#### M005. Sweep unannotated high-resolution seafloor tiles for wreck-shaped objects

**Corpus:** [NOAA historical hydrographic surveys and survey data](https://www.ncei.noaa.gov/products/nos-hydrographic-survey); [NOAA / IHO bathymetry archive](https://www.ncei.noaa.gov/iho-data-centre-digital-bathymetry); [EMODnet 2024 grid: approximately 115-metre spacing](https://emodnet.ec.europa.eu/en/emodnet-bathymetry-dtm-2024-release).

**Access:** Public survey subsets; first reject tiles too coarse for the target.

**Parallel unit:** One native-resolution tile with raw survey support.

**Agent work:** Find hull-like outlines, upright returns and associated debris fields absent from the selected public survey annotation layer.

**Pass / useful output:** Return hillshades from several directions, dimensions, survey metadata and raw-profile support; recover known wrecks in held-out tiles before counting new candidates.

#### M006. Cross-match aircraft-loss reports with the places actually surveyed

**Corpus:** [National Archives missing air crew reports](https://www.archives.gov/research/military/ww2/missing-air-crew-reports); [NOAA historical hydrographic surveys and survey data](https://www.ncei.noaa.gov/products/nos-hydrographic-survey).

**Access:** Public digitized reports and survey footprints.

**Parallel unit:** One missing-aircraft report plus one candidate survey intersection.

**Agent work:** Extract date, aircraft type, last reported position and location uncertainty, then identify whether adequate public seabed data cover the plausible area.

**Pass / useful output:** Verify the report transcription and geographic intersection. Produce a search-ready packet; a report position alone is not the crash site.

#### M007. Connect an anonymous survey obstruction to a historical wreck report

**Corpus:** [NOAA historical hydrographic surveys and survey data](https://www.ncei.noaa.gov/products/nos-hydrographic-survey); [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/).

**Access:** Public survey records and newspaper OCR.

**Parallel unit:** One obstruction and a small set of dated reports.

**Agent work:** Search vessel names, dimensions, grounding descriptions and changed place names for a corroborating historical identity.

**Pass / useful output:** Show at least two discriminating facts and an explicit alternative-candidate table. Accept a documentary match only when the evidence distinguishes nearby losses.

#### M008. Recover old ferry landings, quays and river crossings

**Corpus:** [NOAA historical hydrographic surveys and survey data](https://www.ncei.noaa.gov/products/nos-hydrographic-survey); [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview).

**Access:** Public maps and survey sheets.

**Parallel unit:** One waterfront segment across editions.

**Agent work:** Match removed piers, landing stairs and crossings that survive only in historical surveys, creating a source-linked layer for local heritage groups.

**Pass / useful output:** Aligned dated crops and a coordinate uncertainty polygon make each feature inspectable; distinguish mapped structures from sonar-only interpretations.

### 3. Deep-ocean video that nobody can watch in full

NOAA holds large public exploration video collections. FathomNet supplies curated images and labels useful for starting a detector; it is not a public dump of every MBARI raw recording. Video annotation and machine learning already exist here. The contribution is a specific unreviewed slice, overlooked event or corrected annotation.

#### M009. Find animals entering the neglected edge of an ROV frame

**Corpus:** [NOAA ocean video archive](https://www.ncei.noaa.gov/products/video-data); [MBARI: the annotation backlog behind FathomNet](https://www.mbari.org/data/fathomnet/).

**Access:** Public NOAA videos; curated training examples from FathomNet.

**Parallel unit:** One short video segment plus adjacent context.

**Agent work:** Search the dim periphery for clearly visible animals missed by a central-subject annotation. Return a track and the best frames, including ordinary species.

**Pass / useful output:** Human review confirms that the track is an animal and not sediment or lens artefact; species may remain unknown. Score accepted missed-animal events per reviewer hour.

#### M010. Find rare behaviours hiding in routine dive footage

**Corpus:** [NOAA ocean video archive](https://www.ncei.noaa.gov/products/video-data); [FathomNet curated image and annotation database](https://database.fathomnet.org/).

**Access:** Public video; select dives with usable download access.

**Parallel unit:** One event-length clip.

**Agent work:** Retrieve visually observable feeding, egg tending, animal contact or escape events from a predeclared behaviour list.

**Pass / useful output:** Reviewers watch the short clip and context and assign the defined label. Return existing annotations too, so apparent discoveries can be checked for duplication.

#### M011. Build a timestamped seafloor-litter inventory

**Corpus:** [NOAA Ocean Exploration archives](https://www.ncei.noaa.gov/products/ocean-exploration); [NOAA ocean video archive](https://www.ncei.noaa.gov/products/video-data).

**Access:** Public video and available navigation metadata.

**Parallel unit:** One object tracked across consecutive frames.

**Agent work:** Mark bottles, bags, fishing line and other recognizable manufactured debris; deduplicate repeat views within a dive.

**Pass / useful output:** Provide a clip and object track. Count distinct observed objects, not frames; report navigation uncertainty and distinguish unidentifiable debris.

#### M012. Recover a usable event index for poorly indexed dives

**Corpus:** [NOAA Ocean Exploration archives](https://www.ncei.noaa.gov/products/ocean-exploration); [MBARI video annotation system](https://www.mbari.org/technology/video-annotation-and-reference-system-vars/).

**Access:** Public video and expedition logs; metadata completeness varies.

**Parallel unit:** One dive log entry or visible event.

**Agent work:** Link the log’s specimen collections, instrument deployments and habitat transitions to exact video times, recovering mismatched clocks and file boundaries.

**Pass / useful output:** A reviewer jumps directly to the event. Test on known timed events and report residual timing error; do not silently interpolate across gaps.

#### M013. Find damaged or incomplete public video packages

**Corpus:** [NOAA ocean video archive](https://www.ncei.noaa.gov/products/video-data); [NOAA Ocean Exploration archives](https://www.ncei.noaa.gov/products/ocean-exploration).

**Access:** Public archive metadata and playable/downloadable files.

**Parallel unit:** One video file and its manifest or adjacent segment.

**Agent work:** Detect missing segments, frozen frames, mismatched dive IDs, broken subtitles and absent navigation sidecars.

**Pass / useful output:** Reproducible file-level checks and a short playback clip demonstrate each defect; supply a repair only when the correct source is identifiable.

### 4. Deep-sea mining evidence and abyssal biodiversity records

A tractable contribution is making environmental observations findable and auditable. ISA/OBIS exports are tables; the linked abyssal occurrence dataset is also a table, not 53,000 downloadable photographs. DISCOL disturbance mapping has already been done, so its published products are a baseline.

#### M014. Find duplicate or contradictory abyssal animal occurrence records

**Corpus:** [Public ISA biodiversity exports hosted by OBIS](https://datasets.obis.org/hosted/isa/index.html); [Abyssal NE Pacific megafauna occurrence dataset](https://zenodo.org/records/7982462).

**Access:** Public biodiversity tables.

**Parallel unit:** One candidate duplicate group.

**Agent work:** Reconcile expedition, station, coordinates, depth and taxon or morphotype identifiers across exports; find copied records and incompatible fields.

**Pass / useful output:** Show source rows and the exact contradiction. Preserve legitimate repeated observations and distinguish a label mismatch from a new species claim.

#### M015. Link deep-sea occurrence records back to their image evidence

**Corpus:** [Abyssal NE Pacific megafauna occurrence dataset](https://zenodo.org/records/7982462); [FathomNet curated image and annotation database](https://database.fathomnet.org/); [Public ISA biodiversity exports hosted by OBIS](https://datasets.obis.org/hosted/isa/index.html).

**Access:** Public records and only those image references that are actually accessible.

**Parallel unit:** One occurrence or morphotype with a referenced image/catalogue entry.

**Agent work:** Repair broken identifiers and join specimen tables to published image plates or morphotype catalogues, yielding an evidence browser for environmental reviewers.

**Pass / useful output:** Each accepted link resolves to the correct documented specimen or explicitly to a representative morphotype image. Never substitute the latter for an individual observation.

#### M016. Audit disturbance-track and litter annotations on released seafloor mosaics

**Corpus:** [DISCOL seafloor photomosaics](https://doi.org/10.1594/PANGAEA.881850); [Existing DISCOL disturbance reconstruction and maps](https://bg.copernicus.org/articles/17/1463/2020/).

**Access:** Public published mosaics and associated products.

**Parallel unit:** One mosaic tile with the published annotation overlay.

**Agent work:** Look for omitted visible track segments, duplicate polygons or objects labelled inconsistently with the agreed annotation rules.

**Pass / useful output:** Side-by-side pixels and geometries establish an annotation correction; use published mapped tracks as controls. Do not market this as the first reconstruction of the experiment.

### 5. Declassified satellite imagery and landscapes erased since the photograph

This is a strong archive-search family: compare a historical image with a map or a later image, then produce a small evidence packet. Mission and camera matter: CORONA, KH-7 and KH-9 products have different resolution and geometry.

#### M017. Trace irrigation canals erased by modern cultivation

**Corpus:** [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0); [USGS declassified satellite imagery: second collection](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-2).

**Access:** Public digitized image holdings, sometimes requiring an archive account.

**Parallel unit:** One historical image tile in an already studied region.

**Agent work:** Mark continuous canal candidates missing from the chosen archaeological map and connect them across overlapping frames.

**Pass / useful output:** Independent imagery or a published map supports the feature; retain original pixels, alignment error and known examples. Canal geometry is checkable before historical interpretation.

#### M018. Recover old wetlands and ponds that vanished from modern maps

**Corpus:** [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0); [USGS, topoView](https://www.usgs.gov/tools/topoview); [European Commission Joint Research Centre, Global Surface Water: Data Access](https://global-surface-water.appspot.com/download).

**Access:** Public historical imagery, maps and water records.

**Parallel unit:** One historical water feature and a later matched footprint.

**Agent work:** Catalogue visible water bodies absent from a selected current layer, preserving date, season and ambiguous marsh boundaries.

**Pass / useful output:** Reviewers confirm the historical depiction or image evidence. The output establishes observed presence, not an untested restoration recommendation.

#### M019. Locate industrial footprints missing from local history inventories

**Corpus:** [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview); [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0).

**Access:** Public maps and imagery; locality inventories vary.

**Parallel unit:** One former works, waste heap or railway-connected industrial parcel.

**Agent work:** Match names and mapped land use across editions; find source-backed omissions from the selected inventory.

**Pass / useful output:** Two dated records and a coordinate crosswalk confirm former use. Leave contamination and current hazard status unclaimed.

#### M020. Repair bad locations and joins in declassified image catalogues

**Corpus:** [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0); [USGS declassified satellite imagery: second collection](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-2).

**Access:** Public catalogue metadata and corresponding image subsets.

**Parallel unit:** One frame footprint or neighbouring-frame pair.

**Agent work:** Detect swapped frame identifiers, implausible footprints and missing overlap links by matching persistent landmarks.

**Pass / useful output:** Reproject landmarks and show the corrected footprint against independent control points, with an error estimate and reproducible transform.

### 6. Bomb craters and documentary traces of wartime damage

The immediate result is a historical damage layer. A crater is not proof of unexploded ordnance, and an unmarked tile is not a clearance certificate. NCAP includes licensed and not-yet-digitized material; start with an available permitted subset or a cooperating archive.

#### M021. Map bomb-crater candidates on digitized historical aerial photographs

**Corpus:** [Digitized WWII aerial photography and damage records](https://www.archives.gov/research/cartographic/aerial-photography/still-pictures-rg208-aerial-photography); [US National Archives foreign aerial photography](https://www.archives.gov/research/cartographic/aerial-photography/foreign-photography); [National Collection of Aerial Photography: access and licensing](https://ncap.org.uk/enquiries-support/using-the-website).

**Access:** Public digitized subsets; some collections require licensed access.

**Parallel unit:** One image tile with a fixed ground resolution.

**Agent work:** Mark circular crater candidates, clusters and confidence, excluding obvious ponds and agricultural features under a written labelling guide.

**Pass / useful output:** A reviewer checks native-resolution crops; paired dates or damage maps strengthen identification. Evaluate on held-out known craters and random negative tiles.

#### M022. Turn raid and damage reports into a searchable location index

**Corpus:** [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/); [Digitized WWII aerial photography and damage records](https://www.archives.gov/research/cartographic/aerial-photography/still-pictures-rg208-aerial-photography).

**Access:** Public OCR, reports and digitized images where available.

**Parallel unit:** One reported damage event.

**Agent work:** Extract date, street or landmark, damage description and the exact source span; resolve renamed streets to a historical gazetteer.

**Pass / useful output:** The source supports the fields and the address match. Aggregate reports of one event without erasing contradictory accounts.

#### M023. Find visible damage outside the boundaries of an existing historical damage map

**Corpus:** [Digitized WWII aerial photography and damage records](https://www.archives.gov/research/cartographic/aerial-photography/still-pictures-rg208-aerial-photography); [US National Archives foreign aerial photography](https://www.archives.gov/research/cartographic/aerial-photography/foreign-photography).

**Access:** Public digitized images and a selected available reference map.

**Parallel unit:** One map boundary segment with adjacent image tiles.

**Agent work:** Search for source-backed omissions just beyond recorded damaged areas or in blank map cells.

**Pass / useful output:** Before/after imagery supports an omission candidate and an annotator can reproduce the mark. This corrects a historical map, not a present-day risk model.

### 7. Nazi-looted art and scattered provenance records

The ERR database includes tens of thousands of digitized cards; Getty’s index links large bodies of dealer and auction records. Identifying a documentary match is a useful bounded result. Ownership adjudication remains distinct from matching the records.

#### M024. Match an unidentified looted-art card to a later sale or collection record

**Corpus:** [ERR looted-art database and digitized cards](https://art.claimscon.org/work-provenance-research-archives/archives-nazi-records-einsatzstab-reichsleiter-rosenberg-err/cultural-plunder-einsatzstab-reichsleiter-rosenberg-database-art-objects-jeu-de-paume/); [Getty Provenance Index](https://www.getty.edu/databases-tools-and-technologies/provenance/); [German Historical Museum provenance databases](https://www.dhm.de/en/collection/research/provenance-research/databases/).

**Access:** Public searchable records; bulk availability and image rights vary.

**Parallel unit:** One card and its best candidate matches.

**Agent work:** Compare dimensions, medium, subject, inscriptions, photographs and inventory numbers, allowing translated or changed titles.

**Pass / useful output:** A compact side-by-side packet shows discriminating matches and mismatches. A reviewer accepts the record linkage or marks it ambiguous.

#### M025. Recover inventory-number chains hidden in scans

**Corpus:** [ERR looted-art database and digitized cards](https://art.claimscon.org/work-provenance-research-archives/archives-nazi-records-einsatzstab-reichsleiter-rosenberg-err/cultural-plunder-einsatzstab-reichsleiter-rosenberg-database-art-objects-jeu-de-paume/); [German Historical Museum provenance databases](https://www.dhm.de/en/collection/research/provenance-research/databases/).

**Access:** Public digitized provenance records.

**Parallel unit:** One object’s number or label across documents.

**Agent work:** Transcribe handwritten, stamped and crossed-out identifiers and connect renumbered records across wartime repositories.

**Pass / useful output:** Image crops establish each character and each link; low-confidence characters stay explicit. A chain needs evidence for every edge.

#### M026. Find repeated images under different attributions

**Corpus:** [Getty Provenance Index](https://www.getty.edu/databases-tools-and-technologies/provenance/); [ERR looted-art database and digitized cards](https://art.claimscon.org/work-provenance-research-archives/archives-nazi-records-einsatzstab-reichsleiter-rosenberg-err/cultural-plunder-einsatzstab-reichsleiter-rosenberg-database-art-objects-jeu-de-paume/).

**Access:** Public accessible catalogue images; select a reusable image subset.

**Parallel unit:** One visually matched image pair.

**Agent work:** Retrieve works pictured with changed artist names, titles or sale descriptions; crop frames and page borders before comparison.

**Pass / useful output:** Verify the composition and individual details, not merely the same subject. Report a catalogue-image match without deciding authenticity.

#### M027. Recover a missing provenance passage from a historical auction catalogue

**Corpus:** [Getty Provenance Index](https://www.getty.edu/databases-tools-and-technologies/provenance/); [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/).

**Access:** Public records and digitized catalogues accessible through them.

**Parallel unit:** One object lot and a source page.

**Agent work:** Extract owner names, collection references and earlier sale citations omitted from the selected structured record.

**Pass / useful output:** The scan directly supports the recovered text; distinguish an auctioneer’s attribution from an independently established fact.

### 8. Fragments, damaged pages and incomplete digitization

A digital join or recovered text line can be checked on the images. Full historical interpretation need not be the challenge. Stasi reconstruction is retained separately because a generally downloadable corpus of its torn fragments has not been established.

#### M028. Find plausible joins between digitized manuscript fragments

**Corpus:** [Cambridge Genizah fragment with images and IIIF manifest](https://cudl.lib.cam.ac.uk/view/MS-TS-MISC-00028-00179).

**Access:** Public Cambridge images and IIIF metadata; respect each item’s reuse terms.

**Parallel unit:** One fragment pair from a selected available collection.

**Agent work:** Match torn edges, ruling, handwriting and text continuation; return transformed images and competing joins.

**Pass / useful output:** A specialist can inspect the alignment and text evidence in one packet. Test retrieval on already joined examples; a visual fit alone is a candidate.

#### M029. Recover pages bound or digitized in the wrong order

**Corpus:** [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/); [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/).

**Access:** Public scanned volumes and page images.

**Parallel unit:** One volume or short suspected page sequence.

**Agent work:** Use page numbers, catchwords, running headers and sentence continuation to propose a corrected sequence.

**Pass / useful output:** Every move has visible evidence and the original order is retained; score exact sequence recovery on deliberately shuffled controls.

#### M030. Find missing foldouts, plates and duplicate scans in published digital books

**Corpus:** [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

**Access:** Public digitized volumes with image access.

**Parallel unit:** One volume and its table of contents or plate list.

**Agent work:** Check references against actual pages, identify duplicated images and locate an already digitized replacement from another copy where possible.

**Pass / useful output:** A manifest names each defect and replacement source; a viewer reproduces it without reading the whole book.

### 9. Historical newspapers: recover facts, not just searchable text

Library of Congress bulk OCR permits genuine page-level parallelism. Its access route changed: use current loc.gov guidance rather than building on the retired standalone Chronicling America API.

#### M031. Repair OCR of names and addresses in one neglected newspaper run

**Corpus:** [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/); [Current Library of Congress newspaper API guidance](https://www.loc.gov/apis/additional-apis/chronicling-america-api/).

**Access:** Public bulk OCR and page images.

**Parallel unit:** One article or advertisement with source coordinates.

**Agent work:** Correct fields whose OCR prevents discovery: ship names, institutions, streets and named businesses. Preserve both original and corrected text.

**Pass / useful output:** A reviewer sees the word crop and correction; evaluate on a held-out human transcription and publish the exact affected pages.

#### M032. Extract historical flood heights and locations from local reporting

**Corpus:** [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/); [PSMSL, Data at PSMSL](https://psmsl.org/data/).

**Access:** Public newspaper scans and reference gauge metadata.

**Parallel unit:** One dated reported level or inundated landmark.

**Agent work:** Recover the number, unit, local datum if stated and wording such as above normal or above a bridge step.

**Pass / useful output:** The source supports the extraction and the datum is not invented. These are recovered observations; converting them into a modern flood model is a separate task.

#### M033. Reconstruct a public asset’s name and address history

**Corpus:** [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/); [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview).

**Access:** Public papers, maps and directories.

**Parallel unit:** One school, hospital, bridge or public building.

**Agent work:** Connect renamings, relocations and opening/closure notices so old inspection and planning records become findable.

**Pass / useful output:** Dated source spans support every transition; distinguish relocation from two institutions sharing a name.

#### M034. Find correction notices that never reached modern digital summaries

**Corpus:** [Library of Congress newspaper bulk OCR datasets](https://www.loc.gov/collections/chronicling-america/datasets/).

**Access:** Public newspaper corpus.

**Parallel unit:** One correction or retraction notice and the story it references.

**Agent work:** Link explicit corrections, withdrawn claims and corrected numbers to the original article or event index.

**Pass / useful output:** Matching dates, quoted wording and source crops verify the relationship. The deliverable is an updateable correction link, not a fresh allegation.

### 10. Declassified documents and unfinished public-record investigations

Search for explicit documentary facts and connections. A good unit ends with a short source chain that a journalist can inspect; it does not end with an AI-generated accusation.

#### M035. Recover attachments and annexes missing from a declassified document

**Corpus:** [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public released files.

**Parallel unit:** One document referring to a named attachment.

**Agent work:** Search other releases for the enclosure using dates, titles, registry numbers and distribution lists.

**Pass / useful output:** Header details and the enclosing document’s description agree; return the exact pages and any competing attachment candidates.

#### M036. Find a less-redacted duplicate of an already released page

**Corpus:** [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public versions of released documents.

**Parallel unit:** One pair or cluster of near-duplicate pages.

**Agent work:** Align OCR and page images across releases and highlight text actually visible in one version but redacted in another.

**Pass / useful output:** The recovered wording must be present in a public source image. Never count guessed redacted text as a recovery.

#### M037. Recover the money trail already printed in dispersed public records

**Corpus:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public contracts, reports and document collections.

**Parallel unit:** One named contract, grant or asset transfer.

**Agent work:** Link explicit identifiers across award notices, amendments, invoices and published audits to build a dated evidence ledger.

**Pass / useful output:** Each amount and relationship resolves to a source page; additions reconcile arithmetically. Unexplained differences remain differences, not corruption findings.

#### M038. Turn citations in a released report into a usable source collection

**Corpus:** [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

**Access:** Public reports and already available cited documents.

**Parallel unit:** One citation or archival reference.

**Agent work:** Resolve obsolete report numbers, renamed agencies and broken links; attach the cited page or publication when discoverable.

**Pass / useful output:** Title, date, author and report number match; test the recovered passage against the referring claim. Missing sources remain labelled missing.

### 11. Large planetary image archives beyond the Moon and Mars

These archives contain repeated observations and meaningful search volume. Existing scientific catalogues are the baseline. The bounded work is feature retrieval, annotation correction or a supported change candidate; interpreting planetary mechanisms is deferred.

#### M039. Find overlooked cloud events over Titan

**Corpus:** [Cassini imaging archive and OPUS access](https://pds-rings.seti.org/cassini/iss/access.html); [Cassini instrument datasets](https://pds-rings.seti.org/cassini/data.html).

**Access:** Public Cassini data and geometry metadata.

**Parallel unit:** One suitable observation sequence.

**Agent work:** Retrieve localized cloud candidates and their appearances in adjacent frames, excluding limb glare and known image artefacts.

**Pass / useful output:** A reviewer sees calibrated frames with observation geometry; test against catalogued events. Report a cloud candidate and times, not a climate explanation.

#### M040. Catalogue Saturn ring-spoke appearances missing from a chosen index

**Corpus:** [Cassini imaging archive and OPUS access](https://pds-rings.seti.org/cassini/iss/access.html).

**Access:** Public Cassini imaging products.

**Parallel unit:** One ring image sequence.

**Agent work:** Search for transient radial spoke-like features and track them across frames, recording viewing geometry and contrast.

**Pass / useful output:** The pattern persists consistently in adjacent images and is distinguished from detector artefacts; compare with known spoke examples and published catalogues.

#### M041. Recover omitted Enceladus plume observations

**Corpus:** [Cassini imaging archive and OPUS access](https://pds-rings.seti.org/cassini/iss/access.html).

**Access:** Public images; usable plume geometry limits the subset.

**Parallel unit:** One limb observation sequence.

**Agent work:** Retrieve visible plume appearances not present in the selected event index and recover image IDs, geometry and processing choices.

**Pass / useful output:** Plume structure is visible in raw/calibrated image comparisons; background and exposure controls rule out obvious artefacts. Do not infer mass flow from appearance alone.

#### M042. Find changed boulders and cliff edges on Rosetta’s comet

**Corpus:** [ESA Rosetta science archive](https://www.cosmos.esa.int/web/psa/rosetta).

**Access:** Public OSIRIS/NAVCAM image products.

**Parallel unit:** One surface patch in a geometry-compatible image pair.

**Agent work:** Match landmarks and flag displaced blocks, newly exposed patches or missing cliff material outside existing change catalogues.

**Pass / useful output:** Show registration, scale, shadows and alternate views. Accept a change candidate only when illumination or occlusion is an inadequate explanation.

#### M043. Extend a Mercury hollows or crater-feature annotation catalogue

**Corpus:** [PDS Geosciences planetary data holdings](https://pds-geosciences.wustl.edu/dataserv/holdings.html).

**Access:** Public MESSENGER image holdings.

**Parallel unit:** One image tile plus the current catalogue overlay.

**Agent work:** Find visually defined examples omitted from a chosen published catalogue and repair bad boundaries under that catalogue’s own rules.

**Pass / useful output:** A reviewer checks native-resolution morphology and duplicate status. This is catalogue completion, not a new theory of how hollows form.

#### M044. Retrieve candidate surface changes in overlapping Venus radar observations

**Corpus:** [PDS Geosciences planetary data holdings](https://pds-geosciences.wustl.edu/dataserv/holdings.html).

**Access:** Public Magellan products; repeat coverage and comparable geometry are limited.

**Parallel unit:** One overlap patch with metadata for both observations.

**Agent work:** Rank localized differences for review while preserving look direction, resolution and backscatter context.

**Pass / useful output:** Reviewers inspect the pair and known controls. The accepted output is a well-supported change candidate, not a confirmed new eruption; defer if geometry prevents a short adjudication.

#### M045. Build a cross-observation index of individually trackable Jupiter storms

**Corpus:** [JunoCam image data product specification](https://planetarydata.jpl.nasa.gov/img/data/juno/JNOJNC_0026/DOCUMENT/JUNO_JNC_EDR_RDR_DPSIS.PDF); [Cassini imaging archive and OPUS access](https://pds-rings.seti.org/cassini/iss/access.html).

**Access:** Public archived products; use their calibrated geometry, not stretched publicity images.

**Parallel unit:** One storm track across a short observation sequence.

**Agent work:** Join visible storm features across overlapping frames and repair missing or duplicated tracks in a selected index.

**Pass / useful output:** An annotated animation and coordinate residuals allow direct review; stop a track when identity is ambiguous. Long-term atmospheric interpretation is outside the unit.

### 12. Old weather, tides and instruments drawn on paper

These projects recover measurements that already happened. Existing transcription programmes are evidence of value and provide controls; choose untranscribed pages or unresolved quality-control queues.

#### M046. Transcribe neglected rainfall ledgers with the totals as a checksum

**Corpus:** [University of Reading, Rainfall Rescue records publication](https://www.reading.ac.uk/news/2022/Research-News/Rainfall-Rescue-records-publication).

**Access:** Public released scans; obtain the exact untranscribed or disputed subset.

**Parallel unit:** One daily or monthly table.

**Agent work:** Recover values, blanks, trace marks and station/date metadata; use printed totals to locate transcription errors.

**Pass / useful output:** Independent transcription and arithmetic agree; never alter a daily value merely to force a total to match.

#### M047. Recover ship-log weather observations omitted from a structured release

**Corpus:** [Old Weather, Project overview](https://www.oldweather.org/).

**Access:** Public digitized logs and programme data.

**Parallel unit:** One log page.

**Agent work:** Extract time, position, weather and instrument notes using the host project’s fields, including uncertainty in handwriting.

**Pass / useful output:** A reviewer checks the page crop and time/position consistency; benchmark on existing accepted transcriptions.

#### M048. Link a tide-gauge datum change to the original station note

**Corpus:** [PSMSL, Data at PSMSL](https://psmsl.org/data/).

**Access:** Public gauge metadata and available station documents.

**Parallel unit:** One suspected metadata gap or datum change.

**Agent work:** Find the dated note, benchmark reference or instrument change that explains a discontinuity already flagged in the record.

**Pass / useful output:** Quote the exact note and affected dates; the result is recovered metadata, not an automatic adjustment of sea-level trends.

#### M049. Rescue analogue seismograms into checked waveform segments

**Corpus:** [USGS, World-Wide Standardized Seismographic Network Film Chip Scans](https://catalog.data.gov/dataset/world-wide-standardized-seismographic-network-film-chip-scans); [USGS, World-Wide Standardized Seismograph Network: a data users guide](https://www.usgs.gov/publications/world-wide-standardized-seismograph-network-a-data-users-guide).

**Access:** Public film-chip scans and instrument documentation.

**Parallel unit:** One trace segment with time marks and calibration.

**Agent work:** Digitize the curve, resolve overlapping traces and recover timing and amplitude metadata where available.

**Pass / useful output:** Overlay the reconstructed trace on the scan and compare independently digitized controls. Missing calibration remains explicit; earthquake reinterpretation is deferred.

### 13. Natural-history collections and biodiversity literature

Many useful records are already photographed or printed but remain difficult to query. Work on missing fields and curator backlogs, preserving evidence rather than manufacturing ecological conclusions.

#### M050. Recover specimen collection dates and places from overlooked labels

**Corpus:** [GBIF, Data quality recommendations](https://techdocs.gbif.org/en/data-publishing/data-quality-recommendations); [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/).

**Access:** Public specimen images and metadata in a selected collection.

**Parallel unit:** One specimen label with a missing or disputed field.

**Agent work:** Transcribe collector, locality and date; resolve historical place names with a cited gazetteer.

**Pass / useful output:** The image supports the transcription and the georeference includes uncertainty, not just a precise-looking point.

#### M051. Find duplicate specimens published as independent occurrences

**Corpus:** [GBIF, Data quality recommendations](https://techdocs.gbif.org/en/data-publishing/data-quality-recommendations); [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/).

**Access:** Public occurrence records and available specimen images.

**Parallel unit:** One candidate duplicate cluster.

**Agent work:** Match catalogue numbers, collector numbers, dates and label images across institutional exports.

**Pass / useful output:** Source evidence separates duplicate database records from legitimate duplicate specimens distributed to different herbaria; retain those distinctions.

#### M052. Extract missing freshwater mussel–fish host evidence

**Corpus:** [Freshwater mussel host database and evidence fields](https://mollusk.inhs.illinois.edu/resources/freshwater-mussel-host-database/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

**Access:** Public database plus accessible published papers.

**Parallel unit:** One experiment or reported host relationship.

**Agent work:** Recover fish and mussel names, successful juvenile transformation versus attachment only, failed trials and the source page.

**Pass / useful output:** Each field is supported by the paper and matches the database’s evidence definitions. Count accepted additions, including negatives, rather than inferred hosts.

#### M053. Recover germination protocols buried in old botanical papers

**Corpus:** [GGCE seed viability record specification](https://ggce.genesys-pgr.org/docs/manual/seed/viability/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

**Access:** Public accessible literature; seed-bank operational logs are not assumed public.

**Parallel unit:** One species-by-treatment experiment.

**Agent work:** Extract pretreatment, temperature, light, duration, sample count and reported germination or viability result into a fixed form.

**Pass / useful output:** A source table or passage verifies the fields; preserve the distinction between failure to germinate and evidence of dead seeds.

### 14. Small conservation programmes with fragmented records

Here the useful unit is often a record join. The score is accepted links or corrected fields. Population modelling and intervention-effect estimation can follow later.

#### M054. Deduplicate rhino-horn or ivory seizure reports

**Corpus:** [TRAFFIC trade monitoring resources](https://www.traffic.org/what-we-do/thematic-issues/trade-monitoring/); [CITES trade-data discrepancy guidance](https://tradeview.cites.org/en/faqs).

**Access:** Public announcements and court/report material; not a promised complete bulk corpus.

**Parallel unit:** One cluster of reports that may describe the same seizure.

**Agent work:** Match date, location at a broad level, amount, shipment description and case identifiers; preserve discrepancies and updates.

**Pass / useful output:** A reviewer accepts same-event/different-event labels from source spans. Do not expose live animal locations or infer guilt from a trade-data discrepancy.

#### M055. Reconcile importer and exporter records for the same wildlife shipment class

**Corpus:** [CITES trade-data discrepancy guidance](https://tradeview.cites.org/en/faqs).

**Access:** Public CITES trade data and published interpretation guidance.

**Parallel unit:** One country-pair/species/product/year discrepancy.

**Agent work:** Check units, re-exports, year boundaries and source codes to explain bookkeeping mismatches with a reproducible join.

**Pass / useful output:** The rules reproduce the source totals and explanation; unresolved mismatches are evidence requests, not trafficking findings.

#### M056. Recover museum-material test results with the right product version

**Corpus:** [Swedish National Heritage Board Oddy-test database](https://www.raa.se/museer/forskning-och-kunskapsuppbyggnad/kulturarvslaboratoriet/oddytest/oddydatabas/).

**Access:** Public test database and available supporting reports.

**Parallel unit:** One product/test record.

**Agent work:** Link trade name, date, batch or formulation when stated, protocol, rating and coupon image; flag name collisions across reformulations.

**Pass / useful output:** Every field resolves to a record. A formulation not documented stays unknown; avoid declaring a material safe merely from a historical trade-name match.

### 15. Pollution datasets whose missing methods are recoverable

Methods extraction fits the brief much better than asking an agent to discover the causal explanation for global pollution patterns. A recovered field is useful even when measurements remain incomparable.

#### M057. Fill missing particle-size windows in microplastics records

**Corpus:** [NOAA marine microplastics database](https://www.ncei.noaa.gov/products/microplastics); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public database and legally available full text/supplements.

**Parallel unit:** One sample series or paper-methods row.

**Agent work:** Recover mesh size, minimum/maximum particle size and whether counts include fibres or particular polymer classes.

**Pass / useful output:** A page/table citation verifies every value; leave incompatible size definitions unmerged. Count recovered fields and checked database corrections.

#### M058. Recover blank correction and detection-limit metadata for pollution measurements

**Corpus:** [NOAA marine microplastics database](https://www.ncei.noaa.gov/products/microplastics); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public linked papers and supplements.

**Parallel unit:** One reported measurement series.

**Agent work:** Extract field/laboratory blanks, nondetect handling, recovery correction and whether the published concentration was already corrected.

**Pass / useful output:** The source explicitly supports each treatment; no correction is applied twice. An unknown method is an accepted missing-data result.

#### M059. Find duplicate samples republished across environmental compilations

**Corpus:** [NOAA marine microplastics database](https://www.ncei.noaa.gov/products/microplastics); [Public ISA biodiversity exports hosted by OBIS](https://datasets.obis.org/hosted/isa/index.html).

**Access:** Public tables with publication and station identifiers.

**Parallel unit:** One candidate repeated sample group.

**Agent work:** Match coordinates, collection date, depth, sample ID and numerical fingerprints; identify reused observations behind different citations.

**Pass / useful output:** A reviewer can trace provenance to the original sample and distinguish genuine replicates. Publish merge instructions and retained source IDs.

### 16. Bridges, dams and the paperwork of maintenance

These are documentary and data-quality tasks. Their quick checks support corrected public information; they do not establish structural safety from photographs or inventory scores.

#### M060. Find bridges that changed identifier and lost their maintenance history

**Corpus:** [FHWA annual bridge inventory downloads](https://www.fhwa.dot.gov/bridge/nbi/ascii.cfm).

**Access:** Public annual bridge-inventory files.

**Parallel unit:** One bridge’s candidate record chain across years.

**Agent work:** Match coordinates, route, crossing, geometry and ownership to reconnect predecessor/successor identifiers.

**Pass / useful output:** Source fields support the chain, with rebuilds distinguished from renumberings. Report ambiguous parallel structures rather than force a match.

#### M061. Recover reported bridge repairs omitted from a local public ledger

**Corpus:** [FHWA annual bridge inventory downloads](https://www.fhwa.dot.gov/bridge/nbi/ascii.cfm); [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public inventories and available contracts or inspection reports.

**Parallel unit:** One documented repair and its asset identifier.

**Agent work:** Link completion certificates, public contracts and reports to the correct bridge and date.

**Pass / useful output:** Source wording distinguishes planned, awarded and completed work. A missing ledger entry is the claim, not evidence that maintenance never happened.

#### M062. Repair duplicated or misplaced dam inventory entries

**Corpus:** [US National Inventory of Dams](https://nid.sec.usace.army.mil/); [USGS, topoView](https://www.usgs.gov/tools/topoview).

**Access:** Public inventory and historical maps.

**Parallel unit:** One candidate duplicate or coordinate error.

**Agent work:** Compare names, watercourses, map symbols and documented locations; prepare corrected coordinates with uncertainty.

**Pass / useful output:** The proposed record matches multiple source details. Inventory omissions or corrections do not imply a hazard classification.

#### M063. Extract unresolved action items from published inspection appendices

**Corpus:** [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/); [FHWA annual bridge inventory downloads](https://www.fhwa.dot.gov/bridge/nbi/ascii.cfm); [US National Inventory of Dams](https://nid.sec.usace.army.mil/).

**Access:** Only inspections actually published by the relevant owner.

**Parallel unit:** One recommendation and its follow-up references.

**Agent work:** Recover action text, asset, date and explicit completion evidence into a source-linked checklist.

**Pass / useful output:** A reviewer checks the recommendation and follow-up pages. Use no public completion record found rather than not fixed when records are incomplete.

### 17. Public procurement and consultation documents

Your win-win-improvement idea is retained, with a more mechanical entry point: first recover a concrete inconsistency, duplicated burden or feasible alternative whose check fits on a page. Publishing or submitting a comment is a separate human choice.

#### M064. Find arithmetic and cross-reference errors in public budget tables

**Corpus:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public procurement documents, budgets and appendices.

**Parallel unit:** One table or referenced amount.

**Agent work:** Recalculate totals, unit-price extensions and carry-forwards; resolve whether a discrepancy is rounding, tax treatment or an actual mismatch.

**Pass / useful output:** Show original cells and an independently rerunnable calculation. Count substantiated errors rather than all numerical differences.

#### M065. Find duplicated reporting requirements in a draft public rule

**Corpus:** [GSA Regulations.gov document and docket API](https://open.gsa.gov/api/regulationsgov/).

**Access:** A selected public docket and the forms/rules it explicitly incorporates; API key needed for bulk API access.

**Parallel unit:** One required field or submission.

**Agent work:** Match repeated requests for the same datum and draft a precise reuse/cross-reference option preserving the stated recipient and purpose.

**Pass / useful output:** Cite both requirements and demonstrate that the alternative supplies the same required information. Any policy judgement is confined to a short reviewable proposal.

#### M066. Locate contradictory definitions or deadlines within a consultation packet

**Corpus:** [GSA Regulations.gov document and docket API](https://open.gsa.gov/api/regulationsgov/).

**Access:** Public docket documents, attachments and incorporated guidance.

**Parallel unit:** One defined term, threshold or deadline.

**Agent work:** Compare every occurrence and identify conflicting values, dates or scope in a table with source pages.

**Pass / useful output:** A reader can verify the contradiction directly; include contextual exceptions so legitimate distinctions are not flagged as errors.

#### M067. Recover missing contract amendments from other public releases

**Corpus:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public award and amendment records.

**Parallel unit:** One contract with a referenced but unlinked amendment.

**Agent work:** Search identifiers, parties, dates and document hashes to reconstruct a complete version chain.

**Pass / useful output:** Each amendment is supported by the original document and its relationship to the award; reconcile revised totals and dates mechanically.

### 18. Hospital prices that are published but hard to compare

CMS already publishes schemas and validation tools. Useful work goes beyond reimplementing them: find reproducible defects, decode supported price expressions, or match the same specified service across records. File prices are not automatically a patient’s final bill.

#### M068. Build reproducible bug reports for unusable hospital price files

**Corpus:** [CMS hospital price file schemas and validation tools](https://github.com/CMSgov/hospital-price-transparency); [CMS hospital price transparency resources](https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency/resources).

**Access:** Public hospital machine-readable files.

**Parallel unit:** One hospital file and a pinned CMS schema version.

**Agent work:** Run the official validator, then identify truncation, contradictory fields or broken references that prevent a declared use case.

**Pass / useful output:** A minimal failing row and independent parser reproduce the defect; separate official schema failures from extra semantic checks.

#### M069. Find duplicate negotiated-rate rows hiding contradictory prices

**Corpus:** [CMS hospital price file schemas and validation tools](https://github.com/CMSgov/hospital-price-transparency).

**Access:** Public machine-readable files.

**Parallel unit:** One exact service/payer/plan/setting/date key.

**Agent work:** Detect multiple incompatible rates only after respecting rate type, modifiers and contextual fields.

**Pass / useful output:** Display the original rows and the full comparison key. A reviewer can see whether the apparent conflict is real or explained by a missing distinction.

#### M070. Recover deterministic price expressions from published supporting text

**Corpus:** [CMS hospital price file schemas and validation tools](https://github.com/CMSgov/hospital-price-transparency); [CMS hospital price transparency resources](https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency/resources).

**Access:** Public price files and their published referenced schedules.

**Parallel unit:** One formula-based rate with all required public inputs.

**Agent work:** Translate an explicitly stated formula into an auditable calculation and identify records where a necessary input is absent.

**Pass / useful output:** An independent implementation reproduces the formula on test inputs. Do not invent a price when the underlying schedule or contract term is unavailable.

#### M071. Repair payer, plan and service labels that block exact comparisons

**Corpus:** [CMS hospital price file schemas and validation tools](https://github.com/CMSgov/hospital-price-transparency).

**Access:** Public files; cross-hospital equivalence may remain ambiguous.

**Parallel unit:** One proposed label/identifier crosswalk.

**Agent work:** Match explicit codes and documented aliases while preserving service setting, modifiers and units.

**Pass / useful output:** Source identifiers support the match; ambiguous plan names stay unmerged. Release a traceable crosswalk rather than a misleading cheapest-hospital ranking.

### 19. Drug shortages and medically important supply records

The bounded version of shortage prediction is a clean, dated evidence ledger and retrospectively scoreable signal extraction. Predicting shortages reliably is a later research question. The live API is not assumed to contain every past revision.

#### M072. Reconcile shortage entries that refer to the same product presentation

**Corpus:** [openFDA drug shortage data API](https://open.fda.gov/apis/drug/drugshortages/explore-the-api-with-an-interactive-chart/).

**Access:** Public openFDA shortage records.

**Parallel unit:** One ingredient/strength/form/presentation record cluster.

**Agent work:** Normalize explicitly stated product identifiers, manufacturer names and presentation changes without merging clinically different products.

**Pass / useful output:** Original records support every equivalence; a pharmacist can inspect the small ambiguous set rather than the full corpus.

#### M073. Recover a dated timeline of public shortage notices

**Corpus:** [openFDA drug shortage data API](https://open.fda.gov/apis/drug/drugshortages/explore-the-api-with-an-interactive-chart/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

**Access:** Public notices plus archived snapshots where they actually exist.

**Parallel unit:** One product’s sequence of notices.

**Agent work:** Extract first stated shortage date, stated cause, estimated availability and later status, preserving the date each statement became public.

**Pass / useful output:** Every event has a dated source. Backtests use only evidence available at the cutoff; missing historical snapshots are marked as gaps.

#### M074. Find conflicting availability statements within a published notice set

**Corpus:** [openFDA drug shortage data API](https://open.fda.gov/apis/drug/drugshortages/explore-the-api-with-an-interactive-chart/).

**Access:** Public status records and linked manufacturer notices.

**Parallel unit:** One exact product and observation date.

**Agent work:** Compare API fields with contemporaneous public notices and identify disagreements needing clarification.

**Pass / useful output:** Side-by-side dated source spans establish the discrepancy, including different pack sizes or regions that may explain it. The deliverable is a correction queue, not a treatment recommendation.

### 20. Known dangerous designs and recall records

The easy-to-check target is an already documented recalled model, component or explicitly described failure mode. Discovering a new engineering hazard from first principles is outside the main queue.

#### M075. Match recalled products to manuals under a different brand name

**Corpus:** [CPSC recall API](https://www.cpsc.gov/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information); [CPSC public datasets](https://www.cpsc.gov/Data).

**Access:** Public recalls and available manufacturer manuals.

**Parallel unit:** One recall/model and candidate manual pair.

**Agent work:** Match exact model numbers, shared OEM identifiers, diagrams and affected serial ranges.

**Pass / useful output:** The documented identifiers agree; appearance alone is insufficient. Return evidence of the match without declaring unlisted products recalled.

#### M076. Extract the exact affected variants from recall PDFs

**Corpus:** [CPSC recall API](https://www.cpsc.gov/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information); [openFDA medical-device recall endpoint](https://open.fda.gov/apis/device/recall/how-to-use-the-endpoint/).

**Access:** Public recall records and attachments.

**Parallel unit:** One recall’s model/lot/date-range table.

**Agent work:** Recover identifiers lost in prose or scanned attachments and make them machine-queryable.

**Pass / useful output:** Spot-check against the source and validate ranges with boundary cases; distinguish excluded variants and later corrections.

#### M077. Link a recurring documented defect across separate recall notices

**Corpus:** [CPSC recall API](https://www.cpsc.gov/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information); [openFDA medical-device recall endpoint](https://open.fda.gov/apis/device/recall/how-to-use-the-endpoint/).

**Access:** Public recall text and structured fields.

**Parallel unit:** One candidate pair of notices sharing a stated component or failure description.

**Agent work:** Recover explicit component IDs and descriptions to reveal repeated records worth human review.

**Pass / useful output:** Source text supports the link. Similar language is labelled similarity; a shared cause requires explicit documentary evidence.

### 21. Women’s health: trial results that exist but are hard to find

These tasks help evidence reviewers without asking the agent to decide how someone should treat a condition. ClinicalTrials.gov and the PMC open-access subset provide tractable, versionable records; not every paper’s full text is freely reusable.

#### M078. Find publications missing from endometriosis trial records

**Corpus:** [ClinicalTrials.gov data API](https://clinicaltrials.gov/data-api/api); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public registry records and accessible full text.

**Parallel unit:** One completed trial and candidate publication.

**Agent work:** Match registration number, recruitment dates, sample size, intervention and sites; retrieve result papers not linked from the registry.

**Pass / useful output:** A reviewer verifies a discriminating match in a short packet. Distinguish the primary report from a protocol, secondary analysis or unrelated similar trial.

#### M079. Recover numerical menopause-treatment outcomes buried in supplements

**Corpus:** [ClinicalTrials.gov data API](https://clinicaltrials.gov/data-api/api); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public results records and openly available paper supplements.

**Parallel unit:** One prespecified outcome/timepoint table.

**Agent work:** Extract arm sizes, outcome definition, units, estimates and uncertainty exactly as reported.

**Pass / useful output:** Source cells verify every value and group label; reconcile denominators without inventing missing observations. Interpretation of treatment benefit is left to the evidence review.

#### M080. Find menstrual and adverse-event outcomes mentioned but omitted from structured summaries

**Corpus:** [ClinicalTrials.gov data API](https://clinicaltrials.gov/data-api/api); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public registries and accessible papers.

**Parallel unit:** One trial outcome or adverse-event reporting field.

**Agent work:** Link the prespecified field to where it is reported in text, figures or supplements, or document that it was not located in the searched sources.

**Pass / useful output:** Provide the registry wording and source location; not found is scoped to the actual documents searched, not asserted nonpublication everywhere.

#### M081. Recover who was actually included in wearable validation studies

**Corpus:** [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/); [ClinicalTrials.gov data API](https://clinicaltrials.gov/data-api/api).

**Access:** Open papers and accessible supplements.

**Parallel unit:** One validation study’s participant table and eligibility section.

**Agent work:** Extract sex-related reporting, age range, pregnancy or menopausal-status information when stated, skin-tone reporting and exclusion criteria.

**Pass / useful output:** A source-backed form supports every field; distinguish not reported from excluded. This produces an evidence-coverage index, not unsupported subgroup performance estimates.

### 22. Hormone measurements: recover definitions and missing metadata

Hormone measurements are not interchangeable just because they share a label. The main projects are paper/table extraction and documented metadata reconciliation. mcPHASES is a small access-controlled pilot, not a massive open corpus.

#### M082. Build a source-linked assay-method index for published hormone measurements

**Corpus:** [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/); [NIST hormone reference measurement programme](https://www.nist.gov/programs-projects/development-reference-methods-and-reference-materials-determination-hormones-human).

**Access:** Open papers and their available supplements.

**Parallel unit:** One study/analyte/assay combination.

**Agent work:** Extract specimen type, assay platform, units, reporting limits, sample timing and cycle-stage definition where explicitly stated.

**Pass / useful output:** Each field cites the methods text; unit conversions are tested independently. Do not merge assays as equivalent merely because their units match.

#### M083. Recover hormone time-series points from already published plots

**Corpus:** [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Openly licensed usable figures; select plots with clear axes and legends.

**Parallel unit:** One curve panel.

**Agent work:** Digitize reported points and uncertainty bars, preserving whether time is calendar day, cycle day or time relative to a defined event.

**Pass / useful output:** Overlay recovered points on the original figure and measure pixel/axis error against an independent extraction. These are reconstructed plotted values, not new physiological measurements.

#### M084. Repair cross-wave questionnaire and variable links in SWAN

**Corpus:** [SWAN public-use data and access routes](https://www.swanstudy.org/swan-research/data-access/); [SWAN study metadata and data dictionary](https://agingresearchbiobank.nia.nih.gov/studies/swan/details).

**Access:** Public-use releases through the stated access routes; some additional data require approval.

**Parallel unit:** One concept measured in two study waves.

**Agent work:** Compare wording, response codes, missing-value conventions and units for sleep, symptoms, activity or menstrual-history variables.

**Pass / useful output:** Dictionary and questionnaire excerpts justify a same/different/partly comparable label. Supply executable recodes only for explicitly supported equivalences.

### 23. Fitness and wearable data with a reference to check against

Here there really are large recordings, but usefulness comes from a frozen narrow test. Separate participants across evaluation splits; raw records from one person are not independent people. Access conditions are stated per dataset.

#### M085. Audit raw-to-summary accelerometer processing in NHANES

**Corpus:** [NHANES 2013–2014 raw accelerometry and derived files](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/PAX80_H.htm); [NCI manual for raw NHANES accelerometry](https://epi.grants.cancer.gov/physical/NHANES-RAW80Hz-manual.pdf).

**Access:** Public raw 80-Hz files and derived records.

**Parallel unit:** One participant-day with a documented processing target.

**Agent work:** Reconstruct a specified summary from the raw signal and investigate disagreement with a published field or documented baseline.

**Pass / useful output:** A second implementation and source flags identify whether the difference is an error, filtering choice or expected processing distinction. Existing QC flags are controls, not fresh discoveries.

#### M086. Find quiet-wake mistakes in an explicitly defined actigraphy sleep baseline

**Corpus:** [MESA Sleep: polysomnography and actigraphy](https://sleepdata.org/datasets/mesa); [National Sleep Research Resource datasets](https://sleepdata.org/datasets).

**Access:** MESA Sleep and related datasets require approved access.

**Parallel unit:** One night with time-aligned actigraphy and reference sleep labels.

**Agent work:** Run a fixed baseline and retrieve compact error episodes, stratifying only on recorded covariates with enough examples.

**Pass / useful output:** Reference labels and clock alignment verify the error. Freeze the baseline, split by participant and score sensitivity/specificity; no general claim that a consumer watch has the same error.

#### M087. Recover missing-data and clock errors in longitudinal mobile/wearable records

**Corpus:** [GLOBEM longitudinal mobile and wearable dataset](https://www.physionet.org/content/globem/1.1/).

**Access:** Credentialed GLOBEM access; roughly 497 participants across the described studies.

**Parallel unit:** One participant-day or recording transition.

**Agent work:** Distinguish zero activity from absent wear, timezone shifts, duplicated uploads and disconnected sensors using documented fields.

**Pass / useful output:** Raw timestamps and device/status records support each flag; leave indistinguishable cases unknown. Release permissible code and aggregates, not restricted person-level records.

#### M088. Audit reported fitness-validation numbers against their source tables

**Corpus:** [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Publicly available validation papers with sufficient reported data.

**Parallel unit:** One stated metric or subgroup comparison.

**Agent work:** Recalculate an explicitly defined mean error, denominator, confidence interval or count from available table data; locate transcription or arithmetic inconsistencies.

**Pass / useful output:** A short notebook and source cells reproduce the result. Defer metrics requiring unavailable individual records rather than approximate them into an apparent contradiction.

### 24. Professional software: scientific instruments and file rescue

The concrete opportunity is a failing real file, a known output and a usable repaired workflow. These are extensions to existing open tools, not claims that an entire commercial suite has no replacement. Public examples support initial testing; a challenge is open only after reproducing a current failure.

#### M089. Recover all frames from a Tektronix multi-frame waveform file

**Corpus:** [Open Tektronix issue: multi-frame WFM read as one frame; attached fixture](https://github.com/tektronix/tm_data_types/issues/127).

**Access:** Public GitHub issue with an attached example archive.

**Parallel unit:** The supplied failing WFM file, then one regression fixture per variation.

**Agent work:** Repair the reported reader behaviour that returns one frame from a file described as containing 1,575 frames; retain timestamps and per-frame samples.

**Pass / useful output:** Independently check header/frame counts and reference exports where available, then verify sample values and timing. The attached issue is an explicit backlog item; recheck its status before starting.

#### M090. Make a failed OriginLab project readable without losing its data

**Corpus:** [liborigin reader for OriginLab project files](https://github.com/gerlachs/liborigin); [Document Liberation sample-file contributions](https://www.documentliberation.org/contribute/).

**Access:** Public library and available permissible sample files; obtain a real failing fixture first.

**Parallel unit:** One OPJ/OPJU-version or feature fixture actually supported by the proposed scope.

**Agent work:** Extend the open reader for a demonstrated missing table, worksheet value or metadata field; export a documented, reusable result.

**Pass / useful output:** Compare with the original application’s reference export and verify rows, columns, missing values and units. Do not promise OPJU support just because a library reads some OPJ files.

#### M091. Rescue a proprietary microscopy file that the current reader mishandles

**Corpus:** [Open Microscopy Environment Bio-Formats](https://www.openmicroscopy.org/bio-formats/).

**Access:** Open readers; use a public or owner-contributed failing file.

**Parallel unit:** One Zeiss CZI, Leica LIF or other supported-format regression case.

**Agent work:** Repair a reproducible loss of channels, timepoints, pixel calibration or stage coordinates.

**Pass / useful output:** Compare pixels and metadata with a trusted reference reader/export; open the result in an ordinary analysis tool and complete the intended workflow.

#### M092. Recover hydrological time-series files in a modern scripted workflow

**Corpus:** [HEC-DSS example files](https://www.hec.usace.army.mil/confluence/dssdocs/dssvueguides/hec-dss-samples-139735128.html).

**Access:** Public HEC-DSS example files; HEC-DSSVue itself is already free.

**Parallel unit:** One DSS record type and fixture.

**Agent work:** Fix a concrete reader/interoperability gap involving missing-value flags, irregular times, units or pathname metadata.

**Pass / useful output:** Independent reference export and round-trip comparisons agree; demonstrate a complete modern import/plot/export task. The challenge is interoperability, not replacing an allegedly expensive free tool.

#### M093. Repair malformed borehole logs that silently lose data

**Corpus:** [lasio documented borehole-log example files](https://lasio.readthedocs.io/en/latest/basic-example.html).

**Access:** Public lasio examples and permissible issue attachments.

**Parallel unit:** One troublesome LAS file.

**Agent work:** Recover rows, depth order, null markers and units under the format’s documented rules; reject genuinely undecidable damage with a useful report.

**Pass / useful output:** A fixture manifest and independent interpretation verify the result. No fabricated samples or silent unit guesses; test successful downstream loading.

### 25. Professional software: desktop workflows that trap valuable work

For a replacement to count, a user must finish the original task on a modern system. A pile of generated source code is not the output. Select a failing fixture from public tests/issues or an owner’s permitted export before investing a large compute budget.

#### M094. Preserve coded interview data when leaving NVivo or ATLAS.ti

**Corpus:** [QualCoder source, examples and tests](https://github.com/ccbogel/QualCoder); [REFI-QDA exchange format and implementation files](https://www.qdasoftware.org/project-implementation-files).

**Access:** Public QualCoder examples and REFI-QDA specifications; real proprietary exports need permission.

**Parallel unit:** One QDPX fixture with coded passages, memos and media offsets.

**Agent work:** Repair a demonstrated import/export loss in an open workflow while preserving identifiers and code assignments.

**Pass / useful output:** Compare coded text ranges, hierarchy, memos and timestamps with the reference export, then have a user retrieve and edit the same coded passage in the new tool.

#### M095. Fix a legacy SPSS, SAS or Stata file that loses meaning on import

**Corpus:** [ReadStat: SPSS, SAS and Stata file readers and tests](https://github.com/WizardMac/ReadStat); [GNU PSPP manual](https://www.gnu.org/software/pspp/manual/pspp.html).

**Access:** Public readers, tests and legally shareable sample files.

**Parallel unit:** One file with a failing metadata/value feature.

**Agent work:** Repair loss of value labels, user-defined missing values, encodings or timestamps; support a declared subset of the original workflow.

**Pass / useful output:** Values and metadata match a trusted export, and a fixed analysis yields the expected output. A numeric-only CSV match does not prove semantic preservation.

#### M096. Rescue ArcGIS styling in an open QGIS workflow

**Corpus:** [SLYR community conversion capabilities](https://github.com/north-road/slyr/blob/master/README.md).

**Access:** Public community code and available fixtures; some conversion features are commercial.

**Parallel unit:** One supported-format .lyr or .style fixture with a reproducible rendering problem.

**Agent work:** Implement a missing symbol or property conversion within the declared open-reader scope.

**Pass / useful output:** Compare a reference rendering, scale behaviour and layer properties, then open and use the project in QGIS. Do not assume the community edition converts every MXD feature.

#### M097. Recover an Access database whose records are trapped behind an old desktop installation

**Corpus:** [MDB Tools database extraction utilities](https://mdbtools.github.io/utils/).

**Access:** Public extraction tools; a lawful real database fixture must be available.

**Parallel unit:** One MDB schema/data feature or a documented query workflow.

**Agent work:** Fix an extraction defect and reproduce the needed joins or reports on a modern platform, preserving field types and relationships.

**Pass / useful output:** Counts, keys and query results match reference outputs; test the actual user task. Preserving tables alone does not preserve Access forms, VBA or application behaviour.

#### M098. Fix a dropped object in a WordPerfect, PageMaker or FreeHand document

**Corpus:** [Document Liberation supported formats and projects](https://www.documentliberation.org/projects/); [Document Liberation sample-file contributions](https://www.documentliberation.org/contribute/).

**Access:** Open import libraries and contributor-provided legacy documents.

**Parallel unit:** One file and one demonstrated import defect.

**Agent work:** Recover the lost page element, text run, layer or graphic using the appropriate existing library.

**Pass / useful output:** Compare the original/reference rendering and document structure, then save and reopen the converted file in a normal current application.

### 26. Accessibility and preservation with replayable checks

The best test is an actual reading or interaction sequence, plus structural checks. Small user reviews can validate the result without asking someone to inspect an entire generated codebase.

#### M099. Migrate an AAC vocabulary while preserving the learned button paths

**Corpus:** [Open Board Format specification](https://github.com/open-aac/openboardformat).

**Access:** Public format examples and a user-permitted vocabulary/export.

**Parallel unit:** One board or navigation path.

**Agent work:** Repair a specific import/export failure while retaining positions, speech text, linked boards and supported audio.

**Pass / useful output:** Replay identical selections and compare speech and navigation. Demonstrate the complete workflow with the user or specialist; unchanged JSON alone is insufficient.

#### M100. Recover reading order in inaccessible public-document pages

**Corpus:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/); [veraPDF, Validation documentation](https://docs.verapdf.org/validation/).

**Access:** Public PDFs with usable text or OCR evidence.

**Parallel unit:** One page and its reading-order/tag tree.

**Agent work:** Repair a demonstrated order or labelling error, including a concise table interpretation when required.

**Pass / useful output:** Screen-reader replay and structural validation agree with the visible page; a reader confirms the intended sequence. Existing PDF validators provide a baseline.

#### M101. Repair one mathematical expression that a screen reader speaks incorrectly

**Corpus:** [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/).

**Access:** Public MathCAT examples, issue fixtures and accessible source documents.

**Parallel unit:** One expression plus a navigation/speech expectation.

**Agent work:** Fix a concrete parsing or speech-rule defect using the project’s established conventions.

**Pass / useful output:** A qualified reader approves the expected meaning; regression checks cover the original expression and nearby ambiguous cases, not only a generated snapshot.

#### M102. Recover a broken interaction in an archived public website

**Corpus:** [Webrecorder, ReplayWeb.page](https://webrecorder.net/replaywebpage/).

**Access:** Public web archives and available replayable captures.

**Parallel unit:** One archived page and a specified interaction.

**Agent work:** Locate the missing captured resource or repair a replay mapping so a menu, chart or document download works from the archive.

**Pass / useful output:** Replay against the captured assets and a documented reference; clearly label genuinely missing resources instead of fabricating historical content.

### 27. Scientific papers, tables and citation chains

Keep the unit at a value, a figure, a citation or a reproducibility fixture. A mechanically supported correction or recovered dataset can help scientists even when no new hypothesis is proposed.

#### M103. Recover dataset tables trapped in scanned biodiversity literature

**Corpus:** [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

**Access:** Public BHL scans and accessible page images.

**Parallel unit:** One table with its caption and footnotes.

**Agent work:** Transcribe values, units and taxon names into a schema while preserving uncertainty and original nomenclature.

**Pass / useful output:** Independent spot transcription, totals and source overlays verify the extraction; distinguish actual zero, blank and illegible cells.

#### M104. Find cited retracted papers still presented as supporting evidence

**Corpus:** [Crossref, Retraction Watch documentation](https://www.crossref.org/documentation/retrieve-metadata/retraction-watch/); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Public retraction metadata and accessible citing papers.

**Parallel unit:** One citing passage and the cited record.

**Agent work:** Resolve the citation and recover the exact role it plays, including whether the citing paper already discusses the retraction.

**Pass / useful output:** Source passages and retraction dates establish the flag. A citation alone is not an error; return only accurately classified uses for review.

#### M105. Link a published figure to its missing or mislabeled public data table

**Corpus:** [HEPData, Submission Help](https://www.hepdata.net/submission); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

**Access:** Public papers and repositories with corresponding records.

**Parallel unit:** One figure/table pair.

**Agent work:** Match axes, units, binning and values to recover a broken dataset link or demonstrate a label mismatch.

**Pass / useful output:** Replot from the candidate data and compare visible points/axes; record approximations and any missing transformation.

#### M106. Repair a broken scientific reproduction package one failing input at a time

**Corpus:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

**Access:** Public benchmark/repository packages and their declared inputs.

**Parallel unit:** One reproducible missing-path, dependency or file-format failure.

**Agent work:** Make the supplied analysis execute and reproduce its declared table or figure under a pinned environment.

**Pass / useful output:** Independent rerun matches the reference within justified tolerance and preserves the scientific computation. A package that runs but changes the result has not passed.

### 28. Maps, catalogues and public-service records

These finish the main queue with relatively small units whose aggregate value can be large: a corrected route, catalogue entry or historically mapped crossing.

#### M107. Recover an old stream’s culverted street crossing

**Corpus:** [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview).

**Access:** Public historical map editions.

**Parallel unit:** One crossing and its mapped chronology.

**Agent work:** Join stream lines, bridge/culvert symbols and renamed streets to expose missing segments in a local historical drainage map.

**Pass / useful output:** Aligned source crops support the segment and uncertainty; the result records historical geography, not an inferred flood probability.

#### M108. Repair transit-feed errors with a passenger-visible reproduction

**Corpus:** [MobilityData, Canonical GTFS Schedule Validator](https://github.com/MobilityData/gtfs-validator).

**Access:** Public GTFS feeds and validator.

**Parallel unit:** One failing route, stop pair or service date.

**Agent work:** Find defects that break a concrete itinerary, then propose the smallest source-supported data correction.

**Pass / useful output:** The official validator and a replayed itinerary pass; published service information supports the corrected trip. Validator-clean alone does not establish the timetable is true.

#### M109. Rescue mangled catalogue fields during a library-record migration

**Corpus:** [Library of Congress MARC record examples](https://loc.gov/marc/bibliographic/examples.html).

**Access:** Public MARC examples plus permitted real failing records.

**Parallel unit:** One record or field/subfield case.

**Agent work:** Repair encoding, linkage or field interpretation that loses a title, edition, subject or holding during conversion.

**Pass / useful output:** Compare against MARC definitions and the original record, then retrieve the item through the destination catalogue’s intended search workflow.

### 29. Astronomical archive leftovers and repeat surface images

These are established fields with substantial automation. Launch against a documented coverage gap or unresolved candidate queue. Recovering an observation or a coordinate error is a bounded result; proving a new astronomical mechanism is not.

#### M110. Find an asteroid in an exposure taken before its discovery

**Corpus:** [Canadian Astronomy Data Centre, SSOIS Documentation](https://www3.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois/documentation.html); [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc).

**Access:** Public searchable exposure metadata and accessible survey images.

**Parallel unit:** One predicted object/exposure intersection with an uncertainty region.

**Agent work:** Retrieve plausible precovery detections using the known object’s predicted position and motion; include non-detections when the image is genuinely constraining.

**Pass / useful output:** An independent astrometric reduction and agreement across exposures support identity. The accepted output is an observation packet suitable for astronomer review, not an orbit asserted from one bright pixel.

#### M111. Find a missed stellar outburst in digitized photographic plates

**Corpus:** [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/).

**Access:** Public DASCH releases and available plate cutouts.

**Parallel unit:** One star’s suspect bright epoch plus neighbouring/control images.

**Agent work:** Retrieve excursions absent from the chosen event catalogue; compare nearby stars and plate quality to discard scratches and calibration failures.

**Pass / useful output:** A reviewer sees the source cutouts and independently reduced controls; require additional support before promoting a photographic candidate to an astrophysical event.

#### M112. Recover incorrect image times from archived telescope records

**Corpus:** [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc); [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/).

**Access:** Public image headers and available plate logs or supporting exposures.

**Parallel unit:** One header/log mismatch or a short exposure sequence.

**Agent work:** Detect inconsistent timezones, date transcription errors or swapped exposure IDs using explicit logs and known sequence relationships.

**Pass / useful output:** The corrected time is supported by documentary or independent exposure evidence. Do not fit an unconstrained time merely to force agreement with a desired orbit.

#### M113. Find lunar surface changes omitted from an existing temporal catalogue

**Corpus:** [LROC published new-crater catalogue and temporal-image references](https://data.lroc.im-ldi.com/lroc/view_rdr/SHAPEFILE_GLOBAL_NEW_CRATERS).

**Access:** Public LROC products and the published new-crater layer.

**Parallel unit:** One suitable before/after image patch.

**Agent work:** Search outside catalogued features for crater or ejecta candidates, with resolution and illumination checks and a frozen catalogue date.

**Pass / useful output:** Aligned native-resolution crops establish a change candidate; recover known examples in a held-out set. Automated crater discovery already exists, so only verified additions count.

#### M114. Audit Mars terrain products for missing features or processing defects

**Corpus:** [HiRISE released terrain models and source image pairs](https://www.uahirise.org/dtm/); [PDS Geosciences planetary data holdings](https://pds-geosciences.wustl.edu/dataserv/holdings.html).

**Access:** Public HiRISE terrain products and their source imagery.

**Parallel unit:** One terrain tile and corresponding stereo images.

**Agent work:** Retrieve seams, holes, duplicated blocks or feature boundaries inconsistent with the visible source, producing a defect packet useful to archive maintainers.

**Pass / useful output:** Source stereo views and a profile confirm the defect rather than a real cliff or shadow. A pretty hillshade alone cannot establish a terrain-model error.

### 30. Repeated experiments and damaged scientific records

A spreadsheet cell or record pair makes a better first challenge than a whole new meta-analysis. Use published identifiers, reference labels and original data to turn errors into short, reproducible counterexamples.

#### M115. Undo spreadsheet date conversion in a gene table

**Corpus:** [Abeysooriya et al., Gene name errors: Lessons not learned](https://doi.org/10.1371/journal.pcbi.1008984).

**Access:** Public supplementary tables and authoritative gene-name references.

**Parallel unit:** One suspicious cell with its column and original-source context.

**Agent work:** Recover a gene symbol transformed into a date only where the pre-conversion value is unambiguous from a source or identifier.

**Pass / useful output:** The authoritative identifier and source evidence agree; ambiguous date-to-symbol mappings remain unresolved. Never silently turn every date-like value into a gene.

#### M116. Find the same clinical experiment counted twice in a review

**Corpus:** [Cochrane, Data package user guide](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html); [ClinicalTrials.gov data API](https://clinicaltrials.gov/data-api/api); [PMC open-access full-text subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/).

**Access:** Available review data packages, trial records and papers.

**Parallel unit:** One pair of study entries that may share participants.

**Agent work:** Match trial IDs, recruitment sites/dates, interventions and participant counts to identify duplicate reports treated as independent samples.

**Pass / useful output:** Source-backed links and the review’s extraction rows make the double count inspectable; distinguish overlapping cohorts from separate trials by the same team.

#### M117. Find a meta-analysis arithmetic error with one small counterexample

**Corpus:** [Cochrane, Data package user guide](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html).

**Access:** Public review data package and stated analysis method.

**Parallel unit:** One outcome table or included-study calculation.

**Agent work:** Recompute the declared effect or total from its reported inputs; locate sign flips, wrong denominators or transposed standard errors.

**Pass / useful output:** An independent calculation and source rows verify the discrepancy. Methodological disagreements are not counted as arithmetic errors.

#### M118. Recover cell-identity swaps in annotated time-lapse microscopy

**Corpus:** [EMBL-EBI, BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/).

**Access:** Public time-lapse datasets with tracking annotations; choose a usable labelled subset.

**Parallel unit:** One short track segment around a suspected swap.

**Agent work:** Retrieve implausible identity switches, missed divisions or duplicated tracks and propose a corrected local annotation.

**Pass / useful output:** A biologist can inspect the short sequence and agreed tracking rules; test on curated examples. The output repairs a label, not an inferred biological mechanism.

## Access limits, novelty and deferred ideas

These are retained because they are interesting, but are not promoted as ready-to-shard public-data challenges.

1. **Stasi torn-file reconstruction.** A compelling finite matching task if a partner supplies scans and a validation process. The Bundesarchiv’s reconstruction programme concerns hand-torn documents; a generally downloadable fragment corpus was not established in this research. Treat data partnership as the prerequisite, not a detail an agent can assume away. [Official reconstruction programme](https://www.bundesarchiv.de/stasi-unterlagen-archiv/rekonstruktion/).
2. **Doggerland’s industrial seismic and magnetic side channels.** Offshore surveys can preserve submerged-landscape evidence collected for other purposes. Public bathymetry supports the main queue; particular seismic or magnetic collections may need an operator/research partnership. Locating a buried valley is easier to verify than asserting a previously unknown civilization. [Bradford on seismic evidence](https://www.bradford.ac.uk/news/archive/2022/uks-renewed-focus-on-energy-security-could-lead-to-more-archaeological-discoveries-under-the-north-sea.php); [magnetic survey programme](https://www.bradford.ac.uk/news/archive/2023/magnetic-fields-to-be-used-to-explore-submerged-civilisations.php).
3. **Ocean sounds that reveal an unknown species or explain a changing ecosystem.** Retrieving a known call type, broken recording or missing calibration can be bounded. Inferring species novelty, animal abundance or the reason the ocean sounds different usually needs a deeper inference chain. Preserve the original acoustic niche and hardware cards below, but require a labelled sound event and an available archive before launching a main-queue task. [NOAA ocean archive](https://www.ncei.noaa.gov/products/ocean-exploration).
4. **Predicting drug shortages.** Keep the ambition. The main queue first recovers product identities and historically dated statements; predictive claims need appropriate historical snapshots and held-out outcomes. A current-status API alone cannot provide a leakage-free retrospective test. [Shortage API](https://open.fda.gov/apis/drug/drugshortages/explore-the-api-with-an-interactive-chart/).
5. **Discovering new physiological relationships from women’s health data.** SWAN and other cohorts are valuable but widely studied. Source-backed extraction and cross-wave audits fit the brief; new causal claims about hormones or lifestyle usually do not. [SWAN data](https://www.swanstudy.org/swan-research/data-access/); [Women’s Health Initiative access](https://www.whi.org/md/access-to-whi-data).
6. **Small hormone and exercise sensor pilots.** mcPHASES combines hormone/wearable/self-report data for 42 participants and requires a data-use agreement. Some phase labels depend on a device’s interpretation, so they are not an independent physiological gold standard. It could support a bounded timestamp, unit or missingness audit after access. The open wrist PPG/ECG exercise dataset has eight participants: useful as a calibration fixture, not evidence for broad personal health recommendations. [mcPHASES](https://www.physionet.org/content/mcphases/1.0.0/); [wrist dataset](https://physionet.org/content/wrist/1.0.0/); [BioCycle context](https://www.nichd.nih.gov/about/org/diphr/officebranch/eb/biocycle).
7. **Whole-product TurboTax replacements and XP-only critical applications.** These may be valuable, but the launch package needs an exact lawful workload, representative files and trusted outputs. The main queue supplies narrower migrations and actual failing fixtures. For legacy control software, a successful file converter is not proof that a hardware-control stack is safe or equivalent. Preserve the larger ambition without selling an unspecified rewrite as a parallel archive task. [Document Liberation](https://www.documentliberation.org/projects/); [Wine compatibility work](https://www.winehq.org/help).
8. **New dangerous-design discovery.** Matching an already recalled component or extracting an affected serial range is directly checkable. Establishing a previously unknown failure mechanism can require engineering work beyond a short review; retain it as a frontier idea. [CPSC recall data](https://www.cpsc.gov/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information).
9. **Moisture solvers, ecological causal explanations and broad mathematical discoveries.** Their original wording is preserved below. They are not currently recommended under the revised brief unless narrowed to a real failing fixture, source-data recovery or independently checked finite result with an explicit beneficiary. [Earlier wall-measurement dataset](https://doi.org/10.5281/zenodo.17778562); [original problem-list inspiration](https://www.lesswrong.com/s/yivyHaCAmMJ3CqSyj/p/LbrPTJ4fmABEdEnLf).
10. **Hardware that creates the missing dataset.** All 30 telescope, webcam, acoustic and environmental-sensor ideas remain in Appendix C. They answer the earlier hardware extension. They do not satisfy the new existing-data requirement until a usable archive has been collected. [Example: Exoplanet Watch’s defined observing contribution](https://science.nasa.gov/citizen-science/exoplanet-watch/how-to-contribute/how-to-observe/).

### Side channels that fit the revised brief

The best side channel often changes the retrieval key rather than requiring a scientific breakthrough: match a wreck’s dimensions to a loss report; use a museum inventory number instead of a painting title; locate a bridge through a predecessor ID; find a page through its distribution list; infer a missing scan from a plate index; reconnect a specimen using a collector’s number; use printed rainfall totals to find a bad digit. Each gives an independent check on a small claim. Public offshore survey metadata can also reveal where useful observations already exist even when nobody has indexed them for archaeology.

The interesting but harder side channels—magnetic anomalies as archaeological evidence, acoustic propagation as an ecological signal, satellite motion as a proxy for unobserved physical properties—remain candidates for a separate research list if their validation grows beyond a short evidence packet.

## Appendix A: all 150 original cards

**Preserved idea bank, not the filtered recommendation queue.** All original targets, checks, difficulty labels, first milestones and starting-point notes are retained below, with direct source links on every card. Some original verification estimates were optimistic under the user’s refined brief. The main queue and access corrections above take precedence. Keeping a card here does not endorse an unresolved scientific inference as easy to verify.

Original verification codes: **A** = automatic check after evaluator setup; **N** = brief human inspection; **E** = specialist review; **S** = a reproducible model or simulation result, with real-world validity a separate question. Original Starter / Stretch / Frontier labels are qualitative first-milestone estimates, not measured compute budgets.

### Original category: Earth observation and hidden landscapes

#### A001. Find the buried river a city has forgotten

**Original verification / milestone:** N+E · Stretch.

Reconstruct one town’s former stream network by registering Sanborn maps and historical topographic sheets to modern coordinates, then tracing channels across editions, culverts, and street renamings.

**Original check:** Deliver aligned map crops and independently supported channel segments. A local archivist or hydrologist checks a small packet; score recovered historical geography separately from any flood-risk inference.

**Original climb:** One street crossing → one catchment → a reusable historical drainage layer.

**Original starting point and proposed contribution:** Historical mapping exists; seek an unintegrated locality and previously unlinked records rather than rediscovering a published lost-river map.

**Sources:** [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview).

#### A002. Locate a forgotten industrial site before its history is lost

**Original verification / milestone:** N+E · Stretch.

For one town, find former gasworks, tanneries, or metal-processing sites in historic maps and directories that are missing from a chosen public historical land-use inventory.

**Original check:** Use at least two independent dated records and a parcel/coordinate crosswalk. A reviewer can confirm former use; contamination requires separate evidence.

**Original climb:** One confirmed omission → the town’s missing sites → an inventory-ready evidence layer.

**Original starting point and proposed contribution:** The new result is a documented inventory omission, not a satellite-only claim that a property is contaminated.

**Sources:** [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [USGS, topoView](https://www.usgs.gov/tools/topoview); [USGS, Geospatial Data](https://www.usgs.gov/geospatial-data).

#### A003. Find mine-waste sites hiding behind changing names

**Original verification / milestone:** N+E · Frontier.

Cross-link historic mine names, mineral-resource records, company reports, and time-series imagery to identify an unlisted or mislocated waste-storage footprint in a registered region.

**Original check:** Provide the name history, dated maps, georegistration uncertainty, and corroborating imagery. A geologist checks the site identity; do not infer stability or toxicity from appearance.

**Original climb:** One source-confirmed location → a regional correction set → curator-ready records.

**Original starting point and proposed contribution:** Mining inventories and remote sensing exist; the target is a new joined-up record that individual datasets fail to expose.

**Sources:** [USGS, Geospatial Data](https://www.usgs.gov/geospatial-data); [USGS, Mineral resource database for deposits related to the Midcontinent Rift](https://www.govinfo.gov/content/pkg/GOVPUB-I19-PURL-gpo150819/pdf/GOVPUB-I19-PURL-gpo150819.pdf).

#### A004. Recover an ancient irrigation network erased by modern farming

**Original verification / milestone:** N+E · Frontier.

Use CORONA imagery to trace candidate canals in an already studied archaeological region, reconstruct connections and gradients, and compare with published site maps and later imagery.

**Original check:** Give georeferenced image strips, topology, slope checks, and matches in independent records. An archaeologist verifies candidate features; restrict sensitive location release through the host project.

**Original climb:** One evidenced canal segment → a coherent network → an updated heritage layer.

**Original starting point and proposed contribution:** CORONA archaeology already exists. The proposed contribution is a new network reconstruction or extension in a defined gap, not the use of spy imagery itself.

**Sources:** [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0); [USGS, topoView](https://www.usgs.gov/tools/topoview).

#### A005. Find the few drainage ditches that matter most for peat restoration

**Original verification / milestone:** A/S+E · Frontier.

Extract ditch topology from public English LiDAR in a mapped peatland and search for a small set of hypothetical blocking locations that most reduces modeled drainage under fixed constraints.

**Original check:** Check terrain-derived topology against aerial imagery and published surveys; independently rerun the hydrological scenarios. A hydrologist reviews the candidate design packet.

**Original climb:** One validated ditch network → a constrained intervention ranking → uncertainty-tested alternatives.

**Original starting point and proposed contribution:** The deliverable is a digitally verified restoration proposal. Its field performance is a later question; no new fieldwork is needed to produce the initial result.

**Sources:** [Environment Agency, LIDAR Composite Digital Terrain Model, 1m](https://www.data.gov.uk/dataset/01b3ee39-da3f-47b6-83da-dc98e73a461f/lidar-composite-digital-terrain-model-dtm-1m).

#### A006. Find old ponds that disappeared from the maps

**Original verification / milestone:** N+E · Stretch.

Compare historical topographic maps, surface-water histories, and modern terrain for one catchment to recover former ponds or flood-storage features omitted from a current inventory.

**Original check:** Attach dated map evidence and compatible terrain/imagery for each feature. A reviewer checks historical existence; modeled restoration benefits are reported separately.

**Original climb:** One confirmed former pond → a catchment inventory → restoration-screening inputs.

**Original starting point and proposed contribution:** Pond mapping exists. The fresh contribution is recovering undocumented features by linking otherwise separate archives.

**Sources:** [USGS, topoView](https://www.usgs.gov/tools/topoview); [European Commission Joint Research Centre, Global Surface Water: Data Access](https://global-surface-water.appspot.com/download).

#### A007. Recover the pre-satellite history of a shrinking lake

**Original verification / milestone:** N+E · Frontier.

Extend one lake’s measured shoreline chronology backward using existing CORONA photographs and historical map sheets, with explicit image-registration and water-boundary uncertainty.

**Original check:** Validate the method on overlapping modern imagery with known boundaries, retain each contour’s source, and have a remote-sensing specialist inspect a few hard cases.

**Original climb:** One historical shoreline → a dated sequence → a reusable area time series.

**Original starting point and proposed contribution:** Water histories exist; select a lake and period absent from the relevant published series. New historical measurements are the success condition.

**Sources:** [USGS EROS, Declassified Satellite Imagery-1](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-declassified-data-declassified-satellite-imagery-1?qt-science_center_objects=0); [European Commission Joint Research Centre, Global Surface Water: Data Access](https://global-surface-water.appspot.com/download).

#### A008. Find false forest-loss alerts caused by the image pipeline

**Original verification / milestone:** A+E · Stretch.

For a public forest-change product and one biome, isolate false alerts caused by clouds, seasonal flooding, image seams, or registration shifts, then patch the decision pipeline.

**Original check:** Use multiple dated optical/radar views and a hidden independently labeled sample. Report precision and recall together so reducing false alarms does not hide real loss.

**Original climb:** One failure mechanism → corrected held-out alerts → an upstream method improvement.

**Original starting point and proposed contribution:** Forest monitoring exists. A previously unresolved, reproducible false-alert mechanism is the contribution, with concrete value for conservation analysts.

**Sources:** [ESA, How to access Earth observation data](https://www.esa.int/Applications/Observing_the_Earth/How_to_access_data).

#### A009. Find a recurring methane signal that single images miss

**Original verification / milestone:** A+E · Frontier.

Use public EMIT imaging-spectroscopy data to test whether repeated weak enhancements at a fixed location become detectable through physically informed multi-pass aggregation.

**Original check:** Preregister the aggregation, use held-out overpasses and negative-control sites, inject synthetic signals to estimate sensitivity, and check against released plume products. A specialist reviews the retrieval.

**Original climb:** One reproducible subthreshold signal → independent-pass support → a candidate plume report.

**Original starting point and proposed contribution:** EMIT already detects methane. The frontier is reliable recovery below a single-pass threshold; source attribution and emission rate need their own evidence.

**Sources:** [NASA Earthdata / EMIT Science Team, Methane data workshop resources](https://forum.earthdata.nasa.gov/viewtopic.php?t=5339).

#### A010. Spot a ground-motion pattern that nobody has connected to an asset

**Original verification / milestone:** A+E · Stretch.

Cross-link public European Ground Motion Service measurements with openly mapped reservoirs, embankments, or public buildings to find an unreported coherent change in a registered area.

**Original check:** Check stable reference points, neighboring scatterers, temporal consistency, and available ascending/descending products. A geodesist reviews the evidence before any engineering interpretation.

**Original climb:** One coherent pattern → a verified asset association → an inspection-priority candidate.

**Original starting point and proposed contribution:** Ground-motion mapping already exists. The new value is an overlooked, well-supported linkage and concise evidence packet, not a remote diagnosis of structural failure.

**Sources:** [European Environment Agency, European Ground Motion Service](https://www.eea.europa.eu/en/datahub/datahubitem-view/b67d6289-bc0b-486b-b4ce-d08eb397d337).

### Original category: Biological discoveries in existing images

#### A011. Find a rare cell phenotype lost inside average measurements

**Original verification / milestone:** A+E · Frontier.

In JUMP Cell Painting data, test whether a perturbation produces a reproducible rare subpopulation—such as multinucleated cells—that disappears when morphology is averaged by well.

**Original check:** Use blinded image review, replicate wells, held-out plates and batches, and a preregistered phenotype definition. Report effect sizes and sampling uncertainty.

**Original climb:** One image-confirmed phenotype → independent replicates → an annotated reusable subset.

**Original starting point and proposed contribution:** Cell Painting analysis is established. The question targets an overlooked distributional effect, not another average-profile embedding.

**Sources:** [Broad Institute, JUMP-Cell Painting Consortium](https://jump-cellpainting.broadinstitute.org/); [Broad Institute, Cell Painting Gallery](https://github.com/broadinstitute/cellpainting-gallery).

#### A012. Separate a real biological signal from where the well sat on the plate

**Original verification / milestone:** A+E · Stretch.

For a published JUMP morphology association, test whether plate position, illumination, confluence, or batch explains the apparent effect, and construct a correction that preserves positive controls.

**Original check:** Hold out whole plates and perturbation replicates, inspect corrected image neighborhoods, and compare control recovery. A biologist checks the interpretation.

**Original climb:** One confounded association → a corrected analysis → a transferable normalization patch.

**Original starting point and proposed contribution:** Batch correction exists. The new result is a specific explained artifact and independently demonstrated improvement on this corpus.

**Sources:** [Broad Institute, JUMP-Cell Painting Consortium](https://jump-cellpainting.broadinstitute.org/); [Broad Institute, Cell Painting Gallery](https://github.com/broadinstitute/cellpainting-gallery).

#### A013. Find proteins whose location changes with the cell cycle

**Original verification / milestone:** A+E · Frontier.

In Human Protein Atlas images, test a registered protein subset for consistent localization changes across inferred cell-cycle states, using nuclear morphology and documented markers where available.

**Original check:** Require image-level evidence across replicates, separate cell lines, and independent antibodies when available. A cell biologist reviews candidate montages; absent orthogonal support remains explicit.

**Original climb:** One reproducible candidate → an independently supported subset → a searchable evidence atlas.

**Original starting point and proposed contribution:** HPA already studies subcellular variation. Select proteins without an existing documented result; image association alone does not prove a mechanism.

**Sources:** [Human Protein Atlas, The human cell in data](https://www.proteinatlas.org/humanproteome/subcellular/data).

#### A014. Recover a missed component from an old cryo-EM dataset

**Original verification / milestone:** A+E · Frontier.

Reanalyze an open EMPIAR dataset for a benign protein complex whose published reconstruction leaves a consistent peripheral density unexplained. Test whether focused classification recovers a stable component.

**Original check:** Use independent particle halves, held-out particles, reproducible maps, and controls against reference bias. A structural biologist inspects density and proposed assignment separately.

**Original climb:** One reproducible density → improved local reconstruction → a supported candidate assignment.

**Original starting point and proposed contribution:** Reanalysis is established. The new result is additional reproducible structure in an underexplored dataset; chemical identity may remain a hypothesis.

**Sources:** [EMBL-EBI, EMPIAR](https://www.ebi.ac.uk/empiar/).

#### A015. Find a minority molecular shape that the original average erased

**Original verification / milestone:** A+E · Frontier.

In one public ribosome or other benign-complex cryo-EM dataset, search for a minority conformational state using independent classification methods and prespecified reproducibility tests.

**Original check:** Reconstruct the state from disjoint particle sets, test stability across initializations, and provide particle membership and held-out fit metrics for specialist review.

**Original climb:** One stable class → an independently reproduced map → a quantitative state comparison.

**Original starting point and proposed contribution:** Conformational classification exists. The fresh contribution is a previously unreported state supported by the archived data; its biological role is a separate question.

**Sources:** [EMBL-EBI, EMPIAR](https://www.ebi.ac.uk/empiar/).

#### A016. Repair cell lineages where trackers silently swapped identities

**Original verification / milestone:** A+E · Stretch.

For an open time-lapse microscopy dataset, use whole-video reasoning to repair identity swaps through division, overlap, and temporary disappearance, then recompute one published lineage statistic.

**Original check:** Provide short before/after video clips and independently labeled held-out tracks. Check event consistency and demonstrate the statistic’s dependence on confirmed corrections.

**Original climb:** One identity swap → a corrected lineage tree → a robust tracking contribution.

**Original starting point and proposed contribution:** Tracking software exists. Long-context resolution of a real hard sequence and its scientific consequence define the new result.

**Sources:** [EMBL-EBI, BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/).

#### A017. Recover flowering dates already sitting in specimen photographs

**Original verification / milestone:** A+E · Stretch.

For one common plant species and region, label flowering state in historical herbarium images and combine it with specimen dates to build a missing phenology series.

**Original check:** Use blinded botanist review, hold out herbaria, and publish every image/date link. Model collection bias explicitly and separate the recovered observations from climate-causality claims.

**Original climb:** One verified specimen set → a century-spanning series → a reusable labeled dataset.

**Original starting point and proposed contribution:** Herbarium phenology is established. Choose an unmeasured species-region series and contribute new vetted observations.

**Sources:** [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

#### A018. Make a museum’s hidden internal anatomy measurable

**Original verification / milestone:** A+E · Frontier.

For an openly reusable MorphoSource micro-CT collection of one taxon, segment an understudied structure such as an inner-ear cavity or tooth-replacement series and extract comparable geometry.

**Original check:** Compare surfaces to raw slices, use blinded landmark checks and inter-annotator tolerances, and test cross-specimen alignment. An anatomist reviews representative segmentations.

**Original climb:** One reliable structure → a collection-wide measurement set → a testable comparative result.

**Original starting point and proposed contribution:** 3D morphology research exists. The contribution is a newly measured structure or collection; dataset permissions and available resolution determine the target.

**Sources:** [MorphoSource, Frequently Asked Questions for Collections](https://www.morphosource.org/for-collections/faq/).

#### A019. Find the same biological specimen hiding under two identities

**Original verification / milestone:** A+E · Stretch.

Cross-match public specimen images and metadata for exact or near-exact duplicates assigned different accessions, dates, or localities, then trace the original labels.

**Original check:** Use image correspondences and accession history, not appearance alone. A curator confirms identity and which metadata are authoritative.

**Original climb:** One resolved duplicate → a corrected collection → a reusable duplicate-evidence tool.

**Original starting point and proposed contribution:** Deduplication exists. A new resolved identity conflict can prevent double counting and restore provenance without requiring a new experiment.

**Sources:** [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/); [EMBL-EBI, BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/); [MorphoSource, Frequently Asked Questions for Collections](https://www.morphosource.org/for-collections/faq/).

#### A020. Find a microscopy segmentation error that changes the conclusion

**Original verification / milestone:** A+E · Stretch.

For a fully open imaging study, test whether merged nuclei, missing small cells, or boundary truncation systematically changes the reported morphology statistic.

**Original check:** Hand-label a blinded stratified sample, rerun the original and corrected pipelines, and quantify the difference on held-out images. A biologist reviews its scientific meaning.

**Original climb:** One bias mechanism → corrected held-out estimates → an upstream segmentation fix.

**Original starting point and proposed contribution:** Segmentation benchmarks exist. The novel result is a study-specific, reproducible correction with a demonstrated effect on an actual reported quantity.

**Sources:** [EMBL-EBI, BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/); [Broad Institute, JUMP-Cell Painting Consortium](https://jump-cellpainting.broadinstitute.org/).

### Original category: Astronomy, geophysics, and raw-signal recovery

#### A021. Find an asteroid in photographs taken before anyone knew it existed

**Original verification / milestone:** A+E · Frontier.

For a known object with a poorly constrained orbit, use archival image footprints and orbit uncertainty to search for unreported earlier detections, including trailed or blended appearances.

**Original check:** Provide calibrated cutouts, astrometric uncertainties, independent-night detections, and a refit that predicts withheld positions. An astronomer checks the submission packet.

**Original climb:** One accepted precovery → a materially longer arc → a reusable difficult-image search method.

**Original starting point and proposed contribution:** SSOIS and archival asteroid searches exist. The target is a new object-specific observation beyond their recorded results.

**Sources:** [Canadian Astronomy Data Centre, SSOIS Documentation](https://www3.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois/documentation.html); [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc).

#### A022. Find a stellar outburst hiding on an old glass plate

**Original verification / milestone:** A+E · Frontier.

For a registered source set, search DASCH plate scans and light curves for previously unreported outbursts, explicitly modeling plate defects, blends, limiting magnitude, and calibration changes.

**Original check:** Require support on independent plates where available, inspect image morphology, and compare with nearby constant stars. A specialist verifies the event candidate.

**Original climb:** One convincing event → corroborating historical observations → a vetted catalogue addition.

**Original starting point and proposed contribution:** Historical time-domain astronomy exists. The result is a new supported event, not merely an unusual point in a light curve.

**Sources:** [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/).

#### A023. Measure a century of changing stellar clocks

**Original verification / milestone:** A+E · Frontier.

For an underanalyzed eclipsing-binary subset, combine historical DASCH observations with public modern timings to test whether one constant-period ephemeris fits the full baseline.

**Original check:** Publish timing likelihoods and cycle-count alternatives; fit on part of the timeline and predict held-out epochs. A stellar astronomer reviews accepted period-change cases.

**Original climb:** One resolved cycle count → a long-baseline timing result → an open timing catalogue.

**Original starting point and proposed contribution:** Period studies exist. Choose systems without a current equivalent analysis; a changing period does not by itself identify its physical cause.

**Sources:** [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/); [NASA HEASARC, TESS Data Products Information](https://heasarc.gsfc.nasa.gov/docs/tess/data-products.html).

#### A024. Find an infrared echo of a flare already seen in visible light

**Original verification / milestone:** A+E · Frontier.

Cross-match a frozen public optical-transient list with NEOWISE single-exposure histories and search for delayed infrared brightening consistent across independent visits.

**Original check:** Use control positions, image-level blend checks, withheld visits, and a preregistered lag statistic. Publish candidates with uncertainty and alternative explanations.

**Original climb:** One reproducible lagged signal → an independently supported event → a vetted cross-survey catalogue.

**Original starting point and proposed contribution:** Infrared-echo studies exist. The contribution is a new supported archival event or a rigorously improved recovery method.

**Sources:** [NASA/IPAC, NEOWISE Project](https://neowise.ipac.caltech.edu/).

#### A025. Find a telescope timestamp error that corrupted many measurements

**Original verification / milestone:** A+E · Stretch.

For an open instrument archive with discrepant timing, compare FITS metadata, observing logs, reference-source behavior, and time-standard conventions to isolate a systematic offset.

**Original check:** Reproduce the error on multiple nights, show the exact conversion, and test against independent timed events. An astronomer checks time-scale and exposure conventions.

**Original climb:** One offset mechanism → a corrected exposure set → a permanent ingest or metadata fix.

**Original starting point and proposed contribution:** Calibration checks exist. The target is a newly demonstrated archive-wide fault with an exact, reviewable correction.

**Sources:** [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc); [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/).

#### A026. Find a gravitational lens whose confirming evidence is already archived

**Original verification / milestone:** A+E · Frontier.

Search a defined public imaging region for overlooked lens candidates, then join existing spectra and multi-band images to prioritize those with independent evidence already available.

**Original check:** Publish image cutouts, foreground/background redshift evidence where present, and a reproducible lens fit. A lensing specialist distinguishes confirmed systems from candidates.

**Original climb:** One strongly supported system → an archive-complete evidence packet → a catalogue addition.

**Original starting point and proposed contribution:** Lens finding is established. The frontier is completing a new system’s evidence from existing archives, avoiding dependence on a new observing campaign where possible.

**Sources:** [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc); [DESI, Data Release 1](https://data.desi.lbl.gov/doc/releases/dr1/).

#### A027. Recover an earthquake waveform trapped in microfilm

**Original verification / milestone:** A+E · Stretch.

From digitized WWSSN film chips, reconstruct calibrated waveforms for one historical event using trace geometry, time marks, component labels, and instrument response metadata.

**Original check:** Overlay extracted traces on scans, check timing across stations, and compare overlapping digital/reference records. A seismologist verifies calibration and usable bandwidth.

**Original climb:** One station trace → a multi-station event → a reusable waveform dataset.

**Original starting point and proposed contribution:** USGS already scans and classifies records. The contribution is newly usable, calibrated signal data from a previously unrecovered event/station slice.

**Sources:** [USGS, World-Wide Standardized Seismographic Network Film Chip Scans](https://catalog.data.gov/dataset/world-wide-standardized-seismographic-network-film-chip-scans); [USGS, World-Wide Standardized Seismograph Network: a data users guide](https://www.usgs.gov/publications/world-wide-standardized-seismograph-network-a-data-users-guide).

#### A028. Match the same volcanic ash layer across disconnected datasets

**Original verification / milestone:** A+E · Frontier.

For a defined region and age window, compare archived tephra glass chemistry across sediment cores, correcting units and analytical conventions, to identify a previously unlinked candidate correlation.

**Original check:** Use multivariate chemistry, age constraints, negative controls, and held-out known matches. A geochemist reviews the strongest packet; ambiguous matches remain candidate correlations.

**Original climb:** One credible link → independent supporting records → a better-connected chronology.

**Original starting point and proposed contribution:** Tephrochronology exists. The new contribution is an overlooked evidence-backed cross-dataset match, not chemical similarity alone.

**Sources:** [IEDA, EarthChem Portal](https://portal.earthchem.org/).

#### A029. Resolve a molecular-spectrum disagreement from the raw signal

**Original verification / milestone:** A+E · Frontier.

For a benign small-molecule dataset in nmrXiv, test whether conflicting reported peaks arise from referencing, phasing, solvent labels, or processing choices by reprocessing the raw NMR data.

**Original check:** Publish raw-to-spectrum scripts, peak comparisons, and an independent processing result. A spectroscopist checks the candidate correction; structure reassignment needs stronger evidence.

**Original climb:** One explained mismatch → corrected spectrum metadata → a reusable processing fix.

**Original starting point and proposed contribution:** nmrXiv supports raw-data reuse. The challenge is a new resolved discrepancy whose evidence can be checked without acquiring a new spectrum.

**Sources:** [nmrXiv, NMR File Formats](https://docs.nmrxiv.org/introduction/data/formats.html).

#### A030. Recover useful observations the original pipeline threw away

**Original verification / milestone:** A+E · Frontier.

Choose one small open astronomical instrument archive with rejected exposures and test whether modern background modeling, deblending, or distortion correction recovers scientifically usable measurements.

**Original check:** Calibrate on reference stars, hold out nights and fields, compare independent reductions, and publish recovered-versus-rejected decisions with uncertainty and failure examples.

**Original climb:** One recovered exposure class → a validated added data release → an upstream reduction improvement.

**Original starting point and proposed contribution:** Reprocessing archives is established. The new contribution is additional validated information from a registered previously unusable subset.

**Sources:** [NSF NOIRLab, Source Catalog](https://datalab.noirlab.edu/data/nsc); [Harvard CfA, DASCH DR7](https://dasch.cfa.harvard.edu/dr7/); [NASA/IPAC, NEOWISE Project](https://neowise.ipac.caltech.edu/).

### Original category: Investigations that have gone cold

#### A031. Follow an old public contract through a maze of renamed companies

**Original verification / milestone:** N+E · Stretch.

Reconstruct the supplier and amendment history of one historical public contract using public registers, award notices, invoices, and archived reports. Resolve alias changes and duplicate identifiers.

**Original check:** Every graph edge must cite a dated primary record; check monetary flows and separate documented links from inferred ones. A journalist reviews the compact chronology.

**Original climb:** One resolved identity chain → a reconciled contract history → a publishable evidence packet.

**Original starting point and proposed contribution:** Investigative databases exist. The new contribution is a specific previously unresolved relationship or discrepancy, without treating it automatically as corruption.

**Sources:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [Open Contracting, Data Review Tool](https://review.standard.open-contracting.org/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

#### A032. Find a promised public repair that vanished between reports

**Original verification / milestone:** N · Starter.

For a historical audit of one public service, trace each concrete corrective action through later budgets, minutes, implementation reports, and closure notices.

**Original check:** Link the original commitment to dated completion evidence or an explicit official statement of non-completion. Missing search results are marked unknown.

**Original climb:** One resolved recommendation → the audit’s action ledger → a verified follow-up brief.

**Original starting point and proposed contribution:** Promise trackers exist. This targets operational commitments with documentary finish lines rather than subjective political scoring.

**Sources:** [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/); [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia).

#### A033. Recover the history of a forgotten waste-disposal site

**Original verification / milestone:** N+E · Frontier.

Join publicly released historical facility maps, shipment or disposal records, and environmental reports to resolve one disputed or unmapped historical disposal location.

**Original check:** Provide a coordinate transformation, document chain, and corroborating map. An environmental historian or site specialist checks the claim; present-day contamination needs its own evidence.

**Original climb:** One location supported by two records → a complete chronology → an archive/inventory correction.

**Original starting point and proposed contribution:** This is archival investigation using already public records. The success condition is a new supported historical fact that can inform later remediation work.

**Sources:** [Library of Congress, Sanborn Maps collection](https://www.loc.gov/collections/sanborn-maps/about-this-collection/); [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A034. Find the supposedly lost report in a different archive

**Original verification / milestone:** N · Stretch.

Trace a missing technical report cited by later public documents using report numbers, institutional renamings, distribution lists, partial quotations, and alternate editions.

**Original check:** Confirm title, date, report identifier, cited passages, and completeness of the recovered copy. Distinguish a draft from the final report.

**Original climb:** One recovered report → restored citation links → an index of related missing reports.

**Original starting point and proposed contribution:** Archive search exists. The challenge is an actual unresolved missing document whose recovery answers a live historical or technical question.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A035. Reopen a useful project that died because one technical piece was missing

**Original verification / milestone:** A+E · Frontier.

Find a documented abandoned public-interest software or research project whose final report names a specific technical blocker, then test whether an open modern implementation removes it.

**Original check:** Reproduce the original failing requirement and demonstrate a working replacement on its reference case. Keep the original project’s broader feasibility separate.

**Original climb:** One recovered blocker → a working replacement → a revived minimal project.

**Original starting point and proposed contribution:** This combines archival discovery with engineering: the novel artifact is removal of a named historical bottleneck, not speculation about why a project failed.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A036. Recover publicly funded data that never reached its repository

**Original verification / milestone:** N+E · Stretch.

For a completed public research programme, reconcile deliverable lists against supplementary files, institutional archives, report attachments, and data repositories to find orphaned datasets.

**Original check:** Confirm provenance, completeness, and reuse rights; rebuild a small documented result from the recovered files. Preserve original identifiers and attribution.

**Original climb:** One recovered dataset → its missing documentation → a repository-ready package.

**Original starting point and proposed contribution:** Data repositories exist. The contribution is a previously inaccessible promised output found in an overlooked public location.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A037. Turn a declassified document pile into a testable chronology

**Original verification / milestone:** N+E · Frontier.

For one bounded historical question—such as when an agency first documented a particular environmental concern—resolve dates, distribution lists, document versions, and explicit cross-references across released records.

**Original check:** Publish a short chronology with original page evidence for every event and separate authored, received, and declassified dates. A historian checks the strongest claims.

**Original climb:** One newly established date → a corroborated sequence → a searchable source edition.

**Original starting point and proposed contribution:** The target is a narrow unanswered factual question. A relationship graph by itself is infrastructure, not the discovery.

**Sources:** [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A038. Recover a missing annex from another publicly released copy

**Original verification / milestone:** N · Starter.

Compare public versions of a historical report to locate omitted attachments, tables, or pages that survive in a different archive or release.

**Original check:** Match document identifiers and surrounding text, reconcile pagination, and show the exact public source of every recovered page.

**Original climb:** One annex → a complete report → a deduplicated, version-aware edition.

**Original starting point and proposed contribution:** Document comparison exists. A newly complete report is the result; use actual released content rather than guessing redacted text.

**Sources:** [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/); [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia); [US Department of Energy OSTI, Research results portal](https://www.osti.gov/).

#### A039. Explain a historical public-purchase price discrepancy

**Original verification / milestone:** A+E · Stretch.

For a specific archived purchase, compare invoiced quantities and unit prices with the applicable public price schedule, contract amendments, specifications, and delivery terms.

**Original check:** Provide an exact reconciliation including taxes, shipping, currency date, and scope changes. A procurement specialist reviews any remaining discrepancy.

**Original climb:** One reconciled invoice → a contract-wide ledger → an evidence-backed correction or finding.

**Original starting point and proposed contribution:** The challenge can succeed by explaining away an apparent discrepancy or documenting a real one. It does not require inferring anyone’s intent.

**Sources:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [Open Contracting, Data Review Tool](https://review.standard.open-contracting.org/); [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/).

#### A040. Find a useful recommendation that kept getting rediscovered

**Original verification / milestone:** N+E · Stretch.

Across a bounded series of public audits, identify substantively equivalent operational recommendations, trace earlier implementation attempts, and isolate the documented blocker that recurred.

**Original check:** Attach exact recommendation text, implementation records, and source-supported reasons. An analyst checks equivalence and whether the proposed technical remedy addresses the blocker.

**Original climb:** One repeated recommendation → a documented causal chain → a concrete repair prototype.

**Original starting point and proposed contribution:** The new contribution is a resolved institutional memory gap and usable next step, not another summary of reports.

**Sources:** [DocumentCloud, Public Documents](https://www.documentcloud.org/documents/); [US National Archives, Records of the CIA](https://www.archives.gov/research/intelligence/cia).

### Original category: Better designs for public proposals

#### A041. Replace three reporting obligations with one lossless submission

**Original verification / milestone:** A+E · Stretch.

For a specific consultation proposing overlapping reports, construct a canonical schema and transformations that reproduce every required field in all reports from one submission.

**Original check:** Demonstrate field-level coverage, round-trip transformations, and synthetic edge cases. An administrator checks that meanings and exceptions are preserved; benchmark actual completion steps.

**Original climb:** Two overlapping reports → a working combined form → a proposed clause and migration package.

**Original starting point and proposed contribution:** A current starting lead is the UK consultation on modernising corporate reporting, which explicitly considers duplication. The exact merge is an original design task.

**Sources:** [UK Government, Modernising corporate reporting consultation](https://www.gov.uk/government/consultations/modernising-corporate-reporting); [Government Digital Service, Make better use of data](https://www.gov.uk/guidance/make-better-use-of-data).

#### A042. Replace a policy cliff with a smooth rule that meets the same constraints

**Original verification / milestone:** A+E · Frontier.

For a proposed threshold rule, search for a piecewise formula that removes a discontinuity while meeting declared budget, monotonicity, and protected-group constraints on a registered dataset.

**Original check:** Prove algebraic properties and enumerate affected cases; test sensitivity to population assumptions. A policy analyst checks the constraints and distributional ledger.

**Original climb:** One threshold → a feasible alternative → a draft rule with a checkable comparison.

**Original starting point and proposed contribution:** This is constructive policy design. Success is an alternative satisfying explicit agreed constraints; broad political acceptability is not the verification target.

**Sources:** [UK Government, Modernising corporate reporting consultation](https://www.gov.uk/government/consultations/modernising-corporate-reporting); [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).

#### A043. Meet the same statistical assurance with fewer required samples

**Original verification / milestone:** A+E · Frontier.

For an openly specified non-clinical reporting or inspection regime, design a stratified or sequential sampling rule that meets its stated error guarantee at lower expected sample cost.

**Original check:** Prove the guarantee under explicit assumptions, simulate adversarial cases, and compare expected and worst-case cost. A statistician checks the initial model.

**Original climb:** One sampling rule → full cost/error curves → an implementable consultation alternative.

**Original starting point and proposed contribution:** Sampling theory exists. The new result is an application-specific rule outperforming the proposed design without weakening its stated assurance.

**Sources:** [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026); [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/).

#### A044. Cut a permit queue by changing the order, not the standard

**Original verification / milestone:** A/S+E · Frontier.

For a public process with documented review stages, search for parallelization, batching, or dependency changes that reduce completion time while preserving every required check and staffing limit.

**Original check:** Check the dependency graph and replay held-out or synthetic workloads with an independent simulator. An administrator reviews whether the proposed parallel checks are actually independent.

**Original climb:** One duplicated wait → a revised workflow → a quantified consultation proposal.

**Original starting point and proposed contribution:** Workflow optimization exists. The target is a specific smarter sequencing option missing from the current proposal.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).

#### A045. Ask for less personal data while making exactly the same decision

**Original verification / milestone:** A+E · Frontier.

For an openly specified eligibility process, derive the minimum sufficient input facts needed to reproduce its decision rule, replacing unnecessary raw documents with narrower attestations or computed facts.

**Original check:** Prove or exhaustively test decision equivalence within the stated domain. Have an administrator review exceptions and a privacy specialist check the remaining information disclosure.

**Original climb:** One removed field → a shorter equivalent form → a working prototype and revised instructions.

**Original starting point and proposed contribution:** Data minimization is established policy. The contribution is a concrete proof-backed redesign of a currently over-demanding process.

**Sources:** [Government Digital Service, Make better use of data](https://www.gov.uk/guidance/make-better-use-of-data); [UK Government, Principles for securing personal data in government services](https://www.gov.uk/guidance/principles-for-securing-personal-data-in-government-services).

#### A046. Share a repeated assessment without sharing everyone’s private records

**Original verification / milestone:** A+E · Frontier.

For two services that repeatedly verify the same narrow fact, design a reusable signed result with explicit scope, expiry, revocation, and user consent instead of repeated full-document review.

**Original check:** Replay both services’ synthetic acceptance cases, test expiry and revocation, and demonstrate exactly which data each recipient sees. A service specialist checks evidence requirements.

**Original climb:** One shared fact → two working services → a specification ready for public comment.

**Original starting point and proposed contribution:** Digital credentials exist. The new target is eliminating a particular duplicated assessment with a complete interoperable implementation.

**Sources:** [Government Digital Service, Make better use of data](https://www.gov.uk/guidance/make-better-use-of-data); [UK Government, Principles for securing personal data in government services](https://www.gov.uk/guidance/principles-for-securing-personal-data-in-government-services).

#### A047. Replace a bespoke compliance test with an equivalent existing one

**Original verification / milestone:** A+E · Frontier.

For one openly published draft technical requirement, identify an existing test whose acceptance conditions imply the proposed test, then specify the exact domain where reusing it is sufficient.

**Original check:** Provide a mathematical implication or exhaustive finite comparison plus counterexamples outside the domain. A standards specialist reviews the requirement mapping.

**Original climb:** One redundant test → an equivalence certificate → a proposed recognition clause.

**Original starting point and proposed contribution:** Test harmonization exists. The new contribution is a specific defensible equivalence that avoids duplicate effort while preserving the requirement.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).

#### A048. Write a procurement clause that makes switching vendors testable

**Original verification / milestone:** A+N · Stretch.

For a draft digital-service tender, replace a vague portability promise with a concrete export/import acceptance test and an open reference implementation.

**Original check:** Move synthetic records, attachments, permissions, and history between two independent implementations; verify declared semantics and document all failures.

**Original climb:** One portability requirement → a passing reference workflow → an insertable tender clause.

**Original starting point and proposed contribution:** Open standards exist. The new result is an executable specification that exposes an overlooked lock-in risk and shows how to remove it.

**Sources:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [Open Contracting, Data Review Tool](https://review.standard.open-contracting.org/).

#### A049. Find an option between “close the service” and “fund it unchanged”

**Original verification / milestone:** A/S+E · Frontier.

For a local-service consultation with published usage and cost assumptions, search combinations of opening hours, shared staffing, locations, and appointment modes that preserve a registered access standard at lower cost.

**Original check:** Publish a constraint-complete schedule and source-linked costs; test adverse demand scenarios and report effects for each modeled user group. An administrator reviews omitted constraints.

**Original climb:** One feasible hybrid → sensitivity-tested alternatives → an implementable option appraisal.

**Original starting point and proposed contribution:** This directly searches for an overlooked tradeoff. The deliverable is a new feasible option with a checkable witness and stated coverage.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).

#### A050. Find the combination of policy tweaks that beats every single tweak

**Original verification / milestone:** A/S+E · Frontier.

For a bounded proposal, encode a small set of independently understandable design choices and search their interactions for a combination that improves all registered outcome metrics relative to the draft.

**Original check:** Publish the exact combination, executable model, per-group results, and sensitivity ranges. Check for double-counted benefits and missing implementation costs.

**Original climb:** Two interacting tweaks → a robust Pareto improvement → a source-backed revised option.

**Original starting point and proposed contribution:** The contribution is a constructive alternative missed by one-change-at-a-time appraisal; verification applies to the declared model and evidence.

**Sources:** [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr); [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026).

### Original category: Concrete scientific reconciliation questions

#### A051. Resolve contradictory enzyme constants with thermodynamics

**Original verification / milestone:** A+E · Frontier.

For lactate dehydrogenase, compare public reversible kinetic parameter sets under matched temperature, pH, and reaction conventions. Determine which apparent disagreements follow from conventions and which violate the relevant equilibrium relationship.

**Original check:** Produce normalized source tables and symbolic/numerical residuals for the Haldane relationship. An enzymologist reviews reaction conventions; remaining conflicts stay unresolved.

**Original climb:** Two parameter sets → a condition-matched audit → machine-readable corrected candidates.

**Original starting point and proposed contribution:** Candidate scientific question, not a verified newly open problem. SABIO-RK supplies kinetic laws and conditions; check existing reconciliations first.

**Sources:** [Heidelberg Institute for Theoretical Studies, SABIO-RK](https://www.sabio.h-its.org/).

#### A052. Explain a viscosity disagreement without doing a new experiment

**Original verification / milestone:** A+E · Frontier.

For glycerol–water mixtures in ThermoML, determine which cross-paper viscosity discrepancies disappear after matching composition basis, temperature, density, and dynamic versus kinematic viscosity.

**Original check:** Publish every conversion and source value, propagate uncertainty, and test the proposed explanation against a withheld paper. Unexplained residuals remain visible.

**Original climb:** One discrepant pair → a withheld-paper test → a reusable harmonized dataset.

**Original starting point and proposed contribution:** This is a proposed reconciliation question. The existence of an unresolved discrepancy in the chosen records must be established during the first pass.

**Sources:** [NIST, ThermoML](https://www.nist.gov/mml/acmd/trc/thermoml).

#### A053. Untangle solubility values that use incompatible definitions

**Original verification / milestone:** A+E · Frontier.

For glycine in water, reconcile available solubility tables by temperature, polymorph where documented, and molality/molarity/mass-fraction conventions. Identify disagreements that are definitional rather than physical.

**Original check:** Attach page-level evidence and exact conversions; fit only on part of the data and check held-out sources. Do not infer an undocumented polymorph to force agreement.

**Original climb:** Two papers → one normalized comparison → an openly reusable table.

**Original starting point and proposed contribution:** A concrete candidate question rather than a claim of a new discovery; literature and database coverage must be checked before substantial compute.

**Sources:** [NIST, ThermoML](https://www.nist.gov/mml/acmd/trc/thermoml).

#### A054. Find a molecular benchmark error disguised as bad physics

**Original verification / milestone:** A+E · Frontier.

Audit a frozen CCCBDB subset for water, ammonia, and carbon dioxide isotopologues, checking whether experimental/computational mismatches arise from isotope, mode-label, or frequency-convention mismatches.

**Original check:** Link each candidate correction to original spectroscopy evidence and a reproducible recalculation. A spectroscopist checks a small packet for each accepted correction.

**Original climb:** One mode mismatch → one molecule family → a corrected comparison table.

**Original starting point and proposed contribution:** CCCBDB already compares calculations and experiments. The challenge is to identify a new, source-confirmed metadata or convention error.

**Sources:** [NIST, Using the CCCBDB](https://cccbdb.nist.gov/usingx.asp).

#### A055. Fix a crystal record by tracing its transformations

**Original verification / milestone:** A+E · Stretch.

For a public silica-structure subset in the Crystallography Open Database, locate conflicting representations caused by cell settings, symmetry transforms, units, or transcription.

**Original check:** Provide reversible coordinate transformations, recomputed distances and cell volumes, and the source record. A crystallographer checks the physical interpretation.

**Original climb:** One confirmed record pair → a corrected subset → a database-ready patch.

**Original starting point and proposed contribution:** COD already has validation and revision history. Passing its existing checks is the baseline; new source-backed corrections are the contribution.

**Sources:** [Crystallography Open Database, Querying the COD database](https://wiki.crystallography.net/howtoquerycod/).

#### A056. Stop a yeast model from making energy from nothing

**Original verification / milestone:** A+E · Stretch.

Find and repair an energy-generating cycle in a public Saccharomyces cerevisiae metabolic model under explicitly closed nutrient conditions, without breaking its validated growth tests.

**Original check:** Supply the offending reaction-flux witness, mass/charge accounting, and before/after constraint tests. A metabolic-model specialist checks the proposed reaction change.

**Original climb:** One cycle → a minimal repair → preserved benchmark growth behavior.

**Original starting point and proposed contribution:** memote and consistency tests exist. Success means a newly repaired model defect with biological justification, not another detector.

**Sources:** [memote, Genome-scale metabolic model test suite](https://memote.readthedocs.io/en/latest/).

#### A057. Determine whether an ocean-data jump is a sensor artifact

**Original verification / milestone:** A+E · Frontier.

For one public Argo float with a suspicious salinity discontinuity, test calibration-drift, timestamp, and processing-version explanations against nearby profiles and published quality flags.

**Original check:** Use versioned inputs and a preregistered comparison; hold out neighboring profiles. An ocean-data specialist checks the packet before any correction is treated as valid.

**Original climb:** One explained discontinuity → a reproducible diagnostic → a curator-ready report.

**Original starting point and proposed contribution:** Existing Argo quality control is the baseline. The attainable result is an evidence-backed case, not automatic certification of an ocean trend.

**Sources:** [Argo, Data FAQ](https://argo.ucsd.edu/data/data-faq/).

#### A058. Resolve competing transit timings using telescope data already collected

**Original verification / milestone:** A+E · Frontier.

Choose a known transiting object with discrepant published timing models and unincorporated public TESS observations. Test which model predicts the withheld observations better.

**Original check:** Freeze extraction, detrending, and model choices; compare timing residuals on unseen sectors and reproduce with a second reduction. An astronomer reviews the candidate result.

**Original climb:** One object → one decisive held-out comparison → an updated reproducible timing table.

**Original starting point and proposed contribution:** Transit analysis is mature. The first gate is finding a currently unresolved object-level disagreement, not announcing a new planet.

**Sources:** [NASA HEASARC, TESS Data Products Information](https://heasarc.gsfc.nasa.gov/docs/tess/data-products.html).

#### A059. Undo a spreadsheet’s damage to a gene table

**Original verification / milestone:** A+E · Starter.

Repair a published supplementary gene list whose identifiers were transformed into dates or otherwise mangled, using accession links, original platform annotations, and surrounding source evidence.

**Original check:** Require a unique source-supported mapping for each accepted repair; leave ambiguous cells unresolved. Recompute any directly affected lookup or enrichment output.

**Original climb:** One table → its affected analysis → a reusable provenance-preserving repair.

**Original starting point and proposed contribution:** Gene-name corruption is a known problem. A fresh corrected supplement and demonstrated downstream effect are the new artifacts.

**Sources:** [Abeysooriya et al., Gene name errors: Lessons not learned](https://doi.org/10.1371/journal.pcbi.1008984).

#### A060. Resolve a genome-annotation disagreement at the sequence level

**Original verification / milestone:** A+E · Frontier.

For a frozen Arabidopsis thaliana locus set, reconcile conflicting exon boundaries between two public annotation versions using existing transcript evidence and explicit genome-coordinate transforms.

**Original check:** Produce alignments and sequence-level witnesses, use held-out transcript data where possible, and have a plant-genomics specialist review accepted cases. Distinguish transcript support from functional proof.

**Original climb:** One locus → a small adjudicated set → a reproducible annotation patch.

**Original starting point and proposed contribution:** A candidate dataset-specific question; first establish that the selected loci remain unresolved rather than repeating an incorporated annotation update.

**Sources:** [TAIR, Araport11 Genome Annotation release README](https://www.arabidopsis.org/api/download-files/download?filePath=Genes%2FAraport11_genome_release%2Farchived%2FREADME.202103.md.pdf).

### Original category: Digital preservation and recovery

#### A061. Unlock a dead publishing format

**Original verification / milestone:** A+N · Stretch.

Recover editable text, images, and page layout from a donated corpus of Serif PagePlus documents. A family history or small charity newsletter should survive the disappearance of its original application.

**Original check:** Compare against original PDFs or renders; check every text span, image, page count, and reading order. Report unsupported objects rather than silently flattening them.

**Original climb:** One complete newsletter → 100 diverse files → an upstream import library.

**Original starting point and proposed contribution:** Documented lead: Document Liberation lists PagePlus among future import ideas; confirm current coverage before choosing versions.

**Sources:** [The Document Foundation, Document Liberation Project: Projects](https://www.documentliberation.org/projects/).

#### A062. Rescue a spreadsheet language from extinction

**Original verification / milestone:** A+N · Stretch.

Implement a reader and evaluator for a still-unsupported subset of Software602 602Tab, preserving formulas and dependencies rather than extracting cached values.

**Original check:** Recalculate a licensed or donated reference corpus in the original software and the replacement. Compare cells after randomized input changes, including errors and dates.

**Original climb:** Ten formulas → one working budget → the supported formula subset.

**Original starting point and proposed contribution:** Documented lead: 602Tab appears on Document Liberation’s future-import list. A text-only converter would not meet this challenge.

**Sources:** [The Document Foundation, Document Liberation Project: Projects](https://www.documentliberation.org/projects/).

#### A063. Recover damaged files without inventing missing content

**Original verification / milestone:** A · Frontier.

Build a format-aware recovery engine that combines redundant copies of corrupted open documents or archives. It must distinguish recoverable bytes, ambiguous alternatives, and irretrievably missing regions.

**Original check:** Hide pristine originals, inject realistic damage, and score exact recovery plus false claims of certainty. On real files, supply byte-level evidence for every certified recovered region.

**Original climb:** One format and damage type → mixed damage → donated real cases.

**Original starting point and proposed contribution:** Recovery tools exist; the proposed advance is explicit, independently checkable recovery certificates and calibrated abstention.

**Sources:** [The National Archives, About PRONOM](https://pronom.nationalarchives.gov.uk/about); [DigiPres, Digital Preservation Community Portal](https://www.digipres.org/).

#### A064. Make a dead interactive website work again

**Original verification / milestone:** A+N · Stretch.

Restore one archived public-interest calculator, educational exhibition, or interactive atlas whose pages load but its core interactions fail. Package a fully offline replay.

**Original check:** Run a frozen interaction script against historical expected outputs. Block all network access; check navigation, assets, calculations, and saved state.

**Original climb:** One broken interaction → a complete exhibit → a repair method for its framework.

**Original starting point and proposed contribution:** Webrecorder already supplies replay infrastructure; the task is repairing demonstrated failures in particular archived applications.

**Sources:** [Webrecorder, ReplayWeb.page](https://webrecorder.net/replaywebpage/).

#### A065. Bring back an abandoned educational simulation

**Original verification / milestone:** A+N · Stretch.

Port a licensed Java, Flash, or Shockwave teaching activity to a maintained runtime, preserving its actual experiment and feedback. Choose a title that current emulators cannot correctly run.

**Original check:** Compare logged state transitions and numerical outputs to an original installation or documented reference. Replay lessons from start to finish.

**Original climb:** One experiment → all lessons → keyboard and offline support.

**Original starting point and proposed contribution:** Emulation and educational ports exist. Novelty requires an unrecovered title or a documented semantic failure, not merely wrapping an emulator.

**Sources:** [Webrecorder, ReplayWeb.page](https://webrecorder.net/replaywebpage/); [PhET, Inclusive Features: Prototypes](https://phet.colorado.edu/el/inclusive-design/prototypes).

#### A066. Make a forgotten scientific executable reproducible again

**Original verification / milestone:** A+E · Stretch.

Recover a public scientific program preserved as source but impossible to build on current machines. Produce a pinned build, reference inputs, and a working maintained port.

**Original check:** Reproduce archived reference outputs and independently check the scientific calculation on small cases. A specialist checks that changed numerical behavior is acceptable.

**Original climb:** One canonical run → full examples → a supported upstream release.

**Original starting point and proposed contribution:** Software Heritage preserves code; executable recovery and numerical parity remain separate tasks. Select a presently failing artifact.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363).

#### A067. Resurrect an abandoned accessibility extension

**Original verification / milestone:** A+N · Starter.

Port a discontinued open browser extension used for reading, magnification, or keyboard navigation to a current browser API. Preserve its useful workflow and remove obsolete dependencies.

**Original check:** Replay a user-written task suite on fixed web fixtures. Check permissions, saved preferences, keyboard behavior, and installation in a clean profile.

**Original climb:** One lost feature → complete extension → maintained release.

**Original starting point and proposed contribution:** This is a target-selection challenge: require a real broken extension with users and no maintained equivalent before starting.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/).

#### A068. Recover an orphaned database’s meaning

**Original verification / milestone:** A+N · Frontier.

Given a donated legacy database and exported reports, reconstruct its tables, relationships, units, and report queries in an open format. Preserve uncertainty where the evidence permits multiple schemas.

**Original check:** Reproduce withheld reports exactly; reconcile row counts, totals, relationships, and null handling. The owner verifies a small set of familiar records.

**Original climb:** One report → a full reporting workflow → reusable migration rules.

**Original starting point and proposed contribution:** Database migration exists; the proposed gap is recovering missing schema semantics with a report-by-report evidence trail.

**Sources:** [The National Archives, About PRONOM](https://pronom.nationalarchives.gov.uk/about); [OpenRefine, Project overview](https://openrefine.org/).

#### A069. Extract the working objects buried inside documents

**Original verification / milestone:** A+N · Stretch.

Rescue embedded spreadsheets, diagrams, and datasets from a donated archive of old office files. Deliver editable objects with links to their original page positions.

**Original check:** Compare extracted objects to reference applications; change an input and verify formulas or diagram relationships still function. Count objects silently lost by current importers.

**Original climb:** One embedded-object type → one archive → fixes to an existing importer.

**Original starting point and proposed contribution:** Document converters exist; target specific embedded objects that their current versions demonstrably discard.

**Sources:** [The Document Foundation, Document Liberation Project: Projects](https://www.documentliberation.org/projects/); [DigiPres, Digital Preservation Community Portal](https://www.digipres.org/).

#### A070. Create an executable museum for a public software collection

**Original verification / milestone:** A+N · Frontier.

Turn a small collection of historically important, redistributable scientific or educational programs into offline, reproducible exhibits with scripted demonstrations and preserved outputs.

**Original check:** A fresh machine must rebuild or boot every exhibit and replay its reference demonstration. Audit licenses, file hashes, and all required dependencies.

**Original climb:** One exhibit → ten → a complete institution-contributed collection.

**Original starting point and proposed contribution:** Archives and emulators exist; the unit of progress is a newly restored, functioning exhibit with a reproducibility receipt.

**Sources:** [Webrecorder, ReplayWeb.page](https://webrecorder.net/replaywebpage/); [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

### Original category: Accessibility and education

#### A071. Make an entire mathematics textbook screen-reader usable

**Original verification / milestone:** A+N · Stretch.

Convert one openly licensed textbook whose equations or structure currently fail assistive technology into navigable HTML or EPUB. Include exercises, references, tables, and equation structure.

**Original check:** Check content completeness and equation-tree equivalence against the source; have a screen-reader user complete sampled reading and exercise tasks. A validator alone is insufficient.

**Original climb:** One difficult chapter → all chapters → a repeatable conversion pipeline.

**Original starting point and proposed contribution:** MathCAT and accessible publishing already exist; target an inaccessible book and measure complete task coverage.

**Sources:** [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/); [DAISY Consortium, Math Accessibility](https://daisy.org/activities/projects/math-accessibility/); [veraPDF, Validation documentation](https://docs.verapdf.org/validation/).

#### A072. Make scientific diagrams explorable without sight

**Original verification / milestone:** A+N · Frontier.

For an openly licensed circuit or graph-theory textbook, turn diagrams into keyboard-navigable structures: nodes, connections, labels, and measurable properties, linked to the original images.

**Original check:** Compare extracted graph structure to an independently prepared answer set. A blind reader answers questions about connectivity or paths without seeing the image.

**Original climb:** Ten diagrams → one chapter → a whole supported diagram family.

**Original starting point and proposed contribution:** Alt text is insufficient for this target. The contribution is accurate, interactive access to the diagram’s relationships.

**Sources:** [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/); [DAISY Consortium, Math Accessibility](https://daisy.org/activities/projects/math-accessibility/).

#### A073. Eliminate a whole family of keyboard traps

**Original verification / milestone:** A+N · Starter.

Fix a reproducible keyboard failure across an open component library’s dialogs, menus, or date pickers, then repair affected public-interest applications that use it.

**Original check:** Use independent keyboard-only task replays, focus-order assertions, and screen-reader spot checks. Demonstrate that the original task failed and now succeeds.

**Original climb:** One trap → all affected components → downstream version upgrades.

**Original starting point and proposed contribution:** Automated accessibility repair is already researched. The contribution must close new, independently reproduced failures.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/); [LLM Based Web Accessibility Repair: An Empirical Study of Detection, Remediation, and Cost](https://arxiv.org/abs/2605.27716).

#### A074. Turn unusable public PDF forms into usable forms

**Original verification / milestone:** A+N · Starter.

Rebuild a frozen set of public forms so fields have correct labels, tab order, validation, and a usable exported document. Preserve every question and instruction.

**Original check:** Enter synthetic test cases by keyboard and screen reader; compare submitted/exported values to the specification and inspect a completed form visually.

**Original climb:** One form → one service’s form pack → a maintained repair recipe.

**Original starting point and proposed contribution:** PDF tagging and validators exist. This challenge requires successful form completion, not a clean automated conformance score.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/); [veraPDF, Validation documentation](https://docs.verapdf.org/validation/).

#### A075. Make complex tables work on a braille display

**Original verification / milestone:** A+E · Stretch.

Convert one difficult family of educational tables—such as periodic-table data or multilevel statistical tables—into a navigable representation with explicit row and column headers.

**Original check:** Check all cell/header relationships against the source and run question-answering tasks with a braille user. A specialist reviews the initial notation conventions.

**Original climb:** One table family → a textbook corpus → reusable rendering support.

**Original starting point and proposed contribution:** This extends existing assistive technology at a specific structural failure; it does not claim automatic braille translation is new.

**Sources:** [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/); [DAISY Consortium, Math Accessibility](https://daisy.org/activities/projects/math-accessibility/).

#### A076. Repair a library of almost-readable ebooks

**Original verification / milestone:** A+N · Starter.

Fix broken footnotes, reading order, headings, image references, and missing characters in a public-domain EPUB collection. Keep exact provenance for every edit.

**Original check:** Validate structure, reconcile text against page scans, and test reading-order and footnote journeys. Publish counts of verified defects fixed, not books merely processed.

**Original climb:** One book → one recurring publisher defect → hundreds of affected books.

**Original starting point and proposed contribution:** EPUB tooling exists; the fresh work is resolving real content defects that survive existing conversion pipelines.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/); [veraPDF, Validation documentation](https://docs.verapdf.org/validation/).

#### A077. Give technical lecture captions their mathematics back

**Original verification / milestone:** A+N · Stretch.

Repair captions for an openly licensed mathematics course where spoken symbols, indices, and equation references are garbled. Synchronize readable captions with the actual board or slides.

**Original check:** Compare sampled segments to audio and visible equations; check timings and preserve uncertainty. Measure symbol-error rate on a held-out, manually transcribed sample.

**Original climb:** One lecture → one course → correction rules that transfer to another lecturer.

**Original starting point and proposed contribution:** Captioning is mature. The target is a previously unusable technical corpus and its specific notation failures.

**Sources:** [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/); [DAISY Consortium, Math Accessibility](https://daisy.org/activities/projects/math-accessibility/).

#### A078. Make a drag-and-drop lesson teachable by keyboard

**Original verification / milestone:** A+N · Starter.

Rebuild an inaccessible openly licensed H5P activity so a learner can perform the same matching, ordering, or placement task without dragging or seeing the screen.

**Original check:** Compare accepted and rejected answers exhaustively on small exercises. Test keyboard completion and comprehension with an assistive-technology user.

**Original climb:** One activity → a problematic activity type → a course-wide fix.

**Original starting point and proposed contribution:** H5P maintains accessibility guidance and improvements already. Choose an actual remaining content or component failure.

**Sources:** [H5P, Content types recommendations](https://help.h5p.com/hc/en-us/articles/7505649072797-Content-types-recommendations).

#### A079. Fix the characters that disappear from a language

**Original verification / milestone:** A+E · Stretch.

Find a concrete shaping or rendering bug in an open font/text stack that breaks an under-supported script in educational materials. Fix the stack or font and ship a regression corpus.

**Original check:** Compare glyph positioning and shaping with trusted references and native-reader judgments. Run text round-trips to ensure the visible fix did not corrupt underlying characters.

**Original climb:** One recurrent sequence → its shaping rule → all affected lessons.

**Original starting point and proposed contribution:** Font coverage projects exist; target a documented unresolved rendering defect, with language expertise concentrated in the reference corpus.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/).

#### A080. Make a science simulation genuinely operable without vision

**Original verification / milestone:** A+N · Frontier.

Extend a currently inaccessible open simulation so a blind learner can manipulate variables, inspect state, and carry out the same experiment through sound and structured navigation.

**Original check:** Check state equivalence against the original simulation. Have a user complete a fixed experiment and report its result without visual assistance.

**Original climb:** One experiment → all controls → transfer the approach to a second simulation.

**Original starting point and proposed contribution:** PhET already conducts inclusive-design work; choose an unfinished simulation or missing capability rather than claiming the field is new.

**Sources:** [PhET, Inclusive Features: Prototypes](https://phet.colorado.edu/el/inclusive-design/prototypes); [DAISY Consortium, Math Accessibility](https://daisy.org/activities/projects/math-accessibility/).

### Original category: Escaping a specific software dependency

#### A081. Free a charity from its last Access database

**Original verification / milestone:** A+N · Stretch.

Migrate a donated Microsoft Access workflow to a maintainable open application: forms, queries, reports, imports, and data. Pick a workflow whose owner cannot currently switch.

**Original check:** Replay the owner’s acceptance tasks on anonymized fixtures; reconcile every record and report total. Demonstrate editable data and a tested rollback/export path.

**Original climb:** One critical report → a complete workflow → a reusable migration adapter.

**Original starting point and proposed contribution:** Open databases exist; the difficult new artifact is parity for a specific stranded workflow, not another generic database app.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/).

#### A082. Remove the paid statistics dependency from one useful study

**Original verification / milestone:** A+E · Stretch.

Port a public SPSS or SAS analysis with custom syntax to an open statistical stack, preserving missing-data handling, contrasts, weights, and outputs.

**Original check:** Run withheld datasets through both implementations where authorized. Compare estimates, uncertainty intervals, and edge cases; have a statistician review methodological equivalence.

**Original climb:** One table → all paper results → a reusable replacement for the missing procedure.

**Original starting point and proposed contribution:** R and other alternatives already exist. Target a documented procedure or workflow that still prevents migration.

**Sources:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Center for Open Science, Introducing ReplicatorBench](https://www.cos.io/blog/benchmarking-llm-agents-on-scientific-tasks-introducing-replicatorbench).

#### A083. Remove one paid MATLAB toolbox from a research pipeline

**Original verification / milestone:** A+E · Stretch.

Replace the last proprietary toolbox dependency in a useful openly licensed scientific package with an open implementation and migration tests.

**Original check:** Compare numerical outputs on reference and adversarial inputs with explicit tolerances. Validate the relevant mathematical operation independently on small instances.

**Original climb:** One blocking function → the paper’s pipeline → upstream acceptance.

**Original starting point and proposed contribution:** Generic MATLAB replacements are established. Novelty is closing a specific unsupported dependency for real downstream users.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363).

#### A084. Rescue a public-interest GIS workflow from an abandoned plugin

**Original verification / milestone:** A+N · Starter.

Port an unmaintained open GIS plugin used for a concrete conservation or local-planning task to the current platform, including its project files and documentation.

**Original check:** Replay published example projects; compare features, coordinate systems, spatial joins, and exported maps. Use exact geometry checks where possible.

**Original climb:** One broken project → all example projects → a supported plugin release.

**Original starting point and proposed contribution:** GIS software exists. Require a live compatibility failure and an identifiable user workflow before selecting the plugin.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/); [GBIF, Data quality recommendations](https://techdocs.gbif.org/en/data-publishing/data-quality-recommendations).

#### A085. Make an engineering drawing editable after migration

**Original verification / milestone:** A+E · Frontier.

Convert a donated, openly redistributable family of CAD drawings into an open tool while preserving dimensions, constraints, and editable relationships.

**Original check:** Check geometry and constraints; change specified dimensions and compare resulting geometry to authorized reference outputs. An engineer reviews the initial acceptance cases.

**Original climb:** One drawing family → one organization’s library → a documented interchange subset.

**Original starting point and proposed contribution:** CAD converters exist. Screenshots or flattened geometry do not satisfy this challenge’s editability requirement.

**Sources:** [The National Archives, About PRONOM](https://pronom.nationalarchives.gov.uk/about); [DigiPres, Digital Preservation Community Portal](https://www.digipres.org/).

#### A086. Replace one publisher’s expensive production workflow

**Original verification / milestone:** A+N · Stretch.

Recreate an openly licensed book or nonprofit magazine’s production pipeline using open tools, including cross-references, indexes, equations, and print-ready output.

**Original check:** Rebuild after content changes; compare all text, references, page furniture, and print requirements. A publisher reviews a representative proof.

**Original climb:** One issue → the next issue with changed inputs → a reusable template and toolchain.

**Original starting point and proposed contribution:** Open publishing tools exist. The new contribution is a complete migration of a workflow that currently cannot use them.

**Sources:** [The Document Foundation, Document Liberation Project: Projects](https://www.documentliberation.org/projects/); [DAISY Consortium, Introducing the MathCAT Initiative](https://daisy.org/news-events/articles/introducing-the-mathcat-initiative/).

#### A087. Make redaction survive every representation of a document

**Original verification / milestone:** A+E · Stretch.

Repair an open redaction pipeline so selected information disappears from text layers, annotations, attachments, images, incremental revisions, and metadata.

**Original check:** Use synthetic secrets and multiple independent extractors; inspect all supported PDF object types. State the format subset covered and have a specialist audit the threat model once.

**Original climb:** One demonstrated leak → a complete synthetic corpus → upstream fixes.

**Original starting point and proposed contribution:** Redaction tools already exist. The target is a newly demonstrated leak or unsupported representation, not a blanket security claim.

**Sources:** [veraPDF, Validation documentation](https://docs.verapdf.org/validation/).

#### A088. Move a nonprofit’s bookkeeping without losing a penny

**Original verification / milestone:** A+N · Stretch.

Migrate a donated, anonymized accounting dataset and its recurring reports to open software, preserving splits, rounding, opening balances, and audit references.

**Original check:** Reconcile every account and transaction in exact decimal arithmetic. Replay month-end reports and inspect the difference ledger; do not infer tax compliance from matching totals.

**Original climb:** One closed month → one year → the organization’s documented reporting workflow.

**Original starting point and proposed contribution:** Open accounting software exists; the unsatisfied target is an exact, reviewable migration for a particular export format.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/).

#### A089. Make a necessary administrative workflow work offline

**Original verification / milestone:** A+N · Stretch.

Take an openly specified nonprofit intake workflow that currently depends on a fragile online service and build a local version with interoperable exports and conflict-aware sync.

**Original check:** Run the same acceptance cases online and offline, interrupt saves, and merge conflicting edits. Verify no accepted record disappears or changes silently.

**Original climb:** One form and export → a full workflow → tested migration from the existing service.

**Original starting point and proposed contribution:** Offline form systems exist; only proceed where a concrete required workflow or interoperability capability remains unmet.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/); [Learning Equality, Kolibri User Guide](https://kolibri.readthedocs.io/en/latest/index.html).

#### A090. Rescue creative projects from an abandoned audio plugin

**Original verification / milestone:** A+N · Frontier.

Build an open replacement for a legally documented or openly licensed, unavailable audio effect so donated educational or archival projects can still render.

**Original check:** Compare impulse responses and renders across a held-out parameter grid; check automation and project reload. Report numerical and audible differences separately.

**Original climb:** One preset family → one project corpus → a compatible maintained implementation.

**Original starting point and proposed contribution:** Audio effects are established. Target one orphaned dependency and reproduce its behavior without redistributing proprietary code or assets.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

### Original category: Scientific reproducibility and correction

#### A091. Repair a published biological model that currently will not reproduce

**Original verification / milestone:** A+E · Stretch.

Reconstruct one uncurated or failing BioModels model from its paper and supplements, then repair missing parameters, initial conditions, or event semantics with source-backed changes.

**Original check:** Reproduce the specified figure in two independent simulators and pass relevant SBML tests. A systems biologist checks whether the encoding matches the paper.

**Original climb:** One failed figure → a complete model → a curated, executable submission.

**Original starting point and proposed contribution:** BioModels already curates models and documents reproducibility failures; select a currently unresolved record, not an already curated success.

**Sources:** [EMBL-EBI, Improving reproducibility in systems biology](https://www.ebi.ac.uk/about/news/announcements/biomodels-reproducibility-scorecard/); [SBML.org, SBML Test Suite](https://sbml.org/software/sbml-test-suite/).

#### A092. Find the software update that changed a scientific result

**Original verification / milestone:** A+E · Stretch.

For a reproducible public paper whose output differs across environments, bisect dependency versions and identify the smallest change responsible for the discrepancy.

**Original check:** Provide two pinned environments and a minimal input that reproduces the difference. Separate numerical changes from changes in scientific interpretation.

**Original climb:** One numerical discrepancy → the responsible dependency commit → a regression fix.

**Original starting point and proposed contribution:** Paper-reproduction benchmarks exist. This target adds a causal explanation and durable correction for a newly observed failure.

**Sources:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Allen Institute for AI, AstaBench](https://allenai.org/asta/bench).

#### A093. Give every number in a paper a route back to its data

**Original verification / milestone:** A+N · Stretch.

For one fully open computational paper, connect the headline table and figure values to exact input rows, transformations, and executable code.

**Original check:** A clean run must regenerate every claimed number; an auditor can click through to its source. Missing inputs remain explicitly unresolved.

**Original climb:** One headline result → every quantitative claim → a reusable journal supplement.

**Original starting point and proposed contribution:** This is a paper-specific provenance artifact beyond merely rerunning a repository or producing a prose replication report.

**Sources:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Allen Institute for AI, AstaBench](https://allenai.org/asta/bench).

#### A094. Recover the dataset trapped in a scientific chart

**Original verification / milestone:** A+E · Stretch.

Reconstruct measurements and error bars from a licensed figure for which machine-readable data are absent, preserving pixel evidence, axis transforms, and extraction uncertainty.

**Original check:** Use hidden source data from comparable figures to calibrate error, then overlay recovered points on the original. A specialist checks interpretation of error bars and axes.

**Original climb:** One figure family → a paper’s tables → a reusable extraction pipeline.

**Original starting point and proposed contribution:** Plot digitizers exist. Target a difficult unsupported chart type or previously unavailable dataset; inferred points are not original raw data.

**Sources:** [HEPData, Submission Help](https://www.hepdata.net/submission).

#### A095. Propagate one published correction through downstream calculations

**Original verification / milestone:** A+E · Stretch.

Take an official numerical correction and rebuild a downstream open analysis that still consumes the earlier value. Produce an exact before-and-after change ledger.

**Original check:** Check the correction against its notice, rerun the downstream code, and identify which outputs changed. A specialist reviews any proposed change in interpretation.

**Original climb:** One corrected input → one downstream paper → all accessible executable dependents.

**Original starting point and proposed contribution:** Retraction and correction databases exist. The contribution is computing the actual downstream consequence rather than flagging a citation.

**Sources:** [Crossref, Retraction Watch documentation](https://www.crossref.org/documentation/retrieve-metadata/retraction-watch/); [Cochrane, Data package user guide](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html).

#### A096. Find the same experiment counted twice in a review

**Original verification / milestone:** A+E · Stretch.

Within an open review, identify reports that may describe the same participant cohort or experiment and trace their registration identifiers, dates, and sample accounting.

**Original check:** Produce source passages and a reconstructed inclusion table; a reviewer confirms identity. Recompute only the clearly duplicated contributions under a stated analysis.

**Original climb:** One confirmed duplicate → one corrected pooled estimate → a review-wide audit.

**Original starting point and proposed contribution:** Deduplication exists. A fresh, confirmed double count with an executable effect estimate is the unit of success; suspicion is not.

**Sources:** [Cochrane, Data package user guide](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html).

#### A097. Find a meta-analysis arithmetic error with a tiny counterexample

**Original verification / milestone:** A+E · Starter.

Recompute an openly available forest plot from its study-level data and locate a reproducible mismatch in weights, unit conversions, direction, or confidence intervals.

**Original check:** Compare with two independent implementations under the exact stated method. Give a minimal numerical example and let a statistician review the method once.

**Original climb:** One forest plot → a review’s analyses → a tested correction patch.

**Original starting point and proposed contribution:** RevMan and review data packages already exist. The target is a previously unreported mismatch, not a new meta-analysis platform.

**Sources:** [Cochrane, Data package user guide](https://documentation.cochrane.org/revman-kb/data-package-user-guide-243761660.html).

#### A098. Remove hidden overlap from a scientific benchmark

**Original verification / milestone:** A+E · Stretch.

Audit a public benchmark for repeated subjects, source images, near-duplicate sequences, or derived records crossing its training/test boundary. Release a repaired split and rerun baselines.

**Original check:** Provide exact duplicate witnesses or audited provenance links. Evaluate on untouched groups and quantify how results change; distinguish exact leakage from merely similar examples.

**Original climb:** One confirmed overlap → a clean split → corrected benchmark results.

**Original starting point and proposed contribution:** Dataset-leakage research is established. The contribution must concern a newly identified, consequential defect in a named benchmark.

**Sources:** [OpenML, Benchmarking Suites](https://docs.openml.org/benchmark/).

#### A099. Check whether a result survives every reasonable analysis choice

**Original verification / milestone:** A+E · Frontier.

For one openly licensed, non-clinical study, preregister a finite set of defensible exclusions, transformations, and estimators, then compute the full result matrix.

**Original check:** A statistician approves the choice set before runs. Publish all outcomes, failure cases, and code; hold back an independent replication dataset where available.

**Original climb:** One disputed choice → a preregistered multiverse → a replication comparison.

**Original starting point and proposed contribution:** Multiverse analysis exists. This is a new study-specific robustness result, with interpretation limited to the declared choices.

**Sources:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Allen Institute for AI, AstaBench](https://allenai.org/asta/bench).

#### A100. Reconstruct a missing scientific algorithm from its paper

**Original verification / milestone:** A+E · Frontier.

Implement a useful published algorithm whose code is unavailable, using its equations, pseudocode, examples, and later descriptions. Release readable code and an ambiguity ledger.

**Original check:** Check exact published examples, independent small-case solutions, and a held-out application. Matching one plot is insufficient to establish fidelity.

**Original climb:** One worked example → the full algorithm → an open replacement used by another project.

**Original starting point and proposed contribution:** Paper replication is established; target an unimplemented or unusable algorithm and deliver a reusable implementation with independent tests.

**Sources:** [Siegel et al., CORE-Bench](https://arxiv.org/abs/2409.11363); [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

### Original category: Historical knowledge and missing data

#### A101. Recover weather observations everyone skipped

**Original verification / milestone:** A+N · Stretch.

Target a digitized logbook tranche omitted from an existing weather-rescue dataset because its handwriting, tables, or page layout defeated the standard workflow.

**Original check:** Double-transcribe a hidden sample, retain image crops for every value, and check dates and totals. Compare against the existing release to exclude duplicate observations.

**Original climb:** One difficult station-year → the omitted tranche → curator-ready data.

**Original starting point and proposed contribution:** Rainfall Rescue and Old Weather already achieved major transcription successes. Only previously unrecovered observations count here.

**Sources:** [University of Reading, Rainfall Rescue records publication](https://www.reading.ac.uk/news/2022/Research-News/Rainfall-Rescue-records-publication); [Old Weather, Project overview](https://www.oldweather.org/).

#### A102. Recover a missing stretch of sea-level history

**Original verification / milestone:** A+E · Stretch.

Digitize one existing historical tide-gauge chart or ledger series absent from the machine-readable record, preserving time, scale, datum notes, and uncertainty.

**Original check:** Overlay reconstructed traces on scans; compare overlaps with known records. A sea-level specialist checks datum interpretation before scientific reuse.

**Original climb:** One chart → one month → a documented missing period.

**Original starting point and proposed contribution:** PSMSL and data-rescue efforts already exist. Identify a specific available scan series not yet incorporated.

**Sources:** [PSMSL, Data at PSMSL](https://psmsl.org/data/).

#### A103. Put an old specimen back on the map—with evidence

**Original verification / milestone:** A+E · Stretch.

Georeference an unlocated herbarium collection using specimen labels, historical place names, and a collector’s dated itinerary, retaining a defensible uncertainty region.

**Original check:** Attach label images, map citations, and route constraints. A curator reviews the evidence packet; withhold or coarsen sensitive-species locations.

**Original climb:** One ambiguous locality → a collector’s trip → a corrected collection.

**Original starting point and proposed contribution:** GBIF georeferencing methods already exist. The novel result is resolving specific previously unresolved records, not a generic geocoder.

**Sources:** [GBIF, Data quality recommendations](https://techdocs.gbif.org/en/data-publishing/data-quality-recommendations); [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/).

#### A104. Recover a local biodiversity baseline from old books

**Original verification / milestone:** A+E · Stretch.

Extract a dated species checklist for one clearly bounded place from a digitized historical natural-history volume and reconcile its names to a versioned modern taxonomy.

**Original check:** Every occurrence links to a page and locality phrase. A taxonomist checks ambiguous synonyms; report original names alongside mappings and avoid inferring abundance.

**Original climb:** One chapter → one district’s historical checklist → an importable dataset.

**Original starting point and proposed contribution:** BHL already supplies digitized text and APIs. The target is a new verified checklist absent from existing occurrence databases.

**Sources:** [GBIF, Georeferencing Best Practices](https://docs.gbif.org/georeferencing-best-practices/1.0/en/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

#### A105. Reunite manuscript pages separated across collections

**Original verification / milestone:** A+E · Frontier.

Find a demonstrable join or page-sequence match between public scans using overlapping text, page numbering, physical edges, ruling, or distinctive damage.

**Original check:** Publish aligned scan crops and a reversible matching procedure. A manuscript specialist confirms the match; stylistic similarity alone cannot win.

**Original climb:** One confirmed join → a reconstructed gathering → a linked cross-archive edition.

**Original starting point and proposed contribution:** Manuscript matching is established. Each newly evidenced reunion is the contribution; it should not depend on speculative historical attribution.

**Sources:** [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

#### A106. Make a forgotten musical score playable again

**Original verification / milestone:** A+E · Stretch.

Reconstruct a public-domain chamber score from surviving scanned parts, resolving notation errors only where the parts and musical constraints support a unique correction.

**Original check:** Render the recovered notation beside scans; check note durations, bar totals, transposition, and cross-part alignment. A musician reviews uncertain passages.

**Original climb:** One movement → complete work → editable MusicXML and audio preview.

**Original starting point and proposed contribution:** Audiveris already performs optical music recognition. The target is a newly usable edition with evidence for repairs, not ordinary score OCR.

**Sources:** [Audiveris, Handbook](https://audiveris.github.io/audiveris/_pages/handbook/).

#### A107. Restore missing credit with a documentary proof packet

**Original verification / milestone:** N+E · Stretch.

For one scientific result or dataset with conflicting attribution, trace dated publications, repository history, and acknowledgments to establish a narrow, documentable contribution.

**Original check:** Provide original records, dates, and exact supported claims. A historian or subject specialist checks the packet; distinguish discovery, implementation, and later popularization.

**Original climb:** One corrected attribution → corrected metadata → a source-linked collection.

**Original starting point and proposed contribution:** Historical research exists. Success is a specific supported correction; a compelling narrative or accusation does not count.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

#### A108. Turn a forgotten printed algorithm into working open code

**Original verification / milestone:** A+E · Stretch.

Recover a useful algorithm preserved in a public-domain or licensed FORTRAN/BASIC listing, including constants, numerical conventions, and worked examples.

**Original check:** Compare against printed examples and an independent modern method; test extreme inputs. Preserve scan-to-code line mappings and explicitly document repairs.

**Original climb:** One listing → validated library function → a maintained package contribution.

**Original starting point and proposed contribution:** Code transcription exists. Select an unavailable implementation that unlocks a concrete scientific or educational use.

**Sources:** [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

#### A109. Make a century of local statistics comparable

**Original verification / milestone:** A+E · Frontier.

For one locality and one variable, digitize historical tables and reconcile boundary, unit, and category changes without pretending they measure the same thing automatically.

**Original check:** Reproduce original totals and show every crosswalk; distinguish exact conversions from estimates. A subject specialist audits the handful of nontrivial comparability choices.

**Original climb:** Two adjacent editions → one time series → a reusable, versioned crosswalk.

**Original starting point and proposed contribution:** Data harmonization is established. The contribution is a newly recoverable series with explicit comparability limits.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/); [Biodiversity Heritage Library, Developer and Data Tools](https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/).

#### A110. Repair the broken citations in a public knowledge collection

**Original verification / milestone:** A+N · Starter.

For an open engineering manual or educational corpus, restore dead references using archived exact documents, persistent identifiers, and version-specific anchors.

**Original check:** Check author, title, edition, and cited passage; distinguish exact recovered sources from substitutes. Package licensed local copies or stable archive links.

**Original climb:** One chapter → a complete manual → repeatable maintenance checks.

**Original starting point and proposed contribution:** Link checkers and archives exist. Source identity and passage-level recovery, rather than replacing URLs blindly, define the challenge.

**Sources:** [Webrecorder, ReplayWeb.page](https://webrecorder.net/replaywebpage/); [Software Heritage, Saving and referencing research software](https://www.softwareheritage.org/2019/08/05/saving-and-referencing-research-software-in-software-heritage/).

### Original category: Public-document and service audits

#### A111. Find a public tender that contradicts its own arithmetic

**Original verification / milestone:** A+N · Starter.

Audit a frozen set of public procurement documents for line-item totals, quantities, duplicate entries, and inconsistent units across attachments.

**Original check:** Each finding must include original page crops, an exact calculation, and a corrected alternative. Do not infer fraud or motive from a discrepancy.

**Original climb:** One confirmed inconsistency → a whole tender pack → a reusable audit recipe.

**Original starting point and proposed contribution:** Open Contracting already has data-quality tooling. Target cross-document contradictions that existing structural validators miss.

**Sources:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [Open Contracting, Data Review Tool](https://review.standard.open-contracting.org/).

#### A112. Find the spreadsheet error inside a policy proposal

**Original verification / milestone:** A+E · Stretch.

Reconstruct the published calculation behind one consultation’s cost or impact estimate and test formulas, links, units, and scenario assumptions for internal inconsistency.

**Original check:** Produce a minimal counterexample and side-by-side rerun using the proposal’s own assumptions. An analyst checks any interpretation beyond arithmetic.

**Original climb:** One broken formula → a corrected workbook → quantified effect on the published estimate.

**Original starting point and proposed contribution:** This is an audit of a named current proposal, not a claim that an arithmetic fix settles the policy choice.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A113. Find an administrative process nobody can complete as written

**Original verification / milestone:** A+N · Stretch.

Model a public application process whose instructions may require circular prerequisites—for example, document A requires B while B requires A—and identify a concrete impossible path.

**Original check:** Give official source passages, dates, and a minimal dependency cycle. Check alternative routes and exceptions before accepting the finding.

**Original climb:** One confirmed dead end → a documented repair suggestion → a verified revised process.

**Original starting point and proposed contribution:** Process mapping exists. A newly confirmed contradiction and minimal corrective edit are the contribution; legal ambiguity needs separate review.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A114. Catch broken references before a rule is published

**Original verification / milestone:** A+N · Starter.

Check a draft regulation or technical standard for references to missing clauses, deleted definitions, inconsistent symbols, and tables that no longer match the text.

**Original check:** Produce exact cross-reference witnesses against a pinned document version. Separate mechanically demonstrable defects from interpretation questions.

**Original climb:** One broken reference → the complete draft → a patch with location-stable citations.

**Original starting point and proposed contribution:** Cross-reference checkers exist. Target failures across revisions and annexes that their current workflows miss.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A115. Find a scholarship whose own instructions disagree

**Original verification / milestone:** A+N · Starter.

Compare a public scholarship’s official webpage, downloadable instructions, and application form for contradictory deadlines, required files, word limits, or eligibility dates.

**Original check:** Show a dated pair of primary-source statements that cannot both hold. Keep eligibility interpretation separate from explicit textual conflicts.

**Original climb:** One confirmed discrepancy → a reconciled applicant checklist → a maintained source comparison.

**Original starting point and proposed contribution:** Scholarship directories exist. The target is a source-backed correction that removes a real application obstacle.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A116. Repair a transit feed against the actual timetable

**Original verification / milestone:** A+N · Stretch.

Find a public GTFS feed whose valid-looking trips disagree with the operator’s published timetable: wrong holiday calendars, stop order, timezone, or missing connections.

**Original check:** Pass the canonical validator, then replay affected journeys against dated operator sources. Publish a minimal feed patch and before/after itineraries.

**Original climb:** One wrong journey → one route’s calendar → an operator-ready correction.

**Original starting point and proposed contribution:** GTFS validators and planners already exist. The contribution is a new semantic correction beyond schema validity.

**Sources:** [MobilityData, Canonical GTFS Schedule Validator](https://github.com/MobilityData/gtfs-validator); [OpenTripPlanner, Accessibility documentation](https://docs.opentripplanner.org/en/latest/Accessibility/).

#### A117. Make public-service calendars agree on holiday exceptions

**Original verification / milestone:** A+N · Starter.

Reconcile a locality’s dated official calendars for one service—such as refuse collection—where website text, PDFs, and downloadable calendars disagree on exceptions.

**Original check:** Check every date against primary sources and flag unresolved conflicts rather than selecting one arbitrarily. Produce an importable corrected candidate calendar.

**Original climb:** One holiday mismatch → a full year → a versioned public calendar.

**Original starting point and proposed contribution:** Calendar apps exist. This challenge is a new, evidence-backed repair to one service’s published schedule.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A118. Catch a unit change that created a fake environmental spike

**Original verification / milestone:** A+E · Stretch.

Audit one public environmental time series across dataset releases for changes in units, timestamps, averaging windows, station IDs, or missing-value sentinels.

**Original check:** Reproduce the apparent spike, show the metadata or source transformation that explains it, and publish corrected candidate values with exact provenance.

**Original climb:** One artificial discontinuity → the affected release → a permanent regression check.

**Original starting point and proposed contribution:** Data-quality tools exist. A newly demonstrated ingestion or representation error is the result; physical trend claims need additional evidence.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/); [Argo, Data FAQ](https://argo.ucsd.edu/data/data-faq/).

#### A119. Make translated public instructions agree on the facts

**Original verification / milestone:** A+N · Stretch.

Compare official-language versions of a public application or emergency-preparedness guide for mismatched numbers, dates, negations, contacts, or required steps.

**Original check:** Attach aligned passages and have a bilingual reader verify each proposed correction. Evaluate a held-out sample and retain unresolved semantic ambiguity.

**Original climb:** One consequential mismatch → a complete guide → publisher-ready aligned corrections.

**Original starting point and proposed contribution:** Translation tools exist. The advance is verified factual consistency for a specific official document set, not generic translation.

**Sources:** [UK Cabinet Office, Consultation principles: guidance](https://www.gov.uk/government/publications/consultation-principles-guidance).

#### A120. Reconcile a public project’s announced and tabulated numbers

**Original verification / milestone:** A+N · Stretch.

For one public infrastructure programme, reconcile project lists, budget tables, progress reports, and amendments to distinguish duplicates, changed definitions, and arithmetic discrepancies.

**Original check:** Build a source-linked ledger whose totals reproduce each publication, then give exact witnesses for any unresolved difference. Do not equate revisions with misconduct.

**Original climb:** One discrepant total → one programme → a reusable reconciliation package.

**Original starting point and proposed contribution:** Budget dashboards exist. The contribution is explaining a specific cross-release numerical disagreement with evidence.

**Sources:** [Open Contracting Partnership, Data Standard](https://www.open-contracting.org/data-standard/); [Open Contracting, Data Review Tool](https://review.standard.open-contracting.org/).

### Original category: Faster and cheaper useful computation

#### A121. Make a useful scientific calculation ten times cheaper

**Original verification / milestone:** A+E · Frontier.

Find a faster sparse-matrix ordering or solver strategy for a frozen family of public scientific matrices, then test on unseen matrices from different applications.

**Original check:** Compare against strong tuned baselines at identical precision and hardware. Check residuals and relevant error bounds, including ill-conditioned cases; report preprocessing cost.

**Original climb:** One real workload speedup → held-out matrix families → a reusable solver contribution.

**Original starting point and proposed contribution:** SuiteSparse and algorithm-search systems already exist. The target is a new verified improvement on a registered workload, not a recycled benchmark win.

**Sources:** [SuiteSparse Matrix Collection](https://sparse.tamu.edu/); [Google DeepMind, AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).

#### A122. Repair a floating-point formula with a proof

**Original verification / milestone:** A+E · Frontier.

Find a real open scientific routine that loses accuracy near a boundary or cancellation point, derive a stable replacement, and certify its error over a specified domain.

**Original check:** Use high-precision independent references plus interval or formal bounds. Check speed, exceptional values, and domain coverage; a numerical analyst reviews the specification.

**Original climb:** One failing input → a domain-wide bound → upstream adoption.

**Original starting point and proposed contribution:** Herbie already improves floating-point expressions. The new result is a concrete unsolved routine with independently checked guarantees.

**Sources:** [University of Washington PLSE, Herbie](https://herbie.uwplse.org/); [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/).

#### A123. Compress public plant genomes better—with exact recovery

**Original verification / milestone:** A · Frontier.

Design a lossless compressor for a frozen public plant-genome archive, optimizing the complete package including references, indices, and decoder.

**Original check:** Decompress to byte-identical inputs on hidden species and assemblies. Count all side information, runtime, and memory; compare against strong domain-specific baselines.

**Original climb:** One reproducible improvement → unseen genomes → a practical archival tool.

**Original starting point and proposed contribution:** Genome compression exists. A new rate/resource improvement with exact held-out recovery is the contribution, not using an existing compressor.

**Sources:** [Hutter Prize, Lossless compression challenge](https://www.hutter1.net/prize/).

#### A124. Shrink a climate archive without changing a single measurement

**Original verification / milestone:** A · Frontier.

Optimize lossless storage for a specified family of public gridded climate arrays, including masks, coordinate metadata, and random-access requirements.

**Original check:** Check bitwise restoration, metadata identity, subset-read latency, memory, and total stored bytes on unseen time periods and variables.

**Original climb:** One variable family → a full archive slice → a deployable codec integration.

**Original starting point and proposed contribution:** Scientific compression is established. Register the workload and baselines first; a gain achieved by discarding precision does not qualify.

**Sources:** [Hutter Prize, Lossless compression challenge](https://www.hutter1.net/prize/).

#### A125. Fit a useful offline course onto a much smaller device

**Original verification / milestone:** A+N · Stretch.

Package one openly licensed course for a strict storage and memory budget while preserving all lessons, figures, exercises, and navigation. Optimize assets and runtime, not curriculum coverage.

**Original check:** Disable networking, compare a content manifest, replay every activity, and measure storage and peak memory. Have a learner check a sampled lesson.

**Original climb:** One module → the full course → an importable offline channel.

**Original starting point and proposed contribution:** Kolibri already provides offline education. The target is a new complete course package meeting a budget existing packaging cannot meet.

**Sources:** [Learning Equality, Kolibri User Guide](https://kolibri.readthedocs.io/en/latest/index.html).

#### A126. Make a public-data pipeline cheaper without changing its answers

**Original verification / milestone:** A · Stretch.

Optimize a widely reused open data-cleaning or joining pipeline, preserving its exact treatment of duplicate rows, nulls, Unicode, and ordering.

**Original check:** Compare full outputs on hidden inputs and adversarial edge cases; measure runtime and peak memory under a fixed environment. Include preprocessing and cache costs.

**Original climb:** One expensive stage → full pipeline parity → an accepted upstream patch.

**Original starting point and proposed contribution:** Query optimization and agentic code search exist. The unit of novelty is a new workload improvement with exact output equivalence.

**Sources:** [OpenRefine, Project overview](https://openrefine.org/); [Google DeepMind, AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).

#### A127. Make a useful open application run on a low-memory computer

**Original verification / milestone:** A+N · Stretch.

Reduce the peak memory of an open document viewer or educational application enough to complete a defined large-file workflow under a fixed low-memory limit.

**Original check:** Replay complete user tasks, compare outputs, enforce the memory cap, and test unseen files. Check that speedups do not hide missing content or disabled features.

**Original climb:** One formerly failing file → a held-out corpus → a maintained release.

**Original starting point and proposed contribution:** Performance work already exists. Choose a currently failing low-resource workflow with a measured baseline and real users.

**Sources:** [W3C WAI, Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/); [Learning Equality, Kolibri User Guide](https://kolibri.readthedocs.io/en/latest/index.html).

#### A128. Make accurate scientific rendering affordable on an ordinary CPU

**Original verification / milestone:** A+E · Frontier.

Optimize one open scientific visualization kernel—such as a specified volume-rendering operation—so a large public example becomes interactive without a GPU.

**Original check:** Compare against a trusted renderer under a predefined numerical or pixel-error bound; include difficult held-out volumes, startup time, and peak memory.

**Original climb:** One kernel → one usable application workflow → generalization across datasets.

**Original starting point and proposed contribution:** Rendering optimization exists. This target needs a new measurable gain at preserved fidelity, with no claim that a faster picture validates the underlying science.

**Sources:** [Google DeepMind, AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).

#### A129. Make parallel science give the same answer every time

**Original verification / milestone:** A+E · Frontier.

Replace one nondeterministic parallel reduction in an open scientific code with a faster reproducible implementation across supported thread counts and execution orders.

**Original check:** Check bitwise output stability and a stated numerical-accuracy bound on adversarial data. Measure overhead against both fast and reproducible baselines.

**Original climb:** One reduction → one scientific pipeline → an upstream reproducibility guarantee.

**Original starting point and proposed contribution:** Reproducible arithmetic exists. The proposed advance is closing a specific performance or integration gap in a used application.

**Sources:** [University of Washington PLSE, Herbie](https://herbie.uwplse.org/); [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/).

#### A130. Beat a hard optimization instance and ship the witness

**Original verification / milestone:** A · Frontier.

Choose a currently unsolved or improvable scheduling/packing instance from an open benchmark and find a better feasible solution, or a tighter certified bound.

**Original check:** Use an independent constraint checker for feasible solutions and a proof checker for any claimed optimality. Pin the instance and best-known baseline before running.

**Original climb:** One better witness → several held-out instances → a reusable search heuristic.

**Original starting point and proposed contribution:** Constraint solving is mature. Only a new result relative to the recorded current baseline counts; feasibility is easier to verify than optimality.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr).

### Original category: Constructive allocation and scheduling

#### A131. Give a school a timetable nobody likes less

**Original verification / milestone:** A+N · Stretch.

For a donated or synthetic school instance, reduce student clashes or teacher idle time while ensuring each person’s declared preference score is no worse than in the existing timetable.

**Original check:** Check every hard constraint and every individual preference score independently. The school validates the preference model; publish only claims within that model.

**Original climb:** One Pareto improvement → larger schools → robust rescheduling after an absence.

**Original starting point and proposed contribution:** Timetabling is established. The new artifact is a better certified schedule for an unsatisfied instance, not a generic scheduler.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A132. Let a food bank deliver the same help with fewer miles

**Original verification / milestone:** A+N · Stretch.

Optimize a donated or synthetic food-bank route plan while preserving every delivery, time window, vehicle capacity, and driver-hours constraint.

**Original check:** An independent checker verifies feasibility and distance under a frozen travel-time matrix. Compare against tuned routing software; label real travel uncertainties separately.

**Original climb:** One improved day → a month of instances → robust plans under delays.

**Original starting point and proposed contribution:** Routing software exists. The target is a new improvement or previously unmet operational constraint, with a complete route witness.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr).

#### A133. Pack more useful supplies into the same shipment

**Original verification / milestone:** A · Stretch.

Improve a humanitarian packing instance with fixed items, package sizes, fragility rules, destination needs, and weight limits. Optimize a declared benefit measure without reducing mandatory supplies.

**Original check:** Check exact geometry, weight, inventory accounting, and objective value. Compare against strong packing baselines and include all omitted items in the report.

**Original climb:** One verified packing → hidden shipments → a reusable packing policy.

**Original starting point and proposed contribution:** Packing algorithms exist. Novelty is a new feasible improvement under a registered constraint set; actual field benefit is not established by the model alone.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr).

#### A134. Remove exam clashes without creating new ones

**Original verification / milestone:** A+N · Stretch.

Improve an exam timetable so at least one student’s conflict burden decreases and no student’s declared burden increases, under fixed room, staffing, and accessibility constraints.

**Original check:** Check every student’s schedule and every room assignment. Publish the before/after constraint ledger and let the institution review the modeled preferences.

**Original climb:** One resolved clash → a full exam period → fast repair after a room is lost.

**Original starting point and proposed contribution:** Exam scheduling is established. The new result is a certified instance-level improvement that existing scheduling has not found.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A135. Save a missed bus connection without harming the other tested journeys

**Original verification / milestone:** A+N · Frontier.

Adjust a model timetable under fixed vehicles, driver constraints, and operating hours to improve a selected transfer while preserving travel time for every trip in a registered journey set.

**Original check:** Recompute all registered journeys and vehicle duties independently. State clearly that unmodeled travelers may experience different effects.

**Original climb:** One transfer → a corridor → a robust schedule under sampled delays.

**Original starting point and proposed contribution:** Transit planning exists. The challenge is a new constrained improvement with explicit coverage rather than an unqualified claim that nobody loses.

**Sources:** [MobilityData, Canonical GTFS Schedule Validator](https://github.com/MobilityData/gtfs-validator); [OpenTripPlanner, Accessibility documentation](https://docs.opentripplanner.org/en/latest/Accessibility/); [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A136. Give volunteers a fairer rota without leaving a shift empty

**Original verification / milestone:** A+N · Starter.

Improve a volunteer organization’s anonymized rota under availability, skills, workload caps, and each person’s declared preferences.

**Original check:** Check coverage and each volunteer’s preference score; require a Pareto improvement or explicitly agreed fairness objective. Keep the original roster as the baseline.

**Original climb:** One better rota → a season → repair after cancellations.

**Original starting point and proposed contribution:** Rota tools exist. The useful new result is a verified improvement for an organization whose present constraints are not adequately handled.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A137. Reduce appointment waiting in a transparent simulation

**Original verification / milestone:** A/S · Frontier.

For an open or synthetic clinic scheduling model, reduce waiting while preserving stated service capacity, priority rules, and staff workload limits.

**Original check:** Evaluate on unseen arrival/no-show seeds and report per-group waiting, not just the average. Publish the simulator and all constraints; clinical deployment is outside the result.

**Original climb:** One model → held-out demand patterns → a robust scheduling method.

**Original starting point and proposed contribution:** Appointment optimization exists. A new reproducible improvement under declared constraints is the target; simulated waiting is a proxy for real benefit.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A138. Find a surplus exchange where every participant benefits

**Original verification / milestone:** A+N · Stretch.

Using donated or synthetic inventories and needs, find exchanges among charities that reduce unmet demand without violating transport, expiry, or participant-specific acceptance constraints.

**Original check:** Provide an item-level flow ledger and verify each participant’s declared before/after utility and all capacities. Include transaction and transport costs.

**Original climb:** One beneficial cycle → a multi-organization exchange → robust matching under cancellations.

**Original starting point and proposed contribution:** Matching systems exist. The target is a new feasible exchange on a fixed instance, not a claim to know everyone’s unstated preferences.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr).

#### A139. Operate a simulated water network with less pumping

**Original verification / milestone:** A/S · Frontier.

Find a pump schedule for an open EPANET network that lowers modeled energy or cost while respecting the chosen pressure, tank, demand, and water-quality constraints.

**Original check:** Rerun independently on held-out demand scenarios, inspect every constraint, and compare with strong controls. A better simulation schedule does not establish deployment safety.

**Original climb:** One benchmark network → unseen demand → a reproducible robust controller.

**Original starting point and proposed contribution:** EPANET and water optimization already exist. The challenge is a new measured improvement with explicit constraints and uncertainty.

**Sources:** [US EPA, EPANET](https://www.epa.gov/water-research/epanet).

#### A140. Use less heating without making the simulated occupants colder

**Original verification / milestone:** A/S · Frontier.

Improve a controller on a BOPTEST building case, lowering modeled energy while holding comfort violations and other declared performance limits at or below baseline.

**Original check:** Use unseen weather periods, fixed information access, and identical equipment. Check all comfort metrics and include computation cost; report only simulated savings.

**Original climb:** One case → hidden weather → transfer to a second building model.

**Original starting point and proposed contribution:** BOPTEST already benchmarks controls. Novelty requires a new robust result against current strong baselines, not merely controlling a simulator.

**Sources:** [IBPSA, BOPTEST Test Cases](https://ibpsa.github.io/project1-boptest/testcases/).

### Original category: Formally checked software and mathematical tools

#### A141. Build a file reader that comes with a correctness proof

**Original verification / milestone:** A+E · Frontier.

Implement a useful, explicitly bounded subset of a scientific data format with a proof that accepted bytes decode according to its specification and malformed inputs cannot cause memory errors.

**Original check:** Check the proof with an independent trusted checker, inspect the exact format specification and assumptions, and compare behavior with reference corpora.

**Original climb:** One record type → the useful subset → integration into a maintained scientific tool.

**Original starting point and proposed contribution:** Verified parsers exist. Select a real format subset without an equivalent usable implementation; the initial specification is a substantial part of the work.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

#### A142. Prove that a scientific solver cannot create negative quantities

**Original verification / milestone:** A+E · Frontier.

For a specific open advection–diffusion discretization, prove non-negativity and mass balance under explicit timestep and boundary assumptions, then connect the theorem to its implementation.

**Original check:** Kernel-check the theorem, inspect model-to-code correspondence, and run manufactured solutions. A numerical analyst reviews whether the assumptions match the intended use.

**Original climb:** One update rule → full timestep → an implementation-linked guarantee.

**Original starting point and proposed contribution:** These mathematical properties are well studied. The new artifact is a missing machine-checked guarantee for a concrete used implementation.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

#### A143. Make an offline database survive every modeled crash

**Original verification / milestone:** A+E · Frontier.

For a small open local database engine, prove that acknowledged transactions persist under a precisely stated storage and crash model, and repair any counterexample.

**Original check:** Check the formal proof and independently inject crashes at every modeled write boundary. Inspect assumptions about atomic writes, flushing, and hardware behavior.

**Original climb:** One transaction path → recovery protocol → a usable proven storage subset.

**Original starting point and proposed contribution:** Crash-consistency work exists. This task is a new verified implementation or unresolved failure; proof under a model is not a guarantee against arbitrary hardware faults.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

#### A144. Make a useful AI calculation cheap enough to verify privately

**Original verification / milestone:** A+E · Frontier.

Choose one open, modest-size inference workload useful to a public-interest application and reduce proof-generation cost while preserving an explicitly specified quantized computation.

**Original check:** Verify proofs independently, compare inference with a reference interpreter, count setup and memory costs, and test tampered inputs and outputs. A cryptographer reviews the setup and statement.

**Original climb:** One operator bottleneck → the full model → a new cost/latency point on hidden inputs.

**Original starting point and proposed contribution:** EZKL already provides ZK inference tooling. The target is a new concrete efficiency or operator-coverage improvement, not inventing verified inference.

**Sources:** [EZKL, Prove documentation](https://docs.ezkl.xyz/getting-started/prove/).

#### A145. Let charities prove a matching calculation without exposing their lists

**Original verification / milestone:** A+E · Frontier.

Build a privacy-preserving proof that a fixed donation-matching allocation obeys published capacity and eligibility rules over committed private inputs.

**Original check:** Check the proof and small instances exhaustively; audit exactly what the public output reveals. The proof establishes computation on committed data, not that the submitted data are true.

**Original climb:** One small matching → a practical workload → lower-cost proofs and usable exports.

**Original starting point and proposed contribution:** Private computation exists. This is a new application-specific, audited implementation; privacy and statement design require expert setup.

**Sources:** [SCIP, VIPR: Verifying Integer Programming Results](https://github.com/scipopt/vipr); [EZKL, Prove documentation](https://docs.ezkl.xyz/getting-started/prove/).

#### A146. Find a better way to recover files after losing pieces

**Original verification / milestone:** A · Frontier.

Search for an erasure-code construction with a better registered tradeoff among redundancy, recovery bandwidth, and computation for a finite archival workload.

**Original check:** Check rank or recovery certificates for every covered erasure pattern, plus actual decoder performance. Freeze the known baseline and count all metadata.

**Original climb:** One improved finite construction → larger parameter sets → an archival implementation.

**Original starting point and proposed contribution:** Error-correcting codes are established. A new construction or practical improvement must be checked against current code tables before claiming novelty.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/); [Hutter Prize, Lossless compression challenge](https://www.hutter1.net/prize/).

#### A147. Test every important combination with fewer test cases

**Original verification / milestone:** A · Frontier.

Find a smaller constrained covering array for a real open application’s combinations of locales, accessibility modes, browsers, or document options.

**Original check:** An independent checker enumerates every required interaction and verifies coverage, exclusions, and row count. Compare with the best current construction for the registered instance.

**Original climb:** One smaller array → a real regression suite → a general construction method.

**Original starting point and proposed contribution:** Covering arrays are established. The new result is a verified smaller suite or new parameter construction, with immediate testing-cost value.

**Sources:** [CSPLib, Problems in Numerical Order](https://www.csplib.org/Problems/).

#### A148. Make a large formal proof cheap to check

**Original verification / milestone:** A+E · Frontier.

Reduce the memory, time, or certificate size needed to check a useful existing formal result without changing its statement or adding trusted assumptions.

**Original check:** Recheck with the original trusted kernel, compare theorem statements and axiom dependencies, and measure on an independent environment and held-out proofs.

**Original climb:** One expensive proof → a theorem family → an upstream verification improvement.

**Original starting point and proposed contribution:** Proof engineering exists. The contribution is a new measured improvement that preserves the original trust boundary.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

#### A149. Give an open mathematics course machine-checked solutions

**Original verification / milestone:** A+E · Frontier.

For one openly licensed undergraduate course, formalize a substantial exercise set, including assumptions and counterexamples where appropriate, and publish readable explanations beside checked proofs.

**Original check:** Check proofs with a trusted kernel; have a mathematician sample statement translations and all flagged ambiguities. Unsupported axioms and placeholders cannot count as completed exercises.

**Original climb:** One exercise family → a chapter → a course with reusable formal lemmas.

**Original starting point and proposed contribution:** Lean educational material and formal theorem libraries exist. Select uncovered exercises and produce useful reusable content, not benchmark contamination.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

#### A150. Build a free spreadsheet that can explain and certify its answers

**Original verification / milestone:** A+E · Frontier.

Create an open spreadsheet evaluator for a useful restricted formula language that emits a checkable calculation certificate linking each output to cells, rules, rounding, and source inputs.

**Original check:** Use an independently implemented certificate checker, exact decimal reference cases, and adversarial dependencies. Have a specialist audit the semantics once; certificates do not validate the input data.

**Original climb:** One nonprofit budget → the supported formula language → a usable proof-producing application.

**Original starting point and proposed contribution:** Spreadsheet engines and formal methods exist. The proposed frontier is a practical, interoperable, independently checkable combination for a stated unmet workflow.

**Sources:** [Lean, Axioms reference](https://lean-lang.org/doc/reference/latest/Axioms/); [Lean, Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/).

## Appendix B: all 30 earlier niche cards

**Full earlier wording retained.** Each niche contains both a first hill and a larger direction. Several larger directions—causal ecosystem questions, new predictive models, solver improvements—are deliberately deferred under the revised brief. The main queue extracts the source-recovery portions where a bounded unit is available. This appendix preserves them for manual filtering; it does not relabel them as grindable.


Research supplement, 11 September 2026.

The opportunity is often a small specialist workflow or a connection between fields: evidence in incompatible formats, measurements whose crucial qualifications live in methods sections, or valuable software that serves a tiny community. Existing work is a launchpad. The projects below are proposed extensions, not claims of established novelty or guarantees of discovery. Sources establish the technical context and starting resources; a full prior-art search remains part of starting each project.

Each niche has a first hill, a larger target, and a checkable deliverable. Checking a software improvement or a recovered measurement can be much cheaper than establishing every downstream ecological benefit. Where data access needs a partner, that is stated.

#### N01. Freshwater mussel restoration: find the missing fish in the life cycle.
   Many freshwater mussels depend on fish hosts during their larval stage. A subtle distinction matters: larvae attaching to a fish is weaker evidence than successful transformation into juvenile mussels. The [Illinois Natural History Survey host database](https://mollusk.inhs.illinois.edu/resources/freshwater-mussel-host-database/) explicitly describes an incomplete record and insufficient staffing for regular updates.

   **First hill:** Recover 100 omitted or newly published host relationships, including failed trials, exact evidence type, transformation success, and source page. **Larger target:** Build a restoration dependency model that identifies places where suitable water and habitat are present but the evidence points to missing host fish or inaccessible host habitat.

   **Check:** Every added relationship has a short source excerpt and page; graph calculations are reproducible. Start with one mussel genus. The database's own requested submission fields provide an unusually clear specification.

#### N02. Wildlife trafficking: reconstruct one shipment's documentary life.
   A shipment can acquire several public descriptions as it moves through seizure announcements, court reports, and annual statistics. Meanwhile, legal wildlife-trade records can disagree for ordinary reporting reasons; [CITES explains these discrepancies](https://tradeview.cites.org/en/faqs). [TRAFFIC's monitoring resources](https://www.traffic.org/what-we-do/thematic-issues/trade-monitoring/) provide a starting point for public seizure evidence.

   **First hill:** Build a source-linked, deduplicated history of rhino-horn or ivory seizures for one year, preserving uncertainty about whether two reports describe the same event. **Larger target:** Reconcile importer/exporter records, product units, re-exports, and reporting periods to produce a short queue of unexplained patterns for conservation investigators.

   **Check:** A reviewer can inspect each proposed match and its conflicting details. Score against a manually resolved sample. The useful output is documentary evidence, with discrepancies clearly distinguished from findings of wrongdoing; living animals' precise locations need not be published.

#### N03. Museum materials: stop a display case damaging what it preserves.
   Museum conservators use Oddy tests to assess potentially harmful emissions from display materials. Sweden's [Oddy database](https://www.raa.se/museer/forskning-och-kunskapsuppbyggnad/kulturarvslaboratoriet/oddytest/oddydatabas/) notes that formulations can change without a product-name change; an [interlaboratory study](https://www.nature.com/articles/s40494-024-01174-9) documents variation in testing and assessment.

   **First hill:** Build product histories linking test result, date, formulation or batch when available, region, protocol, and photograph. Find apparent disagreements explained by different products sharing a name. **Larger target:** Develop an image-assisted comparison tool that predicts expert coupon-corrosion ratings and identifies which judgments need review.

   **Check:** Source documents verify product histories. Hold out an entire laboratory when evaluating image scoring. Unrecorded formulation changes remain explicitly unknown. A useful release could cover just 50 widely used foams, adhesives, and boards.

#### N04. Microplastics: determine which pollution hotspots survive a fair comparison.
   A survey that captures very small particles and one using a coarse mesh can produce very different counts. [NOAA's marine microplastics database](https://www.ncei.noaa.gov/products/microplastics) already organizes data and methods, creating a base for deeper comparability work.

   **First hill:** Recover particle-size windows, recovery corrections, blank handling, and sampling methods from 50 papers; compare concentrations only where the measurements support a shared definition. **Larger target:** Build a global map of conclusions that remain stable across defensible choices of size cutoff, blank correction, and sampling protocol. Identify places where contradictory studies become consistent once their methods are reconciled.

   **Check:** Every transformation has a formula and source; withheld measurements test predictions. A failed conversion is a documented incompatibility, not an invented universal particles-to-mass factor. The compelling result is a map with reproducible reasons for believing each comparison.

#### N05. AAC communication software: migrate someone's voice without rearranging it.
   For people using augmentative and alternative communication, button locations and navigation can be learned actions. [ASHA discusses consistent locations and motor planning](https://www.asha.org/Practice-Portal/Professional-Issues/Augmentative-and-Alternative-Communication/). The [Open Board Format](https://github.com/open-aac/openboardformat) offers an interoperability foundation.

   **First hill:** Support one currently troublesome export/import pair while preserving button positions, speech output, and page links. **Larger target:** Build a migration tool with a report of changed navigation paths, missing audio, altered scanning order, and unsupported behavior. It should also help maintainers test whether an update changes established interaction sequences.

   **Check:** Replay the same action sequences in both systems and compare output and layouts. Start with a declared subset of features that can be preserved exactly. Users or specialists can review the short list of differences instead of checking an entire vocabulary manually.

#### N06. Tyre runoff: find which filters remove the pollutant load through a whole storm.
   There are public measurements of treatment for 6PPD-quinone, including [King County's bioretention dataset](https://catalog.data.gov/dataset/6ppd-quinone-6ppdq-treatment-by-high-performance-bioretention-soil-mix) and [Washington's treatment studies](https://www.ecology.wa.gov/regulations-permits/reporting-requirements/stormwater-monitoring/stormwater-action-monitoring/sam-effectiveness-studies/bioretention-effectiveness-for-6ppd-and-pfas).

   **First hill:** Recalculate one study's performance using time-aligned flow and concentration, accounting for nondetects. Lower outlet concentration and lower total discharged mass answer different questions. **Larger target:** Compare treatment configurations across studies to find designs whose apparent advantage survives differences in storm size, initial loading, sampling timing, and soil mix.

   **Check:** Publish the mass-balance notebook, uncertainty intervals, and source rows. Evaluate any predictive treatment model on storms or sites excluded from fitting. Where flow or residence-time information is missing, report what can still be bounded.

#### N07. Seed banks: distinguish dead seeds from seeds that were never persuaded to germinate.
   Seed-bank work involves both viability and dormancy; protocols and pretreatments matter. [Kew's seed biology research](https://www.kew.org/science/our-science/departments/trait-diversity-and-function/seed-and-stress-biology) provides context, while [GGCE documents an existing viability-test workflow](https://ggce.genesys-pgr.org/docs/manual/seed/viability/).

   **First hill:** Extract species-specific germination conditions, pretreatments, test duration, and viability evidence from published experiments. Produce a protocol comparison for one difficult plant group. **Larger target:** With a cooperating seed bank's historical logs, improve retesting priorities: identify accessions most likely to need attention while reducing unnecessary tests that consume seeds and staff time.

   **Check:** Source-linked protocol cards can be reviewed quickly. For scheduling, hide later test results and compare predictions with those outcomes. Public papers support the first project; operational scheduling requires access to a collection's records.

#### N08. Wastewater nutrients: separate measured improvements from changes in estimation.
   The [USGS historical wastewater nutrient-load dataset](https://www.usgs.gov/data/national-usepa-clean-watershed-needs-survey-wwtp-nutrient-loads-1978-2012) describes substituting literature-average concentrations where measurements were unavailable. [EPA's loading tool](https://echo.epa.gov/trends/loading-tool) provides additional discharge records and calculation context.

   **First hill:** For one watershed, label the provenance of each facility's annual nitrogen and phosphorus estimate: measured, calculated from reported components, or imputed. **Larger target:** Reconstruct treatment upgrades and compare downstream nutrient trends with actual changes in discharge, maintaining a consistent facility identity through renaming and permit changes.

   **Check:** Facility links and inputs have sources; loads can be recomputed. Publish conclusions separately for measured evidence and assumptions. The eventual benefit is a clearer picture of which improvements reduced pollution and which apparent changes arose from accounting.

#### N09. Soil carbon: check whether two samples contain the same amount of soil.
   Equal sampling depths can contain different soil masses after changes in density. That matters when comparing carbon stocks. An [open soil-mass correction paper](https://www.nature.com/articles/s41598-023-29289-2) explains the issue and an implementable correction.

   **First hill:** Reproduce ten published before/after estimates using equivalent soil mass wherever the underlying measurements permit it. **Larger target:** Build a reusable checker and evidence atlas showing which land-management conclusions survive depth, density, and sampling uncertainty; identify practices with consistent gains across independently measured studies.

   **Check:** Small tables, units, equations, and source references make the calculations inspectable. Missing density data should create a stated interval or an unresolved entry. A useful result is a corrected comparison with known limits, not a blanket verdict on a field.

#### N10. Environmental DNA: discover what old water samples can actually identify.
   A short DNA barcode may be shared by several species even when their full genomes differ. [GBIF's DNA-derived data guidance](https://docs.gbif.org/publishing-dna-derived-data/en/) describes the data ecosystem. [Research on river eDNA transport](https://www.nature.com/articles/ncomms12544) also shows why detection location and organism location need separate treatment.

   **First hill:** For one primer set and a frozen reference collection, compute which species are distinguishable and which form identical-barcode groups. **Larger target:** Reanalyse archived sequence datasets using those limits and updated references, recovering previously unresolved biodiversity signals and correcting overly precise assignments.

   **Check:** Sequence matches are machine-checkable, and held-out mock communities provide a benchmark where available. Each result records the reference version and supported taxonomic resolution. Historical sample identification is the first deliverable; interpreting presence, abundance, or origin adds further ecological questions.

#### N11. Lichens: turn forest surveys into long-running pollution evidence.
   Lichen surveys and tissue chemistry can provide environmental evidence spanning different timescales from instrument readings. The [US Forest Service lichen and air-quality database](https://gis.nacse.org/lichenair/) and its [user guide](https://www.fs.usda.gov/pnw/pubs/pnw_gtr988.pdf) provide a concrete starting point.

   **First hill:** Match lichen samples to nearby deposition or pollution records, accounting for species, sampling dates, and available climate context. **Larger target:** Find where multiple indicators support an overlooked pollution change, or where an apparent trend can be traced to a species or sampling change.

   **Check:** Withhold instrumented sites and test how well the biological evidence predicts their measurements. Every biological sample retains its original identification and location uncertainty. A first contribution could be a validated crosswalk for one region and one pollutant.

#### N12. Coral restoration: follow projects after the final report.
   Coral restoration has an [existing project database](https://icriforum.org/restoration/coral-restoration-database/). A [major review with open research context](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0226631) documented short monitoring periods and uneven reporting in the literature it examined.

   **First hill:** Take a historical set of projects and find later monitoring in theses, repositories, agency reports, and subsequent publications. Link genuine follow-up to the original cohort. **Larger target:** Re-estimate long-term outcomes while tracking replacement planting, missing follow-up, and whether counts represent fragments or independent source colonies.

   **Check:** Added follow-ups link to the exact cohort and source. Recompute survival estimates under explicit assumptions about missing data. The interesting discovery would be which early indicators predicted later persistence, tested on projects excluded from model fitting.

#### N13. Ghost fishing gear: count distinct hazards and completed removals.
   A net may be reported several times, and a sighting does not mean a removal occurred. The [Global Ghost Gear Initiative portal](https://www.ghostgear.org/dataportal) provides a starting resource, with access levels varying by dataset; [NOAA explains the ecological problem](https://oceanservice.noaa.gov/facts/ghostfishing.html).

   **First hill:** For one coast, reconcile public sightings, photographs, and cleanup reports into distinct gear histories, including confirmed removal. **Larger target:** Use those histories with currents and weather to forecast likely accumulation or stranding zones, then evaluate predictions on later records.

   **Check:** Reviewers inspect proposed photograph and event matches. Date-blocked evaluation tests forecasting without using future reports. A defensible early achievement is a much cleaner inventory of known hazards; operational cleanup decisions can build on that inventory.

#### N14. Fish passage: find the combinations of small barriers that matter.
   Rivers contain many small barriers as well as prominent dams. The [AMBER atlas](https://amber.international/) provides a substantial existing mapping base, and its [field manual](https://amber.international/wp-content/uploads/2021/01/AMBER-Field-Manual_draft_Final_cover2_.pdf) explains survey categories.

   **First hill:** For one catchment, reconcile atlas records with public culvert surveys and reports, identifying missing or duplicated obstacles. **Larger target:** Find sets of interventions that reconnect the most suitable habitat under a budget, accounting for downstream barriers and species-specific passage assumptions.

   **Check:** Sources verify proposed map corrections. The optimization produces a reproducible connectivity calculation, with results tested across uncertain barrier passability. A compact demonstrator can show why removing either of two barriers alone helps little while addressing both opens a substantial reach.

#### N15. Dung beetles: recover the function hidden behind an insect count.
   Beetle abundance, species composition, and the work done processing dung need not move together. There are published datasets on this niche, including [an experiment on reduced ivermectin use](https://research-repository.uwa.edu.au/en/datasets/c0480170-1777-439f-aa46-cc5db7282395/) and [research on community functionality](https://www.sciencedirect.com/science/article/pii/S0167880921003388).

   **First hill:** Join measured residue exposure, time since treatment, beetle guild or biomass, and dung-removal outcomes across a tractable set of experiments. **Larger target:** Find which measured community features best predict dung burial or removal across environments, and whether existing abundance-only summaries miss the functional effect.

   **Check:** Hold out whole experiments or locations when predicting measured outcomes. A source-linked reanalysis can be checked without conducting a new experiment; translating it into livestock treatment decisions is a separate project.

#### N16. Snowfall measurement: recover snow that blew past the gauge.
   Wind, shielding, and gauge design affect measured solid precipitation. [WMO SPICE research](https://hess.copernicus.org/articles/22/1437/2018/) provides established correction methods and benchmark evidence.

   **First hill:** Recover instrument and shield histories for a small station network from manuals and logs, then apply existing transfer functions where their conditions hold. **Larger target:** Test whether corrected precipitation reconciles apparent disagreements with independent snowpack or catchment water-balance measurements.

   **Check:** Validate correction software on published reference cases; hold out relevant reference observations when evaluating reconstructed histories. Clearly separate measured inputs from inferred instrument metadata. One concrete success would be explaining a historical discontinuity coincident with an equipment change.

#### N17. Isotope hydrology: connect the same water across scientific disciplines.
   Rainfall, river, and groundwater studies can all measure stable isotopes while serving different research questions. The [IAEA precipitation and river isotope networks](https://nucleus.iaea.org/Pages/GNIPR.aspx) provide a starting point, subject to their access conditions.

   **First hill:** Assemble a source-linked isotope chronology for one basin from network records and papers, aligning standards, dates, and sampling locations. **Larger target:** Test competing explanations of water sources and seasonal recharge using isotope observations together with streamflow and weather, identifying hypotheses inconsistent with the combined record.

   **Check:** Standard conversions are reproducible; competing models must predict observations withheld in time or space. Mixing fractions should be intervals where multiple explanations fit. The goal is a constrained basin reconstruction rather than a claim that one isotope value uniquely determines water age.

#### N18. Wetland methane: find the short episodes that dominate a yearly budget.
   The [FLUXNET-CH4 community product](https://fluxnet.org/data/fluxnet-ch4-community-product/) offers methane flux time series and processing context, with site-level licensing distinctions.

   **First hill:** Quantify how much annual measured methane exchange comes from short high-flux episodes across a selected set of wetlands; examine the impact of gaps during those periods. **Larger target:** Combine flux records with weather and hydrological observations to find predictors of those episodes and test which monitoring or gap-filling choices systematically miss them.

   **Check:** Use held-out intervals with real observations to evaluate reconstruction, including deliberately hidden bursts. Report missingness and uncertainty. The directly verified achievement is a better annual-budget estimator on existing observations, which can then improve comparisons among wetland management studies.

#### N19. Seagrass carbon: compare like with like beneath the meadow.
   Useful open resources include [global seagrass carbon-stock data](https://springernature.figshare.com/articles/dataset/Global_seagrass_carbon_stocks/27198915) and [Baltic sediment-core measurements](https://doi.pangaea.de/10.1594/PANGAEA.947704).

   **First hill:** Recompute comparable sediment carbon stocks using available depth, density, and organic-carbon measurements, tracing missing assumptions. **Larger target:** Link repeated publications from the same cores or sites, and identify environmental predictors of robust stock differences without counting the same evidence twice.

   **Check:** Core-level calculations are inspectable; site-held-out prediction tests generalization. Keep existing stock and new sequestration as distinct outputs. An attractive public result is a map of carbon estimates whose ranking survives reasonable measurement choices.

#### N20. Lake ice: distinguish a climate signal from a changed definition.
   Ice-on can mean several observable events, as can ice-off. The [NSIDC lake and river ice collection](https://nsidc.org/data/lake_river_ice/) and [documentation](https://nsidc.org/sites/default/files/g01377-v001-userguide_1_1.pdf) provide long records to investigate.

   **First hill:** Recover local definitions and observer changes for a set of long-running records; compare ambiguous events with existing dated photographs or other contemporaneous observations where available. **Larger target:** Build a climate-ready chronology that preserves uncertainty and distinguishes brief thaw/refreeze events from data or coding errors.

   **Check:** Every amended date has dated supporting evidence. Test automated date estimates on independently labelled years. The visual demonstration can put historical observations and their reconstructed interpretation side by side.

#### N21. Long-term insect monitoring: find the ecological change behind the equipment change.
   The [Rothamsted Insect Survey](https://www.rothamsted.ac.uk/national-capability/the-insect-survey) illustrates the value of decades-long trap records. Comparable analyses must account for sampling effort and collection methods.

   **First hill:** Recover missing trap maintenance, operation, and equipment-change metadata from accessible records for one network. **Larger target:** Combine counts with available size, biomass, and trait information to determine which kinds of insect decline persist after accounting for observation changes.

   **Check:** Equipment corrections must be supported by overlap experiments or other evidence; hold out traps and years when evaluating models. Historical raw records and logs may need a research partnership. An initial public-data project can focus on published methodological comparisons and a reusable correction benchmark.

#### N22. Ecological light pollution: find changes a brightness map alone misses.
   [NASA's Black Marble](https://science.gsfc.nasa.gov/earth/projects/586/) supplies night-light observations. A biological question can also require the spectrum and timing of lighting, which calls for additional evidence.

   **First hill:** For one municipality, extract lamp models, replacement dates, and dimming schedules from public procurement documents, then link them to night-light observations. **Larger target:** Reconstruct changes in an explicitly defined ecological exposure metric using documented lamp spectra, and compare the resulting change dates with existing wildlife observations.

   **Check:** Audit fixture specifications against documents and quantify the effect of unknown installations. Satellite radiance is an input, not a direct measurement of blue-light exposure. A useful result could identify a lighting change that an aggregate brightness trend obscures.

#### N23. Pollination timing: calculate whether flowers and pollinators actually overlap.
   [USA National Phenology Network observations](https://data.usanpn.org/observations/) and [Phenobase](https://phenobase.org/project/) provide existing resources and integration efforts.

   **First hill:** For a small set of documented plant–pollinator relationships, reconstruct flowering and adult-activity intervals rather than comparing only first sightings. **Larger target:** Test which relationships show a robust shift in overlap across years and elevations, incorporating observer effort and uncertainty about activity between visits.

   **Check:** Withhold entire seasons or locations and compare predicted windows with observations. Review the small set of biological relationships separately from the automated timing calculations. A demonstrator could animate changing overlap for ten interactions with source-backed evidence.

#### N24. Textile microfibres: compare shedding over a garment's use.
   Textile shedding studies differ in materials and laundering protocols; [this experimental apparel study](https://pmc.ncbi.nlm.nih.gov/articles/PMC8270180/) gives a concrete entry point.

   **First hill:** Recover washing sequence, fabric mass, construction, sample preparation, and measurement units from an initial set of experiments. Compare cumulative shedding over matching wash sequences rather than a convenient single wash. **Larger target:** Find material or construction features whose lower shedding persists across independent protocols, and distinguish filter capture from the eventual destination of captured material.

   **Check:** Publish extraction tables and conversions; hold out studies when assessing predictive material features. Do not extrapolate a few measured washes into an entire lifetime without a declared model. The first benchmark can concern a narrow, well-measured use window.

#### N25. Beach nourishment: learn where the added sand went.
   The [National Beach Nourishment Database](https://coast.noaa.gov/digitalcoast/tools/beach-nourishment.html) provides project histories. More detailed sediment specifications and monitoring can reside in individual engineering reports.

   **First hill:** Link repeated projects on one coastline to grain-size information, beach profiles, and storm histories where those reports are public. **Larger target:** Test whether particular sediment and placement choices predict persistence after controlling for wave exposure and major storms, producing a reusable retrospective comparison tool.

   **Check:** Every profile and project match has a source. Predict later surveys or separate projects without fitting to them. A beach losing visible volume does not by itself establish that sediment left the coastal system, so define the monitored quantity precisely.

#### N26. Underwater sound: recover usable science from difficult acoustic archives.
   [NOAA's passive acoustic archive](https://www.ncei.noaa.gov/products/passive-acoustic-data) documents the importance of calibration and timekeeping and provides recordings plus derived products. Existing community software is a strong starting point.

   **First hill:** Recover deployment-specific calibration and clock information from documents and package it for recordings that otherwise cannot support trustworthy comparisons. **Larger target:** Reconstruct changes in animal-call detectability under varying ship noise, distinguishing a quieter animal record from a noisier listening environment.

   **Check:** Validate recovered metadata against known deployments. Inject known calls into real background recordings to test detectability; verify time corrections against independent timing evidence. This can establish an improved detection pipeline without claiming that call counts alone measure population size.

#### N27. Food composition: reconcile measurements that use different definitions of food.
   A food value may concern raw or cooked material, an edible portion or a whole item, or a different moisture basis. [FAO's food-composition standards](https://www.fao.org/infoods/infoods/standards-guidelines/en/) and [USDA Foundation Foods documentation](https://fdc.nal.usda.gov/Foundation_Foods_Documentation/) provide starting rules and data.

   **First hill:** Reconcile one staple across several tables, recording preparation, edible fraction, moisture, analytical method, and any conversion. **Larger target:** Build an open comparison and conversion library that expands coverage of underrepresented foods from primary analyses while flagging values that cannot be reconciled responsibly.

   **Check:** Unit and mass-balance constraints are automatic; independent analyses test transformed estimates. A narrowly scoped, reliable converter can immediately help researchers and software developers who otherwise perform these checks manually.

#### N28. Building moisture: make a trustworthy open simulator for one common wall type.
   Hygrothermal modeling has a useful public starting point: [measurements of 56 timber-framed wall structures](https://doi.org/10.5281/zenodo.17778562), including boundary conditions and material properties. [MASEA](https://www.masea-ensan.com/) provides another material-data resource.

   **First hill:** Implement or improve an open solver and reproduce a declared subset of those experiments. **Larger target:** Build a material-data importer that handles temperature- and humidity-dependent properties with provenance, then test whether it improves predictions on unseen wall assemblies.

   **Check:** Conservation tests and held-out measured temperature/humidity curves provide objective targets. A reproducible simulation benchmark is the first achievement; real-building recommendations need the appropriate building-specific assessment. This is a plausible route to making a specialist tool substantially easier to use and verify.

#### N29. Room acoustics: make cheap simulation earn trust against real recordings.
   The [OpenAIR impulse-response library](https://www.york.ac.uk/physics-engineering-technology/research/communication-technologies/projects/open-acoustic-impulse-response-library/) provides measurements of how spaces respond to sound.

   **First hill:** Use documented rooms with adequate geometry and recording metadata to benchmark an open simulator across frequency bands and source/receiver positions. **Larger target:** Build an accessible tool for exploring speech-intelligibility or reverberation improvements in classrooms and community spaces, displaying which outputs are supported by benchmark performance.

   **Check:** Compare predicted impulse-response features with held-out measurements and inspect mismatched recording configurations. Treatment improvements can initially be demonstrated in controlled, measured examples. One useful target is reliable performance on ordinary small rooms with inexpensive materials and modest compute.

#### N30. Road salt: distinguish today's runoff from salt stored underground.
   The [Water Quality Portal](https://www.waterqualitydata.us/) offers discrete chemistry observations. Research on [freshwater salinisation](https://www.nature.com/articles/s41467-021-24281-8) illustrates why interpreting changing salinity requires attention to sources and catchment processes.

   **First hill:** For one monitored catchment, combine chloride and other available ions with conductivity and flow, documenting where conductivity-to-chloride conversion is supported by paired measurements. **Larger target:** Compare models of immediate runoff and delayed storage/release, testing whether they explain persistent summer chloride or lagged changes after reduced salt application where application records exist.

   **Check:** Predict withheld chloride samples and seasons. Distinguish measured ion evidence from inferred source contributions. A good first win is identifying which apparently contradictory observations become consistent under one independently testable storage model.

### Original closing notes: How to turn these into agent challenges

For a hill-climbable public list, give each challenge a frozen starting dataset, an explicit output artifact, a baseline, and an independent checker or held-out test set. Keep source reconstruction and scientific inference visible as separate steps. Offer a small achievement that is useful on its own, followed by a larger question it enables.

Examples of concrete challenge wording:

- Add 100 source-verified mussel–fish host records, preserving evidence strength and negative results.
- Convert an AAC vocabulary between two named systems while preserving all supported button paths and speech outputs.
- Reproduce a published soil-carbon comparison using equivalent soil mass and expose every assumption.
- Recover calibration metadata for ten acoustic deployments and pass a benchmark with deliberately hidden metadata.
- Improve an open moisture solver's error on unseen wall experiments while retaining conservation checks.

Three particularly fertile research patterns recur: reconstruct missing metadata that makes expensive measurements reusable; join independent observations of the same physical quantity; and turn a tiny community's manual workflow into software with a clear regression test. They permit a useful first result even when the largest scientific question stays open.


## Appendix C: all 30 hardware-enabled cards

**Optional data-creation branch, retained in full.** These require an instrument owner and sometimes substantial calibration or sampling design. They remain useful ideas from the earlier request, while the current recommended queue gives priority to already existing data.


An agent can turn an instrument into a sustained scientific contributor by selecting useful observations, configuring acquisition, maintaining calibration records, diagnosing failures, analyzing results, and producing evidence another person can check. The strongest first projects have an existing measurement protocol and a particular gap in coverage.

The scientific programmes and much of the automation below already exist. The proposed challenges concern additional observations and improvements in autonomous operation, sampling, calibration, or integration. Their novelty has not been established by an exhaustive prior-art review. A linked citizen-science programme establishes scientific context; automated submissions still need to meet that programme's requirements and are not necessarily accepted through its ordinary volunteer workflow.

The hardware owner handles initial installation, access, and occasional maintenance. Agent actions concern observation and data processing; telescope motion and enclosure protection remain subject to independent equipment interlocks. A connected device supports live control, while an SD-card logger needs either human retrieval or an additional connected interface. This distinction matters particularly for acoustic recorders.

#### H01. Keep a distant planet's timetable accurate.
   **Hardware:** A tracking telescope, camera, and control computer. NASA describes a typical entry setup as a telescope of about four inches or larger, subject to target and equipment performance.

   **New data and agent task:** Choose a visible priority exoplanet with uncertain transit timing; acquire calibrated observations before, during, and after transit; fit a light curve and update its timing. NASA's [Exoplanet Watch observing guide](https://science.nasa.gov/citizen-science/exoplanet-watch/how-to-contribute/how-to-observe/) identifies a real need for such measurements to support future large-telescope observations.

   **First win and verification:** Produce one scientifically usable transit timing, with raw images, comparison stars, and uncertainty. Compare an independent reduction, then test the updated prediction against a later transit. The scalable target is usable timing improvement per donated telescope-hour.

#### H02. Measure an asteroid's silhouette with several back gardens.
   **Hardware:** Telescopes or appropriate cameras at separated sites, with validated timing, often GPS-based.

   **New data and agent task:** Coordinate observations of a predicted stellar occultation. Record disappearance and reappearance, including credible non-detections from nearby locations. The [International Occultation Timing Association](https://occultations.org/observing/observing-basics/) explains the equipment and value of distributed observing.

   **First win and verification:** Contribute an additional timed chord or constraining miss to an event. An independent extraction can verify event times; jointly fitted silhouettes can be checked against multiple stations. A larger challenge is scheduling an existing network to cover the most informative missing chords despite weather and equipment differences.

#### H03. Resolve an asteroid's ambiguous rotation period.
   **Hardware:** A tracking telescope and camera suitable for differential photometry.

   **New data and agent task:** Fit competing periods to available brightness measurements, then select the next observable interval at which the predictions differ most. The [British Astronomical Association's asteroid section](https://britastro.org/sections/asteroids) provides observing context and targets.

   **First win and verification:** Gather the new light-curve segment that distinguishes two plausible periods. Verify predictions against additional nights, keeping shape-model non-uniqueness explicit. This is a good active-learning project: the quality of the next observation can matter more than taking many indiscriminate images.

#### H04. Fill the observation gap in a changing star.
   **Hardware:** A remotely controllable photometry telescope.

   **New data and agent task:** Follow an actual [AAVSO observing campaign](https://www.aavso.org/) and use its [Target Tool](https://targettool.aavso.org/) to identify suitable observations. Maintain appropriate cadence around a variable star's changing state and provide coverage when other sites cannot observe.

   **First win and verification:** Produce a campaign-compliant, independently reproducible sequence through a coverage gap. Compare overlapping measurements from other observers and retain standard comparison-star checks. A useful benchmark measures additional valid temporal coverage against a fixed observing schedule, rather than counting exposures.

#### H05. Measure which satellites actually brighten the night sky.
   **Hardware:** A calibrated wide-field camera or telescope with accurate timestamps.

   **New data and agent task:** Use public orbital predictions to schedule passes of known objects, then measure brightness versus observing geometry and retain position residuals. [IAU SatHub's tools](https://github.com/iausathub) provide relevant infrastructure. Its [SCORE repository](https://github.com/iausathub/score) describes a satellite-observation database but labels the application as under development, so public upload readiness must be checked separately.

   **First win and verification:** Produce calibrated measurements in an under-sampled geometry and test brightness or sky-position predictions on future passes. Independent cameras can confirm outliers. Public orbital elements are useful scheduling inputs; [CelesTrak documents limitations](https://www.celestrak.org/publications/SDA-TAP-Lab/2025/) that prevent treating them alone as a validated collision-risk service.

#### H06. Add a missing viewpoint on meteors.
   **Hardware:** A sensitive fixed night camera and small computer, with a field of view that complements other stations.

   **New data and agent task:** Extend the [Global Meteor Network](https://globalmeteornetwork.org/), whose cameras and open-source detection software already operate on Raspberry Pis. The proposed agent maintains calibration, diagnoses changes in pointing or image quality, and improves station overlap or event review.

   **First win and verification:** Add independently consistent trajectories that the surrounding network could not otherwise resolve. Reprojection across cameras verifies geometry, and representative human-labelled video tests false detections. Camera uptime alone is a weaker goal than additional scientifically usable multi-station events.

#### H07. Listen to natural radio bursts from the Solar System.
   **Hardware:** A suitable receive-only radio-astronomy antenna, software-defined receiver, and computer.

   **New data and agent task:** Operate a [Radio JOVE](https://radiojove.gsfc.nasa.gov/) station, retain dynamic spectra, identify candidate solar or Jovian activity, and compare records with geographically separated observers. NASA provides [citizen-science training](https://radiojove.gsfc.nasa.gov/citizen_science/training.php).

   **First win and verification:** Record and independently corroborate an event while correctly flagging local interference. A larger project coordinates frequency and time coverage among willing stations to recover event structure that an isolated receiver misses. Use instrument-appropriate calibration and preserve raw data around both candidate events and quiet periods.

#### H08. Catch sprites above distant thunderstorms.
   **Hardware:** A low-light camera at a fixed, sheltered site with a clear view toward distant storms; accurately synchronized time. Faster video hardware enables finer temporal questions.

   **New data and agent task:** Select promising directions and acquisition settings, retain candidate transient luminous events, and coordinate simultaneous images from separated cameras. [NASA's Spritacular programme](https://science.nasa.gov/citizen-science/spritacular/) provides a scientific destination and observing guidance.

   **First win and verification:** Capture a source-preserving event report with timing, direction, settings, and confidence; matching observations or lightning records strengthen validation. The larger target is multi-view geometry and event morphology. This project can use fixed remote cameras without sending people to chase storms.

#### H09. Turn reflected navigation signals into a water-level gauge.
   **Hardware:** A suitable GNSS receiver that exposes signal-strength observations, antenna, and Raspberry Pi at a surveyed location overlooking water. Ordinary position fixes alone are insufficient.

   **New data and agent task:** Process interference between direct and reflected satellite signals; identify useful satellite arcs and flag changes in the reflection environment. The [Raspberry Pi Reflector research](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021WR031713) demonstrates this hardware concept, and [gnssrefl](https://link.springer.com/article/10.1007/s10291-024-01694-8) supplies an established analysis base.

   **First win and verification:** Match a co-located conventional gauge over a stated range of conditions, then extend measurements to an under-observed location. The agent's contribution is making a scientifically established but specialist technique easier to deploy and maintain.

#### H10. Make a stream webcam produce reliable flow measurements in difficult conditions.
   **Hardware:** A fixed camera and control computer; surveyed reference points and a measured cross-section if estimating discharge.

   **New data and agent task:** Use [pyOpenRiverCam](https://github.com/localdevices/pyorc), which already estimates surface velocity and discharge. Its maintainers explicitly identify improved nighttime and poor-weather processing among desired funded features. Collect suitable reference footage and tune acquisition and analysis for difficult conditions.

   **First win and verification:** Improve velocity estimates on withheld clips, compared with independent flow measurements. Discharge additionally needs cross-section and surface-to-depth velocity assumptions. A useful public challenge can start with surface velocity and add the remaining calibration later.

#### H11. Record when a temporary stream starts and stops flowing.
   **Hardware:** A weatherproof fixed camera overlooking a short reach, optionally paired with a water-presence sensor.

   **New data and agent task:** Distinguish dry bed, isolated pools, connected still water, and flowing water. Retain event-triggered video around transitions and record rainfall context. [CrowdWater's protocols](https://crowdwater.ch/wp-content/uploads/2017/03/Anleitung_en.pdf) establish the relevance of temporary-stream observations.

   **First win and verification:** Produce a season's independently checked transition times with explicit observation gaps. The larger target is learning which rainfall and antecedent conditions reconnect a catchment. The recording provides direct evidence for brief events a weekly site visit may miss.

#### H12. Measure how a beach recovers between surveys.
   **Hardware:** A fixed coastal camera with stable geometry and surveyed reference points.

   **New data and agent task:** Acquire repeat imagery, align it, identify appropriate shoreline indicators, and account for tides and waves. [CoastSnap research](https://doi.org/10.1016/j.csr.2022.104796) demonstrates the underlying value of repeat consumer-camera observations.

   **First win and verification:** Reproduce shoreline position against a held-out survey or independently labelled image set. A larger study compares recovery after different storms or interventions. Defining a consistent shoreline indicator prevents changes in tide or wave run-up from masquerading as persistent erosion.

#### H13. Find the short periods when a river carries most visible plastic.
   **Hardware:** A bridge or bank camera observing a defined river transect, with suitable resolution and timestamps.

   **New data and agent task:** Track floating items across a counting line, distinguish recurrent views of the same item, and sample storm and tidal conditions. [Camera-based river-plastic monitoring already exists](https://doi.org/10.1029/2019EA000960), including a [recent semi-autonomous system](https://www.nature.com/articles/s41598-026-48630-z); new sites, difficult-condition performance, and integration with flow are proposed extensions.

   **First win and verification:** Match independent video counts, reporting the detectable size range and monitored fraction of the river. Then evaluate whether sampling ordinary days misses major transport episodes. Visible floating-item counts do not establish total plastic mass or microplastic abundance.

#### H14. Give a seasonal pond a complete water history.
   **Hardware:** A fixed camera and, optionally, a simple water-level logger.

   **New data and agent task:** Record filling, shrinking, overflow, and drying at a pond or restored wetland. Convert imagery into water-presence or calibrated area measurements and match events to rainfall. [Chronolog's environmental photo monitoring](https://www.chronolog.io/) provides an existing approach to repeated environmental imagery.

   **First win and verification:** Build a checked wet/dry chronology. With a stable reference and sufficient geometry, extend to area or level. A network could test which restoration designs maintain particular hydroperiods; ecological outcomes would need their own observations.

#### H15. Photograph the clouds exactly when a satellite passes overhead.
   **Hardware:** An all-sky camera, ideally with fixed exposure metadata and a clean view.

   **New data and agent task:** Schedule observations around satellite overpasses, classify sky conditions, and preserve both standard and uncertain cases. NASA describes how [ground cloud observations complement satellite views](https://science.nasa.gov/blogs/earth-matters/2022/07/01/skygazing-for-science/).

   **First win and verification:** Produce paired ground/satellite records with human-checkable cloud annotations. The larger challenge is collecting cases where satellite products disagree or are uncertain, then testing which additional ground measurements resolve the disagreement. Integration with an existing citizen-science programme requires agreement on automated data format and provenance.

#### H16. Map the last snow in places satellites cannot see well.
   **Hardware:** Fixed cameras overlooking a defined slope, forest opening, or snow-depth staff; optional temperature sensors.

   **New data and agent task:** Track snow-cover fractions, depth where a staff is visible, and the date of persistent melt-out. The [GLOBE measurement protocols](https://www.globe.gov/do-globe/globe-protocols) provide a measurement framework; reflectometry is an alternative for suitably equipped GNSS stations.

   **First win and verification:** Match independently labelled images or manual depth readings. Distinguish obscured views from no snow. A larger network can measure how aspect, canopy, and elevation affect snow persistence at spatial scales unresolved by coarser products.

#### H17. Measure which shade actually cools a place through the day.
   **Hardware:** Fixed thermal imaging or infrared temperature sensors, paired with shielded air-temperature sensors and a record of weather conditions.

   **New data and agent task:** Compare shaded and unshaded patches repeatedly, maintaining comparable viewing geometry and noting material properties. [GLOBE's surface-temperature protocol](https://www.globe.gov/web/atmosphere/protocols/surface-temperature) supplies relevant methods.

   **First win and verification:** Reproduce temperature differences with a reference instrument and independent time windows. Expand to comparisons among trees, shade cloth, and surfaces on sites where owners already plan such changes. Surface temperature, air temperature, and human heat exposure remain separate measured or modeled quantities.

#### H18. Find whether a lighting change made the sky measurably darker.
   **Hardware:** A computer-readable sky-brightness meter and/or calibrated all-sky camera.

   **New data and agent task:** Establish a baseline, record natural and artificial changes, and compare matched moon, cloud, and seasonal conditions. [DarkSky's survey guidance](https://darksky.org/resources/guides-and-how-tos/how-to-conduct-a-night-sky-quality-survey/) explains why these conditions matter.

   **First win and verification:** Cross-check the station against a reference meter and independently reproduce a documented before/after comparison. A larger project joins these data to owner-approved changes in lighting schedules. Preserve raw brightness measurements even when conditions make them unsuitable for a particular comparison.

#### H19. Give an overlooked habitat a continuous seasonal record.
   **Hardware:** A fixed network camera with stable configuration and field of view.

   **New data and agent task:** Measure leaf-out, senescence, flowering where resolvable, and event responses in a habitat lacking sustained observations. The [PhenoCam installation workflow](https://github.com/bluegreen-labs/phenocam_installation_tool_v2) shows that networked acquisition is established; an agent can maintain data quality and target unrepresented habitats or events.

   **First win and verification:** Match phenological dates against independent annotations or site observations. Detect camera movement, exposure changes, and obstructed lenses before they become ecological trends. Joining PhenoCam requires its own site review; a camera does not become a network site merely by using similar software.

#### H20. Observe actual flower visits for an entire season.
   **Hardware:** A close-focus camera aimed at a defined flower patch, with enough resolution and frame rate for the chosen categories.

   **New data and agent task:** Count visits, track departures and returns, record flower availability and weather, and preserve standard-duration observation windows. [UK PoMS Flower-Insect Timed Counts](https://ukpoms.org.uk/node/23) provide a useful human-observation benchmark.

   **First win and verification:** Match blinded human counts on sampled clips, reporting errors by insect group. Then collect under-observed times or weather transitions. Video-derived measurements need validation and an agreed submission route; a recorded visit is evidence of visitation, not automatically successful pollination.

#### H21. Make an automated moth station dependable enough for long-term comparisons.
   **Hardware:** An established non-lethal photographic monitoring station operated according to its protocol.

   **New data and agent task:** Build on [UKCEH's AMI system](https://www.ceh.ac.uk/ukceh-ami-trap-automated-monitoring-insects), maintaining capture, timestamps, storage, and image quality. Its [FAQ](https://www.ceh.ac.uk/our-science/projects/ami-faq) documents practical clock, storage, and camera failures an agent could diagnose.

   **First win and verification:** Reduce unusable station-nights and produce expert-reviewable encounter records. Check duplicates and identifications on independent samples. Keep light and capture settings controlled: improving the images by changing attraction conditions can also change the observation process.

#### H22. Measure bird activity while retaining evidence of what the microphone missed.
   **Hardware:** A networked microphone or an acoustic recorder connected to a computer.

   **New data and agent task:** Build on [BirdNET's existing models and devices](https://birdnet.cornell.edu/) to run a repeatable observation programme across seasons or documented habitat changes. Retain background-noise estimates, recording effort, uncertain calls, and random baseline clips.

   **First win and verification:** Obtain validated species detections at a declared precision level, with every detection linked to audio. Larger studies can estimate occupancy using repeated surveys and detection uncertainty. Automatically recognized calls alone should not be relabelled as counts of individual birds.

#### H23. Find which garden routes bats actually use.
   **Hardware:** An ultrasonic-capable microphone or recorder, such as appropriate [AudioMoth hardware](https://www.openacousticdevices.info/audiomoth), with a connected interface for remote operation.

   **New data and agent task:** Measure bat passes and acoustic activity at paired locations, noting weather and existing lighting schedules. Preserve calibration and avoid changing microphone orientation between comparisons.

   **First win and verification:** Validate pass detections against spectrograms and expert-labelled clips. Use defensible species groups where calls overlap. A larger network can compare activity along potential habitat connections; pass counts and feeding-like call sequences require carefully stated interpretation.

#### H24. Record the frog chorus that starts after rain and disappears before the next visit.
   **Hardware:** A fixed microphone near a pond, with rainfall context and consistent recording settings.

   **New data and agent task:** Retain baseline recordings and denser observations around rain-triggered changes. Combine calling records with water-presence observations from a camera. [FrogID](https://www.frogid.net.au/participate/about-frogid/) illustrates the scientific value of time-stamped frog recordings, though its ordinary submission workflow is designed around its app.

   **First win and verification:** Produce verified species or call-group detections with a documented observation schedule. Test rainfall-response predictions on later events. This is passive observation; the useful initial product is call timing and habitat context, without disturbing or handling animals.

#### H25. Listen beneath a pond or harbour through changing weather and activity.
   **Hardware:** A suitably installed hydrophone feeding a connected recorder; standalone underwater loggers require retrieval. [Open Acoustic Devices](https://www.openacousticdevices.info/datasheets) documents accessible logger hardware.

   **New data and agent task:** Collect calibrated or explicitly relative soundscape records alongside weather, water level, and other available observations. Identify repeatable unknown sound classes and when they occur, without forcing species labels.

   **First win and verification:** Provide time-aligned clips that another analyst can classify and reproduce. Known-signal tests establish detection limits. A larger project asks which sound changes consistently accompany restoration, seasonal transitions, or vessel activity; acoustic change alone does not certify ecological improvement.

#### H26. Add a useful seismic station and keep its record interpretable.
   **Hardware:** A citizen seismometer on a suitable stable site with network access.

   **New data and agent task:** Build on [Raspberry Shake's live data infrastructure](https://manual.raspberryshake.org/webServices.html), preserving timing and instrument status, identifying local noise, and contributing observations in a spatial gap.

   **First win and verification:** Match arrivals across neighbouring stations and compare measurements of independently catalogued events. A larger challenge tests whether the added station improves localization or detection on withheld events. The target is measurement quality and coverage, rather than unsupported earthquake prediction.

#### H27. Find out when a home weather station misses rain.
   **Hardware:** An automated rain gauge and weather logger, paired initially with a manually read reference gauge.

   **New data and agent task:** Record rainfall timing and intensity proxies, flag likely blockage or missed tips, and model discrepancies across weather conditions. [CoCoRaHS explains why reference manual measurements matter](https://www.cocorahs.org/Content.aspx?page=faqgeneral).

   **First win and verification:** Improve agreement with withheld reference totals without concealing errors at high or low rainfall. A larger study compares biases among hardware designs and exposures. The human reference reading is part of this project; automated values should not be submitted as if they were protocol-compliant manual readings.

#### H28. Make a small air-sensor network measure neighbourhood differences credibly.
   **Hardware:** Connected particulate sensors plus temperature and humidity sensing, with an initial co-location opportunity.

   **New data and agent task:** Coordinate calibration, detect drift and sensor disagreement, and collect observations at underrepresented locations. [EPA's co-location guidance](https://www.epa.gov/air-sensor-toolbox/air-sensor-collocation) provides an existing evaluation route.

   **First win and verification:** Meet a predeclared error target against a reference during withheld conditions. After deployment, retain repeated co-location checks so hardware drift is not mistaken for a neighbourhood trend. The useful agent challenge is reliable, documented measurements with less expert maintenance.

#### H29. Measure how a room clears its naturally accumulated CO2.
   **Hardware:** Networked NDIR CO2 sensors, temperature sensors, and owner-provided occupancy or window-state records.

   **New data and agent task:** Observe normal room use and post-occupancy decay; fit models under explicitly checked mixing and source assumptions. [NIST's ventilation research](https://www.nist.gov/publications/role-carbon-dioxide-ventilation-and-iaq-evaluation-40-years-aivc) provides context for this use of CO2.

   **First win and verification:** Predict repeated decay curves and agree with independent measurements. A larger project compares owner-approved ordinary ventilation schedules across weather. No artificial gas release is needed. This measures a ventilation-related quantity rather than certifying general indoor-air safety.

#### H30. Build an observatory that chooses the next measurement needed to answer a question.
   **Hardware:** A small, explicitly enrolled network drawn from the instruments above.

   **New data and agent task:** Give the system a bounded question and the available instruments, locations, calendars, and operating constraints. It chooses observations, uses established control software, requests specific human setup when needed, and produces an uncertainty-aware result. [ASCOM Alpaca](https://ascom-standards.org/api/) provides a mature telescope-device interface; environmental stations may expose camera streams, logger downloads, or other APIs.

   **First win and verification:** On one task, beat a fixed schedule in independent measurement quality or uncertainty reduction per instrument-hour, with total human intervention logged. Expand to two complementary sensor types: a camera plus river gauge, a thermal camera plus shielded thermometer, or a telescope plus another observing longitude. This is a systems research project; full autonomous scientific reasoning is the ambition to test.

### Original closing notes: What makes these challenges easy to climb

Choose a measurable claim before collecting data. A useful challenge might require one independently reproducible exoplanet timing, a month of water levels within a stated error of a reference gauge, or pollinator-visit counts that agree with blinded human annotation on a withheld sample. A modest initial contribution can be useful even when its larger scientific interpretation remains open.

Keep a fixed baseline observation schedule alongside adaptive recording. Otherwise, an agent that preferentially records busy, clear, or interesting periods can manufacture biased trends. Log configuration changes, retain representative negative examples, and distinguish missing data from absence of the phenomenon. These are specific opportunities for agent competence: recovering from a failure while preserving scientific comparability is more demanding than restarting an app.

Use independent evidence for verification. A second reduction checks software; a second calibrated instrument checks measurement; future observations test predictions. These checks establish different things. A beautiful reconstruction that fits its own input is not yet a validated improvement.

A practical demonstration can show the entire chain: the question, the chosen observation, a live instrument view, the raw recording, the measured result, and an independent check. The score can combine useful observations, measured error, cost, and human minutes. This makes a contribution visible without relying on a dramatic discovery claim.

The largest opportunity is an open contribution queue for real-world observations. Researchers specify the measurement, required metadata, and acceptance test; hardware owners contribute bounded access; agents perform the integration and observation work. Start with one instrument family and one well-defined protocol. Successful astronomy, acoustic, and environmental networks already demonstrate that distributed volunteer observations can matter; the proposed advance is lowering the skill and maintenance burden required to contribute them.


## Coverage ledger and retained user suggestions

| Material from the discussion | Where it now lives |
|---|---|
| All 150 original challenges | A001–A150, preserving target, check, climb and source references |
| All 30 later niches, each with two levels of ambition | N01–N30, full original text |
| All 30 hardware projects | H01–H30, full original text |
| Doggerland and other drowned lands | Main niches 1–2; access notes for industrial surveys |
| Deep-ocean shapes, behaviour, litter and mining-related environmental records | Main niches 3–4; speculative acoustic discovery deferred |
| Looted art and Stasi fragments | Main niche 7; Stasi data-partnership note |
| Historical newspapers, bomb craters, lost aircraft and declassified imagery | Main niches 2, 5–6 and 9–10 |
| Other planetary bodies with substantial archives | Main niche 11: Titan, Saturn, Enceladus, Mercury, Venus, Jupiter and Rosetta’s comet; niche 29 includes lunar/Martian and sky archives |
| Dams, bridges, hospital prices, drug shortages and documented product hazards | Main niches 16 and 18–20 |
| Professional software and modernizing trapped workflows | Main niches 24–26; broader replacement projects retained in Appendix A |
| Women’s health, hormones, fitness and wearables | Main niches 21–23; small or restricted pilot datasets clearly separated |
| Rhino poaching and related conservation evidence | Main niche 14: public seizure-record reconciliation, without live wildlife tracking |
| Climate, microplastics and cross-field data joins | Main niches 12–15; all broader ecological directions retained in Appendix B |
| Public-comment improvements and documentary investigations | Main niches 10 and 17; broader policy and accountability ideas retained in Appendix A |
| Zero-knowledge verification, optimization and ambitious scientific/mathematical work | Original cards in Appendix A; not promoted over source-search tasks in the revised queue |

**Earlier examples are inspirations, not unclaimed firsts.** AI-assisted Nazca geoglyph discovery and virtual unwrapping already have substantial projects behind them. A useful contribution must name an unresolved subset or tool failure, not merely repeat the headline idea. [Published Nazca work](https://pmc.ncbi.nlm.nih.gov/articles/PMC11459208/); [Vesuvius Challenge community projects](https://github.com/ScrollPrize/villa/blob/main/scrollprize.org/docs/20_community_projects.md). [Lidar discovery of Casarabe urban landscapes in the Bolivian Amazon](https://www.nature.com/articles/s41586-022-04780-4.pdf) likewise belongs in this precedent category; the main queue emphasizes inspectable new archive slices rather than asserting the field has not used AI or remote sensing.

**Scope of research.** Sources were consulted for the earlier catalogues and this consolidation on 11 September 2026. This is a curated proposal bank, not an exhaustive priority or novelty review, a dataset-download audit, or a report of completed discoveries. The practical premise is that stronger agents can search and integrate more existing evidence, while a separate person or checker verifies the result.

