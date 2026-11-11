# Framework A — AI-generated text characteristics

**Version:** 0.1.0  
**Status:** Evidence-based working framework for editorial diagnosis; not an authorship classifier.  
**Core warning:** A tendency associated with model output is not automatically an error, and no individual feature identifies AI authorship reliably across models, genres, languages, prompts, or revision histories.

## A1. Scope and causal separation

This framework separates three layers that are often incorrectly collapsed:

1. **Generation mechanisms:** architecture, training objective, context conditioning, alignment, tokenisation, and decoding. These explain how outputs are produced but are not themselves visible stylistic features.
2. **Observed output tendencies:** distributional, lexical, syntactic, discourse, factuality, and interactional properties measured in particular studies.
3. **Detection features:** statistics or classifier signals used to distinguish a study’s machine and human samples. A detector feature is not necessarily a writing-quality defect and may be an artefact of the detector’s training distribution.

The editorial system may use Layer 2 to inspect quality and Layer 1 to understand why a pattern might occur. It must not use Layer 3 as a target for rewriting.

## A2. Generative mechanisms

### A2.1 Transformer attention and contextual prediction

Transformer architectures use attention-based representations rather than recurrence or convolution as the core sequence-transduction mechanism [R01]. Autoregressive language models factorise a sequence left-to-right, estimating a conditional distribution for the next token given the preceding context [R02, R03, R20]. Tokenisation means that the model predicts subword or token units, not necessarily words or propositions. Attention and large-scale pretraining support strong contextual fluency, but they do not guarantee that a generated assertion is grounded in a source or true in the world [R16, R17].

**Editorial implication:** Treat fluent wording and factual validity as separate dimensions. Preserve the writer’s claims only after checking that the transformation has not altered them; do not infer that a smooth sentence is well supported.

### A2.2 Decoding and probability distributions

At each step, a model produces a distribution over possible next tokens. Greedy or likelihood-maximising decoding can concentrate on highly probable continuations and produce blandness or repetitive loops. Pure sampling can enter a low-probability tail and become incoherent. Nucleus sampling truncates the tail dynamically and was shown to improve the balance between fluency and diversity in the studied open-ended settings [R03]. Top-*k*, temperature, nucleus sampling, and other strategies therefore alter observable distributions even when the underlying model is unchanged [R03, R05].

**Editorial implication:** Repetition or formulaicity cannot be attributed to “AI” without considering prompt, model, decoding, post-editing, and genre. Diagnose repeated wording only when it harms clarity, emphasis, or information progression.

### A2.3 Alignment and instruction conditioning

Instruction tuning and conversational alignment condition output on task descriptions and preferred response behaviours. The result can be helpful, well organised, and audience-aware, but the requested style and system constraints also encourage recurring response templates. This is a model- and prompt-dependent property, not a universal linguistic signature [R02, R20].

**Editorial implication:** A transformation system should replace generic templates with context-specific organisation, but only when the template obscures the argument or creates monotony.

## A3. Observed tendencies relevant to editorial diagnosis

