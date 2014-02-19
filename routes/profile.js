var content = require('../content.json');
content.layout = 'main.handlebars';

exports.view = function(req, res){
   res.render('profile', content);
}