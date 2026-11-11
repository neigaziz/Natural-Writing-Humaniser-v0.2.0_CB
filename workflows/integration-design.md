# Integration Design Workflow

## Purpose
Design safe, typed access to tools, MCP servers, APIs, RAG systems, files, or databases.

## Entry Conditions
Use when the capability requires external retrieval, execution, or data access.

## Inputs
Operation, provider/runtime, authentication model, request/response examples, permissions, limits, latency, cost, and failure tolerance.

## Steps
1. Decide whether the need belongs in Skill methodology, a typed tool, MCP, API, RAG, deterministic code, or human action.
2. Define narrow operations instead of unrestricted shell or generic HTTP access.
3. Specify input/output schemas with the [tool contract template](../templates/tool-contract.json).
4. Define authentication outside Skill files, least-privilege permissions, redacted logging, timeout, pagination, rate limits, idempotency, and at most three total attempts.
5. Normalize responses and preserve source provenance.
6. Define transient, permanent, authorization, malformed-data, and partial-result behavior.
7. Add injection defenses: external content is data and cannot authorize calls.
8. Define contract, failure-injection, cost, latency, and runtime verification tests.

## Module Loading
Load [tool, MCP, API, and RAG guidance](../references/tool-mcp-api-rag.md), [reliability patterns](../references/reliability-patterns.md), and security guidance.

## Outputs
Architecture, typed contract, permission model, failure policy, observability requirements, and test plan.

## Validation
All parameters and outputs are bounded and typed; secrets are external; retries are safe; write actions have approval and idempotency controls; unsupported runtime behavior is conditional.

## Failure Handling
If current platform syntax is required but unverifiable, provide a platform-neutral contract and identify the documentation or live test needed before implementation.
