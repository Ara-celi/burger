// In the orm.js file, create the methods that will execute the necessary MySQL commands 
//in the controllers. These are the methods you will need to use in order to retrieve and 
//store data in your database.

// Import (require) connection.js into orm.js
var connection = require('./connection.js');

var orm = {
// selectAll()
	selectAll: function (burgers, cb) {
		var queryString = 'SELECT * FROM ' + burgers + ';';
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(result);
		});
	}
// insertOne()
	insertOne: function (burgers) {
		connection.query('INSERT INTO burgers SET ?', burger_name, function(err, res) {
			if (err) throw err;
		})
	}
// updateOne()	
	updateOne: function (burgers) {
		connection.query('UPDATE burgers SET burger_name = ? []' function(err, res) {
			if (err) throw err;
		})
	}
};
// Export the ORM object in module.exports.
module.exports = orm;