const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");

const loginController = async (req, res) => {

    try {
        console.log('Login controller hit')
        console.log(req.body, '=========');
        const data = req.body;
        console.log(data);
        // logic to verify username and password is correct or not
        return handleResponse(res, statusCode.OK, data)

    } catch (error) {
        console.log(error);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}

module.exports = {
    loginController
}