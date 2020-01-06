var i; 
var msg = ' ';


for (i = 1; i < 21; i++) {
	msg += i + ' x 5 = ' + (i * 5) + '<br />'; 

}

document.getElementById('dispTable').innerHTML = msg; 