# Skill Refactor Workflow

## Purpose
Improve an existing Skill while preserving approved behavior and preventing regressions.

## Entry Conditions
Use after an audit or specific defect identifies desired changes and acceptance criteria.

## Inputs
Current package, audit findings, expected behavior, target architecture, tests, and migration constraints.

## Steps
1. Baseline current files, tests, interfaces, versions, and known behavior.
2. Prioritize correctness and security defects before optimization.
3. Add a failing regression test for each behavioral defect before changing implementation.
4. Extract detailed knowledge from the core into routed workflows or references.
5. Replace probabilistic calculations or validation with deterministic scripts where appropriate.
6. Clarify activation, exclusion, tool, failure, security, and approval policies.
7. Run focused and full regression checks after each coherent change.
8. Produce migration notes covering renamed files, contracts, behavior, and breaking changes.

## Module Loading
Load [context engineering](../references/context-engineering.md), [Skill architecture](../references/skill-architecture.md), and only references matching audit findings.

## Outputs
Revised package, regression evidence, migration notes, changelog entry, and remaining risks.

## Validation
Approved behavior remains covered; targeted defects are reproducibly fixed; core context decreases or remains within limit; links and versions remain consistent.

## Failure Handling
If expected behavior is undocumented, do not guess a breaking semantic change. Present alternatives or preserve behavior until the user decides.
