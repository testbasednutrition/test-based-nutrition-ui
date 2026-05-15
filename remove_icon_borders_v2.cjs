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

  // Replace border wrappers in all core pillars sections
  newContent = newContent.replace(
    /className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-\[#dbd4c9\] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0"/g,
    'className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0"'
  );
  
  // Replace smaller icons if any
  newContent = newContent.replace(
    /className="w-12 h-12 shrink-0 bg-\[#f9f5f2\] rounded-2xl flex items-center justify-center p-1 border border-gray-100 shadow-sm relative overflow-hidden group-hover:border-\[#9f1e13\]\/30 transition-colors"/g,
    'className="w-12 h-12 shrink-0 flex items-center justify-center relative overflow-hidden"'
  );

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    changed++;
  }
});
console.log(`Total files updated: ${changed}`);
