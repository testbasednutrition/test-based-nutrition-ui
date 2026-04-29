import os

files = {
    'src/pages/treatments/MensHealth.tsx': ('/images/sports/hero.jpg', '@/assets/treatments/mens-health.jpg'),
    'src/pages/treatments/WomensHealth.tsx': ('/images/sports/hero.jpg', '@/assets/treatments/womens-health.jpg'),
    'src/pages/treatments/PainFatigue.tsx': ('/images/sports/hero.jpg', '@/assets/treatments/anti-ageing.jpg')
}

for filepath, (old_img, new_img) in files.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We need to change `const heroImg = "/images/sports/hero.jpg";`
    # to `import heroImg from "@/assets/treatments/womens-health.jpg";`
    
    content = content.replace(f'const heroImg = "{old_img}";', f'import heroImg from "{new_img}";')
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Patched images!")
