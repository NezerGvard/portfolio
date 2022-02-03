import requests
import os
class API_Mojang:
    def __init__(self):
        self.UUID = ""


    def get_player_uuid(self, name):
        response = requests.get(f"https://api.mojang.com/users/profiles/minecraft/{name}")
        try:
            user = response.json()
            user['id']
        except Exception:
            return("No such nickname exists")
        else:
            return f"You UUid: {user['id']}"
    

    def get_player(self, uuid):
        response = requests.get(f"https://sessionserver.mojang.com/session/minecraft/profile/{uuid}")
        nickname = response.json()
        try:
            nickname["name"]
        except:
            return "There is no such id"
        else:
            return "Your nickname: "+nickname["name"] +""

    def get_names_history(self, uuid):
        history = "Your nickname for all time: "
        response = requests.get(f"https://api.mojang.com/user/profiles/{uuid}/names")
        history_name = response.json()
        try:
            for h in history_name:
                z = history+f"{h['name']}"
        except:
            return "There is no such id"
        else:
            for hn in history_name:
                if history_name[-1]["name"] != hn['name']:
                    history = history+f"{hn['name']}, "
                else:
                    history =  history+f"{hn['name']} "
            return history

    def get_skin(self, uuid):
        response = requests.get(f'https://crafatar.com/renders/body/{uuid}?overlay=true').content
        r_name = requests.get(f"https://sessionserver.mojang.com/session/minecraft/profile/{uuid}")
        res_j = r_name.json()
        try:
            name = res_j["name"]
        except:
            return "There is no such id"
        else:
            name = res_j["name"]
            if not os.path.isdir("img"):
                os.mkdir("img")
            if not os.path.isdir("img/skin"):
                os.mkdir("img/skin")
            if not os.path.isdir(f"img/skin/{uuid}"):
                os.mkdir(f"img/skin/{uuid}")
            dir_dow = os.path.abspath("img\skin")
            with open(fr'{dir_dow}\{uuid}\{name}.png', 'wb') as handler:
                        handler.write(response)
            direct = os.path.abspath(fr"img\skin\{uuid}\{name}.png")
            return (f"Your skin is here {direct}"),direct




if __name__ == "__main__":
    file, direct =API_Mojang().get_skin("4821bad66bc344c09861f9fc38e40215")
    print(file)
    print(direct)