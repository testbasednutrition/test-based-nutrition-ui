import os
import zipfile

ZIP_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/All_Partner_Logos.zip"
LOGOS_DIR = "/Users/user/testbasedweb/test-based-nutrition-ui/public/logos"

def package_logos():
    with zipfile.ZipFile(ZIP_OUTPUT_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(LOGOS_DIR):
            for file in files:
                if file.endswith(('.png', '.webp', '.jpg', '.jpeg', '.svg')):
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, LOGOS_DIR)
                    zipf.write(full_path, arcname=rel_path)
                    print(f"Added to ZIP: {rel_path}")

    print(f"Successfully generated ZIP archive: {ZIP_OUTPUT_PATH}")

if __name__ == "__main__":
    package_logos()
