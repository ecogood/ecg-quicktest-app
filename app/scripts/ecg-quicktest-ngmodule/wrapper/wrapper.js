(function() {
  'use strict';

  /**
   * @name EcgQuicktestHomeCtrl
   * @description Controller of the home view
   */
  angular.module('ecg-quicktest')
    .controller('EcgQuicktestWrapperCtrl', EcgQuicktestWrapperCtrl);

  /* @ngInject */
  function EcgQuicktestWrapperCtrl($scope, ecgQuicktestService) {
    $scope.testProgress = ecgQuicktestService.test.getPercentageFinished();
  }

})();