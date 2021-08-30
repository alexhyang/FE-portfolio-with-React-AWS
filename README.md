This is a simple comic viewer app created with React. The comic used as a example here is "Komi can't communicate". 

To add a new chapter:
1. create a chapter folder under public/images/contents/ with name as the number of the chapter, and name pages under the new folder with the number of each page. The combined directory will look like "public/images/contents/300/1.png" for page 1 of chapter 300. (or you can use "public/images/autofetch.py" script to fetch pages automatically from https://catmanga.org/series/komi)
2. run src/update_data.py to update chapter summary in data.json, which will later be imported by data.js