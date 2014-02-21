var data = require('../data.json');

exports.view = function(req, res){
   res.render('welcome3', {layout: 'auth.handlebars'});
}
