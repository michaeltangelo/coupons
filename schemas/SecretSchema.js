const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema(
  {
    hash: String,
  },
);

module.exports = mongoose.model('Secret', SecretSchema);
