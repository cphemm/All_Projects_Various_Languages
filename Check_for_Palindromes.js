function palindrome(str) {
   str = str.replace(/[^\w]|_/g, ""); //Use regex to remove all punctuation
   str = str.toLowerCase();           //Change to lowercase
   var arrayStr = str.split("");      //Change string into an array
   arrayStr = arrayStr.reverse();     //Reverse the array
   arrayStr = arrayStr.join("");      //Change back to a string
   if (str === arrayStr) {            //If palindrome return true
         return true;
     }
         return false;
}
palindrome("race car");
palindrome("Eye");
