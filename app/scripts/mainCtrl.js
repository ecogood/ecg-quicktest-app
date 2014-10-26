'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecgQuicktestApp
 */
angular.module('app')
  .controller('MainCtrl', function($scope, $state, locale, localeEvents,
                                   ecgQuicktestTexts) {

    function refresh(lang) {
      var langShort = lang.substring(0,2);
      $scope.lang = langShort;
      $scope.t = ecgQuicktestTexts[langShort];
    }

    $scope.setLocale = locale.setLocale;
    $scope.$on(localeEvents.localeChanges, function(event, locale) {
      refresh(locale);
    });
    // set german as default locale
    // alternatively, one could use locale.getLocale() which return the browser locale
    $scope.setLocale('de-DE');

    $scope.go = function(stateName) {
      $state.go(stateName);
    };
  });
