//This file will contain the Angular module for the app, defining the routes and
//templates to use for the user interfaces

// Angular module, defining routes for the app
//need to tell your Angular app to use 'pollServices' service module.

angular.module('HigherOrderApp', [
    'ngRoute',
    'ngSanitize',
    'ngCookies'
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
  .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
        })
  .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
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
}).run(function($rootScope, $location, $cookieStore, $http){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        console.log(event, current, previous, rejection)
    })
   
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
       $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
   
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
       // redirect to login page if not logged in and trying to access a restricted page
       var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
       var loggedIn = $rootScope.globals.currentUser;
       if (restrictedPage && !loggedIn) {
            $location.path('/login');
       }
    })
});