const router = require('express').Router()
const {
    validateBody,
    checkUsernameFree,
    validateUsername,
    validateEmail
} = require('../middleware/restricted')
const { JWT_SECRET, NUM } = require('../../data/secret/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./auth-model')

router.post('/register', validateBody, validateEmail, checkUsernameFree, async (req, res, next) => {
    const { username, email, password } = req.body
    try {
      const hash = bcrypt.hashSync(password, NUM)
      const user = { username, email, password: hash }
      const registeredUser = await Users.insertUser(user)
      res.status(201).json(registeredUser)
    } catch (error) {
        next(error)
    }
})

router.post('/login', validateBody, validateUsername, async (req, res, next) => {
    const { password } = req.body
    if (bcrypt.compareSync(password, req.user.password)) {
        const token = buildToken(req.user)
        res.json({
            status: 200,
            message: `welcome, ${req.user.username}`,
            token: token
        })
    } else {
        next({
            status: 401,
            message: "invalid credentials"
        })
    }
})

// update password
router.put('/update', validateEmail, async (req, res, next) => {
    const { email, password } = req.body
    try {
        const hash = bcrypt.hashSync(password, NUM)
        const updatedUser = await Users.updateUserPassword(email, hash)
        if (updatedUser) {
            res.status(200).json({ message: 'Password updated successfully' })
        } else {
            next({ status: 404, message: 'User not found' })
        }
    } catch (error) {
        next(error)
    }
})

// delete account
router.delete('/delete/:username', async (req, res, next) => {
    const { username } = req.params
    try {
        const deletedUser = await Users.deleteUser(username)
        if (deletedUser) {
            res.status(200).json({ message: 'Account deleted successfully' })
        } else {
            next({ status: 404, message: 'User not found' })
        }
    } catch (error) {
        next(error)
    }
})


function buildToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}



module.exports = router