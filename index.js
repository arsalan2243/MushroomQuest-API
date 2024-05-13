// Load environment variables from a .env file into process.env
require('dotenv').config();

// Use the PORT environment variable if it exists, otherwise default to 5000
const port = process.env.PORT || 5000;

// Require the server module from the './api' directory
const server = require('./api/server');

// Start the server on the specified port
server.listen(port, () => {
  // Log a message to indicate that the server is running
  console.log(`\n=== Rocking out on port ${port} ===\n`);
});
