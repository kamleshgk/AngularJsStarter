/**
 * Controller: HomeCtrl
 */
angular.module('HigherOrderApp')
  .controller('HomeCtrl',
    function HomeCtrl ($scope, UserManagementFactory, $rootScope)
    {
      'use strict';
              
      $scope.user = $rootScope.globals.currentUser.user;
      

    });