var content = require('../content.json');
// content.layout = 'auth';

exports.view = function(req, res){
   res.render('logout', content);
}