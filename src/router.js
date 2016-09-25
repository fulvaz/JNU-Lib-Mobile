import Router from 'vue-router'
import Vue from 'vue'
import Index from './components/Index.vue'
import Result from './components/Result.vue'
import Book from './components/Book.vue'


Vue.use(Router)

var router = new Router();
router.map({
  '/': {
    component: Index
  },
  '/result': {
    component: Result
  },
  '/book': {
    component: Book
  }
})

export default router