     var app = angular.module('spaApp',['ngRoute']);
     app.config(function($routeProvider) {
       $routeProvider.when('/',
         {
           controller:'CustomersController',
           templateUrl: 'app/views/home.html'
         })
       .when('/works',
         {
           controller: 'ExperienceController',
           templateUrl: 'app/views/works.html'
         })
     });


     app.controller('ExperienceController', function($scope){
       $scope.customerID = 5;
     });

     app.controller('CustomersController', function($scope) {
       $scope.customers = [
           {"id": 1, "name":"Ted", "total": 5.996},
           {"id": 2, "name":"Michelle", "total": 10.994},
           {"id": 3, "name":"Zed", "total": 10.99},
           {"id": 4, "name":"Tina", "total": 15.994}
         ];
       });
