# Reliability Patterns

## Validation pipeline

Input validation → operation → output/schema validation → plausibility/evidence checks → retry/fallback if allowed → final completeness check → result with provenance.

## Failure policy

Classify missing input, invalid input, unsupported access, authorization, transient, permanent, malformed response, validation, security, and internal consistency failures. Retry only safe idempotent transient operations with bounded backoff and at most three total attempts. Never retry identical permanent or authorization failures.

## Idempotency and recovery

Use request identifiers or idempotency keys for write operations. Verify state before retry. Define partial-result semantics, checkpoint locations, rollback/compensation, and human escalation. Never silently continue with missing critical evidence.

## Claims

A passed structural test proves only the asserted structure. Production readiness requires representative semantic, adversarial, failure-injection, security, cost, latency, and runtime evaluations.
