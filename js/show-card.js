'use strict';

(function () {
  window.showCard = function (pin) {
    var dialog = document.querySelector('.dialog');
    window.card.appendPins(pin);
    dialog.classList.remove('hidden');
  };
})();
