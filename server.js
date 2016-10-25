const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = require('./app/app.js');

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8080, () => {
  console.log('LISTENING on Port 8080');
});
