const GreetingRoutes = require('express').Router()
const controller = require('../controllers/GreetingController')
const middleware = require('../middleware/index')

GreetingRoutes.get('/greetings/getData', async(req,res)=> {
     const greetings = await controller.getAllGreetings()
     res.status(201).send({
       data: greetings
     })
})

GreetingRoutes.post('/greetings/addData', middleware.verifyBearerToken, async(req,res)=> {
    await controller.addGreetings(req,res)
})

GreetingRoutes.put('/greetings/update/:id', middleware.verifyBearerToken, async(req,res) => {
    await controller.updateGreetings(req,res)
  })

GreetingRoutes.delete('/greetings/delete/:id', middleware.verifyBearerToken, async(req,res) => {
  await controller.deleteGreetings(req,res)
})

module.exports = GreetingRoutes