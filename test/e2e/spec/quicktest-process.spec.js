'use strict';


describe('E2E: book details view', function() {

  var highestAnswer;
  /**
   * Navigates to the next question
   *
   * @param curIterIndex the current iteration index
   * @param numTimes number of times to click on the answer button
   * @param btnCss the css for the button
   * @param callback the function to be called at the end.
   */
  var navigateToNextQuestion = function(curIterIndex, numTimes, btnCss, callback) {
    if (curIterIndex === numTimes) {
      callback();
    } else {
      highestAnswer = element(by.css(btnCss));
      highestAnswer.click().then(function() {
        navigateToNextQuestion(curIterIndex + 1, numTimes, btnCss, callback);
      });
    }
  };

  beforeEach(function() {
    browser.get('/');
  });

  it('should have 0% after filling out all answers with min points for \'company\'', function() {

    var startTest = element(by.css('#btn-start-test'));
    startTest.click().then(function() {

      var answersFinished = function() {
        browser.getCurrentUrl().then(function(data) {
          // result URL
          expect(data).toContain('result');

          var percentageEl = element(by.css('.result-percentage'));
          expect(percentageEl.getText()).toEqual('0');
        });
      };
      navigateToNextQuestion(0, 27, '.btn-ecg-level-0', answersFinished);
    });
  });

  it('should have 100% after filling out all answers with max points for \'company\'', function() {
    var startTest = element(by.css('#btn-start-test'));
    startTest.click().then(function() {

      var answersFinished = function() {
        browser.getCurrentUrl().then(function(data) {
          // result URL
          expect(data).toContain('result');

          var percentageEl = element(by.css('.result-percentage'));
          expect(percentageEl.getText()).toEqual('100');
        });
      };
      navigateToNextQuestion(0, 27, '.btn-ecg-level-4', answersFinished);
    });
  });

  it('should have 0% after filling out all answers with min points for \'self-employed\'', function() {

    element(by.cssContainingText('option', 'Yes')).click().then(function() {
      var startTest = element(by.css('#btn-start-test'));
      startTest.click().then(function() {
        var answersFinished = function() {
          browser.getCurrentUrl().then(function(data) {
            // result URL
            expect(data).toContain('result');

            var percentageEl = element(by.css('.result-percentage'));
            expect(percentageEl.getText()).toEqual('0');
          });
        };
        navigateToNextQuestion(0, 20, '.btn-ecg-level-0', answersFinished);
      });
    });
  });

  it('should have 100% after filling out all answers with max points for \'self-employed\'', function() {

    element(by.cssContainingText('option', 'Yes')).click().then(function() {
      var startTest = element(by.css('#btn-start-test'));
      startTest.click().then(function() {
        var answersFinished = function() {
          browser.getCurrentUrl().then(function(data) {
            // result URL
            expect(data).toContain('result');

            var percentageEl = element(by.css('.result-percentage'));
            expect(percentageEl.getText()).toEqual('100');
          });
        };
        navigateToNextQuestion(0, 20, '.btn-ecg-level-4', answersFinished);
      });
    });
  });

});
