const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');

const User = require('mongoose').model('User');
const Destination = require('mongoose').model('Destination');

router.get('/:id', async (req, res, next) => {
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

router.get('/wishToVisit', async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;
        let user = await User.findById(userId);

        let wishToVisit = user.wishToVisit;
        if (!wishToVisit || !user) {
            return res.status(417).json({
                success: false,
                message: 'Could not get user wishlist'
            });
        }
        return res.status(200).json({
            success: true,
            wishToVisit
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

})

router.get('/myVisitDestination', async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1];
        let decoded = await jwt.verify(token, 's0m3 r4nd0m str1ng');
        let userId = decoded.sub;
        let user = await User.findById(userId);

        let myVisitedDestinations = user.myVisitedDestinations;
        if (!myVisitedDestinations || !user) {
           return res.status(417).json({
                success: false,
                message: 'Could not get user destinations'
            })
        }
        return res.status(200).json({
            success: true,
            myVisitedDestinations
        });
    } catch (error) {
       return res.status(400).json({
            success: false,
            message: error.message
        })
    }
});

module.exports = router;