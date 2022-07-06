module.exports.successResponse = (res, data, message = 'data found successfully', status = true) => {
    let response = { message, status, data }
    res.status(200).send(response)
}

module.exports.errorResponse = (res, message = 'data found successfully', code = 404, errors = [], status = false) => {
    let response = { message, errors, status }
    res.status(code).send(response)
}