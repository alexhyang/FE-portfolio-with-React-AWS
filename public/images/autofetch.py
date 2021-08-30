import requests
import os


class Updater():

    def start(self):
        parameters = self.get_para()
        start_url = self.get_url(
            parameters["chapter"], parameters["current_page_index"], parameters["img_format"])
        self.save_chapter(parameters, start_url)

    def get_para(self):
        # get parameters
        chapter = input("Chapter #: ")
        current_page_num = input("Current page number: ")
        current_page_index = input(
            "Current page index in URL (xxx.jpg/xxx.png): ")
        special_img = input("Is this special image? (Y or N): ")
        if special_img == "Y":
            special_img = "0-"
            img_format = ".jpg"
        else:
            special_img = ""
            img_format = ".png"

        para = {"chapter": chapter, "current_page_num": current_page_num,
                "current_page_index": current_page_index, "special_img": special_img, "img_format": img_format}
        return para

    def get_url(self, chapter, page_index_str, img_format):
        return f"https://images.catmanga.org/series/komi/chapters/{chapter}/{page_index_str}{img_format}"

    def save_chapter(self, para, url):
        # extract data from parameter
        chapter = para["chapter"]
        page_index_digits = len(para["current_page_index"])
        page_index = int(para["current_page_index"])
        page_num = int(para["current_page_num"])
        special = para["special_img"]
        img_format = para["img_format"]

        # create directory for the chapter
        try:
            os.mkdir(f"contents/{chapter}")
        except FileExistsError:
            pass

        # loop over available urls and save chapter
        while self.check_url(url):
            self.save_img(
                f"contents/{chapter}/{special}{page_num}{img_format}", url)
            page_num += 1
            page_index += 1
            page_index_str = self.update_page_index_str(
                page_index, page_index_digits)
            url = self.get_url(chapter, page_index_str, img_format)

    def check_url(self, url):
        '''return true if url is valid'''
        r = requests.get(url)
        return r.status_code == 200

    def save_img(self, file_name, url):
        img_data = requests.get(url).content
        with open(file_name, 'wb') as handler:
            handler.write(img_data)
        print(f"{file_name} saved.")

    def update_page_index_str(self, page_index, page_index_digits):
        # stringify page index
        if page_index_digits == 2:
            # index in the form of "0X"
            if page_index < 10:
                page_index_str = "0" + str(page_index)
            else:
                page_index_str = page_index
        else:
            # index in the form of "00X" or "0XX"
            if page_index < 10:
                page_index_str = "00" + str(page_index)
            elif page_index < 100:
                page_index_str = "0" + str(page_index)
            else:
                page_index_str = page_index
        return page_index_str


def main():
    updater = Updater()
    updater.start()


if __name__ == '__main__':
    main()
