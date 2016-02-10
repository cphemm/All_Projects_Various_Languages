function truncate(str, num) {
        var truncStr = "";
        var elips = "...";     
        var newTrunc = "";
        if (str.length <= 3 || num === str.length) {
                truncStr = str.slice(0, num);
                return truncStr + elips;
        } else if (str.length > num) {
                truncStr = str.slice(0, num - 3);
                newTrunc = (truncStr + elips);
              } 
        return newTrunc;
           
}
        
truncate("A-tisket a-tasket A green and yellow basket", 11);
