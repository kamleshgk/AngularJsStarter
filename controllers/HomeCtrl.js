/**
 * Controller: HomeCtrl
 */
angular.module('HigherOrderApp')
  .controller('HomeCtrl',
    function HomeCtrl ($scope, UserManagementFactory)
    {
      'use strict';
              
      $scope.users = "This is your Home Page.  Add our dashboard!";
      

    });