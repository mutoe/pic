import Vue from 'vue'
import App from '@/App'
import store from '@/store'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.el-container')).not.toBeNull()
  })
})
