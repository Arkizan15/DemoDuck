import requests
import json
import os
from urllib.parse import urlparse
import time

# Figma file key from the link
file_key = 'JNoEG0GYPbJoZwPPPsGPV9'

# Personal access token - REPLACE WITH YOUR ACTUAL TOKEN
token = os.getenv('FIGMA_TOKEN')  # Get from environment variable or https://www.figma.com/settings

headers = {'X-Figma-Token': token}

# Get file data
file_url = f'https://api.figma.com/v1/files/{file_key}'
response = requests.get(file_url, headers=headers)

if response.status_code != 200:
    print(f"Error getting file: {response.status_code} {response.text}")
    exit(1)

data = response.json()

# Function to find nodes with export settings
def find_exportable_nodes(node, path=''):
    exportable = []
    if 'exportSettings' in node and node['exportSettings']:
        exportable.append((node['id'], node['name'], path))
    if 'children' in node:
        for child in node['children']:
            exportable.extend(find_exportable_nodes(child, path + '/' + node.get('name', 'unnamed')))
    return exportable

exportable_nodes = find_exportable_nodes(data['document'])

if not exportable_nodes:
    print("No exportable nodes found. Make sure elements in Figma have export settings.")
    exit(0)

print(f"Found {len(exportable_nodes)} exportable nodes.")

# Get image URLs in batches to avoid URL length limits
batch_size = 10
batches = [exportable_nodes[i:i + batch_size] for i in range(0, len(exportable_nodes), batch_size)]

all_images_data = {}
for batch in batches:
    node_ids = ','.join([node[0] for node in batch])
    images_url = f'https://api.figma.com/v1/images/{file_key}?ids={node_ids}&format=png'
    response = requests.get(images_url, headers=headers)
    if response.status_code != 200:
        print(f"Error getting images for batch: {response.status_code} {response.text}")
        continue
    batch_images = response.json().get('images', {})
    all_images_data.update(batch_images)
    time.sleep(10)  # Delay to avoid rate limits

if not all_images_data:
    print("No images available.")
    exit(0)

# Download images to img/ folder
os.makedirs('img', exist_ok=True)

for node_id, name, path in exportable_nodes:
    if node_id in all_images_data:
        image_url = all_images_data[node_id]
        if image_url:
            # Sanitize filename
            safe_name = ''.join(c for c in name if c.isalnum() or c in '._- ').strip()
            if not safe_name:
                safe_name = node_id.replace(':', '_')
            filepath = os.path.join('img', f'{safe_name}.png')
            # Avoid overwrites
            counter = 1
            original_filepath = filepath
            while os.path.exists(filepath):
                filepath = os.path.join('img', f'{safe_name}_{counter}.png')
                counter += 1
            # Download
            img_response = requests.get(image_url)
            if img_response.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                print(f"Downloaded {filepath}")
            else:
                print(f"Error downloading {image_url}: {img_response.status_code}")
        else:
            print(f"No URL for {name}")
    else:
        print(f"No image for node {name}")

print("Export complete.")