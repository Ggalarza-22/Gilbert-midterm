var app = angular.module('spaApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
  .when('/works',
    {
      controller: 'WorksController',
      templateUrl: 'app/views/works.html'
    })
    .when('/news',
      {
        controller: 'NewsController',
        templateUrl: 'app/views/news.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
   .when('/about',
      {
        controller: 'StoryController',
        templateUrl: 'app/views/about.html'
      })
  .when('/services',
     {
       controller: 'AdamController',
       templateUrl: 'app/views/services.html'
     })

     .when('/test',
        {
          controller: 'AdamController',
          templateUrl: 'app/views/test.html'
        })
});
app.controller('WorksController', function($scope){
  $scope.customerID = 5;
});
app.controller('NewsController', function($scope){
  $scope.customerID = 5;
});
app.controller('StoryController', function($scope){
  $scope.customerID = 5;
});
app.controller('ContactController', function($scope){
  $scope.customerID = 5;
});
app.controller('AdamController', function($scope){
  $scope.customerID = 5;
});
app.controller('HomeController', function($scope) {
  $scope.customers = [
      {"id": 1, "name":"Ted", "total": 5.996},
      {"id": 2, "name":"Michelle", "total": 10.994},
      {"id": 3, "name":"Zed", "total": 10.99},
      {"id": 4, "name":"Tina", "total": 15.994}
    ];
  });
