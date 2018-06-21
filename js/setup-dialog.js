'use strict';

(function () {
  var ESC_CODE = 27;
  var ENTER_CODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var getDefaultCoords = function (targetElement) {

    window.defaultCoords = {
      x: targetElement.offsetLeft,
      y: targetElement.offsetTop
    };
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    getDefaultCoords(setup);
    document.addEventListener('keydown', window.onPopupEscPress);

  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', window.onPopupEscPress);
    window.renderPopupDefault(setup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_CODE) {
      closePopup();
    }
  });

  setupClose.addEventListener('focus', function () {
    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        closePopup();
      }
    });
  });
}());
