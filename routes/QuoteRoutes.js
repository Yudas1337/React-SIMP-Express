const QuoteRoutes = require('express').Router()
const controller = require('../controllers/QuoteController')

QuoteRoutes.get('/quotes/getData', async(req,res)=> {
     const quotes = await controller.getAllQuotes()
     res.status(201).send({
       data: quotes
     })
})

QuoteRoutes.post('/quotes/addData', async(req,res)=> {
    await controller.addQuotes(req,res)
})

QuoteRoutes.put('/quotes/update/:id', async(req,res) => {
    await controller.updateQuotes(req,res)
  })

QuoteRoutes.delete('/quotes/delete/:id',async(req,res) => {
  await controller.deleteQuotes(req,res)
})

module.exports = QuoteRoutes