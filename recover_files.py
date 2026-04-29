import json
import os

log_path = "/Users/user/.gemini/antigravity/brain/a2788f15-e2ab-459a-9bf9-99c54f041c63/.system_generated/logs/overview.txt"
files_state = {}

# We will replay the edits onto our internal strings.
# For replace_file_content:
def apply_replace(content, start, end, target, replacement):
    # This is an approximation since we don't have the exact engine.
    # Actually, replacing the exact target string is safer!
    if target in content:
        return content.replace(target, replacement, 1)
    else:
        print(f"Failed to find target in {start}-{end}")
        return content

with open(log_path, "r") as f:
    for line in f:
        try:
            data = json.loads(line.strip())
            # Stop if we hit our own turn today at 09:40Z or later
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
                        files_state[target] = args.get("CodeContent", "").strip('"').replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                    elif name == "replace_file_content":
                        if target in files_state:
                            target_str = args.get("TargetContent", "").strip('"').replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                            repl_str = args.get("ReplacementContent", "").strip('"').replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                            files_state[target] = apply_replace(files_state[target], args.get("StartLine"), args.get("EndLine"), target_str, repl_str)
                    elif name == "multi_replace_file_content":
                        if target in files_state:
                            chunks = args.get("ReplacementChunks", [])
                            # Handle stringified JSON chunks
                            if isinstance(chunks, str):
                                import ast
                                # the logs might have stringified it
                                chunks = json.loads(chunks.strip('"').replace('\\"', '"'))
                            for chunk in chunks:
                                target_str = chunk.get("TargetContent", "").replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                                repl_str = chunk.get("ReplacementContent", "").replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                                files_state[target] = apply_replace(files_state[target], chunk.get("StartLine"), chunk.get("EndLine"), target_str, repl_str)
                                
        except Exception as e:
            pass

for target, content in files_state.items():
    if "MensHealth.tsx" in target or "WomensHealth.tsx" in target or "PainFatigue.tsx" in target:
        with open(target, 'w') as f:
            f.write(content)
        print("Recovered", target)

