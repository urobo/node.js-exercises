var express = require('express');

var app = express.createServer();

var recipes = require('./recipes');

app.get('/', function(req, res){
	res.render('index.ejs', {title: 'Clever Kitchens'});	
});

app.get('/recipes', recipes.list);

app.get('/recipes/:title',recipes.single);

app.get('/*', function(req,res){
	res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);