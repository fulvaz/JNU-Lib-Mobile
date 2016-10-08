var DEBUG = true;

var server = DEBUG? 'http://localhost:4567': 'http://www.jnulib.us:4567';

export default {
  searchURL: server + '/search',
  bookURL: server + '/book'
}