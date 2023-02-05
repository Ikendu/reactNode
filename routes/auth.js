 const express = require('express');
 const router = express.Router();




 router.post('/', (req, res) => {
 	const {name} = req.body
 	if (name){
 		res.status(200).send(`<h2>Welcome ${name}</h2>`)
 	}
 	res.send('<h2>Please provide a name</h2>')
 })

module.exports = router