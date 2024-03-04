import csv
import pandas as pd 
import requests # Allows you to send HTTP requests to a server that returns a Response Obj
from bs4 import BeautifulSoup # Used to pull data out of HTML files & convert data into a nested data struct
from urllib.parse import urlencode # Used for reading web content, making  HTTP requests, and receiving response headers 

list_of_urls = ['https://www.pcmag.com/categories/processors/brands/amd', 'https://www.pcmag.com/categories/processors/brands/amd?page=2', 'https://www.pcmag.com/categories/processors/brands/amd?page=3', 'https://www.pcmag.com/categories/processors/brands/amd?page=4']
reviews = []

for u in list_of_urls: 
  resp = requests.get(u)
  soup = BeautifulSoup(resp.text, 'html.parser')

  # Extract reviews
  for i in soup.find_all('p', class_ = 'line-clamp-2 text-gray-600'): 
    reviews.append(i.get_text())

# Create csv file  
df = pd.DataFrame(reviews)
df.to_csv('web_scraped_data.csv')
