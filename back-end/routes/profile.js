const express = require('express');
const router = new express.Router();

const User = require('mongoose').model('User');
const Destination = require('mongoose').model('Destination');

router.get('/:id', async(req, res, next) => {
    let id = req.params.id;

    try {
        const user = await User.findById(id);
        
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

router.get('/:id/myVisitDestination' ,async(req, res, next) => {
    let id = req.params.id
    
    try {
        const myVisitedDestinations = await User.findById(id).populate('myVisitedDestinations').select('myVisitedDestinations')
        if (!myVisitedDestinations) {
            res.status(200).json({
                success: false,
                message: 'User no exist.'
            })
            return
        }
        res.status(200).json({
            success: true,
            myVisitedDestinations
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
    let DestinationId = req.body.DestinationId
    try {
        let Destination = await Destination.findById(DestinationId)
        let user = await User.findById(id)
        if (!Destination || !user) {
            res.status(200).json({
                success: false,
                message: 'User or Destination not exist'
            }) 
            return
        }
        await User.findByIdAndUpdate(
            id, {
                $addToSet: {
                    "wishToVisit": DestinationId
                }
            }, {
                safe: true,
                upsert: true
            }
        );
        
        res.status(200).json({
            success: true,
            message: 'Success add wish to visit Destination.'
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

router.post('/:id/myVisitDestination' ,async(req, res, next) => {
    let id = req.params.id
    let DestinationId = req.body.DestinationId
    try {
        let Destination = await Destination.findById(DestinationId)
        let user = await User.findById(id)
        
          if (!Destination || !user) {
            res.status(200).json({
                success: false,
                message: 'User or Destination not exist'
            }) 
            return
        }        
        await User.findByIdAndUpdate(
            id, {
                $addToSet: {
                    "myVisitedDestinations": DestinationId
                }
            }, {
                safe: true,
                upsert: true
            }
        );
        
        res.status(200).json({
            success: true,
            message: 'Success add my visited Destinations.'
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }

})

module.exports = router;