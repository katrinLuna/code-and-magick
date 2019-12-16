'use strict';

var setupElement = document.querySelector('.setup');

setupElement.addEventListener('mousedown', function (evt) {
  var startCoordX = evt.clientX;
  var startCoordY = evt.clientY; 

  var onMouseMove = function (evtMove) {
    evtMove.preventDefault();

    var shiftCoordX = evtMove.clientX - startCoordX;
    var shiftCoordY = evtMove.clientY - startCoordY;
    var bodyWidth = document.querySelector('body').offsetWidth / 2;

    startCoordX = evtMove.clientX;
    startCoordY = evtMove.clientY;

    setupElement.style.top = setupElement.offsetTop + shiftCoordY + 'px';
    setupElement.style.left = setupElement.offsetLeft + shiftCoordX + 'px';

  };

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});
