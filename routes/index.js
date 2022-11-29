const express = require('express')
const router = express.Router()


// Render the index page
router.get('/', async(req, res) => {
    try {
        res.render('index')
    } catch (err) {
        res.json({message: err.message})
    }
})


// Export the router
module.exports = router