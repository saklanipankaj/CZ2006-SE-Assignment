class UserController{
    //Access Google Maps API to inialize Map
    initMap() {
        map = new google.maps.Map(document.getElementById('map-container'), {
            center: {lat: 1.3521, lng: 103.81985},
            zoom: 11,
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            }
        });
        directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService = new google.maps.DirectionsService;
        directionsDisplay.setMap(map);
        getLocation();
        // Create the search box and link it to the UI element.
        var input = document.getElementById('searchBox');
        searchBox = new google.maps.places.SearchBox(input);
        searchBox.setBounds(map.getBounds());
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });


        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        var marker, carpark, location
        var d = new Date();
        var today = d.getDay();
        var rate;
        //console.log(apiLots);
		var weekdaythreshold = 1;
		var weekendthreshold = 1.50;
        for (name in json) {
            carpark = json[name];
            if (carpark["GPS"] != null) 
			{
                //for normal carpark with api lots
                //console.log(carpark);
				if(carpark.id !== undefined) 
				{
                    var lots = apiLots["Data"][carpark.id];
                    if(lots < 25) {
						//Red
						//weekday < 50c
						if(today != 0 || today != 6)
						{
							if(carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0] <= weekdaythreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 6) {
							if(carpark["Rates"]["Saturday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 0) {
							if(carpark["Rates"]["Sunday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_red.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}
					}else if(lots >= 25 && lots <= 100) 
					{
						//Orange
						if(today != 0 || today != 6)
						{
							if(carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0] <= weekdaythreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 6) {
							if(carpark["Rates"]["Saturday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 0) {
							if(carpark["Rates"]["Sunday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_orange.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}
					}else
					// >100 lots
					{	
						//Green
						if(today != 0 || today != 6)
						{
							if(carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0] <= weekdaythreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 6) {
							if(carpark["Rates"]["Saturday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}else if (today == 0) {
							if(carpark["Rates"]["Sunday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
							{
								var image = {
									url: 'dist/cheapest_carpark_original_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}else
							{
								var image = {
									url: 'dist/carpark_green.png',
									//size: new google.maps.Size(100, 100),
									// The origin for this image is (0, 0).
									origin: new google.maps.Point(0, 0),
									// The anchor with respect to the Lat and Long
									anchor: new google.maps.Point(15, 15)}
							}
						}
					}
				}
                else //no api data
                {
					//Red
                    if(today != 0 || today != 6)
					{
						if(carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0] <= weekdaythreshold)
						{
							var image = {
								url: 'dist/cheapest_carpark_original_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}else
						{
							var image = {
								url: 'dist/carpark_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}
					}else if (today == 6) {
						if(carpark["Rates"]["Saturday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
						{
							var image = {
								url: 'dist/cheapest_carpark_original_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}else
						{
							var image = {
								url: 'dist/carpark_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}
					}else if (today == 0) {
						if(carpark["Rates"]["Sunday"][0]["pricePerHalfHour"][0] <= weekendthreshold)
						{
							var image = {
								url: 'dist/cheapest_carpark_original_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}else
						{
							var image = {
								url: 'dist/carpark_red.png',
								//size: new google.maps.Size(100, 100),
								// The origin for this image is (0, 0).
								origin: new google.maps.Point(0, 0),
								// The anchor with respect to the Lat and Long
								anchor: new google.maps.Point(15, 15)}
						}
					}
                }
               /*  if (carpark.id !== undefined) {
                    var lots = apiLots["Data"][carpark.id];
                    if (lots == 0) {
                        var image = {
                            url: 'dist/carpark_red.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    } else if (lots >= 25 && lots <= 50) {
                        var image = {
                            url: 'dist/carpark_orange.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    } else {
                        var image = {
                            url: 'dist/carpark_green.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    }
                } else
                //weekday < 50c
                if (today != 0 || today != 6) {
                    //console.log(carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0]);
                    if (carpark["Rates"]["Weekday"][0]["pricePerHalfHour"][0] <= 0.5) {
                        var image = {
                            url: 'dist/cheapest_carpark_original.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    } else {
                        var image = {
                            url: 'dist/cheapest_carpark_original_red.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    }
                } else if (today == 6) {
                    if (carpark["Rates"]["Saturday"][0]["pricePerHalfHour"][0] <= 1) {
                        var image = {
                            url: 'dist/cheapest_carpark_original.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    } else {
                        var image = {
                            url: 'dist/cheapest_carpark_original_red.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    }
                } else if (today == 0) {
                    if (carpark["Rates"]["Sunday"][0]["pricePerHalfHour"][0] <= 1) {
                        var image = {
                            url: 'dist/cheapest_carpark_original.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    } else {
                        var image = {
                            url: 'dist/cheapest_carpark_original_red.png',
                            //size: new google.maps.Size(100, 100),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor with respect to the Lat and Long
                            anchor: new google.maps.Point(15, 15)
                        }
                    }
                }
                else {
                    var image = {
                        url: 'dist/carpark_red.png',
                        //size: new google.maps.Size(100, 100),
                        // The origin for this image is (0, 0).
                        origin: new google.maps.Point(0, 0),
                        // The anchor with respect to the Lat and Long
                        anchor: new google.maps.Point(15, 15)
                    };
                } */

                //for normal carpark without api lots and price > 50c
                marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    title: name,
                    position: new google.maps.LatLng(carpark['GPS']['Lat'], carpark['GPS']['Long'])
                });
                marker.addListener('click', function () {
                    var carpark = json[this.title];
                    //Change to Id once its done
                    selectedCarpark = this.title;
                    //console.log(selectedCarpark);
                    // Check first, if we already have opened picker
                    if ($('.picker-modal.modal-in').length > 0) {
                        myApp.closeModal('.picker-modal.modal-in');
                    }

                    //Available Lots go here
                    //var lots;
                    var id = carpark[id];

                    var lots = "N.A.";
                    //console.log(selectedCarpark, json[selectedCarpark].id, apiLots["Data"][json[selectedCarpark].id]);
                    if (json[selectedCarpark].id !== undefined) {
                        lots = apiLots["Data"][json[selectedCarpark].id];
                    }
                    /*
                    if(id != null)
                        lots = getAvailableLots(carpark[id]);
                    else
                        lots = "N.A.";
                    */
                    var modelText =
                        '<div class="picker-modal"  style="background-color:white">' +
                        '<div class="picker-modal-inner">' +
                        '<div class="toolbar" style="background-color:#007aff">' +
                        '<div class="toolbar-inner">' +
                        '<div class="left"></div>\n' +
                        '<div class="right"><a href="#" class="link close-picker" style="color:white;">Close</a></div>\n' +
                        '</div>' +
                        '</div>' +
                        '<div class="content-block left">' +
                        '<div class="speed-dial">\n' +
                        '<!-- FAB inside will open Speed Dial actions -->\n' +
                        '<a href="#" class="floating-button">\n' +
                        '<!-- First icon is visible when Speed Dial actions are closed -->\n' +
                        '<i class="f7-icons">add</i>\n' +
                        '<!-- Second icon is visible when Speed Dial actions are opened -->\n' +
                        '<i class="f7-icons">close</i>' +
                        '</a>\n' +
                        '<!-- Speed Dial Actions -->\n' +
                        '<div class="speed-dial-buttons">\n' +
                        '<!-- First Speed Dial button -->\n' +
                        '<a href="views/PlanRouteUI.html" class="link close-picker" onclick="setDestination()">\n' +
                        'GO' +
                        '</a>\n' +
                        '<!-- Second Speed Dial  button -->\n' +
                        '<a href="views/CarparkDetailsUI.html" class="link close-picker">\n' +
                        '<i class="f7-icons">info_fill</i>\n' +
                        '</a>\n' +
                        '</div>' +
                        '</div>' +
                        '<h5 class="content-block-title">' + this.title + ' Carpark</h5>' +
                        '<p><u>Parking Rates</u><br>';

                    var now = new Date();
                    var day = now.getDay();

                    //There is a Weekday Rate
                    if (carpark['Rates']['Weekday'] != null && day != 0 && day != 6) {
                        var weekday = carpark['Rates']['Weekday'];

                        for (rate in weekday) {
                            var start = weekday[rate]['startHour'];
                            var startTime = moment().hours(start);
                            startTime.minutes((start * 100) % 100);
                            var end = weekday[rate]['endHour'];
                            var endTime = moment().hours(end);
                            endTime.minutes((end * 100) % 100);
                            var now = moment();
                            //When endTime is lesser than startTime
                            if (endTime.isBefore(startTime)) {
                                endTime.add(1, 'd');
                                console.log("EndTime day Added!");
                            }
                            //Check if current Time is within the start and endTime then display the price
                            if (!now.isBetween(startTime, endTime))
                                continue;

                            modelText += "Start :" + startTime.format('HHmm') + " - " + endTime.format('HHmm') + "<br>";
                            var prices = weekday[rate]['pricePerHalfHour'];
                            //per entry display
                            if (prices[1] == 0)
                                modelText += "Per Entry:$" + prices[0] + "<br>";
                            else {
                                //1St Hour and subsequent Hour
                                if (prices.length > 2) {
                                    var prev = prices[0];
                                    for (var i = 1; i < prices.length; i++) {
                                        if (prices[i] != prev) {
                                            modelText += "Price 1st h: $" + prev * 2 + "<br>";
                                            prev = prices[i];
                                        }
                                    }
                                    modelText += " Subsequent 1/2 h: $" + prev + "<br>";
                                }
                                else {
                                    modelText += " Price per 1/2 h: $" + prices[0] + "<br>";
                                }
                            }
                        }
                    }
                    //There is a Saturday Rate
                    if (carpark['Rates']['Saturday'] != null && day == 6) {
                        var Saturday = carpark['Rates']['Saturday'];
                        for (rate in Saturday) {
                            var start = Saturday[rate]['startHour'];
                            var startTime = moment(now).hours(start);
                            startTime.minutes((start * 100) % 100);
                            var end = Saturday[rate]['endHour'];
                            var endTime = moment().hours(end);
                            endTime.minutes((end * 100) % 100);
                            var now = moment();
                            //When endTime is lesser than startTime
                            if (endTime.isBefore(startTime)) {
                                endTime.add(1, 'd');
                                console.log("EndTime day Added!");
                            }

                            //Check if current Time is within the start and endTime then display the price
                            if (!now.isBetween(startTime, endTime))
                                continue;

                            modelText += "Start :" + startTime.format('HHmm') + " - " + endTime.format('HHmm') + "<br>";
                            var prices = Saturday[rate]['pricePerHalfHour'];
                            //per entry display
                            if (prices[1] == 0)
                                modelText += "Per Entry:$" + prices[0] + "<br>";
                            else {
                                //1St Hour and subsequent Hour
                                if (prices.length > 2) {
                                    var prev = prices[0];
                                    for (var i = 1; i < prices.length; i++) {
                                        if (prices[i] != prev) {
                                            modelText += "Price 1st h: $" + prev * 2 + "<br>";
                                            prev = prices[i];
                                        }
                                    }
                                    modelText += " Subsequent 1/2 h: $" + prev + "<br>";
                                }
                                else {
                                    modelText += " Price per 1/2 h: $" + prices[0] + "<br>";
                                }
                            }
                        }
                    }
                    //There is a Saturday Rate
                    if (carpark['Rates']['Sunday'] != null && day == 0) {
                        var Sunday = carpark['Rates']['Sunday'];
                        for (rate in Sunday) {
                            var start = Sunday[rate]['startHour'];
                            var startTime = moment().hours(start);
                            startTime.minutes((start * 100) % 100);
                            var end = Sunday[rate]['endHour'];
                            var endTime = moment().hours(end);
                            endTime.minutes((end * 100) % 100);
                            var now = moment();
                            //When endTime is lesser than startTime
                            if (endTime.isBefore(startTime)) {
                                endTime.add(1, 'd');
                                console.log("EndTime day Added!");
                            }
                            //Check if current Time is within the start and endTime then display the price
                            if (!now.isBetween(startTime, endTime))
                                continue;

                            modelText += "Start :" + startTime.format('HHmm') + " - " + endTime.format('HHmm') + "<br>";
                            var prices = Sunday[rate]['pricePerHalfHour'];
                            //per entry display
                            if (prices[1] == 0)
                                modelText += "Per Entry:$" + prices[0] + "<br>";
                            else {
                                //1St Hour and subsequent Hour
                                if (prices.length > 2) {
                                    var prev = prices[0];
                                    for (var i = 1; i < prices.length; i++) {
                                        if (prices[i] != prev) {
                                            modelText += "Price 1st h: $" + prev * 2 + "<br>";
                                            prev = prices[i];
                                        }
                                    }
                                    modelText += " Subsequent 1/2 h: $" + prev + "<br>";
                                }
                                else {
                                    modelText += " Price per 1/2 h: $" + prices[0] + "<br>";
                                }
                            }
                        }
                    }

                    modelText += '</p></div>' +
                        '<!-- Floating Action Button -->\n' +
                        '<a class="floating-button color-red" style="left:5%; text-align:center">\n' +
                        '<b><u>Lots</u><br>' + lots + '</b>\n' +
                        '</a>' +
                        '</div>';
                    myApp.pickerModal(modelText);
                });
                // Create a marker for each place.
                markers.push(marker);
            }
        }
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }


            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                if(searchMarker	!= null)
                    searchMarker.setMap(null);
                searchMarker = new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location
                });
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.setZoom(15);
            map.fitBounds(bounds);
        });
    }

    //Get Lot Information from LTA API
    get_lots(){
        var response;
        $.ajax({
            url: "backend/server.php",
            method: "POST",
            data: {'Action': 'GET_LOTS' },
            dataType: 'json',
            async: false,
            success:function(data,response)
            {
                console.log(data);
                apiLots = data;
                response = data;
            },
            error:function(jqXHR, text, errorThrown)
            {
                console.log(jqXHR);
                console.log(text);
                console.log(errorThrown);
            }
        });

        return response;
    }

    //initSearchBox for PlanRoute need connect to GoogleMapAPI
    initSearchBox()
    {
        var startInput = document.getElementById('source');
        var destinationInput = document.getElementById('destination');
        start = new google.maps.places.SearchBox(startInput);
        destination = new google.maps.places.SearchBox(destinationInput);
        start.setBounds(map.getBounds());
        destination.setBounds(map.getBounds());
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            start.setBounds(map.getBounds());
            destination.setBounds(map.getBounds());
        });
    }

    //load google map services for SearchCarparkUI
    initService() {
        document.getElementById('testingsearch1').innerHTML="";
        var displaySuggestions = function(predictions, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                alert(status);
                return;
            }

            predictions.forEach(function(prediction) {
                var li = document.createElement('li');
                li.className="item-content";


                var div2 = document.createElement('div');
                div2.className = "item-title";


                var a1 = document.createElement('a');
                a1.href="#index";
                a1.className="back";
                a1.onclick=function(){ document.getElementById('xferback1').innerHTML = prediction.description };
                a1.appendChild(document.createTextNode(prediction.description));

                div2.appendChild(a1);

                li.appendChild(div2);

                //li.appendChild(document.createTextNode(prediction.description));
                document.getElementById('testingsearch1').appendChild(li);
            });
            for (smth in json) {
                var li = document.createElement('li');
                li.className="item-content";
                var itemsel = smth;
                var div2 = document.createElement('div');
                div2.className = "item-title";


                var a1 = document.createElement('a');
                a1.href="#index";
                a1.className="back";
                a1.onclick=function(){ document.getElementById('xferback').innerHTML = itemsel };
                a1.appendChild(document.createTextNode(itemsel));

                div2.appendChild(a1);

                li.appendChild(div2);

                //console.log(a1);

                //li.appendChild(document.createTextNode(prediction.description));
                document.getElementById('testingsearch1').appendChild(li);
            }
        };

        var service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions({ input: document.getElementById("searchform1").value }, displaySuggestions);

        //console.log(document.getElementById("searchform").value);
    }

    //AJAX call to server to submit Feedback
    submitFeedback(){

    }

}