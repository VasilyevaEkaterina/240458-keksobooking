'use strict';

(function () {
  var form = document.querySelector('.notice__form');

  var timeIn = form.querySelector('#timein');
  var timeOut = form.querySelector('#timeout');

  var type = form.querySelector('#type');
  var price = form.querySelector('#price');

  var roomNumber = form.querySelector('#room_number');
  var capacity = form.querySelector('#capacity');

  timeIn.addEventListener('change', function (evt) {
    timeOut.value = evt.target.value;
  });

  timeOut.addEventListener('change', function (evt) {
    timeIn.value = evt.target.value;
  });

  type.addEventListener('change', function (evt) {
    var target = evt.target.value;
    if (target === 'flat') {
      price.value = 1000;
    }
    if (target === 'bungalo') {
      price.value = 0;
    }
    if (target === 'house') {
      price.value = 5000;
    }
    if (target === 'palace') {
      price.value = 10000;
    }
    return target;
  });

  roomNumber.addEventListener('change', function (evt) {
    var target = evt.target.value;
    if (target === '1') {
      capacity.value = '1';
    }
    if (target === '2') {
      capacity.value = '2';
    }
    if (target === '3') {
      capacity.value = '3';
    }
    if (target === '100') {
      capacity.value = '0';
    }
    return target;
  });
})();
