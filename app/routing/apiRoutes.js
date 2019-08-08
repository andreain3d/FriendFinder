var path = require("path");
var friends = require("./../data/friends.js");

// console.log(friends.friends instanceof Array);

module.exports = (function() {
  "use strict";
  var apiRoutes = require("express").Router();

  apiRoutes.get("/friends", function(req, res) {
    res.json(friends.friends);
  });

  apiRoutes.post("/friends", function(req, res) {
    var newFriend = req.body;

    friends.friends.push(newFriend);
    res.json(newFriend);
  });

  return apiRoutes;
})();
