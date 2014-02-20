
/************************************************************************************************
 * Module dependencies.
 ***********************************************************************************************/
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');



/************************************************************************************************
 * Routes
 ***********************************************************************************************/
var index = require('./routes/index');
var profile = require('./routes/profile');
var create = require('./routes/create');
var login = require('./routes/login');
var logout = require('./routes/logout');
var friends = require('./routes/friends');
var add_friend = require('./routes/add_friend');
var content = require('./routes/content');
var data = require('./routes/data');
var signup = require('./routes/signup');

/************************************************************************************************
 * Environments
 ***********************************************************************************************/
var app = express();

var hbs = handlebars.create({
	defaultLayout: 'main',
	helpers: {
      block: function(name){
        var blocks = this._blocks;
            content = blocks && blocks[name];
        return content ? content.join('\n') : null;
      },
      contentFor: function(name, options){
        var blocks = this._blocks || (this._blocks = {});
            block = blocks[name] || (blocks[name] = []); //Changed this to [] instead of {}
        block.push(options.fn(this));
      }
    }
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('title', 'Happy Thoughts');
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

/************************************************************************************************
 * Development Only
 ***********************************************************************************************/
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*********************************************************************************************** 
 * ADD ROUTES HERE
 ***********************************************************************************************/
app.get('/', index.view);
app.get('/home', index.view);
app.get('/data', data.view);
app.get('/content', content.view);
app.get('/create', create.view);
app.get('/profile', profile.view);
app.get('/friends', friends.view);
/* Login and Logout */
app.get('/logout', logout.view);
app.get('/login', login.view);
app.get('/signup',signup.view);

app.get('/add_friend', index.view);
// app.get('/project', project.viewProject);
// app.get('/project', project.viewProject);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
