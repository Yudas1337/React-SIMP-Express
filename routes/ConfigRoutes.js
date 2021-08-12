const ConfigRoutes = require('express').Router()
const controller = require('../controllers/ConfigController')
const middleware = require('../middleware/index')

ConfigRoutes.get('/configs/getData', async(req,res) => {
    const configs = await controller.getConfigs(req,res)
    res.status(201).send({
        data: configs
      })
})

ConfigRoutes.put('/configs/update/:id', middleware.verifyBearerToken, async(req,res) => {
    await controller.updateConfigs(req,res)
  })

module.exports = ConfigRoutes