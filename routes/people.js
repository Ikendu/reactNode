const express = require('express');
const router = express.Router();

let {people} = require('../data')

const {getP, postP, putP, deleteP} = require('./controller/people')

router.get('/', getP)
router.post('/', postP)
router.put('/:id', putP)
router.delete('/:id', deleteP)


 module.exports = router