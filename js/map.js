var relatedProperty = [
  'author': {'avatar': 'img/avatars/user{{01,02,03,04,05,06,07,08}}.png'},
  'offer': {
    'title':[
      'Большая уютная квартира',
      'Маленькая неуютная квартира',
      'Огромный прекрасный дворец',
      'Маленький ужасный дворец',
      'Красивый гостевой домик',
      'Некрасивый негостеприимный домик',
      'Уютное бунгало далеко от моря',
      'Неуютное бунгало по колено в воде'];
    'address': '{{location.x}}, {{location.y}}',
    'price': Math.floor(Math.random() * (1000000 - 1000 + 1) + 1000),
    'type': ['flat','house','bungalo'],
    'rooms': [1,2,3,4,5],
    'guests': [1,2,3,4,5],
    'checkin':['12:00','13:00','14:00'],
    'checkout':['12:00','13:00','14:00'],
    'features': ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    'description': '',
    'photos':[],
  'location': {
    'x': Math.random() * ((900 - 300 + 1) + 300);
    'y': Math.random() * ((500 - 100 + 1) + 500);
  }
];
