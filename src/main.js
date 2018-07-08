import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

// ElementUI 组件
import EleUI from 'element-ui'

// 样式入口
import 'element-ui/lib/theme-chalk/index.css'
import './assets/stylus/index.styl'

// 注册 ElementUI 组件
Vue.use(EleUI)

// 挂载 HTTP 请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
