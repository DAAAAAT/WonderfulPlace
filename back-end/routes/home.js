const express = require('express');
const router = new express.Router();

const Destination = require('mongoose').model('Destination');

router.get('/', async (req, res) => {
    try {
        const allDestinations = await Destination.find({});
        console.log(allDestinations);
        const topDestinations = allDestinations.sort((a, b) => b.rating - a.rating).slice(0, 4);

        if(!topDestinations) {
           return res.status(204).json({
                success: false,
                message: 'No Destinations available'
            });
        }

        return res.status(200).json({
            success: true,
            topDestinations
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;