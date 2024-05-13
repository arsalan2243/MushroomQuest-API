// Import the 'express' library to create the server
const express = require('express')

// Import the 'helmet' library for security headers
const helmet = require('helmet')

// Import the 'cors' library for Cross-Origin Resource Sharing
const cors = require('cors')

// Import the 'restrict' middleware from the './middleware/restricted' file
const {restrict} = require('./middleware/restricted')

// Import the 'mushroomRouter' from the './mushroom/mushroom-router' file
const mushroomRouter = require('./mushroom/mushroom-router')

// Import the 'authRouter' from the './auth/auth-router' file
const authRouter = require ('./auth/auth-router')

// Create a new instance of the express server
const server = express()

// Middleware to parse JSON requests
server.use(express.json())

// Middleware to add security headers
server.use(helmet())

// Middleware for enabling Cross-Origin Resource Sharing
server.use(cors())

// Mount the 'restrict' middleware on the '/api/v1/mushrooms' route
server.use('/api/v1/mushrooms', restrict, mushroomRouter)

// Mount the 'authRouter' on the '/api/v1/auth' route
server.use('/api/v1/auth', authRouter)

// Route handler for the root route
server.get("/", (req,res)=> {
  res.send("Hello")
})

// Error handling middleware
server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })

})

// Export the server for use in other modules
module.exports = server
