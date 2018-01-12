const express = require('express');
const router = new express.Router();

const Destination = require('mongoose').model('Destination');
const Comment = require('mongoose').model('Comment');

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

router.get('/:id', (req, res, next) => {
    try {
        let id = req.params.id
        Destination.findById(id).then((destination) => {
            return res.status(200).json({
                success: true,
                destination
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
});

router.post('/:id/addComment', async (req, res) => {
    try {
        let id = req.params.id;

        let currenetDestination = await Destination.findById(id);
        let currentComment = await Comment.create(req.body);
        currenetDestination.comments.push(currentComment._id);

        let updatedDestination = await Destination.findByIdAndUpdate(id, currenetDestination);

        if(!currenetDestination) {
            return res.status(204).json({
                success: false,
                message: 'Invalid destination'
            })
        }
        if(!currentComment) {
            return res.status(204).json({
                success: false,
                message: 'Couldn\'t create comment'
            })
        }
        if(!updatedDestination) {
            return res.status(417).json({
                success: false,
                message: 'Couldn\'t update destination'
            })
        }

        return res.status(201).json({
            success: true,
            message: 'Comment created successfully'
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
})

function handleError(error, res) {
    res.status(200).json({
        success: false,
        message: error.message
    })
}
module.exports = router;