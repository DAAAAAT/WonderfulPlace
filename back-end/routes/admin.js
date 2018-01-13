const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');

const Destination = require('mongoose').model('Destination');
const Category = require('mongoose').model('Category');
const User = require('mongoose').model('User');
const Comment = require('mongoose').model('Comment');

router.post('/addDestination', async (req, res, next) => {
    try {
        let reqBody = req.body;

        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;

        let DestinationObj = {
            name: reqBody.name,
            image: reqBody.image,
            latitude: +reqBody.lat,
            longitude: +reqBody.lng,
            country: reqBody.country,
            city: reqBody.city,
            description: reqBody.description,
            author: userId,
            comments: [],
            category: reqBody.categoryId,
            rating: 0
        };

        Destination.create(DestinationObj).then((Destination) => {
            res.status(200).json({
                success: true,
                message: 'Successfully added Destination'
            })
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
});

router.delete('/deleteDestination/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        Destination.findByIdAndRemove(id).then((deletedDestination) => {
            res.status(200).json({
                success: true,
                deletedDestination
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

router.post('/createCategory', async (req, res, next) => {
    try {
        let reqBody = req.body;

        let categoryObj = {
            title: reqBody.title
        }

        Category.create(categoryObj).then((category) => {
            res.status(200).json({
                success: true,
                message: 'Successfully created category'
            }).catch(err => handleError(err, res))
        })
    } catch (err) {
        handleError(err, res)
    }
})

router.get('/getAllCategories', async (req, res, next) => {
    try {
        Category.find().then((categories) => {
            res.status(200).json({
                success: true,
                categories
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }

})

router.delete('/deleteCategory/:id', async (req, res, next) => {
    try {
        let id = req.params.id

        Category.findByIdAndRemove(id).then((deletedCategory) => {
            res.status(200).json({
                success: true,
                deletedCategory
            });
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

router.delete('/deleteComment/:id', async (req, res, next) => {
    try {
        let id = req.params.id

        Comment.findByIdAndRemove(id).then((deletedComment) => {
            res.status(200).json({
                success: true,
                deletedComment
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