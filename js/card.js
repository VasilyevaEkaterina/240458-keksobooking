'use strict';

(function () {

  var PROPERTY_TYPE_RU = {
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');

  dialog.classList.add('hidden');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var closeDialog = function () {
    close();
    document.removeEventListener('keydown', onEscPress);
  };

  var onDialogClosePress = function (evt) {
    window.data.isEnterEvent(evt, closeDialog);
  };

  var onDialogCloseClick = function () {
    closeDialog();
  };

  dialogClose.addEventListener('click', onDialogCloseClick);
  dialogClose.addEventListener('keydown', onDialogClosePress);

  var renderTemplate = function (arr) {
    var template = document.querySelector('#lodge-template').content.querySelector('.dialog__panel');
    var templateElement = template.cloneNode(true);
    templateElement.querySelector('.lodge__title').textContent = arr.offer.title;
    templateElement.querySelector('.lodge__address').textContent = arr.offer.address;
    templateElement.querySelector('.lodge__price').innerHTML = arr.offer.price;
    templateElement.querySelector('.lodge__type').textContent = PROPERTY_TYPE_RU[arr.offer.type];
    templateElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms + ' комнатах';
    templateElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + arr.offer.checkin + ' , выезд до ' + arr.offer.checkout;
    var propertyFeatures = arr.offer.features;
    for (var i = 0; i < propertyFeatures.length; i++) {
      templateElement.querySelector('.lodge__features').innerHTML += '<span class = "feature__image feature__image--' + propertyFeatures[i] + '"></span>';
    }
    templateElement.querySelector('.lodge__description').textContent = arr.offer.description;
    return templateElement;
  };

  window.card = {

    appendTemplate: function (obj) {
      var dialogPanel = document.querySelector('.dialog__panel');
      dialogPanel.parentElement.replaceChild(renderTemplate(obj), dialogPanel);
      var dialogTitle = document.querySelector('.dialog__title');
      dialogTitle.querySelector('img').src = obj.author.avatar;
      dialog.classList.remove('hidden');
    }
  };

})();
