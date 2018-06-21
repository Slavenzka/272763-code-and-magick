'use strict';

(function () {
  var ARRAY_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var ARRAY_FAMILY = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var ARRAY_COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var ARRAY_COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizardsNumber = 4;

  var wizardsList = [];

  var setup = document.querySelector('.setup');

  var similarList = setup.querySelector('.setup-similar-list');

  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var fillEmptyObject = function (inputArray, size, wizardName, familyName, colorCoat, colorEyes) {
    for (var i = 0; i < size; i++) {
      inputArray[i] = {
        name: wizardName[window.getRandomElement(wizardName)] + ' ' + familyName[window.getRandomElement(familyName)],
        coatColor: colorCoat[window.getRandomElement(colorCoat)],
        eyesColor: colorEyes[window.getRandomElement(colorEyes)]
      };
    }
    return inputArray;
  };

  var renderWizard = function (wizardsArray) {
    var element = template.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = wizardsArray[i].name;
    element.querySelector('.wizard-coat').style = 'fill: ' + wizardsArray[i].coatColor;
    element.querySelector('.wizard-eyes').style = 'fill: ' + wizardsArray[i].eyesColor;

    return element;
  };


  var wizards = fillEmptyObject(wizardsList, wizardsNumber, ARRAY_NAME, ARRAY_FAMILY, ARRAY_COLOR_COAT, ARRAY_COLOR_EYES);

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsNumber; i++) {
    fragment.appendChild(renderWizard(wizards));
  }

  similarList.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
}());
