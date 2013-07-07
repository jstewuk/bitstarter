var express = require('express');
var fs = require('fs');
var buffer = fs.readFileSync("index.html");

var app = express.createServer(express.logger());
 
app.get('/', function(request, response) {
    var body = buffer.toString('utf-8');
    console.log(body);
    response.send(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
