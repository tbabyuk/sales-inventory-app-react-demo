# Sales & Inventory App

See it live: [Sales & Inventory App](https://lustrous-flan-cd3a7a.netlify.app/)

## Description
A desktop-only web app designed for a small music school business. It is meant to help the receptionist/sales person at the music school be able to do the following:
* quickly calculate total cost (subtotal + tax) of the different products the music school sells
* easily view price and current stock quantity of all products
* manually update stock quantity of products after each sale in order to keep accurate track of inventory
* view a sales log of items that were sold on a particular day and be able to reset this log at any time (in progress)

## Background & Motivation
The idea for this particular project emerged from a real-life need for such a tool at a music school that I work at. The initial motivation behind this app was to help our receptionist calculate the total cost (subtotal + tax) of products faster. After this was implemented, I had the idea of adding a list of our whole product inventory, so that we know how mmuch of each product is in stock and can update stock accordingly.

## Technologies
The current version of this project was done with: 
* HTML 
* CSS
* JavaScript
* FireBase & FireStore

## State of Completion
The most essential functionality has been implemented. I am currently still trying to implement functionality for keeping track of which product was sold on what day. This information will eventually be displayed when clicking the "Sales Log" button. 

## Learning Lessons & Challenges
### Implementing a database (Firestore)
This project was my first experience with FireBase and FireStore, and this was definitely the most challenging part of the project. I had to learn how to connect FireStore to my App and how to communicate between the two to be able to retrieve data as well as modify data (when updating stock). This was challenging but also very rewarding, as I began to feel more and more confident with FireBase and what it has to offer.

### Generating the inventory table
One of the things that was a bit tricky to implement was the scrollable inventory list, which is part of the modal that pops up after clicking on the "Books" (and "Notebooks") button in the "Current Inventory" section. I wanted the book items to be nicely organized in a table, and it took me a bit of time to figure out how to dynamically generate this table with JavaScript and then populate it with information from Firestore. I am also particularly pleased with the color theme I implemented to help see at a glance whenever we are low on stock. To achieve this effect, I used conditional styling when outputting the table rows.

## Summary
This was a fun little project to make and what I especially liked about it is that it solved a real-world problem. I would like to continue to improve it as time goes by and based on feedback from the receptionist/sales person who uses it.




