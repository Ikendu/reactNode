const express = require('express')
const app = express()

const logger = require('./logger-middle')

app.use(logger)

//middleware 
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
	res.send('<h1> About Page </h1>')
})

app.listen(5000, () => {
	console.log('listening on port 5000...')
})