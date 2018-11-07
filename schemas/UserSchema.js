const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    token: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
