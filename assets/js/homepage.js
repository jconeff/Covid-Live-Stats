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


  
  //map.addEventListener('path') 
  

  const stateApi = 'https://api.covidtracking.com/v1/states/current.json';
    fetch(stateApi)
    .then(response =>{
        return response.json();
    })
    .then(stateData => {
        console.log(stateData);

        let hi = document.querySelector('#HI');
        hi.setAttribute('data-info', stateData[0].positive)
      

        
        console.log(stateData[0].positive);

//start of loop

var apiState;

for (apiState of stateData) {
    console.log(apiState);
    let map =document.getElementById(apiState.state);
    if (map !== null){




        map.setAttribute('data-info',"Positive:" + apiState.positive);
    }

    
}

    });
