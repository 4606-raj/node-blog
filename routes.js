const loginRequest = require('./requests/login-request');
const registerRequest = require('./requests/register-request');
const validateRequest = require('./middleware/request-validator');
const auth = require('./middleware/auth');
const userController = require('./controllers/userController')
const blogController = require('./controllers/blogController')

const routes = (app) => {
    app.post('/api/register', registerRequest, validateRequest, userController.register);
    app.post('/api/login', loginRequest, validateRequest, userController.login);
    app.get('/api/blogs', auth, blogController.index);
    app.get('/api/blogs/:id', blogController.show);
}

module.exports = routes;