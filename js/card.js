'use strict';

window.card = (function () {

  var dialog = document.querySelector('.dialog');
  var dialogTitle = document.querySelector('.dialog__title');
  var dialogImg = dialogTitle.querySelector('img');

  var template = document.querySelector('#lodge-template').content;

  var createTemplate = function (property) {

    var templateElement = template.cloneNode(true);

    templateElement.querySelector('.lodge__title').textContent = property.offer.title;
    templateElement.querySelector('.lodge__address').textContent = property.offer.address;
    templateElement.querySelector('.lodge__price').textContent = property.offer.price + ' ₽/ночь';
    templateElement.querySelector('.lodge__type').textContent = window.data.typesRu[property.offer.type];
    templateElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + property.offer.guests + ' гостей в ' + property.offer.rooms + ' комнатах';
    templateElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + property.offer.checkin + ', выезд до ' + property.offer.checkout;
    templateElement.querySelector('.lodge__description').textContent = property.offer.description;

    var templateFeatures = templateElement.querySelector('.lodge__features');
    var templatePhotos = templateElement.querySelector('.lodge__photos');

    dialogImg.src = property.author.avatar;

    (property.offer.photos).forEach(function (element) {

      var img = document.createElement('img');
      img.src = element;
      img.width = '60';
      img.height = '40';

      templatePhotos.appendChild(img);
    });

    (property.offer.features).forEach(function (element) {
      var span = document.createElement('span');

      span.className = 'feature__image feature__image--' + element;
      templateFeatures.appendChild(span);
    });

    return templateElement;
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

  var onDeactiveElements = function (evt) {
    if (window.util.isEscPressed(evt.keyCode)) {
      window.card.hideDialog();
      window.pin.deactivePin();
    }
  };

  var initEventHandler = function () {
    var dialogClose = document.querySelector('.dialog__close');

    dialogClose.addEventListener('click', onCloseWindowClick);
    dialogClose.addEventListener('keydown', onCloseWindowKeydown);
    document.body.addEventListener('keydown', onDeactiveElements);
  };

  var removeEventHandler = function () {
    var dialogClose = document.querySelector('.dialog__close');

    dialogClose.removeEventListener('click', onCloseWindowClick);
    dialogClose.removeEventListener('keydown', onCloseWindowKeydown);
    document.body.removeEventListener('keydown', onDeactiveElements);
  };

  var changeDialogPanel = function (property) {
    var dialogPanel = dialog.querySelector('.dialog__panel');
    dialog.replaceChild(createTemplate(property), dialogPanel);
  };

  return {
    showDialog: function (property) {
      changeDialogPanel(property);
      initEventHandler();
      dialog.style.display = 'block';
    },

    hideDialog: function () {
      dialog.style.display = 'none';

      removeEventHandler();
    }
  };
})();
