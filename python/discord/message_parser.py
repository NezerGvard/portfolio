from datetime import datetime
import discord
import json as j
from discord import message 
from discord.ext import commands
from config import settings

bot = commands.Bot(command_prefix = settings['prefix'])

@bot.event
async def on_ready():
    print('Working')

@bot.command(name = 'select')
async def a(ctx):
    start = datetime.now()
    
    mess = [{"id_message": m.id, "user": m.author.name, "id_user": m.author.id, "content": m.content, "bot": m.author.bot} for m in await ctx.channel.history(limit = 100).flatten()]
    print(mess)
    with open("message.json", "w") as f:
        j.dump(mess, f, indent=4, ensure_ascii=True)
    print(datetime.now()-start)


bot.run(settings['token'])