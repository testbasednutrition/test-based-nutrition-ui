import re

content = """                  {/* Vitamin D */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Sun className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Vitamin D <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">8 MINS</span></p>"""

test_name = "Vitamin D"
pattern = re.compile(
    r'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm[^>]*>.*?</div>\s*(<div className="flex-1 min-w-0(?: flex items-center)?">\s*<p className="font-bold text-gray-900 text-\[14px\](?: mb-1 flex justify-between items-start)?">' + test_name + r')',
    re.DOTALL
)

print(pattern.findall(content))
