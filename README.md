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

The second parameter is a function with two arguments: req, and res. req represents the request that was sent to the server; We can use this object to read data about what the client is requesting to do. res represents the response that we will send back to the client.
# API
 It is a set of command,functions,protocols that programmers can use to create software or interact with external system.
 
# HTTPS
 HTTP module is a core module and it is useful to transfer the data over HTTP (hypertext protocol transfer).
 
    const https = require("https");
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            // console.log(data)
            const Weatherdata = JSON.parse(data)
            // console.log(Weatherdata)

            // const object = {
            //     name: "sai prasad",
            //     interests :"cricket"
            // }
            // console.log(JSON.stringify(object))

            const temp = Weatherdata.main.temp
            const description = Weatherdata.weather[0].description
            const icon = Weatherdata.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1>The current temperature in "+req.body.CityName+" is "+temp+"Celsius</h1>")
            res.write("<p>The weather is currently "+ description+"</p>")
            res.write("<img src = "+imageURL+">")
            res.send()



        })
    })
 
 # body-Parser
 body-parser extract the entire body portion of an incoming request stream and exposes it on req. body .in order to read HTTP POST   data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body.
    
    const bodyParser = require("body-parser")
    app.use(bodyParser.urlencoded({extended: true}))
 
 Returns middleware that only parses {urlencoded} bodies and only looks at requests where the Content-Type header matches the type   option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
 
 
