var content = require('../content.json');


exports.view = function(req, res){
   res.render('logout', {layout: 'auth.handlebars'});
}