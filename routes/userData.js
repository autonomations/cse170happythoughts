var userData = require('../userData.json');

exports.view = function(req, res){
   res.json(userData);
}