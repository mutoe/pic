import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register,
    },
  ],

  // 切换到新路由时，页面滚到顶部，或保持原先的滚动位置
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})
