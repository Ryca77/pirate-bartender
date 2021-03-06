$(document).ready(function(){

//contructor function//
var Bartender = function() {
	this.currentQuestion = 0;
	this.answers = [];

	//questions array//
	this.questions = [
		"Do ye like yer drinks strong?",
		"Do ye like it with a salty tang?",
		"Do ye like it bitterrr?",
		"Do ye want somethin sweeet?",
		"Do ye like a fruity flaverrr?",
		"This be yer poison:"
	];

	//ask first question//
	this.askQuestion = function(index) {
		return this.questions[0]
	}

	//ask remaining questions by removing the elements at index 0//
	this.nextQuestion = function(index) {
		this.questions.splice(0,1);
		$('.question').html(this.questions[0]);
	}

	//save answers to each question//
	this.saveAnswer = function(answer) {
		if(this.questions[1]) {
			this.answers.push(answer);
		}
	}

	//make drink using answers to each question//
	this.makeDrink = function(ingredients) {
		var ingredientsLength = ingredients.length;
		var drink = [];
		for (var i = 0; i < ingredients.length; i++) {
			drink.push(ingredients[i][Math.floor(Math.random() * ingredients[i].length)])
		}
		return drink.join(' with a ')
	}
}

//answers constructor function//
var Ingredients = function () {
	this.ingredients = {
		strong: ["glug of rum", "slug of whisky", "splash of gin"],
		salty: ["olive on a stick", "salt-dusted rim", "rasher of bacon"],
		bitter: ["shake of bitters", "splash of tonic", "twist of lemon peel"],
		sweet: ["sugar cube", "spoonful of honey", "splash of cola"],
		fruity: ["slice of orange", "dash of cassis", "cherry on top"]
	}

	//push ingredients choices into array//
	this.ingredientList = function(choices) {
		var ingredients = [];
		for(var i = 0; i < choices.length; i++) {
			ingredients.push(this.ingredients[choices[i]]);
		}
		return ingredients;
	}
}

//cocktail name constructor function//
var drinkName = function () {
	this.name = {
		adjective: ["misty", "choppy", "salty", "hairy"],
		noun: ["peg-leg", "musket-barrel", "parrot-peck", "plunder-stash"]
	}

	this.getRandoms = function () {
	var randomAdjective = this.name.adjective[Math.floor(Math.random() * this.name.adjective.length)]
	console.log(randomAdjective);
	var randomNoun = this.name.noun[Math.floor(Math.random() * this.name.noun.length)]
	console.log(randomNoun);
	$('.drink-name').html(randomAdjective + " " + randomNoun);
	$('.drink-name').show();
}

	/*this.getAdjective = function(index) {
		return this.name.adjective[index];
	}

	this.getNoun = function(index) {
		return this.name.noun[index];
	}*/
}

//calling functions - ask first question//
var johnnyPeg = new Bartender();
$('.order, .order-again').on('click', function() {
	johnnyPeg.askQuestion();
	console.log(johnnyPeg.askQuestion());
	$('.question').html(johnnyPeg.askQuestion());
	$('.aye, .nay').show();
	$('.order').hide();
	$('.order-again').hide();
});

//calling functions - collect ingredients based on responses//
var newDrink = new Bartender();
var drink = new Ingredients();
$('.aye').on('click', function() {
	if($('.question').text() == "Do ye like yer drinks strong?") {
		newDrink.saveAnswer('strong');
		console.log(newDrink.answers);
	}
	else if($('.question').text() == "Do ye like it with a salty tang?") {
		newDrink.saveAnswer('salty');
		console.log(newDrink.answers);
	}
	else if($('.question').text() == "Do ye like it bitterrr?") {
		newDrink.saveAnswer('bitter');
		console.log(newDrink.answers);
	}
	else if($('.question').text() == "Do ye want somethin sweeet?") {
		newDrink.saveAnswer('sweet');
		console.log(newDrink.answers);
	}
	else if($('.question').text() == "Do ye like a fruity flaverrr?") {
		newDrink.saveAnswer('fruity');
		console.log(newDrink.answers);
	}
});

/*console.log(newName.getAdjective(0) + " " + newName.getNoun(0));*/

//calling functions - ask remaining questions and get drink name//
var newQuestion = new Bartender();
var newName = new drinkName();
$('.aye, .nay').on('click', function() {
	newQuestion.nextQuestion();
	if($('.question').text() == "This be yer poison:") {
		$('.drink').html(johnnyPeg.makeDrink(drink.ingredientList(newDrink.answers)));
		$('.aye, .nay').hide();
		$('.order-again').show();
		newName.getRandoms();
	}

//order again//
$('.order-again').on('click', function() {
	$('.drink').html("");
	$('.drink-name').hide();
});

});

});

	/*var Drink = function(strong, salty, bitter, sweet, fruity) {
		this.strong = strong;
		this.salty = salty;
		this.bitter = bitter;
		this.sweet = sweet;
		this.fruity = fruity;
	}

	var customer = new Drink(true, false, true, true, true)
		if(customer.fruity === true) {
			console.log('cassis');
		}
		if(customer.salty !== true) {
			console.log('no olives');
		}*/

