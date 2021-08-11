const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const config = require('./database/index')
const QuoteRoutes = require('./routes/QuoteRoutes')
const AuthRoutes = require('./routes/AuthRoutes')
const middleware = require('./middleware/index')
const cors = require('cors')
config.connect();

app.use(cors())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/assets',express.static(path.join(__dirname + '/public')))
hbs.localsAsTemplateData(app)
app.use(middleware.verifyApiToken)
app.use(process.env.API_PREFIX, AuthRoutes)
app.use(process.env.API_PREFIX, QuoteRoutes)

app.get('/', (req,res) => {
    res.status(201).render('index');
});

app.get('*',(req, res) => {
	res.status(404).render('errors/404_page')
})

app.listen(process.env.PORT)