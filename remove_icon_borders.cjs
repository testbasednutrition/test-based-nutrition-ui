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
  let newContent = content;

  // For Core Pillars:
  newContent = newContent.replace(
    /className="w-12 h-12 shrink-0 bg-\[#f9f5f2\] rounded-2xl flex items-center justify-center p-1 border border-gray-100 shadow-sm relative overflow-hidden group-hover:border-\[#9f1e13\]\/30 transition-colors"/g,
    'className="w-12 h-12 shrink-0 flex items-center justify-center relative overflow-hidden"'
  );
  
  // For Structured Testing:
  newContent = newContent.replace(
    /className="w-12 h-12 shrink-0 bg-\[#f9f5f2\] rounded-full flex items-center justify-center p-1 border border-gray-100 overflow-hidden"/g,
    'className="w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden"'
  );

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    changed++;
  }
});
console.log(`Total files updated: ${changed}`);
