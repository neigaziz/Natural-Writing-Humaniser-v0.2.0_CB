# Literature-search protocol

**Project:** Natural Writing Humaniser  
**Search stage:** Phase 1 evidence gathering  
**Search date:** 2026-11-11  
**Search lead:** Chatbox research workflow  
**Status:** Initial evidence base completed with warnings; not a claim of exhaustive systematic-review coverage.

## 1. Questions

1. What generation mechanisms plausibly shape recurrent properties of modern language-model output?
2. Which linguistic differences between model-generated and human-written text have been observed empirically, and under what models, genres, prompts, and decoding settings?
3. What are the strengths, failure modes, fairness risks, and domain-transfer limits of AI-text detection?
4. What linguistic, rhetorical, corpus-based, and disciplinary evidence describes natural human academic writing?
5. Which findings can support conservative editorial decisions that improve clarity and authenticity without targeting detector scores?

## 2. Search sources

- OpenAlex works API: discovery, metadata, abstracts, DOI, venue, citation counts, open-access links.
- Semantic Scholar API: exact-title resolution, abstracts, authors, DOI/ACL/arXiv identifiers, open-access links.
- ACL Anthology and publisher/repository URLs: full-text verification where openly accessible.
- Crossref/DOI landing pages were treated as authoritative identity links when available.
- User-provided academic-writing collection: contextual reference material, not a substitute for empirical article evidence.

Scopus, Web of Science, Google Scholar, and ERIC were not directly queried in this runtime. Their absence is a coverage limitation, not evidence that relevant work is absent.

## 3. Query families

### Stream A — generation and AI text

- `transformer autoregressive language model next token prediction attention text generation`
- `neural text degeneration repetition sampling language generation`
- `AI-generated text detection perplexity entropy robustness generalization`
- `large language model generated text detector non-native English false positives`
- `AI-generated text watermarking provenance detection language models`
- Exact-title resolution for: *Attention Is All You Need*; *The Curious Case of Neural Text Degeneration*; *GLTR*; *DetectGPT*; *Can AI-Generated Text be Reliably Detected?*; *Testing of detection tools for AI-generated text*; *GPT detectors are biased against non-native English writers*; *A Watermark for Large Language Models*; *Automatic Detection of Generated Text is Easiest when Humans are Fooled*; *TURINGBENCH*; *MAGE*; *On Faithfulness and Factuality in Abstractive Summarization*; *Survey of Hallucination in Natural Language Generation*.

### Stream B — human writing and academic discourse

- `academic writing metadiscourse stance hedging engagement corpus linguistics`
- `lexical bundles academic writing corpus discipline variation`
- `academic discourse rhetorical moves research article introductions methods results discussion`
- `BAWE corpus MICUSP academic writing corpus human writing variation`
- `academic writing cohesion coherence information structure paragraph development corpus`
- Exact-title resolution for: *Metadiscourse: What is it and where is it going?*; *“In this paper we suggest”: Changing patterns of disciplinary metadiscourse*; *As can be seen: Lexical bundles and disciplinary variation*; *Lexical bundles and disciplinary variation in university students’ writing*; *A Classification of Genre Families in University Student Writing*; *Discipline, level, genre*; *Metadiscourse in the introductions of PhD theses and research articles*; *Issues in the development of the BAWE corpus*; *Sources for courses*; *Modeling Local Coherence*; *Summarizing Scientific Articles*; *Professional Academic Writing by Multilingual Scholars*; *Challenging stereotypes about academic writing*; *Should we use characteristics of conversation to measure grammatical complexity in L2 writing development*.

## 4. Inclusion criteria

Included when a work:

- directly investigated language-model generation, machine-generated-text detection, factuality/hallucination, or human academic writing/corpus/discourse variation;
- provided an empirical study, benchmark, technical method, corpus analysis, systematic review, or foundational theoretical model;
- supplied a traceable DOI, ACL Anthology record, arXiv identifier, PubMed record, or authoritative repository URL;
- could support a specific claim or limitation relevant to the humaniser.

## 5. Exclusion criteria

Excluded from the core evidence matrix when a result was primarily about image generation, generic AI policy, unrelated NLP tasks, opinion without an empirical or theoretical contribution, duplicated metadata, or a search result whose identity could not be resolved.

## 6. Screening and appraisal

Each retained record is labelled as one or more of: primary empirical study, benchmark/dataset, technical method, review/survey, corpus/discourse study, or conceptual foundation. Metadata were resolved by exact-title or identifier search where possible. Abstracts and accessible full texts were checked for claim-level relevance. A high citation count was not treated as proof of methodological quality.

## 7. Evidence labels used in the knowledge base

- **E1 — direct empirical evidence:** result directly measured or tested the relevant phenomenon.
- **E2 — strong synthesis:** systematic survey/review that organises multiple studies.
- **E3 — technical foundation:** architecture, decoding, metric, or formal model supporting a mechanism.
- **E4 — corpus/discourse evidence:** observed human-writing practice in a defined corpus/genre.
- **E5 — editorial inference:** conservative operational rule derived from E1–E4; not itself an empirical observation.

## 8. Coverage limitations

The current search is a documented scoping search, not a preregistered systematic review. OpenAlex and Semantic Scholar indexing produced some noisy or misdated records. Some full texts were unavailable because of publisher access controls or network resolution failures. The evidence is heavily English-language and concentrated in computational linguistics and English academic writing. AI outputs change with model version, system prompting, post-training, retrieval, tools, and decoding settings; therefore no fixed list should be treated as a universal signature of AI authorship. The plugin must use this evidence for quality-oriented diagnosis, not authorship adjudication or detector evasion.
