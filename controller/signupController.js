const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel = require('../model/signupModel');

const signupController = async (req, res) => {

    try {
        const { name, email, password } = req.body

        const newSignup = new signupModel({
            name, email, password
        });

        await newSignup.save();

        return handleResponse(res, statusCode.OK, newSignup);

    } catch (error) {
        console.log(error);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}

module.exports = {
    signupController
}