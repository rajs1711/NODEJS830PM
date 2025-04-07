const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel = require('../model/signupModel');
const bcrypt = require('bcrypt');
const logger = require('../helpers/logger');
const routepath = 'controller/signupController';

const signupController = async (req, res) => {
    logger.log({ level: 'info', label: routepath, message: 'signup function execution start' });
    try {
        const { name, email, mobile } = req.body

        const user = await signupModel.find({
            email: email
        });

        if (user.length > 0) {

            const data = [
                {
                    "msg": "Email/username should be unique"
                }
            ]
            return handleResponse(res, statusCode.OK, data);
        }

        //logic to encyrpt your password 
        const rand_num = Math.floor(1000 + Math.random() * 9000);
        const password = `${rand_num}@Pwd`;
        const encrypted_password = await bcrypt.hash(password, 10); // 10 is salt 
        const newSignup = new signupModel({
            name, email, mobile, password: encrypted_password
        });

        await newSignup.save();

        return handleResponse(res, statusCode.OK, newSignup);

    } catch (error) {
        console.log(error);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}

const profileImageController = async (req, res) => {
    try {
        const loggedinuseremail = req.userinfo.data.email;
        const rs = await signupModel.updateOne({
            email: loggedinuseremail
        }, {
            $set: { profileImage: req.profileImageUrl }
        });

        const data = [{
            profilePublicUrl: req.profileImageUrl,
        },
        req.userinfo
        ]

        return handleResponse(res, statusCode.OK, data);
    } catch (err) {
        console.log(err);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")
    }
}

module.exports = {
    signupController,
    profileImageController
}