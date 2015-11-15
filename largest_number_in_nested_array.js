function largestOfFour(arr) {
  var largest = [0, 0, 0, 0];  

  for (var i = 0; i < arr.length; i++) {  
      for (var x = 0; x < arr[i].length; x++) {  
         if (largest[i] < arr[i][x]) {  
             largest[i] = arr[i][x];
         }
      }
  }
        
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
