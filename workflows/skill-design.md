# Skill Design Workflow

## Purpose
Turn an approved capability contract into a modular, implementation-ready Skill specification.

## Entry Conditions
Use after capability boundaries are known and before creating implementation artifacts.

## Inputs
Capability contract, platform/runtime, available integrations, constraints, risks, and evaluation goals.

## Steps
1. Allocate responsibilities among model, Skill, tools, MCP/API/RAG, files, code, memory, evaluation, and humans.
2. Choose a small core plus conditionally loaded workflows, references, templates, schemas, and scripts.
3. Define the routing table, workflow transitions, and exclusion boundaries.
4. Define typed inputs/outputs, failure states, permissions, approval gates, and context limits.
5. Specify deterministic validation and semantic evaluation separately.
6. Threat-model untrusted content, credentials, excessive privilege, data leakage, and irreversible actions.
7. Compare viable architectures and recommend the simplest that satisfies the contract.
8. Write the specification with the [architecture template](../templates/architecture-spec.md) and request review before Build when required by the operating workflow.

## Module Loading
Load [Skill architecture](../references/skill-architecture.md), [context engineering](../references/context-engineering.md), and references for integrations or security only when applicable.

## Outputs
Approved architecture, package tree, contracts, routing, security controls, evaluation plan, deployment constraints, and known limitations.

## Validation
Trace every capability requirement to a component and test. Check for duplicated responsibility, eager context loading, unsupported platform assumptions, and missing approval gates.

## Failure Handling
If the design depends on unavailable or undocumented runtime behavior, make that dependency conditional and identify the minimum verification needed. Do not claim implementation or testing.
