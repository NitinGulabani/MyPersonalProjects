var myModule = angular.module('myModule',[]);
const covidUrl = 'https://covid19.mathdro.id/api/';

myModule.run(function($rootScope,$http,$interval){
    
    $http.get(covidUrl).then(function(response){
        $rootScope.allData = response.data;
        animateValue($rootScope,$interval,response);
        $rootScope.country = 'Global Cases';
    }
    ,function (err) {  })

    $rootScope.checkCountry = function () {  

        var cname = $rootScope.countryName;

        if(cname == 0 || cname == null)
        {
            $http.get(covidUrl).then(function(response){
                $rootScope.allData = response.data;
                animateValue($rootScope,$interval,response);
                $rootScope.country = 'Global Cases';
                $rootScope.errormsg = ''; 
            }
            ,function (err) {  })
        }
        else
        {
            $http.get(covidUrl + 'countries/' + cname).then(function(response){
                $rootScope.allData = response.data;
                animateValue($rootScope,$interval,response);
                $rootScope.country = 'Cases Of ' + cname;
                $rootScope.errormsg = ''; 
            }
            ,function (err) { $rootScope.errormsg = '"'+cname + '"  Not Found!!'; })
        }
       
    }   
    function animateValue($rootScope,$interval,response)    
    {
        $rootScope.confirmed = 0;
        $rootScope.recovered = 0;
        $rootScope.death = 0;

        var setConfirmed = $rootScope.allData.confirmed.value;
        var setRecovered = $rootScope.allData.recovered.value;
        var setDeath = $rootScope.allData.deaths.value;

        var confirmed = $interval(function(){
            
            if($rootScope.confirmed <= setConfirmed)
            {
                $rootScope.confirmed = $rootScope.confirmed + 555559;
                if($rootScope.confirmed >= setConfirmed)
                {
                    $rootScope.confirmed = setConfirmed;
                    $interval.cancel(confirmed);
                }
            }else
            {
                $rootScope.confirmed = $rootScope.confirmed - 555559;
                if($rootScope.confirmed <= setConfirmed)
                {
                    $rootScope.confirmed = setConfirmed;
                    $interval.cancel(confirmed);
                }
            }
        },10);

        var recovered = $interval(function(){
            
            if($rootScope.recovered <= setRecovered)
            {
                $rootScope.recovered = $rootScope.recovered + 555559;
                if($rootScope.recovered >= setRecovered)
                {
                    $rootScope.recovered = setRecovered;
                    $interval.cancel(recovered);
                }
            }else
            {
                $rootScope.recovered = $rootScope.recovered - 555559;
                if($rootScope.recovered <= setRecovered)
                {
                    $rootScope.recovered = setRecovered;
                    $interval.cancel(recovered);
                }
            }
        },10);

        var death = $interval(function(){
            
            if($rootScope.death <= setDeath)
            {
                $rootScope.death = $rootScope.death + 55555;
                if($rootScope.death >= setDeath)
                {
                    $rootScope.death = setDeath;
                    $interval.cancel(death);
                }
            }else
            {
                $rootScope.death = $rootScope.death - 55555;
                if($rootScope.death <= setDeath)
                {
                    $rootScope.death = setDeath;
                    $interval.cancel(death);
                }
            }
        },40);
    }
    
});
