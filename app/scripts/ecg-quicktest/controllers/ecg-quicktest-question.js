'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:TestQuestionsCtrl
 * @description
 * # TestQuestionsCtrl
 * Controller of ...
 */
angular.module('ecg.quicktest')
  .controller('ECGQuicktestQuestionsCtrl', function($scope, $stateParams, $state) {

    var test = $scope.$parent.test;
    var questionNumber = parseInt($stateParams.questionNumber);

    // ensure test is started
    if (typeof test === 'undefined' || typeof questionNumber !== 'number') {
      $state.go('ecgQuicktest');
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
          $state.go('ecgQuicktestQuestion', {questionNumber: prevQuestion});
        } else {
          // there is no previous question, stay here
        }
      };

      $scope.goToNextQuestion = function() {
        var nextQuestion = $scope.test.getNextQuestion($scope.questionNumber);
        if (nextQuestion !== null) {
          $state.go('ecgQuicktestQuestion', {questionNumber: nextQuestion});
        } else {
          // there is no next question, go to results
          $state.go('ecgQuicktestResults');
        }
      };

      $scope.answerClicked = function(answerValue) {
        $scope.test.setAnswer($scope.questionNumber, answerValue);
        $scope.goToNextQuestion();
      };

    }

  });