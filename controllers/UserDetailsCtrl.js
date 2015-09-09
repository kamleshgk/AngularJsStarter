/**
 * Controller: InboxCtrl
 */
angular.module('HigherOrderApp')
.controller('UserDetailsCtrl',
     function UserDetailsCtrl ($scope, $routeParams, $location, myConfig, UserManagementFactory, FlashService ) {
      'use strict';

       var userId = $routeParams.id;
              
       var user;
       if (userId != '$$')
       {
          $scope.showPassword = false;
          $scope.showDelete = true;
          console.log('gone update');
          $scope.dataLoading = true;
          $scope.buttonLabel = 'Update';
          //Get the user details
          UserManagementFactory.getUserDetails(myConfig.url + ':' + myConfig.port, userId)
            .then(function (response) {
                  if (response.success) {
                      console.log('The request was successful!', response.message);
                      $scope.dataLoading = false;
                      $scope.data = response.message;
                      if ($scope.data)
                        $scope.admincheck = 'checked';
                      else
                        $scope.admincheck = '';                  
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
            $scope.admincheck = '';
            $scope.showPassword = true;
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
                
                UserManagementFactory.deleteUser(myConfig.url + ':' + myConfig.port,id)
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
              UserManagementFactory.createUser(myConfig.url + ':' + myConfig.port, user)
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
            UserManagementFactory.updateUser(myConfig.url + ':' + myConfig.port, user)
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