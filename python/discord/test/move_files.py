import os
import time


class MoveFile():
    def __init__(self):
        self.check_folder = os.path.abspath('python-sort')
        self.default_folders = set(
            ['images', 'audios', 'videos', 'python-files'])
        self.image = self.check_folder + os.sep + 'images'
        self.audios = self.check_folder + os.sep + 'audios'
        self.videos = self.check_folder + os.sep + 'videos'
        self.python_files = self.check_folder + os.sep + 'python-files'

        self._update()

    __init__()
