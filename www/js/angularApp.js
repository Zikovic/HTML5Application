  var app = angular.module('app', ['ngAnimate','ngRoute','hmTouchEvents']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'pages/home.html',
          controller:'homeController'
        })
         .when('/stopPlaces', {
          templateUrl: 'pages/stopPalces.html'
        })
      .when('/line', {
          templateUrl: 'pages/line.html',
          controller:'testController'
        })
        .otherwise({redirectTo: '/home'});
  }]);





app.controller('homeController',function($scope,$rootScope,$location){

      $rootScope.titles = function (title){
        $('.home>p').remove();
        $('.home').append("<p>"+title+"</p>");
      }
      
      $rootScope.titles("Bienvenue");
        $scope.test=function(){
             $location.path("/line");
        }
$scope.onHammer = function onHammer(event) {
    var elem = event.target;
    console.log(elem);
    $(elem).css({
        left:event.center.x+'px'
    });
       
};   
    
    $scope.topage = function(){
        $scope.test();
    }

    

});

app.controller('testController',function($rootScope){
     $rootScope.titles("نقاط التوقف");

});


