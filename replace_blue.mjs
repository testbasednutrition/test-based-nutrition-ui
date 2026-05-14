import fs from 'fs';
import path from 'path';

const dir = '/Users/user/testbasedweb/test-based-nutrition-ui/src/pages/treatments';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace colors
  content = content.replace(/bg-blue-50\/50/g, 'bg-[#7a2a33]/5');
  content = content.replace(/bg-blue-50/g, 'bg-[#7a2a33]/10');
  content = content.replace(/border-blue-50/g, 'border-[#7a2a33]/20');
  content = content.replace(/text-blue-700/g, 'text-[#7a2a33]');
  content = content.replace(/bg-blue-600/g, 'bg-[#7a2a33]');
  content = content.replace(/border-t-blue-600/g, 'border-t-[#7a2a33]');
  content = content.replace(/hover:border-blue-600\/30/g, 'hover:border-[#7a2a33]/30');
  content = content.replace(/text-blue-600\/80/g, 'text-[#7a2a33]/80');
  
  fs.writeFileSync(filePath, content);
}
console.log("Replaced blue with red in treatments");
