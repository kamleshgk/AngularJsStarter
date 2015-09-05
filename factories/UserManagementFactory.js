/**
 * Factory: UserManagement Factory
 */
angular.module('HigherOrderApp')
  .factory('UserManagementFactory', function UserManagementFactory ($http, $location) {
    'use strict';
    var exports = {};

    exports.getUserDetails = function (serverDomainAndPort, userId) {
           return $http.get('http://localhost:1337/user/' + userId).then(
                 function(response) {
                     // this callback will be called asynchronously
                     // when the response is available
                     var success = { success: true, message: response.data };
                     console.log('handleSuccess!', success);
                     return success;
                 },
                 function(response) {
                     // called asynchronously if an error occurs
                     // or server returns response with an error status.
                     var err;
                     if (response.data)
                        err = { success: false, message: response.data.message };
                     else
                        err = { success: false, message: "Server not responding. Try again." };
                     console.log('handleError!', err);
                     return err;
                 });
    };

    exports.getUsers = function (serverDomainAndPort) {
           
        return $http.get('http://localhost:1337/list').then(
                function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    var success = { success: true, message: response.data };
                    console.log('handleSuccess!', success);
                    return success;
                },
                function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    var err;
                    if (response.data)
                        err = { success: false, message: response.data.message };
                    else
                        err = { success: false, message: "Server not responding. Try again." };
                    console.log('handleError!', err);
                    return err;
                });
    };
           
    exports.createUser = function (serverDomainAndPort, user) {
       return $http.post('http://localhost:1337/create', user).then(
                function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    var success = { success: true, message: response.data };
                    console.log('handleSuccess!', success);
                    return success;
                },
                function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    var err;
                    if (response.data)
                        err = { success: false, message: response.data.message };
                    else
                        err = { success: false, message: "Server not responding. Try again." };
                    console.log('handleError!', err);
                    return err;
                });
    };
           
    exports.updateUser = function (serverDomainAndPort, user) {
       return $http.post('http://localhost:1337/update', user).then(
                function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    var success = { success: true, message: response.data };
                    console.log('handleSuccess!', success);
                    return success;
                },
                function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    var err;
                    if (response.data)
                        err = { success: false, message: response.data.message };
                    else
                        err = { success: false, message: "Server not responding. Try again." };
                    console.log('handleError!', err);
                    return err;
                });
    };

           
    exports.deleteUser = function (serverDomainAndPort, userId) {
    var userData = { 'id':userId };
    console.log(userData);
    return $http.post('http://localhost:1337/destroy', userData).then(
                function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    var success = { success: true, message: response.data };
                    console.log('handleSuccess!', success);
                    return success;
                },
                function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                      var err;
                      if (response.data)
                         err = { success: false, message: response.data.message };
                      else
                         err = { success: false, message: "Server not responding. Try again." };
                      console.log('handleError!', err);
                      return err;
                });
   };
           
    return exports;
});
