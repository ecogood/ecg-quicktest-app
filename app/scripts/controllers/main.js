'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecgQuicktestApp
 */
angular.module('ecgQuicktestApp')
  .controller('MainCtrl', function($scope, locale, localeEvents, ecgQuicktestTexts) {
    function refresh(lang) {
      $scope.t = ecgQuicktestTexts[lang.substring(0,2)];
    }

    refresh(locale.getLocale());

    $scope.setLocale = locale.setLocale;

    $scope.$on(localeEvents.localeChanges, function(event, locale) {
      refresh(locale);
    });
  });
