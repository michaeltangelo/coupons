const routes = require('express').Router();
const Coupon = require('../schemas/CouponSchema.js');
const uuid = require('uuid/v5');

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

module.exports = routes;
