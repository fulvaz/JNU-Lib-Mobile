import config from '../config/config.js'

function Result() {
  "use strict";

}

Result.prototype.fetch = function(query) {
  var promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', config.searchURL); // TODO fix this!
    xhr.setRequestHeader('Accetpt-Charset', 'utf-8');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = () => {
      "use strict";
      resolve(xhr.responseText);
    };
    xhr.send();
  });
  return promise;
};