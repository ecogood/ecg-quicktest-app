'use strict';

/**
 * @ngdoc function
 * @name ecgQuicktestApp.controller:TestQuestionsCtrl
 * @description
 * # TestQuestionsCtrl
 * Controller of ...
 */
angular.module('ecgQuicktestApp')
  .controller('TestQuestionsCtrl', function($scope, $routeParams) {
    $scope.questionNumber = $routeParams.questionNumber;
  });