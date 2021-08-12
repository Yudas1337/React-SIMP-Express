const AuthRoutes = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware/index')

AuthRoutes.post('/login', async(req,res)=> {
    await controller.login(req,res)
})

AuthRoutes.post('/updatepass', middleware.verifyBearerToken, async(req,res) => {
    await controller.updatePassword(req,res)
})

module.exports = AuthRoutes