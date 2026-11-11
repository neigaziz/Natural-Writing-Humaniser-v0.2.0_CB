# Capability Discovery Workflow

## Purpose
Define one recurring, testable capability before prompts, tools, or code are selected.

## Entry Conditions
Use when the intended workflow, user, target runtime, inputs, outputs, risks, or success criteria are materially unclear.

## Inputs
Available user goals, examples, environment details, constraints, and existing artifacts.

## Steps
1. Identify users, stakeholders, recurring task, trigger, and business or professional outcome.
2. Inventory available inputs, systems, tools, permissions, and prohibited actions.
3. Define expected outputs and downstream consumers.
4. Separate necessary capability from optional features; exclude unrelated work.
5. Establish success/failure criteria, autonomy, approval gates, volume, latency, and cost.
6. Ask one focused question when an unknown blocks safe design; otherwise label assumptions.
7. Produce a capability contract using [needs-analysis template](../templates/needs-analysis.md).

## Module Loading
Load [responsibility model](../references/responsibility-model.md) and [autonomy framework](../references/autonomy-framework.md) only when allocation or autonomy is disputed.

## Outputs
Needs analysis, purpose, scope, activation/exclusion rules, inputs, outputs, dependencies, permissions, risks, and measurable success criteria.

## Validation
Every output field is present or explicitly marked unknown with impact. The capability describes one coherent recurring task and has observable success criteria.

## Failure Handling
If authorization or essential access is unclear, stop at a design-only result. If scope contains independent capabilities, propose separate Skills and explain their composition boundary.
