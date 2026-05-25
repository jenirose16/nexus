// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[DATABASE STATE] MongoDB Connected Securely: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[DATABASE ERROR] Connection Intercepted: ${error.message}`);
    process.exit(1); // Destroys the process loop on failure to prevent memory leaks
  }
};

module.exports = connectDB;