var data = require('../data.json');

exports.view = function(req, res) { 
	res.json(data);
	console.log('Content', data);
}