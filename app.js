const express = require('express')
const app = express()

const logger = require('./logger-middle')
const authorize = require('./my-final/authorize')

app.use([logger, authorize])

//middleware 
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
	res.send('<h1> About Page </h1>')
})

app.get('/api/products', (req, res) => {
	res.send('<h1> Products Page </h1>')
})

app.get('/home/items', (req, res) => {
	res.send('<h1> List of items </h1>')
})
app.listen(5000, () => {
	console.log('listening on port 5000...')
})