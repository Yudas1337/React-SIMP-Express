const Joi = require('@hapi/joi');

module.exports.quoteValidation = quoteValidation = (data)=> {
    const schema = Joi.object({
        quote: Joi.string().required(),
        source: Joi.string().min(6).required().email()

    })
    return schema.validate(data)
}