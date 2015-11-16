function repeat(str, num) {
  
        var emptyStr = "";
        var repeatStr = [];  //create an empty array
        if (num < 0) {       //if num is negative return an empty string
           return emptyStr;
        } else {
            for (var i = 0; i < num; i++) {
                repeatStr.push(str.slice()); //for each loop push a copy of the string into the array
            }
        }
        repeatStr = repeatStr.join("");      //rejoin the string
        return repeatStr;
}

repeat("abc", 3);
