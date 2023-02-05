const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Home Page')
})
app.get('/about', (req, res) => {
	res.send('About Page')
})
app.get('/contact', (req, res) => {
	res.send('Contact us here')
})
app.all('*', (req, res) => {
	res.send('<h1>The page you are looking for does not exist</h1>')
})
/*
app.post
app.put
app.delete
app.all
app.use
*/
app.listen(5000, () =>{
	console.log("The server is listening on port 5000");
})