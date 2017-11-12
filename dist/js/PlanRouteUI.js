var carparkPlan;
myApp.onPageInit('plan_route', function (page) {
    userController.initSearchBox();
    if(carparkPlan){
        carparkPlan = false;
        document.getElementById('destination').value = selectedCarpark;
    }
    else
    {
        document.getElementById('destination').value = '';
    }
});
myApp.onPageReinit('plan_route', function (page) {
    userController.initSearchBox();
});

//Set up the Route
function displayRoute(){
    var start = document.getElementById('source').value;
    var destination = document.getElementById('destination').value;
    console.log(start+"  "+destination);
    $('#clearBtn').toggle();
    var request = {
        origin:start,
        destination:destination,
        travelMode: 'DRIVING',
        region:'sls'
    };
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            console.log("here");
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
        }
    });
}

function resetRoute(){
    directionsDisplay.setMap(null);
    $('#clearBtn').toggle();
}
function setDestination(){
    carparkPlan=true;
}