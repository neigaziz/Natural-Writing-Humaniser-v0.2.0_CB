import { access, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

export const finding = (code, message, location = '') => ({ code, message, location });
export const exists = async (p) => access(p).then(() => true, () => false);
export const readUtf8 = (p) => readFile(p, 'utf8');
export const parseJson = async (p) => JSON.parse(await readUtf8(p));
export const byteLength = (text) => Buffer.byteLength(text, 'utf8');
export const markdownHeadings = (text) => [...text.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m => m[1].trim());
export const markdownLinks = (text) => [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1]);
export const localLinks = (text) => markdownLinks(text).filter(link => !/^(?:[a-z]+:|#)/i.test(link));
export const walk = async (root) => {
  const output = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) output.push(...await walk(full));
    else output.push(full);
  }
  return output;
};
export const fileSize = async (p) => (await stat(p)).size;
export const formatHuman = (result) => {
  const rows = [...(result.errors ?? []).map(x => `ERROR ${x.code}: ${x.message}${x.location ? ` (${x.location})` : ''}`),
    ...(result.warnings ?? []).map(x => `WARN ${x.code}: ${x.message}${x.location ? ` (${x.location})` : ''}`)];
  return `${result.status.toUpperCase()}\n${rows.join('\n')}${rows.length ? '\n' : ''}`;
};
