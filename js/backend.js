'use strict';

window.backend = (function () {
  var URL = 'https://1510.dump.academy/keksobooking';

  var getData = function (onSuccess, onError) {

    var error = {
      '200': function () {
        onSuccess(xhr.response);
      },
      '400': function () {
        onError('Неверный запрос');
      },
      '404': function () {
        onError('Ничего не найдено');
      },
      '500': function () {
        onError('Сервер не отвечает');
      },
      'default': function () {
        onError('Неизвестный статус: ');
      }
    };
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      (error[xhr.status] || error['default'])();
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 2000;

    return xhr;
  };


  return {
    load: function (onSuccess, onError) {
      var xhr = getData(onSuccess, onError);

      xhr.open('GET', URL + '/data');
      xhr.send();
    },
    save: function (data, onSuccess, onError) {
      var xhr = getData(onSuccess, onError);

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
