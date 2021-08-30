import glob
import json

class Update():

    def start(self):
        # retrieve file list
        image_root = "../public/images/contents/"
        chapters = glob.glob(f"{image_root}*")
        chapters = [chapter.split('\\')[1] for chapter in chapters]

        chapter_summary = []

        for chapter in chapters:
            chapter_summary.append({'chapter': chapter, 'page_num': len(
                glob.glob(f"{image_root}{chapter}/*"))})
        
        print(chapter_summary)

        # save to json
        with open("data.json", "w") as file:
            json.dump(chapter_summary, file)


def main():
    update = Update()
    update.start()


if __name__ == '__main__':
    main()
