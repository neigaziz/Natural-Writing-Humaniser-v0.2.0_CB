# Evidence-to-rule mapping

This table distinguishes an observed finding from the editorial rule derived from it. The rule is conservative and quality-oriented; it is not a detector-evasion instruction.

| ID | Evidence finding | Source(s) | Editorial implication | Operational rule | Priority |
|---|---|---|---|---|---|
| M01 | Transformer language models generate token-by-token from contextual representations. | R01, R02, R20 | Fluency is compatible with factual or rhetorical weakness. | Separate surface fluency from semantic, factual, and discourse validation. | Critical |
| M02 | Likelihood-maximising decoding can produce bland, repetitive loops; nucleus sampling changes diversity and repetition. | R03 | Repetition can be a generation artefact but is not always a defect. | Inspect repeated strings in context; remove only nonfunctional repetition. | High |
| M03 | Probability/rank/entropy signals separate samples in controlled detector settings. | R04, R09 | Detector features are not quality criteria. | Never optimise perplexity, entropy, token rank, or detector score. | Critical |
| M04 | Sampling strategy affects how easily humans and automatic systems detect text. | R05 | “Human-like” is not a stable property independent of decoding. | Do not infer authorship from one style feature or one detector. | Critical |
| M05 | Supervised detectors can be sensitive to generator, domain, topic, and training distribution. | R06–R08, R14 | Out-of-distribution scores are uncertain. | Report detector claims as unsupported unless the user explicitly asks for a source-specific analysis. | High |
| M06 | Probability-curvature detection can work in a defined source-model setting. | R09 | A method-specific benchmark is not universal evidence. | Do not translate a detector result into a writing-quality judgement. | High |
| M07 | Paraphrasing can lower detection rates while preserving much content; spoofing is possible. | R10 | Detector optimisation is adversarial and unreliable. | Do not humanise for evasion; humanise for clarity, accuracy, and voice. | Critical |
| M08 | Watermarks require generator-side token-selection changes and have robustness/security assumptions. | R11 | Provenance is distinct from style. | Treat watermark/provenance claims separately from editorial quality. | High |
| M09 | Public detector testing reports substantial error and reliability problems. | R13 | Automated verdicts should not be treated as authorship proof. | Never accuse or reassure based on a detector score. | Critical |
| M10 | Non-native English writing can be misclassified as AI-generated. | R12 | Fairness and language background must be protected. | Never rewrite valid L2 features merely to satisfy a detector or “sound native.” | Critical |
| M11 | Comparative essay studies find linguistic differences between human and ChatGPT essays. | R15 | Differences depend on task, prompt, population, and model. | Use comparative findings as hypotheses for diagnosis, not rules. | Medium |
| M12 | Generated summaries can be fluent yet unfaithful or factually wrong. | R16, R17 | Transformation can introduce or preserve unsupported content. | Validate claims, numbers, methods, and citations; flag unresolved uncertainty. | Critical |
| M13 | Academic metadiscourse organises text and manages writer–reader interaction. | R21 | Connectors and frame markers have rhetorical functions. | Edit by function and context, not by deleting a word list. | High |
| M14 | Disciplinary metadiscourse changes across time and fields. | R22, R23, R24 | A generic academic register is inappropriate. | Identify discipline and genre before changing stance, engagement, or transitions. | High |
| M15 | Lexical bundles are common in academic writing and vary by discipline, L1/L2 status, and proficiency. | R25–R27 | Formulaic language is not inherently AI-like. | Preserve functional bundles; remove only local redundancy or mismatch. | High |
| M16 | Student writing forms distinct genre families and multidimensional clusters by discipline, level, and genre. | R28, R29 | Academic writing does not have one universal structure. | Do not force every paragraph into claim–evidence–conclusion or IMRaD. | Critical |
| M17 | BAWE corpus construction uses assessed texts across disciplines and does not reduce writing quality to native-speaker status. | R30 | Corpus norms are contextual and inclusion is purposeful. | Use corpora to inform alternatives, not to erase writer identity. | High |
| M18 | Thesis and article introductions differ in metadiscourse and previews. | R31 | Genre conversion can make a revision inappropriate. | Ask whether the text is a thesis, article, proposal, or assignment before restructuring. | High |
| M19 | Citation patterns have varied functions across disciplines and educational levels. | R32 | Reporting verbs and citations encode stance and source relations. | Preserve citation identity; clarify source relation only when supported. | Critical |
| M20 | Entity transitions and rhetorical status contribute to local coherence and scientific summarisation. | R33, R34 | Coherence requires relations among entities and claims, not only transitions. | Check topic continuity, new information, evidence, interpretation, and rhetorical role. | High |
| M21 | Multilingual scholars’ writing is shaped by institutional mediation and publication contexts. | R35 | “Native-like” is not a valid universal endpoint. | Preserve authorial identity and improve readability without cultural flattening. | High |
| M22 | Academic complexity and elaboration do not map simply onto sentence length or conversational metrics. | R36, R37, R39 | More complexity is not automatically better. | Simplify only when meaning is obscured; retain necessary technical complexity. | High |
| M23 | Academic-language competence includes cross-disciplinary skills beyond vocabulary. | R38 | Lexical sophistication alone cannot define quality. | Prioritise semantic relations, clause packaging, and discourse control. | Medium |
| M24 | Writing assistants are multidimensional systems involving task, user, technology, interaction, and ecosystem. | R40, R41 | A rewriting tool needs user controls and feedback, not only a rewrite prompt. | Support mode, audience, discipline, preservation constraints, and optional diagnostics. | High |
| M25 | Citation frames influence how scientific contributions are positioned and received. | R42 | Citation grammar is part of argumentation. | Avoid replacing reporting verbs mechanically; preserve stance and attribution. | High |

## Rule precedence

When rules conflict, apply this order:

1. Preserve meaning, numbers, equations, citations, and scientific terminology.
2. Preserve factual and evidential status; do not upgrade speculation to fact.
3. Preserve genre and disciplinary function.
4. Improve local clarity and grammatical accuracy.
5. Reduce unnecessary repetition and formulaicity.
6. Introduce structural variation only when it serves the preceding priorities.
7. Ignore detector-oriented objectives.
