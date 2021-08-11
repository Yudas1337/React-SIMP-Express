
const { validateLogin } = require('../validation/validation')
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const token = require('./TokenController')

module.exports.login = login = async(req,res) => {
    const {error} = validateLogin(req.body)
    if(error)  return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const user = await User.findOne({email:req.body.email})
    if(!user)  return res.status(400).send({
        title: "Validation Error",
        message: 'Email Not Found',
        success:false
    })
    const validPass = await bcrypt.compare(req.body.password,user.password)

    if(validPass) {
        return res.status(200).send({
            message: 'Authentication Success',
            token: token.generateToken(user),
            success:true,
        })
    } 
    return res.status(400).send({
        title: "Validation Error",
        message: 'Authentication Failed!',
        success:false
    })
}