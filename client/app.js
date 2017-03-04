var app= angular.module('cascade',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/contact',{templateUrl:'partials/contactUs.html'})
	.otherwise({redirectTo:'/'})
})
