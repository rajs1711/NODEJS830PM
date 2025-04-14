const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel = require('../model/signupModel');
const OTPSchema = require('../model/otpModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../helpers/sendEmail');
const logger = require('../helpers/logger');
const routepath = 'controller/loginController'
const loginController = async (req, res) => {
    logger.log({ level: 'error', label: routepath, message: 'Login function execution start' });
    try {
        const { username, password } = req.body;
        const user = await signupModel.find({ email: username }, { name: 1, password: 1 });
        if (user.length > 0) {
            logger.log({ level: 'info', label: routepath, message: 'Username Found' });
            const db_pwd = user[0].password;
            const db_name = user[0].name;

            // comapre your given password and stored password 
            const isValid = await bcrypt.compare(password, db_pwd);
            if (isValid) {
                logger.log({ level: 'info', label: routepath, message: 'valid password' });
                const data = {
                    "name": db_name,
                    "email": username
                }

                //logic to create jwt token 
                const token = jwt.sign({ data }, process.env.JWT_SECRETKEY, { expiresIn: '2h' });
                const response = [
                    {
                        "status": 200,
                        "msg": "Login Sucessfuly",
                        "token": token
                    }
                ]
                logger.log({ level: 'info', label: routepath, message: 'sucessfully send response' });
                return handleResponse(res, 200, response);
            } else {
                logger.log({ level: 'Error', label: routepath, message: 'Wrong Password' });
                const data = [
                    {
                        "status": 401,
                        "msg": "Wrong Passwords"
                    }
                ]
                return handleResponse(res, 200, data);
            }


        } else {
            logger.log({ level: 'Error', label: routepath, message: 'Wrong username' });
            const data = [
                {
                    "status": 401,
                    "msg": "wrong username"
                }
            ]
            return handleResponse(res, 200, data);
        }


    } catch (error) {
        logger.log({ level: 'info', label: routepath, message: `Execpetion occur ${error}` });
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}

const sendotp = async (req, res) => {

    try {
        const { username } = req.body;
        const user = await signupModel.find({ email: username });
        if (user.length > 0) {

            //logic to generate otp (1000 to 9000)
            const otp = Math.floor(1000 + Math.random() * 9000);
            // otp send to above email/username
            const email_payload = {
                "to": username,
                "from": process.env.registeredemail,
                "subject": "OTP To Login RESTRO APP",
                "html": `<body>
                   <center>
                     <h2 style='color:red;'>OTP RESTRO APP</h2>
                     <p>Please don't share this OTP</p>
                     <p><b>${otp}</b></p>
                   </center>
                </body>`

            }
            // await sendEmail(email_payload);

            //save this otp in our db (purpose to verify otp)
            const newOTP = new OTPSchema({
                email: username, otp, isValid: 1
            });

            await newOTP.save();
            res.status(200).json({
                "msg": "Your Otp send to regiseted Email",
                "OTP": otp
            });
        } else {

            return res.status(400).json({
                "msg": "Username Not Found"
            });
        }




    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "msg": "Internal Server Error"
        });

    }
}


module.exports = {
    loginController,
    sendotp
}