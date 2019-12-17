// @ts-nocheck
'use strict';

(function () {
  var CLOUD_X = 110;
  var CLOUD_HEIGHT = 270;
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_START_Y = CLOUD_HEIGHT - 30;

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px "PT Mono"';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 135, 20);
    ctx.fillText('Список результатов:', 135, 40);

    var maxTimeValue = Math.max.apply(null, times);

    for (var i = 0; i < names.length; i++) {
      var getBarCoordX = ((CLOUD_X + 20) + ((BAR_WIDTH + BAR_GAP) * i));
      var getBarHeightPx = Math.round(times[i] / maxTimeValue * MAX_BAR_HEIGHT);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var saturationIntension = Math.round(Math.random() * 100);
        ctx.fillStyle = 'hsla(240,' + saturationIntension + '%, 50%, 1)';
      }
      ctx.fillRect(getBarCoordX, (BAR_START_Y - getBarHeightPx), BAR_WIDTH, getBarHeightPx);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], getBarCoordX, (BAR_START_Y + 10));
      ctx.fillText(Math.round(times[i]), getBarCoordX, (BAR_START_Y - (getBarHeightPx + 20)));
    }
  };
})();

