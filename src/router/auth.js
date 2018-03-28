
/**
 * Auth 模块
 */

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

export default [

  {
    path: '/auth/login',
    alias: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/auth/register',
    alias: '/register',
    name: 'Register',
    component: Register,
  },
]
