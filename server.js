var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});