import random

import discord
from config import settings
from discord import member
from discord.ext import commands


bot = commands.Bot(command_prefix=settings['prefix'], intents=discord.Intents.all())
@bot.event
async def on_ready():
    guild = bot.guilds
    for gui in guild:
        for member in gui.members:
            print(member.name)

@bot.command(name='mess')
async def pars(ctx):
    guild = ctx.guild
    author = ctx.author
    print(guild)

    def member_name():
        mas_bot = []
        for member in guild.members:
            if member.bot == False:
                mas_bot.append(f"{str(member.name)}")
        return mas_bot

    def member_id():
        mas_id = []
        for member in guild.members:
            if member.bot == False:
                mas_id.append(f"●{str(member.id)}")
        return mas_id


    class members:
        name_id = [member.name + ' ' + str(member.id)
                   for member in guild.members]
        name = member_name()
        id = member_id()
        online = [f"{member.name} {member.status} {member.pending}" for member in guild.members]
    print(members.online)
    embed = discord.Embed(
        title='Guild INFO',
        description=f"Guild name: ֍{guild.name}֍",
        colour=discord.Colour.from_rgb(106, 192, 245),
    ).set_image(url=guild.icon_url)
    embed.add_field(name='User name <:status_online:897864232320774205>', value='\n'.join(members.name), inline=True)
    embed.add_field(name='ID :crown: ',value='\n'.join(members.id), inline=True)
    embed.add_field(name=' ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁',value='▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁', inline=False)
    embed.add_field(name='Guild id:',value=str(guild.id), inline=True)
    embed.add_field(name='Horny values: ', value=str(guild.member_count) + " " + "<:t_horny:894175653514059786>")
    embed.set_footer(text=''.join(author.name), icon_url=author.avatar_url)

    await ctx.send(embed=embed)
bot.run(settings['token'])
