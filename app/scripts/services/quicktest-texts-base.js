'use strict';

var ecgQuicktestTexts = {};

angular.module('ecgQuicktestApp')
  .service('ecgQuicktestTexts', function() {
    return {
      en: ecgQuicktestTexts.en,
      de: ecgQuicktestTexts.de
    };
  });
