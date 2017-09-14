'use strict';

window.data = (function () {

  var getImage = function (number) {
    return number > 9 ? 'img/avatars/user' + number + '.png' : 'img/avatars/user' + '0' + number + '.png';
  };

  return {

    pinDetails: {
      'TITLES': [
        'Большая уютная квартира',
        'Маленькая неуютная квартира',
        'Огромный прекрасный дворец',
        'Маленький ужасный дворец',
        'Красивый гостевой домик',
        'Некрасивый негостеприимный домик',
        'Уютное бунгало далеко от моря',
        'Неуютное бунгало по колено в воде'
      ],
      'TYPES': [
        'flat',
        'house',
        'bungalo'
      ],
      'TIME': [
        '12:00',
        '13:00',
        '14:00'
      ],
      'FEATURES': [
        'wifi',
        'dishwasher',
        'parking',
        'washer',
        'elevator',
        'conditioner'
      ],

      'MAX_GUESTS': 10,
      'MAX_ROOM': 5,
      'MIN_PRICE': 1000,
      'MAX_PRICE': 1000000,
      'MIN_X': 300,
      'MAX_X': 900,
      'MIN_Y': 100,
      'MAX_Y': 500,
      'MIN_ARRAY_LENGTH': 0,
      'MAX_ARRAY_LENGTH': 6
    },

    typesRu: {
      'flat': 'Квартира',
      'house': 'Дом',
      'bungalo': 'Бунгало'
    },

    createProperty: function (index) {

      var locationX = window.util.getRandomNumber(window.data.pinDetails.MIN_X, window.data.pinDetails.MAX_X);
      var locationY = window.util.getRandomNumber(window.data.pinDetails.MIN_Y, window.data.pinDetails.MAX_Y);
      var maxArrayLength = window.util.getRandomNumber(window.data.pinDetails.MIN_ARRAY_LENGTH, window.data.pinDetails.MAX_ARRAY_LENGTH);

      var property = {
        'author': {
          'avatar': getImage(index + 1),
        },
        'offer': {
          'title': window.util.getRandomElement(window.data.pinDetails.TITLES),
          'address': locationX + ', ' + locationY,
          'price': window.util.getRandomNumber(window.data.pinDetails.MIN_PRICE, window.data.pinDetails.MAX_PRICE),
          'type': window.util.getRandomElement(window.data.pinDetails.TYPES),
          'rooms': window.util.getRandomNumber(1, window.data.pinDetails.MAX_ROOM),
          'guests': window.util.getRandomNumber(1, window.data.pinDetails.MAX_GUESTS),
          'checkin': window.util.getRandomElement(window.data.pinDetails.TIME),
          'checkout': window.util.getRandomElement(window.data.pinDetails.TIME),
          'features': window.util.getRandomArray(window.data.pinDetails.FEATURES, maxArrayLength, true),
          'description': '',
          'photos': []
        },
        'location': {
          'x': locationX,
          'y': locationY
        }
      };

      return property;
    }
  };
})();
