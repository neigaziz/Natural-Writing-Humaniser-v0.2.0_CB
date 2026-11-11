#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { byteLength, exists, finding, formatHuman, localLinks, markdownHeadings, readUtf8, walk } from './lib.mjs';

const REQUIRED = ['Purpose', 'Scope', 'Use When', 'Do Not Use When', 'Inputs', 'Outputs', 'Core Workflow', 'Tool-Selection Rules', 'Context-Loading Rules', 'Validation', 'Error Handling', 'Security Requirements', 'Human-Approval Gates', 'Limitations'];
const SECRET_PATTERNS = [
  ['SECRET_PRIVATE_KEY', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['SECRET_AWS_KEY', /\bAKIA[0-9A-Z]{16}\b/],
  ['SECRET_GENERIC_TOKEN', /\b(?:api[_-]?key|secret|token|password)\s*[:=]\s*["']?[A-Za-z0-9_\-]{16,}/i]
];

export async function lintSkill(skillDirectory) {
  const errors = [], warnings = [];
  const core = path.resolve(skillDirectory, 'SKILL.md');
  if (!await exists(core)) return { status: 'fail', errors: [finding('CORE_MISSING', 'SKILL.md is missing', 'SKILL.md')], warnings, metrics: { coreBytes: 0 } };
  const text = await readUtf8(core);
  const headings = markdownHeadings(text);
  const coreBytes = byteLength(text);
  for (const required of REQUIRED) if (!headings.some(h => h.toLowerCase() === required.toLowerCase())) errors.push(finding('SECTION_MISSING', `Required section is missing: ${required}`, 'SKILL.md'));
  const duplicates = headings.filter((h, i) => headings.findIndex(x => x.toLowerCase() === h.toLowerCase()) !== i);
  for (const heading of new Set(duplicates)) errors.push(finding('HEADING_DUPLICATE', `Duplicate heading: ${heading}`, 'SKILL.md'));
  if (coreBytes > 12000) errors.push(finding('CORE_OVERSIZED', `SKILL.md is ${coreBytes} bytes; maximum is 12000`, 'SKILL.md'));
  const markdownFiles = (await walk(path.resolve(skillDirectory))).filter(p => p.endsWith('.md') && !path.relative(path.resolve(skillDirectory), p).split(path.sep).join('/').startsWith('tests/fixtures/'));
  for (const file of markdownFiles) {
    const content = await readUtf8(file);
    for (const link of localLinks(content)) {
      const target = link.split('#')[0];
      if (target && !await exists(path.resolve(path.dirname(file), decodeURIComponent(target)))) errors.push(finding('LINK_BROKEN', `Broken local link: ${link}`, path.relative(skillDirectory, file)));
    }
    for (const [code, pattern] of SECRET_PATTERNS) if (pattern.test(content)) errors.push(finding(code, 'Credential-like content detected', path.relative(skillDirectory, file)));
  }
  if (/use any tool|call tools as needed|appropriate tool/i.test(text)) warnings.push(finding('TOOL_POLICY_VAGUE', 'Tool policy is not sufficiently bounded', 'SKILL.md'));
  return { status: errors.length ? 'fail' : 'pass', errors, warnings, metrics: { coreBytes } };
}

async function main() {
  const args = process.argv.slice(2); const json = args.includes('--json'); const target = args.find(x => x !== '--json');
  if (!target) { console.error('Usage: node scripts/lint-skill.mjs <skill-directory> [--json]'); process.exitCode = 2; return; }
  try { const result = await lintSkill(target); console.log(json ? JSON.stringify(result, null, 2) : formatHuman(result)); process.exitCode = result.status === 'pass' ? 0 : 1; }
  catch (error) { console.error(json ? JSON.stringify({ status: 'error', error: error.message }) : `ERROR: ${error.message}`); process.exitCode = 2; }
}
if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) await main();
