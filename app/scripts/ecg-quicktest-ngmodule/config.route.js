(function() {
  'use strict';

  angular.module('ecg-quicktest')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('ecgQuicktest', {
          abstract: true,
          url: '/',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/wrapper/wrapper.html',
          controller: 'EcgQuicktestHomeCtrl as vm'
        })
        .state('ecgQuicktest.home', {
          url: '',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/home/home.html',
          controller: 'EcgQuicktestHomeCtrl as vm'
        })
        .state('ecgQuicktest.question', {
          url: 'question/:questionNumber',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/question/question.html',
          controller: 'EcgQuicktestQuestionsCtrl as vm'
        })
        .state('ecgQuicktest.results', {
          url: 'results',
          templateUrl: 'scripts/ecg-quicktest-ngmodule/results/results.html',
          controller: 'EcgQuicktestResultsCtrl as vm'
        });
      $urlRouterProvider.otherwise('/');

    });

})();