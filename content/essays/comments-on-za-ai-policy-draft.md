---
title: "Public Comment: Draft South Africa National AI Policy (March 2026)"
tags: [commentary, za-ai-policy, politics]
---

This is a public version of my comments sent to the South African Department of
Communications and Digital Technologies on the Draft South African National AI
Policy.

---

## About the Author

Boyd Kane is a technical AI safety researcher and South African citizen
currently participating in the MATS 9 Extension programme in London (Apr-Oct
2026), continuing work begun during MATS 9.0 in Berkeley (Jan-Apr 2026) under
the mentorship of Alex Turner (Google DeepMind) and Alex Cloud (Anthropic). He
holds an MSc in Computer Science (with distinction) and a BSc Honours in
Computer Science (cum laude) from Stellenbosch University, South Africa.

---

## Summary

This commentary welcomes the draft policy's emphasis on inclusive growth,
indigenous language preservation, constitutional grounding, and its recognition
that AI governance must address South Africa's unique socio-economic context.
The policy admirably identifies many important issues and proposes thoughtful
institutional arrangements.

This commentary aims to complement that work by drawing attention to a category
of risk that the current draft does not address: catastrophic risks from
advanced AI systems. These include AI systems that could help create weapons of
mass destruction, AI-enabled cyberattacks against critical infrastructure, AI
tools that could entrench authoritarian control, and AI systems that grow too
capable for meaningful human oversight. These risks are recognised by the CEOs
and chief scientists of the companies building the most powerful AI systems, by
Nobel Prize laureates, and by government institutions such as the UK AI
Security Institute (https://www.aisi.gov.uk/).

This commentary also proposes a market-based approach to AI governance through
insurance, standards, and audits, which could complement the regulatory
architecture proposed in the draft.

---

## Part 1: Why Catastrophic AI Risk Deserves Attention

The draft policy treats AI as a powerful tool for economic development that
requires ethical guardrails. This framing is appropriate for many AI
applications. For the most advanced AI systems now being developed, however, a
wider set of risks needs consideration. AI systems are rapidly approaching
human-level capabilities across many domains, and the people building these
systems have been among the most vocal in warning about what could go wrong.

**Geoffrey Hinton**, winner of the 2024 Nobel Prize in Physics for his
foundational work on neural networks and widely known as the "Godfather of AI,"
resigned from Google in 2023 to speak freely about AI dangers. In his Nobel
banquet speech (https://www.nobelprize.org/prizes/physics/2024/hinton/speech/),
he stated: "There is a longer-term existential threat that will arise when we
create digital beings that are more intelligent than ourselves. We have no idea
whether we can stay in control." He has estimated a 10-20% probability that AI
could lead to human extinction within 30 years.

**Dario Amodei**, CEO of Anthropic (the company behind the AI assistant
Claude), published a 20,000-word essay in January 2026 titled "The Adolescence
of Technology"
(https://www.darioamodei.com/essay/the-adolescence-of-technology). He warns
that humanity is approaching a period that will "test who we are as a species"
and estimates a 25% probability that AI development goes catastrophically
wrong. He warns specifically about AI-enabled bioweapons, AI-powered
totalitarian surveillance, and AI systems that resist human control.
Anthropic's own internal testing found that their AI system, under certain
experimental conditions, engaged in deception and attempted blackmail of
fictional employees.

**Sam Altman**, CEO of OpenAI (the company behind ChatGPT), signed a public
statement alongside hundreds of AI researchers in 2023, including **Demis
Hassabis** (CEO of Google DeepMind), declaring: "Mitigating the risk of
extinction from AI should be a global priority alongside other societal-scale
risks such as pandemics and nuclear war"
(https://www.safe.ai/statement-on-ai-risk).

These warnings come from the people who understand these systems best. A
national AI policy that engages with these concerns will be better positioned
to protect South African citizens as AI capabilities continue to advance.
Organisations such as Epoch AI (https://epoch.ai/) and METR (https://metr.org/)
track AI progress and risk systematically, and their work could inform South
Africa's ongoing assessment of the AI landscape.

### Specific risks that merit inclusion:

**1. Biological and chemical weapons uplift.** AI systems are rapidly improving
at tasks relevant to bioweapons development. The UK AI Security Institute's
December 2025 Frontier AI Trends Report
(https://www.aisi.gov.uk/frontier-ai-trends-report) found that frontier AI
models now match or exceed PhD-level expert performance on chemistry and
biology tasks. Multiple frontier AI developers, including Anthropic, OpenAI,
and Google DeepMind, now conduct mandatory safety evaluations before deploying
new models, specifically testing whether the models could help someone create
chemical, biological, radiological, or nuclear (CBRN) weapons. The Frontier
Model Forum has published detailed frameworks for these assessments
(https://www.frontiermodelforum.org/technical-reports/frontier-capability-assessments/).
South Africa's AI policy should engage with these frameworks and consider how
they apply to AI systems deployed domestically.

**2. AI-enabled cyberattacks.** The draft policy's cybersecurity provisions
(Section 9.3.1) focus on protecting AI systems from human attackers. This is
valuable, but the more pressing concern may be AI systems being used as
offensive tools. On 7 April 2026, Anthropic announced Claude Mythos Preview
(https://www.anthropic.com/glasswing), a frontier AI model that autonomously
discovered thousands of previously-undiscovered software bugs across every
major operating system and every major web browser. Among these was a
27-year-old bug in OpenBSD, one of the most security-hardened operating systems
in the world, used to run firewalls and critical infrastructure. The model
wrote working attack code for these bugs entirely without human assistance. As
Anthropic stated: "AI models have reached a level of coding capability where
they can surpass all but the most skilled humans at finding and exploiting
software vulnerabilities." The UK AI Security Institute found that the
difficulty of cyber tasks that AI models can complete unassisted is doubling
roughly every eight months. The policy's cybersecurity provisions should
address AI as an offensive capability, not only as an asset to be defended.

**3. Concentration of power and authoritarian misuse.** AI enables mass
surveillance at very low marginal cost, automated censorship, algorithmic
propaganda, and predictive policing. In the words of Dario Amodei: "AI-enabled
authoritarianism terrifies me." The draft policy's proposal for an "Integrated
AI-Powered Monitoring Centre" (Section 4.6g), described as a "central
nerve-centre" monitoring "all service delivery touchpoints in each sector of
government and society," would benefit from explicit safeguards against misuse.
Mass surveillance infrastructure, once built, is difficult to constrain
regardless of the intentions of its creators. Clear limitations on scope,
independent oversight, and sunset provisions would strengthen this proposal
considerably.

**4. Loss of meaningful human control.** The policy's "human-in-the-loop"
provisions (Section 9.6.1) are a good start. They could be strengthened by
acknowledging a well-documented challenge: as AI systems become more capable,
humans in decision-making loops increasingly accept AI recommendations without
meaningful evaluation. This is known as "automation bias." The policy could
address this by requiring periodic assessment of whether human oversight
remains substantive (not just nominal) for high-risk AI deployments, and by
funding research into effective human-AI oversight mechanisms.

**5. Current AI systems are not interpretable.** The policy's emphasis on
explainability and transparency is welcome. It could be strengthened by
acknowledging that interpretability of large AI models is an active, unsolved
research problem. No existing technique can reliably explain why large language
models produce specific outputs. The provision in Section 9.6.2 suggesting that
South Africa should "not reject every system which does not have transparent
processes" could inadvertently become the norm rather than the exception, since
virtually all frontier AI systems currently lack transparency. The policy could
address this by funding technical research in interpretability and treating the
absence of interpretability as a risk factor when classifying AI systems.

---

## Part 2: Market-Based Governance Through Insurance, Standards, and Audits

One of the most promising approaches to AI governance is a market-based
incentive system combining insurance, standards, and audits. This approach,
described in detail at https://underwriting-superintelligence.com/, draws on a
proven pattern: every major technology wave, from fire to electricity to
automobiles, was ultimately made safe not by regulation alone but by the
insurance industry developing standards, funding safety testing, and pricing
risk. Insurers move faster than regulators and have strong financial incentives
to get risk assessment right.

AI is ripe for the same approach. The process of underwriting AI deployments
would naturally drive the development of risk measurement standards, safety
audits, and interpretability requirements. Safer AI systems would receive
better insurance terms, aligning commercial incentives with public safety.

The policy already proposes an AI Insurance Superfund (Section 4.6e), modelled
on the Road Accident Fund. This is a good foundation. The policy could go
further by:

- Encouraging the development of a private AI risk insurance market alongside
  the Superfund
- Requiring that high-risk AI deployments in the public sector carry insurance
- Recognising that the process of pricing AI risk will itself generate valuable
  safety standards and audit practices
- Looking to existing international efforts in this space for inspiration,
  including the work of the AI Underwriting Company
  (https://www.prnewswire.com/news-releases/the-artificial-intelligence-underwriting-company-launches-with-15m-to-help-enterprises-deploy-ai-with-confidence-302512447.html)
  and similar initiatives

---

## Part 3: Concrete Textual Recommendations

### 3.1 Add to Section 4.2 (Objectives of the Policy)

The current six objectives cover education, public service delivery,
institutional establishment, ethical standards, cultural preservation, and
human-centred deployment. A seventh objective would strengthen the policy:

> "g. Identify, assess, and mitigate catastrophic risks from advanced AI
> systems, including risks from AI-assisted development of weapons of mass
> destruction, AI-enabled cyberattacks on critical infrastructure, AI-enabled
> authoritarian control, and loss of meaningful human oversight over
> increasingly autonomous AI systems."

### 3.2 Amend Section 4.6f (National AI Safety Institute)

The current description focuses on "developing, updating, and disseminating
guidelines for AI safety." The Institute's mandate would benefit from a
technical research component:

> "f. **National AI Safety Institute:** Conducting and funding technical AI
> safety research, including interpretability, alignment, and
> dangerous-capability evaluations, in coordination with international bodies
> such as the UK AI Security Institute (https://www.aisi.gov.uk/) and the
> International Network for Advanced AI Measurement, Evaluation and Science.
> The Institute shall: (i) evaluate frontier AI models for dangerous
> capabilities, including the ability to assist in creating weapons of mass
> destruction, offensive cyber capabilities, and the ability to operate
> autonomously without human oversight, and publish recommendations to South
> African organisations deploying these models; (ii) fund South African AI
> safety research, drawing on existing capacity at organisations such as the
> African Hub on AI Safety, Peace and Security at the University of Cape Town,
> AI Safety South Africa, and similar groups doing work in this area; (iii)
> publish regular public reports on the trajectory of AI capabilities and
> associated risks, drawing on work by international tracking organisations
> such as Epoch AI (https://epoch.ai/) and METR (https://metr.org/); and (iv)
> maintain the authority to recommend restrictions on the deployment of AI
> systems that pose unacceptable risks to South African citizens."

### 3.3 Amend Section 7.3 (Risk Assessment and Mitigation Strategy)

Add after the existing text:

> "In addition to the risk categories above, the policy recognises that
> advanced AI systems may pose catastrophic risks that differ in kind from the
> risks addressed by conventional bias-and-fairness frameworks. The range of
> such risks is broad and diverse, spanning AI systems that provide material
> assistance in the development of weapons of mass destruction; AI systems
> capable of conducting autonomous cyberattacks on critical infrastructure; AI
> systems used to establish or entrench authoritarian control through
> surveillance, censorship, or information manipulation; and AI systems that
> operate with sufficient autonomy that meaningful human oversight becomes
> infeasible. These risks require dedicated assessment frameworks, and frontier
> AI models deployed in South Africa should undergo dangerous-capability
> evaluations, conducted by or in coordination with the National AI Safety
> Institute, before deployment in high-risk contexts."

### 3.4 Amend Section 8.4 (Policy Review Schedule)

The current 3-year review cycle is reasonable as a baseline. Supplementing it
with trigger-based reviews would help the policy keep pace with rapid AI
development:

> "The policy framework will undergo comprehensive review every three years, or
> earlier if triggered by any of the following: (a) the release of an AI system
> whose capabilities substantially exceed those available at the time of last
> review (for example, an AI system that achieves expert-level performance on a
> new class of tasks, such as the cyber capabilities demonstrated by
> Anthropic's Claude Mythos Preview in April 2026); (b) a significant
> AI-related security incident affecting South Africa or its international
> partners (for example, an AI-enabled cyberattack on critical infrastructure,
> or an incident involving AI-assisted weapons development); (c) the emergence
> of new categories of AI risk not addressed by the current framework; or (d)
> significant changes to international AI governance standards, such as updates
> to the EU AI Act, OECD AI Principles, or Frontier Model Forum safety
> frameworks."

### 3.5 Amend Section 9.3.1.1 (Safety and Security Policy Interventions)

Add a new intervention:

> "o **AI as an offensive tool:** Develop provisions to address the use of AI
> as an offensive capability. In April 2026, Anthropic's Claude Mythos Preview
> autonomously discovered thousands of previously-undiscovered software bugs
> across every major operating system and browser, including a 27-year-old bug
> in OpenBSD, and wrote working attack code without human intervention
> (https://www.anthropic.com/glasswing). This demonstrates that AI-enabled
> cyber capabilities are advancing rapidly. The policy should include:
> mandatory reporting of AI-enabled cyber incidents; restrictions on autonomous
> AI systems that conduct offensive operations without human authorization;
> evaluation requirements for AI systems that could help actors develop weapons
> of mass destruction; and participation in international frameworks for
> preventing AI-enabled weapons proliferation."

### 3.6 Amend Section 9.6.2.1 (Transparency and Explainability Policy

Interventions)

Add:

> "Current frontier AI systems are not interpretable. No existing technique can
> reliably explain how large language models arrive at their outputs. This is
> an active and important area of technical research. The policy should
> therefore: (i) dedicate funding to interpretability and AI safety research
> conducted by South African institutions; (ii) require deployers of AI systems
> in high-risk contexts to disclose the known limitations of their systems'
> interpretability; and (iii) treat the absence of interpretability as a risk
> factor in the classification of AI systems under the risk-based framework.
> Additionally, the development of AI risk insurance (see Part 2 above) will
> create market incentives for improved interpretability, as insurers will
> demand better understanding of the systems they underwrite before offering
> favourable terms."

---

## Part 4: High-Level Structural Recommendations

### 4.1 Create a dedicated Catastrophic Risk section

The policy would benefit from a new section addressing risks at the
civilisational scale. The range of such risks is large and diverse: CBRN
uplift, offensive AI cyber capabilities, authoritarian AI misuse, loss of human
control, and rapid economic disruption each warrant dedicated analysis. This
section should reference the UK AI Security Institute's Frontier AI Trends
Report (2025), Anthropic's Responsible Scaling Policy, the Frontier Model
Forum's work on capability assessments, and tracking work by Epoch AI and METR.

### 4.2 Evaluate frontier models before widespread domestic deployment

South Africa will primarily consume, not develop, frontier AI models. The
policy would benefit from a framework for evaluating these models and
publishing recommendations for South African organisations deploying them.
South Africa does not need the resources of the UK or US to do this; it can
leverage the evaluation work already being done by institutions like the UK AI
Security Institute, and focus domestic efforts on risks specific to South
Africa's context. South African companies deploying frontier AI models should
be required to meet safety standards appropriate to the risk level of their use
case.

### 4.3 Fund technical AI safety research

The policy allocates resources to AI education, infrastructure, and innovation.
It could also allocate resources to the technical work of making AI systems
safe: interpretability research, alignment research, and dangerous-capability
evaluations. South Africa has existing capacity in this area, including the
African Hub on AI Safety, Peace and Security at the University of Cape Town and
AI Safety South Africa, that could be expanded with dedicated funding.

### 4.4 Leverage South Africa's mineral resources strategically

South Africa holds over 80% of the world's known platinum group metal (PGM)
reserves, according to the US Geological Survey, and accounts for roughly 70%
of global platinum production. PGMs are critical inputs for advanced
electronics and semiconductor manufacturing. The AI boom is driving enormous
demand for GPUs and compute infrastructure, all of which ultimately depends on
semiconductor supply chains that run through these mineral deposits. The policy
already mentions critical minerals and rare earth resources (Section 9.1.2),
but could go further by connecting AI governance to mineral beneficiation
strategy. South Africa could negotiate from a position of strength: in exchange
for participation in global AI governance frameworks, the country could secure
commitments for downstream processing of minerals used in AI hardware, rather
than simply exporting raw materials. This connects the AI policy to South
Africa's broader industrialisation goals and the existing Mineral Beneficiation
Strategy.

### 4.5 Require AI systems to identify themselves as non-human

The policy's requirement that citizens be notified when affected by automated
decisions (Section 7.2) is good. It could be strengthened with a simple,
enforceable rule: there is no legitimate reason for an AI system to impersonate
a human being. AI systems interacting with South African citizens should
declare their non-human nature up front wherever feasible, for example in
chatbots, online customer service, and call centres. Any deployed AI system
must be able to truthfully answer the question "Are you an AI?" with "yes."
This is a low-cost intervention with significant benefits for public trust and
informed consent.

### 4.6 Institutional architecture

The policy proposes several new bodies. As someone whose expertise is in AI
rather than governance, I offer only a mild observation: the policy might
consider whether a smaller number of well-resourced bodies with clear mandates
would be more effective than a larger number of bodies, given the fiscal and
capacity constraints the policy itself acknowledges.

---

## Conclusion

South Africa's draft AI policy correctly identifies many important issues and
proposes thoughtful solutions for inclusive access, indigenous language
preservation, bridging the digital divide, and ethical deployment. This
submission aims to strengthen the policy by drawing attention to an additional
category of risk: the catastrophic risks that the builders of frontier AI
systems themselves consider among the most serious challenges facing humanity.
Addressing these risks does not require slowing down AI adoption. It requires
adopting AI with clear-eyed awareness of the full range of what these systems
can do, informed by the best available evidence. The recommendations in this
submission, particularly the market-based insurance approach, aim to help the
policy govern AI across the full spectrum of risks it poses.

I am very happy to advise on this policy document or contribute to future
revisions. I am hopeful about this important first step towards South Africa
using AI to benefit all of its people and to address the historical challenges
that the policy so rightly centres.

---

## References

- Amodei, D. (2026). "The Adolescence of Technology." https://www.darioamodei.com/essay/the-adolescence-of-technology
- Anthropic. (2026). "Project Glasswing: Securing critical software for the AI era." https://www.anthropic.com/glasswing
- Anthropic Frontier Red Team. (2026). "Claude Mythos Preview." https://red.anthropic.com/2026/mythos-preview/
- Center for AI Safety. (2023). "Statement on AI Risk." https://www.safe.ai/statement-on-ai-risk
- Epoch AI. https://epoch.ai/
- Frontier Model Forum. (2025). "Frontier Capability Assessments." https://www.frontiermodelforum.org/technical-reports/frontier-capability-assessments/
- Hinton, G. (2024). Nobel Prize Banquet Speech. https://www.nobelprize.org/prizes/physics/2024/hinton/speech/
- Kvist, R. et al. (2025). "Underwriting Superintelligence." https://underwriting-superintelligence.com/
- METR. https://metr.org/
- METR. (2025). "Common Elements of Frontier AI Safety Policies." https://metr.org/common-elements
- UK AI Security Institute. (2025). "Frontier AI Trends Report." https://www.aisi.gov.uk/frontier-ai-trends-report
- US Geological Survey. (2024). "Platinum-Group Metals Mineral Commodity Summary." https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-platinum-group.pdf
