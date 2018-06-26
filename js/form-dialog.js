'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var inputName = setup.querySelector('.setup-user-name');
  var form = setup.querySelector('.setup-wizard-form');

  inputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.onPopupEscPress);
  });

  inputName.addEventListener('blur', function () {
    document.addEventListener('keydown', window.onPopupEscPress);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, function (errorText) {
      window.backend.errorMessage(errorText);
    });

    evt.preventDefault();
  });

}());
