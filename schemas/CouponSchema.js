const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    message: String,
    description: String,
    redeemed: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', CouponSchema);
