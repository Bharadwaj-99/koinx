const express = require('express');
const connectDB = require('./config/database');
const tradeRoutes = require('./routes/tradeRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api', tradeRoutes);
app.use('/api', balanceRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;