# Natural Writing Humaniser

Evidence-based natural writing and academic editing assistant, delivered as a portable Agent Skill plus a platform-neutral GPT-style configuration prototype.

## What is included

- `research/` — search protocol, 42-record reference database, research synthesis, and evidence-to-rule mapping.
- `frameworks/` — Framework A on AI-generated text characteristics and Framework B on natural human-written text.
- `knowledge-base/` — ten self-contained knowledge documents for generation, detection limitations, corpus variation, academic discourse, rules, workflows, and QA.
- `plugin/` — `config.json` and the user-approved permanent system instructions for a GPT-style builder.
- `evaluation/` — 17 regression cases covering all supported writing modes and a human-evaluation plan.
- `scripts/` — deterministic project and regression validators.
- `SKILL.md` — portable capability contract and safety boundaries.

## Quick validation

```bash
node scripts/validate_project.mjs
node scripts/lint-skill.mjs . --json
node scripts/validate-package.mjs . --json
node scripts/run_humaniser_regression.mjs
```

The generic specialist `scripts/run-evaluations.mjs` is not the semantic evaluator for this project; its built-in tests target the Agent Skills Specialist capability. The humaniser-specific regression command checks coverage and case integrity, while semantic quality still requires human or target-runtime evaluation.

## Deployment status

**Not deployed and not installed.** The package contains no live API endpoint, action, detector integration, or external service. Upload the files listed in `references/knowledge_manifest.md` to the target GPT-building environment only after reviewing the configuration and granting explicit approval.

## Important limitations

This system does not determine authorship, guarantee human-authored text, promise zero AI-detector detection, or optimise for detector evasion. Its evidence base is a documented scoping search, not an exhaustive search of Scopus, Web of Science, or Google Scholar. Semantic validation across disciplines and languages remains to be completed.
