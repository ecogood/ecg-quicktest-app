exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  chromeOnly: true,
  specs: ['test/e2e/**/*.js'],

  jasmineNodeOpts: {
    showColors: true
  },
  framework: 'jasmine'
};