# Tech-Blog

## Description

My motivation in developing this project was to become make a complex web application implementing everything I learned. My tech blog uses the MVC paradigm for the structure, Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Ever since I started boot camp, I've been reading articles about technical concepts and recent advancements and blogging my new discoveries to leave a digital footprint for my future self and to those that are in need of it. As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

## Installation

Download VSCode.
Download Node.js.
Download bcrypt package (npm install).
Download dotenv package (npm install).
Download handlebars (npm install).
Download express (npm install).
Download PostgreSQL (npm install).
Download nodemon (npm install).
Download moment (npm install).

## Usage

Run 'node server.js' on the terminal. If functioning properly, the terminal should the user that it is currently listening to the current port it is being set to. Next, the user will have to use the application on a web browser by typing 'localhost:{PORT}' in the address bar. Consequentially, the users are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in. The app has several built-in web pages and the user will be redirected depending on how the user chooses to interact with the app. When the user clicks on the homepage then they are taken to the homepage. When they click on any other links in the navigation then they are prompted to either sign up or sign in. When they choose sign up then they are prompted to create a username and password. When they click on the sign-up button then the user credentials are saved and are logged into the site. When they revisit the site at a later time and choose to sign in then they are prompted to enter their username and password. When they are signed in to the site then they see navigation links for the homepage, the dashboard, and the option to log out. When they click on the homepage option in the navigation then they are taken to the homepage and presented with existing blog posts that include the post title and the date created. When they click on an existing blog post then they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. When they enter a comment and click on the submit button while signed in then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created. When they click on the dashboard option in the navigation then they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post. When they click on the button to add a new blog post then they are prompted to enter both a title and contents for their blog post. When they click on the button to create a new blog post then the title and contents of their post are saved and they are taken back to an updated dashboard with their new blog post. When they click on one of their existing posts in the dashboard then they are able to delete or update their post and taken back to an updated dashboard. When they click on the logout option in the navigation then they are signed out of the site. When they are idle on the site for more than a set time then they are able to view posts and comments but then prompted to log in again before they can add, update, or delete posts.
For further instructions please refer to this link: (https://drive.google.com/file/d/1P6pIuc8_O8NlM5Zbna3-he_zFkYM-SvW/view)


## Features

Homepage Presentation
- When visiting the site for the first time, users see the homepage displaying any existing blog posts. 
- There are navigation links to the homepage, dashboard, and login/signup options.

Navigation
- Homepage: Always accessible and shows the existing blog posts with titles and creation dates.
- Dashboard & Other Links: Require users to be logged in; otherwise, they are prompted to sign up or sign in.

User Authentication
- Sign Up: Users can create an account by providing a username and password.
- Login: Returning users can log in with their credentials.
- Session Handling: Users stay logged in and are provided with links to the homepage, dashboard, and a logout option after signing in.

Blog Posts
- Viewing Posts: Users can view blog posts with details like title, content, creator’s username, and the date created.
- Commenting: Logged-in users can leave comments on posts, which are displayed along with the commenter's username and the date.

Dashboard Features
- Users can access their dashboard, which displays all blog posts they've created.
- Adding Posts: Users can create new blog posts by entering a title and content.
- Updating & Deleting Posts: Existing posts in the dashboard can be updated or deleted.

Session Management
- Users can log out from the site via the navigation menu.
- If idle for too long, users are still able to view posts but are required to log in again to add, update, or delete content.

## License

MIT License

Copyright <2024> <Christopher Chhim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![opensource](https://img.shields.io/badge/generator-open_source-blue)

 