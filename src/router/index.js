import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Test from '../components/Test.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/test', component: Test}
  ],
  mode: 'history'
})
