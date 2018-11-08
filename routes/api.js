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

routes.get('/coupons', (req, res) => {
  const db = mongoose.connection;
  console.log('Received request for coupons');
  db.collection('coupons').find().toArray((err, coupons) => {
    if (err) throw err;
    if (coupons === null) {
      console.log('Could not retrieve coupons');
    } else {
      res.json({ message: 'ok', coupons: coupons});
    }
  });
});

routes.post('/coupon/redeem', (req, res) => {
  const couponId = req.body.couponId;
  console.log(`received a request to update coupon with id: ${couponId}`);
  Coupon.findByIdAndUpdate(couponId, {$set: {redeemed: true}}, (err, coupon) => {
    if (err) throw err;
    if (coupon === null) {
      res.json({ message: 'fail' });
    } else {
      console.log(`Successfully updated coupon (${couponId}) in backend`);
      res.json({ message: 'ok' });
    }
  });
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
  db.collection('secret').findOne({}, (err, secret) => {
    if (err) throw err;
    if (secret === null) {
      console.log(`Could not locate hash on db: ${db.host}:${db.port}`);
      res.json({ message: 'fail', errorMsg: 'server error' });
      return;
    }
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
      res.json({ message: 'fail', errorMsg: 'invalid password' });
    }
  });
});

module.exports = routes;
