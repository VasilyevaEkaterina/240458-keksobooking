'use strict';

(function () {
  window.synchronizeFields = function (selectedElement, syncElement, callback) {
    selectedElement.addEventListener('change', function () {
      callback(syncElement, selectedElement.value);
    });
  };
})();
