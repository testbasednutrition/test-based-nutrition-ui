import os
import glob
import re

treatment_files = glob.glob('src/pages/treatments/*.tsx')

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # The block looks like:
    # <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">
    #    <Database className="w-5 h-5" />
    # </div>
    
    # We will just replace it if it's right before a Ferritin tag.
    # A safe way is to find "Database className="w-5 h-5"" and the Ferritin text.
    
    content = re.sub(
        r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-\[[^\]]+\](?:/80)?">\s*<Database[^>]+>\s*</div>\s*(<div className="flex-1 min-w-0 flex items-center">\s*<p className="font-bold text-gray-900 text-\[14px\](?: mb-1 flex justify-between items-start)?">Ferritin)',
        r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]">\n                       <img src="/images/test-logos/FERRITIN.jpeg" alt="Ferritin" className="w-full h-full object-contain rounded-full" />\n                     </div>\n                     \1',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated Ferritin logos across treatment pages!")
