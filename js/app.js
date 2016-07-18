$(document).ready(function(){

var Bartender = function() {
	this.currentQuestion = 0;
	this.answers = [];
	this.saveAnswer = function(answer) {
		this.answers.push(answer);
	}

	this.questions = [
		"Do ye like yer drinks strong?",
		"Do ye like it with a salty tang?",
		"Do ye like it bitterrr?",
		"Do ye want somethin sweeet?",
		"Do ye like a fruity flaverrr?"
	];

	this.askQuestion = function(index) {
		return this.questions[index];
	};

	this.makeDrink = function(ingredients) {
		var ingredientsLength = ingredients.length;
		var drink = [];
		for (var i = 0; i < ingredients.length; i++) {
			drink.push(ingredients[i][Math.floor(Math.random() * ingredients[i].length)])
		}
		return drink.join(' with a ')
	}
}

var Ingredients = function () {
	this.ingredients = {
		strong: ["glug of rum", "slug of whisky", "splash of gin"],
		salty: ["olive on a stick", "salt-dusted rim", "rasher of bacon"],
		bitter: ["shake of bitters", "splash of tonic", "twist of lemon peel"],
		sweet: ["sugar cube", "spoonful of honey", "splash of cola"],
		fruity: ["slice of orange", "dash of cassis", "cherry on top"]
	}

	this.ingredientList = function(choices) {
		var ingredients = [];
		for(var i = 0; i < choices.length; i++) {
			ingredients.push(this.ingredients[choices[i]]);
		}
		return ingredients;
	}
}

var drink = new Ingredients();
console.log(drink.ingredients.strong);

var johnnyPeg = new Bartender();
console.log(johnnyPeg.askQuestion(0));

johnnyPeg.saveAnswer('bitter');
console.log(johnnyPeg.answers);
console.log(johnnyPeg.makeDrink(johnnyPeg.answers));



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

});