# Troubleshooting

## `node: command not found`

Install or provide Node.js 20+ in the validation environment. Do not mark Node tests as passed when the runtime is unavailable. Static file inspection is not an equivalent substitute.

## Missing required path

Run `node scripts/validate-package.mjs . --json`, create the exact reported relative path, and rerun. Do not remove requirements merely to make validation green.

## Invalid JSON or schema

Parse the reported file, correct syntax, confirm `$schema` is Draft 2020-12, and preserve `additionalProperties: false` where required.

## Adapter version mismatch

Set core manifest, both adapter `Version` fields, and changelog release to the same semantic version.

## Broken Markdown link

Resolve the path relative to the containing Markdown file. External schemes and fragment-only links are excluded from local-file checks.

## Secret finding

Treat findings as sensitive. Remove the value, rotate it if real, and move credentials to runtime secret storage. Synthetic invalid fixtures may intentionally contain secret-shaped text; document and isolate them rather than shipping real credentials.

## Oversized core

Move detailed methodology, variants, examples, or platform conventions into conditionally loaded workflows/references/adapters. Keep `SKILL.md` at or below 12,000 UTF-8 bytes.

## Test failure

Run the individual failing `.test.mjs`, identify the exact invariant, and fix implementation rather than weakening the assertion. Add a regression case for discovered defects.

## Runtime activation differs

Consult the current host documentation and adapter. Runtime discovery and installation are not universal. Report live verification as blocked when access is unavailable.
