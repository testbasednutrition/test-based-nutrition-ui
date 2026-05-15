import os
import re

directory = "/Users/user/testbasedweb/test-based-nutrition-ui/src"

replacements = {
    # Reds
    r"#7a2a33": "#9f1e13",
    r"#7A2A33": "#9f1e13",
    r"#5c1c24": "#80180f", # Hover state
    r"#5a1a23": "#80180f", # Hover state
    
    # Background / Light Creams
    r"#fcfaf7": "#f9f5f2",
    r"#FCFAF7": "#f9f5f2",
    r"#f8f5f0": "#f9f5f2",
    r"#F8F5F0": "#f9f5f2",
    r"#f2f0e6": "#dbd4c9",
    
    # Dark Creams / Borders
    r"#e9e7dc": "#dbd4c9",
    r"#E9E7DC": "#dbd4c9",
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".css"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = re.sub(old, new, new_content)
                
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
print("Colors replaced successfully")
