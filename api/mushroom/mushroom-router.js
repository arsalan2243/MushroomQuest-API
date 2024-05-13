// Require the mushroom model file, which is responsible for interacting with the database
const mushroomModel = require('./mushroom-model')

// Require the express router
const router = require('express').Router()

// Route to get all mushrooms
router.get('/', async (req, res, next)=>{
    try {
        // Call the getAll method from the mushroom model to fetch all mushrooms from the database
        const allMushrooms = await mushroomModel.getAll()
        // Respond with a 200 status code and the fetched mushrooms in JSON format
        res.status(200).json(allMushrooms)
    } catch (error) {
        // Pass any caught errors to the error handling middleware
        next(error)
    }
})

// Route to get a specific mushroom by its ID
router.get('/:id', async (req, res, next) => {
    try {
        // Call the getById method from the mushroom model to fetch a specific mushroom by its ID
        const mushroom = await mushroomModel.getById(req.params.id);
        // If no mushroom is found with the given ID, respond with a 404 status code and a message
        if (!mushroom) {
            return res.status(404).json({ message: 'Mushroom not found' });
        }
        // Respond with a 200 status code and the fetched mushroom in JSON format
        res.status(200).json(mushroom);
    } catch (error) {
        // Pass any caught errors to the error handling middleware
        next(error);
    }
});

// Export the router to be used in other parts of the application
module.exports = router
