import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = async (relative) => JSON.parse(await readFile(path.join(root, relative), 'utf8'));

test('schemas use Draft 2020-12 and close top-level properties', async () => {
  for (const name of ['skill-manifest', 'tool-contract', 'evaluation-case', 'audit-report']) {
    const schema = await readJson(`schemas/${name}.schema.json`);
    assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema');
    assert.equal(schema.additionalProperties, false);
    assert.equal(schema.type, 'object');
  }
});

test('manifest defines the approved package contract', async () => {
  const manifest = await readJson('skill-manifest.json');
  assert.deepEqual(Object.keys(manifest).sort(), [
    'autonomyLevel', 'description', 'entrypoint', 'name', 'platforms',
    'requiredPermissions', 'version', 'workflows'
  ]);
  assert.equal(manifest.name, 'agent-skills-specialist');
  assert.equal(manifest.version, '1.0.0');
  assert.equal(manifest.autonomyLevel, 3);
  assert.equal(manifest.entrypoint, 'SKILL.md');
  assert.deepEqual(manifest.platforms, ['gpt-5.6-sol', 'claude-agent-skills']);
  assert.equal(manifest.workflows.length, 9);
});
