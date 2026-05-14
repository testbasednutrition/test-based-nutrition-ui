import fs from 'fs';
import path from 'path';

const dir = '/Users/user/testbasedweb/test-based-nutrition-ui/src/pages/treatments';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Ishtiaq
  content = content.replace(/\/images\/specialists\/ishtiaq\.jpg/g, '/experts/ishtiaq-rehman-new.jpg');
  content = content.replace(/\/images\/specialists\/dr-rehman-v3\.png/g, '/experts/ishtiaq-rehman-new.jpg');

  // Replace Neil
  content = content.replace(/\/images\/specialists\/neil\.jpg/g, '/experts/neil-parsley-new.jpg');
  content = content.replace(/\/images\/specialists\/neil-parsley\.png/g, '/experts/neil-parsley-new.jpg');
  content = content.replace(/\/experts\/neil-parsley-v3\.png/g, '/experts/neil-parsley-new.jpg');
  content = content.replace(/\/experts\/dr-rehman-v3\.png/g, '/experts/ishtiaq-rehman-new.jpg');

  fs.writeFileSync(filePath, content);
}
console.log("Replaced images in treatments");
