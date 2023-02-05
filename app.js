const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.use(express.json())


app.get('/api/people', (req, res) => {
	res.status(200).json({success: true, data: people})
})



app.post('/api/people/:id', (req, res) => {
	const {name} = req.body
	if(!name){
		return res.status(400).json({success: false, msg: 'Please provide a name'})
	}
	res.status(201).json({success: true, person: name})
})



app.put('/api/people/:id', (req, res) => {
	const { id } = req.params
	const { name } = req.body

	const person = people.find((person) => person.id === Number(id))
	if(!person){
		return res.status(404).json({success: false, msg: `No person with id ${id}`})
	}
	const newPeople = people.map((person) => {
		if (person.id === Number(id)){
			person.name = name
		}
		return person
	})
	res.status(200).json({success: true, data: newPeople})
})



 app.post('/login', (req, res) => {
 	const {name} = req.body
 	if (name){
 		res.status(200).send(`<h2>Welcome ${name}</h2>`)
 	}
 	res.send('<h2>Please provide a name</h2>')
 })


 app.delete('/api/people/:id', (req, res) => {
 	const person = people.find((person) => person.id === Number(req.params.id))
 	if(!person){
 		return res.status(404).json({success: false, meg: `Person with id ${req.params.id} not found`})
 	}

 	const newPeople = people.filter((person) => person.id !== Number(req.params.id))
 			return res.status(200).json({success: true, data: newPeople})
})



app.listen(5000, () => {
	console.log('App is listening on port 5000...')
})