document.getElementById("textChange").onclick = function() {
	var textEntered = ""; // Sets to empty string 
	textEntered = document.getElementById("textInput").value; 
	document.getElementById("newText").innerHTML = textEntered; 
}