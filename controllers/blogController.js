const Blog = require('../models/Blog');
const helpers = require('../helpers/helpers');

module.exports.index = (req, res) => {
    Blog.find()
        .then(data => {
            helpers.successResponse(res, data);
        })
        .catch(err => {
            helpers.errorResponse(res, err, 404);
        })
}

module.exports.show = (req, res) => {
    Blog.findById(req.params.id)
        .then(data => {
            helpers.successResponse(res, data);
        })
        .catch(err => {
            helpers.errorResponse(res, err, 404);
        })
}

module.exports.store = async (req, res) => {
    await Blog.create(req.body);
    helpers.successResponse(res, {}, 'blog created successfully');

}
module.exports.update = async (req, res) => {
    data = req.body;
    await Blog.updateOne({_id: data.id}, {
        $set: {
            title: data.title,
            snippet: data.snippet,
        }
    });
    helpers.successResponse(res, {}, 'blog updated successfully');
}