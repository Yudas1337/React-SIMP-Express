
const { validateLogin } = require('../validation/validation')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')

module.exports.login = login = async(req,res) => {
    const {error} = validateLogin(req.body)
    if(error)  return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const user = await User.findOne({email:req.body.email})
    const salt = await bcrypt.genSalt(10)
    if(!user)  return res.status(400).send({
        title: "Validation Error",
        message: 'Email Not Found',
        success:false
    })
    const validPass = await bcrypt.compare(req.body.password,user.password)

    if(validPass) {
        return res.status(200).send({
            message: 'Authentication Success',
            token: jwt.sign({
                _id: user._id,
                username:user.username,
                email: user.email
            }, process.env.JWT_SECRET,{ expiresIn: '60m' }),
            success:true,
        })
    } 
    return res.status(400).send({
        title: "Validation Error",
        message: 'Authentication Failed!',
        success:false
    })
}