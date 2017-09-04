'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.data = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    getRandomRepeat: function (arr) {
      var random = Math.floor(Math.random() * arr.length);
      return arr[random];
    },

    getRandomNoRepeat: function (arr) {
      var random = Math.floor(Math.random() * arr.length);
      var removed = arr.splice(random, 1);
      return removed;
    },

    getRandomFromRange: function (min, max) {
      var random = Math.floor(min + Math.random() * (max + 1 - min));
      return random;
    },

    getRandomLengthArray: function (arr) {
      var copied = arr.slice();
      for (var i = 0; i < copied.length; i++) {
        var randomIndex = Math.floor(Math.random() * copied.length);
        var random = Math.random();
        if (random < 0.5) {
          copied.splice(randomIndex, 1);
        }
      }
      return copied;
    },

    getArrAmount: function (amount) {
      var arr = [];
      var i = 0;
      while (i < amount) {
        arr[i] = ++i;
      }
      return arr;
    },

    closePin: function () {
      if (document.querySelector('.pin--active')) {
        document.querySelector('.pin--active').classList.remove('pin--active');
      }
    }
  };
})();
