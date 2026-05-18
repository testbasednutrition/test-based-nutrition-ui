import os
import glob

trust_bar_content = """      {/* TRUST BAR */}
      <div className="w-full bg-[#f9f5f2] py-3 border-y border-gray-200 md:py-4 overflow-hidden">
        <div className="w-full px-4 sm:px-8 flex flex-nowrap justify-start sm:justify-center gap-6 md:gap-12 text-[12px] sm:text-[13px] md:text-sm tracking-tight sm:tracking-normal text-gray-500 whitespace-nowrap overflow-x-auto mx-auto max-w-[1440px] font-sans">
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Foundational Testing
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Rapid Point-of-Care Testing
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Expert-Led Protocols
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Personalised Preventative Programmes
          </span>
        </div>
      </div>"""

files = glob.glob('src/pages/treatments/*.tsx')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # We want to replace the whole TRUST BAR section.
    # It starts with {/* TRUST BAR */}
    # and ends with the </div> that comes before <main
    start_str = "{/* TRUST BAR */}"
    end_str = "      <main "
    
    start_idx = content.find(start_str)
    end_idx = content.find(end_str)
    
    if start_idx != -1 and end_idx != -1:
        # Include spaces before the start_str to align it properly
        start_pos = content.rfind('\n', 0, start_idx) + 1
        new_content = content[:start_pos] + trust_bar_content + "\n\n" + content[end_idx:]
        
        with open(f, 'w') as file:
            file.write(new_content)
        print(f"Updated {f}")
    else:
        print(f"Could not find TRUST BAR or main in {f}")
