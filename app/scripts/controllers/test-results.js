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
      $scope.$parent.testProgress = $scope.test.getPercentageFinished();
      $scope.companyName = $scope.test.getParticipant().name;

      var result = $scope.test.getResult();
      $scope.points = result.points;
      $scope.level = result.level;
      $scope.percentage = result.percentage;
      $scope.maxPoints = $scope.test.getMaxPoints();
    }
  });