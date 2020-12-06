const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('./dbconfig').createPool();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientesRoutes = require('./routes/api');
//!const config = require('./config');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//?
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', clientesRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//? 
app.get('/api', function (req, res, next) {
  res.json({msg: 'FUNSIONA !!'})
});

app.listen(4200, function () {
  console.log('funsiona en el puerto 4200');
})

//console.log(config);
//!app.use( cors(config.application.cors.server) );


module.exports = app;
