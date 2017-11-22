'use strict';

// функция определения максимального значения в массиве

var getMax = function (array) {
  var max = -1;

  for (var i = 0; i < array.length; i++) {
    var arrayItem = array[i];
    if (arrayItem > max) {
      max = arrayItem;
    }
  }
  return max;
}

// функция генерации случайного числа в диапазоне
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = getMax(times);

  // гистограмма:
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var initialX = 140;
  var initialY = 250;
  var indent = 90;
  var barWidth = 40;
  var paddingTop = 20;
  var paddingBottom = 10;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomFloat(0.1, 1) + ')';
    }
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], initialX + indent * i, initialY + paddingTop);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - times[i] * step - paddingBottom);
  }
}
