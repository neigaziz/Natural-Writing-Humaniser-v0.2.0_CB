# Document 01 — Scientific foundations of large language model text generation

## Purpose

Explain the mechanisms that can influence generated text without treating mechanisms as visible stylistic defects. This document supports Framework A and must be consulted before making causal claims about AI-associated patterns.

## Definitions

- **Transformer:** an attention-based neural architecture for sequence processing [R01].
- **Autoregressive language model:** a model that estimates the probability of the next token conditional on preceding tokens, producing a sequence left to right [R02, R03, R20].
- **Token:** a model-specific unit, often a word, subword, punctuation mark, or fragment.
- **Context conditioning:** dependence of the next-token distribution on the preceding prompt and generated context.
- **Decoding:** the procedure that converts next-token probabilities into a chosen output sequence.
- **Temperature:** a distribution-shaping parameter; lower values concentrate probability and higher values flatten it, subject to implementation details.
- **Top-k sampling:** restricts candidates to the k highest-ranked tokens.
- **Nucleus/top-p sampling:** samples from the smallest candidate set whose cumulative probability reaches p [R03].
- **Hallucination:** generated content that is unsupported, unfaithful to the input, or factually incorrect; definitions vary by task [R16, R17].

## Mechanism chain

1. Pretraining exposes a model to large text corpora and optimises a language-modelling objective.
2. The Transformer represents contextual relationships through attention and feed-forward transformations [R01].
3. The model returns a probability distribution over possible next tokens.
4. Decoding selects or samples a token, appends it to the context, and repeats.
5. Instruction tuning, preference optimisation, system prompts, retrieved context, tools, and user constraints alter the conditional distribution.
6. The final text is an output of the entire model–prompt–context–decoding pipeline, not of architecture alone.

## Why mechanisms matter for editing

Holtzman et al. show that likelihood-maximising decoding can create bland repetition, while unrestricted sampling can become incoherent; nucleus sampling improves the quality–diversity balance in their experiments [R03]. This means that an observed repeated phrase may be related to decoding, but the same phrase may be deliberate in a human academic paragraph. Editing must therefore begin from the local communicative function, not from a presumed origin.

A model’s high fluency also does not entail factual grounding. Maynez et al. found unfaithful and factually incorrect content in abstractive summarisation, and Ji et al. synthesise hallucination across NLG tasks [R16, R17]. The system must preserve and validate propositions independently of wording.

## Practical example

**Possible model mechanism:** A prompt requests “a concise academic paragraph explaining X.” The model selects a common discourse frame—claim, “however,” contrast, “therefore,” conclusion—because it is a high-probability continuation.

**Invalid conclusion:** “The paragraph is AI-generated because it uses however and therefore.”

**Valid editorial question:** “Do these connectors encode the actual relation between the two propositions, and are they repeated unnecessarily?”

## Operational guidelines

- Explain model-associated patterns only as hypotheses.
- Never infer a model, author, prompt, or decoding setting from prose alone.
- Treat numbers, claims, methods, citations, and equations as protected content.
- If the user asks for fact checking, require sources or clearly label external verification.
- Use the source text as the semantic reference during transformation.

## Limitations

Architecture papers do not establish a universal style of all later deployed models. Closed-model post-training and system prompts are often not reproducible. Tokenisation and decoding implementations differ. Mechanistic explanations cannot replace empirical analysis of the specific text.

## Connections

- Observed tendencies: Document 02.
- Detection limits: Document 03.
- Human alternatives: Documents 04–06.
- Transformation rules: Documents 07–09.
- Validation: Document 10.

## References

[R01], [R02], [R03], [R16], [R17], [R20]. Full records: `research/02_verified_reference_database.json`.
