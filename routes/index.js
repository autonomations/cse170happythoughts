var content = require('../content.json');
content.layout = 'main.handlebars';

/*var userData = require('../userData.json');
content.userData = userData;*/

exports.view = function(req, res){
   res.render('index', content);
}