
/**
 * Auth 模块
 */

import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

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
