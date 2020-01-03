var quarters = document.querySelector("#enterQuarters"); 
var dimes = document.querySelector("#enterDimes"); 
var nickels = document.querySelector("#enterNickels"); 
var pennies = document.querySelector("#enterPennies"); 
var calcBtn = document.querySelector("#calc"); 
var displayCoins = document.querySelector("#dispCoins"); 

calcBtn.onclick=function() {
	dollars = (0.25 * (Number(enterQuarters.value))) + (0.10 * (Number(enterDimes.value))) + (0.05 * (Number(enterNickels.value))) + 
	(0.01 * (Number(enterPennies.value))); 
	dollarRounded = dollars.toFixed(2); 
	displayCoins.innerHTML = "The total in dollars is: " + "$" + dollarRounded; 
}