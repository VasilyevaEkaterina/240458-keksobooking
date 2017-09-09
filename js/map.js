'use strict';

(function () {
  var PROPERTY_AMOUNT = 8;
  var MAX_ROOMS = 5;
  var MAX_GUESTS = 10;
  var MIN_LOCATION_X = 300;
  var MAX_LOCATION_X = 900;
  var MIN_LOCATION_Y = 100;
  var MAX_LOCATION_Y = 500;

  var PROPERTY_TITLE = [
    'Большая уютная квартира',
    'Маленькая неуютная квартира',
    'Огромный прекрасный дворец',
    'Маленький ужасный дворец',
    'Красивый гостевой домик',
    'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря',
    'Неуютное бунгало по колено в воде'
  ];

  var PROPERTY_TYPE = [
    'flat',
    'house',
    'bungalo'
  ];

  var PROPERTY_TIME = [
    '12:00',
    '13:00',
    '14:00'
  ];
  var PROPERTY_FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  var generatePropertyListing = function () {
    var propertyListing = [];
    for (var i = 0; i < PROPERTY_AMOUNT; i++) {
      propertyListing[i] = {
        'author': {
          'avatar': 'img/avatars/user' + 0 + (i + 1) + '.png'
        },
        'offer': {
          'title': window.data.getRandomNoRepeat(PROPERTY_TITLE),
          'address': '',
          'price': window.data.getRandomFromRange(1000, 1000000),
          'type': window.data.getRandomRepeat(PROPERTY_TYPE),
          'rooms': window.data.getRandomFromRange(1, MAX_ROOMS),
          'guests': window.data.getRandomFromRange(1, MAX_GUESTS),
          'checkin': window.data.getRandomRepeat(PROPERTY_TIME),
          'checkout': window.data.getRandomRepeat(PROPERTY_TIME),
          'features': window.data.getRandomLengthArray(PROPERTY_FEATURES),
          'description': '',
          'photos': []
        },
        'location': {
          'x': window.data.getRandomFromRange(MIN_LOCATION_X, MAX_LOCATION_X),
          'y': window.data.getRandomFromRange(MIN_LOCATION_Y, MAX_LOCATION_Y)
        }
      };
      propertyListing[i].offer.address = propertyListing[i].location.x + ', ' + propertyListing[i].location.y;
    }
    return propertyListing;
  };

  var propertyListing = generatePropertyListing();

  window.pin.appendPins(propertyListing);

})();
