from PIL import Image, ImageDraw, ImageFilter

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

# Create a very large version for super-smooth downsampling
temp_size = 2048
img_large = img_cropped.resize((temp_size, temp_size), Image.LANCZOS)

# Create circular mask at large size
mask_large = Image.new('L', (temp_size, temp_size), 0)
draw = ImageDraw.Draw(mask_large)

# Draw circle that's SMALLER than the square to avoid any edge artifacts
# This effectively crops inward by about 2% on each side
inset = int(temp_size * 0.02)  # 2% inset from edges
draw.ellipse((inset, inset, temp_size - inset, temp_size - inset), fill=255)

# Apply very strong gaussian blur for ultra-smooth edges
mask_large = mask_large.filter(ImageFilter.GaussianBlur(radius=30))

# Apply mask to large image
img_large_rgba = img_large.convert('RGBA')
img_large_rgba.putalpha(mask_large)

# Now downsample to final sizes - create multiple sizes for better browser compatibility
sizes = [16, 32, 48, 64, 128, 256]

for favicon_size in sizes:
    # Downsample from large version for maximum quality
    output = img_large_rgba.resize((favicon_size, favicon_size), Image.LANCZOS)

    # Save with appropriate name
    if favicon_size == 256:
        output.save('public/favicon.png', 'PNG', optimize=True)
    else:
        output.save(f'public/favicon-{favicon_size}.png', 'PNG', optimize=True)

print("Created circular favicons with 2% inset to avoid white edges:")
print("  - favicon.png (256x256 - main)")
print("  - favicon-16.png, favicon-32.png, favicon-48.png")
print("  - favicon-64.png, favicon-128.png")
print("Circle is slightly smaller to ensure only colored content is visible")
