import sys

file_path = '/Users/user/testbasedweb/test-based-nutrition-ui/src/pages/treatments/SportsPerformance.tsx'
with open(file_path, 'r') as f:
    content = f.read()

start_marker = "{/* SECTION 3 — EXPLORE YOUR PATHWAY */}"
end_marker = "        {/* SECTION 7.5 — THE SCIENCE BEHIND PERFORMANCE */}"

start_index = content.find(start_marker)
end_index = content.find(end_marker, start_index)

if start_index == -1 or end_index == -1:
    print("Markers not found")
    sys.exit(1)

chunk = content[start_index:end_index]
content = content[:start_index] + content[end_index:]

insert_marker = "{/* SECTION 2 — SPECIALIST LEADS */}"
insert_index = content.find(insert_marker)

if insert_index == -1:
    print("Insert marker not found")
    sys.exit(1)

chunk = chunk.replace("{/* SECTION 3 — EXPLORE YOUR PATHWAY */}", "{/* SECTION 2 — EXPLORE YOUR PATHWAY */}\n        <div className=\"pt-8 lg:pt-10\"></div>")
content = content[:insert_index] + chunk + content[insert_index:].replace("{/* SECTION 2 — SPECIALIST LEADS */}", "{/* SECTION 3 — SPECIALIST LEADS */}")

with open(file_path, 'w') as f:
    f.write(content)

print("Move successful")
