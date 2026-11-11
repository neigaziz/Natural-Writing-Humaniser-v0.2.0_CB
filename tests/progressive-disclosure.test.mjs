import test from 'node:test';import assert from 'node:assert/strict';import {readFile,access} from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('core stays below context budget and forbids eager loading',async()=>{const text=await readFile(path.join(root,'SKILL.md'),'utf8');assert.ok(Buffer.byteLength(text)<12001);assert.match(text,/exactly one applicable platform adapter/i);assert.match(text,/Do not eagerly load every workflow/i);});

test('all routed modules exist',async()=>{for(const dir of ['workflows','references']){const expected=dir==='workflows'?['capability-discovery','skill-design','skill-build','skill-audit','skill-refactor','integration-design','security-review','evaluation-design','release-and-installation']:['responsibility-model','skill-architecture','context-engineering','tool-mcp-api-rag','reliability-patterns','security-model','autonomy-framework','platform-compatibility'];for(const name of expected)await assert.doesNotReject(access(path.join(root,dir,`${name}.md`)));}});

test('each workflow defines validation and failure handling',async()=>{for(const name of ['capability-discovery','skill-design','skill-build','skill-audit','skill-refactor','integration-design','security-review','evaluation-design','release-and-installation']){const text=await readFile(path.join(root,'workflows',`${name}.md`),'utf8');assert.match(text,/## Validation/);assert.match(text,/## Failure Handling/);}});
