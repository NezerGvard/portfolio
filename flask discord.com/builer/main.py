import json
from turtle import position
import requests
import operator
# from mess import mess


class API():
    def __init__(self):
        self.token = ''
        self.headers = {}
        self.API = "https://discord.com/api/v9"

    def aut(self, t):
        self.token = t
        self.headers = {
            "User-Agent": "DiscordBot (Windows NT 6.1; rv:92.0) Gecko/20100101 Firefox/92.0",
            "Authorization": f"Bot {self.token}"
            }
        return self.headers

    def guild(self):
        req = []
        request = requests.get(self.API + "/users/@me/guilds", headers=self.headers, params={"limit": 100})
        for i in request.json():
            req.append({"guild": i, "icon": f"https://cdn.discordapp.com/icons/{i['id']}/{i['icon']}.png"})
        return req

        
    def get_guild(self, id):
        name = ''
        req = []
        rol = []
        mem = []
        uids = []
        pos = []
        m = []
        request = requests.get(self.API + f"/guilds/{id}", headers=self.headers, params={'limit': 100})
        bebrers = self.members(id)
        i = request.json()
        i['roles'].sort(key=operator.itemgetter('position'), reverse=True)


        for j in i['roles']:
            f = str(hex(j["color"]))[2:-1]
            if f == '':
                f = "ffffff"
            f = "#"+ f
            rol.append({"role": j, "color":f})

            for member in bebrers:
                for roles in member['member']['roles']:
                    if roles == j['id']:
                        if member['member']['user']['id'] not in uids or uids == []:
                            if pos == [] or j['position'] == pos[-1]:
                                m.append({
                                    "member": {'name': member['member']['user']['username'], 'avatar': member['avatar']},
                                    'color': f,
                                    'position': j['position']
                                })
                                pos.append(j['position'])
                                uids.append(member['member']['user']['id'])
                                name = j['name']
                                colors = f
                            else:
                                mem.append({'roles': m, 'name_roles': name, 'color': colors})
                                uids.append(member['member']['user']['id'])
                                m = []
                            
                            if j['position'] < pos[-1]:
                                name = j['name']
                                colors = f
                                m.append({
                                    "member": {'name': member['member']['user']['username'], 'avatar': member['avatar']},
                                    'color': f,
                                    'position': j['position']
                                })
                                pos.append(j['position'])
                                uids.append(member['member']['user']['id'])
                                if bebrers[-1] == member:
                                    mem.append({'roles': m, 'name_roles': j['name'], 'color': f})
                                # mem.append({'memb': member, 'position': j['position'], 'color': f })
                                # uids.append(member['member']['user']['id'])
                                # pos.append(j['position'])

        # mem = mem.sort(key=operator.itemgetter('position'), reverse = True)
        req.append({"guild": i, "icon": f"https://cdn.discordapp.com/icons/{i['id']}/{i['icon']}.png", "roles": rol})
        return req, mem


    def roles(self, id):
        req = []
        request = requests.get(self.API + f"/guilds/{id}/roles",headers=self.headers, params={"limit":100})
        for i in request.json():
            req.append({"roles": i})
        return req


    def members(self, id):
        req = []
        avatar = []
        bebreri = []
        request = requests.get(self.API + f"/guilds/{id}/members", headers=self.headers, params={"limit":100})
        for i in request.json():
            if i['user']['avatar'] == None:
                avatar_none = int(i['user']['discriminator']) % 5 
                avatar = ({"username": i["user"]["username"], 'id': i["user"]["id"], "url": f"https://cdn.discordapp.com/embed/avatars/{str(avatar_none)}.png"})
            else:
                avatar = ({"username": i["user"]["username"], 'id': i["user"]["id"], "url": f"https://cdn.discordapp.com/avatars/{i['user']['id']}/{i['user']['avatar']}.png"})
            req.append({'member': i, 'avatar': avatar})
        return req


    def get_channel(self, id):
        req = []
        request = requests.get(self.API + f"/guilds/{id}/channels", headers=self.headers ,params={"limit": 1000})
        for i in request.json():
            req.append({'channel': i})
        print(sorted(req, key=lambda x: x['channel']['position']))
        return req

    
    def messages(self, id):
        req = []
        request = requests.get(self.API + f"/channels/{id}/messages", headers=self.headers,  params={"limit": 100})
        for i in request.json():
            req.append({"message": i})
        return req


    def search_member(self, id, bebrer):
        req = []
        request = requests.get(self.API + f"/guilds/{id}/members/search", headers=self.headers, params={"query": bebrer})
        for i in request.json():
            req.append({'member': i})
        return req
    





    

