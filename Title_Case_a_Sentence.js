function titleCase(str) {
  var newstr = str.split(" ");//split the string with a comma after each word

  //For each word turn first character to uppercase and each other letter to lowercase
  for (i = 0; i < newstr.length; i++) {
    newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].substring(1).toLowerCase();
  }
    newstr = newstr.join(" "); //This rejoins the string and replaces the commas with spaces
    return newstr;
}

titleCase("a mAn caN be anYThiNg hE waNtS to be");
