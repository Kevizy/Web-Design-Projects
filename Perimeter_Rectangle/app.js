var length = document.querySelector("#lengthInput"); 
var width = document.querySelector("#widthInput"); 
var calcBtn = document.querySelector("#calc");
var perimeterA = document.querySelector("#dispPerimeter");

calcBtn.onclick=function() {
	perimeter = 2 * (Number(lengthInput.value) + Number(widthInput.value)); 
	perimeterA.innerHTML="Perimeter is: " + perimeter; 
}