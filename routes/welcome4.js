var data = require('../data.json');

exports.view = function(req, res){
   res.render('welcome4', {layout: 'auth.handlebars'});
}
