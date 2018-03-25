import Vue from 'vue'
import ElementUI from 'element-ui'
import router from '@/router'

Vue.use(ElementUI)

Vue.mixin({
  router,
})

Vue.config.productionTip = false
