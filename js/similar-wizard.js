'use strict';

(function () {
  var namesArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilarListElement = document.querySelector('.setup-similar-list');
  var wizardSampleCount = 4;
  var wizardsBioArr = [];

  for (var i = 0; i < wizardSampleCount; i++) {
    wizardsBioArr.push(
        {
          name: namesArr[window.util.getRandomNumber(0, namesArr.length - 1)] + ' ' + lastnameArr[window.util.getRandomNumber(0, lastnameArr.length - 1)],
          coatColor: window.util.coatColorArr[window.util.getRandomNumber(0, window.util.coatColorArr.length - 1)],
          eyesColor: window.util.eyesColorArr[window.util.getRandomNumber(0, window.util.eyesColorArr.length - 1)]
        }
    );
  }
  
  var generateSimilarWizardsElements = function () {
    var fragment = document.createDocumentFragment();
  
    for (var j = 0; j < wizardsBioArr.length; j++) {
      var newWizard = similarWizardTemplate.cloneNode(true);
      newWizard.querySelector('.setup-similar-label').textContent = wizardsBioArr[j].name;
      newWizard.querySelector('.wizard-coat').setAttribute('fill', wizardsBioArr[j].coatColor);
      newWizard.querySelector('.wizard-eyes').setAttribute('fill', wizardsBioArr[j].eyesColor);
      fragment.appendChild(newWizard);
    }
  
    setupSimilarListElement.appendChild(fragment);
  };

  generateSimilarWizardsElements();
  
  var setupSimilarElement = document.querySelector('.setup-similar');
  setupSimilarElement.classList.toggle('hidden'); 
})();
