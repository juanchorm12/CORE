/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = process.env.port || 1212;
app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log('APi works in x port'));
app.use('/api', routes);
mongoose.connect('mongodb://localhost/resthub');
const db = mongoose.connection;
if (db) {
  console.log('Connected with mongo');
} else {
  console.log('Error');
}
module.exports = app;
