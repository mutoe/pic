import Vue from 'vue'
import ElementUI from 'element-ui'
import Home from '@/pages/Home'

Vue.use(ElementUI)

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('.el-row').length).toEqual(5)
    expect(vm.$el.querySelectorAll('.el-col').length).toEqual(16)
  })
})
