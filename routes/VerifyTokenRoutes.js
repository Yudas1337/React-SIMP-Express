const VerifyTokenRoutes = require('express').Router()
const controller = require('../controllers/TokenController')

VerifyTokenRoutes.get('/verify/token', async(req,res,next)=> {
    await controller.verifyToken(req,res,next)
})

module.exports = VerifyTokenRoutes