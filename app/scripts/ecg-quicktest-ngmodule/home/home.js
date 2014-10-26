(function() {
  'use strict';

  /**
   * @name EcgQuicktestHomeCtrl
   * @description Controller of the home view
   */
  angular.module('ecg-quicktest')
    .controller('EcgQuicktestHomeCtrl', EcgQuicktestHomeCtrl);

  /* @ngInject */
  function EcgQuicktestHomeCtrl($scope, $state, ecgQuicktestService) {
    var vm = this;

    vm.readMore = false;
    vm.participantName = '';
    vm.participantType = '';
    vm.isSelfEmployed = 'false';
    vm.setSelfEmployed = setSelfEmployed;
    vm.startTest = startTest;

    activate();

    function activate() {
      vm.setSelfEmployed();
      $scope.$parent.testProgress = 0;
    }

    function setSelfEmployed() {
      if (vm.isSelfEmployed === 'true') {
        vm.participantType = 'self-employed';
      } else {
        vm.participantType = 'company';
      }
    }

    function startTest() {
      var test = ecgQuicktestService.model.factory();
      test.setParticipantType(vm.participantType);
      test.getParticipant().name = vm.participantName;
      ecgQuicktestService.test = test;
      $state.go('ecgQuicktest.question', {questionNumber: 1});
    }

  }

})();