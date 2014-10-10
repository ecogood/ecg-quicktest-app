(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ecgQuickTestModel = require('ecg-quicktest-model');

angular.module('ecgQuicktestApp')
  .service('ecgQuicktestModel', function() {
    return ecgQuickTestModel;
  });

},{"ecg-quicktest-model":5}],2:[function(require,module,exports){
"use strict";

var inheritPrototype = require('./inheritPrototype');
var QuickTestAbstractModel = require('./QuickTestAbstractModel');

/**
 * The Quick Test for the ECG Matrix 4.1
 *
 * @constructor
 * @extends #QuickTestAbstractModel
 */
function QuickTest41() {
  // make the constructor new-agnostic
  var self = this instanceof QuickTest41 ? this : Object.create(QuickTest41.prototype);

  // super constructor call
  QuickTestAbstractModel.call(self);

  var allowedParticipantsTypes = self.getAllowedParticipantTypes();

  // dependent parent properties
  self.setParticipantType(allowedParticipantsTypes[0]); // default

  // independent inner properties
  self.doubleValueQuestionNumbers = [19, 21, 23, 25, 26]; // 19, 21, 23, 25 and 26
}
inheritPrototype(QuickTest41, QuickTestAbstractModel);


/**
 * Sets the participant type
 * @param {string} _participantType
 */
QuickTest41.prototype.setParticipantType = function(_participantType) {

  // super call
  QuickTestAbstractModel.prototype.setParticipantType.call(this, _participantType);

  // set other properties according the to participant type
  if (this.getParticipantType() === this.getAllowedParticipantTypes()[0]) { // company

    this.skipQuestions = [];
    this.participantQuestionsCount = this.getQuestionsCount();
    this.maxPoints = 128; // 22*4+5*8

  } else if (this.getParticipantType() === this.getAllowedParticipantTypes()[1]) { // self-employed

    this.skipQuestions = [7, 10, 11, 12, 13, 14, 26];
    this.participantQuestionsCount = this.getQuestionsCount() - this.skipQuestions.length;
    this.maxPoints = 122; // Math.floor((16*4+4*8)*1.28)
  } else {
    throw new Error('Cannot set unallowed participant: ', _participantType);
  }
};

/**
 * @return {int} the maximum questions count
 * @implements
 */
QuickTest41.prototype.getQuestionsCount = function() {
  return 27;
};

/**
 * @return {int} the questions count for the current participant type
 * @implements
 */
QuickTest41.prototype.getParticipantQuestionsCount = function() {
  return this.participantQuestionsCount;
};

/**
 * @return {Array} array with the allowed answer values
 * @implements
 */
QuickTest41.prototype.getAllowedAnswers = function() {
  return [0, 1, 2, 3, 4];
};

/**
 * @return {Array} array with the allowed participant types.
 * @implements
 */
QuickTest41.prototype.getAllowedParticipantTypes = function() {
  return ['company', 'self-employed'];
};

/**
 * @return {{participantType1: maxPoints1, participantType2, maxPoints2}}
 * an obj containing the maximum points for each participant type
 * @implements
 */
QuickTest41.prototype.getMaxPoints = function() {
  return this.maxPoints;
};

QuickTest41.prototype.getSkipQuestions = function() {
  return this.skipQuestions;
};

/**
 * Returns the previous question number for the given question number,
 * taking into account the participant type
 * @param questionNumber
 * @return {int|null} - the previous question number taking into account skipQuestions or
 * <code>null</code> if the given argument is not a number or <=0
 */
QuickTest41.prototype.getPrevQuestion = function(questionNumber) {
  if (typeof questionNumber !== 'number' || questionNumber <= 0) {
    return null;
  }
  if (this.getParticipantType() === this.getAllowedParticipantTypes()[0]) {
    // company
    if (questionNumber > this.getQuestionsCount()) {
      return this.getQuestionsCount();
    } else {
      return questionNumber - 1;
    }

  } else if (this.getParticipantType() === this.getAllowedParticipantTypes()[1]) {
    // self-employed
    var skipQuestions = this.getSkipQuestions();

    if (skipQuestions.indexOf(questionNumber - 1) !== -1) {
      // the previous question is skipped, then recurse-call the previous of the previous one
      return this.getPrevQuestion(questionNumber - 1);
    }
    else if (questionNumber === this.getQuestionsCount() ||
        questionNumber === this.getQuestionsCount() + 1) {
      return this.getQuestionsCount();
    }
    else if (questionNumber > this.getQuestionsCount() + 1) {
      return this.getPrevQuestion(this.getQuestionsCount() +1);
    }
    else {
      return questionNumber - 1;
    }

  } else {
    return null;
  }
};

/**
 * Returns the next question number for the given question number,
 * taking into account the participant type
 * @param questionNumber
 * @return {int|null} - the next question number taking into account skipQuestions or
 * <code>null</code> if the given argument is not a number or bigger than the question count.
 */
QuickTest41.prototype.getNextQuestion = function(questionNumber) {
  if (typeof questionNumber !== 'number' || questionNumber >= this.getQuestionsCount()) {
    return null;
  }
  if (this.getParticipantType() === this.getAllowedParticipantTypes()[0]) {
    // company
    if (questionNumber < 0) {
      return 0;
    } else {
      return questionNumber + 1;
    }

  } else if (this.getParticipantType() === this.getAllowedParticipantTypes()[1]) {
    // self-employed
    var skipQuestions = this.getSkipQuestions();

    if (skipQuestions.indexOf(questionNumber + 1) !== -1) {
      // the next question is skipped, then return the next of the next one
      return this.getNextQuestion(questionNumber + 1);
    }
    else if (questionNumber === -1) {
      return 0;
    }
    else if (questionNumber < -1) {
      return this.getNextQuestion(-1);
    }
    else {
      return questionNumber + 1;
    }

  } else {
    return null;
  }
};

QuickTest41.prototype.getResult = function() {

  var that = this;
  var isSelfEmployed = this.getParticipantType() === this.getAllowedParticipantTypes()[1];

  // sum all answer values
  var answersSum = this.answers.reduce(function(prev, cur, index) {

    // if 'self-employed' skip irrelevant questions
    if (isSelfEmployed && that.getSkipQuestions().indexOf(index + 1) !== -1) {
      return prev;

    } else {
      var curValue = cur;

      // double the value of important questions
      if (that.doubleValueQuestionNumbers.indexOf(index + 1) !== -1) {
        curValue = curValue * 2;
      }
      return prev + curValue;
    }
  }, 0);

  // set result points
  var resultPoints = answersSum;
  if (isSelfEmployed) { // self-employed
    // 43.89 is floored to 43
    resultPoints = Math.floor(answersSum * 1.28); // 1.28 = 32/25
  } else {
    // participant company is assumed, so not change of the points.
  }

  // set result percentage
  var resultPercentage = Number(resultPoints / this.getMaxPoints()).toFixed(2) * 100;

  // set result level
  var resultLevel = 0;
  if (resultPoints >= 33 && resultPoints <= 62) {
    resultLevel = 1;
  } else if (resultPoints >= 63 && resultPoints <= 94) {
    resultLevel = 2;
  } else if (resultPoints >= 95 && resultPoints <= 128) {
    resultLevel = 3;
  }

  return {
    points: resultPoints,
    percentage: resultPercentage,
    level: resultLevel
  };
};

/**
 * @override
 * @returns {string}
 */
QuickTest41.prototype.toString = function() {
  return '[QuickTest41]';
};

module.exports = QuickTest41;
},{"./QuickTestAbstractModel":3,"./inheritPrototype":4}],3:[function(require,module,exports){
"use strict";

/**
 * Abstract model for quick tests. Implements:
 * - get and set participant type.
 * - get and set answers.
 * - get answers count, percentage finished and max points.
 * - get final result.
 *
 * **Note**: Children of this class, should:
 * - call setParticipantType() in their constructor.
 * implement the methods:
 * - {int} getQuestionsCount() - how many questions are in the test
 * - {Array} getAllowedAnswers() - an array with the allowed answers for every question.
 * - {Array} getAllowedParticipantTypes() - an array with the allowed participant types.
 * - {int] getMaxPoints() - the the maximum achievable points in the test for the set participant type.
 * - {int} getResult() - an object {points: <points>, percentage: <percentage>} containing
 * the points and the percentage from 0 to 100% that have been reached.
 *
 * @abstract
 */
function QuickTestAbstractModel() {
  // make the constructor new-agnostic
  var self = this instanceof QuickTestAbstractModel ? this : Object.create(QuickTestAbstractModel.prototype);

  // shared properties
  self.participant = {};
  self.answers = []; // [<questionIndex>]=<answerValue>
}

/**
 * @return {string} the current participant type
 */
QuickTestAbstractModel.prototype.getParticipant = function() {
  return this.participant;
};

/**
 * @return {string} the current participant type
 */
QuickTestAbstractModel.prototype.getParticipantType = function() {
  return this.participant.type;
};

/**
 * Sets the participant type
 * @param {string} _participantType
 */
QuickTestAbstractModel.prototype.setParticipantType = function(_participantType) {

  var allowedParticipantsTypes = this.getAllowedParticipantTypes();
  // check argument
  if (allowedParticipantsTypes.indexOf(_participantType) === -1) {
    throw new Error('The argument \'_participantType\' of setParticipantType() should ' +
      'be one of  \'' + allowedParticipantsTypes + '\', but was \'' + _participantType + '\'.');
  }

  // set it
  this.participant.type = _participantType;
};

/**
 * Sets the answer for the given question number.
 *
 * @throws {Error} if the question number is out of range or the given answer value is not allowed.
 * @param {int} questionNumber - the question number, from 1 to questionCount().
 * @param answerValue
 */
QuickTestAbstractModel.prototype.setAnswer = function(questionNumber, answerValue) {

  // check arguments
  if (questionNumber < 1 || questionNumber > this.getQuestionsCount()) {
    throw new Error('The argument \'questionNumber\' of setAnswer() should ' +
      'be between 1 and ' + this.getQuestionsCount() + ', but has the value \'' + questionNumber + '\'.');
  }
  else if (this.getAllowedAnswers().indexOf(answerValue) === -1) {
    throw new Error('The argument \'answerValue\' of setAnswer() should ' +
      'be one of  \'' + this.getAllowedAnswers() + '\', but was \'' + answerValue + '\'.');
  }

  // set the value
  this.answers[questionNumber - 1] = answerValue;
};

/**
 *
 * @param {int} questionNumber - the question number, from 1 to questionCount().
 * @return {*} the answer for the given question number
 */
QuickTestAbstractModel.prototype.getAnswer = function(questionNumber) {
  return this.answers[questionNumber - 1];
};

QuickTestAbstractModel.prototype.getAnswersCount = function() {
  //TODO
  var answersCount = 0;
  this.answers.forEach(function(answer) {
    answersCount++;
  });
  return answersCount;
};

QuickTestAbstractModel.prototype.getPercentageFinished = function() {
  // TODO
  return 0;
};

module.exports = QuickTestAbstractModel;
},{}],4:[function(require,module,exports){
"use strict";

/**
 * The given SubType inherits the prototype of the given SuperType.
 *
 * @param subType
 * @param superType
 */
module.exports = function inheritPrototype(subType, superType) {
  var subTypePrototype = Object.create(superType.prototype);
  subTypePrototype.constructor = subType;
  subType.prototype = subTypePrototype;
};
},{}],5:[function(require,module,exports){
/**
 * @source https://github.com/ecogood/ecg-quicktest-model/blob/master/index.js
 * @license MIT https://github.com/ecogood/ecg-quicktest-model/blob/master/LICENSE
 */
"use strict";

var QuickTest41 = require('./QuickTest41');

/**
 * @module Factory to create a @QuickTestModel instances.
 *
 * @example
 * // creates a quickTest for the matrix version 4.1
 * var quickTest = quickTestFactory.factory('4.1');
 */
module.exports = {

  /**
   * @private
   */
  tests: {
    '4.1': function() {
      return new QuickTest41();
    }
    // here should be added test with new matrix versions
  },

  /**
   * The supported ECG matrix versions
   *
   * @public
   * @readonly
   * @return {Array} array of the supported matrix versions.
   */
  getMatrixVersions: function() {
    return Object.keys(this.tests);
  },

  /**
   * The default matrix version to be used when the method #factory() is called without parameters.
   *
   * @public
   * @readonly
   * @return {string} string of the default/current matrix version.
   */
  defaultMatrixVersion: '4.1',

  /**
   *
   * @public
   * @return the quick test or <code>null</code> if there is no quick test for the given matrix version
   * @param {string} [_matrixVersion='4.1'] (optional) the ECG matrix version of the quick test
   */
  factory: function(_matrixVersion) {
    var matrixVersion = _matrixVersion || this.defaultMatrixVersion;

    // error if the constructor doesn't exist
    if (typeof this.tests[matrixVersion] !== "function") {
      return null;
    }

    return this.tests[matrixVersion]();
  }

};

},{"./QuickTest41":2}]},{},[1]);
