// inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require('../config/orm.js');
module.exports = {
	all: function(cb) {
		orm.all('burgers', function(err, data) {
			var sendBack = [];

			data.forEach(function(item) {
				if (item.supportPickles) {
					sendBack.push(item);
				}
			})

			cb(sendBack);
		});	
	}
}