'use strict';

(function () {
  var setupElement = document.querySelector('.setup');

  setupElement.addEventListener('mousedown', function (evt) {
    var startCoordX = evt.clientX;
    var startCoordY = evt.clientY;

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      var shiftCoordX = evtMove.clientX - startCoordX;
      var shiftCoordY = evtMove.clientY - startCoordY;
      var setupElementHeigth = setupElement.offsetHeight;
      var setupElementWidth = setupElement.offsetWidth;
      var bodyWidth = document.querySelector('body').offsetWidth;
      var bodyHeight = document.querySelector('body').offsetHeight;
      var maxPageHeight = Math.max(bodyHeight, window.innerHeight);

      startCoordX = evtMove.clientX;
      startCoordY = evtMove.clientY;

      var newCoordY = setupElement.offsetTop + shiftCoordY;
      var newCoordX = setupElement.offsetLeft + shiftCoordX;

      if ((newCoordY + setupElementHeigth) > maxPageHeight) {
        setupElement.style.top = (maxPageHeight - setupElementHeigth) + 'px';
      } else if (newCoordY < 0) {
        setupElement.style.top = 0;
      } else {
        setupElement.style.top = newCoordY + 'px';
      }

      if ((newCoordX + (setupElementWidth * 0.5)) > bodyWidth) {
        setupElement.style.left = (bodyWidth - (setupElementWidth * 0.5)) + 'px';
      } else if ((newCoordX - (setupElementWidth * 0.5)) < 0) {
        setupElement.style.left = setupElementWidth * 0.5 + 'px';
      } else {
        setupElement.style.left = newCoordX + 'px';
      }
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();

