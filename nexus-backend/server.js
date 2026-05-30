const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environmental parameters
dotenv.config();

const app = express();

// Global Middleware Interception Processing Chains
app.use(cors());
app.use(express.json()); // Parses incoming stringified JSON request streams into objects

// Mount your Student Controller Router Gateway
// This maps all incoming paths to your studentController logic cleanly
app.use('/api/students', require('./routes/studentRoutes'));

// Root Deployment Core Heartbeat Monitor Route
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: "ONLINE", 
    service: "Nexus High-Class Academic Administration API Layer Core",
    environment: process.env.NODE_ENV || "development"
  });
});

// Central Exception Boundary Recovery Handler Layer
app.use((err, req, res, next) => {
  console.error(`[EXCEPTION RECOVERY ERROR HOOK]: ${err.stack}`);
  res.status(500).json({
    success: false,
    error: "An internal background workflow operation error was caught.",
    message: err.message
  });
});

// ====================================================================
// ENGINE OPERATIONAL THREAD LAUNCH LOOP (Vercel Serverless Adaptation)
// ====================================================================
// Vercel handles deployments by converting your Express routes into 
// stateless serverless functions. We wrap app.listen inside a production 
// conditional block so it only runs locally on your desktop without 
// causing port initialization failures in the cloud.
// ====================================================================
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`[ENGINE ENGAGED] Server Online: Active locally on Port ${PORT}`);
    console.log(`======================================================\n`);
    
    // Optional local database handshake initialization
    // connectDB(); 
  });
}

// Architectural Module Export: Vital requirement for Vercel Serverless compilation engines
module.exports = app;