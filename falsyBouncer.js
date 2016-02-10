//Removes all falsy values from an array.

function bouncer(arr) {
  return arr.filter(function(value){
  var x = Boolean(value);
  return x != false;
  }); 
}

bouncer([7, "ate", "", false, 9]);
