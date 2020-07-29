
function errorHandler(err, req, res, next) {
    let status = 500
    let message = "Internal server error"
    console.log('DARI ERROR HANDLER MIDDLEWARE',err)
    switch (err.name) {
        case 'SequelizeValidationError':
            status = 400
            message = err.errors[0].message
            break;

        case 'JsonWebTokenError:':
            status = 404
            message = err.errors[0].message
            break;

        default:
            status = err.status
            message = err.msg
            break;
    }
    res.status(status).json({ msg: message })
}

module.exports = errorHandler