# Document 02 — Empirical characteristics of AI-generated text

## Purpose

Summarise observed properties reported in particular studies and translate them into cautious diagnostic hypotheses. No item below is a universal marker of AI authorship.

## Evidence status

The evidence base includes controlled generation studies, detector benchmarks, comparative essay analysis, and reviews [R03–R18]. Results vary with model, prompt, decoding, genre, length, source corpus, and post-editing.

## Characteristic groups

### 1. Repetition, genericness, and lexical concentration

Some generation settings overuse high-probability words or phrases and can enter repetitive loops [R03, R04]. Comparative studies report differences in linguistic distributions between human and ChatGPT essays [R15]. However, human academic writing uses recurrent lexical bundles and technical terms [R25–R27].

**Diagnostic question:** Does repetition add reference, emphasis, or disciplinary precision? If not, revise the local construction.

### 2. Sentence and paragraph regularity

Instruction-following models often produce well-signposted sequences, similar sentence openings, and balanced paragraph structures. Comparative studies can detect such differences in samples, but the feature is strongly task- and genre-dependent [R14, R15].

**Diagnostic question:** Is the structure helping the reader, or does each paragraph sound interchangeable? Vary only where information structure justifies it.

### 3. Explicit transitions and metadiscourse

Generated prose may repeatedly announce contrast, addition, or conclusion. Yet transitions and frame markers are normal human metadiscourse and can be multifunctional [R21, R22].

**Diagnostic question:** Is the connective relation true and needed at this point? Do not remove it by word list.

### 4. Smooth local fluency with weak development

A paragraph can be grammatical and locally coherent while failing to specify mechanism, evidence, boundary conditions, or interpretation. This risk is related to factuality and hallucination research [R16, R17].

**Diagnostic question:** What claim is made, what supports it, what does the evidence show, and what follows? If the source does not answer these, flag the gap rather than inventing content.

### 5. Stance and voice uniformity

Models may use a safe, moderate register with repeated hedges and limited authorial positioning. Academic stance, however, varies across disciplines and genres [R21–R24, R31].

**Diagnostic question:** Is the level of commitment appropriate for the evidence and section? Preserve the writer’s position.

### 6. Distributional detector features

Token probability, rank, entropy, punctuation, function-word profiles, stylometric features, and neural representations can separate datasets under specified conditions [R04, R06–R09]. They are not direct indicators of quality or authorship.

## Diagnostic protocol

1. Identify the genre, section, audience, discipline, and requested register.
2. Mark repeated expressions and classify their function: terminology, cohesion, emphasis, framing, or redundancy.
3. Map sentence relations: claim, reason, evidence, contrast, interpretation, implication.
4. Examine whether stance and evidential language match the source.
5. Check factual and citation integrity separately.
6. Record only problems that affect readability, precision, argumentation, or voice.

## Example

**Weak diagnosis:** “This is AI-like because it has three sentences with similar length.”

**Evidence-based diagnosis:** “The three sentences repeat the same claim–explanation frame, and the third adds no new information. Combine or restructure them if the paragraph’s argument is unchanged.”

## Limitations

Most empirical studies compare samples rather than real writing histories. Many use older models, constrained prompts, or narrow genres. Human editing and mixed authorship complicate labels. A detector feature may disappear after revision or appear in human text.

## Connections

Use Document 01 for mechanisms, Document 03 for detector limits, Documents 04–06 for human variation, and Documents 07–10 for rules and validation.

## References

[R03–R18], [R21–R27], [R31].
