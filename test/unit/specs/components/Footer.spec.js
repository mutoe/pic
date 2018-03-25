import Vue from 'vue'
import Footer from '@/components/Footer'

describe('component Footer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toEqual('this is footer')
  })
})
