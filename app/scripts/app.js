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
    'ngSanitize',
    'ngTouch',
    'ngLocalize',
    'ngLocalize.Events',
    'ui.router',

    'ecg-quicktest'
  ])
  .config(function($stateProvider) {
    $stateProvider.appUrls = $stateProvider.appUrls || {};
    $stateProvider.appUrls.quicktestUrl = '/';
  })
  .value('localeSupported', [
    'en-US',
    'de-DE'
  ]);