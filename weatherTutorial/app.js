//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);   

//ROUTES   
weatherApp.config(function($routeProvider){
   
   $routeProvider
   
   .when('/', {
       templateUrl: 'pages/home.html',
       controller: 'homeController'
   })
    
   .when('/forecast', {
       templateUrl: 'pages/forecast.html',
       controller: 'forecastController'
   })
    .when('/forecast/:days', {
       templateUrl: 'pages/forecast.html',
       controller: 'forecastController'
   })
    
});

//SERVICES
weatherApp.service('cityServices', function(){
    
    this.city= "London,uk";
});

//CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location','cityServices', function($scope, $location, cityServices) {
                                         
    $scope.city = cityServices.city;
    $scope.$watch('city', function(){
         cityServices.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
}]);



weatherApp.controller('forecastController', ['$scope','$resource','cityServices','$routeParams', function($scope, $resource, cityServices,$routeParams) { 
                                             
    $scope.city =  cityServices.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days ,APPID: "17fda37433239f0068ac2324569ac81d" });
    
    $scope.convertToFahrenheit = function(degk){
        return Math.round((1.8*(degk - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }

}]);

//DIRECTIVE
weatherApp.directive("weatherReport", function(){
    return{
        restrict:'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});