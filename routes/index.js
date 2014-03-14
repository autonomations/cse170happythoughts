var content = require('../content.json');
//aYUda: var file_system = requre('fs');
//var userData = require('../userData.json');
content.layout = 'main.handlebars';

//Yu Help: Retrieve Slider value and write it to json file
exports.view = function(req, res){
	//read slider value from file

   res.render('index', content);
}

/* aYUda:
exports.post = function(req, res){
	//read the slider value form data
	var sliderValue = req.body.slider-fill;
	//write it to a user.json file as the userID: stress_value
	var userData = {
		user_id = 
	}

//////////SAMPLE CODE

var fs = require('fs');

var myData = {
  name:'test',
  version:'1.0'
}

var outputFilename = '/tmp/my.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 

///////////END SAMPLE CODE


}

*/





/*exports.userStress = function(req, res){
	console.log("I AM INSIDE OF INDEX.JS!!!!!!");
	var theStress = userData[0];
	console.log(theStress);
	res.json(theStress);
}*/