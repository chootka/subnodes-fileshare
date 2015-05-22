(function() {
	'use strict';

	var router = require('express').Router()
		,sharedDrive = require('../modules/SharedDrive');

	// ---------------------------
	// Create route for index page
	// ---------------------------
	router.get('/', function(req, res) {
		res.render('index');
	});

	// ---------------------------------------------------------
	// Set up our mount point and connect to shared drive
	// ---------------------------------------------------------
	router.post('/connect', function(req, res) {

		for (var k in req.body ) {
			console.log(k + ": " + req.body[k]);
		}

		console.log("req.body.share: " + req.body.share);
		console.log("req.body.mount: " + req.body.mount);

		var json = sharedDrive.connect(req.body, function(data) {
			res.json(data);
		});
	});

	// -------------------------------------------------------
	// Return files in shared drive
	// -------------------------------------------------------
	router.get('/files', function(req, res) {

		sharedDrive.readFiles(function(data) {
			res.json(data);
		});
	});

	// -------------------------------------------------------
	// Disconnect from the share drive
	// -------------------------------------------------------
	router.get('/disconnect', function(req, res) {

		var json = sharedDrive.disconnect(function(data) {
			res.json(data);
		});
	});

	module.exports = router;

}());