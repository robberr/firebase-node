const express = require('express');
const morgan = require('morgan');
const path = require('path');
const pug = require('pug');
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('views', './src/views');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index'));
module.exports = app;
