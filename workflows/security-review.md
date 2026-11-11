# Security Review Workflow

## Purpose
Threat-model a Skill and enforce trust boundaries, least privilege, and approval gates.

## Entry Conditions
Use for explicit security reviews or whenever a workflow reads untrusted content, handles sensitive data, executes code, or can cause external effects.

## Inputs
Architecture, data flow, tools, permissions, credentials, users, deployment environment, and impact classification.

## Steps
1. Map trusted instructions, untrusted data, processes, stores, external systems, and human actors.
2. Identify injection, exfiltration, credential exposure, privilege escalation, unsafe execution, malicious dependency, and irreversible-action paths.
3. Rate likelihood and impact; distinguish controls already verified from recommendations.
4. Narrow interfaces and permissions; prefer read-only and sandboxed access.
5. Ensure external content cannot authorize calls, alter policy, or select sensitive destinations.
6. Place approval immediately before consequential actions and revalidate target, scope, and parameters.
7. Define redacted audit events and incident stop conditions.
8. Create adversarial and authorization-boundary test cases using the [threat model template](../templates/threat-model.md).

## Module Loading
Load [security model](../references/security-model.md) and [autonomy framework](../references/autonomy-framework.md).

## Outputs
Trust-boundary description, threats, mitigations, residual risks, approval policy, and security tests.

## Validation
Every high/critical threat has prevention or explicit risk acceptance; secrets never enter Skill files; approval cannot be inherited from earlier design/build consent.

## Failure Handling
If authorization, data classification, or deployment boundary is unknown, recommend the lower-privilege design and stop before implementation of high-impact access.
