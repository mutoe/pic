/**
 * Image 模块
 * 核心模块 图片单元
 */

import ImageCreate from '@/views/image/Create'

export default [

  {
    path: '/image/create',
    name: 'ImageCreate',
    component: ImageCreate,
    meta: {
      retuireAuth: true,
    },
  },

]
