'use strict';

(function () {
  window.synchronizeFields = function (selectedElement, syncElement, selectedArr, syncArr, callback) {
    selectedElement.addEventListener('change', function () {
      callback(selectedElement, syncElement, selectedArr, syncArr);
    });
  };
})();
