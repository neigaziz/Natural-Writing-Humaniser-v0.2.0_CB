# Comprehensive research report

## Executive summary

The evidence does not support a universal linguistic fingerprint of AI-generated writing or a single definition of human naturalness. Modern language models generate fluent text through contextual next-token distributions, and decoding choices strongly shape repetition, diversity, and detectability [R01–R05]. Generated prose may therefore appear formulaic, overly smooth, locally coherent, or generic in some settings, but these properties also occur in legitimate academic genres [R21–R30].

The strongest design consequence is that a humaniser should not identify “AI language” and then reverse it. It should diagnose concrete quality problems—unnecessary repetition, weak information progression, vague or inflated wording, miscalibrated stance, unsupported claims, poor evidence integration, and voice mismatch—using genre- and discipline-aware analysis. Detection scores, perplexity, entropy, token rank, and watermark signals must not be optimisation targets [R04, R09–R14].

## 1. Stream A synthesis: how model generation influences prose

### 1.1 Mechanism-to-observation chain

Transformer attention creates contextual representations, while autoregressive models generate a sequence through conditional next-token probabilities [R01, R02, R20]. Token-level probability is not equivalent to sentence-level intention, evidence, or truth. The model can choose a syntactically plausible continuation without possessing a verified proposition or a discourse plan.

Decoding transforms the probability distribution into text. Holtzman et al. demonstrate that maximisation-based decoding can produce bland and repetitive loops, whereas pure sampling can become incoherent; nucleus sampling changes the quality–diversity balance [R03]. Ippolito et al. show that decoding strategies affect both human judgments and statistical detectability [R05]. Thus repetition and uniformity are possible consequences of generation settings, but neither is a universal property of all AI text.

### 1.2 Fluency, coherence, and factuality are separable

LLM output can be fluent and locally coherent while containing unsupported or unfaithful information. Maynez et al. identify hallucinated content in neural abstractive summarisation and show that textual entailment better correlates with faithfulness than standard overlap metrics [R16]. Ji et al. synthesise hallucination as a broad NLG problem spanning metrics, causes, mitigation, and tasks [R17]. The humaniser must therefore validate semantic fidelity and evidence status independently of style.

### 1.3 What empirical comparisons can show

Controlled comparisons can reveal differences in lexical, syntactic, discourse, and distributional features between samples produced by a particular model and human writers. Herbold et al. report differences in essay quality and linguistic characteristics in their sample [R15]. MAGE shows that detection becomes difficult across domains and unseen models, even though useful performance can remain possible in particular out-of-domain settings [R14]. These results justify contextual inspection, not generalised claims about all AI output.

## 2. Stream A synthesis: detection and its limitations

Perplexity, average token probability, rank, and entropy describe how a text relates to a model distribution [R04]. DetectGPT uses probability curvature around a passage, and watermarking inserts a generator-side token-selection pattern [R09, R11]. These are forensic or provenance techniques under specified assumptions, not measures of prose quality.

Detection performance is constrained by distribution shift, source-model access, passage length, paraphrasing, spoofing, and false-positive costs [R06–R14]. Sadasivan et al. show that recursive paraphrasing can sharply reduce detection performance while preserving substantial content and perceived quality; they also frame an upper-bound relationship between optimal detection and the distance between human and machine text distributions [R10]. Liang et al. demonstrate bias against non-native English writers [R12]. Weber-Wulff et al. find substantial reliability problems in the public tools tested [R13].

**Design prohibition:** The humaniser must not rewrite text to lower perplexity, raise entropy, defeat a detector, or create a false appearance of human authorship. It must not report detector scores unless an independently supplied detector is being discussed as a limited external result, and even then it must explain that the score is not proof.

## 3. Stream B synthesis: human academic writing

Human academic writing is socially situated and internally diverse. Hyland defines metadiscourse as commentary through which writers organise, interpret, evaluate, and manage relations with readers [R21]. This includes transitions, frame markers, evidentials, stance, engagement, and self-mention, but forms are multifunctional and require contextual interpretation. Hyland and Jiang show that metadiscourse and stance vary by discipline and over time [R22, R23].

Lexical bundles are common in human academic prose. They can perform discourse-organising, referential, stance, or framing functions and differ across disciplines, publication status, and L1/L2 writing [R25–R27]. A rule to remove all repeated phrases would therefore damage natural academic writing.

Academic syntax is not synonymous with long sentences or maximal complexity. Biber and Gray challenge stereotypes about academic writing, and Biber, Gray, and Poonpon show that conversational measures can misrepresent complexity in L2 writing [R36, R37]. Fine-grained syntactic analysis is preferable to simplistic “shorter is better” or “more varied is better” rules [R39].

BAWE research demonstrates that student writing forms genre families and multidimensional patterns shaped by discipline, level, and task [R28–R30]. Thesis and research-article introductions differ in metadiscourse [R31], and citation practices vary by discipline and assignment type [R32]. A humaniser must therefore condition edits on genre, section, audience, and discipline.

## 4. Cross-stream conclusions

1. **Naturalness is functional.** The best revision is the one whose wording, syntax, stance, and paragraph progression fit the communicative task.
2. **Variation is motivated.** Sentence-length or lexical variation is useful only when it clarifies relations, emphasis, rhythm, or reader processing.
3. **Academic writing is interactive.** Evidence, citation, reporting verbs, hedging, and reader guidance carry argumentative functions [R21, R32, R42].
4. **Voice is not decoration.** Authorial presence reflects positioning, identity, and disciplinary membership [R24, R35].
5. **Meaning outranks style.** Numerical values, methods, terminology, equations, citations, and evidential status receive the highest protection.
6. **Human evaluation is necessary.** Automated metrics cannot capture all dimensions of factual accuracy, rhetorical appropriateness, voice, and semantic fidelity [R18, R40].

## 5. Evidence gaps

- Few studies directly compare modern post-trained models with expert human academic writing across multiple disciplines and article sections.
- Many detector results use older models, controlled prompts, or benchmark domains; current closed models and editing histories are less transparent.
- Multilingual and non-native-English evidence is growing but remains uneven across languages and academic fields.
- Corpus findings are not interchangeable across student writing, professional research articles, theses, and general prose.
- “Naturalness” is often assessed by human ratings without a stable, cross-genre construct definition.

These gaps are why the plugin uses evidence as a decision framework rather than a deterministic feature checklist.

## 6. Product requirements derived from the evidence

The system must:

- collect mode, discipline, audience, and preservation constraints when available;
- diagnose before rewriting;
- distinguish source ambiguity from model error;
- preserve claims, numbers, symbols, citations, and terminology;
- use contextual discourse analysis rather than word-list deletion;
- support user-controlled intensity and “rewrite only” output;
- provide a concise editorial summary and meaning-preservation note by default;
- expose limitations and never promise human authorship or detector evasion;
- evaluate semantic fidelity, factual accuracy, citation integrity, and voice before stylistic diversity.
