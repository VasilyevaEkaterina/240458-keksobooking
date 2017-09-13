'use strict';

window.data = (function () {

  var succesHandler = function () {
    window.pin.appendPins();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.className = 'error';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(succesHandler, errorHandler);

  return {

    propertyDetails: {

      'PROPERTY_TITLE': [
        'Большая уютная квартира',
        'Маленькая неуютная квартира',
        'Огромный прекрасный дворец',
        'Маленький ужасный дворец',
        'Красивый гостевой домик',
        'Некрасивый негостеприимный домик',
        'Уютное бунгало далеко от моря',
        'Неуютное бунгало по колено в воде'
      ],
      'PROPERTY_TYPE': [
        'flat',
        'house',
        'bungalo'
      ],
      'PROPERTY_TIME': [
        '12:00',
        '13:00',
        '14:00'
      ],
      'PROPERTY_FEATURES': [
        'wifi',
        'dishwasher',
        'parking',
        'washer',
        'elevator',
        'conditioner'
      ],
      'MAX_GUESTS': 10,
      'MAX_ROOMS': 5,
      'MIN_LOCATION_X': 300,
      'MAX_LOCATION_X': 900,
      'MIN_LOCATION_Y': 100,
      'MAX_LOCATION_Y': 500
    },

    generatePropertyListing: function (index) {

      var locationX = window.data.getRandomFromRange(window.map.propertyDetails.MIN_LOCATION_X, window.map.propertyDetails.MAX_LOCATION_X);
      var locationY = window.data.getRandomFromRange(window.map.propertyDetails.MIN_LOCATION_Y, window.map.propertyDetails.MAX_LOCATION_Y);

      var propertyListing = {
        'author': {
          'avatar': 'img/avatars/user' + 0 + (index + 1) + '.png'
        },
        'offer': {
          'title': window.data.getRandomNoRepeat(window.map.propertyDetails.PROPERTY_TITLE),
          'address': locationX + ', ' + locationY,
          'price': window.data.getRandomFromRange(1000, 1000000),
          'type': window.data.getRandomRepeat(window.map.propertyDetails.PROPERTY_TYPE),
          'rooms': window.data.getRandomFromRange(1, window.map.propertyDetails.MAX_ROOMS),
          'guests': window.data.getRandomFromRange(1, window.map.propertyDetails.MAX_GUESTS),
          'checkin': window.data.getRandomRepeat(window.map.propertyDetails.PROPERTY_TIME),
          'checkout': window.data.getRandomRepeat(window.map.propertyDetails.PROPERTY_TIME),
          'features': window.data.getRandomLengthArray(window.map.propertyDetails.PROPERTY_FEATURES),
          'description': '',
          'photos': []
        },
        'location': {
          'x': locationX,
          'y': locationY
        }
      };
      return propertyListing;
    }
  };
})();
