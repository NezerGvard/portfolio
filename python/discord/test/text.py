import requests
from requests.api import request
from requests.models import Response
import requests
import json
async def main():
    response = requests.get('https://vk.com/audio-2001203308_100203308')
    json_data = json.loads(response.text)
    print(response, json_data)
    