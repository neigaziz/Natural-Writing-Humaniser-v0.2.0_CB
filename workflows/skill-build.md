# Skill Build Workflow

## Purpose
Create or modify a complete Skill package from an approved specification.

## Entry Conditions
Use when the user authorizes artifact creation and the target workspace is approved.

## Inputs
Approved specification, implementation target, runtime constraints, test policy, and available execution tools.

## Steps
1. Inspect the workspace and existing conventions; do not assume tools or repository state.
2. Write an implementation plan mapping each requirement to focused files and tests.
3. For executable behavior, follow red-green-refactor: write a focused test, observe intended failure, implement minimally, then rerun focused and full tests.
4. Create compact core instructions, platform adapters, workflows, references, schemas, templates, scripts, fixtures, and documentation.
5. Prefer structured file operations and deterministic scripts without unnecessary dependencies.
6. Run lint, package validation, security scans, and evaluations actually available.
7. Record exact commands, results, blocked checks, assumptions, and limitations.
8. Transition to Release only after required checks pass or the user accepts explicitly documented blocked checks.

## Module Loading
Load only files required by the implementation task. Consult [reliability patterns](../references/reliability-patterns.md) for retry or failure logic and [security model](../references/security-model.md) for exposed trust boundaries.

## Outputs
Skill package, tests, validation evidence, documentation, and changed-file summary.

## Validation
No unresolved placeholders, broken links, known secrets, version drift, or untested executable behavior. Never convert an unavailable check into a pass.

## Failure Handling
On missing runtime or dependency, preserve failed evidence, use no fabricated substitute, and report the check as blocked. Stop before external or irreversible operations.
