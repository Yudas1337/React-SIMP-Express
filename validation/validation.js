const Joi = require('@hapi/joi');

module.exports.validateAddQuote = validateAddQuote = (data) => {
    const schema = Joi.object({
        quote: Joi.string().required(),
        source: Joi.string().min(6).required()

    })
    return schema.validate(data)
}

module.exports.validateLogin = validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
    return schema.validate(data)
}

module.exports.validateAddGreeting = validateAddGreeting = (data) => {
    const schema = Joi.object({
        hours: Joi.required(),
        text: Joi.string().min(6).required()

    })
    return schema.validate(data)
}

module.exports.validateConfigs = validateConfigs = (data) => {
    const schema = Joi.object({
        copyrights: Joi.string().required(),
        favColor: Joi.string().required(),
        specialMsg: Joi.string().required()

    })
    return schema.validate(data)
}

module.exports.validateNewPassword = validateNewPassword = (data) => {
    const schema = Joi.object({
        oldPass: Joi.string().required().trim(),
        newPass: Joi.string().min(6).required().trim(),
        repeatPass: Joi.string().equal(Joi.ref('newPass')).min(6).required().trim()
        .label('Confirm Password').options({
            messages : {'string.only': '{{#label}} does not match'}
        })

    })
    return schema.validate(data)
}