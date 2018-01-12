const express = require('express');
const router = new express.Router();

const Destination = require('mongoose').model('Destination');

router.get('/getAll', async (req, res, next) => {
    try {
        Destination.find().then((Destinations) => {
            res.status(200).json({
                success: true,
                Destinations
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

router.get('/getById/:id', async (req, res, next) => {
    try {
        let id = req.params.id
        Destination.findById(id).then((Destination) => {
            res.status(200).json({
                success: true,
                Destinations
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