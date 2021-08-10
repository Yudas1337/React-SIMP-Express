const Joi = require('@hapi/joi');

module.exports.validateAddQuote = validateAddQuote = (data)=> {
    const schema = Joi.object({
        quote: Joi.string().required(),
        source: Joi.string().min(6).required()

    })
    return schema.validate(data)
}