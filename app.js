const http = require('http')

const server = http.createServer((req, res) => {
	console.log("The server is set");

	res.end("Homepage")
})
server.listen(2500)