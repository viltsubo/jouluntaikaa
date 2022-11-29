// Require all of the things --> .env file, the server (express and ejs-layouts), the database (mongoose)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


// Initiates the database (mongoose)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Database'))


// Server (express) is able to read .JSON files
app.use(express.json())


// Server (express) is able to encode JSON sent from forms
app.use(bodyParser.urlencoded({ extended: false }))


// Require all of the routes
const indexRouter = require('./routes/index')


// Set the view engine (so the server uses .ejs files). Then determine the views folder
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// Set the layout file
app.set('layout', 'layouts/layout')
// Make server use express layouts
app.use(expressLayouts)
// Locate public files
app.use(express.static('public'))
// Override HTML POST to be either DELETE or PUT
app.use(methodOverride('_method'))


// Make server (express) use different routes
app.use('/', indexRouter)


// Initiate server (express) on port 3000
app.listen(process.env.PORT || 3000)
