'use strict';

var ecgQuickTestModel = require('ecg-quicktest-model');

angular.module('ecg-quicktest-ngmodule')
  .service('ecgQuicktestModel', function() {
    return ecgQuickTestModel;
  });
