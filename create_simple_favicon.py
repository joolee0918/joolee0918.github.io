from PIL import Image

# Load origin.png
img = Image.open('public/origin.png')

print(f"Original: {img.size}, {img.mode}")

# Convert to RGB (no transparency)
if img.mode == 'RGBA':
    # Create white background
    background = Image.new('RGB', img.size, (255, 255, 255))
    background.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)
    img = background
elif img.mode != 'RGB':
    img = img.convert('RGB')

# Simple resize to 256x256
img_resized = img.resize((256, 256), Image.LANCZOS)

# Save as PNG
img_resized.save('public/favicon.png', 'PNG', optimize=True, compress_level=9)

print(f"Created simple favicon: {img_resized.size}, RGB mode")
print("No circular mask, no transparency - just the square image")
