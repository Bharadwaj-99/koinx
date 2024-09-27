const Trade = require('../models/Trade');
const csvParserService = require('../services/csvParserService');
const fs = require('fs');

const uploadTrades = async (req, res, next) => {
  console.log(req.file);
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
     
    console.log('File received:', req.file);

    const trades = await csvParserService.parseCsvFile(req.file.path);
    console.log(`Parsed ${trades.length} trades from CSV`);

    const result = await Trade.insertMany(trades);
    console.log(`Inserted ${result.length} trades into database`);

    fs.unlinkSync(req.file.path); // Delete the uploaded file
    res.status(200).json({ message: `${result.length} trades imported successfully.` });
  } catch (error) {
    console.error('Error in uploadTrades:', error);
    next(error);
  }
};

module.exports = { uploadTrades };