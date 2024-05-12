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


// get one mushroom
router.get('/:id', async (req, res, next) => {
    try {
        const mushroom = await mushroomModel.getById(req.params.id);
        if (!mushroom) {
            return res.status(404).json({ message: 'Mushroom not found' });
        }
        res.status(200).json(mushroom);
    } catch (error) {
        next(error);
    }
});

module.exports = router