# Skill Architecture

## Capability-first sequence

Define users, recurring objective, inputs, outputs, scope, exclusions, dependencies, permissions, success, failure, and risks before writing instructions.

## Package pattern

Keep `SKILL.md` small: purpose, routing, core workflow, tool policy, loading rules, validation, security, approvals, and limitations. Put task variants in `workflows/`, detailed knowledge in `references/`, deterministic work in `scripts/`, reusable structures in `templates/`, contracts in `schemas/`, and regression evidence in `tests/`.

## Boundary rules

- One Skill should own one coherent capability family.
- Split independently routed, permissioned, versioned, or evaluated capabilities.
- Compose Skills through explicit input/output contracts rather than duplicated instructions.
- Platform adapters may clarify runtime conventions but cannot weaken shared invariants.
- Treat Skills as semantic-versioned software with ownership, changelog, tests, compatibility, and deprecation policy.
