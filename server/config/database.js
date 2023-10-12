const mongoose = require('mongoose');

// Define the database connection string
const connectionString = 'mongodb+srv://ghosharonno000:modExm@cluster0.p1ue9xh.mongodb.net/modExm';

// Connect to the database
mongoose.connect(connectionString);

// Export the database connection
module.exports = mongoose;
