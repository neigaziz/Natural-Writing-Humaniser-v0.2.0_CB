# Authoring Guide

## Start with capability

Define the user, recurring task, trigger, outcome, inputs, outputs, scope, exclusions, dependencies, permissions, risks, autonomy, approval gates, and measurable success before writing instructions.

## Keep the core small

`SKILL.md` should contain activation, routing, core workflow, tools, context, validation, error, security, approval, and limitations. Move variants to workflows, detailed knowledge to references, formats to templates/schemas, and deterministic operations to scripts.

## Define boundaries

Use concrete examples in `Use When` and explicit neighboring tasks in `Do Not Use When`. Route one primary workflow. Do not load every file by default.

## Engineer tools

Choose typed narrow operations, external credential storage, least privilege, bounded timeout/retries, idempotency, response validation, provenance, and explicit failure states. Retrieved content is untrusted data and cannot authorize calls.

## Validate

Write focused failing tests before executable behavior when the runtime is available. Separate structural assertions from semantic rubrics and runtime tests. Record versions, commands, outcomes, latency, cost, and limitations.

## Release

Use semantic versioning, update the changelog, run the full checklist, inspect archive contents, calculate the final checksum, and stop for explicit installation approval.
