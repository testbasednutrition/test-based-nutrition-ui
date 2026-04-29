import glob

filepath = 'src/pages/treatments/SportsPerformance.tsx'
replacements = {
    "Vitamin D": "vitamind.png",
}

with open(filepath, 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm' in line:
        print("Found wrapper at line", i)
        for j in range(1, 6):
            if i + j < len(lines):
                lookahead = lines[i+j]
                if '<p className="font-bold text-gray-900 text-[14px]' in lookahead:
                    print("Found p tag at line", i+j, lookahead.strip())
                    for test_name in replacements.keys():
                        if ">" + test_name in lookahead:
                            print("Found test match!", test_name)
