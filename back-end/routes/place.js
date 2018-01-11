const express = require('express');
const router = new express.Router();

const Place = require('mongoose').model('Place');

router.get('/getAll', async (req, res, next) => {
    try {
        Place.find().then((places) => {
            res.status(200).json({
                success: true,
                places
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

router.get('/getById/:id', async (req, res, next) => {
    try {
        let id = req.params.id
        Place.findById(id).then((place) => {
            res.status(200).json({
                success: true,
                places
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