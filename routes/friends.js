/*var content = require('../content.json');*/
var friends = require('../friends.json');
friends.layout = 'main.handlebars';

exports.view = function(req, res){
   res.render('friends', friends);
}