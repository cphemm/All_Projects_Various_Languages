function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var leftOver = arr.slice(howMany);
  var removed = arr.splice(0, howMany);
  
  console.log("removed is " + removed);
  console.log("leftOver is " + leftOver);
  return arr;
}

slasher([1, 2, 3], 2);
