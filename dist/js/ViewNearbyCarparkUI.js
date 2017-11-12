var selectedCarpark = 0;

myApp.onPageBeforeInit('home', function (page) {
    userController.get_lots();
    userController.initMap();
});

function getSelectedCarpark() {
    return this.selectedCarpark;
};

function setSelectedCarpark(selectedCarpark) {
    this.selectedCarpark = selectedCarpark;
};

function selectCarpark()
{
    var response;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'GET_selectCarpark' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            selected_carpark = data;
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
}

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

function enterSearchtext() 
{
    var response;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'SET_searchtext' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};
function displayFoundCarpark() {
    var response;
    var foundcarpark;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'GET_FoundCarpark' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            foundcarpark = data;
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};
function planRoute() {
    var response;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'SET_planRoute' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};
function displayCurrentLocation() {
    var response;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'SET_displayCurrentLocation' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};
function viewNearbyCarpark(dest) {
    var response;
    var dest;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'GET_NearbyCarpark' ,'Dest':'GET_dest' },
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            dest = data;
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};

function viewNearbyCarpark(radius) {
    var response;

    $.ajax({
        url: "backend/viewNearbyCarparkUI.php",
        method: "POST",
        data: {'Action': 'GET_viewNearbyCarpark' ,'Radius':'GET_radius'},
        dataType: 'json',
        async: false,
        success:function(data,response)
        {
            console.log(data);
            reponse = data;
        },
        error:function(jqXHR, text, errorThrown)
        {
            console.log(jqXHR);
            console.log(text);
            console.log(errorThrown);
        }
    });

    return reponse;
};