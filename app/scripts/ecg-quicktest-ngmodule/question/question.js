(function() {
  'use strict';

  /**
   * @name EcgQuicktestQuestionsCtrl
   * @description Controller of the question view
   */
  angular.module('ecg-quicktest')
    .controller('EcgQuicktestQuestionsCtrl', EcgQuicktestQuestionsCtrl);

  /* @ngInject */
  function EcgQuicktestQuestionsCtrl($scope, $state, $stateParams, ecgQuicktestService) {

    var test = ecgQuicktestService.test;
    var questionNumber = parseInt($stateParams.questionNumber);

    // ensure test is started
    if (typeof test === 'undefined' || typeof questionNumber !== 'number') {
      $state.go('ecgQuicktest.home');
    }
    else {

      var vm = this;
      vm.test = test;
      vm.companyName = vm.test.getParticipant().name;
      vm.questionNumber = questionNumber;
      vm.question = $scope.t.test.questions[vm.questionNumber - 1];

      activate();

      vm.goToPrevQuestion = function() {
        var prevQuestion = vm.test.getPrevQuestion(vm.questionNumber);
        if (prevQuestion !== null) {
          $state.go('ecgQuicktest.question', {questionNumber: prevQuestion});
        } else {
          // there is no previous question, stay here
        }
      };

      vm.goToNextQuestion = function() {
        var nextQuestion = vm.test.getNextQuestion(vm.questionNumber);
        if (nextQuestion !== null) {
          $state.go('ecgQuicktest.question', {questionNumber: nextQuestion});
        } else {
          // there is no next question, go to results
          $state.go('ecgQuicktest.results');
        }
      };

      vm.answerClicked = function(answerValue) {
        vm.test.setAnswer(vm.questionNumber, answerValue);
        vm.goToNextQuestion();
      };

    }

    function activate() {
      $scope.$parent.testProgress = vm.test.getPercentageFinished();
    }
  }

})();