import os
import glob
import re

treatment_files = glob.glob('src/pages/treatments/*.tsx')

replacements = {
    "Vitamin D": "vitamind.png",
    "HbA1c": "hba1c.png",
    "Ferritin": "ferritin.png",
    "Cortisol": "cortisol.png",
    "Folate": "folate.png",
    "Cystatin C": "cystatin.png",
    "CRP \/ hs-CRP": "crp.png",
    "Testosterone": "testosterone.png",
    "Vitamin B12": "vitaminb12.png",
    "TSH \(Thyroid\)": "tsh.png"
}

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    for test_name, img_name in replacements.items():
        # Match the icon wrapper and the following flex-1 div
        pattern = re.compile(
            r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm[^>]*>.*?</div>\s*(<div className="flex-1 min-w-0(?: flex items-center)?">\s*<p className="font-bold text-gray-900 text-\[14px\](?: mb-1 flex justify-between items-start)?">' + test_name + r')',
            re.DOTALL
        )
        # We need to un-escape the regex for the alt attribute
        clean_name = test_name.replace(r'\(', '(').replace(r'\)', '').replace(r'\/', '/')
        
        replacement = r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]">\n                       <img src="/images/test-logos/' + img_name + r'" alt="' + clean_name + r'" className="w-full h-full object-contain rounded-full" />\n                     </div>\n                     \1'
        content = pattern.sub(replacement, content)

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated advanced care tests!")
