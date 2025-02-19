const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel = require('../model/signupModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await signupModel.find({ email: username }, { name: 1, password: 1 });
        if (user.length > 0) {

            const db_pwd = user[0].password;
            const db_name = user[0].name;

            // comapre your given password and stored password 
            const isValid = await bcrypt.compare(password, db_pwd);
            if (isValid) {
                const data = {
                    "name": db_name,
                    "email": username
                }

                //logic to create jwt token 
                const token = jwt.sign({ data }, process.env.JWT_SECRETKEY, { expiresIn: '2m' });
                const response = [
                    {
                        "msg": "Login Sucessfuly",
                        "token": token
                    }
                ]
                return handleResponse(res, statusCode.OK, response);
            } else {
                const data = [
                    {
                        "msg": "Wrong Password"
                    }
                ]
                return handleResponse(res, statusCode.NOT_FOUND, data);
            }


        } else {
            const data = [
                {
                    "msg": "wrong username"
                }
            ]
            return handleResponse(res, statusCode.NOT_FOUND, data);
        }




    } catch (error) {
        console.log(error);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}


module.exports = {
    loginController
}