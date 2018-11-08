const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = require('./routes/api.js');
const port = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');

// Environment setup
require('dotenv').config();

const dbRoute = process.env.MONGO_URI || 'mongodb://localhost:27017/db';

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to db');
  }
});

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////////////////////
// Routes
////////////////////
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
