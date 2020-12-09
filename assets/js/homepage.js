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



  

  //saves when refreshed
  //right side save
let side1 = 1;
localStorage.getItem('statename')
localStorage.getItem('stateinfo')
let statename =document.querySelector('.state1')
let stateinfo =document.querySelector('.poscomp1')
statename.textContent = localStorage.getItem('statename')
stateinfo.textContent = localStorage.getItem('stateinfo')

//Left side save
localStorage.getItem('statename2')
localStorage.getItem('stateinfo2')
let statename2 =document.querySelector('.state2')
let stateinfo2 =document.querySelector('.poscomp2')
statename2.textContent = localStorage.getItem('statename2')
stateinfo2.textContent = localStorage.getItem('stateinfo2')



  //Covid stat API
    const stateApi = 'https://api.covidtracking.com/v1/states/current.json';
        fetch(stateApi)
        .then(response =>{
            return response.json();
        })
        .then(stateData => {
            console.log(stateData);
    //End of API call

    //Today's date
    let currentDate = document.querySelector('.today');
    currentDate.textContent = moment().format('LL');
    //End of todays date
//start of loop

var apiState;

//math function
var totalCases = 0;
var totalDeaths = 0;
var totalHospital = 0;


for (apiState of stateData){
    totalCases = totalCases + apiState.positiveIncrease;
    totalDeaths = totalDeaths + apiState.deathIncrease;
    totalHospital = totalHospital + apiState.hospitalizedIncrease;
    

}
var average = totalCases/50;
var topAverage = average *1.5;
var bottomAverage = average/1.5

// End of math function

for (apiState of stateData) {
    console.log(apiState);
    let map =document.getElementById(apiState.state);
    let totalpos = document.querySelector('#totalpos');
    let totaldeath = document.querySelector('#totaldeath');
    let totalhosp = document.querySelector('#totalhos');


   

    //Excluded outside states
    if (map !== null){

//event when state is clicked, comparison to right and left side

        map.addEventListener('click', (event)=>{
            //right side of page
            if (side1 == 1) {
                //Local Storage
                localStorage.setItem("statename",event.target.id)
                localStorage.setItem('stateinfo',event.target.getAttribute('data-info'))

                
                event.target
                
                let statename =document.querySelector('.state1')
                let poscomp =document.querySelector('.poscomp1')

                
                statename.textContent = event.target.id;
                poscomp.textContent = event.target.getAttribute('data-info');
                side1 = 2
               
            }
            //left side of page
            else if(side1 == 2){

                 localStorage.setItem("statename2",event.target.id)
                localStorage.setItem('stateinfo2',event.target.getAttribute('data-info'))
                
                let statename2 =document.querySelector('.state2')
                let poscomp2 =document.querySelector('.poscomp2')
                statename2.textContent = event.target.id;
                poscomp2.textContent = event.target.getAttribute('data-info');
                    
            }
            
        })
        

        //end of event click


       
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

        //function to create comma
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        totalCases = numberWithCommas(totalCases)
        totalDeaths = numberWithCommas(totalDeaths)
        totalHospital = numberWithCommas(totalHospital)
        apiState.positiveIncrease = numberWithCommas(apiState.positiveIncrease)
        apiState.deathIncrease = numberWithCommas(apiState.deathIncrease)
        apiState.hospitalizedIncrease = numberWithCommas(apiState.hospitalizedIncrease)

        //end of create comma

        //Daily positive cases
        map.setAttribute('data-info',['Positive: ' + apiState.positiveIncrease,'Deaths: '+apiState.deathIncrease,'Hospitalized: '+apiState.hospitalizedIncrease])
        totalpos.textContent = ' Daily Positive Cases: ' + totalCases;
        totaldeath.textContent = ' Daily Deaths: ' + totalDeaths;
        totalhosp.textContent = ' Daily Hospitalized: ' + totalHospital;
       
        
        
    }

    
    
}
//End of Loop



    });

    

    