const express = require('express')
const path = require('path')
const app = express()
const Router = express.Router()

const mainRoute = require('./routers/mainRouter')
const providersRoute = require('./routers/providersRouter')
const categoriesRoute = require('./routers/categoriesRouter')
const providerRoute = require('./routers/providerRouter')
const questionaryRoute = require('./routers/questionaryRouter')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', './views')


app.use('/', mainRoute)
app.use('/providers', providersRoute)
app.use('/categories', categoriesRoute)
app.use('/provider', providerRoute)
app.use('/questionary', questionaryRoute)

app.listen(3000, () => console.log('Сервер запущен!'))