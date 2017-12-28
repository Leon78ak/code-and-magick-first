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

var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var generateValue = function(array) {
  var randValue = array[Math.floor(Math.random() * array.length)];
  array.splice(array.indexOf(randValue), 1);
  return randValue;
}

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  // /итерация по длине массива? или фикс?
  var name = generateValue(WIZARD_NAMES);
  var surname = generateValue(WIZARD_SURNAMES);
  var fullName = name + ' ' + surname;
  WIZARD_FULLNAMES.push(fullName);
  // почему 4 значения на выходе?
}

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: generateValue(WIZARD_FULLNAMES),
    coatColor: generateValue(WIZARD_COAT_COLOR),
    eyesColor: generateValue(WIZARD_EYES_COLOR),
  };
}

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var inputName = setup.querySelector('.setup-user-name');

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
