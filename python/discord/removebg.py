#Без ВПН в Крыму не работает 

from os import name
from discord.embeds import Embed
import requests
from discord.ext import commands
from config import settings
import discord


bot = commands.Bot(command_prefix = settings['prefix'])

@bot.event
async def on_message(ctx):
    if ctx.author.bot == False:
        print(ctx.attachments[0].url)
        img = ctx.attachments[0].url
        img_data = requests.get(f"{img}").content
        with open(r'C:\Users\Denis\Desktop\python\discord\image\remove_bg\u.png', 'wb') as handler:
            handler.write(img_data)
        print('фото добавлено')    
        response = requests.post(
            'https://api.remove.bg/v1.0/removebg',
            files={'image_file': open(r"C:\Users\Denis\Desktop\python\discord\image\u.png", 'rb')},
            data={'size': 'auto'},
            headers={'X-Api-Key': 'your-api'},
            
        )
        if response.status_code == requests.codes.ok:
            with open(r'C:\Users\Denis\Desktop\python\discord\image\rb.png', 'wb') as out:
                out.write(response.content)
        else:
            print("Error:", response.status_code, response.text)

        file = discord.File(r"C:\Users\Denis\Desktop\python\discord\image\rb.png")
        print('фото выгруженно')    
        await ctx.channel.send(file = file)
bot.run(settings['token'])        