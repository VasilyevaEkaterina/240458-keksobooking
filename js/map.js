'use strict';

window.map = (function () {

  var succesHandler = function (offers) {
    window.filters(offers);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.className = 'error';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.card.hideDialog();

  window.backend.load(succesHandler, errorHandler);

})();
