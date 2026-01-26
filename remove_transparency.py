from PIL import Image
import numpy as np

# Load the current favicon
img = Image.open('public/favicon.png')

print(f"Original: {img.mode}, {img.size}")

# Convert to numpy array to analyze colors
img_array = np.array(img)

# Find non-transparent pixels (alpha > 200)
alpha = img_array[:, :, 3]
non_transparent = alpha > 200

# Get average color of edge pixels (near the circle edge)
# Sample pixels in a ring near the circle boundary
height, width = img_array.shape[:2]
center_x, center_y = width // 2, height // 2
radius = min(width, height) // 2

# Create mask for ring area (between 80% and 95% of radius)
y, x = np.ogrid[:height, :width]
dist_from_center = np.sqrt((x - center_x)**2 + (y - center_y)**2)
ring_mask = (dist_from_center > radius * 0.8) & (dist_from_center < radius * 0.95) & non_transparent

# Get average color from the ring area
ring_pixels = img_array[ring_mask][:, :3]  # RGB only
if len(ring_pixels) > 0:
    avg_color = tuple(ring_pixels.mean(axis=0).astype(int))
else:
    # Fallback: use a neutral beige/cream color
    avg_color = (240, 235, 230)

print(f"Background color: RGB{avg_color}")

# Create new image with solid background
background = Image.new('RGB', img.size, avg_color)
background.paste(img, (0, 0), img)  # Use img as mask

# Save without transparency
background.save('public/favicon.png', 'PNG', optimize=True, compress_level=9)

print(f"Saved: RGB mode (no transparency), {background.size}")
