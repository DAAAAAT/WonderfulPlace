const express = require('express');
const router = new express.Router();

const Place = require('mongoose').model('Place');

router.get('/', async (req, res) => {
    try {
        const allPlaces = await Place.find({});
        const topPlaces = allPlaces.sort((a, b) => b.likes - a.likes).slice(0, 4);

        if(!topPlaces) {
           return res.status(204).json({
                success: false,
                message: 'No places available'
            });
        }

        return res.status(200).json({
            success: true,
            topPlaces
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;