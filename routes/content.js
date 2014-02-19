var content = require('../content.json');
content.layout = 'main.handlebars';

exports.view = function(req, res) { 
	res.json(content);
	console.log('Content', content);
}