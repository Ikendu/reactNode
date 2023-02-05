const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
	res.status(200).json({success: true, data: people})
})

 app.post('/login', (req, res) => {
 	const {name} = req.body
 	if (name){
 		res.status(200).send(`<h2>Welcome ${name}</h2>`)
 	}
 	res.send('<h2>Please provide a name</h2>')
 })

app.listen(5000, () => {
	console.log('App is listening on port 5000...')
})