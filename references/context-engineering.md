# Context Engineering

## Progressive disclosure

Load only the compact core and target adapter initially. Select one primary workflow, then fetch only references, templates, evidence excerpts, and tool output required for the current step.

## Priorities

1. Trusted governing instructions
2. Current objective and authorization
3. Active workflow and contracts
4. Task evidence with provenance
5. Supporting references
6. Historical summaries

## Controls

- Remove duplicated rules and stale examples.
- Summarize large outputs deterministically where possible while retaining source pointers.
- Keep raw evidence outside active context unless exact wording is needed.
- Detect conflicts before compression; never compress away approval or security constraints.
- Define byte/token and tool-output budgets and test context-pressure cases.
- Store durable facts in explicit memory only with authorization and lifecycle controls.
