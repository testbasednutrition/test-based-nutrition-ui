from PIL import Image

def analyze_logo_bounds(img_path):
    img = Image.open(img_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    width, height = img.size
    pixels = img.load()
    
    left, top, right, bottom = width, height, 0, 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Detect any non-transparent pixel (alpha > 10)
            if a > 10:
                if x < left:
                    left = x
                if x > right:
                    right = x
                if y < top:
                    top = y
                if y > bottom:
                    bottom = y
                    
    print(f"File: {img_path}")
    print(f"Image Size: {img.size}")
    print(f"Non-transparent bounds: left={left}, top={top}, right={right}, bottom={bottom}")
    print(f"Non-transparent width={right-left+1}, height={bottom-top+1}")
    print(f"Ratio of circle width to image width: {(right-left+1)/width:.2f}")
    print("-" * 40)

if __name__ == '__main__':
    analyze_logo_bounds('/Users/user/testbasedweb/test-based-nutrition-ui/public/images/test-logos/omega3balance.png')
    analyze_logo_bounds('/Users/user/testbasedweb/test-based-nutrition-ui/public/images/test-logos/cortisol.png')
    analyze_logo_bounds('/Users/user/testbasedweb/test-based-nutrition-ui/public/images/test-logos/fsh.png')
