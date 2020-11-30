var mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43240f"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "63"
            },
            {
                "color": "#f5f0ea"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#43240f"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#43240f"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#43240f"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#43240f"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#43240f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#43240f"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b1b67e"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#43240f"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "36"
            },
            {
                "visibility": "simplified"
            },
            {
                "lightness": "2"
            },
            {
                "color": "#c5a784"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1.00"
            },
            {
                "color": "#c14332"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "18"
            },
            {
                "lightness": "-6"
            },
            {
                "color": "#c5a784"
            },
            {
                "weight": "0.84"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#88c6d2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#9dc9c0"
            },
            {
                "saturation": "0"
            }
        ]
    }
];

var apiKey = "key=AIzaSyDlvs56CLbiwW-Ty2IjXHoHcReR6nJNUAg";

var searchBoxEl = $("#search-box-city"), searchBtn = $("#search-button");
var map, markers = [];
var markersInfo = [];

function initMap() {
  var userLat, userLng;
  map = new google.maps.Map(document.getElementById('localMap'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullScreenControl: false,
    // Ten10 - Staniag0 - Map without markers, by Blufish on snazzymaps.com ->
    // https://snazzymaps.com/style/233882/ten10-santiago-map-without-markers
    styles: mapStyle
  }, 
 );
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
          (granted_position) => {
             userLat = granted_position.coords.latitude;
             userLng = granted_position.coords.longitude;
              const pos = {
                  lat: userLat,
                  lng: userLng,
              };
              map.setCenter(pos);
          },
          (denied) => {

            // searchBoxEl.css({"color":"red", "font-size":"1.5vw"}).val("Please specify your location");
          }
      )
  }
}

var SearchByCustomLocation = function(input){
    if (input!=="")
    {
        var query = "";
        input = input.trim().split(" ");
        for (var i = 0; i < input.length; i++)
        {
                query += input[i];
                if (i!==input.length-1){
                    query += "+";
                }
        }
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + query +
        "&" + apiKey)
        .then(function(response){
            return response.json()
        }).then(function(data){
            userLat = data.results[0].geometry.location.lat;
            userLng = data.results[0].geometry.location.lng;;
            const pos = {
                lat: userLat,
                lng: userLng,
            };
            map.setCenter(pos);
            searchClinics(userLat, userLng);
        })
    }
    else{
        alert("Please enter a location");
    }
}

var searchClinics = function(lat, lng){
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?"+
    "query=coronavirus+test+&location=" + userLat + ",%20" + userLng + "&radius=3000&" + apiKey)
    .then(function(response){
        return response.json();
    }).then(function(data){
        if (markers!=[])
        {
            for (var i = 0; i < markers.length; i++)
            {
                markers[i].setMap(null);
            }
            google.maps.event.trigger(map, 'resize');
            markers = [];
        }
        // console.log(data);
        markersInfo = [];
        for (var i = 0; i < 13; i++)
        {
            const pos = { 
                lat: data.results[i].geometry.location.lat,
                lng: data.results[i].geometry.location.lng
            }   
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP
              });
            markers.push(marker);
            var place = {pos, place_id: data.results[i].place_id};
            // marker.addListener("click", getLocationsDetails(data.results[i].place_id));
            markersInfo.push(place);
            google.maps.event.addListener(marker, "click", getLocationsDetails);
        }

        google.maps.event.trigger(map, 'resize');
    })
}

var getLocationsDetails = function(event){
    var place_id = "";

    if (this instanceof google.maps.Marker)
    {
        for (var i = 0; i < markersInfo.length; i++)
        {
            if (this.getPosition().lat() === markersInfo[i].pos.lat &&
            this.getPosition().lng() === markersInfo[i].pos.lng)
            {
                place_id = markersInfo[i].place_id;
                break;
            }
        }
    }
    if (place_id != "")
    {
        $("#clinicInfo").empty();
        console.log(place_id);
        fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?" +
        "place_id=" + place_id + "&" +
        "fields=name,rating,formatted_phone_number,user_ratings_total," +
        "formatted_address,opening_hours,reviews,website,icon,name&" + apiKey)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            var clinicInfoHolder = $("#clinicInfo");
            var header = $("<h3>").text(data.result.name), img = $("<img>").attr("href", data.result.icon);
            var ratingInfo = $("<p>").text(data.result.rating + " (" + data.result.user_ratings_total + ")");
            var number = $("<p>").text(data.result.formatted_phone_number);
            var website = $("<p>").text(data.result.website);
            var hoursList = $("<ul>");
            for (var i = 0; i < 7; i++)
            {
                // var open = data.result.opening_hours.periods[i].open;
                var dailyHours = $("<li>").text(data.result.opening_hours.weekday_text[i]);
                hoursList.append(dailyHours);
            }
            clinicInfoHolder.append([header, img, "<br/>", ratingInfo, "<hr/>",  number, "<br/>", website, "<br/>", hoursList]);
        })
    }
}

searchBtn.on("click",function(clickEvent){
    SearchByCustomLocation(searchBoxEl.val());
});