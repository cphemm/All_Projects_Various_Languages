//Return true if the string in the first element of the array contains all of the letters of the string 
//in the second element of the array

function mutation(arr) {
    var test = arr[0].toLowerCase().split('');
    var compare = arr[1].toLowerCase().split('');      
    for(var i = 0; i < compare.length; i++){
        console.log("compare[i] is " + compare[i]);
        if(test.indexOf(compare[i]) < 0){
            console.log("compare is false");
            return false;
        }        
    }    
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
