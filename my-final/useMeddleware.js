const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./navbar-app'))

// app.get('/', (req, res) => {
//	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

// })

app.all('*', (req, res) => {
	res.send('<h>Page does not exit</h>')
})

app.listen(5000, () => {
	console.log('Port is set to 5000')
})