// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const requestLogger = require('./middleware/logger');

// Load ecosystem configurations from file parameters
dotenv.config();

const app = express();

// Global Request Interception Processing Chains
app.use(cors());
app.use(express.json());   // Formats stringified network request streams into structural JSON objects
app.use(requestLogger);     // Attaches custom assignment terminal printing logger middleware

// Structural API Route Gateway Modules Mounting Anchor
app.use('/api/students', require('./routes/studentRoutes'));

// Root Network Core Heartbeat Monitor Check Route
app.get('/', (req, res) => {
  res.status(200).json({ status: "ONLINE", service: "Nexus High-Class Academic Administration API Layer Core" });
});

// Central Exception Boundary Handler Layer Middleware
app.use((err, req, res, next) => {
  console.error(`[EXCEPTION RECOVERY ERROR HOOK]: ${err.stack}`);
  res.status(500).json({
    success: false,
    error: "An internal background workflow operation error was caught.",
    message: err.message
  });
});

// Engine operational thread launch loop
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`[ENGINE ENGAGED] Server Online: Active on Port ${PORT}`);
  console.log(`======================================================\n`);
 //  connectDB(); // Attempt live background handshake connection with your MongoDB Atlas tables
});