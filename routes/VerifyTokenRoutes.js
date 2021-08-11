const VerifyTokenRoutes = require('express').Router()
const controller = require('../controllers/TokenController')

VerifyTokenRoutes.get('/verify/token', async(req,res)=> {
    await controller.verifyToken(req,res)
})

module.exports = VerifyTokenRoutes