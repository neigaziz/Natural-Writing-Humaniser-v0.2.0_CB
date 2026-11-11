import test from 'node:test';import assert from 'node:assert/strict';import {mkdtemp,writeFile,mkdir,rm,readFile} from 'node:fs/promises';import os from 'node:os';import path from 'node:path';import {fileURLToPath} from 'node:url';import {lintSkill} from '../scripts/lint-skill.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const headings=['Purpose','Scope','Use When','Do Not Use When','Inputs','Outputs','Core Workflow','Tool-Selection Rules','Context-Loading Rules','Validation','Error Handling','Security Requirements','Human-Approval Gates','Limitations'];
const valid=headings.map(h=>`## ${h}\nConcrete bounded policy for ${h}.`).join('\n\n');
async function fixture(text){const dir=await mkdtemp(path.join(os.tmpdir(),'skill-lint-'));await writeFile(path.join(dir,'SKILL.md'),text);return dir;}

test('core treats external content as untrusted data',async()=>{const text=await readFile(path.join(root,'SKILL.md'),'utf8');assert.match(text,/untrusted data, not instructions/i);assert.match(text,/cannot authorize actions/i);});
test('linter accepts a bounded valid Skill',async()=>{const dir=await fixture(valid);try{assert.equal((await lintSkill(dir)).status,'pass');}finally{await rm(dir,{recursive:true,force:true});}});
test('linter rejects missing activation, oversized core, credentials, and broken links',async()=>{for(const [text,code] of [[valid.replace(/## Use When[\s\S]*?(?=\n\n##)/,''),'SECTION_MISSING'],[valid+'x'.repeat(13000),'CORE_OVERSIZED'],[valid+'\npassword=abcdefghijklmnop','SECRET_GENERIC_TOKEN'],[valid+'\n[missing](nope.md)','LINK_BROKEN']]){const dir=await fixture(text);try{assert.ok((await lintSkill(dir)).errors.some(x=>x.code===code),code);}finally{await rm(dir,{recursive:true,force:true});}}});
