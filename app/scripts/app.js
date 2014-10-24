'use strict';

/**
 * @ngdoc overview
 * @name ecgQuicktestApp
 * @description
 * # ecgQuicktestApp
 *
 * Main module of the application.
 */
angular
  .module('ecgQuicktestApp', [
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
//    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLocalize',
    'ngLocalize.Events',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('ecgQuicktest', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('ecgQuicktestQuestion', {
        url: '/question/:questionNumber',
        templateUrl: 'views/test-questions.html',
        controller: 'TestQuestionsCtrl'
      })
      .state('ecgQuicktestResults', {
        url: '/results',
        templateUrl: 'views/test-results.html',
        controller: 'TestResultsCtrl'
      });
    $urlRouterProvider.otherwise('/');

  })
  .value('localeSupported', [
    'en-US',
    'de-DE'
  ]);
