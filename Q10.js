(function() {
    var string = prompt("enter a string", "");
    var hash = {};
    for (var i = 0; i < string.length; i++) {
        if (hash[string.charAt(i)] != 1) {
            hash[string.charAt(i)] = 1;
        }
    }
    var retVal = " ";
    for (var key in hash) {
        retVal = retVal + ", " + key;
    }
    alert("Unique char is : " + retVal);
})();