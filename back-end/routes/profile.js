const express = require('express');
const router = new express.Router();

const User = require('mongoose').model('User');
const Place = require('mongoose').model('Place');

router.get('/:id', async(req, res, next) => {
    let id = req.params.id

    try {
        const user = await User.findById(id)
        
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

router.get('/:id/wishToVisit' ,async(req, res, next) => {
    let id = req.params.id
    
    try {
        const wishToVisit = await User.findById(id).populate('wishToVisit').select('wishToVisit')
        if (!wishToVisit) {
            res.status(200).json({
                success: false,
                message: 'User no exist.'
            })
            return
        }
        res.status(200).json({
            success: true,
            wishToVisit
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

router.get('/:id/myVisitPlace' ,async(req, res, next) => {
    let id = req.params.id
    
    try {
        const myVisitedPlaces = await User.findById(id).populate('myVisitedPlaces').select('myVisitedPlaces')
        if (!myVisitedPlaces) {
            res.status(200).json({
                success: false,
                message: 'User no exist.'
            })
            return
        }
        res.status(200).json({
            success: true,
            myVisitedPlaces
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

router.post('/:id/wishToVisit' ,async(req, res, next) => {
    let id = req.params.id
    let placeId = req.body.placeId
    try {
        let place = await Place.findById(placeId)
        let user = await User.findById(id)
        if (!place || !user) {
            res.status(200).json({
                success: false,
                message: 'User or Place not exist'
            }) 
            return
        }
        await User.findByIdAndUpdate(
            id, {
                $addToSet: {
                    "wishToVisit": placeId
                }
            }, {
                safe: true,
                upsert: true
            }
        );
        
        res.status(200).json({
            success: true,
            message: 'Success add wish to visit place.'
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

router.post('/:id/myVisitPlace' ,async(req, res, next) => {
    let id = req.params.id
    let placeId = req.body.placeId
    try {
        let place = await Place.findById(placeId)
        let user = await User.findById(id)
        
          if (!place || !user) {
            res.status(200).json({
                success: false,
                message: 'User or Place not exist'
            }) 
            return
        }        
        await User.findByIdAndUpdate(
            id, {
                $addToSet: {
                    "myVisitedPlaces": placeId
                }
            }, {
                safe: true,
                upsert: true
            }
        );
        
        res.status(200).json({
            success: true,
            message: 'Success add my visited places.'
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

module.exports = router;