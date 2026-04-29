import glob
import re

files = glob.glob('src/pages/treatments/*.tsx')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Replacements
    content = content.replace('cellular.jpeg', 'cellular.png')
    content = content.replace('inflammation.jpeg', 'inflammation.png')
    content = content.replace('gut.jpeg', 'gut.png')
    content = content.replace('metabolic.jpeg', 'metabolic.png')
    content = content.replace('hormone.jpeg', 'hormone.png')
    content = content.replace('focus.jpeg', 'focus.png')

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated pillar logos to .png")
