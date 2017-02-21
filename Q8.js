(function() {
    var str = prompt("Enter a valid String :", "");
    var passString = str.split(" ");
    console.log(passString)
    for (var i = 0; i < passString.length; i++) {
        var a = passString[i];
        passString[i] = passString[i].substr(1, passString[i].length);
        var ret = a.charAt(0).toUpperCase() + passString[i];
        passString[i] = ret;
    }
    var retVal = "";
    for (var i = 0; i < passString.length; i++) {
        retVal = retVal + " " + passString[i];
    }
    alert(retVal);
})();