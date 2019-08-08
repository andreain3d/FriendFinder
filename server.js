var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
