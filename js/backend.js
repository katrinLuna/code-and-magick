'use strict';

(function () {
  const DOWMLOAD_URL = 'https://js.dump.academy/code-and-magick/daa';
  const SUCESS_SERVER_CODE = 200;

  window.backend = {
    load: function () {
      return fetch(DOWMLOAD_URL)
        .then(data => data.json());
    },
    save: 2
  }
})();