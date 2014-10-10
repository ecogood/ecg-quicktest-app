'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:progressBar
 * @description
 * # progressBar
 */
angular.module('ecgQuicktestApp')
  .directive('progressbar', function() {
    var linker = function($scope, element, attrs) {
      updateProgressBar(element, attrs);
      $scope.$watch('testProgress', function(newVal, oldVal) {
        updateProgressBar(element, attrs);
      })
    };

    var updateProgressBar = function(element, attrs) {
      element.attr('data-transitiongoal', attrs.transitiongoal);
      element.progressbar(
        {display_text: 'fill'}
      );
    };

    return {
      restrict: 'A',
      link: linker
    };
  });