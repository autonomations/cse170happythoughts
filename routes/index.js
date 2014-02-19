var content = require('../content.json');

jsonContent = content.toJSON()

exports.view = function(req, res){
   res.render('index', jsonContent);
}