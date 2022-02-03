import requests
import json
emojis = []
API = "https://discord.com/api/v9"
TOKEN = "ODkzNTE1MTkwNzc4MzYzOTQ1.YVck3g._FoZvpTmdUOmV0-epiM9ss3cRnw"
headers = {
    "User-Agent": "DiscordBot (Windows NT 6.1; rv:92.0) Gecko/20100101 Firefox/92.0",
    "Authorization": f"Bot {TOKEN}"
}

def guild():
    guild_id = "814937086150967326"
    response = requests.get(API + f"/guilds", headers=headers)
    response.json()
    return response.json()

print(guild())   