exports.view = function(req, res){
   res.render('stress_level2', {layout: 'auth.handlebars'});
}

/*aYUda:
exports.setSession = function(req, res){
	//generate a randomNumber for userID
	var userID = Math.floor(Math.random);
	//set the session: req.session.userID = randomNumber	
	req.session.userID = userID;
}
*/