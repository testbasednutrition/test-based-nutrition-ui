import os
import glob
import re

treatment_files = glob.glob('src/pages/treatments/*.tsx')

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Cellular Health (Microscope)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<Microscope[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/cellular.jpeg" alt="Cellular Health" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 2. Inflammation & Recovery (HeartPulse)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<HeartPulse[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/inflammation.jpeg" alt="Inflammation & Recovery" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 3. Gut Health & Absorption (Leaf - Box 3)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<Leaf[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/gut.jpeg" alt="Gut Health & Absorption" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 4. Metabolic Function (Zap)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<Zap[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/metabolic.jpeg" alt="Metabolic Function" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 5. Hormonal & Stress Response (Activity - Box 5)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<Activity[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/hormone.jpeg" alt="Hormonal & Stress Response" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 6. Focus & Cognitive Performance (Brain - Box 6)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300">\s*<Brain[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/focus.jpeg" alt="Focus & Cognitive Performance" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 7. Omega Balance Test (Activity - Foundational 1)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300 shrink-0">\s*<Activity[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-1">\n                  <img src="/images/test-logos/omega3.jpeg" alt="Omega Balance Test" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 8. Gut Microbiome Test (Leaf - Foundational 2)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center border border-\[#e9e7dc\] group-hover:bg-\[#7a2a33\] group-hover:border-\[#7a2a33\] transition-colors duration-300 shrink-0">\s*<Leaf[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-1">\n                  <img src="/images/test-logos/guthealth.jpeg" alt="Gut Microbiome Test" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 9. Ferritin (Advanced Care)
    content = re.sub(
        r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\s*<Database[^>]+>\s*</div>\s*(<div className="flex-1 min-w-0">\s*<p className="font-bold text-gray-900 text-\[14px\] mb-1 flex justify-between items-start">Ferritin)',
        r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]">\n                       <img src="/images/test-logos/FERRITIN.jpeg" alt="Ferritin" className="w-full h-full object-contain rounded-full" />\n                     </div>\n                     \1',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated logos across treatment pages!")
