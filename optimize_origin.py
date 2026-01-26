from PIL import Image

# Load the origin.png file
img = Image.open('public/origin.png')

print(f"Original size: {img.size}")
print(f"Original mode: {img.mode}")
print(f"Original file size: 3.8MB")

# Resize to a more reasonable size for favicon (256x256)
img_resized = img.resize((256, 256), Image.LANCZOS)

# Save with maximum compression
img_resized.save('public/favicon.png', 'PNG', optimize=True, compress_level=9)

print(f"\nOptimized and saved to public/favicon.png")
print(f"New size: {img_resized.size}")
