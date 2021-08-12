
const { validateLogin, validateNewPassword } = require('../validation/validation')
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

module.exports.updatePassword = updatePassword = async(req,res) => {
    const id = token.getUserByJwt(req)._id
    const {error} = validateNewPassword(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const user = await User.findById(id)
    if(!user) return res.status(400).send({
        title: "Validation Error",
        message: "User Does Not Exist",
        success: false
    })
    const validPass = await bcrypt.compare(req.body.oldPass,user.password)
    if(!validPass) return res.status(400).send({
        title: "Validation Error",
        message: "Old Password does not match",
        success: false
    })
    const salt = await bcrypt.genSalt(10)
    const newPass = await bcrypt.hash(req.body.newPass,salt)
    try {
        const update = await User.updateOne(
            { _id : user._id },
            { $set: { "password" : newPass }})
        if(update) res.status(201).send({
            title: "Validation Succesfuly",
            message: "Update Password Successfuly",
            success: true
        })
    } catch (error) {
        res.send(error).status(500)
    }
}