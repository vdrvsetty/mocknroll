const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mocknroll', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB connection is established');
});
mongoose.connection.on('error', (err) => {
  console.log(`Couldn't connect to MongoDB. Error: ${err}`);
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/apis', require('./routes/api'));

// Listen
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
