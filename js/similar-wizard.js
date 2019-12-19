'use strict';

(function () {
  const namesArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const lastnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const setupSimilarListElement = document.querySelector('.setup-similar-list');
  const setupSimilarElement = document.querySelector('.setup-similar');
  const wizardSampleCount = 4;

  let onError = function (error) {
    console.error(error);
  };

  setupSimilarElement.classList.toggle('hidden');

  let getRandomBio = function (data) {
    let wizardsBioArr = [];
    let wizardData = data;

    for (var i = 0; i < wizardSampleCount; i++) {
      let newWizard = wizardData[window.util.getRandomNumber(0, namesArr.length - 1)];
      wizardsBioArr.push(
          {
            name: newWizard.name,
            coatColor: newWizard.colorCoat,
            eyesColor: newWizard.colorEyes
          }
      );
    }

    console.log(wizardsBioArr);

    return wizardsBioArr;
  };

  var generateSimilarWizardsElements = function (data) {
    var fragment = document.createDocumentFragment();   
    setupSimilarListElement.innerHTML = '';
    var wizardsBioArr = getRandomBio(data);

    for (var j = 0; j < wizardsBioArr.length; j++) {
      var newWizard = similarWizardTemplate.cloneNode(true);
      newWizard.querySelector('.setup-similar-label').textContent = wizardsBioArr[j].name;
      newWizard.querySelector('.wizard-coat').setAttribute('fill', wizardsBioArr[j].coatColor);
      newWizard.querySelector('.wizard-eyes').setAttribute('fill', wizardsBioArr[j].eyesColor);
      fragment.appendChild(newWizard);
    }

    setupSimilarListElement.appendChild(fragment);
  };
  
  window.similarWizard = {
    generateSimilarWizardsElements: generateSimilarWizardsElements,
    onError: onError
  };
})();
