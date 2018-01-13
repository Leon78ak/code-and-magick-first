// colorize-element.js
'use strict';

(function () {
  window.colorize = function (element, color) {
    element.addEventListener('click', handlerColor);
  }
})();
