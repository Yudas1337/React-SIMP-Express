const QuoteRoutes = require('express').Router()
const controller = require('../controllers/QuoteController')
const middleware = require('../middleware')

//  QuoteRoutes.use(middleware.forbidden)

QuoteRoutes.get('/quotes/getData', async(req,res)=> {
     const quotes = await controller.getAllQuotes()
     res.status(201).send({
       data: quotes
     })
})

QuoteRoutes.get('/admin/services/addData',async(req,res)=> {
    res.status(201).render('admin/addServices')
})

QuoteRoutes.post('/admin/services',async(req,res) =>{
    await controller.addServices(req,res)
    
})

QuoteRoutes.get('/admin/services/:paramsId',async(req,res)=> {
    const getServices = await getServicesById(req,res)
    res.status(201).render('admin/editServices',{results : getServices})
})

QuoteRoutes.put('/admin/services/:paramsId',async(req,res) => {
    await controller.updateServices(req,res)
  })

QuoteRoutes.delete('/admin/services/:paramsId',async(req,res) => {
  await controller.deleteServices(req,res)
})

module.exports = QuoteRoutes