const express = require('express')

const router = express.Router()


// Routes go here

// Worst movies
router.get('/movies', (req, res) => {

    const context ={
        movies: ['Fast & Furious' ,'Thor: Ragnarok', 'Thor: Love & Thunder']
    }

    res.render('movies.ejs', context)
})


// Worst products
router.get('/products', (req, res) => {

    const context ={
        products: ['Samsung' ,'Intel', 'BlackBerry']
    }

    res.render('products.ejs', context)
})



module.exports = router