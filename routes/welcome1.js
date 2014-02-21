var data = require('../data.json');

exports.view = function(req, res){
   res.render('welcome1', {layout: 'auth.handlebars'});
}
