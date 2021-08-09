const QuotesRoute = require('express').Router()
const controller = require('../controllers/QuotesController')
const middleware = require('../middleware')

//  QuotesRoute.use(middleware.forbidden)

QuotesRoute.get('/admin/services',async(req,res)=> {
    const services = await getAllServices()
    res.status(201).render('admin/services',{results : services})
})

QuotesRoute.get('/admin/services/addData',async(req,res)=> {
    res.status(201).render('admin/addServices')
})

QuotesRoute.post('/admin/services',async(req,res) =>{
    await controller.addServices(req,res)
    
})

QuotesRoute.get('/admin/services/:paramsId',async(req,res)=> {
    const getServices = await getServicesById(req,res)
    res.status(201).render('admin/editServices',{results : getServices})
})

QuotesRoute.put('/admin/services/:paramsId',async(req,res) => {
    await controller.updateServices(req,res)
  })

QuotesRoute.delete('/admin/services/:paramsId',async(req,res) => {
  await controller.deleteServices(req,res)
})

module.exports = QuotesRoute