'use strict';

(function () {
  const DOWMLOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  const SUCESS_SERVER_CODE = 200;

  window.backend = {
    load: function () {
      var data = fetch(DOWMLOAD_URL)
        .then(data => data.json());
      return data;
    },
    save: 2
  }
})();