var content = require('../content.json');

exports.view = function(req, res){
   res.render('login', {layout: 'auth.handlebars'});
}