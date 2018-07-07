import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import HomeRouter from './home'
import AuthRouter from './auth'
import ImageRouter from './image'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [

    // Home 模块
    ...HomeRouter,

    // Auth 模块
    ...AuthRouter,

    // Pic 模块
    ...ImageRouter,

    // 没有匹配到路由时返回首页
    { path: '*', redirect: '/' }
  ],

  // 切换到新路由时，页面滚到顶部，或保持原先的滚动位置
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token && token !== 'null') {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  if (to.meta.requireAuth) {
    if (!token || token === 'null') {
      Vue.prototype.$message.warn('需要先登录哦~')
      next('/auth/login')
    }
  }
  next()
})

export default router
