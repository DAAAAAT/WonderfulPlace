const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');

const Destination = require('mongoose').model('Destination');
const Comment = require('mongoose').model('Comment');
const User = require('mongoose').model('User');

router.get('/getByCategory/:id', async (req, res, next) => {
    try {
        let categoryId = req.params.id;

        let destinations = await Destination.find({ "category": categoryId});

        destinations = destinations.sort((a, b) => b.rating - a.rating);

        if (!destinations) {
            return res.status(204).json({
                success: false,
                message: 'No Destinations available'
            });
        }

        return res.status(200).json({
            success: true,
            destinations
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

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

        let currenetDestination = await Destination.findById(id);
        let updatedComment = await Comment.findByIdAndUpdate(commentId, comment);

        if(!currenetDestination) {
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
            message: 'Updated created successfully',
            updatedComment
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
})

router.post('/:id/addToWishedList', async (req, res) => {
    try {
        let id = req.params.id;

        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;
        let user = await User.findById(userId);

        let wishList = user.wishToVisit;
        let visited = user.myVisitedPlaces;

        if(wishList.some(d => d == id)) {
            return res.status(417).json({
                success: false,
                message: 'Destination is already in wishlist'
            });
        }
        if(visited.some(d => d == id)) {
            return res.status(417).json({
                success: false,
                message: 'You have already visited this destination'
            })
        }
        user.wishToVisit.push(id);
        let updatedUser = await User.findByIdAndUpdate(userId, user);

        return res.status(200).json({
            success: true,
            message: 'Destination added to wishlist successfully',
            updatedUser
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
});

router.post('/:id/addToVisitedList', async (req, res) => {
    try {
        let id = req.params.id;

        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;
        let user = await User.findById(userId);

        let visited = user.myVisitedPlaces;

        if(visited.some(d => d == id)) {
            return res.status(417).json({
                success: false,
                message: 'You have already visited this destination'
            })
        }

        user.myVisitedPlaces.push(id);
        if(user.wishToVisit.some(d => d == id)) {
            user.wishToVisit.splice(user.wishToVisit.indexOf(id), 1)
        }

        let updatedUser = await User.findByIdAndUpdate(userId, user);

        return res.status(200).json({
            success: true,
            message: 'Destination added to visited successfully',
            updatedUser
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
});

function handleError(error, res) {
    res.status(200).json({
        success: false,
        message: error.message
    })
}
module.exports = router;