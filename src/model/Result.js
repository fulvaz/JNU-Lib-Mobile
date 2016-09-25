import config from '../config/config.js'

function Result() {
  "use strict";

}

Result.prototype.fetch = function(query) {
  var promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', config.searchURL + query);
    xhr.setRequestHeader('Accetpt-Charset', 'utf-8');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = () => resolve();
    xhr.send();
  })
}