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

# Resize to 256x256
favicon_size = 256
img_cropped = img_cropped.resize((favicon_size, favicon_size), Image.LANCZOS)

# Create a high-quality circular mask with anti-aliasing
# Use 4x supersampling for smoother edges
supersample = 4
big_size = favicon_size * supersample

# Create large mask
mask_big = Image.new('L', (big_size, big_size), 0)
draw = ImageDraw.Draw(mask_big)
draw.ellipse((0, 0, big_size, big_size), fill=255)

# Downsample for anti-aliasing
mask = mask_big.resize((favicon_size, favicon_size), Image.LANCZOS)

# Create output image with transparency
output = Image.new('RGBA', (favicon_size, favicon_size), (0, 0, 0, 0))

# Convert cropped image to RGBA
img_rgba = img_cropped.convert('RGBA')

# Composite with the mask
output.paste(img_rgba, (0, 0))
output.putalpha(mask)

# Save as PNG
output.save('public/favicon.png', 'PNG', optimize=True)

print("Created circular favicon with anti-aliased edges at public/favicon.png")
