// @ts-nocheck
'use strict';

window.renderStatistics = function (ctx, names, times) {
  // ctx.fillStyle = '#ffffff';
  // ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

};
