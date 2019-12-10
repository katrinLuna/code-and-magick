'use strict';

var ENTER_KEY = 'Enter';
var ESC_KEY = 'Escape';

var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var setupElement = document.querySelector('.setup');
var userNameInputElement = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');


var namesArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColorArr = ['#ee4830', '#30a8ee', '#5ce6c0', ' #e848d5', '#e6e848'];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarListElement = document.querySelector('.setup-similar-list');
var vizardSampleCount = 4;
var vizardsBioArr = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var toogleElementVision = function (element) {
  element.classList.toggle('hidden');
};

setupOpenElement.addEventListener('click', function () {
  toogleElementVision(setupElement);
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    toogleElementVision(setupElement);
  }
});

setupCloseElement.addEventListener('click', function () {
  toogleElementVision(setupElement);
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    toogleElementVision(setupElement);
  }
});

document.addEventListener('keydown', function (evt) {
  if (!setupElement.classList.contains('hidden') && evt.key === ESC_KEY && evt.target.className != userNameInputElement.className) {
    toogleElementVision(setupElement);
  } else if (evt.key === ESC_KEY && evt.target.className === userNameInputElement.className) {
    userNameInputElement.blur();
  }
});

for (var i = 0; i < vizardSampleCount; i++) {
  vizardsBioArr.push(
      {
        name: namesArr[getRandomNumber(0, namesArr.length - 1)] + ' ' + lastnameArr[getRandomNumber(0, lastnameArr.length - 1)],
        coatColor: coatColorArr[getRandomNumber(0, coatColorArr.length - 1)],
        eyesColor: eyesColorArr[getRandomNumber(0, eyesColorArr.length - 1)]
      }
  );
}

var generateSimilarWizardsElements = function () {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < vizardsBioArr.length; j++) {
    var newWizard = similarWizardTemplate.cloneNode(true);
    newWizard.querySelector('.setup-similar-label').textContent = vizardsBioArr[j].name;
    newWizard.querySelector('.wizard-coat').setAttribute('fill', vizardsBioArr[j].coatColor);
    newWizard.querySelector('.wizard-eyes').setAttribute('fill', vizardsBioArr[j].eyesColor);
    fragment.appendChild(newWizard);
  }

  setupSimilarListElement.appendChild(fragment);
};

generateSimilarWizardsElements();

var setupSimilarElement = document.querySelector('.setup-similar');
setupSimilarElement.classList.toggle('hidden');

setupWizardCoat.addEventListener('click', function () {
  var newCoatColor = coatColorArr[getRandomNumber(0, coatColorArr.length - 1)];
  setupWizardCoat.style.fill = newCoatColor;
  document.querySelector('input[name=coat-color]').value = newCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var newEyesColor = eyesColorArr[getRandomNumber(0, coatColorArr.length - 1)];
  setupWizardEyes.style.fill = newEyesColor;
  document.querySelector('input[name=eyes-color]').value = newEyesColor;
});

setupWizardFireball.addEventListener('click', function () {
  var newFireballColor = fireballColorArr[getRandomNumber(0, fireballColorArr.length - 1)];
  setupWizardFireball.style.background = newFireballColor;
  document.querySelector('input[name=fireball-color]').value = newFireballColor;
});

