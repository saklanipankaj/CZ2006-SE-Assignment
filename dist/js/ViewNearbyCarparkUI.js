var selectedCarpark = 0;

myApp.onPageBeforeInit('home', function (page) {
    userController.get_lots();
    userController.initMap();
});
//View nearbymethod
//Get Current Location of User and set map to current location
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(geolocation);
            map.setZoom(15);
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
        });
    }
}


//Set Destination
function setDestination(){
    carparkPlan = true;
}
