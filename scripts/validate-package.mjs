#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { exists, finding, formatHuman, parseJson, readUtf8 } from './lib.mjs';
import { lintSkill } from './lint-skill.mjs';

const REQUIRED_PATHS = [
  'SKILL.md','skill-manifest.json','README.md','CHANGELOG.md','LICENSE',
  'adapters/gpt-5.6-sol.md','adapters/claude-agent-skills.md',
  ...['capability-discovery','skill-design','skill-build','skill-audit','skill-refactor','integration-design','security-review','evaluation-design','release-and-installation'].map(x=>`workflows/${x}.md`),
  ...['responsibility-model','skill-architecture','context-engineering','tool-mcp-api-rag','reliability-patterns','security-model','autonomy-framework','platform-compatibility'].map(x=>`references/${x}.md`),
  ...['skill-manifest','tool-contract','evaluation-case','audit-report'].map(x=>`schemas/${x}.schema.json`),
  ...['skill-template.md','needs-analysis.md','architecture-spec.md','threat-model.md','evaluation-plan.md','tool-contract.json','release-checklist.md','output-template.md'].map(x=>`templates/${x}`),
  'scripts/lib.mjs','scripts/lint-skill.mjs','scripts/validate-package.mjs','scripts/run-evaluations.mjs',
  ...['package-structure','activation-routing','progressive-disclosure','security-controls','approval-gates','platform-adapters'].map(x=>`tests/${x}.test.mjs`),
  'docs/installation.md','docs/authoring-guide.md','docs/troubleshooting.md'
];

export async function validatePackage(rootDirectory) {
  const root = path.resolve(rootDirectory), errors = [], warnings = [], checks = {};
  for (const relative of REQUIRED_PATHS) if (!await exists(path.join(root, relative))) errors.push(finding('PATH_MISSING', `Required path is missing: ${relative}`, relative));
  checks.requiredPaths = { expected: REQUIRED_PATHS.length, missing: errors.filter(x=>x.code==='PATH_MISSING').length };
  let manifest;
  try { manifest = await parseJson(path.join(root, 'skill-manifest.json')); } catch (e) { errors.push(finding('JSON_INVALID', `Invalid manifest JSON: ${e.message}`, 'skill-manifest.json')); }
  for (const name of ['skill-manifest','tool-contract','evaluation-case','audit-report']) {
    const relative = `schemas/${name}.schema.json`;
    if (!await exists(path.join(root, relative))) continue;
    try { const schema = await parseJson(path.join(root, relative)); if (schema.$schema !== 'https://json-schema.org/draft/2020-12/schema') errors.push(finding('SCHEMA_DRAFT', 'Schema must use Draft 2020-12', relative)); }
    catch (e) { errors.push(finding('JSON_INVALID', `Invalid schema JSON: ${e.message}`, relative)); }
  }
  if (manifest) {
    if (manifest.version !== '1.0.0') errors.push(finding('VERSION_CORE', 'Manifest version must be 1.0.0', 'skill-manifest.json'));
    for (const adapter of ['adapters/gpt-5.6-sol.md','adapters/claude-agent-skills.md']) if (await exists(path.join(root, adapter))) {
      const text = await readUtf8(path.join(root, adapter)); if (!/Version:\*{0,2}\s*1\.0\.0/i.test(text)) errors.push(finding('VERSION_ADAPTER', 'Adapter version must match 1.0.0', adapter));
    }
    if (await exists(path.join(root, 'CHANGELOG.md')) && !/(?:^|\n)## \[?1\.0\.0\]?/m.test(await readUtf8(path.join(root, 'CHANGELOG.md')))) errors.push(finding('VERSION_CHANGELOG', 'CHANGELOG must contain version 1.0.0', 'CHANGELOG.md'));
  }
  const lint = await lintSkill(root); errors.push(...lint.errors); warnings.push(...lint.warnings); checks.lint = lint;
  return { status: errors.length ? 'fail' : 'pass', errors, warnings, checks };
}

async function main() {
  const args=process.argv.slice(2), json=args.includes('--json'), target=args.find(x=>x!=='--json');
  if(!target){console.error('Usage: node scripts/validate-package.mjs <skill-directory> [--json]');process.exitCode=2;return;}
  try{const result=await validatePackage(target);console.log(json?JSON.stringify(result,null,2):formatHuman(result));process.exitCode=result.status==='pass'?0:1;}
  catch(error){console.error(json?JSON.stringify({status:'error',error:error.message}):`ERROR: ${error.message}`);process.exitCode=2;}
}
if(import.meta.url===pathToFileURL(process.argv[1]??'').href) await main();
