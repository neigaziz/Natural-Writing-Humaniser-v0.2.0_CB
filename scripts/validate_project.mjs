import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const required = [
  'SKILL.md',
  'plugin/config.json',
  'plugin/instructions.md',
  'frameworks/Framework_A_AI_generated_text_characteristics.md',
  'frameworks/Framework_B_natural_human_written_text_characteristics.md',
  'research/01_search_protocol.md',
  'research/02_verified_reference_database.json',
  'research/03_evidence_to_rule_mapping.md',
  'research/04_comprehensive_research_report.md',
  'evaluation/test_cases.json',
  'evaluation/evaluation_report.md'
];
for (let i = 1; i <= 10; i++) required.push(`knowledge-base/${String(i).padStart(2, '0')}_` + [
  'scientific_foundations_llm_text_generation.md',
  'empirical_characteristics_ai_generated_text.md',
  'scientific_limitations_ai_text_detection.md',
  'characteristics_natural_human_written_text.md',
  'corpus_linguistics_natural_writing_variation.md',
  'academic_writing_authorial_voice_discourse_analysis.md',
  'evidence_based_rules_natural_transformation.md',
  'academic_writing_transformation_guidelines.md',
  'text_analysis_diagnostic_rewriting_procedures.md',
  'quality_assurance_validation_evaluation.md'
][i - 1]);

const errors = [];
for (const rel of required) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) errors.push(`missing: ${rel}`);
  else if (fs.statSync(p).size === 0) errors.push(`empty: ${rel}`);
}

let config;
let refs;
let tests;
try { config = JSON.parse(fs.readFileSync(path.join(root, 'plugin/config.json'), 'utf8')); }
catch (e) { errors.push(`invalid plugin/config.json: ${e.message}`); }
try { refs = JSON.parse(fs.readFileSync(path.join(root, 'research/02_verified_reference_database.json'), 'utf8')); }
catch (e) { errors.push(`invalid reference database: ${e.message}`); }
try { tests = JSON.parse(fs.readFileSync(path.join(root, 'evaluation/test_cases.json'), 'utf8')); }
catch (e) { errors.push(`invalid test suite: ${e.message}`); }

if (refs) {
  if (!Array.isArray(refs.references) || refs.references.length < 30) errors.push('reference database has fewer than 30 records');
  const ids = new Set();
  for (const r of refs.references ?? []) {
    if (!r.id || ids.has(r.id)) errors.push(`duplicate/missing reference id: ${r.id ?? '(missing)'}`);
    ids.add(r.id);
    for (const field of ['authors','year','title','url','evidence','verification']) if (!r[field]) errors.push(`reference ${r.id} missing ${field}`);
  }
  const a = refs.references.filter(r => r.stream === 'A').length;
  const b = refs.references.filter(r => r.stream === 'B').length;
  if (a < 12 || b < 12) errors.push(`stream balance failed: A=${a}, B=${b}`);
}
if (config) {
  for (const key of ['name','description','instructions_file','knowledge_files','conversation_starters','capabilities']) if (!(key in config)) errors.push(`config missing ${key}`);
  if (config.deployment_status !== 'configuration prototype; not deployed') errors.push('deployment status is not explicitly un-deployed');
}
if (tests) {
  if (!Array.isArray(tests.cases) || tests.cases.length < 10) errors.push('test suite has fewer than 10 cases');
  const ids = new Set();
  for (const t of tests.cases ?? []) {
    if (!t.id || ids.has(t.id)) errors.push(`duplicate/missing test id: ${t.id ?? '(missing)'}`);
    ids.add(t.id);
    for (const field of ['label','mode','input','constraints','expected']) if (!(field in t)) errors.push(`test ${t.id} missing ${field}`);
  }
}

const result = { status: errors.length ? 'failed' : 'passed', root, required_files: required.length, errors };
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
