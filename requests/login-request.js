const { body } = require('express-validator');

const loginRequest = [
    body('name').exists(),
    body('email').exists().isEmail(),
    body('password').exists().isLength({min: 8}),
];

module.exports = loginRequest;