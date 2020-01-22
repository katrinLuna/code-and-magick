'use strict';

(function () {
  window.util = {
    ENTER_KEY: 'Enter',
    ESC_KEY: 'Escape',
    toogleElementVision: function (element) {
      element.classList.toggle('hidden');
    },
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    onError: function (error) {
      console.error(error instanceof Error ? error : new Error(error));
    },
    coatColorArr: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColorArr: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColorArr: ['#ee4830', '#30a8ee', '#5ce6c0', ' #e848d5', '#e6e848']
  };
})();
