import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from './home'
import AuthRouter from './auth'

Vue.use(Router)

export default new Router({
  routes: [

    // Home 模块
    ...HomeRouter,

    // Auth 模块
    ...AuthRouter,
  ],

  // 切换到新路由时，页面滚到顶部，或保持原先的滚动位置
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})
