import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from './home'
import AuthRouter from './auth'
import PicRouter from './pic'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [

    // Home 模块
    ...HomeRouter,

    // Auth 模块
    ...AuthRouter,

    // Pic 模块
    ...PicRouter,
  ],

  // 切换到新路由时，页面滚到顶部，或保持原先的滚动位置
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('JWToken')
    if (token && token !== 'null') {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
      next()
    } else {
      Vue.prototype.$message.warn('需要先登录哦~')
      next('/auth/login')
    }
  } else {
    next()
  }
})

export default router
