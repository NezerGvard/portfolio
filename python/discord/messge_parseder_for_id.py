import discord
from discord.ext import commands
from config import settings

bot = commands.Bot(command_prefix = settings['prefix'])

@bot.event
async def on_ready():

   
            
    class Guild: 
        def __init__(self):
            self.guild_l = []
            self.guild_channel = []


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


        
        

    class C(Guild): 
        def __init__(self):
            super().__init__()
            self.chn = self.guild_s()
            self.guild = self.channels()
   
    test_c = C()
    print(test_c.chn[1].id, test_c.guild[0])

    print('Working')

bot.run(settings['token'])