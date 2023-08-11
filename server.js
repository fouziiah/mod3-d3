const express = require('express')

const pokeman = require('.models/pokeman')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const app = express()

const PORT = 3001

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))




app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokeman', (req, res) => {
    res.send('pokemon')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})