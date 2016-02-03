//Reverse a string
function getStringName() {
var stringField = document.getElementById("stringField").value;
var result = document.getElementById("result");

if (stringField.length < 2) {
    result.textContent = "String must contain at least 2 characters";
} else {
    var newArray = stringField.split(""); 
  	var newString = newArray.reverse();
  	var revString = newString.join("");
   	result.textContent = "Your reversed string is " + '"' + revString + '"';
  	}
}
var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getStringName, false); 
