'use strict';

(function () {
  var mainPin = document.querySelector('.pin__main');
  var mainPinWidth = mainPin.offsetWidth;
  var mainPinHeight = mainPin.offsetHeight;

  var mainPinCoords = {
    x: mainPin.offsetLeft + mainPinWidth / 2,
    y: mainPin.offsetTop + mainPinHeight
  };

  var map = document.querySelector('.tokyo');
  var mapWidth = map.clientWidth;
  var mapHeight = map.clientHeight;

  var availableCoords = {
    minX: map.offsetLeft + mainPinWidth / 2,
    minY: mainPinHeight,
    maxX: mapWidth + map.offsetLeft - mainPinWidth / 2,
    maxY: mapHeight - mainPinHeight
  };

  var noticeForm = document.querySelector('.notice__form');
  var addressFormField = noticeForm.querySelector('#address');
  addressFormField.value = 'x: ' + mainPinCoords.x + ', y: ' + mainPinCoords.y;

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var mouseMoveHandler = function (e) {
      e.preventDefault();
      addressFormField.style.boxShadow = '';
      if (e.clientX <= availableCoords.maxX && e.clientX >= availableCoords.minX && e.clientY <= availableCoords.maxY && e.clientY >= availableCoords.minY) {
        var shift = {
          x: startCoords.x - e.clientX,
          y: startCoords.y - e.clientY
        };
        startCoords = {
          x: e.clientX,
          y: e.clientY
        };
        mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
        mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';

        var mainPinCoordsNew = {
          x: mainPin.offsetLeft - shift.x + mainPinWidth / 2,
          y: mainPin.offsetTop - shift.y + mainPinHeight
        };
        addressFormField.value = 'x: ' + mainPinCoordsNew.x + ', y: ' + mainPinCoordsNew.y;
      } else {
        map.addEventListener('dragover', function (event) {
          event.preventDefault();
          return true;
        });
      }
    };
    var mouseUpHandler = function (ev) {
      ev.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
  addressFormField.addEventListener('input', function (e) {
    var inputStringArr = e.target.value.replace(',', '').split(' ');
    var inputCoordsX = Number(inputStringArr[1]);
    var inputCoordsY = Number(inputStringArr[3]);
    if (inputCoordsX >= availableCoords.minX && inputCoordsY >= availableCoords.minY && inputCoordsX <= availableCoords.maxX && inputCoordsY <= availableCoords.maxY) {
      mainPin.style.left = (inputCoordsX - mainPinWidth / 2) + 'px';
      mainPin.style.top = (inputCoordsY - mainPinHeight) + 'px';
    } else {
      mainPin.style.left = (mainPinCoords.x - mainPinWidth / 2) + 'px';
      mainPin.style.top = (mainPinCoords.y - mainPinHeight) + 'px';
      addressFormField.value = 'x: ' + mainPinCoords.x + ', y: ' + mainPinCoords.y;
    }
  });
  window.mainPin = {
    noticeForm: noticeForm,
    addressFormField: addressFormField,
  };
})();
