'use strict';

var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var setupElement = document.querySelector('.setup');
var userNameInputElement = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
var setupFormElement = document.querySelector('.setup-wizard-form');
let subBtn = document.querySelector('.setup-submit');
const setupSimilarListElement = document.querySelector('.setup-similar-list');

let addSimilarWizard = function () {
  setupSimilarListElement.innerHTML = '';

  if (!setupElement.classList.contains('hidden')) {
    window.backend.load()
      .then((info) => {
        var fragment = window.similarWizard.generateSimilarWizardsElements(info);
        setupSimilarListElement.appendChild(fragment);
    },
      error => window.util.onError(error));
  }
};

setupOpenElement.addEventListener('click', function () {
  window.util.toogleElementVision(setupElement);
  setupElement.style.top = '80px';
  setupElement.style.left = '50%';
  addSimilarWizard();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.key === window.util.ENTER_KEY) {
    window.util.toogleElementVision(setupElement);
    setupElement.style.top = '80px';
    setupElement.style.left = '50%';
    addSimilarWizard();
  }
});

setupCloseElement.addEventListener('click', function () {
  window.util.toogleElementVision(setupElement);
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.key === window.util.ENTER_KEY) {
    window.util.toogleElementVision(setupElement);
  }
});

document.addEventListener('keydown', function (evt) {
  if (!setupElement.classList.contains('hidden') && evt.key === window.util.ESC_KEY && evt.target.className != userNameInputElement.className) {
    window.util.toogleElementVision(setupElement);
  } else if (evt.key === window.util.ESC_KEY && evt.target.className === userNameInputElement.className) {
    userNameInputElement.blur();
  }
});

setupWizardCoat.addEventListener('click', function () {
  var newCoatColor = window.util.coatColorArr[window.util.getRandomNumber(0, window.util.coatColorArr.length - 1)];
  setupWizardCoat.style.fill = newCoatColor;
  document.querySelector('input[name=coat-color]').value = newCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var newEyesColor = window.util.eyesColorArr[window.util.getRandomNumber(0, window.util.eyesColorArr.length - 1)];
  setupWizardEyes.style.fill = newEyesColor;
  document.querySelector('input[name=eyes-color]').value = newEyesColor;
});

setupWizardFireball.addEventListener('click', function () {
  var newFireballColor = window.util.fireballColorArr[window.util.getRandomNumber(0, window.util.fireballColorArr.length - 1)];
  setupWizardFireball.style.background = newFireballColor;
  document.querySelector('input[name=fireball-color]').value = newFireballColor;
});


userNameInputElement.addEventListener('invalid', function () {
  if (userNameInputElement.validity.tooShort) {
    userNameInputElement.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInputElement.validity.tooLong) {
    userNameInputElement.setCustomValidity('Имя не должно превышать 25-ти символов');
  }
});

subBtn.addEventListener('click', function (evt) {
   
  if (userNameInputElement.value.length > 2 && userNameInputElement.value.length < 25) {
    evt.preventDefault();
    let formData = new FormData(setupFormElement);
    window.backend.save(formData).then(
      result => console.log(result)
    );
  }; 
  // else {
  //   checkValidity(); преднаписанная функция с проверкой данных на правильность
  // }
});
