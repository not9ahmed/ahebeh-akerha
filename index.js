const express = require('express')


const app = express()

const PORT = 3000

const ejsLayouts = require('express-ejs-layouts')


// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)


// ROUTES

app.get('/', (req, res) => {
    res.render('home.ejs')
})


// Favorite animals
app.get('/animals', (req, res) => {

    const context ={
        animals: ['house cats' ,'arctic monkeys', 'fluffy puppies']
    }

    res.render('animals.ejs', context)
})


// APP Listener

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})