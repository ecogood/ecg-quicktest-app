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

    var test = $scope.$parent.test;
    var questionNumber = parseInt($routeParams.questionNumber);

    // ensure test is started
    if (typeof test === 'undefined' || typeof questionNumber !== 'number') {
      $location.path('/');
    }
    else {

      $scope.test = test;
      $scope.companyName = $scope.test.getParticipant().name;
      $scope.questionNumber = questionNumber;
      $scope.$parent.testProgress = $scope.test.getPercentageFinished();
      $scope.question = $scope.t.test.questions[$scope.questionNumber - 1];

      $scope.goToPrevQuestion = function() {
        var prevQuestion = $scope.test.getPrevQuestion($scope.questionNumber);
        if (prevQuestion !== null) {
          $location.path('question/' + prevQuestion);
        } else {
          // there is no previous question, stay here
        }
      };

      $scope.goToNextQuestion = function() {
        var nextQuestion = $scope.test.getNextQuestion($scope.questionNumber);
        if (nextQuestion !== null) {
          $location.path('question/' + nextQuestion);
        } else {
          // there is no next question, go to results
          $location.path('results');
        }
      };

      $scope.answerClicked = function(answerValue) {
        $scope.test.setAnswer($scope.questionNumber, answerValue);
        $scope.goToNextQuestion();
      };

    }

  });