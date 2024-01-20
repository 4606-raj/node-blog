const {validationResult} = require('express-validator');
const { errorResponse } = require('../helpers/helpers');

const validateRequest = (req, res, next) => {
    let errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        let response = {
            errors: errors.array()
        }
        return errorResponse(res, 'validation error', 400, errors.array());
        // return res.status(400).json({ errors: errors.array() });
    }

    next();
}

module.exports = validateRequest;