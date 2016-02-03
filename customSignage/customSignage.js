//Calculates the cost of a name plaque with each letter costing $5
function getStringName() {
var stringField = document.getElementById("stringField").value;
var result = document.getElementById("result");
var counter = 1;
var cost = 0;

if (stringField.length < 2) {
    result.textContent = "Please Enter At Least Two Characters";
} else {
    for (var i = 0;i < stringField.length; i++) {
    	cost = counter * 5;
    	counter++;
    	result.textContent = "Your cost is " + '"$' + cost + '"';
    }
    }
}
var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getStringName, false); 
