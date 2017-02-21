var counter = (function() {
    var counter = 0;
    return function() { return counter++; }
}());

function print() {
    var a = counter();
    document.getElementById("demo").innerHTML = a;
}