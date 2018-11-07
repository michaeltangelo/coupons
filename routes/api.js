const bodyParser = require('body-parser');
const routes = require('express').Router();
const uuid = require('uuid/v5');

// MongoDB requires
const mongoose = require('mongoose');
const Coupon = require('../schemas/CouponSchema.js');
const User = require('../schemas/UserSchema.js')

// bcrypt settings
const bcrypt = require('bcrypt');
const saltRounds = 10;

routes.get('/testconn', (req, res) => {
  console.log('client hit our test endpoint');
  res.json({ message: 'Ok!' });
});

routes.get('/coupons', (req, res) => {
  console.log('Received request for coupons');
  // req.someidentifyingproperty
  // uuid4, send back
  const time = new Date().toLocaleTimeString();
  const sessionToken = uuid(time, '8e884ace-be33-11e4-8dfc-aa07a5b093db');
  res.json({ message: sessionToken });
});

routes.post('/verifyToken', (req, res) => {
  console.log(req.body);
});

routes.post('/authenticate', (req, res) => {
  const db = mongoose.connection;
  const hash = bcrypt.hashSync('', saltRounds);
  // bcrypt.compareSync(myPlaintextPassword, hash);
  // console.log(hash);
  const newUser = new User({
    token: new Date().toLocaleTimeString(),
  });

  // newUser.save(function(err) {
  //   if (err) throw err;
  //   console.log('saved!');
  // });

  User.findOne({ 'token': '3:59:05 AM' }, (err, user) => {
    if (err) throw err;
    if (user === null) {
      console.log('Could not find matching token.');
      res.json({ message: 'fail' });
    } else {
      console.log('Token successfully matched.');
      res.json({ message: 'ok' });
    }
  });
});

module.exports = routes;
