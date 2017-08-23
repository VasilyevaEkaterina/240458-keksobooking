'use strict';

var randomNumber = function (min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

var avatar = function () {
  var n = randomNumber(1, 8);
  var rn = 0;
  return 'img/avatars/user' + rn + n + '.png';
};

var address = function () {
  var x = randomNumber(300, 900);
  var y = randomNumber(100, 500);
  return (x, y);
};

var AUTHOR = avatar();

var OFFER = {
  title: [
    'Большая уютная квартира',
    'Маленькая неуютная квартира',
    'Огромный прекрасный дворец',
    'Маленький ужасный дворец',
    'Красивый гостевой домик',
    'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря',
    'Неуютное бунгало по колено в воде'
  ],
  address: address(),
  price: randomNumber(1000, 1000000),
  type: ['flat', 'house', 'bungalo'],
  rooms: randomNumber(1, 5),
  guests: randomNumber(1, 5),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ],
  description: '',
  photos: []
};

var mapList = document.querySelector('.tokyo__pin-map');
var mapTemplate = document.querySelector('#lodge-template').content;

var relatedElements = function () {
  var mapElement = mapTemplate.cloneNode(true);

  mapElement.querySelector('.lodge__title').textContent = OFFER.title;
  mapElement.querySelector('.lodge__address').textContent = OFFER.address;
  mapElement.querySelector('.lodge__price').textContent = '{{offer.price}}&#x20bd;/ночь';
  mapElement.querySelector('.lodge__type').textContent = OFFER.type;
  mapElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для {{offer.guests}} гостей в {{offer.rooms}} комнатах';
  mapElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}';
  mapElement.querySelector('.lodge__features').classList.add('feature__image feature__image--{{название удобства}}');
  mapElement.querySelector('.lodge__description').textContent = OFFER.description;
  mapElement.querySelector('.dialog__title').textContent = AUTHOR.avatar;

  return mapElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 9; i++) {
  fragment.appendChild(relatedElements());
}
mapList.appendChild(fragment);
