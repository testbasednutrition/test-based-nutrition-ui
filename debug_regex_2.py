import os
import glob
import re

filepath = 'src/pages/treatments/SportsPerformance.tsx'
with open(filepath, 'r') as f:
    content = f.read()

test_name = "Vitamin D"
img_name = "vitamind.png"

pattern = re.compile(
    r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm[^>]*>.*?</div>\s*(<div className="flex-1 min-w-0(?: flex items-center)?">\s*<p className="font-bold text-gray-900 text-\[14px\](?: mb-1 flex justify-between items-start)?">' + test_name + r')',
    re.DOTALL
)

print(len(pattern.findall(content)))
replacement = r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]">\n                       <img src="/images/test-logos/' + img_name + r'" alt="' + test_name + r'" className="w-full h-full object-contain rounded-full" />\n                     </div>\n                     \1'
new_content = pattern.sub(replacement, content)

print("Changed:", content != new_content)
