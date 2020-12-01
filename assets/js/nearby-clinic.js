var apiKey = "key=AIzaSyDlvs56CLbiwW-Ty2IjXHoHcReR6nJNUAg";

var searchBoxEl = $("#search-box-city"), searchBtn = $("#search-button"), locationButton = $("#current-location-button");
var map, markers = [];
var markersInfo = [];

function initMap() {
  var userLat, userLng;
  map = new google.maps.Map(document.getElementById('localMap'), {
    center: {lat: 40.7128, lng: -74.0060},
    zoom: 12,
    minZoom: 
    9, maxZoom: 14,
    mapTypeControl: false,
    streetViewControl: false,
    fullScreenControl: false,
    // Ten10 - Staniag0 - Map without markers, by Blufish on snazzymaps.com ->
    // https://snazzymaps.com/style/233882/ten10-santiago-map-without-markers
    styles: mapStyle
  }, 
 );
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
    "query=corona+testing&location=" + userLat + ",%20" + userLng + "&radius=2000&" + apiKey)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
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
    });
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + userLat 
    + ",%20" + userLng + "&radius=4000&" + "&type=hospital&" + apiKey)
    .then(function(response){
        return response.json();
    }).then(function(data){
        // console.log("second fetch", data);
        for (var i = 0; i < 7; i++)
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
    $("#clinicInfo").empty();
    var waitIcon = $("<i>").attr("class","fas fa-spinner fa-spin").css("font-size","2rem");
    $("#clinicInfo").append(waitIcon);
    console.log($("#clinicInfo"));
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
        fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?" +
        "place_id=" + place_id + "&" +
        "fields=name,rating,formatted_phone_number,user_ratings_total," +
        "formatted_address,opening_hours,reviews,website,icon,name&" + apiKey)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data);
            var clinicInfoHolder = $("#clinicInfo");
            clinicInfoHolder.empty();
            var header = $("<h2>").text(data.result.name), img = $("<img>").attr("src", data.result.icon);
            var starsDiv = $("<div>").attr("id", "clinic-rating");
            if (data.result.rating )
            {
                for (var i = 0; i < 5; i++)
                {
                    var star;
                    if (data.result.rating > i && data.result.rating >= i+1)
                    {
                        star = $("<i>").attr("class", "fas fa-star");
                    }
                    else if (data.result.rating > i && data.result.rating < i+1)
                    {
                        star = $("<i>").attr("class", "fas fa-star-half-alt");
                    }
                    else{
                        star = $("<i>").attr("class", "far fa-star");
                    }
                    starsDiv.append(star);
                }
                starsDiv.css("display","inline");
            }
            var ratingInfo, number, website, hoursList;
            if (data.result.user_ratings_total)
            {
                ratingInfo = $("<p>").text(" (" + data.result.user_ratings_total + ")").css("display","inline");
            }
            if(data.result.formatted_phone_number)
            {
                number = $("<div>").append([$("<i>").attr("class","fas fa-phone").css("display","inline").css("padding","0 1vw"),
                 $("<p>").text(data.result.formatted_phone_number).css("display","inline")]);
            }
            if (data.result.website)
            {
                website = $("<div>").append([$("<i>").attr("class","far fa-window-restore").css("display","inline").css("padding","0 1vw"),
                 $("<a>").text("Go to Website").css("display","inline").attr("href", data.result.website).attr("target","_blank")]);
            }
            if (data.result.opening_hours)
            {
                if (data.result.opening_hours.weekday_text[i])
                {
                    var dayOfWeek = moment().format("dddd");
                    hoursList = $("<ul>");
                    hoursList.prepend($("<i>").attr("class","fas fa-clock").css("padding","0 1vw"));
                    for (var i = 0; i < 7; i++)
                    {
                        var dailyHours = $("<li>").text(data.result.opening_hours.weekday_text[i]);
                        console.log(moment().format("dddd"));
                        if (data.result.opening_hours.weekday_text[i].split(":")[0] === dayOfWeek)
                        {
                            
                            dailyHours.attr("class", "has-text-white has-background-info").css("margin", "0");
                        }
                        hoursList.append(dailyHours);
                    }
            }
        }
        clinicInfoHolder.append([header, img, "<br/>", starsDiv, ratingInfo, "<hr/>",  number, "<br/>", website, "<br/>", hoursList]);
        })
    }
}

var getLocalCoords = function(){
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
                SearchByCustomLocation(userLat + "," + userLng);
            },
            (denied) => {
  
              // searchBoxEl.css({"color":"red", "font-size":"1.5vw"}).val("Please specify your location");
            }
        )
    }
}

locationButton.on("click",function(clickEvent){
    getLocalCoords();
})
searchBtn.on("click",function(clickEvent){
    SearchByCustomLocation(searchBoxEl.val());
});