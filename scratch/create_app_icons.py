import os
from PIL import Image, ImageDraw, ImageFont

def draw_tbn_app_icon(size):
    # Create RGBA image
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Background: Pure White (#FFFFFF)
    bg_color = (255, 255, 255, 255)
    
    # Fill background
    draw.rectangle([0, 0, size, size], fill=bg_color)

    # Colors
    black_color = (0, 0, 0, 255)
    red_color = (159, 30, 19, 255)
    
    # Scaled coordinates based on size
    center_x = size * 0.42
    center_y = size * 0.44
    radius = size * 0.26
    stroke_w = max(1, int(size * 0.12))

    # Outer circle (Black Ring)
    left = center_x - radius
    top = center_y - radius
    right = center_x + radius
    bottom = center_y + radius
    
    # Draw thick black ring stroke
    draw.ellipse([left, top, right, bottom], outline=black_color, width=stroke_w)

    # The Solid Red Accent Dot (Bottom Right)
    dot_x = size * 0.78
    dot_y = size * 0.74
    dot_r = size * 0.105

    draw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=red_color)

    return img

def main():
    public_dir = "/Users/user/testbasedweb/test-based-nutrition-ui/public"
    
    # Generate 180x180 for iOS Apple Touch Icon
    icon_180 = draw_tbn_app_icon(180)
    icon_180.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")
    
    # Generate 192x192 for Android Home Screen Icon
    icon_192 = draw_tbn_app_icon(192)
    icon_192.save(os.path.join(public_dir, "icon-192.png"), "PNG")

    # Generate 512x512 for HD PWA Home Screen Icon
    icon_512 = draw_tbn_app_icon(512)
    icon_512.save(os.path.join(public_dir, "icon-512.png"), "PNG")

    print("App icons successfully created in public directory!")

if __name__ == "__main__":
    main()
