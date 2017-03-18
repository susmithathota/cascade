var app= angular.module('cascade',['ngRoute','fullPage.js','ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
	.when('/patientCenter',{templateUrl:'partials/patientCenter.html'})
	.otherwise({redirectTo:'/'})
})
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('indigo');
});
