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

    var compareUsers = function(user) {
      var totalDiff = 0;
      for (var j = 0; j < user.scores.length; j++) {
        totalDiff += Math.abs(user.scores[j] - newFriend.scores[j]);
      }
      return totalDiff;
    };

    var similarUser;
    var currentDiff = 41;
    for (var i = 0; i < friends.friends.length; i++) {
      var compareDiff = compareUsers(friends.friends[i]);
      if (compareDiff < currentDiff) {
        currentDiff = compareDiff;
        similarUser = friends.friends[i];
      }
    }

    friends.friends.push(newFriend);
    res.json(similarUser);

    console.log("Name: " + similarUser.name);
  });

  return apiRoutes;
})();
