import glob
import re

files = glob.glob('src/pages/treatments/*.tsx')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Advanced Screening Circles: Increase size and remove padding, add slight scale to hide borders
    # 1. White circles (Red / Standard)
    content = re.sub(
        r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">',
        r'<div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">',
        content
    )
    # 2. Blue circles
    content = re.sub(
        r'<div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">',
        r'<div className="w-12 h-12 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">',
        content
    )

    # Make images scale up to eliminate white borders
    content = re.sub(
        r'className="w-full h-full object-contain rounded-full"',
        r'className="w-full h-full object-contain rounded-full scale-[1.15]"',
        content
    )

    # Foundational & Core Pillars (Squares with rounded corners)
    content = re.sub(
        r'<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-\[#e9e7dc\] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-1">',
        r'<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-0">',
        content
    )
    content = re.sub(
        r'<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">',
        r'<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">',
        content
    )

    # Scale for the square images
    content = re.sub(
        r'className="w-full h-full object-contain" />',
        r'className="w-full h-full object-contain scale-[1.15]" />',
        content
    )


    with open(filepath, 'w') as f:
        f.write(content)

print("Updated sizes in all treatment pages.")
