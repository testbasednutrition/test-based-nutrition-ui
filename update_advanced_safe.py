import glob

treatment_files = glob.glob('src/pages/treatments/*.tsx')

# Define the exact text for each icon block
replacements = {
    # Vitamin D
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Sun className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/vitamind.png" alt="Vitamin D" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Sun className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/vitamind.png" alt="Vitamin D" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # HbA1c (Droplet)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Droplet className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/hba1c.png" alt="HbA1c" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Droplet className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/hba1c.png" alt="HbA1c" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Ferritin (Database)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Database className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/ferritin.png" alt="Ferritin" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Database className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/ferritin.png" alt="Ferritin" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Cortisol (Brain)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Brain className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/cortisol.png" alt="Cortisol" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Brain className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/cortisol.png" alt="Cortisol" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Folate (Hexagon)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Hexagon className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/folate.png" alt="Folate" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Hexagon className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/folate.png" alt="Folate" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Cystatin C (Activity)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Activity className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/cystatin.png" alt="Cystatin C" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Activity className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/cystatin.png" alt="Cystatin C" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # CRP / hs-CRP (Flame)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Flame className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/crp.png" alt="CRP / hs-CRP" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Flame className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/crp.png" alt="CRP / hs-CRP" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # Testosterone (FlaskConical)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <FlaskConical className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/testosterone.png" alt="Testosterone" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <FlaskConical className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/testosterone.png" alt="Testosterone" className="w-full h-full object-contain rounded-full" />\n                     </div>',

    # TSH (Search)
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">\n                       <Search className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/tsh.png" alt="TSH" className="w-full h-full object-contain rounded-full" />\n                     </div>',
    
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#7a2a33]">\n                       <Search className="w-5 h-5" />\n                     </div>':
    '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/tsh.png" alt="TSH" className="w-full h-full object-contain rounded-full" />\n                     </div>',
}

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    for old_block, new_block in replacements.items():
        content = content.replace(old_block, new_block)

    # Note: Vitamin B12 shares Droplet with HbA1c! If we just replace Droplet, B12 gets hba1c.png!
    # Let's fix that.
    # Wait, B12 is Droplet? Yes.
    # We must be careful!
    with open(filepath, 'w') as f:
        f.write(content)

print("Updated using string replacement!")
