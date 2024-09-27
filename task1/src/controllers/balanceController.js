const balanceService = require('../services/balanceService');

const getBalance = async (req, res, next) => {
  try {
    const { timestamp } = req.body;
    
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp is required.' });
    }

    console.log('Calculating balance for timestamp:', timestamp);

    const balances = await balanceService.calculateBalance(timestamp);
    console.log('Calculated balances:', balances);

    res.json(balances);
  } catch (error) {
    console.error('Error in getBalance:', error);
    next(error);
  }
};

module.exports = { getBalance };
