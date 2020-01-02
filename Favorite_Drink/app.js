function enterDrink() {
	var text; 
	var favDrink = document.getElementById("prompt").value; 
	switch (favDrink) {
		case "Beer": 
			text = "Beer is awesome!";
			break; 
		case "Wine": 
			text = "Wine is awesome too!";
			break; 
		case "Vodka": 
			text = "I'm not sure about Vodka";
			break; 
		default: 
			text = favDrink + " is not an alcoholic beverage."; 
			break;
	}

	document.getElementById("dispDrink").innerHTML = text; 
}	