'use strict';

(function () {
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
  let setupSimilarListElement = document.querySelector('.setup-similar-list');
  let errorMessElement = document.querySelector('.data-upload-error');
  let reloadUpdateBtn = errorMessElement.querySelector('.error__link--try-again');
  let cashedData;
  let wizardAttributes = {
    coat: setupWizardCoat.style.fill,
    eyes: setupWizardEyes.style.fill
  };

  let addSimilarWizards = async function (isRandom) {
    setupSimilarListElement.innerHTML = '';
    let fragment;

    if (!setupElement.classList.contains('hidden') && isRandom) {
      await window.backend.load()
        .then(
          (info) => {
            cashedData = info;
            fragment = window.similarWizard.generateSimilarWizardsElements(info, true);
          }, 
          error => window.util.onError(error)
          );
    } else {
      let sortedWizardArr = window.similarWizard.sortingSimilarWizards(cashedData, wizardAttributes);
      console.log(wizardAttributes);
      fragment = window.similarWizard.generateSimilarWizardsElements(sortedWizardArr, false);
    }

    setupSimilarListElement.appendChild(fragment);
  };

  let errorUpdateHandler = function () {
    window.util.toogleElementVision(errorMessElement);
          
    reloadUpdateBtn.addEventListener('click', function () {
      window.util.toogleElementVision(errorMessElement);
    }, { once: true });
  };

  setupOpenElement.addEventListener('click', function () {
    window.util.toogleElementVision(setupElement);
    setupElement.style.top = '80px';
    setupElement.style.left = '50%';
    addSimilarWizards(true);
  });

  setupOpenElement.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      window.util.toogleElementVision(setupElement);
      setupElement.style.top = '80px';
      setupElement.style.left = '50%';
      addSimilarWizards(true);
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
    wizardAttributes.coat = newCoatColor;
    addSimilarWizards(false);
  });

  setupWizardEyes.addEventListener('click', function () {
    var newEyesColor = window.util.eyesColorArr[window.util.getRandomNumber(0, window.util.eyesColorArr.length - 1)];
    setupWizardEyes.style.fill = newEyesColor;
    document.querySelector('input[name=eyes-color]').value = newEyesColor;
    wizardAttributes.eyes = newEyesColor;
    addSimilarWizards(false);
  });

  setupWizardFireball.addEventListener('click', function () {
    var newFireballColor = window.util.fireballColorArr[window.util.getRandomNumber(0, window.util.fireballColorArr.length - 1)];
    setupWizardFireball.style.background = newFireballColor;
    document.querySelector('input[name=fireball-color]').value = newFireballColor;
  });


  userNameInputElement.addEventListener('invalid', function (evt) {
    console.log(evt);
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
        () => {
          window.util.toogleElementVision(setupElement);
        },
        error => {
          console.error(error);
          errorUpdateHandler();
        }
      );
    };
  });
})();
