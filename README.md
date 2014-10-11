ECG Quick Test App
==================

This the the web version of the quick test of the Economy for the Common Good. You can also [use it offline](#use-offline).

### Build Status
[![Build Status](https://travis-ci.org/ecogood/ecg-quicktest-app.svg?branch=master)](https://travis-ci.org/ecogood/ecg-quicktest-app)

## Demo

http://ecogood.github.io/ecg-quicktest-app/

### Use offline

* [Download the quick test](https://github.com/ecogood/ecg-quicktest-app/archive/gh-pages.zip)
* Unzip and open ``index.html``

## Installation

```
npm install --save ecg-quicktest-app
```

## Tests

Test for this app are not yet written.
The two modules (ecg-quicktest-model and ecg-quicktest-texts) used are fully tested. 

### View the tests

[Open the tests]()

### Run the tests

``npm test``

for e2e Testing:

``./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update``

## Roadmap

* :white_check_mark: Create first working version in AngularJS with previous and next buttons, state of given answers and progressbar.
* Add Tests
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

* 0.1.1 - add E2E Tests
* 0.1.0 - create first working version in AngularJS with previous and next buttons, state of given answers and progressbar.