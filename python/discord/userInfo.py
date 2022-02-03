import discord
from discord.ext import commands
from config import settings
from discord.ext import commands, tasks


bot = commands.Bot(command_prefix=settings['prefix'])


class MemberRoles(commands.MemberConverter):
    async def convert(self, ctx, argument):
        member = await super().convert(ctx, argument)
        print(member)
        return [role.name for role in member.roles]


@bot.command(name="da")
async def roles(ctx, *, member: MemberRoles):
    # voice = bot.voice_clients
    # voice.play(discord.play(r'C:\Users\Denis\Desktop\python\discord\test\dora.mp3'),
    #            after=lambda e: print(f'[log] zakonchil'))
    # voice.source = discord(voice.source)
    # voice.source.volume = 0.07
    await ctx.send('I see the following roles: ' + ', '.join(member))

bot.run(settings['token'])
