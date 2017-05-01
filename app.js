'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const volleyball = require('volleyball');
const routes = require('./routes');
module.exports = app; // this line is only used to make testing easier.

// remember to plug in your router and any other middleware you may need here.

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(function(req, res, next){
	console.log('Loading website...');
	next();
});

app.use('/', routes);



if (!module.parent) app.listen(3000, function(){
	console.log('Listening on port 3000...')
}); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
