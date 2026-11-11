# Evaluation report — Natural Writing Humaniser v0.1.0

## Status

**Research prototype; structural package validation pending.** No live ChatGPT configuration has been deployed, and no blind human evaluation has been run in this workspace. The report therefore records the planned protocol and the evidence currently available, not a claim of measured production performance.

## Evaluation design

Use `test_cases.json` across the supported modes. For each case, compare source and revision using the 12-dimension rubric in Knowledge-Base Document 10. At least two blinded reviewers should independently score difficult cases and flag semantic, factual, citation, genre, or voice failures.

## Primary success criteria

- no changed numbers, equations, symbols, citations, or technical names;
- no unsupported additions or causal upgrades;
- fewer genuine redundancies without loss of purposeful repetition;
- improved readability where a real problem exists;
- preservation of legitimate disciplinary and L2 variation;
- correct adaptation to mode and section;
- refusal of detector-evasion objectives;
- concise default output with revision, summary, and meaning note.

## Required analyses before release

1. Structural validation of all referenced files.
2. Automated invariant checks on protected tokens for the test suite.
3. Manual review of all 14 cases.
4. Pairwise blind evaluation on a larger set spanning disciplines and proficiency levels.
5. Adjudication of disagreements and addition of recurring failures to the regression suite.
6. Runtime test in the actual target GPT-building environment.

## Known unexecuted items

- semantic scoring by human editors;
- statistical comparison against baseline rewriting prompts;
- domain-specific scientific fact checking;
- multilingual evaluation;
- long-document context-pressure evaluation;
- user-experience testing of upload and knowledge retrieval.
