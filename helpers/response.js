class Response {

    constructor(status, data) {
        this.status = status;
        this.data = data
    }
}

class ErrorResponse {

    constructor(status, message, error = {}) {
        this.status = status,
            this.message = message,
            this.error = error
    }
}

const handleResponse = (res, status = 200, data) => {
    const response = new Response(status, data);
    res.status(status).send(response);
}



const handleErrorReponse = (res, status = 500, message) => {

    const response = new ErrorResponse(status, message);
    res.status(status).send(response);
}



module.exports = {
    handleResponse,
    handleErrorReponse
}