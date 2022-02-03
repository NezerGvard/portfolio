import aiohttp
import asyncio
import json

emojis = []
API = "https://discord.com/api/v9"
TOKEN = "ODkzNTE1MTkwNzc4MzYzOTQ1.YVck3g._FoZvpTmdUOmV0-epiM9ss3cRnw"
headers = {
    "User-Agent": "DiscordBot (Windows NT 6.1; rv:92.0) Gecko/20100101 Firefox/92.0",
    "Authorization": f"Bot {TOKEN}"
}

async def get_emojis():
    async with aiohttp.ClientSession() as session:
        data = await session.get(API + "/guilds/814937086150967326/emojis", headers=headers)
        for emoji in await data.json():
            print(emoji)
            emojis.append({
                "Name": emoji["name"],
                "ID": emoji["id"],
                "Animated": emoji["animated"]
                })

    with open("emojis.json", "w", encoding="utf-8") as f:
        json.dump(emojis, f, indent=4, ensure_ascii=False)
    

asyncio.run(get_emojis())