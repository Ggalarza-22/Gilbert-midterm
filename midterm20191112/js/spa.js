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




app.controller('WorksController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/the-book-of-trees.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: 'img/program-or-be-programmed.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Harry Potter & The Prisoner of Azkaban',
    	price: 11.99,
    	pubdate: new Date('1999', '07', '08'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Ready Player One',
    	price: 7.99,
    	pubdate: new Date('2011', '08', '16'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);






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
