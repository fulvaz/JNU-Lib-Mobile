import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'
import Router from 'vue-router'
import AJAX from 'vue-resource'
import Index from './components/Index.vue'
import Result from './components/Result.vue'
import Book from './components/Book.vue'


Vue.use(VueHead)
Vue.use(Router)
Vue.use(AJAX)

var router = new Router();
router.map({
  '/': {
    component: Index
  },
  '/result/:query': {
    component: Result
  },
  '/book': {
    component: Book
  }
})

router.start(App, 'app');