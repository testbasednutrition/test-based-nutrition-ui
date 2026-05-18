import fs from 'fs';
import path from 'path';

const treatmentsDir = path.join(process.cwd(), 'src/pages/treatments');

function processTreatments() {
  const files = fs.readdirSync(treatmentsDir);
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const filePath = path.join(treatmentsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;

      // 1. Update Trust Bar
      // From: <div className="w-full bg-[#f9f5f2] border-y border-gray-200 py-3 md:py-4 mb-2 overflow-hidden">
      // To:   <div className="w-full bg-[#dbd4c9] py-3 md:py-4 mb-2 overflow-hidden">
      if (content.includes('TRUST BAR')) {
        const original = content;
        content = content.replace(/<div className="w-full bg-\[#f9f5f2\] border-y border-gray-200 py-3/g, '<div className="w-full bg-[#dbd4c9] py-3 border-y border-[#dbd4c9]');
        // If it didn't match the exact class string, try a looser regex
        if (content === original) {
           content = content.replace(/bg-\[#f9f5f2\] border-y border-gray-200/g, 'bg-[#dbd4c9] border-y border-[#dbd4c9]');
        }
        if (content !== original) changed = true;
      }

      // 2. Update Explore Your Pathway
      // From: <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
      // To:   <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-12 pb-16 bg-[#dbd4c9] mt-10">
      if (content.includes('EXPLORE YOUR PATHWAY')) {
        const original = content;
        content = content.replace(
          /<div className="w-screen relative left-\[50%\] right-\[50%\] -ml-\[50vw\] -mr-\[50vw\] pt-2 md:pt-4">/g, 
          '<div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-12 pb-16 bg-[#dbd4c9] mt-8 mb-8">'
        );
        if (content !== original) changed = true;
      }

      // 3. Update Science section wrapper if it exists and make it distinct (maybe keep it #f9f5f2 since the parent is #f9f5f2, but wait! We can give it a top border or something, but actually alternating works because Pathways is #dbd4c9).

      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated sections in:', file);
      }
    }
  }
}

processTreatments();
