var data = require('../content.json');

exports.view = function(req, res){
   res.render('signup', {layout: 'auth.handlebars'});
}

