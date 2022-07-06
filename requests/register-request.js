const { body } = require('express-validator');

const loginRequest = [
    body('name').exists().isLength({min: 8}).withMessage('must be at least 9 characters long'),
    body('email').exists().isEmail(),
    body('password').exists().withMessage('password is required').isLength({min: 8}).withMessage('must be at least 9 characters long'),
];

module.exports = loginRequest;