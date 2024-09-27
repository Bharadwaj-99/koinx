const express = require('express');
const balanceController = require('../controllers/balanceController');

const router = express.Router();

router.post('/balance', balanceController.getBalance);

module.exports = router;