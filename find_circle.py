from PIL import Image
import math

def find_circle(img_path):
    img = Image.open(img_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    width, height = img.size
    pixels = img.load()
    
    # We want to find the bounding box of pixels that are red.
    # Red pixels have high red (e.g. > 100) and low green/blue (e.g. < 80).
    left, top, right, bottom = width, height, 0, 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Red color check: r is significantly larger than g and b
            if r > 120 and g < 100 and b < 100 and a > 50:
                if x < left:
                    left = x
                if x > right:
                    right = x
                if y < top:
                    top = y
                if y > bottom:
                    bottom = y
                    
    print(f"Red circle bounds: left={left}, top={top}, right={right}, bottom={bottom}")
    print(f"Red circle width={right-left+1}, height={bottom-top+1}")

if __name__ == '__main__':
    find_circle('/Users/user/.gemini/antigravity/brain/f731acdf-8f7c-4927-882b-c105e4e3d9f9/media__1780678158946.png')
