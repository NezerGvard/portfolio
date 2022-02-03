import requests
import json
import os
emojis = []
API = "https://discord.com/api/v9"
TOKEN = "ODkzNTE1MTkwNzc4MzYzOTQ1.YVck3g._FoZvpTmdUOmV0-epiM9ss3cRnw"
headers = {
    "User-Agent": "DiscordBot (Windows NT 6.1; rv:92.0) Gecko/20100101 Firefox/92.0",
    "Authorization": f"Bot {TOKEN}"
}

def get_emojis():
    guild_id = "814937086150967326"
    if not os.path.isdir(f"img/{guild_id}"):
        os.mkdir(f"img/{guild_id}")
    if not  os.path.isdir(f"img/{guild_id}/gif"):
        os.mkdir(f"img/{guild_id}/gif")
    if not  os.path.isdir(f"img/{guild_id}/png"):
        os.mkdir(f"img/{guild_id}/png")
    response = requests.get(API + f"/guilds/{guild_id}/emojis", headers=headers)
    for emoji in response.json():
            if emoji["animated"] == True:
                img_data = requests.get(f'https://cdn.discordapp.com/emojis/{emoji["id"]}.gif').content
                with open(fr'C:\Users\Denis\Desktop\python\запросы к апи\img\814937086150967326\gif\{emoji["name"]}.gif', 'wb') as handler:
                    handler.write(img_data)
                print(emoji["name"] + ".gif")
            else:
                img_data = requests.get(f'https://cdn.discordapp.com/emojis/{emoji["id"]}.png').content
                with open(fr'C:\Users\Denis\Desktop\python\запросы к апи\img\814937086150967326\png\{emoji["name"]}.png', 'wb') as handler:
                    handler.write(img_data)
                print(emoji["name"] + ".png")
print(get_emojis())
