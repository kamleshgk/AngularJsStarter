/**
 * Controller: InboxCtrl
 */
angular.module('HigherOrderApp')
.controller('UserDetailsCtrl',
     function UserDetailsCtrl ($scope, $routeParams, $location, UserManagementFactory, FlashService ) {
      'use strict';

       var userId = $routeParams.id;
              
       var user;
       if (userId != '$$')
       {
          $scope.showDelete = true;
          console.log('gone update');
          $scope.dataLoading = true;
          $scope.buttonLabel = 'Update';
          //Get the user details
          UserManagementFactory.getUserDetails('3', userId)
            .then(function (response) {
                  if (response.success) {
                      console.log('The request was successful!', response.message);
                      $scope.dataLoading = false;
                      $scope.data = response.message;
                  }
                  else {
                      console.log('Gone UserManagementFactory Fail!', response);
                      FlashService.Error('Errror getting users. Please try again.');
                      $scope.dataLoading = false;
                  }
            });
       }
       else
       {
            $scope.showDelete = false;
            $scope.dataLoading = false;
            console.log('gone create');
            $scope.buttonLabel = 'Create';
       }

       
       $scope.createOrUpdate = function createOrUpdate()
       {
           var userId = $routeParams.id;
           if (userId != '$$')
           {
               console.log('updating user  ' );
               updateUser();
           }
           else
           {
               console.log('creating user  ' );
               createUser();
           }
       }
            
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
        
       function createUser() {
              $scope.dataLoading = true;
            
              var user = $scope.data;
              UserManagementFactory.createUser('3',user)
                .then(function (response) {
                      if (response.success) {
                        $scope.dataLoading = false;
                        FlashService.Success('User Created', true);
                        $location.path('/users');
                      }
                      else {
                        FlashService.Error(response.message);
                        $scope.dataLoading = false;
                      }
                });
       }
        
        
       function updateUser() {
            $scope.dataLoading = true;
            
            var user = $scope.data;
            UserManagementFactory.updateUser('3',user)
            .then(function (response) {
                  if (response.success) {
                    $scope.dataLoading = false;
                    FlashService.Success('User Updated', true);
                    $location.path('/users');
                  }
                  else {
                    FlashService.Error(response.message);
                    $scope.dataLoading = false;
                  }
            });
       }
 });