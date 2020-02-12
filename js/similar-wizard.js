'use strict';

(function () {
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const setupSimilarElement = document.querySelector('.setup-similar');
  const wizardSampleCount = 4;

  setupSimilarElement.classList.toggle('hidden');

  let getRandomBio = function (data) {
    let wizardsBioArr = [];
    let wizardData = data;

    for (let i = 0; i < wizardSampleCount; i++) {
      let newWizard = wizardData[window.util.getRandomNumber(0, wizardData.length - 1)];
      wizardsBioArr.push(
          {
            name: newWizard.name,
            coatColor: newWizard.colorCoat,
            eyesColor: newWizard.colorEyes
          }
      );
    }

    return wizardsBioArr;
  };

  let generateSimilarWizardsElements = function (data, isRandom) {
    let fragment = document.createDocumentFragment();
    let wizardsBioArr;

    if (isRandom) {
      wizardsBioArr = getRandomBio(data);
    } else {
      wizardsBioArr = data;
    }

    for (let j = 0; j < wizardSampleCount; j++) {
      let newWizard = similarWizardTemplate.cloneNode(true);
      newWizard.querySelector('.setup-similar-label').textContent = wizardsBioArr[j].name;
      newWizard.querySelector('.wizard-coat').setAttribute('fill', wizardsBioArr[j].coatColor);
      newWizard.querySelector('.wizard-eyes').setAttribute('fill', wizardsBioArr[j].eyesColor);
      fragment.appendChild(newWizard);
    }

    return fragment;
  };

  let sortingSimilarWizards = function (wizardsArr, matchArgArr) {
    // начала должны показываться волшебники, у которых совпадает цвет плаща и цвет глаз, 
    // затем волшебники, у которых совпадает только цвет плаща, затем волшебники с таким же цветом глаз
    
  }

  window.similarWizard = {
    generateSimilarWizardsElements: generateSimilarWizardsElements,
    sortingSimilarWizar: sortingSimilarWizards
  };
})();
