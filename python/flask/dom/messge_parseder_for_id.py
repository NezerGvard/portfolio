import discord
from discord.ext import commands
from config import settings

bot = commands.Bot(command_prefix=settings['prefix'], intents=discord.Intents.all())



    # guild = bot.guilds
    # for gui in guild:
    #     for member in gui.members:
    #         print(member.name)       
class Guild:
    def __init__(self):
        self.guild_l = []
        self.guild_channel = []
        self.guild_m = []
        self.member = []

    def guild_s(self):
        for gu in bot.guilds:
            self.guild_l.append(gu)
            print(gu.name)

        return self.guild_l

    def channels(self):
        for server in bot.guilds:
            for list_chan in server.text_channels:
                self.guild_channel.append(list_chan)
                # class Chann(Guild):
                #     def __init__(self):
                #         super().__init__()
                #         self.guild = self.guild_l.append(server)
                #         self.channel = self.guild_channel.append(list_chan)
        return self.guild_channel

    def member_s(self):
        self.guild_m = bot.guilds
        for gui in self.guild_m:
            for memberss in gui.members:
                self.member.append(memberss.name)
        return self.member

class C(Guild): 
    def __init__(self):
        super().__init__()
        self.chn = self.channels()
        self.guild = self.guild_s()
        self.guild_members = self.member_s()


    

bot.run(settings['token'])