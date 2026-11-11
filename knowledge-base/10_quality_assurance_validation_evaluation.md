# Document 10 — Quality assurance, validation, and evaluation framework

## Evaluation principle

A revision is high quality only when semantic fidelity, factual accuracy, and citation integrity are protected. Lexical novelty or sentence-length variation cannot compensate for a changed result or invented claim.

## Five-point rubric

Score each dimension from 1 to 5:

| Score | Meaning |
|---|---|
| 1 | unacceptable; major failure or unsafe change |
| 2 | weak; substantial problems remain |
| 3 | adequate; usable with revision |
| 4 | strong; minor issues only |
| 5 | excellent; fit for intended use after normal author review |

### Dimensions and weights

1. Semantic fidelity — **20%**
2. Factual/scientific accuracy — **15%**
3. Citation and attribution integrity — **10%**
4. Grammatical accuracy — **10%**
5. Lexical appropriateness — **8%**
6. Syntactic naturalness — **8%**
7. Sentence flow — **7%**
8. Paragraph coherence — **7%**
9. Logical argumentation — **7%**
10. Academic/genre appropriateness — **4%**
11. Authorial voice — **3%**
12. Redundancy reduction — **1%**

The weighted score must not exceed 3.0/5 if semantic fidelity, factual accuracy, or citation integrity is below 4. A safety failure overrides the aggregate score.

## Validation checks

- all numerical values, units, equations, symbols, and statistical signs unchanged;
- citations and reference keys retained and not fabricated;
- technical terminology preserved or verified;
- claim modality not strengthened or weakened without reason;
- no unsupported information introduced;
- paragraph function and genre preserved;
- writer perspective and first-person choices preserved unless requested;
- ambiguity flagged;
- no detector score used as an optimisation objective.

## Test strata

The regression suite must include:

1. AI-generated academic paragraph;
2. naturally written academic paragraph;
3. human-edited AI-assisted paragraph;
4. non-native English academic text;
5. technical/scientific methods text;
6. literature-review synthesis;
7. Results section with numerical values;
8. Discussion section with hedging and causal limits;
9. professional correspondence;
10. conversational text;
11. creative text with deliberate stylistic deviation;
12. ambiguous source text;
13. text with citations and equations;
14. very short, medium, and long inputs.

## Human evaluation

Use blinded pairwise review by at least two competent editors or domain-aware reviewers where possible. Ask reviewers to rate the 12 dimensions and identify any changed claim, citation, number, stance, or voice. Adjudicate disagreements and retain examples of failure for regression tests.

## Failure categories

- semantic drift;
- factual invention or deletion;
- citation distortion;
- over-editing;
- under-editing;
- generic academic voice;
- L2 language flattening;
- genre mismatch;
- unsupported interpretation;
- mechanical variation;
- ambiguity concealment.

## Release criteria

A version may be labelled **research prototype** only if structural checks pass and representative semantic tests have been run. It may not be labelled detector-proof, human-authored, or production-ready without external human evaluation, representative data, and runtime-specific testing.

## References

[R10, R12–R15, R18, R21, R28–R32, R40, R41].
