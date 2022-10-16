const express = require('express')


const app = new express()

const PORT = 3000


// MIDDLEWARE
app.set('view engine', 'ejs')



// ROUTES

app.get('/', (req, res) => {
    res.send('YOOO')
})





// APP Listen

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})