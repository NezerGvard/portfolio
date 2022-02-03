import discord
import requests
from discord.ext import commands
from config import settings

bot = commands.Bot(command_prefix = settings['prefix'])

@bot.event
async def on_ready():
    print('oynk')

@bot.command(name="emoji")
async def em(ctx):
    emoji_list = [{'name':emoji.name, 'id':emoji.id, 'animated':emoji.animated, 'managed':emoji.managed}for emoji in ctx.guild.emojis]
    print(emoji_list)
    for emoji in ctx.guild.emojis: 
        if emoji.animated:
            img_data = requests.get(f'https://cdn.discordapp.com/emojis/{emoji.id}.gif').content
            with open(fr'C:\Users\Denis\Desktop\python\discord\image\{emoji.name}.gif', 'wb') as handler:
                handler.write(img_data)
        else:
            img_data = requests.get(f'https://cdn.discordapp.com/emojis/{emoji.id}.png').content
            with open(fr'C:\Users\Denis\Desktop\python\discord\image\{emoji.name}.png', 'wb') as handler:
                handler.write(img_data)        
bot.run(settings['token'])