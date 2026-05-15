const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Pattern 1: w-12 h-12 with bg, border, rounded-2xl/full
  content = content.replace(
    /className="(w-12 h-12|w-16 h-16)[^"]*bg-\[#f9f5f2\][^"]*rounded-(2xl|full)[^"]*"/g,
    (match, dims) => `className="${dims} shrink-0 flex items-center justify-center relative overflow-hidden"`
  );

  // Pattern 2: w-16 h-16 bg-white rounded-2xl border
  content = content.replace(
    /className="(w-16 h-16|w-12 h-12)[^"]*bg-white[^"]*rounded-2xl[^"]*border[^"]*"/g,
    (match, dims) => `className="${dims} flex items-center justify-center mb-6 overflow-hidden p-0"`
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated borders in ${file}`);
    changed++;
  }
});
console.log(`Total files updated: ${changed}`);
