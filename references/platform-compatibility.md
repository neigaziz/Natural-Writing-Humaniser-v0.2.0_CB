# Platform Compatibility

## Shared guarantees

Purpose, activation boundaries, workflows, trust rules, approval gates, schemas, and evaluation principles are platform-neutral.

## Runtime-dependent behavior

Skill discovery, metadata syntax, context loading, available tools, filesystem layout, MCP configuration, archive delivery, installation commands, memory, and deployment vary by host and version. Inspect the actual environment and current documentation before using runtime-specific syntax.

## Adapters

Use the GPT adapter for GPT-5.6 Sol hosts and the Claude adapter for Claude Agent Skills. Adapters clarify host conventions only and cannot duplicate or weaken the shared methodology. If a runtime lacks a required feature, provide a design or manual procedure and label live verification as blocked.
