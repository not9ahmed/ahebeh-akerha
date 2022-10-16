const express = require('express')


const app = express()

const PORT = 3000

const ejsLayouts = require('express-ejs-layouts')


// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// CONTROLLERS MIDDLEWARE
app.use('/ahebeh', require('./controllers/ahebeh.js'))
app.use('/akerha', require('./controllers/akerha.js'))


// ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('home.ejs')
})



// APP Listener

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})