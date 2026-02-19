from PIL import Image

# Load the current favicon
img = Image.open('public/favicon.png')

print(f"Original size: {img.size}")
print(f"Original mode: {img.mode}")

# Save with maximum compression
img.save('public/favicon.png', 'PNG', optimize=True, compress_level=9)

print("Optimized favicon.png with maximum compression")
