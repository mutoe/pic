/**
 * 基础路由
 */

import ImageList from '@/views/ImageList.vue'
import ImageDetail from '@/views/ImageDetail.vue'

export default [
  {
    path: '/images',
    name: 'ImageList',
    component: ImageList,
  },
  {
    path: '/images/:id',
    name: 'ImageDetail',
    component: ImageDetail,
  },
]
