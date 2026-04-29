import glob
import re

treatment_files = glob.glob('src/pages/treatments/*.tsx')

for filepath in treatment_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Cellular Health (Microscope)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<Microscope[^>]+>\s*</div>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/cellular.jpeg" alt="Cellular Health" className="w-full h-full object-contain" />\n                </div>',
        content
    )

    # 2. Inflammation & Recovery (HeartPulse / Activity)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<(HeartPulse|Activity)[^>]+>\s*</div>\s*<h3[^>]+>(Inflammation|Inflammatory)[^<]*</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/inflammation.jpeg" alt="Inflammation & Recovery" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">\g<2></h3>',
        content
    )

    # 3. Nutrient Availability / Gut Health (Leaf)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<Leaf[^>]+>\s*</div>\s*<h3[^>]+>(Nutrient Availability|Gut Health)[^<]*</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/gut.jpeg" alt="\g<1>" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">\g<1></h3>',
        content
    )

    # 4. Metabolic Function / Hormonal Signalling (Zap / Droplet)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<(Zap|Droplet)[^>]+>\s*</div>\s*<h3[^>]+>(Metabolic Function|Hormonal Signalling)[^<]*</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/metabolic.jpeg" alt="\g<2>" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">\g<2></h3>',
        content
    )

    # 5. Hormonal Balance (Activity / Sparkles)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<(Activity|Sparkles)[^>]+>\s*</div>\s*<h3[^>]+>(Hormonal Balance|Hormonal & Stress Response)[^<]*</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/hormone.jpeg" alt="\g<2>" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">\g<2></h3>',
        content
    )

    # 6. Gut & Immune Activity / Focus (Search / Brain)
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center mb-6 border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300">\s*<(Search|Brain)[^>]+>\s*</div>\s*<h3[^>]+>(Gut & Immune Activity|Focus & Cognitive Performance)[^<]*</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-1">\n                   <img src="/images/test-logos/focus.jpeg" alt="\g<2>" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">\g<2></h3>',
        content
    )

    # Foundational Tests
    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300 shrink-0">\s*<Activity[^>]+>\s*</div>\s*<h3[^>]+>Omega Balance<br/>Test</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-1">\n                  <img src="/images/test-logos/omega3.jpeg" alt="Omega Balance Test" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Omega Balance<br/>Test</h3>',
        content
    )

    content = re.sub(
        r'<div className="w-14 h-14 bg-\[#fcfaf7\] rounded-2xl flex items-center justify-center border border-\[#e9e7dc\] group-hover:bg-\[[^\]]+\] group-hover:border-\[[^\]]+\] transition-colors duration-300 shrink-0">\s*<Leaf[^>]+>\s*</div>\s*<h3[^>]+>Gut Microbiome<br/>Test</h3>',
        '<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-1">\n                  <img src="/images/test-logos/guthealth.jpeg" alt="Gut Microbiome Test" className="w-full h-full object-contain" />\n                </div>\n                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>',
        content
    )

    # Advanced Testing (Small circular logos)
    icons = {
        'Vitamin D': ('Sun', 'vitamind.png'),
        'HbA1c': ('Droplet', 'hba1c.png'),
        'Ferritin': ('Database', 'ferritin.png'),
        'CRP / hs-CRP': ('Flame', 'crp.png'),
        'Cortisol': ('Brain', 'cortisol.png'),
        'Folate': ('Hexagon', 'folate.png'),
        'Cystatin C': ('Activity', 'cystatin.png'),
        'Testosterone': ('FlaskConical', 'testosterone.png'),
        'Thyroid (TSH)': ('Search', 'tsh.png'),
    }

    for name, (icon_comp, img_name) in icons.items():
        content = re.sub(
            fr'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[^"]+">\s*<{icon_comp}[^>]*>\s*</div>\s*(<div className="flex-1 min-w-0">\s*<p className="font-bold text-gray-900 text-\[14px\] mb-1 flex justify-between items-start">{re.escape(name)}|<div className="flex-1 min-w-0 flex items-center h-10">\s*<p className="font-bold text-gray-900 text-\[14px\] leading-tight mt-0\.5">{re.escape(name)})',
            fr'<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">\n                       <img src="/images/test-logos/{img_name}" alt="{name}" className="w-full h-full object-contain rounded-full" />\n                     </div>\n                     \g<1>',
            content
        )

    with open(filepath, 'w') as f:
        f.write(content)

print("Applied logos everywhere!")
