  var app = angular.module('app', ['ngAnimate','ngRoute','hmTouchEvents']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'pages/home.html',
          controller:'homeController'
        })
         .when('/test', {
          templateUrl: 'pages/test.html',
          controller:'testController'
        })
        .otherwise({redirectTo: '/home'});
  }]);





app.controller('homeController',function($scope,$location){
    
$scope.test=function(){
     $location.path("/test");
}
$scope.onHammer = function onHammer(event) {
         var elem = event.target;
    console.log(elem);
    $(elem).css({
        left:event.center.x+'px'
    });
       
};   

    

});

app.controller('testController',function(){
     

});


