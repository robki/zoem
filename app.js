var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var users = require('./server/routes/users');
var api = require('./server/routes/api');


var app = express();

// // view engine setup
/* app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');
console.log(__dirname); */


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// // Configuring Passport
// var passport = require('passport');
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
// app.use(passport.initialize());
// app.use(passport.session());
// // Initialize Passport
// var initPassport = require('./server/passport/init');
// initPassport(passport);


app.use("/api", api);
app.use('/', index);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.render("./dist/index.html")
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  /*res.status(err.status || 500);
  res.send('error');*/
});


module.exports = app;
