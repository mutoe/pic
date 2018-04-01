/**
 * Image 模块
 * 核心模块 图片单元
 */

import ImageCreate from '@/pages/image/Create'

export default [

  {
    path: '/image/add',
    name: 'ImageCreate',
    component: ImageCreate,
    meta: {
      retuireAuth: true,
    },
  },

]
