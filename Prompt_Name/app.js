function promptName() {
	var person = document.getElementById("prompt").value; 
	var text = "Hello " + person + "! How are you today?"; 

	document.getElementById("demo").innerHTML = text; 
}	