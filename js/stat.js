'use strict';

(function () {

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура!Вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var max = window.util.getMaxElement(times)[0];
    var maxIndex = window.util.getMaxElement(times)[1];
    var histogramHeigth = 150;
    var step = histogramHeigth / (max - 0);

    ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' + names[maxIndex], 120, 80);

    var barWidth = 40; /* ширина колонки */
    var indent = 50; /* расстояние между колонками */
    var initialX = 120;
    var initialY = 255;
    var initialYNames = initialY + 15;

    for (var i = 0; i < times.length; i++) {
      var alpha = (Math.random().toFixed(1));
      var initialXNewColumn = initialX + (barWidth + indent) * i;
      var barHeight = -1 * (times[i] * step);
      var initialYTimes = initialY - 5 + barHeight;

      ctx.globalAlpha = alpha;
      ctx.fillStyle = 'rgb(0, 0, 255)';

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.globalAlpha = 1;
      }

      ctx.fillRect(initialXNewColumn, initialY, barWidth, barHeight);
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], initialXNewColumn, initialYNames);
      ctx.fillText(Math.floor(times[i]), initialXNewColumn, initialYTimes);
    }
  };

})();

