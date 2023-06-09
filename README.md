# Munpedia  
Munpedia is a social networking site built using the MERN stack (MongoDB, Express, React, and Node.js). This web application is designed to provide a platform for users to connect and share their knowledge with others. Users can create profiles, post articles, join groups, follow other users, and engage in discussions.

## Installation  
To install Munpedia, follow these steps:  

Clone the repository from Github:  

`git clone https://github.com/spoiledwit/munpedia.git`    

Install dependencies for both client and server:  
  
`cd munpedia`    
`cd client && npm install`    
`cd ../server && npm install`    

Create a .env file in the server directory and add the following environment variables:  

`MONGO_URI=your_mongoDB_URI`    
`JWT_SECRET=your_jwt_secret`  

## Start the development server:    

`cd ../client && npm start`  
`cd ../server && npm start`  

## Features  

## User Authentication  
Users can register and log in to their account. Authentication is handled using JWT tokens.  

## Profile Creation  
Users can create and customize their profiles with profile pictures, a bio, and other information.  

## Posting  
Users can write and publish posts including images, etc  

## Commenting    
User can comment and reply to comments in the post  

If you wish to contribute to Munpedia, feel free to submit a pull request.
