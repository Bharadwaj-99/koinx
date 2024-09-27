const Trade = require('../models/Trade');

const calculateBalance = async (timestamp) => {
  const trades = await Trade.find({ utcTime: { $lte: new Date(timestamp) } });
  const balances = {};

  trades.forEach(trade => {
    if (!balances[trade.baseCoin]) {
      balances[trade.baseCoin] = 0;
    }

    if (trade.operation.toLowerCase() === 'buy') {
      balances[trade.baseCoin] += trade.amount;
    } else if (trade.operation.toLowerCase() === 'sell') {
      balances[trade.baseCoin] -= trade.amount;
    }
  });

 
  Object.keys(balances).forEach(asset => {
    if (balances[asset] === 0) {
      delete balances[asset];
    }
  });

  return balances;
};

module.exports = { calculateBalance };