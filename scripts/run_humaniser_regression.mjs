import fs from 'node:fs';

const suite = JSON.parse(fs.readFileSync(new URL('../evaluation/test_cases.json', import.meta.url), 'utf8'));
const expectedModes = [
  'academic research paper',
  'dissertation or thesis',
  'literature review',
  'scientific manuscript; Methods',
  'research proposal',
  'professional writing',
  'technical writing',
  'general English',
  'conversational writing',
  'creative writing'
];
const ids = new Set();
const errors = [];
for (const c of suite.cases ?? []) {
  if (ids.has(c.id)) errors.push(`duplicate case id: ${c.id}`);
  ids.add(c.id);
  for (const key of ['id','label','mode','input','constraints','expected']) if (!(key in c)) errors.push(`${c.id}: missing ${key}`);
  if (!Array.isArray(c.constraints) || !c.constraints.length) errors.push(`${c.id}: empty constraints`);
  if (!Array.isArray(c.expected) || !c.expected.length) errors.push(`${c.id}: empty expected checks`);
}
const present = new Set((suite.cases ?? []).map(c => c.mode));
for (const mode of expectedModes) if (!present.has(mode)) errors.push(`missing mode coverage: ${mode}`);
const protectedCases = ['T05','T06','T08','T14'];
for (const id of protectedCases) if (!ids.has(id)) errors.push(`missing protected-content case: ${id}`);
const result = {
  status: errors.length ? 'failed' : 'passed',
  cases: suite.cases?.length ?? 0,
  modes_covered: [...present].sort(),
  semantic_evaluation: 'requires human or target-runtime review; not inferred by this script',
  errors
};
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
