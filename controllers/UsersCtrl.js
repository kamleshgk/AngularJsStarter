/**
 * Controller: InboxCtrl
 */
angular.module('HigherOrderApp')
.controller('UsersCtrl', function UsersCtrl ($scope, UserManagementFactory, FlashService) {
      'use strict';
            $scope.dataLoading = true;
            $scope.searchText = '';
            
            $scope.deleteRecord = function deleteRecord(id)
            {
                if (confirm("Are you sure?")) {
                console.log('deleting user  ' + id );
                $scope.dataLoading = true;
                
                UserManagementFactory.deleteUser('3',id)
                .then(function (response) {
                      if (response.success) {
                      $scope.dataLoading = false;
                      FlashService.Success('User Deleted', true);
                      $location.path('/users');
                      }
                      else {
                      FlashService.Error(response.message);
                      $scope.dataLoading = false;
                      }
                      });
                }
            }
            
            UserManagementFactory.getUsers('3')
            .then(function (response) {
                  if (response.success) {
                      console.log('The request was successful!', response.message);
                      $scope.dataLoading = false;
                      $scope.orderByField = 'firstName';
                      $scope.reverseSort = false;
                      $scope.data = response.message;
                  }
                  else {
                      console.log('Gone UserManagementFactory Fail!', response);
                      FlashService.Error('Errror getting users. Please try again.');
                      $scope.dataLoading = false;
                  }
              });
            
  });