const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');

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
});

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;

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

        let currentDestination = await Destination.findById(id);
        let currentComment = await Comment.create(req.body);
        currentDestination.comments.push(currentComment._id);

        let updatedDestination = await Destination.findByIdAndUpdate(id, currenetDestination);

        if(!currentDestination) {
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
            message: 'Comment created successfully',
            currentComment
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
})

router.put('/:id/editComment/:commentId', async (req, res) => {
    try {
        let id = req.params.id;
        let commentId = req.params.commentId;
        let comment = req.body;

        let currentDestination = await Destination.findById(id);
        let updatedComment = await Comment.findByIdAndUpdate(commentId, comment);

        if(!currentDestination) {
            return res.status(204).json({
                success: false,
                message: 'Invalid destination'
            })
        }
        if(!updatedComment) {
            return res.status(204).json({
                success: false,
                message: 'Couldn\'t update comment'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Updated comment successfully',
            updatedComment
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
});

router.post(':id/addToWishedList', async (req, res) => {
    let id = req.params.id;


});

function handleError(error, res) {
    res.status(200).json({
        success: false,
        message: error.message
    })
}

module.exports = router;