const errorHandler = (err, req, res, next) => {
  console.error('Error details:', err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid data format' });
  }
  
  if (err.code === 11000) {
    return res.status(409).json({ error: 'Duplicate key error' });
  }
  
  res.status(500).json({ 
    error: 'An unexpected error occurred',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;
