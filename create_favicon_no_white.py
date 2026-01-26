from PIL import Image
import numpy as np

# Load origin.png (it's a circle with transparent background)
img = Image.open('public/origin.png')

print(f"Original: {img.size}, {img.mode}")

# If RGBA, find the bounding box of non-transparent pixels to crop tightly
if img.mode == 'RGBA':
    # Get alpha channel
    alpha = np.array(img.split()[3])

    # Find non-transparent pixels
    rows = np.any(alpha > 0, axis=1)
    cols = np.any(alpha > 0, axis=0)

    # Get bounding box
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]

    # Crop to bounding box
    img_cropped = img.crop((xmin, ymin, xmax + 1, ymax + 1))

    print(f"Cropped to: {img_cropped.size}")

    # Resize to 256x256 keeping RGBA (with transparency)
    img_resized = img_cropped.resize((256, 256), Image.LANCZOS)
else:
    # If already RGB, just resize
    img_resized = img.resize((256, 256), Image.LANCZOS)

# Save as PNG with transparency preserved (RGBA mode)
img_resized.save('public/favicon.png', 'PNG', optimize=True, compress_level=9)

print(f"Saved favicon: {img_resized.size}, {img_resized.mode}")
print("Kept transparency - no white background added!")
