// Inside the burgers_controller.js file, import the following:
var app = require('../models/burger.js')
// Express
module.exports = function(app) {
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers ", function(err, data) {
      if (err) throw err;
      res.render("index", { burgers: data });
    });
  });
};

// Post route -> back to home
// app.post("/", function(req, res) {
//   connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) {
//       throw err;
//     }
      
//     res.redirect("/");
//   });

// });