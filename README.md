# Landing Page Project

## File structure

|
|- css
   |
   |- styles.css
|
|- js
   |
   |- app.js
|
|- index.html

## About

This is a simple landing page that utilizes Javascript to dynamically create a navigation item for every section on the page. Simply add more sections to the sections array defined at the top of the ```js/app.js``` file, and open the ```index.html``` file!

As you scroll down the page, the indicator in the navbar moves to highlight the menu item that corresponds with the section in the viewport. I accomplished this by looping through the sections, and checking if the section offset was less than the scroll height.
