from PIL import Image, ImageDraw, ImageFilter
import numpy as np

# Load the image
img_path = 'public/image11.jpeg'
img = Image.open(img_path).convert('RGB')

# Get dimensions and create square crop from center
width, height = img.size
size = min(width, height)
left = (width - size) // 2
top = (height - size) // 2
right = left + size
bottom = top + size

img_cropped = img.crop((left, top, right, bottom))

# Resize to 256x256
favicon_size = 256
img_cropped = img_cropped.resize((favicon_size, favicon_size), Image.LANCZOS)

# Create RGBA image
img_rgba = img_cropped.convert('RGBA')
datas = img_rgba.getdata()

# Create circular mask with smooth anti-aliasing
# Use higher resolution for better quality
supersample = 8
big_size = favicon_size * supersample

# Create large mask
mask_big = Image.new('L', (big_size, big_size), 0)
draw = ImageDraw.Draw(mask_big)

# Draw slightly smaller circle to avoid edge artifacts
margin = 2 * supersample  # Small margin to prevent white edges
draw.ellipse((margin, margin, big_size - margin, big_size - margin), fill=255)

# Apply gaussian blur for smoother edges
mask_big = mask_big.filter(ImageFilter.GaussianBlur(radius=supersample))

# Downsample for final anti-aliased mask
mask = mask_big.resize((favicon_size, favicon_size), Image.LANCZOS)

# Create output with pure transparency
output = Image.new('RGBA', (favicon_size, favicon_size), (0, 0, 0, 0))
output.paste(img_rgba, (0, 0))
output.putalpha(mask)

# Save as PNG with full transparency
output.save('public/favicon.png', 'PNG', optimize=True)

print("Created circular favicon with smooth anti-aliased edges and no white background")
print(f"Favicon size: {favicon_size}x{favicon_size} pixels")
