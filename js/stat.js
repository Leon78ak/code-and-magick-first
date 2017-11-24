'use strict';

// var getMaxElement = function () {

// }

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура!Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeigth = 150;
  var step = histogramHeigth / (max - 0);

  ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' + names[maxIndex], 120, 80);

  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;

  for (var i = 0; i < times.length; i++) {
    var n = -1 * (times[i] * step);
    var rand = 1 + Math.floor(Math.random() * 10);
    var alpha = 0.1 * rand;

    ctx.globalAlpha = alpha;
    ctx.fillStyle = 'rgb(0, 0, 255)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.globalAlpha = 1;
    }

    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, -1 * (times[i] * step));
    ctx.fillStyle = '#000';
    ctx.globalAlpha = 1;
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, 270);
    ctx.fillText(Math.floor(times[i]), initialX + (barWidth + initialX) * i, n + 1);
  }
};
