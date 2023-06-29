REACT RANDOM RESTAURANT 


DESCRIPTION: 
You've been asked to design a menu website for a new restaurant opening at 348 E Main St, Lexington, KY. The owners are busy working on their recipes and haven't picked a name yet, so they've asked you to suggest one and use it in your design.
They've populated an API with many possible choices. You are to use the API to generate a sample menu to add to your website. The API URL is: https://www.jsonkeeper.com/b/MDXW 
NOTE: you will also need to install a CORS Extension on Chrome to get the api call to work correctly. You will need to enable this app on the user facing side of your react application AND make your port:3000 public when trying to use axios to make the call to the API endpoint.


MoSCoW:

Must: 
Wireframes for the website design (include them in your repo as photos and/or screenshots)
The restaurant's name (give it a good one!, we will crown a winner for the most creative)
The restaurant's address
The restaurant's hours of operation
Install Bootstrap via npm.
Access the API using Axios installed with npm. 
Create a dynamic restaurant menu
Manage the React Component State

Should: 
Use NPM to embed a Google Map component showing the location of the restaurant.
Change menu display based on the time of day (breakfast, brunch, lunch, etc)
Create your own JSON and upload to the jsonkeeper.com to customize your items. 

Could: 
Use React Context
Modify your Title and Meta Tags using create-react-app.
Pepper Emojis/icons/pictures for spicy level

Won't: 
Implement DoorDash style online ordering with parent-child component state management and a 'shopping cart' to save data for purchase.
Include a different 'specials' menu for each day of the week that the restaurant is open and show that menu based on the current day (should prove to work throughout the week) as well as what was on the specials menu yesterday/ what will be on the specials menu tomorrow. Can be done randomly and keep in localStorage so it never changes.


ATOMIC STRUCTURE:

Atoms: 
image/logo, 
title, 
menu page text, 
about page text, 
event page text, 
food title, 
food price, 
food description, 
food catogory,
hours of operation text,
location text,

Molecules:
cards that contain food info. e.g food title, food price, food descrition, food catogory 

Organisms: 
navbar,
seperator,
main content,
seperator,
footer

Templates: 
the wireframe from the main page,

Pages:
the completed page,


QUESTIONS:
How do I retrieve the API data? 
How do I assign specific data from the API to the cards?
What even are props, hooks and how do I use them?


VARIABLES & COMPONENTS;

Navigation Bar 
- To Display The Resturant Title, Logo & Page Links

Main Content 
- To House The Menu Cards

Menu Cards
- Displays The Meals and their Information

Footer
- Displays the Locations and hours of operation


FUNCTIONAL:

Import Api Data:
To retrieve the data and populate each menu card with relavant information 

Event Handler:
To display the menu cards and their information when the menu link in the nav bar is clicked

