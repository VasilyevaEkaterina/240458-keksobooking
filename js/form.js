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

  var syncElements = function (selectedElement, syncElement, selectedArr, syncArr) {
    syncElement.value = syncArr[selectedArr.indexOf(selectedElement.value)];
  };

  window.synchronizeFields(timeIn, timeOut, timeValues, timeValues, syncElements);
  window.synchronizeFields(timeOut, timeIn, timeValues, timeValues, syncElements);
  window.synchronizeFields(type, price, typeValues, priceValues, syncElements);
  window.synchronizeFields(price, type, priceValues, typeValues, syncElements);
  window.synchronizeFields(rooms, capacity, roomsValues, capacityValues, syncElements);
  window.synchronizeFields(rooms, capacity, roomsValues, capacityValues, syncElements);

})();
