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
      var langShort = lang.substring(0,2);
      $scope.lang = langShort;
      $scope.t = ecgQuicktestTexts[langShort];
    }

    refresh(locale.getLocale());

    $scope.setLocale = locale.setLocale;

    $scope.$on(localeEvents.localeChanges, function(event, locale) {
      refresh(locale);
    });
  });
