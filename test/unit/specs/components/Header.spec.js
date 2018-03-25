import Vue from 'vue'
import Header from '@/components/Header'

describe('component Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.logo img')).not.toBeNull()
  })
})
