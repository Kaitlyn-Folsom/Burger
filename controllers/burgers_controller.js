var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/index");
});

router.get("/index", function (req, res) {
  burger.selectAll(function(data) {
    var burgersObj = {
      burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);

  });
});

router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
        console.log("POST received");
        res.redirect('/index');

  });
});

router.put("/burgers/update/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition ", condition);

	burger.updateOne({'devoured': req.body.devoured}, condition, function() {
    console.log("PUT received");
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;