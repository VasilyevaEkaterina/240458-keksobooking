'use strict';

(function () {
  var form = document.querySelector('.notice__form');

  var timeIn = form.querySelector('#timein');
  var timeOut = form.querySelector('#timeout');

  var type = form.querySelector('#type');
  var price = form.querySelector('#price');

  var roomNumber = form.querySelector('#room_number');
  var capacity = form.querySelector('#capacity');

  window.synchronizeFields(timeIn, timeOut, syncElements);
  window.synchronizeFields(roomNumber, capacity, syncRoomAndCapacity);
  window.synchronizeFields(type, price, syncTimeAndPrice);

  function syncElements(syncValue, selectedValue) {
    syncValue.value = selectedValue;
  }
  function syncRoomAndCapacity(syncValue, selectedValue) {
    if (selectedValue === '1') {
      syncValue.value = 1;
    } else if (selectedValue === '2') {
      syncValue.value = 2;
    } else if (selectedValue === '3') {
      syncValue.value = 3;
    } else if (selectedValue === '100') {
      syncValue.value = 0;
    }
  }
  function syncTimeAndPrice(syncValue, selectedValue) {
    if (selectedValue === 'flat') {
      syncValue.min = 1000;
      syncValue.value = 1000;
    } else if (selectedValue === 'bungalo') {
      syncValue.min = 0;
      syncValue.value = 0;
    } else if (selectedValue === 'house') {
      syncValue.min = 5000;
      syncValue.value = 5000;
    } else if (selectedValue === 'palace') {
      syncValue.min = 10000;
      syncValue.value = 10000;
    }
  }
})();
