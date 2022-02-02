import json
from flask import current_app, g, redirect, render_template, request
from flask import Flask
from builer.main import *

tokens = ''
guild = []
a = API()

from flask import Flask


app = Flask(__name__)
@app.route("/", methods=["POST", "GET"])
def home():
    if request.method == "POST":
        tokens = request.form["token"]
        print(tokens)
        if len(tokens) != 100000:
            a.aut(tokens)
            print (a.token)
            return redirect("/guild")
        elif len(tokens) != 59:
            return "<h1>Введите верный токен</h1>"
    else:
        return render_template("aut.html")



@app.route("/guild")
def guild_list():
    guild = a.guild()
    return render_template("guilds.html",content = guild )


@app.route("/guild/<uuid>")
def guilds(uuid):
    channels = a.get_channel(uuid)
    print(json.dumps(channels, indent=4, ensure_ascii=False))
    guild, top_roles = a.get_guild(uuid)
    get_guild = guild[0]['guild']
    roles = guild[0]['roles']
    icon = guild[0]['icon']
    return render_template("guild.html", id = uuid, content = a.guild(), g = get_guild, icon = icon, roles = roles, role = top_roles, channel = channels)








if __name__ == "__main__":
    app.run(debug=True)