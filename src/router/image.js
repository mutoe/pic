/**
 * Image 模块
 * 核心模块 图片单元
 */

import ImageCreate from '@/views/image/Create'
import ImageRead from '@/views/image/Read'

export default [

  {
    path: '/image/create',
    name: 'ImageCreate',
    component: ImageCreate,
    meta: {
      retuireAuth: true,
    },
  },

  {
    path: '/image/:id',
    name: 'ImageRead',
    component: ImageRead,
  },

]
