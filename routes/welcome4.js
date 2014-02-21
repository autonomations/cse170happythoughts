var data = require('../content.json');

exports.view = function(req, res){
   res.render('welcome4', {layout: 'auth.handlebars'});
}
