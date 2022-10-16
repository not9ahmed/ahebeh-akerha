const express = require('express')

const router = express.Router()


// Routes go here

// Favorite animals
router.get('/animals', (req, res) => {

    const context ={
        animals: ['house cats' ,'arctic monkeys', 'fluffy puppies']
    }

    res.render('animals.ejs', context)
})


// Favorite foods
router.get('/foods', (req, res) => {

    const context ={
        foods: ['pizza' ,'burger', 'ice cream']
    }

    res.render('foods.ejs', context)
})


module.exports = router