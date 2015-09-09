/**
 * Controller: RegisterController
 */
angular.module('HigherOrderApp')
.controller('RegisterController', function RegisterController ($scope, $location, myConfig, UserManagementFactory, FlashService) {
      'use strict';
            $scope.dataLoading = false;
            $scope.searchText = '';
            
            $scope.registerNewUser = function registerNewUser() {
                $scope.dataLoading = true;
                console.log('going to save...');
                var user = $scope.data;
                UserManagementFactory.createUser(myConfig.url + ':' + myConfig.port,user)
                .then(function (response) {
                      if (response.success) {
                         $scope.dataLoading = false;
                         FlashService.Success('User Registered', true);
                         $location.path('/login');
                      }
                      else {
                         FlashService.Error(response.message);
                         $scope.dataLoading = false;
                      }
                 });
            }
});