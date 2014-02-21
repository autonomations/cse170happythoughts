var data = require('../data.json');

exports.view = function(req, res){
   res.render('welcome2', {layout: 'auth.handlebars'});
}
