const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/socialNetworkDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

mongoose.set('debug', true);

// Add this test route
app.get('/test', (req, res) => {
  console.log('Test route accessed');
  res.json({ message: 'Test route working' });
});

// Add this root route
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.json({ message: 'Welcome to the Social Network API' });
});

try {
  const routes = require('./routes');
  app.use(routes);
} catch (err) {
  console.error('Error loading routes:', err);
  console.error('Error stack:', err.stack);
}

// Add this catch-all route
app.use('*', (req, res) => {
  console.log(`Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));