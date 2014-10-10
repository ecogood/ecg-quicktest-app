'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:progressBar
 * @description
 * # progressBar
 * Controller of ...
 */
angular.module('ecgQuicktestApp')
  .directive('progressbar', function() {
    var linker = function(scope, element, attrs) {
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