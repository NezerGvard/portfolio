from os import name
from flask import current_app, g, render_template
from flask.cli import with_appcontext
from flask import Flask
from waitress import serve
from werkzeug.datastructures import ContentRange
import jyserver.Flask as jyf
import psycopg2
from config_pg import host, user, password, db_name, port
from messge_parseder_for_id import Guild, C

connection = psycopg2.connect(
    host = host,
    user = user,
    password = password,
    database = db_name,
    port = port
)
    
class User:
    def __init__(self, name, uid, tag, avatar_url, msg, data):
        self.name = name
        self.uid = uid
        self.tag = tag
        self.avatar_url = avatar_url
        self.msg = msg.split("\n")
        self.data = data

class Pg:
    def __init__(self):
        self.users_data = [] 
        self.conn = connection
        self.curs = self.conn.cursor()

    def fetch_users(self):
        with self.conn:
            self.curs.execute("""SELECT * FROM info_user""")
            rows = self.curs.fetchall()
        for row in rows:
            self.users_data.append(User(row[0], row[1], row[2], row[3], row[4] ,row[5]))
      
        return self.users_data

test_userdata = Pg().fetch_users()
print(test_userdata[0].name)



app = Flask(__name__)

@app.route("/user")
def user():
    user = test_userdata
    return render_template("db.html", user = user)



@jyf.use(app)
class App:
    def __init__(self):
        self.count = 0
        self.mas = [r"static\img\img1.jpg", r"static\img\img2.jpg",r"static\img\img3.jpg"]
    

    def left1(self):
        # print(self.js.document.getElementById("d1").style.backgroundColor)
        if self.js.document.getElementById("d1").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[2]
            self.js.document.getElementById("d3").style.backgroundColor = "white"
            self.js.document.getElementById("d1").style.backgroundColor = "rgba(252, 252, 252, 0.295"

        elif self.js.document.getElementById("d3").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[1]
            self.js.document.getElementById("d2").style.backgroundColor = "white"  
            self.js.document.getElementById("d3").style.backgroundColor = "rgba(252, 252, 252, 0.295"   

        elif self.js.document.getElementById("d2").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[0]
            self.js.document.getElementById("d2").style.backgroundColor = "rgba(252, 252, 252, 0.295"  
            self.js.document.getElementById("d1").style.backgroundColor = "white"  


    def right1(self):
        if self.js.document.getElementById("d1").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[1]
            self.js.document.getElementById("d2").style.backgroundColor = "white"
            self.js.document.getElementById("d1").style.backgroundColor = "rgba(252, 252, 252, 0.295"

        elif self.js.document.getElementById("d2").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[2]
            self.js.document.getElementById("d3").style.backgroundColor = "white"  
            self.js.document.getElementById("d2").style.backgroundColor = "rgba(252, 252, 252, 0.295"   

        elif self.js.document.getElementById("d3").style.backgroundColor == 'white':
            self.js.document.getElementById("img1").src = self.mas[0]
            self.js.document.getElementById("d1").style.backgroundColor = "white" 
            self.js.document.getElementById("d3").style.backgroundColor = "rgba(252, 252, 252, 0.295"  
            

@app.route("/")
def index():
    return App.render(render_template("main.html"))

@app.route("/discord")    
def dis():
    guild = C()
    channel = C()
    return render_template("discord.html", server = guild.guild, channel = channel.chn)

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=8080)