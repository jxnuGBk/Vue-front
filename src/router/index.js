import Vue from 'vue'
import Router from 'vue-router'
import button from '../pages/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'button',
      component: button
    }
  ]
})
