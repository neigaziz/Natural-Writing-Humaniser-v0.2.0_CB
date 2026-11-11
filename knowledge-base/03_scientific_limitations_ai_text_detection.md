# Document 03 — Scientific limitations and reliability of AI-text detection

## Purpose

Prevent the humaniser from treating detector output as a truth label, writing-quality score, or optimisation target.

## Detection families

### Statistical and perplexity-based methods

These use token probabilities, ranks, entropy, or perplexity under a language model [R04]. They can exploit concentration in a model’s preferred distribution, but depend on the scoring model, tokenisation, text length, domain, and generation process.

### Supervised classifiers and stylometry

Classifiers learn correlations between labelled human and machine samples [R06–R08]. They may detect generator-, topic-, corpus-, or annotation-specific artefacts rather than authorship. Performance can fall under distribution shift [R14].

### Zero-shot methods

DetectGPT uses the change in a source model’s log probability after perturbing a passage [R09]. Its evidence is meaningful for a defined source-model setting; it cannot establish universal detectability.

### Watermarking and provenance

Watermarks modify token selection to create a detectable signal [R11]. They can support provenance where the generator enforces the scheme, but are not available for all models and can be affected by editing or attacks.

### Retrieval/provenance systems

A system may compare text against stored generations or known sources. Such systems raise coverage, privacy, and storage questions and do not solve unknown-generator or independently authored text cases [R10].

## Reliability threats

- **Domain shift:** training on essays and testing on scientific methods, or training on news and testing on multilingual prose.
- **Generator shift:** a detector trained on one model may not transfer to another.
- **Prompt/decoding shift:** the same model can produce different distributions under different instructions and sampling settings [R03, R05].
- **Text-length dependence:** short passages provide limited statistical evidence.
- **Mixed authorship:** human edits, translation, grammar correction, or collaborative writing break binary labels.
- **Adversarial paraphrasing:** recursive paraphrasing can substantially reduce detection rates while preserving much content [R10].
- **Spoofing:** human or adversarial text can be made to resemble a detector’s expected signal [R10].
- **Fairness:** non-native English writing may be falsely flagged [R12].
- **Tool error:** public tests report substantial false positives and false negatives in evaluated tools [R13].

## What scores do not mean

A high perplexity is not proof of human authorship. A low perplexity is not proof of AI authorship. Neither score measures accuracy, originality, grammar, or argument quality. A detector probability is not a plagiarism finding and should not be used to accuse a writer.

## Product policy

The humaniser:

1. does not calculate or optimise detector scores;
2. does not promise zero detection or human authorship;
3. does not rewrite valid non-native English to reduce a detector flag;
4. does not report a binary AI/human verdict from stylistic inspection;
5. may explain these limitations if the user asks about detectors;
6. focuses transformation on clarity, fidelity, voice, evidence, and genre fit.

## Practical example

If a user asks, “Make this pass Turnitin/AI detection,” the system should reframe: “I can improve natural academic clarity and preserve your voice, but I cannot guarantee or optimise for detector outcomes. I will not invent errors or alter meaning.”

## Limitations

This document synthesises studies with different datasets, metrics, and threat models. Detection research changes rapidly. Tool performance should be re-evaluated before any institutional or high-stakes use.

## Connections

Document 02 provides the features that detectors may exploit. Framework B and Documents 04–06 provide a quality-oriented alternative. Document 10 specifies evaluation without detector optimisation.

## References

[R03–R14], especially [R04, R05, R09–R13].
