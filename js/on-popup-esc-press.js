'use strict';

(function () {
  window.onPopupEscPress = function (evt) {
    var ESC_CODE = 27;
    var setup = document.querySelector('.setup');

    if (evt.keyCode === ESC_CODE) {
      window.renderPopupDefault(setup);
      setup.classList.add('hidden');
    }
  };
}());
