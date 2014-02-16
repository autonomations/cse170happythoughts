var content = require('../content.json');

exports.view = function(req, res) { 
	var randomContent = content[Math.floor(content.length * Math.random())];
	// res.send('Your random palette is called: ' + randomPalette['title']);
	res.json(content);
	console.log('Content', content);
}