var app= angular.module('cascade',['ngRoute','fullPage.js','ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
	.when('/patientCenter',{templateUrl:'partials/patientCenter.html'})
	.otherwise({redirectTo:'/'})
})
