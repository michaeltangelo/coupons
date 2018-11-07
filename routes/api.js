const bodyParser = require('body-parser');
const routes = require('express').Router();
const uuid = require('uuid/v5');

// MongoDB requires
const mongoose = require('mongoose');
const Coupon = require('../schemas/CouponSchema.js');
const User = require('../schemas/UserSchema.js');
const Secret = require('../schemas/SecretSchema.js');

// bcrypt settings
const bcrypt = require('bcrypt');
const saltRounds = 10;

routes.get('/testconn', (req, res) => {
  console.log('client hit our test endpoint');
  res.json({ message: 'Ok!' });
});

routes.get('/coupons', (req, res, err) => {
  if (err) throw err;
  console.log('Received request for coupons');
});

routes.post('/verifyToken', (req, res) => {
  const userToken = req.body.userToken;
  User.findOne({ 'token': userToken }, (err, user) => {
    if (err) throw err;
    if (user === null) {
      console.log(`Could not find token matching ${userToken}`);
      res.json({ message: 'fail' });
    } else {
      console.log('Token successfully matched.');
      res.json({ message: 'ok' });
    }
  });
});

routes.post('/authenticate', (req, res) => {
  const db = mongoose.connection;
  // const storedHash = "$2b$10$NlfnFUjiEnnZuSSLR4hDse2OFbl4f5U4G/dq9m//oyOdNA5RQam.O";

  db.collection('secret').findOne({}, (err, secret) => {
    if (err) throw err;
    const storedHash = secret.hash;
    if (bcrypt.compareSync(req.body.password, storedHash)) {
      const time = new Date().toLocaleTimeString();
      const sessionToken = uuid(time, '8e884ace-be33-11e4-8dfc-aa07a5b093db');
      const newUser = new User({
        token: sessionToken,
      });
      newUser.save(function(err) {
        if (err) throw err;
        console.log(`sessionToken (${sessionToken}) successfully saved in backend`);
      });
      console.log(`Password hash matched. Delivering sessionToken (${sessionToken})`);
      res.json({ message: 'ok', sessionToken: sessionToken });
    } else {
      console.log('Incorrect password.');
      res.json({ message: 'fail' });
    }
  });
});

module.exports = routes;
