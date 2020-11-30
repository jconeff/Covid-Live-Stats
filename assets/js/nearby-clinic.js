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

var map, searchBoxEl = $("#search-box-city"), searchBtn = $("#search-button");
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
  map
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
            searchClinic(userLat, userLng);
        })
    }
    else{
        alert("Please enter a location");
    }
}

var searchClinic = function(lat, lng){
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?"+
    "query=coronavirus+test+&location=" + userLat + ",%20" + userLng + "&radius=3000&" + apiKey)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
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
        }

        google.maps.event.trigger(map, 'resize');
    })
}

searchBtn.on("click",function(clickEvent){
    SearchByCustomLocation(searchBoxEl.val());
});
