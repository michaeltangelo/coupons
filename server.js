const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 5000;
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const dbRoute = 'mongodb://dev:jigglypuffsucks1@ds155243.mlab.com:55243/mt-bcoupon';

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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/static', express.static(path.join(__dirname, 'client/static/')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
