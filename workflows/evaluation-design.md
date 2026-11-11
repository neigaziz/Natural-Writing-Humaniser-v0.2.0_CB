# Evaluation Design Workflow

## Purpose
Create representative, reproducible tests for routing, accuracy, tools, reliability, efficiency, safety, and maintainability.

## Entry Conditions
Use when defining release criteria, diagnosing quality, or guarding a refactor.

## Inputs
Capability contract, expected behavior, failure history, risk model, runtime, cost/latency goals, and available evaluators.

## Steps
1. Translate each success criterion and invariant into observable assertions.
2. Include standard, ambiguous, missing, invalid, large, conflicting, malformed, unavailable-tool, timeout, injection, unauthorized-action, routing-boundary, context-pressure, and regression cases.
3. Select deterministic assertion, model rubric, human review, or runtime integration per property.
4. Define fixtures, expected and forbidden behavior, severity, scoring, and pass thresholds using the [evaluation plan](../templates/evaluation-plan.md).
5. Prevent contamination between development examples and held-out evaluation cases.
6. Record model/runtime, Skill version, tool versions, latency, cost, and evidence.
7. Run failures through root-cause categories and add regression cases before fixes.
8. State what the suite cannot prove.

## Module Loading
Load [reliability patterns](../references/reliability-patterns.md) and the evaluation-case schema.

## Outputs
Evaluation dataset, rubric, deterministic runner design, thresholds, and regression policy.

## Validation
Every requirement and high-risk threat has coverage; pass thresholds are explicit; deterministic checks are not misrepresented as semantic proof.

## Failure Handling
If representative data is unavailable, produce a provisional suite labeled as synthetic and require domain review before production-readiness claims.
