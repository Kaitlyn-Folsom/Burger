var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
	// selectAll for getting all the burgers
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	// insertOne for adding a new burger
	insertOne: function(col, vals, cb){
		orm.insertOne("burgers", col, vals, function(res){
			cb(res);
		});
	},
	// updateOne for changing the burger status
	updateOne: function(objColVals, condition, cb){
		orm.updateOne("burgers", objColVals, condition, function(res){
			cb(res);
		});
	}
};

// Export to controller
module.exports = burger;