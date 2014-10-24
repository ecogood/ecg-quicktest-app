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
    'ui.router',

    'ecg.quicktest'
  ])
  .value('localeSupported', [
    'en-US',
    'de-DE'
  ]);