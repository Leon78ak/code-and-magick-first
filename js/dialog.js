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

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var resetPosition = function (elem) {
    elem.style.left = '';
    elem.style.top = '';
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
  };

  openPopup();

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && inputName !== document.activeElement) {
      closePopup();
    }
  });

  var closePopup = function () {
    userDialog.classList.add('hidden');
    resetPosition(userDialog);
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

  var getCoords = function (elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  };

// функция смены цвета элемента волшебника
  window.colorize = function (elem, color) {
    elem.addEventListener('click', function () {
      var elementColor = window.util.generateRandomELement(color);
      this.style.backgroundColor = elementColor;
      this.style.fill = elementColor;
    });
  };

  window.colorize(wizardCoat, window.constants.WIZARD_COAT_COLORS);
  window.colorize(wizardEyes, window.constants.WIZARD_EYES_COLORS);
  window.colorize(fireballWrap, window.constants.FIREBALL_COLORS);








  var dialogHandle = userDialog.querySelector('.setup-user-pic');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var newY = userDialog.offsetTop - shift.y;
      var newX = userDialog.offsetLeft - shift.x;
      // обработаем вынос за верхнюю границу окна
      if (newY < 0) {
        newY = 0;
      };
      // // обработаем вынос за нижнюю границу окна
      // if (newY + userDialog.offsetHeight > document.documentElement.clientHeight) {
      //   newY = document.documentElement.clientHeight - userDialog.offsetHeight;

      // };
      // зажать в границах экрана по горизонтали
      if (newX < 0) {
        newX = 0;
      }
      // запара! translateX(-50%) сбивает выравнивание по горизонтали???

      if (newX > document.documentElement.clientWidth - userDialog.offsetWidth) {
        newX = document.documentElement.clientWidth  - userDialog.offsetWidth;
      }

      userDialog.style.top = newY + 'px';
      userDialog.style.left = newX + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

var shopElement = document.querySelector('.setup-artifacts-shop');
var artifactsElement = document.querySelector('.setup-artifacts');
var draggedItem = null;

var handleDragStart = function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
};

var handleDragOver = function (evt) {
  evt.preventDefault();
  return false;
};

var handleDragEnter = function (evt) {
  evt.target.classList.add('over');
  evt.preventDefault();
};

var handleDragLeave = function (evt) {
  evt.target.classList.remove('over');
  evt.preventDefault();
};

var handleDrop = function (evt) {
  evt.target.classList.remove('over');
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
};

shopElement.addEventListener('dragstart', handleDragStart);
artifactsElement.addEventListener('dragenter', handleDragEnter);
artifactsElement.addEventListener('dragover', handleDragOver);
artifactsElement.addEventListener('dragleave', handleDragLeave);
artifactsElement.addEventListener('drop', handleDrop);

})();

// Дополнительно: Реализовать механизм не перетаскивания исходного элемента, а копирования.
// При этом нужно запретить перетаскивать два элемента в одно и то же место
