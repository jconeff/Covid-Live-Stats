//US-Map function
$("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() { 
      var link = $(this).attr('href');   
      window.open(link,'_blank');
      return false;
    });
  }
  //End of US-Map Function


  //Covid stat API
    const stateApi = 'https://api.covidtracking.com/v1/states/current.json';
        fetch(stateApi)
        .then(response =>{
            return response.json();
        })
        .then(stateData => {
            console.log(stateData);
    //End of API call


    let currentDate = document.querySelector('.today');
    currentDate.textContent = moment().format('LL');
//start of loop

var apiState;

//math function
var totalCases = 0;

for (apiState of stateData){
    totalCases = totalCases + apiState.positiveIncrease;

}
var average = totalCases/50;
var topAverage = average *1.5;
var bottomAverage = average/1.5

// End of math function

for (apiState of stateData) {
    console.log(apiState);
    let map =document.getElementById(apiState.state);
    //Excluded outside states
    if (map !== null){
        //Least amount of daily cases
            if (bottomAverage >=apiState.positiveIncrease){ 
                map.setAttribute('fill','#fcae62');
            }
            //Lesser amount of daily cases
        if (bottomAverage <=apiState.positiveIncrease){
            map.setAttribute('fill','#fa983a');
        }
    
        //High amount of cases
        if (average <= apiState.positiveIncrease){
            map.setAttribute('fill','#e55039');
        
        }
        //Highest amount of cases
        if (topAverage <=apiState.positiveIncrease){
            map.setAttribute('fill','#f02f05');
        }

        //Daily positive cases
        map.setAttribute('data-info',['Positive:' + apiState.positiveIncrease,'Deaths:'+apiState.deathIncrease,'Hospitalized:'+apiState.hospitalizedIncrease])
        
        
    }

    

    
}
//End of Loop

    });

    