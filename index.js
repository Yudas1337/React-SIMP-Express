const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const config = require('./config')
config.connect();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/assets',express.static(path.join(__dirname + '/public')))
hbs.localsAsTemplateData(app);

app.get('/', (req,res) => {
    res.status(201).render('index');
});

const QuotesRoute = require('./routes/QuotesRoute')
app.use(QuotesRoute)


app.get('*',(req, res) => {
	res.status(404).render('errors/404_page')
})

app.listen(process.env.PORT)