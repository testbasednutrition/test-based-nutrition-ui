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
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/meta:\s*`\$\{s\.category\}\s*•\s*\$\{s\.role\}`/g, 'meta: s.role');
  newContent = newContent.replace(/meta:\s*`\$\{s\.category\s*\|\|\s*'Specialist'\}\s*•\s*\$\{s\.role\s*\|\|\s*'Consultant'\}`/g, "meta: s.role || 'Consultant'");
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
