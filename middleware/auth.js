const jwt = require("jsonwebtoken");
// const config = require("config");
const { errorResponse } = require('../helpers/helpers');

module.exports = function(req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    return errorResponse(res, "Access denied. No token provided", 401);
  } 
  
  token = token.replace('Bearer ',''); 

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (ex) {
    return errorResponse(res, "Invalid token", 401);

  }
};