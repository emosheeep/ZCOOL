import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import Data from '../components/index/Data.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/h',
      name: 'Data',
      component: Data
    }
  ],
  mode: 'history'
})
