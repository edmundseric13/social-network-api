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

try {
  const routes = require('./routes');
  app.use(routes);
} catch (err) {
  console.error('Error loading routes:', err);
  console.error('Error stack:', err.stack);
}

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));