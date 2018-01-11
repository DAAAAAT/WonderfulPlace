const express = require('express');
const router = new express.Router();

const Place = require('mongoose').model('Place');
const Category = require('mongoose').model('Category');
const User = require('mongoose').model('User');



router.post('/addDestination', async (req, res, next) => {
    try {
        let reqBody = req.body;

        let imagesArray = reqBody.images.split(",");

        let placeObj = {
            name: reqBody.name,
            images: imagesArray,
            latitude: +reqBody.lat,
            longitude: +reqBody.lng,
            country: reqBody.country,
            city: reqBody.city,
            description: reqBody.description,
            author: reqBody.author,
            comments: [],
            likes: 0,
            category: reqBody.categoryId,
            rating: 0
        }

        Place.create(placeObj).then((place) => {
            res.status(200).json({
                success: true,
                message: 'Successfully added place'
            })
        }).catch(err => handleError(err, res))
    } catch (err) {
        handleError(err, res)
    }
})

router.delete('/deleteDestination/:id', async (req, res, next) => {
    try {
        let id = req.params.id

        Place.findByIdAndRemove(id).then((deletedPlace) => {
            res.status(200).json({
                success: true,
                deletedPlace
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

function handleError(error, res) {
    res.status(200).json({
        success: false,
        message: error.message
    })
}
module.exports = router;