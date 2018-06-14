'use strict';

var ARRAY_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var ARRAY_FAMILY = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var ARRAY_COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var ARRAY_COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardsNumber = 4;

var wizardsList = [];

var setupOpen = document.querySelector('.setup-open');

var setup = document.querySelector('.setup');

var setupClose = setup.querySelector('.setup-close');

var similarList = setup.querySelector('.setup-similar-list');

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var getRandomElement = function (inputArray) {
  return Math.floor(Math.random() * inputArray.length);
};

var fillEmptyObject = function (inputArray, size, wizardName, familyName, colorCoat, colorEyes) {
  for (var i = 0; i < size; i++) {
    inputArray[i] = {
      name: wizardName[getRandomElement(wizardName)] + ' ' + familyName[getRandomElement(familyName)],
      coatColor: colorCoat[getRandomElement(colorCoat)],
      eyesColor: colorEyes[getRandomElement(colorEyes)]
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

//  Механика кнопки открытия и закрытия .setup

var ESC_CODE = 27;
var ENTER_CODE = 13;


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE) {
    setup.classList.add('hidden');
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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


//  Работа с формой

var inputName = setup.querySelector('.setup-user-name');

inputName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

inputName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

//  Редактирование персонажа

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardSetup = setup.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var fillColor = function (colorsArray, targetElement) {
  targetElement.style = 'fill: ' + colorsArray[getRandomElement(colorsArray)] + ';';
};

var changeBackground = function (colorsArray, targetElement) {
  targetElement.style = 'background-color: ' + colorsArray[getRandomElement(colorsArray)] + ';';
};

wizardCoat.addEventListener('click', function () {
  fillColor(COAT_COLOR, wizardCoat);
});

wizardEyes.addEventListener('click', function () {
  fillColor(EYES_COLOR, wizardEyes);
});

wizardFireball.addEventListener('click', function () {
  changeBackground(FIREBALL_COLOR, wizardFireball);
});
