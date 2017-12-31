// dialog.js
'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = document.querySelector('.setup-close');
  var inputName = userDialog.querySelector('.setup-user-name');
  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = userDialog.querySelector('.setup-fireball-wrap');

  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27 && inputName !== document.activeElement) {
        closePopup();
      }
    })
  });

  userDialogClose.addEventListener('click', function (evt) {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });

  // Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на нее.
  //  Цвет мантии задается через изменение инлайнового CSS-свойства fill для элемента.
  // Цвет должен сменяться произвольным образом на один из следующих цветов:

  var changeCoatColor = function () {
    this.style.fill = window.util.generateRandomELement(window.constants.WIZARD_COAT_COLORS);
  };

  var changeEyesColor = function () {
    this.style.fill = window.util.generateRandomELement(window.constants.WIZARD_EYES_COLORS);
  };

  var changeFireballColor = function () {
    this.style.backgroundColor = window.util.generateRandomELement(window.constants.FIREBALL_COLORS);
  };



  // var changeWizardPartColor = function (wizardPart, color, propery) {
  //   var changeColor = function () {
  //     this.style.fill = window.util.generateRandomELement(color);
  //   };

  //   wizardPart.addEventListener('click', changeColor);
  // };

  // changeWizardPartColor(wizardEyes, window.constants.WIZARD_EYES_COLORS, 'fill');

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  fireballWrap.addEventListener('click', changeFireballColor);

})();

