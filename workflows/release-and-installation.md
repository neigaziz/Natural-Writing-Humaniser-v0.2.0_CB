# Release and Installation Workflow

## Purpose
Validate, package, deliver, and—only after separate approval—install a Skill.

## Entry Conditions
Use after Build/Refactor for release, or when the user explicitly requests installation.

## Inputs
Package root, version, runtime target, required checks, release notes, installation destination, and authorization state.

## Steps
1. Confirm version consistency, required files, licensing, documentation, and changelog.
2. Run linter, package validator, full deterministic suite, secret scan, placeholder scan, and runtime-specific checks actually available.
3. Record commands, versions, exact results, blocked checks, limitations, and semantic-evaluation status.
4. Do not release on required validation/security failure. A blocked check needs explicit risk acceptance when material.
5. Create a reproducible archive with one top-level package directory; inspect contents and compute its SHA-256.
6. Deliver archive and report without claiming installation.
7. Ask for explicit approval immediately before installation, naming runtime, destination, permissions, and rollback.
8. If approved, use only the supported narrow installer, verify activation, and record outcome. Deployment is a separate gate if externally consequential.

## Module Loading
Load [release checklist](../templates/release-checklist.md), the selected platform adapter, and [platform compatibility](../references/platform-compatibility.md).

## Outputs
Validation report, release archive/checksum, release notes, installation plan, and—only after approval—installation evidence.

## Validation
Archive contents match the package; checksum is calculated after final archive creation; no secret or unresolved placeholder remains; results distinguish pass, fail, blocked, and not applicable.

## Failure Handling
If checks fail, stop release and report remediation. If the runtime or installer is unavailable, provide instructions and do not claim installation. Never treat build approval as install approval.
