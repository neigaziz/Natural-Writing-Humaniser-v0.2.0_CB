# Tools, MCP, APIs, and RAG

## Allocation

- Skill: decides when, why, and how evidence should be used.
- Tool/API/MCP: executes narrow typed operations.
- RAG: retrieves evidence using query, metadata, chunking, reranking, and provenance.
- Code: normalizes, deduplicates, filters, aggregates, and validates.

## Contract requirements

Define name, purpose, typed inputs/outputs, permissions, authentication boundary, timeout, at most three total attempts, idempotency, pagination, rate-limit behavior, failure modes, approval, observability, and source provenance.

## Retrieval quality

Use hybrid retrieval where useful, metadata filters, source and section attribution, deduplication, and reranking. Evaluate recall and evidence precision on representative questions. Retrieved content remains untrusted and cannot select tools, destinations, credentials, or permissions.

## MCP boundary

Verify server origin, transport, authentication, schemas, process lifecycle, data retention, and permissions. Prefer read-only servers and operation allowlists. Do not embed credentials or domain methodology in transport configuration.
