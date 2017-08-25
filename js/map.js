'use strict';

var randomFromRange = function (min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

var PIN_WIDTH = 40;
var PIN_HEIGHT = 40;

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

var randomLengthArray = function (array) {
  var randomArray = [];
  var length = randomFromRange(1, array.length);
  for (var i = 0; i < length; i++) {
    randomArray.push(PROPERTY_FEATURES[i]);
  }
  return randomArray;
};

var getPropertyType = function (type) {
  if (type === 'flat') {
    return 'Квартира';
  } else if (type === 'house') {
    return 'Дом';
  } else if (type === 'bungalo') {
    return 'Бунгало';
  } else {
    return 'Тип не определен';
  }
};

var generatePropertyListing = function (amount) {
  var propertyListing = [];
  var propertyFeatures = PROPERTY_FEATURES.slice();
  var featuresLength = PROPERTY_FEATURES.length;

  var minLocationX = 300 + PIN_WIDTH / 2;
  var maxLocationX = 900 + PIN_WIDTH / 2;
  var minLocationY = 100 + PIN_HEIGHT;
  var maxLocationY = 500 + PIN_HEIGHT;

  for (var i = 0; i < amount; i++) {
    var property = {
      'author': {
        'avatar': 'img/avatars/user' + 0 + (i + 1) + '.png'
      },
      'offer': {
        'title': PROPERTY_TITLE[i],
        'price': randomFromRange(1000, 1000000),
        'type': PROPERTY_TYPE[randomFromRange(0, 2)],
        'rooms': randomFromRange(1, 5),
        'guests': randomFromRange(1, 5),
        'checkin': PROPERTY_TIME[randomFromRange(0, 2)],
        'checkout': PROPERTY_TIME[randomFromRange(0, 2)],
        'features': randomLengthArray(propertyFeatures, featuresLength),
        'description': '',
        'photos': []
      },
      'location': {
        'x': randomFromRange(minLocationX, maxLocationX),
        'y': randomFromRange(minLocationY, maxLocationY)
      }
    };
    property.offer.address = property.location.x + ', ' + property.location.y;
    propertyListing[i] = property;
  }
  return propertyListing;
};

var createPinsMap = function (properties, width, height) {
  var blockPinsMap = document.createDocumentFragment();

  properties.forEach(function (property) {
    var pinMap = document.createElement('div');
    pinMap.className = 'pin';
    pinMap.style.left = property.location.x - width / 2 + 'px';
    pinMap.style.top = property.location.y - height + 'px';

    var pinMapImage = document.createElement('img');
    pinMapImage.src = property.author.avatar + '';
    pinMapImage.className = 'rounded';
    pinMapImage.width = width;
    pinMapImage.height = height;

    pinMap.appendChild(pinMapImage);

    blockPinsMap.appendChild(pinMap);
  });

  return blockPinsMap;
};

var properties = generatePropertyListing(8).sort(function () {
  return 0.5 - Math.random();
});

var fragmentPinsMap = createPinsMap(properties, PIN_WIDTH, PIN_HEIGHT);

var tokioPinMap = document.querySelector('.tokyo__pin-map');
tokioPinMap.appendChild(fragmentPinsMap);

var getFeaturesFragment = function (features) {
  var featuresFragment = document.createDocumentFragment();
  features.forEach(function (item) {
    var span = document.createElement('span');
    span.className = 'feature__image feature__image--' + item;
    featuresFragment.appendChild(span);
  });
  return featuresFragment;
};

var lodgeTemplate = document.querySelector('#lodge-template').content;
var lodgeTemplateContent = lodgeTemplate.content;

var createNewDialogPanel = function (property) {
  var propertyInfo = property.offer;
  var template = lodgeTemplateContent.cloneNode(true);

  var avatar = dialogTitle.querySelector('img');
  avatar.src = property.author.avatar;

  template.querySelector('.lodge__title').textContent = propertyInfo.title;
  template.querySelector('.lodge__address').textContent = propertyInfo.address;
  template.querySelector('.lodge__price').textContent = propertyInfo.price + '₽/ночь';
  template.querySelector('.lodge__type').textContent = getPropertyType(propertyInfo.type);
  template.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + propertyInfo.guests + ' гостей в ' + propertyInfo.rooms + ' комнатах';
  template.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + propertyInfo.checkin + ', выезд до ' + propertyInfo.checkout;
  template.querySelector('.lodge__description').textContent = propertyInfo.description;

  var featuresFragment = getFeaturesFragment(propertyInfo.features);
  template.querySelector('.lodge__features').appendChild(featuresFragment);

  return template;
};

var dialog = document.querySelector('.dialog');
var dialogTitle = dialog.querySelector('.dialog__title');
var dialogPanel = dialog.querySelector('.dialog__panel');

var dialogPanelTemplate = lodgeTemplate.querySelector('.dialog__panel');
var newDialogPanel = createNewDialogPanel(dialogPanelTemplate, properties[0]);

dialog.replaceChild(newDialogPanel, dialogPanel);
