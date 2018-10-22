/**
 * 权限路由
 */

import AuthLogin from '@/views/AuthLogin.vue'
import AuthRegister from '@/views/AuthRegister.vue'

export default [
  {
    path: '/auth/login',
    name: 'AuthLogin',
    component: AuthLogin,
  },
  {
    path: '/auth/register',
    name: 'AuthRegister',
    component: AuthRegister,
  },
]
