const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const config = require('./database/index')
const QuoteRoutes = require('./routes/QuoteRoutes')
const middleware = require('./middleware/index')
config.connect();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/assets',express.static(path.join(__dirname + '/public')))
hbs.localsAsTemplateData(app)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, X-Token-Auth, Authorization')
    next()
  });
  

app.use(process.env.API_PREFIX, middleware.verifyApiToken, QuoteRoutes)

app.get('/', (req,res) => {
    res.status(201).render('index');
});

app.get('*',(req, res) => {
	res.status(404).render('errors/404_page')
})

app.listen(process.env.PORT)