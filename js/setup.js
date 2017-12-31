'use strict';

(function () {


  var wizards = [];

  document.querySelector('.setup-similar').classList.remove('hidden');

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: window.util.getUniqueELement(window.constants.WIZARD_NAMES) + window.util.getUniqueELement(window.constants.WIZARD_SURNAMES),
      coatColor: window.util.generateRandomELement(window.constants.WIZARD_COAT_COLORS),
      eyesColor: window.util.generateRandomELement(window.constants.WIZARD_EYES_COLORS),
    };
  }

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    debugger;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
})();
