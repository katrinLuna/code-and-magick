'use strict';

(function () {
  const DOWMLOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  const SUCESS_SERVER_CODE = 200;

  window.backend = {
    load: function (onLoad, onError) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      
      xhr.addEventListener('load', function () {
        if (xhr.status === SUCESS_SERVER_CODE) {
          onLoad(xhr.response);
        } else {
          onError('Произошла ошибка ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener ('timeout', function () {
        onError('Соединения не произошло за ' + xhr.timeout + 'сек');
      });

      xhr.timeout = 10000;
      
      xhr.open('GET', DOWMLOAD_URL);
      xhr.send();
    },
    save: 2
  }
})();