import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src');

const replacements = [
  // Light Cream
  { from: /#fdfdf9/gi, to: '#f9f5f2' },
  { from: /#f5f5f5/gi, to: '#f9f5f2' },
  { from: /#fdfcfb/gi, to: '#f9f5f2' },
  { from: /#fefdfb/gi, to: '#f9f5f2' },
  { from: /#fdfaf8/gi, to: '#f9f5f2' },
  { from: /#f9f8f4/gi, to: '#f9f5f2' },
  { from: /#F3F2EE/gi, to: '#f9f5f2' },
  { from: /#F7EEE8/gi, to: '#f9f5f2' },
  
  // Dark Cream
  { from: /#d0bfae/gi, to: '#dbd4c9' },
  { from: /#5a3a2d/gi, to: '#dbd4c9' },

  // Red
  { from: /#80180f/gi, to: '#9f1e13' },
  { from: /#8c353f/gi, to: '#9f1e13' },
  { from: /#4a161d/gi, to: '#9f1e13' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      for (const rule of replacements) {
        if (rule.from.test(content)) {
          content = content.replace(rule.from, rule.to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
      }
    }
  }
}

processDir(baseDir);
