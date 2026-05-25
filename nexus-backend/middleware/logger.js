// middleware/logger.js
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  // Logs the exact HTTP Verb (GET, POST, etc.) and endpoint path
  console.log(`[NEXUS LOG] -> ${timestamp} | METHOD: ${req.method} | PATH: ${req.url}`);
  next(); // Passes control to the next handler in the routing pipeline
};

module.exports = requestLogger;