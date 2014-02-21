var data = require('../content.json');

exports.view = function(req, res){
   res.render('welcome2', {layout: 'auth.handlebars'});
}
