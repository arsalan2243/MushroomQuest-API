// Importing the Router from Express
const router = require('express').Router()

// Importing middleware functions for validation and authentication
const {
    validateBody,
    checkUsernameFree,
    validateUsername,
    validateEmail
} = require('../middleware/restricted')

// Importing JWT_SECRET and NUM from secret/index.js for token generation
const { JWT_SECRET, NUM } = require('../../data/secret/index')

// Importing bcrypt for password hashing
const bcrypt = require('bcryptjs')

// Importing jsonwebtoken for token generation
const jwt = require('jsonwebtoken')

// Importing the Users model for interacting with the database
const Users = require('./auth-model')

// Route for user registration
router.post('/register', validateBody, validateEmail, checkUsernameFree, async (req, res, next) => {
    // Destructuring request body
    const { username, email, password } = req.body
    try {
        // Hashing the password
        const hash = bcrypt.hashSync(password, NUM)
        // Creating a user object with hashed password
        const user = { username, email, password: hash }
        // Inserting the user into the database
        const registeredUser = await Users.insertUser(user)
        // Sending a success response with the registered user data
        res.status(201).json(registeredUser)
    } catch (error) {
        // Forwarding the error to the error handling middleware
        next(error)
    }
})

// Route for user login
router.post('/login', validateBody, validateUsername, async (req, res, next) => {
    // Destructuring request body
    const { password } = req.body
    // Comparing the provided password with the hashed password from the database
    if (bcrypt.compareSync(password, req.user.password)) {
        // Generating a JWT token
        const token = buildToken(req.user)
        // Sending a success response with the token
        res.json({
            status: 200,
            message: `welcome, ${req.user.username}`,
            token: token
        })
    } else {
        // Forwarding an error if credentials are invalid
        next({
            status: 401,
            message: "invalid credentials"
        })
    }
})

// Route for updating user password
router.put('/update', validateEmail, async (req, res, next) => {
    // Destructuring request body
    const { email, password } = req.body
    try {
        // Hashing the new password
        const hash = bcrypt.hashSync(password, NUM)
        // Updating the user password in the database
        const updatedUser = await Users.updateUserPassword(email, hash)
        // Sending a success response
        if (updatedUser) {
            res.status(200).json({ message: 'Password updated successfully' })
        } else {
            next({ status: 404, message: 'User not found' })
        }
    } catch (error) {
        // Forwarding the error to the error handling middleware
        next(error)
    }
})

// Route for deleting user account
router.delete('/delete/:username', async (req, res, next) => {
    // Extracting username from request params
    const { username } = req.params
    try {
        // Deleting the user from the database
        const deletedUser = await Users.deleteUser(username)
        // Sending a success response
        if (deletedUser) {
            res.status(200).json({ message: 'Account deleted successfully' })
        } else {
            next({ status: 404, message: 'User not found' })
        }
    } catch (error) {
        // Forwarding the error to the error handling middleware
        next(error)
    }
})

// Function to build JWT token
function buildToken(user) {
    // JWT payload
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    // JWT options
    const options = {
        expiresIn: '1d'
    }
    // Signing and returning the JWT token
    return jwt.sign(payload, JWT_SECRET, options)
}

// Exporting the router
module.exports = router
