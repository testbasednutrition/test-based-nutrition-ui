import os
import re
from PIL import Image

PUBLIC_DIR = "public"
SRC_DIR = "src"

def convert_images():
    total_orig_size = 0
    total_new_size = 0
    converted_map = {}

    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg'] and not f.endswith('.webp'):
                full_path = os.path.join(root, f)
                size_bytes = os.path.getsize(full_path)
                
                # Only convert images > 150 KB
                if size_bytes > 150 * 1024:
                    rel_dir = root
                    base_name = os.path.splitext(f)[0]
                    webp_path = os.path.join(rel_dir, base_name + ".webp")
                    
                    try:
                        with Image.open(full_path) as img:
                            # Convert RGBA/P mode if saving to WebP
                            if img.mode in ("RGBA", "P"):
                                img = img.convert("RGBA")
                            else:
                                img = img.convert("RGB")
                            
                            img.save(webp_path, "WEBP", quality=82, optimize=True)
                            
                            new_size = os.path.getsize(webp_path)
                            total_orig_size += size_bytes
                            total_new_size += new_size
                            
                            rel_orig = full_path.replace("public/", "").replace("public\\", "")
                            rel_webp = webp_path.replace("public/", "").replace("public\\", "")
                            converted_map[rel_orig] = rel_webp
                            
                            print(f"Converted: {rel_orig} ({size_bytes/1024:.1f} KB) -> {rel_webp} ({new_size/1024:.1f} KB)")
                    except Exception as e:
                        print(f"Failed to convert {full_path}: {e}")

    saved_mb = (total_orig_size - total_new_size) / (1024 * 1024)
    print("\n--- Image Conversion Summary ---")
    print(f"Original Total: {total_orig_size / (1024*1024):.2f} MB")
    print(f"Optimized WebP Total: {total_new_size / (1024*1024):.2f} MB")
    print(f"Total Bandwidth Saved: {saved_mb:.2f} MB")

    return converted_map

def update_references(converted_map):
    if not converted_map:
        return

    print("\n--- Updating Codebase Image References ---")
    for root, dirs, files in os.walk(SRC_DIR):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css')):
                file_path = os.path.join(root, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
                    content = file.read()

                modified = False
                for orig, webp in converted_map.items():
                    # Replace paths like /experts/2.png -> /experts/2.webp
                    orig_ref = "/" + orig
                    webp_ref = "/" + webp
                    if orig_ref in content:
                        content = content.replace(orig_ref, webp_ref)
                        modified = True
                        print(f"Updated reference in {file_path}: {orig_ref} -> {webp_ref}")
                    
                    # Also check without leading slash
                    if orig in content and orig_ref not in content:
                        content = content.replace(orig, webp)
                        modified = True
                        print(f"Updated reference in {file_path}: {orig} -> {webp}")

                if modified:
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.write(content)

if __name__ == "__main__":
    mapped = convert_images()
    update_references(mapped)
