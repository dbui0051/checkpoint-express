'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos.js');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.


router.get('/users', function(req, res, next){
	res.send(todos.listPeople());
});

router.get('/users/:name/tasks', function(req, res){
	let person = req.params.name;
	let taskStatus = req.query.status;

	if (todos.listPeople().indexOf(person) === -1) return res.status(404).send('404 Not Found');
	if (taskStatus === 'complete'){
		let tasks = todos.list(person).filter(task => task.complete === true);
		return res.send(tasks);
	}
	else if (taskStatus === 'active') {
		let tasks = todos.list(person).filter(task => task.complete === false);
		return res.send(tasks);
	}

	res.send(todos.list(req.params.name));
});

router.post('/users/:name/tasks', function(req, res){
	todos.add(req.params.name, req.body)
	res.status(201).json(req.body);
});

router.put('/users/:name/tasks/:index', function(req, res){
	const index = req.params.index;
	todos.list(req.params.name)[index].complete = true;
	res.send('Updated task.');
});

router.delete('/users/:name/tasks/:index', function(req, res){
	const index = req.params.index;
	res.statusCode = 204;
	todos.list(req.params.name).splice(index, 1);
	res.send('Finished task.');
});

