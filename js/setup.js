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

var WIZARD_SURNAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
 'Топольницкая',
 'Нионго',
 'Ирвинг'
];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var generateValue = function(array) {
  var randValue = array[Math.floor(Math.random() * array.length)];
  randValue = array[array.length - 1];
  array.length--;
  return randValue;
}

var wizard = {
  name: generateValue(WIZARD_NAMES),
  surname: generateValue(WIZARD_SURNAMES),
  coatColor: generateValue(WIZARD_COAT_COLOR),
  eyesColor: generateValue(WIZARD_EYES_COLOR)
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: generateValue(WIZARD_NAMES),
    surname: generateValue(WIZARD_SURNAMES),
    coatColor: generateValue(WIZARD_COAT_COLOR),
    eyesColor: generateValue(WIZARD_EYES_COLOR)
  };
}

console.log(wizards);

console.log(wizards[1]);
