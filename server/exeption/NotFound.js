module.exports =  class NotFound extends Error {
    statusCode = 404;
    constructor(message) {
        super(message);
    }
}