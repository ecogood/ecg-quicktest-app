'use strict';

var ecgQuicktestTexts = {};

angular.module('ecg-quicktest')
  .service('ecgQuicktestTexts', function() {
    return {
      en: ecgQuicktestTexts.en,
      de: ecgQuicktestTexts.de
    };
  });
