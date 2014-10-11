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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLocalize',
    'ngLocalize.Events'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/question/:questionNumber', {
        templateUrl: 'views/test-questions.html',
        controller: 'TestQuestionsCtrl'
      })
      .when('/results', {
        templateUrl: 'views/test-results.html',
        controller: 'TestResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('localeSupported', [
    'en-US',
    'de-DE'
  ]);
