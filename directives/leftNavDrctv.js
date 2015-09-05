/**
 * Directive: LeftNav <leftnav></leftnav>
 */
angular.module('HigherOrderApp')
  .directive('leftnav', function leftnavDirective () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "../views/nav.html",
    }
  });


