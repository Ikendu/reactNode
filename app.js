const express = require('express')
const app = express()

//middleware 

app.get('/', logger, (req, res) => {
	res.send('<h1>Home Page</h1>')
})

app.get('/about', logger, (req, res) => {
	res.send('<h1> About Page </h1>')
})

app.listen(5000, () => {
	console.log('listening on port 5000...')
})