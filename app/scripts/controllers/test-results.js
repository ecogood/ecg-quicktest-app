'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:TestResultsCtrl
 * @description
 * # TestResultsCtrl
 * Controller of ...
 */
angular.module('ecgQuicktestApp')
  .controller('TestResultsCtrl', function($scope, $location) {

    // ensure test is started
    if (typeof $scope.$parent.test === 'undefined') {
      $location.path('/');
    } else {

      $scope.test = $scope.$parent.test;

      var result = $scope.test.getResult();
      $scope.points = result.points;
      $scope.level = result.level;
      $scope.maxPoints = $scope.test.getMaxPoints();
    }
  });