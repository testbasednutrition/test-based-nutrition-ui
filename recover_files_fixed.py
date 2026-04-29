import json

log_path = "/Users/user/.gemini/antigravity/brain/a2788f15-e2ab-459a-9bf9-99c54f041c63/.system_generated/logs/overview.txt"
files_state = {}

def apply_replace(content, target, replacement):
    if target in content:
        return content.replace(target, replacement, 1)
    else:
        # try replacing newlines to see if it's a newline escaping issue
        target_nl = target.replace('\\n', '\n')
        replacement_nl = replacement.replace('\\n', '\n')
        if target_nl in content:
            return content.replace(target_nl, replacement_nl, 1)
        print("Failed to find target in file")
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
                    target = args.get("TargetFile", "").strip('"')
                    if not target:
                        continue
                        
                    name = call["name"]
                    if name == "write_to_file":
                        files_state[target] = args.get("CodeContent", "")
                    elif name == "replace_file_content":
                        if target in files_state:
                            files_state[target] = apply_replace(files_state[target], args.get("TargetContent", ""), args.get("ReplacementContent", ""))
                    elif name == "multi_replace_file_content":
                        if target in files_state:
                            chunks = args.get("ReplacementChunks", [])
                            if isinstance(chunks, str):
                                chunks = json.loads(chunks)
                            for chunk in chunks:
                                files_state[target] = apply_replace(files_state[target], chunk.get("TargetContent", ""), chunk.get("ReplacementContent", ""))
        except Exception as e:
            pass

for target, content in files_state.items():
    if "MensHealth.tsx" in target or "WomensHealth.tsx" in target or "PainFatigue.tsx" in target:
        with open(target, 'w') as f:
            f.write(content)
        print("Recovered", target)
