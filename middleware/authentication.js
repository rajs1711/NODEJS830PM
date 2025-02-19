const jwt = require('jsonwebtoken');
const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { statusCode } = require("../config/configuration.json");

const authenticateJWT = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            const data = [{
                "msg": "Access Denied"
            }];
            return handleResponse(res, statusCode.ACCESS_DENIED, data);
        }

        jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
            if (err) {
                const data = [{
                    "msg": "Access Denied"
                }];
                return handleResponse(res, statusCode.ACCESS_DENIED, data);
            }
            req.userinfo = user;
            next();
        })

    } catch (error) {

        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")
    }


}

module.exports = { authenticateJWT }