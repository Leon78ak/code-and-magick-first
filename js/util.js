'use strict';

(function () {
  window.util = {
    generateRandomELement: function(array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },

    getUniqueELement: function(array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array.splice(randomElementIndex, 1);
    }
  };

})();
