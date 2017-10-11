//DEPENDENCIES
var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require('method-override');

var app = express();

var port = process.env.PORT || 3000;

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//Listener
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});