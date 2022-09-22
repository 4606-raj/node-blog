const { body } = require('express-validator');

const loginRequest = [
    body('title').exists().isLength({min: 4}).withMessage('must be at least 4 characters long'),
    body('snippet').exists()
];

module.exports = loginRequest;