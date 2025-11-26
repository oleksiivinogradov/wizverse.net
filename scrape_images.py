import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re

BASE_URL = "https://wizverse.net"
OUTPUT_DIR = "public/assets/images"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def download_image(url):
    try:
        # Handle data URLs
        if url.startswith('data:'):
            return # Skip data URLs for now or handle them if needed

        response = requests.get(url, stream=True)
        if response.status_code == 200:
            # Get filename from URL
            parsed = urlparse(url)
            filename = os.path.basename(parsed.path)
            
            # If no extension, try to guess or skip
            if not os.path.splitext(filename)[1]:
                content_type = response.headers.get('content-type')
                if 'image/jpeg' in content_type:
                    filename += '.jpg'
                elif 'image/png' in content_type:
                    filename += '.png'
                elif 'image/svg' in content_type:
                    filename += '.svg'
                elif 'image/webp' in content_type:
                    filename += '.webp'
                else:
                    return # Skip unknown types

            # Ensure unique filename if collision
            filepath = os.path.join(OUTPUT_DIR, filename)
            counter = 1
            base, ext = os.path.splitext(filename)
            while os.path.exists(filepath):
                filepath = os.path.join(OUTPUT_DIR, f"{base}_{counter}{ext}")
                counter += 1

            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Downloaded: {filepath}")
        else:
            print(f"Failed to download: {url} - Status: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def scrape():
    print(f"Scraping {BASE_URL}...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'}
        response = requests.get(BASE_URL, headers=headers)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch page: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 1. Find img tags
    images = soup.find_all('img')
    print(f"Found {len(images)} img tags.")
    for img in images:
        src = img.get('src')
        if src:
            full_url = urljoin(BASE_URL, src)
            download_image(full_url)
            
    # 2. Find background images in style attributes
    # Look for all elements with a style attribute
    elements_with_style = soup.find_all(style=True)
    print(f"Found {len(elements_with_style)} elements with inline styles.")
    url_regex = re.compile(r'url\([\'"]?(.*?)[\'"]?\)')
    
    for elem in elements_with_style:
        style = elem['style']
        matches = url_regex.findall(style)
        for match in matches:
            full_url = urljoin(BASE_URL, match)
            download_image(full_url)

    # 3. Check for linked CSS files and scrape images from them (optional but good)
    links = soup.find_all('link', rel='stylesheet')
    for link in links:
        href = link.get('href')
        if href:
            css_url = urljoin(BASE_URL, href)
            try:
                css_response = requests.get(css_url, headers=headers)
                css_matches = url_regex.findall(css_response.text)
                for match in css_matches:
                    # CSS paths are relative to the CSS file
                    full_url = urljoin(css_url, match)
                    download_image(full_url)
            except:
                pass

if __name__ == "__main__":
    scrape()
