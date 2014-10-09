'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:TestQuestionsCtrl
 * @description
 * # TestQuestionsCtrl
 * Controller of ...
 */
angular.module('ecgQuicktestApp')
  .controller('TestQuestionsCtrl', function($scope, $routeParams, $location) {

    // ensure test is started
    if (typeof $scope.$parent.test === 'undefined') {
      $location.path('/');
    } else {

      $scope.test = $scope.$parent.test;

      $scope.questionNumber = parseInt($routeParams.questionNumber);
      $scope.question = $scope.t.test.questions[$scope.questionNumber - 1];

      $scope.answerClicked = function(answerValue) {
        $scope.test.setAnswer($scope.questionNumber, answerValue);
        $scope.goToQuestion($scope.questionNumber + 1);
      };

      $scope.goToQuestion = function(questionNumber) {
        if (typeof questionNumber !== 'number') {
          $location.path('/');
        }
        else if ($scope.test.getQuestionsCount() + 1 === questionNumber) {
          // last question was answered
          $location.path('results');

        } else {
          $location.path('test/' + questionNumber);
        }
      };
    }
  });