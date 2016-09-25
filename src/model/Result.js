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
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        // Performs the function "resolve" when this.status is equal to 2xx
        resolve(this.response);
      } else {
        // Performs the function "reject" when this.status is different than 2xx
        reject(this.statusText);
      }
    };
    xhr.onerror = function () {
      reject(this.statusText);
    };
    xhr.send();
  });
  return promise;
};