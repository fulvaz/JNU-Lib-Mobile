let store = {};

export default {
  setBook(book) {
    "use strict";
    return new Promise(function(resolve, reject) {
      store = book
      resolve(store);
    })
  },
  getBook() {
    "use strict";
    return new Promise(function (resolve, reject) {
      resolve(store);
    });
  },
  m: store
}