(function() {
  'use strict';

  angular.module('ecg-quicktest')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('ecgQuicktest', {
          url: '/',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/home/home.html',
          controller: 'EcgQuicktestHomeCtrl'
        })
        .state('ecgQuicktestQuestion', {
          url: '/question/:questionNumber',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/question/question.html',
          controller: 'EcgQuicktestQuestionsCtrl'
        })
        .state('ecgQuicktestResults', {
          url: '/results',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/results/results.html',
          controller: 'EcgQuicktestResultsCtrl'
        });
      $urlRouterProvider.otherwise('/');

    });

})();