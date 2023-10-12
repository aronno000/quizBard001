const dotenv = require('dotenv');
const express = require('express');

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Set the port
const port = process.env.PORT || 8000;

// Export the app
module.exports = app;
