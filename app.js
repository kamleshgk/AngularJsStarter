//This file will contain the Angular module for the app, defining the routes and
//templates to use for the user interface

// Angular module, defining routes for the app
//need to tell your Angular app to use 'pollServices' service module.

angular.module('HigherOrderApp', [
    'ngRoute',
    'ngSanitize'
])
.constant('serverDomainAndPort','http://localhost:1997')
.config(function ( $routeProvider ) {

  'use strict';
          
  $routeProvider
  .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
        })
  .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
        })
  .when('/users/:id', {
        templateUrl: 'views/userDetails.html',
        controller: 'UserDetailsCtrl',
        controllerAs: 'user'
        })
  .otherwise({
        redirectTo: '/home'
      });
}).run(function($rootScope){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        console.log(event, current, previous, rejection)
    })
});