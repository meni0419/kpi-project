import Vue from 'vue'
import VueRouter from 'vue-router'
import moStruct from '../views/moStruct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'moStruct',
    component: moStruct
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },  
  {
    path: '/indicators',
    name: 'indicators',
    component: () => import('../views/indicators.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/tasks.vue')
  },
  {
    path: '/facts',
    name: 'facts',
    component: () => import('../views/facts.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
