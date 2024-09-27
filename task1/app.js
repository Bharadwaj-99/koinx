const express = require('express');
const connectDB = require('./src/config/database');
const tradeRoutes = require('./src/routes/tradeRoutes');
const balanceRoutes = require('./src/routes/balanceRoutes');
const errorHandler = require('./src/utils/errorHandler');

const app = express();


connectDB();

app.use(express.json());


app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});


app.use('/api', tradeRoutes);
app.use('/api', balanceRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;