'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_FULLNAMES = [];

var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var wizards = [];

document.querySelector('.setup-similar').classList.remove('hidden');

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: window.util.getUniqueELement(WIZARD_NAMES) + window.util.getUniqueELement(WIZARD_SURNAMES),
    coatColor: window.util.generateRandomELement(WIZARD_COAT_COLORS),
    eyesColor: window.util.generateRandomELement(WIZARD_EYES_COLORS),
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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var inputName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');




var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && inputName !== document.activeElement) {
      closePopup();
    }
  })
});

setupClose.addEventListener('click', function (evt) {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на нее.
//  Цвет мантии задается через изменение инлайнового CSS-свойства fill для элемента.
// Цвет должен сменяться произвольным образом на один из следующих цветов:

var changeCoatColor = function () {
  this.style.fill = window.util.generateRandomELement(WIZARD_COAT_COLORS);
};

var changeEyesColor = function () {
  this.style.fill = window.util.generateRandomELement(WIZARD_EYES_COLORS);
};

var changeFireballColor = function () {
  this.style.backgroundColor = window.util.generateRandomELement(FIREBALL_COLORS);
};

wizardCoat.addEventListener('click', changeCoatColor);
wizardEyes.addEventListener('click', changeEyesColor);
fireballWrap.addEventListener('click', changeFireballColor);

