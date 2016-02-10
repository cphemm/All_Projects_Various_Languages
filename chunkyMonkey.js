function chunkyMonkey(arr, size) {
        var fullArr = []
        var subArr;
        while(arr.length > 0){
          subArr = arr.splice(0, size);
          fullArr.push(subArr);
        }
}
chunkyMonkey(["a", "b", "c", "d", "e", "f"], 2);
