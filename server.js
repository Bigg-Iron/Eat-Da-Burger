var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(express.static("public"));

// middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));




var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var routes = require("./burger/controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);


console.log('App listening on port: ' + port );
