$(document).ready(function(){

	var Drink = function(strong, salty, bitter, sweet, fruity) {
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
		}

});