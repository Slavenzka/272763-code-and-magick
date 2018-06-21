'use strict';

(function () {
  window.getRandomElement = function (inputArray) {
    return Math.floor(Math.random() * inputArray.length);
  };
}());
