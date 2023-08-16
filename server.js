const express = require('express')

const pokemon = require('./models/pokeman')
const methodOverride = require('method-override')
const app = express()

const PORT = 3002

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))




app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon})
})

app.get('/pokemon/:id', (req,res) => {
    res.render('Show.jsx', { pokemon: pokemon[req.params.id] })
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})