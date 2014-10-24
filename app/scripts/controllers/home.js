'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecgQuicktestApp
 */
angular.module('ecgQuicktestApp')
  .controller('HomeCtrl', function($scope, $log, $state, ecgQuicktestModel) {

    $scope.$parent.testProgress = 0;
    $scope.readMore = false;

    $scope.participantType = 'company';
    $scope.isSelfEmployed = 'false';
    $scope.setSelfEmployed = function() {
      if ($scope.isSelfEmployed === 'true') {
        $scope.participantType = 'self-employed';
      } else {
        $scope.participantType = 'company';
      }
    };

    $scope.startTest = function(){
      var test = ecgQuicktestModel.factory();
      test.setParticipantType($scope.participantType);
      test.getParticipant().name = $scope.participantName;
      $scope.$parent.test = test;
      $state.go('quicktestQuestion', {questionNumber: 1});
    };
  });
