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
  .module('app', [
    /* Angular dependencies */
    'ngSanitize',
    'ngTouch',
    'ngLocalize',
    'ngLocalize.Events',
    'ui.router',

    /* shared dependencies */
    'blocks.modules',

    /* Feature dependencies */
    'ecg-quicktest'
  ])
  .value('localeSupported', [
    'en-US',
    'de-DE'
  ]);