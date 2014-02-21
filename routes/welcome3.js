var data = require('../content.json');

exports.view = function(req, res){
   res.render('welcome3', {layout: 'auth.handlebars'});
}
