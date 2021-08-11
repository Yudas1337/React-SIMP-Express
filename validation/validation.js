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
        hours: Joi.string().required(),
        text: Joi.string().min(6).required()

    })
    return schema.validate(data)
}