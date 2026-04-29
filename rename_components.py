import os

files = {
    'src/pages/treatments/MensHealth.tsx': ('SportsPerformance', 'MensHealth'),
    'src/pages/treatments/WomensHealth.tsx': ('SportsPerformance', 'WomensHealth'),
    'src/pages/treatments/PainFatigue.tsx': ('SportsPerformance', 'PainFatigue')
}

for filepath, (old_name, new_name) in files.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the component name
    content = content.replace(f'const {old_name} = () =>', f'const {new_name} = () =>')
    content = content.replace(f'export default {old_name};', f'export default {new_name};')
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Renamed components!")
