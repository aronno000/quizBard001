const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = require('./config/server.js');

// Create an Express app
const app = express();
const mongoose = require('./config/database.js');

// Enable CORS
app.use(cors());

// Use the routes defined in the `routes` directory
app.use('/api', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
