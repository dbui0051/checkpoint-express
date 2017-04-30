'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos.js');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.


router.get('/', function(req, res, next){
	res.send('Welcome to home page.');
	next();
});

router.get('/users', function(req, res, next){
	console.log('List of people');
	let listOfPeople = todos.listPeople();
	res.send(listOfPeople);
	next();
});

todos.listPeople();
todos.add('dave', { content: 'task 1 for dave' });
todos.add('joe', { content: 'task 1 for joe', complete: true });
todos.add('joe', { content: 'task 2 for joe' });

todos.listPeople();