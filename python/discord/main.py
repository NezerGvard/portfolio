from os import truncate
import discord
import json as j
from discord.ext import commands
from config import settings

bot = commands.Bot(command_prefix = settings['prefix'])

@bot.command(name="testcommand", ) # Не передаём аргумент pass_context, так как он был нужен в старых версиях.
async def hello(ctx): # Создаём функцию и передаём аргумент ctx.
    myguild = [{"id": emoji.id, "name": emoji.name, "animated": emoji.animated} for emoji in ctx.guild.emojis] # Объявляем переменную author и записываем туда информацию об авторе.
    # with open("test.json", "w") as f:
    #     j.dump(f"{author.id}", f, indent=4, ensure_ascii=True)

    # user_data = {
    #     "name": author.name,
    #     "id": author.id,
    #     "tag": author.discriminator,
    #     "bot": author.bot
    # }

    # with open("user.json", "w") as f:
    #     j.dump(user_data, f, indent=4, ensure_ascii=True)
    
    with open("emojis1.json", "w") as f:
        j.dump(myguild, f, indent=4, ensure_ascii=True)

    await ctx.send(f'{myguild}!') # Выводим сообщение с упоминанием автора, обращаясь к переменной author.

@bot.event
async def on_ready():
    print("Done")


bot.run(settings['token'])

