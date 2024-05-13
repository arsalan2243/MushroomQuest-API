// Imports the JWT_SECRET from a secret file
const { JWT_SECRET } = require('../../data/secret/index');

// Imports the jsonwebtoken package
const jwt = require('jsonwebtoken');

// Imports the findBy function from the auth-model file
const { findBy } = require('../auth/auth-model');

// Middleware function to restrict access based on JWT token
const restrict = (req, res, next) => {
  // Extracts the JWT token from the request headers
  const token = req.headers.authorization
  // Checks if token exists
  if(!token) {
    // If token doesn't exist, returns an error
    return next({
      status: 401,
      message: "token required"
    })
  } 
  // Verifies the JWT token
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if(err) {
      // If token is invalid, returns an error
      next({
        status: 401,
        message: "token invalid"
      })
    } else {
      // If token is valid, attaches decoded token to request and proceeds
      req.decodedToken = decodedToken
      next()
    }
  })
};

// Middleware function to validate request body for username and password
const validateBody = (req, res, next) => {
  const { username, password } = req.body
  // Validates username and password
  if(username === undefined || typeof username !== 'string' ||
    !username.trim() || password === undefined ||
    typeof password !== 'string' || !password.trim()
    ){
      // If username or password is missing, returns an error
      next({
        status: 400,
        message: "username, and password required"
      })
    }else {
      // If username and password are provided, proceeds
      next()
    }
};

// Middleware function to validate email in request body
const validateEmail = (req, res, next) => {
    const { email } = req.body
    // Validates email
    if(email === undefined || typeof email !== 'string' ||
    !email.trim()) {
        // If email is missing or invalid, returns an error
        next({
            status: 400,
            message: "email is required"
        })
    } else {
        // If email is valid, proceeds
        next()
    }
}

// Middleware function to check if username is already taken
const checkUsernameFree = async(req, res, next) => {
  const { username } = req.body
  // Checks if username is already in use
  const user = await findBy({ username: username})
  if(user.length){
    // If username is taken, returns an error
    next({
      status: 422,
      message: "username taken"
    })
  } else {
    // If username is available, proceeds
    next()
  }
};

// Middleware function to validate username in request body
const validateUsername = async(req, res, next) => {
  const { username } = req.body
  // Validates username
  const user = await findBy({ username: username })
  if(user.length){
    // If username is valid, attaches user to request and proceeds
    req.user = user[0]
    next()
  } else {
    // If username is invalid, returns an error
    next({
      status: 401,
      message: "invalid credentials"
    })
  }
}

// Exports all middleware functions
module.exports = {
  restrict,
  validateBody,
  checkUsernameFree,
  validateUsername,
  validateEmail
};
