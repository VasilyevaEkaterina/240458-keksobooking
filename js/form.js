'use strict';

(function () {
  var form = document.querySelector('.notice__form');

  var timeIn = form.querySelector('#timein');
  var timeOut = form.querySelector('#timeout');

  var type = form.querySelector('#type');
  var price = form.querySelector('#price');

  var rooms = form.querySelector('#room_number');
  var capacity = form.querySelector('#capacity');

  var typeValues = [
    'bungalo',
    'flat',
    'house',
    'palace'
  ];

  var priceValues = [
    '0',
    '1000',
    '5000',
    '10000'
  ];

  var roomsValues = [
    '1',
    '2',
    '3',
    '100'
  ];

  var capacityValues = [
    '0',
    '1',
    '2',
    '3'
  ];

  var timeValues = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var syncValues = function (selectedElement, syncElement, selectedArr, syncArr) {
    syncElement.value = syncArr[selectedArr.indexOf(selectedElement.value)];
  };

  var syncValueWithMin = function (selectedElement, syncElement, selectedArr, syncArr) {
    syncElement.min = syncArr[selectedArr.indexOf(selectedElement.value)];
    syncElement.value = syncArr[selectedArr.indexOf(selectedElement.value)];
  };

  window.synchronizeFields(timeIn, timeOut, timeValues, timeValues, syncValues);
  window.synchronizeFields(timeOut, timeIn, timeValues, timeValues, syncValues);
  window.synchronizeFields(type, price, typeValues, priceValues, syncValueWithMin);
  window.synchronizeFields(rooms, capacity, roomsValues, capacityValues, syncValues);
  window.synchronizeFields(capacity, rooms, capacityValues, roomsValues, syncValues);

})();
