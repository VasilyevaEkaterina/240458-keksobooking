'use strict';

window.pin = (function () {

  var createPinElement = function (pin) {

    var img = {
      PIN_WIDTH: 40,
      PIN_HEIGHT: 40,
      CLASS_NAME: 'rounded'
    };

    var PIN_CLASS_NAME = 'pin';
    var PIN_TAB_INDEX = '0';

    var pinElement = document.createElement('div');
    var imgElement = document.createElement('img');

    pinElement.className = PIN_CLASS_NAME;
    pinElement.style.left = pin.location.x - pinElement.offsetWidth / 2 + 'px';
    pinElement.style.top = pin.location.y - pinElement.offsetHeight + 'px';
    pinElement.tabIndex = PIN_TAB_INDEX;

    imgElement.className = img.CLASS_NAME;
    imgElement.src = pin.author.avatar;
    imgElement.width = img.PIN_WIDTH;
    imgElement.height = img.PIN_HEIGHT;

    pinElement.appendChild(imgElement);

    return pinElement;
  };

  var activatePin = function (pin) {
    pin.classList.add('pin--active');
  };

  var openPinDialog = function (evt, ad) {
    var target = evt.currentTarget;

    window.pin.deactivePin();
    activatePin(target);
    window.card.showDialog(ad);
  };

  var initPinHandlers = function (node, ad) {
    node.addEventListener('click', function (evt) {
      openPinDialog(evt, ad);
    });

    node.addEventListener('keydown', function (evt) {
      if (window.util.isEnterPressed(evt.keyCode)) {
        openPinDialog(evt, ad);
      }
    });
  };

  return {

    createPin: function (ad) {
      var node = createPinElement(ad);
      initPinHandlers(node, ad);
      return node;
    },

    deactivePin: function () {
      var activePin = document.querySelector('.pin--active');
      if (activePin) {
        activePin.classList.remove('pin--active');
      }
    }
  };
})();
