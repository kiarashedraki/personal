const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api', require('./routes/userRoutes')); // Make sure this line exists

// Global Error Handler
app.use(errorHandler);

module.exports = app;
