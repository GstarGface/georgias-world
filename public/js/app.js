var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/about', {
		templateUrl:'views/about.html',
		controller: 'MainController'
	}).
	when('/works', {
		templateUrl:'views/works.html',
		controller: 'MainController'
	}).
	when('/contact', {
		templateUrl:'views/contact.html',
		controller:'MainController'
	}).
	when('/404', {
		templateUrl:'views/404.html',
		controller:'MainController'
	});
}]);