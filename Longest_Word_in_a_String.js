function findLongestWord(str) {
   var words = str.split(' '); //Change string to an array and index after each space
   var longest = 0;
   for (var i = 0; i < words.length; i++) {
       if (words[i].length > longest) {
            longest = words[i].length;
        }
    }

        return longest;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");
