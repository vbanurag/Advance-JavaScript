(function() {
    var str = prompt("Enter a string", "");
    var strArray = str.split("");
    strArray.sort();
    var counter = 0;
    var max = 0;
    var charIs;
    var firstChar = strArray[0];
    for (var i = 0; i < strArray.length; i++) {
        if (firstChar == strArray[i + 1]) {
            counter++;
        } else {
            if (counter > max) {
                max = counter;
                charIs = strArray[i];
                counter = 0;
                firstChar = strArray[i + 1];
            } else {
                counter = 0;
                firstChar = strArray[i + 1];
            }
        }

    }
    alert("Max count is " + charIs + " and count is " + max);
})();