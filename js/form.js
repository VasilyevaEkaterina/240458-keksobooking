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

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.className = 'error';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var successHandler = function () {
    var invalidElements = form.querySelectorAll('.invalid');

    [].forEach.call(invalidElements, function (element) {
      element.classList.remove('invalid');
    });
    price.min = '0';
    form.reset();
  };

  var onInvalidForm = function (evt) {
    evt.preventDefault();

    evt.target.classList.add('invalid');

    evt.target.addEventListener('change', function (e) {
      e.target.classList.remove('invalid');
    });
  };

  var onSubmitForm = function (evt) {

    evt.preventDefault();

    window.backend.save(new FormData(form), successHandler, errorHandler);
  };

  window.synchronizeFields(timeIn, timeOut, timeValues, timeValues, syncValues);
  window.synchronizeFields(timeOut, timeIn, timeValues, timeValues, syncValues);
  window.synchronizeFields(type, price, typeValues, priceValues, syncValueWithMin);
  window.synchronizeFields(rooms, capacity, roomsValues, capacityValues, syncValues);
  window.synchronizeFields(capacity, rooms, capacityValues, roomsValues, syncValues);

  form.addEventListener('invalid', onInvalidForm, true);
  form.addEventListener('submit', onSubmitForm);
})();
