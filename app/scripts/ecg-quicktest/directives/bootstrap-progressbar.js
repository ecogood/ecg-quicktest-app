'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:progressBar
 * @description
 * # progressBar
 */
angular.module('ecg.quicktest')
  .directive('progressbar', function() {
    var linker = function($scope, element, attrs) {
      updateProgressBar(element, attrs);
      $scope.$watch('testProgress', function() {
        updateProgressBar(element, attrs);
      });
    };

    var updateProgressBar = function(element, attrs) {
      element.attr('data-transitiongoal', attrs.transitiongoal);
      /* jshint camelcase:false */
      element.progressbar(
        {display_text: 'fill'}
      );
    };

    return {
      restrict: 'A',
      link: linker
    };
  });