| Characteristic | Scientific definition and explanation | Evidence and conditions | Limitations | Conservative editorial rule |
|---|---|---|---|---|
| **1. Repetition and degeneration** | Reuse of words, phrases, clauses, or discourse moves beyond what the information structure requires. Likelihood-maximising decoding can create positive feedback loops and repetitive continuations. | Holtzman et al. show blandness and repetitive loops under maximisation-based decoding; effects depend on model and decoding [R03]. | Human writing also repeats terms deliberately; repetition can maintain topic continuity or precision. | Remove or recast repetition only when it adds no discourse function. Preserve necessary terminology and deliberate anaphora. |
| **2. Concentration in high-probability lexical choices** | Generated tokens may be drawn disproportionately from a model’s high-probability region under some sampling schemes. | GLTR reports rank/probability differences in its 2019 model/source settings [R04]; Ippolito et al. link decoding choices to detectability [R05]. | Detector statistics are model-specific, length-sensitive, and not measures of quality. Human writers also use frequent words, especially in constrained genres. | Prefer precise, contextually justified wording; do not replace common words merely to lower a probability score. |
| **3. Formulaic expressions and stock discourse frames** | Recurrent bundles or organisational phrases can be produced because they are frequent, safe continuations for an instruction or genre. | Model-comparison and detector studies observe distributional differences, while corpus studies show that human academic writing also contains conventional bundles [R04, R15, R25–R27]. | Formulaicity is normal in academic genres; many bundles perform useful rhetorical work. | Retain conventional bundles when they perform a clear function; revise only stock phrasing that is generic, repetitive, or poorly fitted to the local claim. |
| **4. Uniform sentence or paragraph organisation** | Similar clause templates, sentence openings, paragraph lengths, or claim–explanation sequences recur with limited rhetorical adaptation. | Large language models can generate highly coherent local continuations, and comparative essay studies report linguistic differences from human essays [R15]. | Uniformity can result from a well-designed genre, author preference, a short sample, or human editing. | Vary structure only to improve emphasis, readability, or information progression. Never randomise sentence length or insert awkwardness. |
| **5. Generic transitions and explicit signposting** | Frequent use of overt connectors or preview/conclusion frames that announce relations rather than expressing them economically. | Metadiscourse research shows that connectors and frame markers are context-dependent and multifunctional [R21, R22]. | Explicit signposting can be necessary for novice readers, complex arguments, theses, and some disciplines. | Keep a transition if it clarifies a genuine relation; remove duplicates and replace repeated labels with direct logical connections. |
| **6. Smooth but shallow elaboration** | Prose may state a broad claim, add a generic explanation, and conclude without specifying mechanism, evidence, boundary, or implication. | Fluency and coherence can coexist with unsupported or hallucinated content [R16, R17, R20]. | Shallow content may reflect an underspecified prompt or the source writer, not a model signature. | Request or flag missing evidence; do not invent examples, mechanisms, citations, or interpretations. |
| **7. Hallucinated or weakly grounded content** | An output contains information that is not entailed by the source or is factually unsupported despite fluent presentation. | Maynez et al. document unfaithful and factuality problems in neural summarisation; Ji et al. synthesise hallucination mechanisms and evaluation [R16, R17]. | The cited studies concern particular tasks and models; human writers also make factual errors. | Preserve source claims, verify numerical/scientific details, and flag ambiguity or unsupported assertions instead of silently repairing them. |
| **8. Stylistic homogenisation** | Multiple passages or tasks converge on a similar register, rhythm, stance, and discourse template. | Comparative studies and detector benchmarks report differences between model and human distributions, with weaker separation out of distribution [R14, R15]. | Human institutional genres also homogenise style; modern models can imitate diverse styles. | Preserve the source writer’s stable preferences and adapt to audience/genre; do not force artificial idiosyncrasy. |
| **9. Hedging or certainty mismatch** | Modality and stance may be too weak, too strong, or mechanically repeated relative to evidence. | Academic metadiscourse research demonstrates that stance is disciplinary, diachronic, and genre-sensitive [R21–R24, R31]. | No universal “correct” hedge list exists; a hedge can be scientifically essential. | Calibrate claims to evidence and design, not to a detector feature. Distinguish result, interpretation, possibility, and limitation. |
| **10. Weak authorial positioning** | The prose may report information without showing how the writer evaluates sources, positions a claim, or anticipates readers’ alternatives. | Hyland’s interactional model and citation studies treat stance, engagement, and evidentiality as rhetorical resources [R21–R24, R32]. | Apparent absence can be appropriate in a methods description or highly conventional genre. | Add authorial positioning only when it is implied by the source argument and required by the genre; never invent opinions or personal experience. |
| **11. Punctuation and function-word regularity** | Token-level distributions such as punctuation, function words, entropy, or POS patterns may differ between a study’s human and model samples. | GLTR and related detector approaches use probability, rank, entropy, or distributional signals [R04, R09, R10]. | These are detector features, highly model- and corpus-dependent, and vulnerable to paraphrase or domain shift [R10, R14]. | Use punctuation and function words for ordinary grammar and flow editing only; never optimise them as authorship markers. |
| **12. Citation and evidentiality mismatch** | A fluent passage may attach a citation to a claim without accurately representing the source, or may use reporting verbs without expressing the intended stance. | Citation is multifunctional and discipline-dependent in BAWE; reporting verbs position writers toward sources [R32, R42]. | Correct citation practice depends on discipline, assignment, source type, and institutional style. | Retain citations, check claim–source fit when evidence is available, preserve uncertainty, and flag rather than fabricate bibliographic repair. |

## A4. Detection research: what can and cannot be inferred

### A4.1 Perplexity, token probability, entropy, and rank

Perplexity and related measures summarise how probable a sequence is under a particular language model. GLTR operationalises token probability, rank, and contextual entropy as forensic signals [R04]. Such signals can separate the distributions used in a controlled experiment, especially when the detector model and generator are related. They do **not** directly measure writing quality, human authorship, truth, originality, or grammaticality.

### A4.2 Classifiers and stylometry

Supervised detectors learn correlations between labelled human and machine samples. Earlier systems can generalise across some generator changes but may be sensitive to training corpora, topics, source models, and domains [R06–R08]. MAGE reports that out-of-distribution detection is difficult as linguistic distinctions decrease, although performance can remain useful in some benchmark conditions [R14].

### A4.3 Zero-shot probability-curvature methods

DetectGPT tests whether a passage lies in a region where small perturbations lower the source model’s log probability. It reports strong results in its source-model and benchmark settings [R09]. This is a method for a defined detection problem, not evidence that all machine text has a universal curvature signature.

### A4.4 Watermarking and provenance

Watermarking modifies token selection so that a detectable statistical pattern is embedded in generated text [R11]. It is a provenance mechanism available only when the generator enforces it and depends on token count, detector assumptions, and robustness to editing or attack. It is not an editorial quality metric.

### A4.5 Reliability, evasion, and fairness

Recursive paraphrasing can substantially reduce detection rates while retaining much of the original content and perceived quality; Sadasivan et al. also discuss spoofing and theoretical limits tied to the distance between human and model distributions [R10]. Independent testing of public tools found substantial accuracy and error problems in the evaluated settings [R13]. Liang et al. report systematic bias against non-native English writers [R12]. These findings rule out using detector scores as a rewriting objective or as evidence of misconduct.

## A5. Operational principles derived from Framework A

1. Use AI-associated features as **diagnostic hypotheses**, not labels.
2. Inspect repetition, genericness, evidence integration, stance, and flow in context.
3. Prioritise semantic fidelity, factual accuracy, scientific terminology, and citation integrity over stylistic variation.
4. Preserve conventional academic phrases when they serve a discourse function.
5. Never add errors, odd words, arbitrary sentence-length variation, or fake personal voice.
6. Never claim that a revision is human-authored, detector-proof, or guaranteed to evade detection.
7. Separate uncertain source content from verified editorial changes.
8. Treat the source text as the authority for intended meaning unless the user asks for fact checking and supplies evidence.

## A6. Connections to other documents

- Generation mechanisms are expanded in **Document 01**.
- Empirical tendencies and detection limitations are expanded in **Documents 02–03**.
- Human alternatives and genre variation are developed in **Documents 04–06**.
- Operational rules are derived in **Documents 07–09**.
- Validation and human evaluation are specified in **Document 10**.
