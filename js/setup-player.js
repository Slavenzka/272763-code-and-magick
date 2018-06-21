'use strict';

(function () {

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');
  var wizardSetup = setup.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('input[name="coat-color"]');
  var eyesColorInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColorInput = setup.querySelector('input[name="fireball-color"]');

  var fillColor = function (colorsArray, targetElement, targetInput) {
    var color = colorsArray[window.getRandomElement(colorsArray)];

    targetElement.style = 'fill: ' + color + ';';
    targetInput.value = color.toString();
  };

  var changeBackground = function (colorsArray, targetElement, targetInput) {
    var color = colorsArray[window.getRandomElement(colorsArray)];

    targetElement.style = 'background-color: ' + color + ';';
    targetInput.value = color.toString();
  };

  wizardCoat.addEventListener('click', function () {
    fillColor(COAT_COLOR, wizardCoat, coatColorInput);
  });

  wizardEyes.addEventListener('click', function () {
    fillColor(EYES_COLOR, wizardEyes, eyesColorInput);
  });

  wizardFireball.addEventListener('click', function () {
    changeBackground(FIREBALL_COLOR, wizardFireball, fireballColorInput);
  });

})();
