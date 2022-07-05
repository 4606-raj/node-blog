const loginRequest = require('./requests/login-request');
const validateRequest = require('./middleware/request-validator');
const userController = require('./controllers/userController')
const blogController = require('./controllers/blogController')

const routes = (app) => {
    app.post('/api/register', userController.register);
    app.post('/api/login', loginRequest, validateRequest, userController.login);
    app.get('/api/blogs', blogController.index);
    app.get('/api/blogs/:id', blogController.show);
}

module.exports = routes;