(function() {
  'use strict';

  /**
   * @name EcgQuicktestResultsCtrl
   * @description Controller of the result view
   */
  angular.module('ecg-quicktest')
    .controller('EcgQuicktestResultsCtrl', EcgQuicktestResultsCtrl);

  /* @ngInject */
  function EcgQuicktestResultsCtrl($scope, $state, ecgQuicktestService) {

    var test = ecgQuicktestService.test;

    // ensure test is started
    if (typeof test === 'undefined') {
      $state.go('ecgQuicktest.home');
    } else {
      var result = test.getResult();

      var vm = this;
      vm.companyName = test.getParticipant().name;
      vm.points = result.points;
      vm.level = result.level;
      vm.percentage = result.percentage;
      vm.maxPoints = test.getMaxPoints();

      $scope.$parent.testProgress = test.getPercentageFinished();
    }
  }

})();