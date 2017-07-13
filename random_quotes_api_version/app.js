var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    request("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            //console.log(data);
            res.render("home", {data: data});
        }
    });
});

app.listen(process.env.PORT || 3000, function(req,res) {
    console.log("SERVER STARTED");
});