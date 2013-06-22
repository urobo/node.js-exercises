var express = require('express');

var app = express.createServer();

var recipes = require('./data/recipes').data;

app.get('/', function(req, res){
	res.render('index.ejs', {title: 'Clever Kitchens'});	
});

app.get('/recipes', function(req,res){
	res.render('recipes.ejs',{
		title: 'Clever Kitchens - Recipes',
		recipes: recipes
	});
});

app.get('/recipes/:title', function(req,res){
	var recipe = recipes.filter(function (recipe){
		return (recipe.url === req.params.title);
	});
	if (recipe.length > 0){
		recipe = recipe[0];
		recipe.title = 'Clever Kitchens - Recipe';
		res.render('recipe.ejs',recipe);
	} else {
		res.status(404).render('error.ejs', {title: 'Recipe not found!'});
	}
	
});

app.get('/*', function(req,res){
	res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);