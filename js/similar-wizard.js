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
            colorCoat: newWizard.colorCoat,
            colorEyes: newWizard.colorEyes
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
      console.log(wizardsBioArr[j]);
      newWizard.querySelector('.setup-similar-label').textContent = wizardsBioArr[j].name;
      newWizard.querySelector('.wizard-coat').setAttribute('fill', wizardsBioArr[j].colorCoat);
      newWizard.querySelector('.wizard-eyes').setAttribute('fill', wizardsBioArr[j].colorEyes);
      console.log(newWizard);
      fragment.appendChild(newWizard);
    }

    return fragment;
  };

  let sortingSimilarWizards = function (wizardsArr, matchArgArr) {

    wizardsArr.forEach(function (item, index, arr) {
      item.similarityScore = (item.colorCoat === matchArgArr.coat ? 2 : 0);
      item.similarityScore += item.colorEyes === matchArgArr.eyes ? 1 : 0;
    });
    
    return wizardsArr.sort(function (a, b) {
      return b.similarityScore - a.similarityScore;
    });
  }

  window.similarWizard = {
    generateSimilarWizardsElements: generateSimilarWizardsElements,
    sortingSimilarWizards: sortingSimilarWizards
  };
})();
