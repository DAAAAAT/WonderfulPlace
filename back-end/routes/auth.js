const express = require('express');
const passport = require('passport');
const validator = require('validator');

function validateSignupForm (payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.userName !== 'string' || payload.userName.trim().length === 0) {
        isFormValid = false;
        errors.userName = 'Please provide a correct userName.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 4) {
        isFormValid = false;
        errors.password = 'Password must have at least 4 characters.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

function validateLoginForm (payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.userName !== 'string' || payload.userName.trim().length === 0) {
        isFormValid = false;
        errors.userName = 'Please provide your userName.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

function register(req, res, next) {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-signup', (err) => {
        if (err) {
            return res.status(201).json({
                success: false,
                message: err
            });
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req, res, next);
}

function login(req, res, next) {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-login', (err, token, userData) => {
        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(200).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(200).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
        });
    })(req, res, next);
}


// router.get('/logout', function (req, res) {
//     res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
//     return res.sendStatus(401);
// });

module.exports = {login, register};
