var express = require('express');
var fs = require('fs');
var body = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

var body = 
app.get('/', function(request, response) {
    console.log(body);
    response.send(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
