
/************************************************************************************************
 * Module dependencies.
 ***********************************************************************************************/
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


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

/************************************************************************************************
 * Environments
 ***********************************************************************************************/
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('title', 'Happy Thoughts');
app.engine('handlebars', handlebars());
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
app.get('/create', create.view);
app.get('/profile', profile.view);
app.get('/friends', friends.view);
app.get('/logout', logout.view);
app.get('/login', login.view);
app.get('/add_friend', add_friend.view);
// app.get('/project', project.viewProject);
// app.get('/project', project.viewProject);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
