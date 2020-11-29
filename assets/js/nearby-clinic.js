// api key = AIzaSyDlvs56CLbiwW-Ty2IjXHoHcReR6nJNUAg

// {
//     "featureType": "landscape",
//     "stylers": [
//         {
//             "saturation": -100
//         },
//         {
//             "lightness": 60
//         }
//     ]
// },
// {
//     "featureType": "road.local",
//     "stylers": [
//         {
//             "saturation": -100
//         },
//         {
//             "lightness": 40
//         },
//         {
//             "visibility": "on"
//         }
//     ]
// },
// {
//     "featureType": "transit",
//     "stylers": [
//         {
//             "saturation": -100
//         },
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "administrative.province",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "stylers": [
//         {
//             "visibility": "on"
//         },
//         {
//             "lightness": 30
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#ef8c25"
//         },
//         {
//             "lightness": 40
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#b6c54c"
//         },
//         {
//             "lightness": 40
//         },
//         {
//             "saturation": -40
//         }
//     ]
// }

var map, searchBoxEl = $("#search-box-city"), searchBtn = $("#search-button");
function initMap() {
  var userLat, userLng;
  map = new google.maps.Map(document.getElementById('localMap'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12.5
  });
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
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + query + ","+
        "&key=AIzaSyDlvs56CLbiwW-Ty2IjXHoHcReR6nJNUAg")
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
            userLat = data.results[0].geometry.location.lat;
            userLng = data.results[0].geometry.location.lng;;
            const pos = {
                lat: userLat,
                lng: userLng,
            };
            map.setCenter(pos);
        })
    }
    else{
        alert("Please enter a location");
    }
}


searchBtn.on("click",function(clickEvent){
    SearchByCustomLocation(searchBoxEl.val());
});