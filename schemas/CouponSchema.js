const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', CouponSchema);
