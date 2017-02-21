function parentFunc(firstChild) {
    alert("First Parent");
    setTimeout(function() {
        alert("nested Parent");
        firstChild("Hello from child");
    }, 1000);
}
parentFunc(function(val) {
    alert(val);
})