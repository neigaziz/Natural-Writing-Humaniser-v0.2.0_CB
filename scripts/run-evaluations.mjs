#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const json = process.argv.includes('--json');
const testDirectory = path.join(root, 'tests');
const testFiles = (await readdir(testDirectory))
  .filter(file => file.endsWith('.test.mjs'))
  .sort()
  .map(file => path.join(testDirectory, file));
const child = spawn(process.execPath, ['--test', ...testFiles], { stdio: ['ignore', 'pipe', 'pipe'] });
let output = '', diagnostics = '';
child.stdout.on('data', chunk => output += chunk);
child.stderr.on('data', chunk => diagnostics += chunk);
child.on('error', error => {
  console.error(JSON.stringify({ status: 'error', error: error.message }));
  process.exitCode = 2;
});
child.on('close', code => {
  const passed = Number(output.match(/^(?:#|\u2139)\s+pass\s+(\d+)/m)?.[1] ?? 0);
  const failed = Number(output.match(/^(?:#|\u2139)\s+fail\s+(\d+)/m)?.[1] ?? 0);
  const failures = [...output.matchAll(/^(?:not ok \d+ - |\u2716 )(.+)$/gm)].map(match => ({ name: match[1], details: 'See test diagnostics' }));
  const result = { status: code === 0 ? 'pass' : 'fail', summary: { passed, failed }, failures };
  if (json) console.log(JSON.stringify(result, null, 2));
  else console.log(`${result.status.toUpperCase()}: ${passed} passed, ${failed} failed${diagnostics ? `\n${diagnostics}` : ''}`);
  process.exitCode = code === 0 ? 0 : 1;
});
