'use strict';

(function () {
  var PIN_HEIGHT = 40;
  var PIN_WIDTH = 40;
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');
  var pin = document.querySelector('.pin');
  var dialog = document.querySelector('.dialog');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var activatePin = function (evt) {
    if (document.querySelector('.pin--active')) {
      document.querySelector('.pin--active').classList.remove('pin--active');
    }
    evt.currentTarget.classList.add('pin--active');
    document.addEventListener('keydown', onEscPress);
  };

  var onPinPress = function (evt) {

    window.data.isEnterEvent(evt, function () {
      return activatePin(evt);
    });
  };

  var onPinClick = function (evt) {
    activatePin(evt);
  };


  var renderPin = function (obj) {

    var pinElement = pin.cloneNode(true);

    var onPinPressAppendTemplate = function (evt) {
      window.data.isEnterEvent(evt, function () {
        return window.card.appendTemplate(obj);
      });
    };

    var onPinClickAppendTemplate = function () {
      window.card.appendTemplate(obj);
    };

    pinElement.addEventListener('click', onPinClickAppendTemplate, true);
    pinElement.addEventListener('keydown', onPinPressAppendTemplate, true);
    pinElement.addEventListener('click', onPinClick, true);
    pinElement.addEventListener('keydown', onPinPress, true);

    pinElement.classList.remove('pin__main');
    pinElement.tabIndex = '0';
    pinElement.querySelector('img').src = obj.author.avatar;
    pinElement.style = 'left: ' + (obj.location.x - PIN_WIDTH / 2) + 'px; top: ' + (obj.location.y - PIN_HEIGHT) + 'px';

    return pinElement;
  };


  window.pin = {
    appendPins: function (arr) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < arr.length; i++) {
        fragment.appendChild(renderPin(arr[i]));
      }
      tokyoPinMap.appendChild(fragment);
    }
  };

})();
