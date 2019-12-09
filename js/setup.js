'use strict';

var setupElement = document.querySelector('.setup');
setupElement.classList.toggle('hidden');

var namesArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarListElement = document.querySelector('.setup-similar-list');
var vizardSampleCount = 4;
var vizardsBioArr = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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


// функцию создания DOM-элемента на основе JS-объекта,
//  функцию заполнения блока DOM-элементами на основе массива JS-объектов
