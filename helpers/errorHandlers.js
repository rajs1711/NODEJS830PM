const { ValidationError } = require("express-validation");
const { handleErrorReponse, handleResponse } = require("./response");
const { errorMessage, statusCode } = require("../config/configuration.json");

const globalErrors = (err, req, res, next) => {

    if (err instanceof ValidationError) {
        const errorMsg = [];
        if (err.details) {
            const errorBody = err.details.body || err.details.params || err.details.headers || err.details.query;
            errorBody.forEach(ele => errorMsg.push({ message: ele.message }))
            return handleErrorReponse(res, errorMessage.INTERNAL_SERVER_ERROR_MSG, errorMsg[0]);
        }
    }

    return handleResponse(res, statusCode.INTERNAL_SERVER_ERROR, errorMessage.INTERNAL_SERVER_ERROR_MSG);


};

module.exports = {
    globalErrors
}