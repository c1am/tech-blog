# Tech Blog
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)


## Description 
This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

This application used Express.js API and Sequelize to interact with a MySQL database. This application displays creation of database using mySQL with models and associations. Then demonstrates the API Routes to perform RESTful CRUD operations displayed in my walk through videos.


## Prerequisites
The user should clone the repository from GitHub. This application will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, [Sequelize](https://www.npmjs.com/package/sequelize) as the ORM, and the express-session npm package for authentication.


## Installation
Clone this repository. 
![Repository Link](https://github.com/c1am/tech-blog) 
![SSH Clone Link](git@github.com:c1am/tech-blog.git)
![Heroku Deployment Link]()

Install `node.js`, open the terminal and run `npm i` to install these packages in the format of this example `npm i express` for each package: 


Create a database using the `schema.sql` file.

In the terminal, run `mysql -u root -p < db/schema.sql`. Then enter your MySQL password. Then run `npm run seed` to populate the database with the provided sample data.


## Deployment/Demo



## Built With
- Javascript
- MySQL


## Authors
- Cherry Lam 
    - [GitHub](https://github.com/c1am)
    - [Email](mailto:cherrylam.ny@gmail.com)