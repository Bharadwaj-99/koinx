const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  utcTime: Date,
  operation: String,
  market: String,
  baseCoin: String,
  quoteCoin: String,
  amount: Number,
  price: Number
});

module.exports = mongoose.model('Trade', tradeSchema);