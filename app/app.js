const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));


app.use('/api/books', bookRouter);


module.exports = app;
