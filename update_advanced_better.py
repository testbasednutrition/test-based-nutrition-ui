import glob

treatment_files = glob.glob('src/pages/treatments/*.tsx')

replacements = {
    "Vitamin D": "vitamind.png",
    "HbA1c": "hba1c.png",
    "Ferritin": "ferritin.png",
    "Cortisol": "cortisol.png",
    "Folate": "folate.png",
    "Cystatin C": "cystatin.png",
    "CRP / hs-CRP": "crp.png",
    "Testosterone": "testosterone.png",
    "Vitamin B12": "vitaminb12.png",
    "TSH (Thyroid)": "tsh.png"
}

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        lines = f.readlines()

    out_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line is the icon wrapper start
        if '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm' in line:
            # We found the wrapper. Look ahead 1-5 lines to find the test name
            found_test = None
            found_test_name = None
            for j in range(1, 6):
                if i + j < len(lines):
                    lookahead = lines[i+j]
                    if '<p className="font-bold text-gray-900 text-[14px]' in lookahead:
                        for test_name in replacements.keys():
                            if ">" + test_name in lookahead:
                                found_test = replacements[test_name]
                                found_test_name = test_name
                                break
                        break
            
            if found_test:
                # We know which test this is!
                # Replace the icon div with the image
                indent = line[:len(line) - len(line.lstrip())]
                out_lines.append(f'{indent}<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]">\n')
                out_lines.append(f'{indent}  <img src="/images/test-logos/{found_test}" alt="{found_test_name}" className="w-full h-full object-contain rounded-full" />\n')
                out_lines.append(f'{indent}</div>\n')
                
                # Skip the old icon lines
                while '</div>' not in lines[i]:
                    i += 1
                i += 1 # skip the </div> line
                continue
        
        out_lines.append(line)
        i += 1

    with open(filepath, 'w') as f:
        f.writelines(out_lines)

print("Updated advanced care tests robustly!")
