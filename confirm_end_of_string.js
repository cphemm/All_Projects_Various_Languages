function end(str, target) {
   
  var endStr = str.substr(-1);
  
  var newSlice = "";
  var partSlice = "";
  if (target.length === 1 && endStr === target) {
          return true;
          
      }
      else if (target.length !== 1) {
          strSlice = str.split(" ");
          newSlice = strSlice[strSlice.length - 1];
          partSlice = newSlice[newSlice.length - 2] + endStr;
      }  
      if (newSlice === target || partSlice === target) {
         return true;
      }
  return false;
}
end("Bastian", "n");
end("He has to give me a new name", "name");
end("He has to give me a new name", "me");
