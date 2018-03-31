import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import router from '@/router'

Vue.use(ElementUI)

// 挂载 HTTP 请求
Vue.prototype.$http = axios

Vue.mixin({
  router,
})

Vue.config.productionTip = false
