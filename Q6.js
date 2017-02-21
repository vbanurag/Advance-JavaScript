function initClock() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var stopH = hr + 2;
    var stopm = min;
    var stopsec = sec;
    if (stopH == hr && stopm == min && stopsec == sec) {
        alert("Service has been completed");
    } else {
        document.getElementById('clockHour').innerHTML = "Timer is " + hr;
        document.getElementById('clockMin').innerHTML = ":" + min;
        document.getElementById('clockSec').innerHTML = ":" + sec;
        var t = setTimeout(initClock, 500);
    }
}