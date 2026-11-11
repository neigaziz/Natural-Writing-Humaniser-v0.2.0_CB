import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const core=await readFile(path.join(root,'SKILL.md'),'utf8');

test('core defines concrete activation and exclusion boundaries',()=>{
  for(const phrase of ['## Use When','create, design, audit','## Do Not Use When','ordinary application development']) assert.match(core,new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'));
});

test('all nine workflows are explicitly routed',()=>{
  for(const name of ['capability-discovery','skill-design','skill-build','skill-audit','skill-refactor','integration-design','security-review','evaluation-design','release-and-installation']) assert.match(core,new RegExp(`workflows/${name}\\.md`));
});
