'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var similarList = setup.querySelector('.setup-similar-list');

  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var element = template.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = wizard.name;
    element.querySelector('.wizard-coat').style = 'fill: ' + wizard.colorCoat;
    element.querySelector('.wizard-eyes').style = 'fill: ' + wizard.colorEyes;

    return element;
  };

  var compareFunctionShuffle = function () {
    return Math.random() - 0.5;
  };


  var shuffleArray = function (targetArray) {
    var copiedArray = targetArray.slice();

    return copiedArray.sort(compareFunctionShuffle);
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    var wizardsRandomized = shuffleArray(wizards);

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizardsRandomized[i]));
    }
    similarList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  });
}());
