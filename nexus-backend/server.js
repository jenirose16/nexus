const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environmental parameters from .env file
dotenv.config();

const app = express();

// ==========================================
// 1. GLOBAL INTERCEPTION MIDDLEWARE CHAINS
// ==========================================
app.use(cors());
app.use(express.json()); // Parses incoming stringified JSON request streams into structured objects

// ==========================================
// 2. ROUTE GATEWAY MOUNTING ANCHORS
// ==========================================
// Maps all incoming paths starting with /api/students to your studentRoutes logic cleanly
app.use('/api/students', require('./routes/studentRoutes'));

// Root Deployment Core Heartbeat Monitor Check Route
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: "ONLINE", 
    service: "Nexus High-Class Academic Administration API Layer Core",
    environment: process.env.NODE_ENV || "development"
  });
});

// ==========================================
// 3. CENTRALIZED EXCEPTION RECOVERY LAYER
// ==========================================
// Catches background runtime errors and prevents serverless drops
app.use((err, req, res, next) => {
  console.error(`[EXCEPTION RECOVERY ERROR HOOK]: ${err.stack}`);
  res.status(500).json({
    success: false,
    error: "An internal background workflow operation error was caught.",
    message: err.message
  });
});

// ====================================================================
// 4. ENGINE OPERATIONAL THREAD LAUNCH LOOP (Vercel Serverless Adaptation)
// ====================================================================
// Vercel compiles Express routes into stateless, isolated serverless functions. 
// We wrap app.listen inside a non-production block so it boots smoothly on 
// port 5000 during local desktop testing without throwing port conflicts in the cloud.
// ====================================================================
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`[ENGINE ENGAGED] Server Online: Active locally on Port ${PORT}`);
    console.log(`======================================================\n`);
  });
}

// Architectural Module Export: Vital requirement for Vercel Serverless compilation engines
module.exports = app;