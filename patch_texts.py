import os

files = {
    'src/pages/treatments/MensHealth.tsx': ('Sports Performance', "Men's Health"),
    'src/pages/treatments/WomensHealth.tsx': ('Sports Performance', "Women's Health"),
    'src/pages/treatments/PainFatigue.tsx': ('Sports Performance', 'Pain & Fatigue')
}

for filepath, (old, new) in files.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Generic replacements
    content = content.replace(old, new)
    content = content.replace(old.upper(), new.upper())
    
    # Hero Title replacements (if any specific)
    if new == "Men's Health":
        content = content.replace("THE SCIENCE BEHIND PERFORMANCE", "THE SYSTEM BEHIND MEN'S HEALTH CONCERNS")
    elif new == "Women's Health":
        content = content.replace("THE SCIENCE BEHIND PERFORMANCE", "THE SCIENCE BEHIND WOMEN'S HEALTH")
    elif new == "Pain & Fatigue":
        content = content.replace("THE SCIENCE BEHIND PERFORMANCE", "THE SCIENCE BEHIND PAIN & FATIGUE")
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Patched texts!")
