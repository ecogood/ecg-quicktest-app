ECG Quick Test App [![Build Status](https://travis-ci.org/ecogood/ecg-quicktest-app.svg?branch=master)](https://travis-ci.org/ecogood/ecg-quicktest-app)
==================

This the the web version of the quick test of the Economy for the Common Good. You can also [use it offline](#use-offline).

## Demo

http://ecogood.github.io/ecg-quicktest-app/

Works on desktop, tablet and phones.

### Use offline

* [Download the quick test](https://github.com/ecogood/ecg-quicktest-app/archive/gh-pages.zip)
* Unzip and open ``index.html``

## Software Architecture

The Software Architecture is modular and server/client decoupled. 

It consists of 3 npm packages:

- [ecg-quicktest-texts](https://github.com/ecogood/ecg-quicktest-texts) - translations of the quick test.
- [ecg-quicktest-model](https://github.com/ecogood/ecg-quicktest-model) - JavaScript model of the quick test. Create test, get/set answers, get results, etc.
- [ecg-quicktest-app](https://github.com/ecogood/ecg-quicktest-app) - AngularJS frontend of the quick test. This package uses the two packages above.

The texts and model packages can be installed via [npm](https://www.npmjs.org/search?q=ecg%20quicktest) 
and used in any JavaScript application, like on the server with Node.js, in a mobile app, or any web application. 

The packages are unit tested with [Mocha](http://visionmedia.github.io/mocha/) and [Chai](http://chaijs.com/) 
and end-to-end tested with [Protractor](http://angular.github.io/protractor/).

## Tests

Uses Protractor for E2E Testing.

### View the tests

[Open the tests](test/e2e/spec/quicktest-process.spec.js)

### Run the tests

Install the Browsers for e2e testing:

``./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update``

start the tests:

``npm test``

## Roadmap

* :white_check_mark: Create first working version in AngularJS with previous and next buttons, state of given answers and progressbar.
* :white_check_mark: Add Tests
* Add English translation

## Contributing

Feel free to contribute to the Roadmap or otherwise.

### Issues and Features

Share issues and desired features [in GitHub](https://github.com/ecogood/ecg-quicktest-app/issues).

## License

* MIT License

## Developers

* [Nikolay Georgiev](http://nikolay-georgiev.net/), ECG Berlin

## Release History

* 0.1.3 - remove double sentence, set German as default lang, fix movement of buttons and set bower dependencies to angular 1.2.0.
* 0.1.2 - fix layout on mobile phones.
* 0.1.1 - add E2E Tests
* 0.1.0 - create first working version in AngularJS with previous and next buttons, state of given answers and progressbar.