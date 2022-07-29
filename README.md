# Bug Bash

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is a collaborative project using front-end and back-end technologies to create a
 community for new developers to share and fix their coding bugs. The following were the application's requirements:
- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

The following technologies were used to complete the project:
* Figma
* Bootstrap
* Handlebars.js
* Dotenv and Bcrypt
* Node.js
* Express.js
* Express-Session
* Connect-Session-Sequelize
* Sequelize
* MySQL
* Cloudinary
* Multer
* Darkmode.js
* Type.Fit Quote API

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, Tech-Blog (see the link below), to fork and clone the repository. The JSON file will have the necessary dependencies. Use:
````````````
npm install
````````````
The .gitignore file is set up in the root directory along with the server.js file that contains the code to run the server. The sequelize sync in server.js should be set to
````````````````
{ force: false }
````````````````
, unless the user wants to drop and recreate their database. The seeds directory contains all of the data to populate the table. The user will need to use:
`````````````
npm run seed
`````````````
To populate the tables.
* The config file contains the connection.js file so that any user can connect to their database using .env variables. The user will need to create a .env file and use the code described in the Usage section to login to their MySQL account and run the application. They will need to add .env to their .gitignore file so that their password is not pushed to GitHub.
* The controllers directory contains the index.js file, the home and dashboard routes files for the front-end routes, and the api directory. The index.js file that is not in the api directory is the routing page for all of the routes. Within the api directory in the routes directory, there is an index.js (which routes all of the api routes) and files that contain the routes to get, post, put, and delete data about the users, bugs (with upvote functionality), and comments to the database.
* The db directory contains the schema.sql file that allows the user to drop and create the database.
* The models directory contains an index.js file (which details and exports the table associations) and the JS files to set up the models for the user, bug, comment, and upvote tables in MySQL using Sequelize.
* The public directory contains the assets folder, which contains the front-end logic in JS files for each of the Handlebars template pages, the stylesheet, and the images for each bug and for the README.
* The seeds directory contains the seeding JS files and the index.js file that contains the seeding logic.
* The utils directory contains the helpers and auth JS files to run the helper functions and the user authorizing function.
* The views directory contains the layouts and partial directories along with the handlebars files for the site's pages. The layouts directory contains the main.handlebars file to serve as a template for the other pages. The partials directory contains the partials for repeated bug, header, and footer code blocks.

## Links
- [GitHub Repo](https://github.com/amklenk/New-Dev-Forum)
- [Heroku Deployed Site](https://limitless-lowlands-09863.herokuapp.com/)

## Usage
The following are screenshots of the deployed Heroku site:

The homepage:
![homepage image](./public/assets/images/README%20Images/homepage.png)

The login page:
![login page image](./public/assets/images/README%20Images/login.png)

The register (signup) page:
![signup page image](./public/assets/images/README%20Images/register.png)

The dashboard page, after logging in:
![dashboard page image](./public/assets/images/README%20Images/dashboard.png)

A single-bug page (logged in):
![single-post image](./public/assets/images/README%20Images/postbug.png)

A post-a-bug page:
![post-a-bug image](./public/assets/images/README%20Images/postbug.png)

A bugs-by-language page (logged in):
![edit-post page](./public/assets/images/README%20Images/bylanguage.png)

Before starting the application, the user needs to create a .env file in their root directory to connect to their local MySQL database. They will need to put the following code in their .env file, filling in their own data for the values:

``````````````````````````````
DB_NAME="user's database"
DB_USER="root"
DB_PASSWORD="userpasswordhere"
``````````````````````````````

The user also needs to have the .env variables for cloudinary. Please contact one of the creators below via email to gain access. The application can be accessed via the backend using Insomnia. The application can be accessed via the front-end by turning on the server and visiting localhost:3001/ or by visiting the Heroku app, see Links for the site link.

## Credits
The image used for the CSS seed bug is from the following website: 
- [JavaPoint: How to Center a Button in CSS?](https://www.javatpoint.com/how-to-center-a-button-in-css)

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)

## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to amandamklenk3@gmail.com, daleusmc1986@gmail.com, nowacewskijack@gmail.com, and towers.a@gmail.com. To see more projects, visit the link below for amklenk's respository:
- [Alex Dale's GitHub Repository](https://github.com/Riftsail)
- [Amanda Klenk's GitHub Repository](https://github.com/amklenk)
- [Andrew Tower's GitHub Repository](https://github.com/glo6al)
- [Jack Nowaczewski's GitHub Repository](https://github.com/Lil-Chevy)
