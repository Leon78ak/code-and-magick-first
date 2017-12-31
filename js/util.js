'use strict';

(function () {
  window.util = {
    getMaxElement: function (arr) {
      var max = -1;
      var maxIndex = -1;

      for (var i = 0; i < arr.length; i++) {
        var time = arr[i];
        if (time > max) {
          max = time;
          maxIndex = i;
        }
      }
      return [max, maxIndex];
    },

    generateRandomELement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },

    getUniqueELement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array.splice(randomElementIndex, 1);
    }
  };

})();
