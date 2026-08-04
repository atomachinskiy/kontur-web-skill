// Extract any Kontur icon to SVG. Usage: node extract-icon.mjs <Name> <Light|Regular|Solid> <16|20|24|32|64>
// Requires the icons package under ./pkgs-icons OR pass --src <dir to @skbkontur/icons/icons>.
import fs from 'fs'; import path from 'path';
const [,, name, weight='Regular', size='24'] = process.argv;
if(!name){ console.error('usage: node extract-icon.mjs <Name> [Weight] [Size]'); process.exit(1); }
const src = process.env.ICONS_DIR || './icons-src';
const file = path.join(src, `Icon${name}${weight}${size}.js`);
const txt = fs.readFileSync(file,'utf8');
const m = txt.match(/s\(\s*(\d+)\s*,\s*\[([\s\S]*?)\]\s*\)/);
const sz=+m[1]; const paths=[...m[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(x=>x[1]);
console.log(`<svg xmlns="http://www.w3.org/2000/svg" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="currentColor">`+paths.map(d=>`<path fill-rule="evenodd" clip-rule="evenodd" d="${d}"/>`).join('')+`</svg>`);
