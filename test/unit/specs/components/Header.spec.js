import Vue from 'vue'
import Header from '@/components/Header'
import store from '@/store'

describe('component Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.logo img')).not.toBeNull()
  })
})
