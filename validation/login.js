const { Joi } = require('express-validation');

exports.loginvalidation = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        accesslevel: Joi.string().optional()
    })
}

exports.forgotpassword = {
    body: Joi.object({
        username: Joi.string().required(),
        old_password: Joi.string().required(),
        new_password: Joi.string().required()
    })
}