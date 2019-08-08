# FriendFinder

A web application powered by a node server that compares users' responses to a survey and returns the name of the most similar user.

## Technologies Used

Bootstrap v 4.3.1
Javascript ES6  
JQuery 3.4.1
Node js  
[Express Node Package](https://www.npmjs.com/package/express)  
[Path Node Package](https://www.npmjs.com/package/path)

## Features

The Friend Finder app has a main landing page and a survey page. The survey page asks for the user's name and a link to a profile image, and then asks a series of 10 personality-based questions which can be answered with 1 (strongly disagree) to 5 (strongly agree). When the survey is submitted, the application bundles the information into an object and adds that object to the existing userbase data. The application then compares the current user's answers to the answers of each user in the data. Once all users have been checked, it returns the name and profile image of the user with the most similar answers. The data for the most similar user is then displayed on the page in a modal.

## Credits

Code by Andrea Nicholson
