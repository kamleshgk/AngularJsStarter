/**
 * Controller: InboxCtrl
 */
angular.module('HigherOrderApp')
.controller('LoginController', function LoginController ($scope, UserManagementFactory, $location, AuthenticationService, FlashService) {

    'use strict';

    initController();
    
    function initController() {
        // reset login status
        AuthenticationService.ClearCredentials();
    }
            
    $scope.loginUser = function loginUser()
    {
        $scope.dataLoading = true;
        var loginData = { email: $scope.username, password: $scope.password };
        
        UserManagementFactory.loginUser('3',loginData)
        .then(function (response) {
              if (response.success) {
                 $scope.dataLoading = false;
                 console.log(response.message);
                 AuthenticationService.SetCredentials(response.message, $scope.password);
                 $location.path('/');
              }
              else {
                 FlashService.Error(response.message);
                 $scope.dataLoading = false;
              }
        });
     }
});
