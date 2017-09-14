'use strict';

window.card = (function () {

  var dialog = document.querySelector('.dialog');
  var dialogTitle = document.querySelector('.dialog__title');
  var dialogImg = dialogTitle.querySelector('img');

  var template = document.querySelector('#lodge-template').content;

  var createTemplate = function (ad) {

    var templateElement = template.cloneNode(true);

    var adTitle = templateElement.querySelector('.lodge__title');
    var adAddress = templateElement.querySelector('.lodge__address');
    var adPrice = templateElement.querySelector('.lodge__price');
    var adType = templateElement.querySelector('.lodge__type');
    var adRoomsAndGuest = templateElement.querySelector('.lodge__rooms-and-guests');
    var adTime = templateElement.querySelector('.lodge__checkin-time');
    var adFeatures = templateElement.querySelector('.lodge__features');
    var adDescription = templateElement.querySelector('.lodge__description');
    var adPhotos = templateElement.querySelector('.lodge__photos');

    adTitle.textContent = ad.offer.title;
    adAddress.textContent = ad.offer.address;
    adPrice.textContent = ad.offer.price + ' ₽/ночь';
    adType.textContent = window.data.typesRu[ad.offer.type];
    adRoomsAndGuest.textContent = 'Для ' + ad.offer.guests + ' гостей в ' + ad.offer.rooms + ' комнатах';
    adTime.textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    adDescription.textContent = ad.offer.description;
    dialogImg.src = ad.author.avatar;

    (ad.offer.photos).forEach(function (element) {
      var img = document.createElement('img');

      img.src = element;
      img.width = '60';
      img.height = '40';

      adPhotos.appendChild(img);
    });

    (ad.offer.features).forEach(function (element) {
      var span = document.createElement('span');

      span.className = 'feature__image feature__image--' + element;
      adFeatures.appendChild(span);
    });

    return templateElement;
  };

  var onDeactiveElements = function (evt) {
    if (window.util.isEscPressed(evt.keyCode)) {
      window.card.hideDialog();
      window.pin.deactivePin();
    }
  };

  var onCloseWindowClick = function () {
    window.card.hideDialog();
    window.pin.deactivePin();
  };

  var onCloseWindowKeydown = function (evt) {
    if (window.util.isEnterPressed(evt.keyCode) ||
        window.util.isEscPressed(evt.keyCode)) {
      window.card.hideDialog();
      window.pin.deactivePin();
    }
  };

  var removeEventHandler = function () {
    var dialogClose = document.querySelector('.dialog__close');

    dialogClose.removeEventListener('click', onCloseWindowClick);
    dialogClose.removeEventListener('keydown', onCloseWindowKeydown);
    document.body.removeEventListener('keydown', onDeactiveElements);
  };

  var initEventHandler = function () {
    var dialogClose = document.querySelector('.dialog__close');

    dialogClose.addEventListener('click', onCloseWindowClick);
    dialogClose.addEventListener('keydown', onCloseWindowKeydown);
    document.body.addEventListener('keydown', onDeactiveElements);
  };

  var changeDialogPanel = function (ad) {
    var dialogPanel = dialog.querySelector('.dialog__panel');
    dialog.replaceChild(createTemplate(ad), dialogPanel);
  };

  return {
    showDialog: function (ad) {
      changeDialogPanel(ad);
      initEventHandler();
      dialog.style.display = 'block';
    },

    hideDialog: function () {
      dialog.style.display = 'none';

      removeEventHandler();
    }
  };
})();
