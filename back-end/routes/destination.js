const express = require('express');
const router = new express.Router();

const Destination = require('mongoose').model('Destination');

router.get('/', async (req, res, next) => {
    try {
        const allDestinations = await Destination.find({});
        const topDestinations = allDestinations.sort((a, b) => b.rating - a.rating);

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
})

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id
        Destination.findById(id).then((destination) => {
            res.status(200).json({
                success: true,
                destination
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

function handleError(error, res) {
    res.status(200).json({
        success: false,
        message: error.message
    })
}
module.exports = router;