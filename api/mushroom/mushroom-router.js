const mushroomModel = require('./mushroom-model')

const router = require('express').Router()
router.get('/', async (req, res, next)=>{
    try {
        const allMushrooms = await mushroomModel.getAll()
        res.status(200).json(allMushrooms)
    } catch (error) {
        next(error)
    }
})

module.exports = router