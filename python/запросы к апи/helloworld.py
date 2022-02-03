import kivy
from kivy.app import App
from kivy.uix.widget import Widget
from kivy.config import Config
from kivy.lang import Builder
from kivy.properties import  ObjectProperty
from kivy.properties import NumericProperty 

from mojang import API_Mojang

Builder.load_file("my_form.kv")

class MyGrid(Widget):
    
    name = ObjectProperty(None)
    uuid = ObjectProperty(None)
    opacity_o = NumericProperty()

    def __init__(self, **kwargs):
        super(MyGrid, self).__init__(**kwargs)
        self.opacity_o = 0


    def Get_UUid(self):
        user_name = self.ids.name.text
        self.ids.img.source = ""
        self.ids.img.color = (54/255,54/255,54/255,255/255)
        self.opacity_o = 1
        self.ids.output_mojang.text = ""
        self.ids.output_mojang.text = API_Mojang().get_player_uuid(user_name)

    def history(self):
        uuid = self.ids.uuid.text
        self.ids.img.source = ""
        self.ids.img.color = (54/255,54/255,54/255,255/255)
        self.opacity_o = 1
        self.ids.output_mojang.text = ""
        self.ids.output_mojang.text = API_Mojang().get_names_history(uuid)    
   
    def profils(self):
        uuid = self.ids.uuid.text
        self.ids.img.source = ""
        self.ids.img.color = (54/255,54/255,54/255,255/255)
        self.opacity_o = 1
        self.ids.output_mojang.text = ""
        self.ids.output_mojang.text = API_Mojang().get_player(uuid)

    def skin(self):
        uuid = self.ids.uuid.text
        self.ids.img.color = (255/255,255/255,255/255,255)
        self.opacity_o = 1
        self.ids.output_mojang.text = ""
        try:
            file, direct = API_Mojang().get_skin(uuid)
            self.ids.output_mojang.text = str(file)
            self.ids.img.source = str(direct)
        except:
            self.ids.img.color = (54/255,54/255,54/255,255/255)
            self.ids.output_mojang.text = 'Your id is not correct'
        else: 
            file, direct = API_Mojang().get_skin(uuid)
            self.ids.output_mojang.text = str(file)
            self.ids.img.source = str(direct)



class MojangApiApp(App):
    def build(self):
        Config.set('graphics', 'width', '900')
        Config.set('graphics', 'height', '900')
        Config.write()
        return MyGrid()


if __name__ == "__main__":
    MojangApiApp().run()