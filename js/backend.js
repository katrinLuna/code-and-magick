'use strict';

(function () {
  const DOWMLOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  const TIMEOUT = 5000;

  window.backend = {
    load: async function () {
      let checkResponse; 
      let controller = new AbortController();
      let serverResponse = fetch(DOWMLOAD_URL, {
        signal: controller.signal
      })
        .then(response => {
          checkResponse = response;
          return response;
        });
        
      setTimeout(function() {
        if (!checkResponse || !checkResponse.ok) {
          controller.abort(); // на abort событие можно подписаться
          console.error(new Error('Данные не получились за ' + TIMEOUT + 'сек'));
        }
      }, TIMEOUT);

      return serverResponse.then(data => {
        if (checkResponse.ok) {
          return data.json();
        } else {
          throw new Error('Данные не получены из-за из-за ошибки ' + checkResponse.status);
        };        
      });
    },
    save: 2
  }
})();