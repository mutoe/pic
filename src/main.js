// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// ElementUI 组件
import EleUI from '@/theme/components'

// 样式入口
import './assets/stylus/index.styl'

// 注册 ElementUI 组件
for (let Component of EleUI.plugins) Vue.use(Component)
for (let key in EleUI.proto) Vue.prototype[key] = EleUI.proto[key]

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
