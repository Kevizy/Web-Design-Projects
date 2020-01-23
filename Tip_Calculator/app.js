// Custom function
function calculateTip() {
	// Store data of inputs 
	var billAmount = document.getElementById("billAmount").value; 
	var serviceQuality = document.getElementById("serviceQuality").value; 
	var numPeople = document.getElementById("totalPeople").value; 

	// Quick validation
	if(billAmount === "" || serviceQuality == 0) {
		window.alert("Please enter some values"); 
		return; 
	}

	// Check if input is empty or equal to 1
	if (numPeople === "" || numPeople <= 1) {
		numPeople= 1; 
		document.getElementById("each").style.display = "none";
	} else {
		ocument.getElementById("each").style.display = "block";
	}

	// Do some math 
	var total = (billAmount * serviceQuality) / numPeople; 
	total = Math.round(total * 100) / 100; 
	total = total.toFixed(2); 
	
	// Display the tip
	document.getElementById("totalTip").style.display = "block"; 
	document.getElementById("tip").innerHTML = total; 
}

//Hide tip amount on load
document.getElementById("totalTip").style.display = "none"; 
document.getElementById("each").style.display = "none"; 

// function triggers when button clicked 
document.getElementById("calculate").onclick = function() { calculateTip(); };