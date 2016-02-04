var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: "homeController",
		templateUrl: "views/home.html"
	});
	$routeProvider.when('/about-us', {
		controller: "aboutUsController",
		templateUrl: "views/aboutus.html"
	});
	$routeProvider.when('/news', {
		controller: "newsController",
		templateUrl: "views/news.html"
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});