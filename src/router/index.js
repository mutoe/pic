import Vue from 'vue'
import Router from 'vue-router'
import baseRoute from './base'
import authRoute from './auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 入口
    { path: '/', redirect: '/images' },

    ...baseRoute,
    ...authRoute,
  ],
})
