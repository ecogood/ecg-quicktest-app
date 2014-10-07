'use strict';

var translation = {
  en: {
    name: 'English'
  },
  de: {
    name: 'Deutsch'
  }
};

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecgQuicktestApp
 */
angular.module('ecgQuicktestApp')
  .controller('MainCtrl', function($scope, locale, localeEvents) {
    function refresh(lang) {
      console.log('lang = ', lang);
      $scope.t = translation[lang.substring(0,2)];
    }

    refresh(locale.getLocale());

    $scope.setLocale = locale.setLocale;

    $scope.$on(localeEvents.localeChanges, function(event, locale) {
      refresh(locale);
    });
  });
