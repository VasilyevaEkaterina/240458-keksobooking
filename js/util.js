'use strict';

window.util = (function () {

  var keyCodes = {
    ESC: 27,
    ENTER: 13
  };

  var DEBOUNCE_TIME = 300;
  var lastTimeout;

  return {

    getRandomNumber: function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },

    getRandomElement: function (array) {
      var index = Math.floor(this.getRandomNumber(0, array.length - 1));
      return array[index];
    },

    getRandomArray: function (array, length, el) {
      var arr = [];

      while (arr.length < length) {
        var randomElement = this.getRandomElement(array);

        if (el && ~arr.indexOf(randomElement)) {
          continue;
        } else {
          arr.push(randomElement);
        }
      }

      return arr;
    },

    getElementsArray: function (getObj, arrayLength) {
      var array = [];

      for (var i = 0; i < arrayLength; i++) {
        array.push(getObj(i));
      }

      return array;
    },

    isEscPressed: function (keyCode) {
      return keyCode === keyCodes.ESC;
    },

    isEnterPressed: function (keyCode) {
      return keyCode === keyCodes.ENTER;
    },

    debounce: function (callback) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(callback, DEBOUNCE_TIME);
    }
  };
})();
