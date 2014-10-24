(function() {
  'use strict';

  angular.module('ecg.quicktest')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('ecgQuicktest', {
          url: '/',
          templateUrl: 'scripts/ecg-quicktest/templates/ecg-quicktest-home.html',
          controller: 'ECGQuicktestHomeCtrl'
        })
        .state('ecgQuicktestQuestion', {
          url: '/question/:questionNumber',
          templateUrl: 'scripts/ecg-quicktest/templates/ecg-quicktest-questions.html',
          controller: 'ECGQuicktestQuestionsCtrl'
        })
        .state('ecgQuicktestResults', {
          url: '/results',
          templateUrl: 'scripts/ecg-quicktest/templates/ecg-quicktest-results.html',
          controller: 'ECGQuicktestResultsCtrl'
        });
      $urlRouterProvider.otherwise('/');

    });

})();