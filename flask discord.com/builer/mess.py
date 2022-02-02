import json

mess = []
with open('avatar.json', 'r', encoding='utf-8') as f:
    av = json.load(f)

for a in av:
  mess.append({
              "embeds": [
                  {   
                      "title": a["username"],
                      "description": f"<@{a['id']}>",
                      "color": 303030,
                      "image": {"url": a['url']}
                      
                  }
              ]
          })

