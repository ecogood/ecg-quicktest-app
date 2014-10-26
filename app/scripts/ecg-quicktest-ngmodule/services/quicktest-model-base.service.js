'use strict';

var ecgQuickTestModel = require('ecg-quicktest-model');

angular.module('ecg-quicktest')
  .service('ecgQuicktestService', function() {
    return {
      model: ecgQuickTestModel
    };
  });
