$(document).ready(function() {
    //your code here
    var response = '';

    $.ajax({
        type: "GET",
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452",
        async: false,
        success: function(text) {
            response = text;
        }
    })

    var jsonData = jQuery.parseJSON(JSON.stringify(response));

    for (var i = 0; i < jsonData['results'].length; i++) {
        //console.log(jsonData['results'][i]['formatted_address'])
        var li = "<li>";
        $("#list").append(li.concat(jsonData['results'][i]['formatted_address']))
    }
});