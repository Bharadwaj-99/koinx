const csv = require('csv-parser');
const fs = require('fs');
const Trade = require('../models/Trade');

const parseCsvFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        const [baseCoin, quoteCoin] = data.Market.split('/');
        const trade = new Trade({
          utcTime: new Date(data.UTC_Time),
          operation: data.Operation,
          market: data.Market,
          baseCoin: baseCoin,
          quoteCoin: quoteCoin,
          amount: parseFloat(data['Buy/Sell Amount']),
          price: parseFloat(data.Price)
        });
        results.push(trade);
      })
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

module.exports = { parseCsvFile };