import json

log_path = "/Users/user/.gemini/antigravity/brain/a2788f15-e2ab-459a-9bf9-99c54f041c63/.system_generated/logs/overview.txt"
files_state = {}

def get_str(val):
    if not val: return ""
    if isinstance(val, str) and val.startswith('"') and val.endswith('"'):
        try:
            return json.loads(val)
        except:
            pass
    return val

def apply_replace(content, target, replacement):
    target = get_str(target)
    replacement = get_str(replacement)
    if target in content:
        return content.replace(target, replacement, 1)
    return content

with open(log_path, "r") as f:
    for line in f:
        try:
            data = json.loads(line.strip())
            if data.get("created_at", "") > "2026-04-29T09:40:00Z":
                continue
                
            if "tool_calls" in data:
                for call in data["tool_calls"]:
                    args = call.get("args", {})
                    target = get_str(args.get("TargetFile", ""))
                    if not target:
                        continue
                        
                    name = call["name"]
                    if name == "write_to_file":
                        files_state[target] = get_str(args.get("CodeContent", ""))
                    elif name == "replace_file_content":
                        if target in files_state:
                            files_state[target] = apply_replace(files_state[target], args.get("TargetContent", ""), args.get("ReplacementContent", ""))
                    elif name == "multi_replace_file_content":
                        if target in files_state:
                            chunks = args.get("ReplacementChunks", [])
                            if isinstance(chunks, str):
                                chunks = json.loads(get_str(chunks))
                            for chunk in chunks:
                                files_state[target] = apply_replace(files_state[target], chunk.get("TargetContent", ""), chunk.get("ReplacementContent", ""))
        except Exception as e:
            pass

for target, content in files_state.items():
    if "MensHealth.tsx" in target or "WomensHealth.tsx" in target or "PainFatigue.tsx" in target or "SkinHealth.tsx" in target or "SportsPerformance.tsx" in target or "ChildrensHealth.tsx" in target:
        with open(target, 'w') as f:
            f.write(content)
        print("Recovered", target, len(content.split('\n')), "lines")
