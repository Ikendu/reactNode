const authorize = (req, res, next) => {
	const {user, id} = req.query
	if(user === 'john' || id === '3'){
		req.user = {name: 'john', id: 3}
		next()
	}else{
		res.status(401).send('Unauthorized user')
		next()
	}
}
	

module.exports = authorize