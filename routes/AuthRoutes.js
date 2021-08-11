const AuthRoutes = require('express').Router()
const controller = require('../controllers/AuthController')

AuthRoutes.post('/login', async(req,res)=> {
    await controller.login(req,res)
})

module.exports = AuthRoutes