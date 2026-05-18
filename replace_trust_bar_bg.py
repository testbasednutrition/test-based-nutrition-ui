import glob

files = glob.glob('src/pages/treatments/*.tsx')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if '<div className="w-full bg-[#f9f5f2] py-3 border-y border-gray-200 md:py-4 overflow-hidden">' in content:
        new_content = content.replace(
            '<div className="w-full bg-[#f9f5f2] py-3 border-y border-gray-200 md:py-4 overflow-hidden">',
            '<div className="w-full bg-background py-3 border-y border-[#dbd4c9]/40 md:py-4 overflow-hidden">'
        )
        with open(f, 'w') as file:
            file.write(new_content)
        print(f"Updated {f}")
