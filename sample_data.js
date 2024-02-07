var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	response.render('sample_data', {title : 'Elevate lives: Assist our elders today!!!'});

});

router.post("/action", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM details GROUP BY Name";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var Name = request.body.Name;

		var Phone = request.body.Phone;

		var Address = request.body.Address;

		var Type = request.body.Type;

		var query = `
		INSERT INTO sample_data 
		(Name, Phone, Address, Type) 
		VALUES ("${Name}", "${Phone}", "${Address}", "${Type}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var Name = request.body.Name;
		var query = `SELECT * FROM details WHERE Name = "${Name}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var Name = request.body.Name;

		var Phone = request.body.Phone;

		var Address = request.body.Address;

		var Type = request.body.Type;

		var query = `
		UPDATE sample_data 
		SET Name = "${Name}", 
		Phone = "${Phone}", 
		Address = "${Address}", 
		Type = "${Type}" 
		WHERE Name = "${Name}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var Name = request.body.Name;

		var query = `DELETE FROM details WHERE Name = "${Name}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

module.exports = router;