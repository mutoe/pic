/**
 * Pic 模块
 */

import PicCreate from '@/pages/pic/Create'

export default [

  {
    path: '/pic/add',
    name: 'PicCreate',
    component: PicCreate,
    meta: {
      retuireAuth: true,
    },
  },

]
