const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.get('/',function(req,res){
   
 res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    // console.log(req.body.CityName);
    // console.log("Post request received");
    const query = req.body.CityName
    const apikey = "0ea8196df5e1b26028caaf15b472840d"
    const units = "metric"

    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units
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
})


//    res.send("Server is up and running.") 




app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})