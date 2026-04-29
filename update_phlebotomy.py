import glob

treatment_files = glob.glob('src/pages/treatments/*.tsx')

# Define the exact text for each icon block (blue versions)
replacements = {
    # Testosterone (FlaskConical)
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">\n                       <FlaskConical className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/testosterone.png" alt="Testosterone" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <FlaskConical className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/testosterone.png" alt="Testosterone" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Vitamin B12 (Droplet)
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">\n                       <Droplet className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/vitaminb12.png" alt="Vitamin B12" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Droplet className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/vitaminb12.png" alt="Vitamin B12" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # TSH (Search)
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">\n                       <Search className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/tsh.png" alt="TSH" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Search className="w-5 h-5 fill-current opacity-70" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/tsh.png" alt="TSH" className="w-full h-full object-contain rounded-full" />\n                     </div>',
}

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    for old_block, new_block in replacements.items():
        content = content.replace(old_block, new_block)

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated phlebotomy tests!")
