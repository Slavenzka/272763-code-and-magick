'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var inputName = setup.querySelector('.setup-user-name');

  inputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.onPopupEscPress);
  });

  inputName.addEventListener('blur', function () {
    document.addEventListener('keydown', window.onPopupEscPress);
  });
}());
