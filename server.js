//Installing Dependencies
var express = require('express')
var exphbs = require('express-handlebars')

//var methodOverride = require('method-override')
//var bodyParser = require('body-parser')

var app = express();
var port = 3306;

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ 
	defaultLayout: "main" 
}));
app.set("view engine", "handlebars");
console.log("app listening");
require('./controllers/burgers_controller.js')(app);

app.listen(port);

module.exports = app;