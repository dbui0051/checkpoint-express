'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos.js');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.


router.get('/users', function(req, res){
	res.send(todos.listPeople());
});

// router.get('/users/:name/tasks', function(req, res){
// 	let person = req.params.name;
// 	res.send(todos.list(person));
// });

router.post('/users/:name/tasks', function(req, res){
	let person = req.params.name;
	let personsTask = req.body;
	res.statusCode = 201;
	res.send(todos.add(person, personsTask))
});

router.get('/users/:name/tasks', function(req, res){
	let person = req.params.name;
	let taskStatus = req.query.status;  //Either {'status': 'complete'} or {'status': 'active'} aka incomplete
	if(taskStatus === 'complete'){
		let tasks = todos.list(person).filter(task => task.complete === true);
		res.send(tasks);
	}
	else{
		let tasks = todos.list(person).filter(task => task.complete === false);
		res.send(tasks);
	}
});

router.put('/users/:name/tasks/:index', function(req, res){
	let person = req.params.name;
	let index = req.params.index;
	todos.list(person)[index].complete = true;
	res.send('Updated task.');
});

router.delete('/users/:name/tasks/:index', function(req, res){
	let person = req.params.name;
	let index = req.params.index;
	res.statusCode = 204;
	todos.list(person).splice(index, 1);
	res.send('Finished task.');
});





