# Installation

Installation is a consequential action and requires explicit user approval immediately before execution. Building or downloading the package is not installation authorization.

## Prerequisites

- A target runtime that supports Skills or an equivalent instruction package
- Read access to this package
- Node.js 20+ for deterministic validation
- A documented Skill installation destination and rollback method

## Pre-install validation

From the package directory run:

```bash
node scripts/lint-skill.mjs . --json
node scripts/validate-package.mjs . --json
node scripts/run-evaluations.mjs --json
```

Do not install if required checks fail. Record blocked checks and obtain explicit risk acceptance when material.

## GPT-5.6 Sol hosts

Read `adapters/gpt-5.6-sol.md`. Inspect the host's current Skill-loading and installation mechanism; do not assume a universal directory or command. State the destination, permissions, replacement behavior, and rollback, then request explicit approval before calling the supported installer. Verify that the Skill appears and activates on representative prompts.

## Claude Agent Skills

Read `adapters/claude-agent-skills.md`. Verify the target Claude runtime's current metadata, directory, packaging, and installation conventions. Present the exact destination, permissions, and rollback, then request explicit approval. Verify discovery, progressive file reading, routing boundaries, and refusal of unauthorized installation/deployment.

## Generic/manual use

If the runtime lacks Skill installation, keep the package in an approved read-only location and configure the agent to read `SKILL.md`, one adapter, and routed modules. Do not flatten every file into one prompt.

## Rollback

Before replacement, preserve the installed version and configuration without copying credentials. Roll back by restoring the prior package and verifying activation. Deployment, external publication, or production changes require their own approval even after installation approval.
