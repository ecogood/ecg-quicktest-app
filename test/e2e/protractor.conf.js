'use strict';


exports.config = {

  specs: ['spec/**/*.js'],

  baseUrl: 'http://localhost:9001/',
  rootElement: 'html',

  multiCapabilities: [
    {
      browserName: 'chrome'
    }
//    ,
//    {
//      browserName: 'firefox'
//    }
  ]

};