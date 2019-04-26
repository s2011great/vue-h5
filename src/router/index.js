import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由
const constantRouterMap = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  }
]

export default new Router({
  scrollBehavior: () => {
    return { 
      x: 0,
      y: 0
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})