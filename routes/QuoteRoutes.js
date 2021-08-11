const QuoteRoutes = require('express').Router()
const controller = require('../controllers/QuoteController')
const middleware = require('../middleware/index')

QuoteRoutes.get('/quotes/getData', async(req,res)=> {
     const quotes = await controller.getAllQuotes()
     res.status(201).send({
       data: quotes
     })
})

QuoteRoutes.post('/quotes/addData', middleware.verifyBearerToken, async(req,res)=> {
    await controller.addQuotes(req,res)
})

QuoteRoutes.put('/quotes/update/:id', middleware.verifyBearerToken, async(req,res) => {
    await controller.updateQuotes(req,res)
  })

QuoteRoutes.delete('/quotes/delete/:id', middleware.verifyBearerToken, async(req,res) => {
  await controller.deleteQuotes(req,res)
})

module.exports = QuoteRoutes