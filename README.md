# WeatherNow
WeatherNow is a web application where user gives location as input and this app gives the current temperature in that location and weather description 
# Express JS
Express is a module framework for Node that you can use for applications that are based on server/s that will "listen" for any input/connection requests from clients. It is a lightweight package that does not obscure the core Node.js features.
## Installation:
     $ npm install express --save
## Usage:
     const express = require('express');
     const app = express();
The first line here is grabbing the main Express module from the package you installed. 
This module is a function, which we then run on the second line to create our app variable. You can create multiple apps this way, each with their own requests and responses.
## Requests & Responses
    app.get('/', (req, res) => {res.send('');});
This bite of code is where we tell our Express server how to handle a GET request to our server. Express includes similar functions for POST, PUT, etc. using app.post(...), app.put(...), etc.   

These functions take two main parameters. The first is the URL for this function to act upon. In this case, we are targeting '/', which is the root of our website: in this case, localhost:3000.

The second parameter is a function with two arguments: req, and res. req represents the request that was sent to the server; We can use this object to read data about what the client is requesting to do. res represents the response that we will send back to the client. Here, we are calling a function on res to send back a response: 'An alligator approaches!'.
