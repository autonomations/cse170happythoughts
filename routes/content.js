var content = require('../content.json');

exports.view = function(req, res) { 
	res.json(content);
	console.log('Content', content);
}