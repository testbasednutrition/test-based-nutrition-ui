import fs from 'fs';

const filePath = '/Users/user/testbasedweb/test-based-nutrition-ui/src/pages/treatments/SportsPerformance.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Chunk 1: Items stretch
content = content.replace(
  '<div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">',
  '<div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">'
);

// Chunk 2: Left column wrapper
content = content.replace(
  '<div className="w-full lg:flex-1 bg-[#1c1c1c] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">',
  '<div className="w-full lg:flex-1 bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">'
);

// Background Icon color
content = content.replace(
  '<Users className="w-64 h-64 text-white -mr-16 -mt-16"/>',
  '<Users className="w-64 h-64 text-[#7a2a33] -mr-16 -mt-16"/>'
);

// Text colors
content = content.replace('text-[#d0bfae] text-[13px] uppercase tracking-widest mb-4">Partner With Us</p>', 'text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">Partner With Us</p>');
content = content.replace('font-bold text-white leading-tight mb-6">\n                                TBN operates inside real environments', 'font-bold text-gray-900 leading-tight mb-6">\n                                TBN operates inside real environments');
content = content.replace('text-white/80 mb-10">\n                                — embedding structured testing, specialist insight, and performance systems into existing services.', 'text-gray-600 mb-10">\n                                — embedding structured testing, specialist insight, and performance systems into existing services.');
content = content.replace('font-bold text-white text-[13px] uppercase tracking-widest mb-4">Partner With TBN</p>', 'font-bold text-gray-900 text-[13px] uppercase tracking-widest mb-4">Partner With TBN</p>');

// Buttons
content = content.replace(
  '<button className="flex-1 bg-white text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-sm text-center">',
  '<button className="flex-1 bg-[#7a2a33] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm text-center">'
);
content = content.replace(
  '<button className="flex-1 bg-transparent border border-white/20 text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-white/10 transition-colors text-center">',
  '<button className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center">'
);

// Right side "What This Delivers"
content = content.replace('font-bold text-white mb-6 xl:mt-1">What This Delivers</h3>', 'font-bold text-gray-900 mb-6 xl:mt-1">What This Delivers</h3>');
content = content.replace('<CheckCircle2 className="w-5 h-5 text-[#d0bfae] shrink-0 mt-0.5" />', '<CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" />');
// Note: replaceAll for the tick marks
content = content.split('<CheckCircle2 className="w-5 h-5 text-[#d0bfae] shrink-0 mt-0.5" />').join('<CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" />');
content = content.split('<span className="text-[14px] leading-snug font-medium text-white/90">').join('<span className="text-[14px] leading-snug font-medium text-gray-700">');

// Removing icons from the right column
const icon1 = `                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 relative z-10 shrink-0">
                       <Search className="w-6 h-6 text-[#7a2a33]" strokeWidth={2.5}/>
                    </div>`;
                    
const icon2 = `                    <div className="w-14 h-14 bg-[#fcfaf7] border border-[#e9e7dc] rounded-2xl flex items-center justify-center shadow-sm mb-6 relative z-10 shrink-0">
                       <FileText className="w-6 h-6 text-gray-900" strokeWidth={2.5}/>
                    </div>`;

content = content.replace(icon1, "");
content = content.replace(icon2, "");


fs.writeFileSync(filePath, content);
console.log("Done");
