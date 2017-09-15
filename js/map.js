'use strict';

window.map = (function () {

  var successHandler = function (offers) {
    window.filters(offers);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.className = 'error';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.card.hideDialog();

  window.backend.load(successHandler, errorHandler);

})();
